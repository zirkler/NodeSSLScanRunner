# A Node.js SSLScan Runner
- Pulls a domain from a mongoDB collection
- Scans the domain with the power of SSLScan (https://github.com/rbsec/sslscan)
- The runner takes the results from SSLScan, does some more OpenSSL stuff and writes the result into the database
- and all this for every domain in the domains collection.

## Build SSLScan on Linux
- `cd sslscan`
- `make static` this will also download and install openssl in the /sslscan directory
- make sure SSLScan works inside the sslscan directory

## Build SSLScan on OSX
- `cd sslscan`
- Follow this instructions: https://www.mattandreko.com/2014/12/17/compiling-sslscan-with-sslv2-support-on-osx/
but use this version of openssl: `https://www.openssl.org/source/openssl-1.0.2d.tar.gz`

## The Node stuff
- ``npm install``
- ``node runner.js ``

## Import domains
Before we can run SSLScan, we need some domains, which we want to scan, in our database. Follow this commands for importing the alexa top 1 million websites (November 2015).
- `cd domains`
- `cat domains-alexa-1.json domains-alexa-2.json domains-alexa-3.json domains-alexa-4.json  domains-alexa-5.json >> concatinated.json`
- `mongoimport --db tls --collection domains --file concatinated.json`

## Run
``node runner.js``


## Helpful stuff
- ``openssl ciphers -v`` returns a list of all supported ciphers, make sure you are using a up-to-date version of OpenSSL.
