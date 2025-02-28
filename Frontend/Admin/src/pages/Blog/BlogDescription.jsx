import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const BlogDescription = () => {
  const { id } = useParams(); // Get the blog ID from the URL
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogDescription = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/blogs/getBlog/${id}`
        );
        console.log("res", response.data.blog.description);
        setBlog(response.data.blog);
      } catch (err) {
        setError("Failed to fetch blog description.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogDescription();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!blog) return <p>Blog not found.</p>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">{blog.name}</h1>
        <div className="prose prose-lg max-w-none">
          <p dangerouslySetInnerHTML={{__html:blog.description}}></p>
        </div>
        <button
          className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={() => navigate(-1)} // Go back to the previous page
        >
          Back to Blog List
        </button>
      </div>
    </div>
  );
};

export default BlogDescription;
