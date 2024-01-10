const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/../public/signup.html');
});

router.post('/', async (req, res) => {
    try {
        const { username, name, email, password } = req.body;

        // For simplicity, we're assuming unique email addresses for each user
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).send('Email address is already in use');
        }

        // Create a new user
        const newUser = new User({ username, name, email, password });
        await newUser.save();

        res.send('Account created successfully!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
