import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  FaEdit,
  FaTrash,
  FaComment,
  FaPlus,
  FaSearch,
  FaBell,
  FaBars,
  FaEye,
} from "react-icons/fa";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [showFilters, setShowFilters] = useState(false); // For mobile filters
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/blogs/getAllBlogs`
        );
        setBlogs(response.data.Blogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  const confirmDelete = (id) => {
    setDeleteId(id);
    setShowModal(true);
  };

  const handleDelete = async () => {
    try {
      console.log("Deleting blog with ID:", deleteId); // Debugging
      await axios.delete(
        `${import.meta.env.VITE_API_BASE_URL}/blogs/delete/${deleteId}`
      );
      setBlogs((prevBlogs) =>
        prevBlogs.filter((blog) => blog._id !== deleteId)
      );
    } catch (error) {
      console.error("Error deleting blog:", error);
    } finally {
      setShowModal(false);
    }
  };

  const filteredBlogs = blogs.filter((blog) => {
    if (filterStatus === "all") return true;
    return blog.status === filterStatus;
  });

  const pendingBlogsCount = blogs.filter(
    (blog) => blog.status === "pending"
  ).length;

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {/* Notification Bar */}
      <div className="bg-yellow-100 p-4 mb-6 rounded-lg border border-yellow-200 flex justify-between items-center shadow-sm">
        <span className="text-yellow-800">
          You have {pendingBlogsCount} pending blogs waiting for approval.
        </span>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors"
          onClick={() => navigate("/pending-blogs")}
        >
          <FaBell /> View Pending Blogs
        </button>
      </div>

      {/* Mobile Filters Toggle */}
      <div className="lg:hidden mb-6">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors"
          onClick={() => setShowFilters(!showFilters)}
        >
          <FaBars /> Filters
        </button>
      </div>

      {/* Filters and Search */}
      <div
        className={`${
          showFilters ? "block" : "hidden"
        } lg:block mb-6 bg-white p-4 rounded-lg shadow-sm`}
      >
        <div className="flex flex-col lg:flex-row justify-between gap-4">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors"
            onClick={() => navigate("/addblog")}
          >
            <FaPlus /> Add Blog
          </button>
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search By Name..."
              className="border border-gray-300 px-4 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <FaSearch className="absolute right-3 top-3 text-gray-500" />
          </div>
          <div>
            <label className="mr-2 text-gray-700">Filter by Status:</label>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
            </select>
          </div>
        </div>
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
        <table className="min-w-full">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left hidden lg:table-cell">
                Category
              </th>
              <th className="py-3 px-4 text-left hidden lg:table-cell">
                Author
              </th>
              <th className="py-3 px-4 text-left hidden lg:table-cell">
                Created
              </th>
              <th className="py-3 px-4 text-left hidden lg:table-cell">
                Image
              </th>
              <th className="py-3 px-4 text-left hidden lg:table-cell">
                Description
              </th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Comments</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBlogs
              .filter((blog) =>
                blog.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((blog) => (
                <tr
                  key={blog._id}
                  className="border-b hover:bg-gray-50 transition-colors"
                >
                  <td className="py-3 px-4">{blog.name}</td>
                  <td className="py-3 px-4 hidden lg:table-cell">
                    {blog.category}
                  </td>
                  <td className="py-3 px-4 hidden lg:table-cell">
                    {blog.author}
                  </td>
                  <td className="py-3 px-4 hidden lg:table-cell">
                    {blog.date}
                  </td>
                  <td className="py-3 px-4 hidden lg:table-cell">
                    <img
                      src={blog.image}
                      alt="blog"
                      className="w-10 h-10 rounded-lg object-cover"
                    />
                  </td>
                  <td className="py-3 px-4 hidden lg:table-cell">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: `${blog.description.substring(0, 50)}...`,
                      }}
                    ></p>
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-sm ${
                        blog.status === "pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {blog.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <button
                      className="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600 transition-colors"
                      onClick={() => navigate(`/blog/${blog._id}/comments`)}
                    >
                      <FaComment />
                    </button>
                  </td>
                  <td className="py-3 px-4 flex gap-2">
                    <button
                      className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 transition-colors"
                      onClick={() => navigate(`/edit-blog/${blog._id}`)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition-colors"
                      onClick={() => confirmDelete(blog._id)}
                    >
                      <FaTrash />
                    </button>
                    <button
                      className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-1"
                      onClick={() => navigate(`/blog/${blog._id}/description`)}
                    >
                      <FaEye /> See
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Delete Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-lg font-semibold mb-4">Are you sure?</h2>
            <div className="flex justify-center gap-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
                onClick={handleDelete}
              >
                Yes, Delete
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogList;
