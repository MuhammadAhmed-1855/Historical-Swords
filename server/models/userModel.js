const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 6
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    role: {
        type: String,
        required: true,
        default: 'viewer',
        enum: ['viewer', 'editor']
    },
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;