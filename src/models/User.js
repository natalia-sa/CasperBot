const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    pin: String
})

module.exports = mongoose.model('User', UserSchema);