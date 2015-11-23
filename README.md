# A Node.js SSLScan Runner
  - Pulls a single domain from a domain-list-txt
  - Scans the domain with the power of SSLScan
  - SSLScan writes an result XML-File
  - The runner parses the xml and writes the results into mongoDB, (sequentially, after each got scanned)
  - starts over again, till all domains in the domains txt is done

# Setup
  - make sure SSLScan works
  - ``npm install``
  - ``node runner.js ``

## Mac OSX
Follow: https://www.mattandreko.com/2014/12/17/compiling-sslscan-with-sslv2-support-on-osx/
but use this version of openssl: https://www.openssl.org/source/openssl-1.0.2d.tar.gz

## Linux
``make static``

# Run
``node runner.js``
