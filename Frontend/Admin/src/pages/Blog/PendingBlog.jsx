import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaCheck, FaComment, FaEye } from "react-icons/fa";

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
        { status }
      );
      setPendingBlogs((prevBlogs) =>
        prevBlogs.filter((blog) => blog._id !== id)
      );
    } catch (error) {
      console.error("Error updating blog status:", error);
    }
  };

  return (
    <div className=" overflow-hidden bg-gray-50 min-h-screen flex flex-col items-center max-w-[98vw]">
      <div className="w-full max-w-full">
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
        <div className="overflow-x-auto w-full">
          <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="py-3 px-5 text-left">ID</th>
                <th className="py-3 px-5 text-left">Category</th>
                <th className="py-3 px-5 text-left">Name</th>
                <th className="py-3 px-5 text-left">Author</th>
                <th className="py-3 px-5 text-left">Co-Author</th>
                <th className="py-3 px-5 text-left">Date</th>
                <th className="py-3 px-5 text-left">Blog Image</th>
                <th className="py-3 px-5 text-left">Author Image</th>
                <th className="py-3 px-5 text-left">Co-Author Image</th>
                <th className="py-3 px-5 text-left">Description</th>
                <th className="py-3 px-5 text-left">Comments</th>
                <th className="py-3 px-5 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {pendingBlogs.map((blog) => (
                <tr
                  key={blog._id}
                  className="border-b hover:bg-gray-100 transition-colors"
                >
                  <td className="py-3 px-5">{blog._id}</td>
                  <td className="py-3 px-5">{blog.category || "N/A"}</td>
                  <td className="py-3 px-5">{blog.name}</td>
                  <td className="py-3 px-5">
                    {blog.authorName || blog.author || "N/A"}
                  </td>
                  <td className="py-3 px-5">{blog.coAuthorName || "N/A"}</td>
                  <td className="py-3 px-5">
                    {new Date(blog.date).toLocaleDateString() || "N/A"}
                  </td>
                  <td className="py-3 px-5">
                    {blog.blogImage || blog.image ? (
                      <img
                        src={blog.blogImage || blog.image}
                        alt="blog"
                        className="w-10 h-10 rounded-lg object-cover"
                      />
                    ) : (
                      "N/A"
                    )}
                  </td>
                  <td className="py-3 px-5">
                    {blog.authorImage ? (
                      <img
                        src={blog.authorImage}
                        alt="author"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    ) : (
                      "N/A"
                    )}
                  </td>
                  <td className="py-3 px-5">
                    {blog.coAuthorImage ? (
                      <img
                        src={blog.coAuthorImage}
                        alt="co-author"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    ) : (
                      "N/A"
                    )}
                  </td>
                  <td
                    className="py-3 px-5 truncate max-w-xs"
                    title={blog.description}
                  >
                    <p
                      dangerouslySetInnerHTML={{
                        __html: `${blog.description.substring(0, 50)}...`,
                      }}
                    />
                  </td>
                  <td className="py-3 px-5">
                    <button
                      className="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600 transition-colors"
                      onClick={() => navigate(`/blog/${blog._id}/comments`)}
                    >
                      <FaComment />
                    </button>
                  </td>
                  <td className="py-3 px-5 flex gap-2">
                    <button
                      className="bg-green-500 flex justify-center items-center gap-2 text-white px-3 py-1 rounded-lg hover:bg-green-600 transition"
                      onClick={() => handleApproval(blog._id, "approved")}
                    >
                      <p>Approve</p>
                      <FaCheck />
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
      </div>
    </div>
  );
};

export default PendingBlog;
