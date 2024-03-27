const express = require('express');
const router = express.Router();
const DNSRecord = require('../models/DNSRecord');

// Create DNS record
router.post('/create', async (req, res) => {
    try {
        const dnsRecord = new DNSRecord(req.body);
        await dnsRecord.save();
        res.status(201).json(dnsRecord);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Fetch all DNS records
router.get('/', async (req, res) => {
    try {
        const dnsRecords = await DNSRecord.find();
        res.json(dnsRecords);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete DNS record
router.delete('/:id', async (req, res) => {
    try {
        await DNSRecord.findByIdAndDelete(req.params.id);
        res.json({ message: 'DNS record deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;