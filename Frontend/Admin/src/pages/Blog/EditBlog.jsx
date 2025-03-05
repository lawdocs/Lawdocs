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
    author: "",
    description: "",
    image: "",
    date: "",
    status: "",
  });

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/blogs/getBlog/${id}`
        );
        console.log("edit  blog", response);
        setBlog(response.data.blog);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };
    fetchBlog();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog((prevBlog) => ({
      ...prevBlog,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      await axios.put(
        `${import.meta.env.VITE_API_BASE_URL}/blogs/update/${id}`,
        blog
      );
      navigate("/blog-list"); // Redirect to the blog list after saving
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };
  function handleGoBack(){
    navigate(-1)
  }

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
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Category</label>
          <input
            type="text"
            name="category"
            value={blog.category}
            onChange={handleChange}
            className="border px-3 py-2 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={blog.name}
            onChange={handleChange}
            className="border px-3 py-2 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Author</label>
          <input
            type="text"
            name="author"
            value={blog.author}
            onChange={handleChange}
            className="border px-3 py-2 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm  font-medium mb-2">Description</label>
          <textarea
            name="description"
            value={blog.description.replace(/<[^>]+>/g, "")} // Remove HTML tags for editing
            onChange={handleChange}
            className="border px-3 py-2 h-[20vw] rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Image URL</label>
          <input
            type="text"
            name="image"
            value={blog.image}
            onChange={handleChange}
            className="border px-3 py-2 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Date</label>
          <input
            type="text"
            name="date"
            value={blog.date}
            onChange={handleChange}
            className="border px-3 py-2 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Status</label>
          <select
            name="status"
            value={blog.status}
            onChange={handleChange}
            className="border px-3 py-2 rounded w-full"
          >
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
          </select>
        </div>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EditBlog;
