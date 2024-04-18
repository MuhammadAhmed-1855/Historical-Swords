const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');

        if (!token) {
            return res.status(401).send({ error: 'Please authenticate.' });
        }

        const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
        const user = await userModel.findOne({ _id: decoded._id });

        if (!user) {
            throw new Error();
        }

        req.token = token;
        req.user = user;
        next();
    } catch (error) {
        res.status(401).send({ error: 'Please authenticate.' });
    }
};

module.exports = auth;
