# A Node.js SSLScan Runner
  - Pulls a domain from a mongoDB collection
  - Scans the domain with the power of SSLScan
  - SSLScan writes an result XML-File
  - The runner parses the xml and writes the results into mongoDB, (sequentially, after each got scanned)
  - starts over again, till all domains in the domains txt is done

# Setup

## Build SSLScan on Linux
  - `cd sslscan`
  - `make static` this will also download and install openssl in the /sslscan directory
  - make sure SSLScan works inside the sslscan directory

## Build SSLScan on OSX
  - `cd sslscan`
  - OpenSSL for SSLScan on MacOSX Follow: https://www.mattandreko.com/2014/12/17/compiling-sslscan-with-sslv2-support-on-osx/
  but use this version of openssl: `https://www.openssl.org/source/openssl-1.0.2d.tar.gz`

## The Node stuff
  - ``npm install``
  - ``node runner.js ``



# Run
``node runner.js``
