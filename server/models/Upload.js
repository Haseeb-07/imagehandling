// models/Upload.js (Optional, if you need to store data)
const mongoose = require('mongoose');

const uploadSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
  },
});

const Upload = mongoose.model('Upload', uploadSchema);

module.exports = Upload