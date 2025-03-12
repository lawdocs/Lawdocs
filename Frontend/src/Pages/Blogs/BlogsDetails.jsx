import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEnvelope, FaInstagram, FaLinkedin } from "react-icons/fa";

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
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/blogs/getBlog/${id}`
        );
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
          `${import.meta.env.VITE_API_BASE_URL}/blogs/${id}/getAllComments?status=approved`
        );
        console.log("resssu", response.data);
        setComments(response.data); // Assuming the API returns an array of comments
        const filteredComments = response.data.filter(
          (comment) => comment.status === "approved"
        );
        setComments(filteredComments);
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
      await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/blogs/${id}/createComment`,
        comment 
      );
      toast.success("Comment submitted successfully!");
      setComment({ name: "", email: "", comment: "" });
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
      title: "Elevating Hospitality with Seamless Compliance!",
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">{blog.name}</h1>
          <p className="text-lg">Published on: {blog.date}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side - Blog Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="flex flex-col space-x-4 mb-6">
      <div className="flex space-x-8 p-4">
      <img
        src={blog.image}
        alt={blog.name}
        className="w-16 h-16 rounded-full object-cover"
      />
      <div>
        <h6 className="text-lg font-bold text-gray-800 mb-1">{blog.author}</h6>
        <div className="flex space-x-3">
            <a href={blog.authorLinkedin} target="_blank" rel="noopener noreferrer" className="text-blue-700 text-xl">
              <FaLinkedin />
            </a>
            <a href={blog.authorInstagram} target="_blank" rel="noopener noreferrer" className="text-pink-500 text-xl">
              <FaInstagram />
            </a>
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${blog.authorEmail}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 text-xl"
            >
              <FaEnvelope />
            </a>

          </div>
      </div>

      <img
        src={blog.image}
        alt={blog.name}
        className="w-16 h-16 rounded-full object-cover"
      />
      <div>
        <h6 className="text-lg font-bold text-gray-800 mb-1">{blog.author}</h6>
        <div className="flex space-x-3">
            <a href={blog.authorLinkedin} target="_blank" rel="noopener noreferrer" className="text-blue-700 text-xl">
              <FaLinkedin />
            </a>
            <a href={blog.authorInstagram} target="_blank" rel="noopener noreferrer" className="text-pink-500 text-xl">
              <FaInstagram />
            </a>
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${blog.authorEmail}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 text-xl"
            >
              <FaEnvelope />
            </a>

          </div>
      </div>
</div>
      {/* Rating and Views */}
      <div className="flex space-x-4 justify-between">
        {/* Star Ratings */}
        <div className="flex items-center">(21 Ratings)
          {[...Array(5)].map((_, index) => (
            <span key={index} className="text-xl text-yellow-500">★</span>
          ))}
        </div>

        {/* Views */}
        <div className="flex items-center text-blue-500 text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          <span>{Math.floor(Math.random() * 1000) + 100} views</span>
        </div>
      </div>
    </div>

              {/* Blog Content */}
              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: blog.description }}
              ></div>

              {/* Disclaimer Section */}
              <div className="mt-8 p-6 bg-gray-100 rounded-lg">
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
                        className="bg-white p-6 rounded-lg shadow-sm"
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
                              {new Date(comment.createdAt).toLocaleDateString()}
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
            <div className="bg-white rounded-lg shadow-xl p-6 mb-8">
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
            <div className="bg-white rounded-lg shadow-xl p-6">
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