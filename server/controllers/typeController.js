const typeModel = require('../models/typeModel');

const typeController = {

    // Create a new type
    async create(req, res) {
        try {

            // Create a new type
            const newType = new typeModel({
                name: req.body.name,
                description: req.body.description,
            });

            // Save the type
            const savedType = await newType.save();
            res.send(savedType);
        }
        catch (err) {
            res.status(400).send(err.message);
        }
    },

    // Get all types
    async getAll(req, res) {
        try {
            const types = await typeModel.find();
            res.send(types);
        }
        catch (err) {
            res.status(400).send(err.message);
        }
    },

    // Remove type by name
    async remove(req, res) {
        try {
            const removedType = await typeModel.findOneAndDelete({ name: req.params.name });
            res.send(removedType);
        }
        catch (err) {
            res.status(400).send(err.message);
        }
    },

}

module.exports = typeController;