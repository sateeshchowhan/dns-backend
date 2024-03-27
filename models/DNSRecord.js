const mongoose = require('mongoose');

const DNSRecordSchema = new mongoose.Schema({
    domain: String,
    recordType: String,
    value: String,
    ttl: Number
});

module.exports = mongoose.model('DNSRecord', DNSRecordSchema);
