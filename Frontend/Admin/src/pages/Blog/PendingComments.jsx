import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaCheck, FaArrowLeft } from "react-icons/fa"; // Import FaArrowLeft for the back button

const PendingComments = () => {
  const { id } = useParams();
  console.log("blogid", id); // Get the blog ID from the URL
  const navigate = useNavigate();
  const [pendingComments, setPendingComments] = useState([]);

  // Fetch comments from the backend
  const fetchComments = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/blogs/${id}/getAllComments`
      );
      // Filter comments to show only those with status "pending"
      const filteredComments = response.data.filter(
        (comment) => comment.status === "pending"
      );
      console.log("ress", response);
      setPendingComments(filteredComments);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [id]);

  // Handle approving a comment
  const handleApprove = async (commentId) => {
    console.log("commentid", commentId);
    try {
      await axios.patch(
        `${
          import.meta.env.VITE_API_BASE_URL
        }/blogs/${id}/approveComment/${commentId}`
      );
      // Refresh the list of pending comments after approval
      fetchComments();
    } catch (error) {
      console.error("Error approving comment:", error);
    }
  };

  // Handle going back to the previous page
  const handleGoBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {/* Go Back Button */}
      <button
        onClick={handleGoBack}
        className="mb-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2 transition-all duration-300"
      >
        <FaArrowLeft /> Go Back
      </button>

      <h1 className="text-2xl font-bold mb-4">Pending Comments</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-2 px-3 text-left">Name</th>
              <th className="py-2 px-3 text-left">Email</th>
              <th className="py-2 px-3 text-left">Comment</th>
              <th className="py-2 px-3 text-left">Date</th>
              <th className="py-2 px-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {pendingComments.map((comment) => (
              <tr key={comment._id} className="border-b hover:bg-gray-100">
                <td className="py-2 px-3">{comment.name}</td>
                <td className="py-2 px-3">{comment.email}</td>
                <td className="py-2 px-3">{comment.comment}</td>
                <td className="py-2 px-3">
                  {new Date(comment.createdAt).toLocaleDateString()}
                </td>
                <td className="py-2 px-3">
                  <button
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 flex items-center gap-2"
                    onClick={() => handleApprove(comment._id)}
                  >
                    <FaCheck /> Approve
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

export default PendingComments;
