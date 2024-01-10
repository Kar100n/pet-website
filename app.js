const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection
mongoose.connect('mongodb+srv://tejasshrivastav24:73u71nMWuAeLOObB@cluster2405.e3jkwkp.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, ssl: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(session({ secret: 'AdnMlkceKK', resave: true, saveUninitialized: true })); 

// Routes
const indexRoutes = require('./routes/index');
const contactUsRoutes = require('./routes/contactUs');
const loginRoutes = require('./routes/login');
const signUpRoutes = require('./routes/signUp');
const mainRoutes = require('./routes/main');
const logoutRoutes = require('./routes/logout');

app.use('/', indexRoutes);
app.use('/contact-us', contactUsRoutes);
app.use('/login', loginRoutes);
app.use('/signup', signUpRoutes);
app.use('/main', mainRoutes);
app.use('/logout', logoutRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
