// config/cloudinary.js
const cloudinary = require('cloudinary').v2;

const CLOUD_NAME = 'dxmnof6qn'; // Replace with your Cloudinary cloud name
const API_KEY = '172591178262527'; // Replace with your Cloudinary API key
const API_SECRET = 'adXLCXer9lIRPodx6g-Gek9Xiy0'; // Replace with your Cloudinary API secret

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET,
});

module.exports = cloudinary;