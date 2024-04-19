const mongoose = require('mongoose');

const swordSchema = new mongoose.Schema({
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
    image: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    manufacturedYear: {
        type: String,
        required: true,
        trim: true,
        minlength: 4
    },
    eraName: [{
        type: String,
        required: true,
        trim: true,
        minlength: 3
    }],
    typeName: [{
        type: String,
        required: true,
        trim: true,
        minlength: 3
    }],
    materialName: [{
        type: String,
        required: true,
        trim: true,
        minlength: 3
    }],
    makerName: [{
        type: String,
        required: true,
        trim: true,
        minlength: 3
    }],
    eraIDs: [{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Era'
    }],
    typeIDs: [{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Type'
    }],
    materialIDs: [{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Material'
    }],
    makerIDs: [{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Maker'
    }],
}, {
    timestamps: true,
});

const Sword = mongoose.model('Sword', swordSchema);

module.exports = Sword;
