    import { useState, useEffect } from "react";
    import { useParams, useNavigate } from "react-router-dom";
    import axios from "axios";
    import {
      FaTrash,
      FaCheck,
      FaSearch,
      FaBell,
      FaBars,
      FaEdit,
      FaTimes,
      FaArrowLeft,
    } from "react-icons/fa";

    const BlogCommentList = () => {
      const { id } = useParams();
      const blogId=id
      const navigate = useNavigate();
      const [comments, setComments] = useState([]);
      const [search, setSearch] = useState("");
      const [filterStatus, setFilterStatus] = useState("all");
      const [showFilters, setShowFilters] = useState(false);
      const [editingCommentId, setEditingCommentId] = useState(null); // Track which comment is being edited
      const [editedComment, setEditedComment] = useState({}); // Store edited comment data
      const fetchComments = async () => {
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_API_BASE_URL}/blogs/${id}/getAllComments`
          );
          setComments(response.data);
        } catch (error) {
          console.error("Error fetching comments:", error);
        }
      };
      useEffect(() => {
      
        fetchComments();
      }, [id]);

      const handleDelete = async (commentId) => {
        try {
          await axios.delete(
            `${import.meta.env.VITE_API_BASE_URL}/blogs/${blogId}/delete/${commentId}`
          );
          fetchComments()
        } catch (error) {
          console.error("Error deleting comment:", error);
        }
      };



      const handleEdit = (comment) => {
        setEditingCommentId(comment._id);
        setEditedComment({ ...comment }); // Initialize editedComment with the current comment data
      };

      const handleSave = async () => {
        console.log("edited comment",editedComment);
        try {
          await axios.patch(
            `${
              import.meta.env.VITE_API_BASE_URL
            }/blogs/${blogId}/updateComment/${editingCommentId}`,

            editedComment
          );  

              fetchComments();

          

        
          setEditingCommentId(null);
          setEditedComment({}); // Exit edit mode
        } catch (error) {
          console.error("Error updating comment:", error);
        }
      };

      const handleCancel = () => {
        setEditingCommentId(null); // Exit edit mode without saving
      };

      const handleChange = (e, field) => {
        setEditedComment((prev) => ({
          ...prev,
          [field]: e.target.value,
        }));
      };

      const pendingCommentsCount = comments.filter(
        (comment) => comment.status === "pending"
      ).length;

      const filteredComments = comments.filter((comment) => {
        if (filterStatus === "all") return true;
        return comment.status === filterStatus;
      });

      function viewpendingcomments(){
        navigate(`/pending-comments/${blogId}`);
      }
      function handleGoBack(){
        navigate(-1)

      }

      return (
        <div className="p-4 bg-gray-100 min-h-screen">
          <button
                onClick={handleGoBack}
                className="mb-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2 transition-all duration-300"
              >
                <FaArrowLeft /> Go Back
              </button>
          {/* Notification Bar */}
          <div className="bg-yellow-200 p-3 mb-4 rounded flex justify-between items-center">
            <span>
              You have {pendingCommentsCount} pending comments waiting for approval.
            </span>
            <button
              className="bg-blue-600 text-white px-3 py-1 rounded flex items-center gap-2"
              onClick={() => viewpendingcomments()}
            >
              <FaBell /> View Pending Comments
            </button>
          </div>

          {/* Mobile Filters Toggle */}
          <div className="lg:hidden mb-4">
            <button
              className="bg-blue-600 text-white px-3 py-1 rounded flex items-center gap-2"
              onClick={() => setShowFilters(!showFilters)}
            >
              <FaBars /> Filters
            </button>
          </div>

          {/* Filters and Search */}
          <div className={`${showFilters ? "block" : "hidden"} lg:block mb-4`}>
            <div className="flex flex-col lg:flex-row justify-between gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="border px-3 py-1 rounded w-full lg:w-auto"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <FaSearch className="absolute right-3 top-2 text-gray-500" />
              </div>
              <div>
                <label className="mr-2">Filter by Status:</label>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="border px-3 py-1 rounded"
                >
                  <option value="all">All</option>
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                </select>
              </div>
            </div>
          </div>

          {/* Responsive Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="py-2 px-3 text-left">Name</th>
                  <th className="py-2 px-3 text-left">Email</th>
                  <th className="py-2 px-3 text-left">Comment</th>
                  <th className="py-2 px-3 text-left">Date</th>
                  <th className="py-2 px-3 text-left">Status</th>
                  <th className="py-2 px-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredComments
                  .filter((comment) =>
                    comment.name.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((comment) => (
                    <tr key={comment._id} className="border-b hover:bg-gray-100">
                      <td className="py-2 px-3">
                        {editingCommentId === comment._id ? (
                          <input
                            type="text"
                            value={editedComment.name}
                            onChange={(e) => handleChange(e, "name")}
                            className="border px-2 py-1 rounded"
                          />
                        ) : (
                          comment.name
                        )}
                      </td>
                      <td className="py-2 px-3">
                        {editingCommentId === comment._id ? (
                          <input
                            type="email"
                            value={editedComment.email}
                            onChange={(e) => handleChange(e, "email")}
                            className="border px-2 py-1 rounded"
                          />
                        ) : (
                          comment.email
                        )}
                      </td>
                      <td className="py-2 px-3">
                        {editingCommentId === comment._id ? (
                          <textarea
                            value={editedComment.comment}
                            onChange={(e) => handleChange(e, "comment")}
                            className="border px-2 py-1 rounded w-full"
                          />
                        ) : (
                          comment.comment
                        )}
                      </td>
                      <td className="py-2 px-3">
                        {new Date(comment.createdAt).toLocaleDateString()}
                      </td>
                      <td className="py-2 px-3">
                        
                        { comment.status}
                        
                      </td>
                      <td className="py-2 px-3 flex gap-2">
                        {editingCommentId === comment._id ? (
                          <>
                            <button
                              className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                              onClick={handleSave}
                            >
                              <FaCheck /> Save
                            </button>
                            <button
                              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                              onClick={handleCancel}
                            >
                              <FaTimes /> Cancel
                            </button>
                          </>
                        ) : (
                          <>
                          
                            <button
                              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                              onClick={() => handleEdit(comment)}
                            >
                              <FaEdit />
                            </button>
                            <button
                              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                              onClick={() => handleDelete(comment._id)}
                            >
                              <FaTrash />
                            </button>
                          </>
                        )}
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
