const swordModel = require('../models/swordModel');

const swordController = {
    // Create a new sword
    async create(req, res) {
        try {
            // Extracting data from request body
            const { name, description, image, manufacturedYear, eraIDs, typeIDs, materialIDs, makerIDs } = req.body;
    
            // Creating a new sword instance
            const newSword = new swordModel({
                name,
                description,
                image,
                manufacturedYear,
                eraIDs,
                typeIDs,
                materialIDs,
                makerIDs
            });
    
            // Saving the new sword to the database
            const savedSword = await newSword.save();
    
            res.status(201).json(savedSword); // Respond with the created sword
        } catch (error) {
            res.status(400).json({ message: error.message }); // Respond with any error that occurred
        }
    },    

    // Get all swords
    async getAll(req, res) {
        try {
            const swords = await swordModel.find();
            res.send(swords);
        }
        catch (err) {
            res.status(400).send(err.message);
        }
    },

    // Remove sword by name
    async remove(req, res) {
        try {
            const removedSword = await swordModel.findOneAndDelete({ _id: req.params.id });
            res.send(removedSword);
        }
        catch (err) {
            res.status(400).send(err.message);
        }
    },

}

module.exports = swordController;
