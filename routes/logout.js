const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // Destroy the session to log out the user
    req.session.destroy((err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.redirect('/'); // Redirect to the home page after logout
        }
    });
});

module.exports = router;
