const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        username: { type: String, unique: true, required: true },
        password: { type: String, required: true },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: string, required},
        createdDate: { type: Date, default: Date.now }
    }
)

UserSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', UserSchema)