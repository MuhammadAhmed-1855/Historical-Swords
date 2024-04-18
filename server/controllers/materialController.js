const materialModel = require('../models/materialModel');

const materialController = {
    
    // Create a new material
    async create(req, res) {
        try {

            // Create a new material
            const newMaterial = new materialModel({
                name: req.body.name,
                description: req.body.description,
            });

            // Save the material
            const savedMaterial = await newMaterial.save();
            res.send(savedMaterial);
        }
        catch (err) {
            res.status(400).send(err.message);
        }
    },

    // Get all materials
    async getAll(req, res) {
        try {
            const materials = await materialModel.find();
            res.send(materials);
        }
        catch (err) {
            res.status(400).send(err.message);
        }
    },

    // Remove material by name
    async remove(req, res) {
        try {
            const removedMaterial = await materialModel.findOneAndDelete({ name: req.params.name });
            res.send(removedMaterial);
        }
        catch (err) {
            res.status(400).send(err.message);
        }
    },

}

module.exports = materialController;