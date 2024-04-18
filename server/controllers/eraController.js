const eraModel = require('../models/eraModel');

const eraController = {

    // Create a new era
    async create(req, res) {
        try {

            // Create a new era
            const newEra = new eraModel({
                name: req.body.name,
                description: req.body.description,
                startYear: req.body.startYear,
                endYear: req.body.endYear
            });

            // Save the era
            const savedEra = await newEra.save();
            res.send(savedEra);
        }
        catch (err) {
            res.status(400).send(err.message);
        }
    },

    // Get all eras
    async getAll(req, res) {
        try {
            const eras = await eraModel.find();
            res.send(eras);
        }
        catch (err) {
            res.status(400).send(err.message);
        }
    },

    // Remove era by name
    async remove(req, res) {
        try {
            const removedEra = await eraModel.findOneAndDelete({ name: req.params.name });
            res.send(removedEra);
        }
        catch (err) {
            res.status(400).send(err.message);
        }
    },

}

module.exports = eraController;