import React, { useState } from "react";
import { useAuth } from "@clerk/clerk-react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddBlog = () => {
  const [blogData, setBlogData] = useState({
    category: "",
    name: "",
    author: "",
    image: null,
    description: "",
    date: moment().format("YYYY-MM-DD"),
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { userId } = useAuth();

  const validateForm = () => {
    let tempErrors = {};
    if (!blogData.category.trim()) tempErrors.category = "Category is required";
    if (!blogData.name.trim()) tempErrors.name = "Blog Name is required";
    if (!blogData.author.trim()) tempErrors.author = "Author Name is required";
    if (!blogData.image) tempErrors.image = "Image is required";
    if (!blogData.description.trim())
      tempErrors.description = "Description is required";
    if (!blogData.date) tempErrors.date = "Date is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData({ ...blogData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Remove error when user types
  };

  const handleImageChange = (e) => {
    setBlogData({ ...blogData, image: e.target.files[0] });
    setErrors({ ...errors, image: "" });
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
      const res = await axios.post(
        "http://localhost:3000/blogs/createblog",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      toast.success("Blog added successfully!", { position: "top-right" });
      console.log("res",res);
      setBlogData({
        category: "",
        name: "",
        author: "",
        image: null,
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

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image", "video"],
      ["clean"],
    ],
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
            Add an Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full border p-2 rounded-lg cursor-pointer"
          />
          {errors.image && (
            <p className="text-red-500 text-sm">{errors.image}</p>
          )}
        </div>
        <div>
          <label className="block font-medium text-gray-700">
            Blog Description
          </label>
          <ReactQuill
            value={blogData.description}
            onChange={handleEditorChange}
            modules={modules}
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
