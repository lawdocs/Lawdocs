// import { v2 as cloudinary } from "cloudinary";
import streamifier from "streamifier"; // Import streamifier
import Blog from "../model/Blogs/Blog.model.js";
import User from "../model/user.model.js";
import cloudinary from "../utils/Cloudinary.js";

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

const uploadToCloudinary = (buffer) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: "blogs" }, // Cloudinary folder (optional)
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    );
    streamifier.createReadStream(buffer).pipe(stream);
  });
};

export const CreateBlog = async (req, res) => {
  try {
    const { category, name, author, description, createdBy, date } = req.body;
    console.log("uu", createdBy);
    console.log("catt", category);
    // const userId=req.auth.userId
    const userId = createdBy;

    const user = await User.findOne({ clerkId: userId });
    if (!user) {
      return res
        .status(404)
        .json({ error: "User not found. Please register first." });
    }

    if (!req.file) return res.status(400).json({ error: "Image is required" });

    const result = await uploadToCloudinary(req.file.buffer);

    const blog = new Blog({
      category,
      name,
      author,
      description,
      image: result.secure_url,
      createdBy: user._id, // Store the user's ObjectId
      date,
      status: "pending", // Set status as pending for admin approval
    });

    await blog.save();
    res.status(201).json({ message: "Blog submitted for approval!", blog });
  } catch (err) {
    console.log("errro ", err);
  }
};

export const getPendingBlogs = async (req, res) => {
  try {
    const pendingBlogs = await Blog.find({ status: "pending" });
    res
      .status(200)
      .json({ message: "Pending blogs fetched successfully", pendingBlogs });
  } catch (error) {
    res.status(500).json({ message: "Error fetching pending blogs", error });
  }
};
export const getApprovedBlogs = async (req, res) => {
  try {
    const approvedBlogs = await Blog.find({ status: "approved" });
    res
      .status(200)
      .json({ message: "Pending blogs fetched successfully", approvedBlogs });
  } catch (error) {
    res.status(500).json({ message: "Error fetching pending blogs", error });
  }
};
export const getAllBlogs = async (req, res) => {
  try {
    const   Blogs = await Blog.find();
    res
      .status(200)
      .json({ message: "Pending blogs fetched successfully", Blogs });
  } catch (error) {
    res.status(500).json({ message: "Error fetching pending blogs", error });
  }
};
export const getBlog = async (req, res) => {
  try {
        const { id } = req.params;

    const blog = await Blog.findById(id);
    res
      .status(200)
      .json({ message: "Pending blogs fetched successfully", blog });
  } catch (error) {
    res.status(500).json({ message: "Error fetching pending blogs", error });
  }
};

export const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, category, author, image } = req.body;

    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { name, category, author, image },
      { new: true }
    );

    if (!updatedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json({ message: "Blog updated successfully", updatedBlog });
  } catch (error) {
    res.status(500).json({ message: "Error updating blog", error });
  }
};

// Delete a blog
export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBlog = await Blog.findByIdAndDelete(id);

    if (!deletedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting blog", error });
  }
};

export const updateBlogStatus=async (req,res)=>{
      const { status } = req.body;

  

  try {
     const { id } = req.params;
     console.log("id",id);
     const updatedBlog = await Blog.findByIdAndUpdate(
       id,
       { status },
       { new: true }
     );
     console.log("updated",updateBlog);

     if (!updatedBlog) {
       return res.status(404).json({ message: "Blog not found" });
     }

     res
       .status(200)
       .json({ message: "Blog updated successfully", updatedBlog });
  } catch (error) {
    res.status(500).json({ message: "Error updating blog", error });
  }
     

  
}