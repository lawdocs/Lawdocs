import React, { useState } from "react";
import { useAuth } from "@clerk/clerk-react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const AddBlog = () => {
  const [blogData, setBlogData] = useState({
    category: "",
    name: "",
    author: "",
    blogImage: null,
    authorImage: null,
    coAuthorImage: null,
    description: "",
    date: moment().format("YYYY-MM-DD"),
  });

  const [errors, setErrors] = useState({});
  const [existingAuthorImage, setExistingAuthorImage] = useState(null); // Store existing image URL
  const [useExistingImage, setUseExistingImage] = useState(false); 
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { userId } = useAuth();
  const navigate = useNavigate(); // Initialize navigate

  const validateForm = () => {
    let tempErrors = {};
    if (!blogData.category.trim()) tempErrors.category = "Category is required";
    if (!blogData.name.trim()) tempErrors.name = "Blog Name is required";
    if (!blogData.author.trim()) tempErrors.author = "Author Name is required";
    if (!blogData.blogImage) tempErrors.blogImage = " Blog Image is required";
    if (!blogData.authorImage)
      tempErrors.authorImage = "Author  Image is required";
    if (!blogData.description.trim())
      tempErrors.description = "Description is required";
    if (!blogData.date) tempErrors.date = "Date is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData({ ...blogData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleBlogImageChange = (e) => {
    setBlogData({ ...blogData, blogImage: e.target.files[0] });
    setErrors({ ...errors, blogImage: "" });
  };

  const handleAuthorImageChange = (e) => {
    console.log("image", e.target);
    setBlogData({ ...blogData, authorImage: e.target.files[0] });
    setErrors({ ...errors, authorImage: "" });
  };

  const handleCOAuthorImageChange = (e) => {
    setBlogData({ ...blogData, coAuthorImage: e.target.files[0] });
  };

  const handleEditorChange = (value) => {
    setBlogData({ ...blogData, description: value });
    setErrors({ ...errors, description: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Please fill all required fields!", {
        position: "top-right",
      });
      return;
    }

    setIsSubmitting(true);
    const formData = new FormData();
    Object.keys(blogData).forEach((key) => {
      formData.append(key, blogData[key]);
    });

    formData.append("createdBy", userId);

    try {
      await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/blogs/createblog`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      toast.success("Blog request sent for approval!", {
        position: "top-right",
      });

      // Navigate to /blogs after 2 seconds to show the toast
      setTimeout(() => {
        navigate("/blogs");
      }, 1000);

      setBlogData({
        category: "",
        name: "",
        author: "",
        blogImage: null,
        authorImage: null,
        coAuthorImage: null,
        description: "",
        date: moment().format("YYYY-MM-DD"),
      });
    } catch (error) {
      toast.error(error.response?.data?.error || "Something went wrong!", {
        position: "top-right",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-xl rounded-lg">
      <ToastContainer />
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Add New Blog
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        {[
          { label: "Blog Category", name: "category", type: "text" },
          { label: "Blog Name", name: "name", type: "text" },
          { label: "Author Name", name: "author", type: "text" },
        ].map(({ label, name, type }) => (
          <div key={name}>
            <label className="block font-medium text-gray-700">{label}</label>
            <input
              type={type}
              name={name}
              value={blogData[name]}
              onChange={handleChange}
              className={`w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500 ${
                errors[name] ? "border-red-500" : ""
              }`}
              required
            />
            {errors[name] && (
              <p className="text-red-500 text-sm">{errors[name]}</p>
            )}
          </div>
        ))}
        <div>
          <label className="block font-medium text-gray-700">
            Add a Blog Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleBlogImageChange}
            className="w-full border p-2 rounded-lg cursor-pointer"
          />
          {errors.image && (
            <p className="text-red-500 text-sm">{errors.blogImage}</p>
          )}
        </div>
        <div>
          <label className="block font-medium text-gray-700">
            Add Author Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleAuthorImageChange}
            className="w-full border p-2 rounded-lg cursor-pointer"
          />
          {errors.image && (
            <p className="text-red-500 text-sm">{errors.authorImage}</p>
          )}
        </div>
        <div>
          <label className="block font-medium text-gray-700">
            Add co-Author Image (optional)
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleCOAuthorImageChange}
            className="w-full border p-2 rounded-lg cursor-pointer"
          />
        </div>
        <div>
          <label className="block font-medium text-gray-700">
            Blog Description
          </label>
          <ReactQuill
            value={blogData.description}
            onChange={handleEditorChange}
            className="bg-white rounded-lg h-[300px]"
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description}</p>
          )}
        </div>
        <div>
          <label className="block font-medium text-gray-700">Date</label>
          <input
            type="date"
            name="date"
            value={blogData.date}
            onChange={handleChange}
            className={`w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500 ${
              errors.date ? "border-red-500" : ""
            }`}
            required
          />
          {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-blue-600 text-white py-3 rounded-lg ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
          }`}
        >
          {isSubmitting ? "Saving..." : "Save Blog"}
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
