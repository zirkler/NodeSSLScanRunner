/*jshint loopfunc: true */

(function () {
    'use strict';

    var fs = require('fs');
    var tld = require('tldjs');
    var util = require('util');
    var xml2js = require('xml2js');
    var colors = require('colors');
    var mongoose = require('mongoose');
    var cipherInfo = require('./mapCiphers');
    var child_process = require('child_process');
    var exec = require('child_process').exec;
    var MongoClient = require('mongodb').MongoClient;
    var spawn = require('child-process-promise').spawn;

    var Scan = require('./schemas/scanSchema');
    var Domain = require('./schemas/domainSchema');

    var parser = new xml2js.Parser();
    var wipMap = {};

    // here we are going to save our temporary files
    child_process.execSync('mkdir -p tmp', { encoding: 'utf8' });

    mongoose.connect('mongodb://localhost:27017/tls', function(err) {
        if (err) throw err;

        // start the work
        for (var i = 0; i < 50; i++) {
            setTimeout(function() {
                workOnNextDomain();
            }, 1000*i);
        }
    });

    var workOnNextDomain = function() {
        // receive a domain from mongoDB
        console.log(Date(), 'looking for next domain...'.yellow);

        // find a domain on which no one is working
        Domain.findOne({wip: false}).sort({lastScanDate: 1}).then(function(domain) {
            if (domain in wipMap) {
                // someone is already working on this domain, take another one
                console.log(Date(), domain.domain, 'somone already works on this domain, take another one'.rainbow);
                workOnNextDomain();
            } else {
                console.log(Date(), domain.domain, '✔︎'.green, 'domain received');

                // no-one is working on this domain, mark it as wip and start the work
                wipMap[domain.domain] = true;
                domain.wip = true;
                domain.lastScanDate = Date();
                domain.save().then(function(rDomain){
                    console.log(Date(), domain.domain, '✔︎'.green, 'WIP flag set');

                    // start the actual scanning
                    scan(domain);
                });
            }
        });
    };

    var scan = function(domain) {
        var scan = new Scan();
        var xmlFileName = util.format(__dirname+'/tmp/%s.xml', domain.domain);

        // setup the scan object
        scan.domain = domain.domain;
        scan.tld = tld.getPublicSuffix(scan.domain);
        scan.sources = domain.sources;
        scan.scanDate = new Date();

        // execute SSLScan
        console.log(Date(), domain.domain, '-> starting SSLScan'.yellow);
        spawn('./sslscan/sslscan', ['--no-colour', '--no-heartbleed', util.format('--xml=%s', xmlFileName), domain.domain], {capture: [ 'stdout', 'stderr' ], encoding: 'utf8'})
        .then(function (result) {
            if (result.stderr.length > 0) {
                // SSLScan executed with errors errors
                console.log(Date(), domain.domain, 'X SSLScan had problems on this url:'.red, result.stderr);
                scan.scanError = true;
                scan.scanErrorMessage = result.stderr;
                insertScan(scan);
                workOnNextDomain();
            } else {
                // SSLScan executed without errors
                try {
                    // read the xml and parse it to json
                    var xmlFile = fs.readFileSync(xmlFileName, 'utf8');
                    parser.parseString(xmlFile, function(err, result) {
                        if (err) console.log(Date(), 'parseErr'.red, err);
                        if (!result.document.ssltest) return console.log('parseErr'.red, 'result.document.ssltest is undefined');

                        // get some more certificate information via OpenSLL
                        var publicKeyAlgorithm = '';
                        var publicKeyLength = 0;

                        var getCertCmd = 'openssl s_client -connect ' + domain.domain + ':443 </dev/null 2>/dev/null | openssl x509 -text -noout';
                        console.log(Date(), domain.domain, '->'.yellow, 'executing', getCertCmd);
                        exec(getCertCmd, function(error, stdout, stderr) {
                            if (error || stderr.length > 0) {
                                return console.log("CERT READING ERR".red, error, stderr);
                                // TODO: mark fail for this scan
                            } else {
                                var x509Output = stdout;

                                // no wrestle through the x509 output and collect our data (algo & keylength)
                                var algoPattern = 'Public Key Algorithm: ';
                                var algoPos = x509Output.indexOf(algoPattern) + algoPattern.length;
                                var lineEndPos = x509Output.indexOf('\n',algoPos);
                                publicKeyAlgorithm = x509Output.substring(algoPos, lineEndPos);

                                // no get the key size
                                var followingLine = x509Output.substring(lineEndPos, x509Output.indexOf('\n',lineEndPos+1)).trim();
                                var publicKeyKeylengthAsString = followingLine.substring(followingLine.indexOf('(')+1, followingLine.indexOf(' bit)'));
                                publicKeyLength = parseInt(publicKeyKeylengthAsString);

                                console.log(Date(), domain.domain, '✔︎'.green, 'Public Key:', publicKeyAlgorithm, publicKeyLength);

                                // add cert informations
                                scan.certificate = {};
                                if (result.document.ssltest[0].certificate) {
                                    if (result.document.ssltest[0].certificate[0].altnames)
                                        scan.certificate.altnames = result.document.ssltest[0].certificate[0].altnames[0];

                                    if (result.document.ssltest[0].certificate[0].expired)
                                        scan.certificate.expired = result.document.ssltest[0].certificate[0].expired[0];

                                    if (result.document.ssltest[0].certificate[0].issuer)
                                        scan.certificate.issuer = result.document.ssltest[0].certificate[0].issuer[0];

                                    if (result.document.ssltest[0].certificate[0]['self-signed'])
                                        scan.certificate.selfSigned = result.document.ssltest[0].certificate[0]['self-signed'][0];

                                    if (result.document.ssltest[0].certificate[0]['not-valid-after'])
                                        scan.certificate.notValidAfter = result.document.ssltest[0].certificate[0]['not-valid-after'][0];

                                    if (result.document.ssltest[0].certificate[0]['not-valid-before'])
                                        scan.certificate.notValidBefore = result.document.ssltest[0].certificate[0]['not-valid-before'][0];

                                    if (result.document.ssltest[0].certificate[0]['signature-algorithm'])
                                        scan.certificate.signatureAlgorithm = result.document.ssltest[0].certificate[0]['signature-algorithm'][0];

                                    if (result.document.ssltest[0].certificate[0].subject)
                                        scan.certificate.subject = result.document.ssltest[0].certificate[0].subject[0];

                                    scan.certificate.publicKeyAlgorithm = publicKeyAlgorithm;
                                    scan.certificate.publicKeyLength    = publicKeyLength;
                                }

                                // collect all the ciphers suites
                                scan.ciphers = [];

                                // check if there actually is a  ciphers array, some server provide no ciphers
                                if (typeof result.document.ssltest[0].cipher !== 'undefined') {
                                    for (var i = 0; i < result.document.ssltest[0].cipher.length; i++) {
                                        var cipher = {};
                                        cipher.cipher      = result.document.ssltest[0].cipher[i].$.cipher;
                                        cipher.protocol    = result.document.ssltest[0].cipher[i].$.sslversion;
                                        cipher.status      = result.document.ssltest[0].cipher[i].$.status;
                                        cipher.curve       = result.document.ssltest[0].cipher[i].$.curve;
                                        cipher.bits        = parseInt(result.document.ssltest[0].cipher[i].$.bits);

                                        // read key exchange strenght
                                        if (result.document.ssltest[0].cipher[i].$.ecdhebits) {
                                            // when ECDH is used as key exchange
                                            cipher.kxStrenght = parseInt(result.document.ssltest[0].cipher[i].$.ecdhebits);
                                        } else if (result.document.ssltest[0].cipher[i].$.dhebits) {
                                            // when DHE is used as key exchange
                                            cipher.kxStrenght = parseInt(result.document.ssltest[0].cipher[i].$.dhebits);
                                        } else {
                                            // when neither ECDH nor DHE is used, its RSA and this means
                                            // the client use the servers public key for key exchange
                                            cipher.kxStrenght = scan.certificate.publicKeyLength;
                                        }

                                        // get some additional cipher info (actualy its informations from the tls specs)
                                        var additionalCipherInfo = cipherInfo.getCipherInfos(cipher.cipher);
                                        if (additionalCipherInfo) {
                                            cipher.kx = additionalCipherInfo.kx;
                                            cipher.au = additionalCipherInfo.au;
                                            cipher.enc = additionalCipherInfo.enc;
                                            cipher.mac = additionalCipherInfo.mac;
                                            cipher.export = additionalCipherInfo.export;
                                        }

                                        // push the cipher to the hosts ciphers array
                                        scan.ciphers.push(cipher);
                                    }
                                }

                                console.log(Date(), domain.domain, '✔︎'.green, 'ciphers found:', scan.ciphers.length);

                                // insert the new scan into DB
                                scan.scanError = false;
                                insertScan(scan);
                            }
                        });
                    });
                } catch (e) {
                    console.log(Date(), domain.domain, 'X JSERR', JSON.stringify(e).substring(0,100));
                } finally {
                    // delete the from SSLScan generated xml file
                    child_process.execSync(util.format('rm -f %s', xmlFileName), { encoding: 'utf8' });

                    // remove WIP flag and move to next domain
                    delete wipMap[scan.domain];
                    scan.wip = false;
                    scan.save();

                    // work on the next document
                    workOnNextDomain();
                }
            }
        });
    };

    // TODO: move this to a mongoose schema method
    var insertScan = function(scan, cb) {
        scan.save(function (err, rScan) {
            if (err) return console.log(Date(), scan.domain, 'X'.red, 'Error while inserting the new Scan', err);
            console.log(Date(), scan.domain, '✔︎'.green, 'Scan inserted in DB', rScan.id);
        });
    };
}());
