const User = require('../models/User');

// Controller function to add a new user
exports.addUser = async (req, res) => {
    const { name, age } = req.body;
    const image = req.file.path;

    try {
        const newUser = new User({ name, age, image });
        const savedUser = await newUser.save();
        res.json(savedUser);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
