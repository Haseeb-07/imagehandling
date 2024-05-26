// routes/upload.js
const express = require('express');
const router = express.Router();
const upload = require('../config/multer');
const { uploadImage } = require('../controllers/uploadController'); // Import the uploadImage function

router.post('/upload', upload.single('image'), uploadImage);

module.exports = router;