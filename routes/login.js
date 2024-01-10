const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Check if a user with the provided username exists
        const user = await User.findOne({ username });

        if (user) {
            // Check if the provided password matches the stored hashed password
            if (user.password === password) {
                res.send('Login successful!');
            } else {
                res.status(401).send('Invalid password');
            }
        } else {
            res.status(401).send('User not found');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
