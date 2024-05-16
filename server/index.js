const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const User = require('./models/User'); // Import the User model

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const db = 'mongodb+srv://haseeb:haseeb123@cluster0.m4ivpbe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Multer configuration for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

// Route to test the server
app.get('/', (req, res) => {
    res.send('Server is running!');
});

// Route to add a new user
app.post('/api/users', upload.single('image'), async (req, res) => {
    const { name, age } = req.body;
    const image = req.file.path;

    try {
        const newUser = new User({ name, age, image });
        const savedUser = await newUser.save();
        res.json(savedUser);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Route to get all users
app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
