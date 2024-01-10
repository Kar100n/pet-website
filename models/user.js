const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
}, { timestamps: true });

// Adding a static method to the schema to authenticate users
userSchema.statics.authenticate = async function (username, password) {
    const user = await this.findOne({ username, password });

    return user;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
