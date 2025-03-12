import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    status: { type: String, enum: ["pending", "approved"], default: "pending" },
  },
  { timestamps: true }
);

const BlogSchema = new mongoose.Schema(
  {
    category: { type: String, required: true },
    name: { type: String, required: true },
    authorName: { type: String, required: true },
    coAuthorName: { type: String },
    blogImage: { type: String, required: true }, // Cloudinary URL for blog image
    authorImage: { type: String, required: true }, // Cloudinary URL for author image
    coAuthorImage: { type: String }, // Optional Cloudinary URL for co-author image
    description: { type: String, required: true },
    status: { type: String, enum: ["pending", "approved"], default: "pending" }, // Approval status
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    comments: [commentSchema],
    isTrending: { type: Boolean,  default:false},

    date: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Blog", BlogSchema);
