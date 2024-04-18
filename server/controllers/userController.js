const userModel = require('../models/userModel')

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userController = {
    
    // Create a new user
    async register(req, res) {
        try {
        // Check if the user already exists
        const user = await userModel.findOne({
            email: req.body.email
        });
        if (user) {
            return res.status(400).send('User already exists');
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        // Create a new user
        const newUser = new userModel({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        });

        // Save the user
        const savedUser = await newUser.save();
        res.send(savedUser);
        }
        catch (err) {
            res.status(400).send(err.message);
        }
    },

    // Login
    async login(req, res) {
        try {
            // Check if the user exists
            const user = await userModel.findOne({
                email: req.body.email
            });
            if (!user) {
                return res.status(400).send('User does not exist');
            }

            // Check if the password is correct
            const validPassword = await bcrypt.compare(req.body.password, user.password);
            if (!validPassword) {
                return res.status(400).send('Invalid password');
            }

            // Create and assign a token
            const token = jwt.sign({
                _id: user._id
            }, process.env.TOKEN_SECRET);

            res.header('auth-token', token).send(token);
        }
        catch (err) {
            res.status(400).send(err.message);
        }
    },

    // Logout
    async logout(req, res) {
        try {
            res.header('auth-token', '').send('Logged out');
        }
        catch (err) {
            res.status(400).send(err.message);
        }
    }
};

module.exports = userController;