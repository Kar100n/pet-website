const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/../public/login.html');
});

router.post('/', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Assume User model has a method for authentication
        const user = await User.authenticate(username, password);

        if (user) {
            // Create a session for the user
            req.session.userId = user._id;

            res.redirect('/main'); // Redirect to the main page after login
        } else {
            res.status(401).send('Invalid credentials');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
