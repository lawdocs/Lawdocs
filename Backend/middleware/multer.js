import multer from "multer";
import path from "path";

// Define storage settings (store files in memory)
const storage = multer.memoryStorage();

// Filter for images only
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif/;
  const extname = allowedTypes.test(
    path.extname(file.originalname).toLowerCase()
  );
  const mimetype = allowedTypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb(new Error("Only images (JPEG, JPG, PNG, GIF) are allowed!"));
  }
};

// Initialize Multer
const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
}).fields([
  { name: "blogImage", maxCount: 1 },
  { name: "authorImage", maxCount: 1 },
  { name: "coAuthorImage", maxCount: 1 },
]);

export default upload;
