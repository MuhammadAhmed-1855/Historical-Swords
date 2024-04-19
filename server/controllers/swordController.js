const swordModel = require('../models/swordModel');
const typeModel = require('../models/typeModel');
const eraModel = require('../models/eraModel');
const makerModel = require('../models/makerModel');
const materialModel = require('../models/materialModel');

const swordController = {

    // Create a new sword
    async create(req, res) {
        try {
            // Extracting data from request body
            const { name, description, image, manufacturedYear, eras, types, materials, makers } = req.body;
    
            // Function to find the ObjectId of an entity based on its name
            const findEntityIds = async (modelName, entityNames) => {
                const entityIds = [];
                for (const entityName of entityNames) {
                    const entity = await modelName.findOne({ name: entityName });
                    if (!entity) {
                        throw new Error(`Invalid ${modelName.modelName} name: ${entityName}`);
                    }
                    entityIds.push(entity._id);
                }
                return entityIds;
            };
    
            // Finding the ObjectIds of the associated entities
            const eraIDs = await findEntityIds(eraModel, eras);
            const typeIDs = await findEntityIds(typeModel, types);
            const materialIDs = await findEntityIds(materialModel, materials);
            const makerIDs = await findEntityIds(makerModel, makers);
    
            // Creating a new sword instance
            const newSword = new Sword({
                name,
                description,
                image,
                manufacturedYear,
                eras,
                types,
                materials,
                makers,
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
            const removedSword = await swordModel.findOneAndDelete({ name: req.params.name });
            res.send(removedSword);
        }
        catch (err) {
            res.status(400).send(err.message);
        }
    },

}

module.exports = swordController;