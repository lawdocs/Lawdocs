import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaCheck, FaTimes } from "react-icons/fa";

const PendingBlog = () => {
  const [pendingBlogs, setPendingBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPendingBlogs = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/blogs/getBlogs"
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
      await axios.put(`http://localhost:3000/blogs/updateStatus/${id}`, {
        status,
      });
      setPendingBlogs((prevBlogs) =>
        prevBlogs.filter((blog) => blog._id !== id)
      );
    } catch (error) {
      console.error("Error updating blog status:", error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-xl font-semibold mb-4">Pending Blogs for Approval</h2>
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
                <td className="py-3 px-5  ">
                  <button
                    className="bg-green-500  text-white px-3 py-1 rounded hover:bg-green-600"
                    onClick={() => handleApproval(blog._id, "approved")}
                  >
                    <FaCheck />
                  </button>
                  {/* <button
                    className="bg-red-500 text-w hite px-3 py-1 rounded hover:bg-red-600"
                    onClick={() => handleApproval(blog._id, "declined")}
                  >
                    <FaTimes />
                  </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PendingBlog;
