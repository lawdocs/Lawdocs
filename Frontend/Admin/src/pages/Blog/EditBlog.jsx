import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const EditBlog = () => {
  const { id } = useParams(); // Get the blog ID from the URL
  const navigate = useNavigate();
  const [blog, setBlog] = useState({
    category: "",
    name: "",
    authorName: "",
    coAuthorName: "",
    description: "",
    blogImage: null, // File object for blog image
    authorImage: null, // File object for author image
    coAuthorImage: null, // File object for co-author image (optional)
    date: "",
    status: "",
  });

  // Fetch the blog data when the component mounts
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/blogs/getBlog/${id}`
        );
        console.log("edit blog", response);
        setBlog({
          ...response.data.blog,
          blogImage: null, // Reset file object on load
          authorImage: null, // Reset file object on load
          coAuthorImage: null, // Reset file object on load
        });
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };
    fetchBlog();
  }, [id]);

  // Handle changes in text inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog((prevBlog) => ({
      ...prevBlog,
      [name]: value,
    }));
  };

  // Handle changes in file inputs
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setBlog((prevBlog) => ({
      ...prevBlog,
      [name]: files[0], // Store the selected file
    }));
  };

  // Save the updated blog
  const handleSave = async () => {
    try {
      const formData = new FormData();
      Object.keys(blog).forEach((key) => {
        if (blog[key] !== null && blog[key] !== undefined) {
          // Skip appending coAuthorImage if no file is selected
          if (key === "coAuthorImage" && !blog[key]) return;
          formData.append(key, blog[key]);
        }
      });

      const res = await axios.put(
        `${import.meta.env.VITE_API_BASE_URL}/blogs/update/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Required for file uploads
          },
        }
      );
      console.log("updated", res);
      navigate("/blog-list"); // Redirect to the blog list after saving
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };

  // Go back to the previous page
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <button
        onClick={handleGoBack}
        className="mb-4 ml-[2vw] bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2 transition-all duration-300"
      >
        <FaArrowLeft /> Go Back
      </button>
      <h1 className="text-2xl font-bold mb-4">Edit Blog</h1>
      <div className="bg-white p-6 rounded shadow-md">
        {/* Category */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Category</label>
          <input
            type="text"
            name="category"
            value={blog.category || ""}
            onChange={handleChange}
            className="border px-3 py-2 rounded w-full"
          />
        </div>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={blog.name || ""}
            onChange={handleChange}
            className="border px-3 py-2 rounded w-full"
          />
        </div>

        {/* Author Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Author Name</label>
          <input
            type="text"
            name="authorName"
            value={blog.authorName || ""}
            onChange={handleChange}
            className="border px-3 py-2 rounded w-full"
          />
        </div>

        {/* Co-Author Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Co-Author Name
          </label>
          <input
            type="text"
            name="coAuthorName"
            value={blog.coAuthorName || ""}
            onChange={handleChange}
            className="border px-3 py-2 rounded w-full"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Description</label>
          <textarea
            name="description"
            value={blog.description.replace(/<[^>]+>/g, "") || ""} // Remove HTML tags for editing
            onChange={handleChange}
            className="border px-3 py-2 h-[20vw] rounded w-full"
          />
        </div>

        {/* Blog Image */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Blog Image</label>
          <input
            type="file"
            name="blogImage"
            onChange={handleFileChange}
            className="border px-3 py-2 rounded w-full"
            accept="image/*"
          />
          {blog.blogImage && (
            <img
              src={URL.createObjectURL(blog.blogImage)} // Preview the selected file
              alt="Blog Preview"
              className="mt-2 w-20 h-20 rounded-lg object-cover"
            />
          )}
        </div>

        {/* Author Image */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Author Image</label>
          <input
            type="file"
            name="authorImage"
            onChange={handleFileChange}
            className="border px-3 py-2 rounded w-full"
            accept="image/*"
          />
          {blog.authorImage && (
            <img
              src={URL.createObjectURL(blog.authorImage)} // Preview the selected file
              alt="Author Preview"
              className="mt-2 w-20 h-20 rounded-full object-cover"
            />
          )}
        </div>

        {/* Co-Author Image (Optional) */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Co-Author Image (Optional)
          </label>
          <input
            type="file"
            name="coAuthorImage"
            onChange={handleFileChange}
            className="border px-3 py-2 rounded w-full"
            accept="image/*"
          />
          {blog.coAuthorImage && (
            <img
              src={URL.createObjectURL(blog.coAuthorImage)} // Preview the selected file
              alt="Co-Author Preview"
              className="mt-2 w-20 h-20 rounded-full object-cover"
            />
          )}
        </div>

        {/* Date */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Date</label>
          <input
            type="date"
            name="date"
            value={
              blog.date ? new Date(blog.date).toISOString().split("T")[0] : ""
            }
            onChange={handleChange}
            className="border px-3 py-2 rounded w-full"
          />
        </div>

        {/* Status */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Status</label>
          <select
            name="status"
            value={blog.status || ""}
            onChange={handleChange}
            className="border px-3 py-2 rounded w-full"
          >
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
          </select>
        </div>

        {/* Save Button */}
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EditBlog;
