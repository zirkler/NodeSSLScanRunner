/*jshint loopfunc: true */

(function () {
    'use strict';

    var util = require('util');
    var child_process = require('child_process');
    var xml2js = require('xml2js');
    var parser = new xml2js.Parser();
    var fs = require('fs');
    var MongoClient = require('mongodb').MongoClient;

    var filename = "top-7k.txt";
    var domains; // the domains collection
    var scans; // the scans collection


    // connect to mongodb
    MongoClient.connect("mongodb://localhost:27017/czTls", function(err, db) {
        if (!err) {
            // here we are going to save our temporary files
            child_process.execSync('mkdir -p tmp', { encoding: 'utf8' });
            domains = db.collection('domains');
            scans = db.collection('scans');

            getADomainAndStartWork(db);
        }
    });

    var getADomainAndStartWork = function(db) {
        // receive a domain from mongoDB
        var line = 'google.de';
        domains.findOne({wip: false}, {sort: "lastScanDate"}, function(err, document) {
            if (err) console.log(err);

            // mark this domain as WIP
            domains.updateOne(
                { domain : document.domain },
                {
                    $set: { wip: true },
                },
                function(err, results) {
                    // now start the work on this domain
                    workOnDomain(document.domain, db);
                }
            );
        });
    };

    var workOnDomain = function(domain, db) {
        var xmlFileName = util.format('tmp/%s.xml', domain);
        var pemFileName = util.format('tmp/%s.pem', domain);
        var sslScanCmd = util.format('./sslscan --xml=%s %s', xmlFileName, domain);
        console.log("running SSLScan for ", domain);

        try {
            // execute SSLScan
            var d = child_process.execSync(sslScanCmd, { encoding: 'utf8' });

            // read the xml and parse it to json
            var xmlFile = fs.readFileSync(xmlFileName, "utf8");
            parser.parseString(xmlFile, function(err, result) {
                // check if there is usefull data in the xml
                if (result.document.ssltest) {
                    // setup our scan object, we save this to the DB
                    var scan = {
                        source: filename,
                        date: new Date(),
                        domain: domain,
                        ciphers: [],
                    };

                    // collect all the ciphers suites
                    console.log("... found ", result.document.ssltest[0].cipher.length, " ciphers");
                    for (var i = 0; i < result.document.ssltest[0].cipher.length; i++) {
                        var cipher = result.document.ssltest[0].cipher[i].$;
                        scan.ciphers.push(cipher);
                    }

                    // get some more certificate information via OpenSLL
                    var publicKeyAlgorithm = '';
                    var publicKeyLength = 0;

                    // receive certificate
                    var receiveCertCmd = util.format('openssl s_client -showcerts -connect %s:443 </dev/null 2>/dev/null | openssl x509 -outform PEM > %s', domain, pemFileName);
                    child_process.execSync(receiveCertCmd, { encoding: 'utf8' });

                    // view the cert with x509
                    var readCertCmnd = util.format('openssl x509 -text -noout -in %s', pemFileName);
                    var x509Output = child_process.execSync(readCertCmnd, { encoding: 'utf8' });

                    // no wrestle through the x509 output and collect our data (algo & keylength)
                    var algoPattern = 'Public Key Algorithm: ';
                    var algoPos = x509Output.indexOf(algoPattern) + algoPattern.length;
                    var lineEndPos = x509Output.indexOf('\n',algoPos);
                    publicKeyAlgorithm = x509Output.substring(algoPos, lineEndPos);

                    // no get the key size
                    var followingLine = x509Output.substring(lineEndPos, x509Output.indexOf('\n',lineEndPos+1)).trim();
                    var publicKeyKeylengthAsString = followingLine.substring(followingLine.indexOf('(')+1, followingLine.indexOf(' bit)'));
                    publicKeyLength = parseInt(publicKeyKeylengthAsString);

                    console.log('... Public Key:', publicKeyAlgorithm, publicKeyLength);

                    // add cert informations
                    scan.certificate = {
                        altnames: result.document.ssltest[0].certificate[0].altnames[0],
                        expired: result.document.ssltest[0].certificate[0].expired[0],
                        issuer: result.document.ssltest[0].certificate[0].issuer[0],
                        notValidAfter: result.document.ssltest[0].certificate[0]['not-valid-after'][0],
                        notValidBefore: result.document.ssltest[0].certificate[0]['not-valid-before'][0],
                        signatureAlgorithm: result.document.ssltest[0].certificate[0]['signature-algorithm'][0],
                        publicKeyAlgorithm: publicKeyAlgorithm,
                        publicKeyLength: publicKeyLength,
                        subject: result.document.ssltest[0].certificate[0].subject[0],
                    };

                    // insert into DB
                    scans.insert(scan, function(err, doc){
                        if (err) {
                            console.log(err);
                        } else {
                            console.log("... and written into DB", doc.insertedIds);
                        }
                    });

                } else {
                    // this could mean that the domain is not available on :443
                }
            });
        } catch (e) {
            console.log("JSERR at Domain ", domain, e);
        } finally {
            // delete the from SSLScan generated xml file
            child_process.execSync(util.format("rm -f %s", xmlFileName), { encoding: 'utf8' });

            // delete the certificate
            child_process.execSync(util.format("rm -f %s", pemFileName), { encoding: 'utf8' });

            // remove WIP flag and move to next domain
            domains.updateOne(
                { domain : domain },
                {
                    $set: {
                        wip: false,
                        lastScanDate: new Date()
                    },
                },
                function(err, results) {
                    // work on the next document
                    getADomainAndStartWork(db);
                }
            );

        }
    };
}());
