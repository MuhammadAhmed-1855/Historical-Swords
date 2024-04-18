const mongoose = require('mongoose');

const eraSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    description: {
        type: String,
        required: true,
        trim: true,
        minlength: 6
    },
    startYear: {
        type: Number,
        required: true,
        min: 0
    },
    endYear: {
        type: Number,
        required: true,
        min: 0
    },
}, {
    timestamps: true,
});

const Era = mongoose.model('Era', eraSchema);

module.exports = Era;