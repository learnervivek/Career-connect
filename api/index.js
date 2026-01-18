import app from "../backend/app.js";
import cloudinary from "cloudinary";

// Configure Cloudinary for serverless
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default app;
