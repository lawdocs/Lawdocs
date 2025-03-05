// import { v2 as cloudinary } from "cloudinary";
import streamifier from "streamifier"; // Import streamifier
import Blog from "../model/Blogs/Blog.model.js";
import User from "../model/user.model.js";
import cloudinary from "../utils/Cloudinary.js";

// cloudinary.config({
//   cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
//   api_key:process.env.CLOUDINARY_API_KEY,
//   api_secret:process.env.CLOUDINARY_API_SECRET,
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
      .json({ message: "Approved blogs fetched successfully", approvedBlogs });
  } catch (error) {
    res.status(500).json({ message: "Error fetching Approved blogs", error });
  }
};
export const getAllBlogs = async (req, res) => {
  try {
    const   Blogs = await Blog.find();
    res
      .status(200)
      .json({ message: "All blogs fetched successfully", Blogs });
  } catch (error) {
    res.status(500).json({ message: "Error fetching All blogs", error });
  }
};
export const getBlog = async (req, res) => {
  try {
        const { id } = req.params;

    const blog = await Blog.findById(id);
    res
      .status(200)
      .json({ message: "Particular blog fetched successfully", blog });
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
    const blog = await Blog.findById(id);

    // Extract the public ID from the Cloudinary URL
    const imageUrl = blog.image; // Cloudinary URL
    const publicId = imageUrl.split("/").pop().split(".")[0]; // Extract public ID

    // Delete the image from Cloudinary
    await cloudinary.uploader.destroy(`blogs/${publicId}`, (error, result) => {
      if (error) {
        console.error("Cloudinary deletion error:", error);
      } else {
        console.log("Cloudinary image deleted:", result);
      }
    });
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

export const addComments=async(req,res)=>{
  try {
    const {email,name,comment}=req.body;

    const blog=await Blog.findById(req.params.id)
    console.log("blog",blog);
    if(!blog){
      return res.status(404).json({ message: "Blog not found" });
    }

    const newcomment={
      name,
      email,
      comment,
      status:"pending"
    }

    blog.comments.push(newcomment)
    console.log("blog comments",blog);
    await blog.save()
    console.log("blog",blog);

    res.status(201).json({message:"Comment added Succesful .pending approval"})

  } catch (error) {
    res.status(500).json({ message: "Error adding comments", error });
  }

}

export const getApprovedComments=async(req,res)=>{
  
   try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    const approvedComments = blog.comments.filter(comment => comment.status === "approved");
    res.json(approvedComments);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }

}
export const getAllComments=async(req,res)=>{
  
   try {
    const {status}=req.query
    const blog = await Blog.findById(req.params.id).select('comments');

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    let comments = blog.comments;
    if(status){
      comments=comments.filter((comment)=>comment.status==status)
    }
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }

}

export const updateComment = async (req, res) => {
  try {
    const { blogId,commentId } = req.params;
    const { name, email,comment } = req.body;
    console.log("name",name);
    console.log("email",email);
    console.log("comment",comment);
    console.log("blogId",blogId);
    console.log("commentId",commentId);

    const updatedComment = await Blog.findOneAndUpdate(
      {_id:blogId,"comments._id":commentId},
      

      {
        $set: {
          "comments.$.name": name,
          "comments.$.email": email,
          "comments.$.comment": comment,
        }
      },
      { new: true }
    );
if (!blogId || !commentId) {
  return res
    .status(400)
    .json({ message: "Blog ID and Comment ID are required" });
}
    if (!updatedComment) {
      return res.status(404).json({ message: "Blog or Comment not found" });
    }

    res.status(200).json({ message: "Comment updated successfully", updatedComment });
  } catch (error) {
    res.status(500).json({ message: "Error updating Comment", error });
  }
};
export const approveComment = async (req, res) => {
  try {
    const { blogId,commentId } = req.params;

    const updatedComment = await Blog.findOneAndUpdate(
      { _id: blogId, "comments._id": commentId },

      {
        $set: {
          "comments.$.status": "approved",
        },
      },
      { new: true }
    );
if (!blogId || !commentId) {
  return res
    .status(400)
    .json({ message: "Blog ID and Comment ID are required" });
}
    if (!updatedComment) {
      return res.status(404).json({ message: "Blog or Comment not found" });
    }

    res.status(200).json({ message: "Comment updated successfully", updatedComment });
  } catch (error) {
    res.status(500).json({ message: "Error updating Comment", error });
  }
};

export const deleteComment = async (req, res) => {
  try {
    const { blogId, commentId } = req.params;

    if (!blogId || !commentId) {
      return res
        .status(400)
        .json({ message: "Blog ID and Comment ID are required" });
    }

    const updatedBlog = await Blog.findByIdAndUpdate(
      blogId,
      { $pull: { comments: { _id: commentId } } }, // Remove the comment from the array
      { new: true }
    );

    if (!updatedBlog) {
      return res.status(404).json({ message: "Blog or Comment not found" });
    }

    res.status(200).json({ message: "Comment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting comment", error });
  }
};

