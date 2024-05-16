const express = require('express');
const multer = require('multer');
const { addUser } = require('../controllers/userController');

const router = express.Router();

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

// Route to add a new user
router.post('/users', upload.single('image'), addUser);

module.exports = router;
