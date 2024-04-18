const makerModel = require('../models/makerModel');

const makerController = {
    
    // Create a new maker
    async create(req, res) {
        try {

            // Create a new maker
            const newMaker = new makerModel({
                name: req.body.name,
                description: req.body.description,
            });

            // Save the maker
            const savedMaker = await newMaker.save();
            res.send(savedMaker);
        }
        catch (err) {
            res.status(400).send(err.message);
        }
    },

    // Get all makers
    async getAll(req, res) {
        try {
            const makers = await makerModel.find();
            res.send(makers);
        }
        catch (err) {
            res.status(400).send(err.message);
        }
    },

    // Remove maker by name
    async remove(req, res) {
        try {
            const removedMaker = await makerModel.findOneAndDelete({ name: req.params.name });
            res.send(removedMaker);
        }
        catch (err) {
            res.status(400).send(err.message);
        }
    },

}

module.exports = makerController;