const mongoose = require('mongoose');

const makerSchema = new mongoose.Schema({
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
}, {
    timestamps: true,
});

const Maker = mongoose.model('Maker', makerSchema);

module.exports = Maker;