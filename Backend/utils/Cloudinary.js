import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "dzanl16re",
  api_key: process.env.CLOUDINARY_API_KEY || "299611321143356",
  api_secret:
    process.env.CLOUDINARY_API_SECRET || "B7SBVgfBNWGmJPoDvZk4BNkLFQM",
});

export default cloudinary;
