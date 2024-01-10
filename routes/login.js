const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/../public/login.html');
});

router.post('/', async (req, res) => {
    try {
        const { username, password } = req.body;
        // You would typically validate the username and password against the database here
        // For simplicity, let's assume a user with username "admin" and password "password" is valid
        if (username === 'admin' && password === 'password') {
            res.send('Login successful!');
        } else {
            res.status(401).send('Invalid credentials');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
