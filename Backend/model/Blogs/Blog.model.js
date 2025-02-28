import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    category: { type: String, required: true },
    name: { type: String, required: true },
    author: { type: String, required: true },
    image: { type: String, required: true }, // Cloudinary URL
    description: { type: String, required: true },
    status: { type: String, enum: ["pending", "approved"], default: "pending" }, // Approval status
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    date: { type: String, required: true }, // Reference to the User
  },
  { timestamps: true }
);

export default mongoose.model("Blog", BlogSchema);
