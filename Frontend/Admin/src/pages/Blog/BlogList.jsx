import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // For routing
import {
  FaEdit,
  FaTrash,
  FaComment,
  FaPlus,
  FaSearch,
  FaSave,
  FaBell,
} from "react-icons/fa";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("all"); // Filter by status
  const navigate = useNavigate(); // For routing

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/blogs/getAllBlogs"
        );
        setBlogs(response.data.pendingBlogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/blogs/delete/${id}`);
      setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== id));
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  // Filter blogs by status
  const filteredBlogs = blogs.filter((blog) => {
    if (filterStatus === "all") return true;
    return blog.status === filterStatus;
  });

  // Count pending blogs
  const pendingBlogsCount = blogs.filter(
    (blog) => blog.status === "pending"
  ).length;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Notification Bar */}
      <div className="bg-yellow-200 p-4 mb-4 rounded flex justify-between items-center">
        <span>
          You have {pendingBlogsCount} pending blogs waiting for approval.
        </span>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2"
          onClick={() => navigate("/pending-blogs")}
        >
          <FaBell /> View Pending Blogs
        </button>
      </div>

      <div className="flex justify-between mb-4">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2"
          onClick={() => navigate("/addblog")} // Navigate to add blog route
        >
          <FaPlus /> Add Blog
        </button>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="border px-3 py-2 rounded"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaSearch className="absolute right-3 top-3 text-gray-500" />
        </div>
      </div>

      {/* Status Filter */}
      <div className="mb-4">
        <label className="mr-2">Filter by Status:</label>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="border px-3 py-2 rounded"
        >
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-3 px-5">ID</th>
              <th className="py-3 px-5">Category</th>
              <th className="py-3 px-5">Name</th>
              <th className="py-3 px-5">Author</th>
              <th className="py-3 px-5">Created</th>
              <th className="py-3 px-5">Image</th>
              <th className="py-3 px-5">Status</th>
              <th className="py-3 px-5">Comment</th>
              <th className="py-3 px-5">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBlogs
              .filter((blog) =>
                blog.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((blog) => (
                <tr key={blog._id} className="border-b hover:bg-gray-100">
                  <td className="py-3 px-5 text-center">{blog._id}</td>
                  <td className="py-3 px-5 text-center">{blog.category}</td>
                  <td className="py-3 px-5 text-center">{blog.name}</td>
                  <td className="py-3 px-5 text-center">{blog.author}</td>
                  <td className="py-3 px-5 text-center">{blog.date}</td>
                  <td className="py-3 px-5 flex justify-center">
                    <img
                      src={blog.image}
                      alt="blog"
                      className="w-10 h-10 rounded"
                    />
                  </td>
                  <td className="py-3 px-5 text-center">{blog.status}</td>
                  <td className="py-3 px-5 text-center">
                    <button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">
                      <FaComment />
                    </button>
                  </td>
                  <td className="py-3 px-5 flex justify-center gap-2">
                    <button
                      className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                      onClick={() => navigate(`/edit-blog/${blog._id}`)} // Navigate to edit route
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      onClick={() => handleDelete(blog._id)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogList;
