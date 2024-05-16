const User = require('../models/User');

// Multer is not necessary for this function, but you can include it for consistency
const multer = require('multer');

// Controller function to get all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
