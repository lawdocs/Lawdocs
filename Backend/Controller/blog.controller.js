import Blog from "../model/Blogs/Blog.model.js";
import User from "../model/user.model.js";
import cloudinary from "../utils/Cloudinary.js";
import streamifier from "streamifier";

// Helper function to upload files to Cloudinary
const uploadToCloudinary = (buffer, folder) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder }, // Cloudinary folder (optional)
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    );
    streamifier.createReadStream(buffer).pipe(stream);
  });
};

const deleteImage = async (url, folder) => {
  const publicId = url.split("/").pop().split(".")[0]; // Extract public ID
  await cloudinary.uploader.destroy(`${folder}/${publicId}`);
};

// Create a new blog
export const CreateBlog = async (req, res) => {
  try {
    const {
      category,
      name,
      authorName,
      coAuthorName,
      description,
      createdBy,
      date,
    } = req.body;

    const user = await User.findOne({ clerkId: createdBy });
    if (!user) {
      return res
        .status(404)
        .json({ error: "User not found. Please register first." });
    }

    if (!req.files || !req.files.blogImage || !req.files.authorImage) {
      return res
        .status(400)
        .json({ error: "Blog and Author images are required" });
    }

    // Upload images to Cloudinary
    const blogImageResult = await uploadToCloudinary(
      req.files.blogImage[0].buffer,
      "blogs"
    );
    const authorImageResult = await uploadToCloudinary(
      req.files.authorImage[0].buffer,
      "authors"
    );

    let coAuthorImageResult = null;
    if (req.files.coAuthorImage) {
      coAuthorImageResult = await uploadToCloudinary(
        req.files.coAuthorImage[0].buffer,
        "authors"
      );
    }

    const blog = new Blog({
      category,
      name,
      authorName,
      coAuthorName,
      description,
      blogImage: blogImageResult.secure_url,
      authorImage: authorImageResult.secure_url,
      coAuthorImage: coAuthorImageResult
        ? coAuthorImageResult.secure_url
        : null,
      createdBy: user._id,
      date,
      status: "pending",
    });

    await blog.save();
    res.status(201).json({ message: "Blog submitted for approval!", blog });
  } catch (err) {
    console.log("error ", err);
    res.status(500).json({ message: "Error creating blog", error: err });
  }
};

// Get pending blogs
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

// Get approved blogs
export const getApprovedBlogs = async (req, res) => {
  try {
    const approvedBlogs = await Blog.find({ status: "approved" });
    res
      .status(200)
      .json({ message: "Approved blogs fetched successfully", approvedBlogs });
  } catch (error) {
    res.status(500).json({ message: "Error fetching approved blogs", error });
  }
};

// Get all blogs
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json({ message: "All blogs fetched successfully", blogs });
  } catch (error) {
    res.status(500).json({ message: "Error fetching all blogs", error });
  }
};

// Get a specific blog by ID
export const getBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    res
      .status(200)
      .json({ message: "Particular blog fetched successfully", blog });
  } catch (error) {
    res.status(500).json({ message: "Error fetching blog", error });
  }
};



// Update blog
export const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      category,
      authorName,
      coAuthorName,
      description,
      date,
      status,
    } = req.body;

    // Find the existing blog
    const existingBlog = await Blog.findById(id);
    if (!existingBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    // Delete old images if new images are provided
    if (req.files?.blogImage) {
      if (existingBlog.blogImage) {
        await deleteImage(existingBlog.blogImage, "blogs");
      }
      const blogImageResult = await uploadToCloudinary(
        req.files.blogImage[0].buffer,
        "blogs"
      );
      existingBlog.blogImage = blogImageResult.secure_url;
    }

    if (req.files?.authorImage) {
      if (existingBlog.authorImage) {
        await deleteImage(existingBlog.authorImage, "authors");
      }
      const authorImageResult = await uploadToCloudinary(
        req.files.authorImage[0].buffer,
        "authors"
      );
      existingBlog.authorImage = authorImageResult.secure_url;
    }

    if (req.files?.coAuthorImage) {
      if (existingBlog.coAuthorImage) {
        await deleteImage(existingBlog.coAuthorImage, "authors");
      }
      console.log("ee",existingBlog.coAuthorImage)
      const coAuthorImageResult = await uploadToCloudinary(
        req.files.coAuthorImage[0].buffer,
        "authors"
      );
      console.log("coauth",existingBlog);
      existingBlog.coAuthorImage = coAuthorImageResult.secure_url;
    }

    // Update other fields
    existingBlog.name = name;
    existingBlog.category = category;
    existingBlog.authorName = authorName;
    existingBlog.coAuthorName = coAuthorName;
    existingBlog.description = description;
    existingBlog.date = date;
    existingBlog.status = status;

    // Save the updated blog
    const updatedBlog = await existingBlog.save();

    res.status(200).json({ message: "Blog updated successfully", updatedBlog });
  } catch (error) {
    console.error("Error updating blog:", error);
    res.status(500).json({ message: "Error updating blog", error });
  }
};
// Delete a blog
export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    // Delete images from Cloudinary
    const deleteImage = async (url, folder) => {
      const publicId = url.split("/").pop().split(".")[0]; // Extract public ID
      await cloudinary.uploader.destroy(`${folder}/${publicId}`);
    };

    if (blog.blogImage) await deleteImage(blog.blogImage, "blogs");
    if (blog.authorImage) await deleteImage(blog.authorImage, "authors");
    if (blog.coAuthorImage) await deleteImage(blog.coAuthorImage, "authors");

    await Blog.findByIdAndDelete(id);
    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting blog", error });
  }
};

