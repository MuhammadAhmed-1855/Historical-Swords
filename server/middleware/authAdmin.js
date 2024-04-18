const userModel = require('../models/userModel')

const authAdmin = async (req, res, next) =>{
    try {

        if(req.user.role === "viewer") {
            return res.status(400).json({msg: "Admin resources access denied"})
        }

        next()

    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}

module.exports = authAdmin