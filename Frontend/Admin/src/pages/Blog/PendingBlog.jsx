import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

const PendingBlog = () => {
  const [pendingBlogs, setPendingBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPendingBlogs = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/blogs/getBlogs`
        );
        setPendingBlogs(response.data.pendingBlogs);
      } catch (error) {
        console.error("Error fetching pending blogs:", error);
      }
    };
    fetchPendingBlogs();
  }, []);

  const handleApproval = async (id, status) => {
    try {
      await axios.put(
        `${import.meta.env.VITE_API_BASE_URL}/blogs/updateStatus/${id}`,
        {
          status,
        }
      );
      setPendingBlogs((prevBlogs) =>
        prevBlogs.filter((blog) => blog._id !== id)
      );
    } catch (error) {
      console.error("Error updating blog status:", error);
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-6xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Pending Blogs for Approval
          </h2>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            onClick={() => navigate("/blog-list")}
          >
            Go to Blog List
          </button>
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
                <th className="py-3 px-5">Actions</th>
              </tr>
            </thead>
            <tbody>
              {pendingBlogs.map((blog) => (
                <tr
                  key={blog._id}
                  className="border-b hover:bg-gray-100 text-center"
                >
                  <td className="py-3 px-5">{blog._id}</td>
                  <td className="py-3 px-5">{blog.category}</td>
                  <td className="py-3 px-5">{blog.name}</td>
                  <td className="py-3 px-5">{blog.author}</td>
                  <td className="py-3 px-5">{blog.date}</td>
                  <td className="py-3 px-5 flex justify-center">
                    <img
                      src={blog.image}
                      alt="blog"
                      className="w-12 h-12 rounded-lg shadow-md"
                    />
                  </td>
                  <td className="py-3 px-5">
                
                    <button
                      className="bg-green-500 flex justify-center items-center gap-[0.5vw] text-white px-3 py-1 rounded-lg hover:bg-green-600 transition"
                      onClick={() => handleApproval(blog._id, "approved")}
                    >
                    <p>Approve</p>
                    <p>

                    <FaCheck />
                    </p>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PendingBlog;