// Update blog status
export const updateBlogStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updatedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res
      .status(200)
      .json({ message: "Blog status updated successfully", updatedBlog });
  } catch (error) {
    res.status(500).json({ message: "Error updating blog status", error });
  }
};

// Add a comment to a blog
export const addComments = async (req, res) => {
  try {
    const { email, name, comment } = req.body;
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    const newComment = {
      name,
      email,
      comment,
      status: "pending",
    };

    blog.comments.push(newComment);
    await blog.save();

    res
      .status(201)
      .json({ message: "Comment added successfully. Pending approval." });
  } catch (error) {
    res.status(500).json({ message: "Error adding comment", error });
  }
};

// Get approved comments for a blog
export const getApprovedComments = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    const approvedComments = blog.comments.filter(
      (comment) => comment.status === "approved"
    );
    res.status(200).json(approvedComments);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching approved comments", error });
  }
};

// Get all comments for a blog (filtered by status if provided)
export const getAllComments = async (req, res) => {
  try {
    const { status } = req.query;
    const blog = await Blog.findById(req.params.id).select("comments");

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    let comments = blog.comments;
    if (status) {
      comments = comments.filter((comment) => comment.status === status);
    }

    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: "Error fetching comments", error });
  }
};

// Update a comment
export const updateComment = async (req, res) => {
  try {
    const { blogId, commentId } = req.params;
    const { name, email, comment } = req.body;

    const updatedBlog = await Blog.findOneAndUpdate(
      { _id: blogId, "comments._id": commentId },
      {
        $set: {
          "comments.$.name": name,
          "comments.$.email": email,
          "comments.$.comment": comment,
        },
      },
      { new: true }
    );

    if (!updatedBlog) {
      return res.status(404).json({ message: "Blog or Comment not found" });
    }

    res
      .status(200)
      .json({ message: "Comment updated successfully", updatedBlog });
  } catch (error) {
    res.status(500).json({ message: "Error updating comment", error });
  }
};

export const getTrendingBlogs=async(req,res)=>{
  try{
    // const {id}=request.params
    const blogs=await Blog.find({isTrending:true})
    res.status(200).json({ message: "trending Blogs",blogs})

  }catch(err){
        res.status(500).json({ message: "Server error", err });

  }

}
export const toggleTrending = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    const trendingBlogs = await Blog.find({ isTrending: true }).sort({
      updatedAt: 1,
    });

    // If marking as trending
    if (!blog.isTrending) {
      // Check if there are already 3 trending blogs
      if (trendingBlogs.length >= 3) {
        // Remove the oldest trending blog
        const oldestTrending = trendingBlogs[0];
        oldestTrending.isTrending = false;
        await oldestTrending.save();
      }
      blog.isTrending = true;
    }
    // If removing from trending
    else {
      // Allow removing from trending regardless of the number of trending blogs
      blog.isTrending = false;
    }

    await blog.save();
    res.json({ message: "Trending status updated", blog });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Approve a comment
export const approveComment = async (req, res) => {
  try {
    const { blogId, commentId } = req.params;

    const updatedBlog = await Blog.findOneAndUpdate(
      { _id: blogId, "comments._id": commentId },
      {
        $set: {
          "comments.$.status": "approved",
        },
      },
      { new: true }
    );

    if (!updatedBlog) {
      return res.status(404).json({ message: "Blog or Comment not found" });
    }

    res
      .status(200)
      .json({ message: "Comment approved successfully", updatedBlog });
  } catch (error) {
    res.status(500).json({ message: "Error approving comment", error });
  }
};

// Delete a comment
export const deleteComment = async (req, res) => {
  try {
    const { blogId, commentId } = req.params;

    const updatedBlog = await Blog.findByIdAndUpdate(
      blogId,
      { $pull: { comments: { _id: commentId } } },
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
