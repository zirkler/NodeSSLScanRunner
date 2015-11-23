/*jshint loopfunc: true */

(function () {
    'use strict';

    var util = require('util');
    var child_process = require('child_process');
    var fs = require('fs');
    var MongoClient = require('mongodb').MongoClient;

    var filename = "top-7k.txt";

    // connect to mongodb
    MongoClient.connect("mongodb://localhost:27017/czTls", function(err, db) {
        if (!err) {

            var insertCounter = 0;
            var lineCounter = 0;

            var fd = fs.openSync(filename, 'r');
            var bufferSize = 1024;
            var buffer = new Buffer(bufferSize);

            // read line per line, synchronsously
            var leftOver = '';
            var read, line, idxStart, idx;
            while ((read = fs.readSync(fd, buffer, 0, bufferSize, null)) !== 0) {
                leftOver += buffer.toString('utf8', 0, read);
                idxStart = 0;
                while ((idx = leftOver.indexOf("\n", idxStart)) !== -1) {
                    // get the line
                    line = leftOver.substring(idxStart, idx);
                    lineCounter++;

                    console.log(line);
                    db.collection('domains').updateOne(
                        { domain : line },
                        {
                            $set: {
                                domain: line,
                            },
                            $addToSet: { sources: filename },
                            $setOnInsert: {
                                lastScanDate : new Date("1800-01-01"),
                                inserted: new Date(),
                                wip: false,
                            }
                        },
                        { upsert: true },
                        function(err, results) {
                            if (err) console.log(err);
                            insertCounter++;
                            console.log("insert counter:", insertCounter);
                            if (insertCounter === lineCounter) {
                                // now we are done
                                // close DB connection
                                db.close();
                            }

                        }
                    );

                    idxStart = idx + 1;
                }
                leftOver = leftOver.substring(idxStart);
            }
        }
    });
}());
