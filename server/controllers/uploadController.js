// controllers/uploadController.js
const cloudinary = require('../config/cloudinary');

const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded.' });
    }

    // Upload image to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);

    // Create a new upload document (optional)
    // Replace with your logic if you need to save details in the database
    // const newUpload = new Upload({
    //   imageUrl: result.secure_url,
    // });
    //
    // await newUpload.save();

    // Return Cloudinary URL
    res.json({ imageUrl: result.secure_url });
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).json({ message: 'Error uploading image.' });
  }
};

module.exports = { uploadImage };