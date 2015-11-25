(function () {
    'use strict';

    var mongoose = require('mongoose');

    // create mongodb schema for our news
    var domainSchema = new mongoose.Schema({
        domain: String,
        lastScanDate: Date,
        wip: Boolean
    }, {
        toObject: { virtuals: true },
        toJSON: { virtuals: true }
    });

    module.exports = mongoose.model('domain', domainSchema);
}());
