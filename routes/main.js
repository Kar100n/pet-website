const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('User ID from session:', req.session.userId);

    // Check if the user is authenticated (has an active session)
    if (req.session.userId) {
        console.log('User is authenticated. Serving main.html');
        const filePath = path.join(__dirname, '../public/main.html');
        res.sendFile(filePath);
    } else {
        console.log('User is not authenticated. Redirecting to /login');
        res.redirect('/login'); // Redirect to login if not authenticated
    }
});

module.exports = router;
