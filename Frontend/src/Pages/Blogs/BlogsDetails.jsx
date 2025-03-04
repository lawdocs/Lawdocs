import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BlogDetails = () => {
  const { id } = useParams(); // Get the blog ID from the URL
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [comment, setComment] = useState({
    name: "",
    email: "",
    comment: "",
  });
  const [comments, setComments] = useState([]); // State to store previous comments

  // Fetch blog data from the API
  useEffect(() => {
    const fetchBlog = async () => {
      console.log("id", id);
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/blogs/getBlog/${id}`
        );
        console.log("ruuu", response); // Replace with your API endpoint

        console.log("res", response.data.blog);
        setBlog(response.data.blog);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  // Fetch previous comments from the API
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/blogs/${id}/comments`
        );
        setComments(response.data.comments); // Assuming the API returns an array of comments
      } catch (err) {
        console.error("Failed to fetch comments:", err);
      }
    };

    fetchComments();
  }, [id]);

  // Handle comment input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setComment({ ...comment, [name]: value });
  };

  // Handle comment submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your API endpoint for submitting comments
      await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/blogs/${id}/createComment`,
        comment
      );
      toast.success("Comment submitted successfully!");
      setComment({ name: "", email: "", comment: "" });
      // Refresh comments after submission
    } catch (err) {
      toast.error("Failed to submit comment. Please try again.");
    }
  };

  // Hardcoded data for solutions and related articles
  const solutions = [
    {
      title: "Global Compliance Management",
      link: "https://www.lawrbit.com/global-compliance-management-solution/",
    },
    {
      title: "Compliance Management - India",
      link: "https://www.lawrbit.com/india-most-intelligent-compliance-management-system/",
    },
    {
      title: "Legal Matter Management",
      link: "https://www.lawrbit.com/legal-matter-management-solution/",
    },
    {
      title: "Enterprise Risks Management Solution",
      link: "https://www.lawrbit.com/enterprise-risk-controls-management-software-solution/",
    },
  ];

  const relatedArticles = [
    {
      title: "Lawrbit: Elevating Hospitality with Seamless Compliance!",
      link: "https://www.lawrbit.com/article/lawrbit-elevating-hospitality-with-seamless-compliance/",
      image:
        "https://www.lawrbit.com/wp-content/uploads/2024/02/rbi-regulated-entities-banks-nbfcs-hfcs-cics-implement-futuristic-scalable-compliance-management-solution.jpg",
    },
    {
      title: "Vaibhav Global Ltd (VGL)",
      link: "https://www.lawrbit.com/article/vaibhav-global-ltd/",
      image:
        "https://www.lawrbit.com/wp-content/uploads/2024/02/rbi-regulated-entities-banks-nbfcs-hfcs-cics-implement-futuristic-scalable-compliance-management-solution.jpg",
    },
    {
      title: "Company Law of Maldives: A Recent Overview",
      link: "https://www.lawrbit.com/article/company-law-of-maldives-a-recent-overview/",
      image:
        "https://www.lawrbit.com/wp-content/uploads/2024/02/rbi-regulated-entities-banks-nbfcs-hfcs-cics-implement-futuristic-scalable-compliance-management-solution.jpg",
    },
    {
      title: "Exploring GST on Immovable Property Rentals",
      link: "https://www.lawrbit.com/article/exploring-gst-on-immovable-property-rentals/",
      image:
        "https://www.lawrbit.com/wp-content/uploads/2024/02/rbi-regulated-entities-banks-nbfcs-hfcs-cics-implement-futuristic-scalable-compliance-management-solution.jpg",
    },
  ];

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!blog) return <p>Blog not found</p>;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-96 mt-2">
        <img
          src={blog.image}
          alt="Hero Image"
          className="w-full h-full object-contain"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-4xl font-bold text-white text-center mb-4">
            {blog.name || "RBI REGULATED ENTITIES (BANKS, NBFCs, HFCs)"}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side - Blog Details */}
          <div className="lg:col-span-2">
            <div className="bg-white shadow-lg rounded-lg p-6">
              {/* Author Section */}
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={blog.image}
                  alt={blog.name}
                  className="w-16 h-16 rounded-full object-contain"
                />
                <div>
                  <h6 className="text-lg font-bold text-gray-800 mb-1">
                    {blog.author}
                  </h6>
                  <p className="text-sm text-gray-600 flex items-center">
                    <svg
                      fill="#114390"
                      width="12px"
                      height="12px"
                      viewBox="0 0 32 32"
                      className="mr-1"
                    >
                      <path d="M0 26.016q0 2.496 1.76 4.224t4.256 1.76h20q2.464 0 4.224-1.76t1.76-4.224v-20q0-1.952-1.12-3.488t-2.88-2.144v2.624q0 1.248-0.864 2.144t-2.144 0.864-2.112-0.864-0.864-2.144v-3.008h-12v3.008q0 1.248-0.896 2.144t-2.112 0.864-2.144-0.864-0.864-2.144v-2.624q-1.76 0.64-2.88 2.144t-1.12 3.488v20zM4 26.016v-16h24v16q0 0.832-0.576 1.408t-1.408 0.576h-20q-0.832 0-1.44-0.576t-0.576-1.408zM6.016 3.008q0 0.416 0.288 0.704t0.704 0.288 0.704-0.288 0.288-0.704v-3.008h-1.984v3.008zM8 24h4v-4h-4v4zM8 18.016h4v-4h-4v4zM14.016 24h4v-4h-4v4zM14.016 18.016h4v-4h-4v4zM20 24h4v-4h-4v4zM20 18.016h4v-4h-4v4zM24 3.008q0 0.416 0.288 0.704t0.704 0.288 0.704-0.288 0.32-0.704v-3.008h-2.016v3.008z"></path>
                    </svg>
                    Published on: {blog.date} | Updated on: {blog.updatedAt}
                  </p>
                </div>
              </div>

              {/* Blog Content */}
              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: blog.description }}
              ></div>

              {/* Disclaimer Section */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-blue-600 mb-4">
                  DISCLAIMER
                </h3>
                <p className="text-sm text-gray-600">
                  <em>
                    The information provided in this article is intended for
                    general informational purposes only and should not be
                    construed as legal advice. The content of this article is
                    not intended to create and receipt of it does not constitute
                    any relationship. Readers should not act upon this
                    information without seeking professional legal counsel.
                  </em>
                </p>
              </div>

              {/* Comment Section */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Leave a Comment
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={comment.name}
                      onChange={handleInputChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={comment.email}
                      onChange={handleInputChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="comment"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Comment
                    </label>
                    <textarea
                      id="comment"
                      name="comment"
                      value={comment.comment}
                      onChange={handleInputChange}
                      rows="4"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>

              {/* Previous Comments Section */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Previous Comments
                </h3>
                <div className="space-y-6">
                  {comments.length > 0 ? (
                    comments.map((comment, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 p-6 rounded-lg shadow-sm"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                              {comment.name.charAt(0).toUpperCase()}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-800">
                              {comment.name}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {new Date(comment.date).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <p className="mt-4 text-gray-700">{comment.comment}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-600">
                      No comments yet. Be the first to comment!
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Our Solutions and Related Articles */}
          <div className="lg:col-span-1">
            {/* Our Solutions Section */}
            <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
              <h5 className="text-xl font-bold text-gray-800 mb-4">
                Our Solutions
              </h5>
              <ul className="space-y-2">
                {solutions.map((solution, index) => (
                  <li key={index}>
                    <a
                      href={solution.link}
                      className="text-blue-600 hover:underline"
                    >
                      {solution.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Related Articles Section */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h5 className="text-xl font-bold text-gray-800 mb-4">
                Related Blogs
              </h5>
              <ul className="space-y-4">
                {relatedArticles.map((article, index) => (
                  <li key={index} className="flex items-center space-x-4">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <a
                      href={article.link}
                      className="text-blue-600 hover:underline"
                    >
                      {article.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BlogDetails;
