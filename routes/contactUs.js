const express = require('express');
const router = express.Router();
const ContactUs = require('../models/contactUs');

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/contact-us.html');
});

router.post('/', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const newContactUsEntry = new ContactUs({ name, email, message });
        await newContactUsEntry.save();
        res.send('Form submitted successfully!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
