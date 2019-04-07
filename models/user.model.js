const mongoose = require('./../db');

const UserSchema = new mongoose.Schema({
        username: { type: String, unique: true, required: true },
        password: { type: String, required: true },
        email: { type: String, required: true},
        timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);