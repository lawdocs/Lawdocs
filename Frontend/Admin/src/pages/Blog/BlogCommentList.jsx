import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaTrash, FaCheck } from "react-icons/fa";

const BlogCommentList = () => {
  const { blogId } = useParams(); // Get blog ID from URL
  const navigate = useNavigate();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/comments/getComments/${blogId}`
        );
        setComments(response.data.comments);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };
    fetchComments();
  }, [blogId]);

  const handleDelete = async (commentId) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_API_BASE_URL}/comments/delete/${commentId}`
      );
      setComments((prev) =>
        prev.filter((comment) => comment._id !== commentId)
      );
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  const handleApprove = async (commentId) => {
    try {
      await axios.patch(
        `${import.meta.env.VITE_API_BASE_URL}/comments/approve/${commentId}`
      );
      setComments((prev) =>
        prev.map((comment) =>
          comment._id === commentId
            ? { ...comment, status: "approved" }
            : comment
        )
      );
    } catch (error) {
      console.error("Error approving comment:", error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <button
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
      <h2 className="text-xl font-bold mb-4">Comments</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-3 px-5">Name</th>
              <th className="py-3 px-5">Email</th>
              <th className="py-3 px-5">Comment</th>
              <th className="py-3 px-5">Date</th>
              <th className="py-3 px-5">Status</th>
              <th className="py-3 px-5">Actions</th>
            </tr>
          </thead>
          <tbody>
            {comments.map((comment) => (
              <tr key={comment._id} className="border-b hover:bg-gray-100">
                <td className="py-3 px-5 text-center">{comment.name}</td>
                <td className="py-3 px-5 text-center">{comment.email}</td>
                <td className="py-3 px-5 text-center">{comment.text}</td>
                <td className="py-3 px-5 text-center">
                  {new Date(comment.date).toLocaleDateString()}
                </td>
                <td className="py-3 px-5 text-center">{comment.status}</td>
                <td className="py-3 px-5 flex justify-center gap-2">
                  {comment.status !== "approved" && (
                    <button
                      className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                      onClick={() => handleApprove(comment._id)}
                    >
                      <FaCheck />
                    </button>
                  )}
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    onClick={() => handleDelete(comment._id)}
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

export default BlogCommentList;
