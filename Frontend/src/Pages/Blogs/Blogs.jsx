import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp, FaSearch } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState(["All"]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 8;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/blogs/getApprovedBlogs`
        );
        console.log("response", res.data.approvedBlogs);
        setBlogs(res.data.approvedBlogs);

        const uniqueCategories = [
          "All",
          ...new Set(res.data.approvedBlogs.map((blog) => blog.category)),
        ];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory =
      selectedCategory === "All" || blog.category === selectedCategory;
    const matchesSearch = blog.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleblog = (id) => navigate(`/blogs-Details/${id}`);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 md:px-10 lg:px-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-playfair font-extrabold text-gray-900">
          Latest Blogs
        </h1>
        <p className="mt-3 text-lg text-gray-600">
          Explore insights on legal and fintech developments.
        </p>
      </div>

      {/* Category & Search Bar */}
      <div className="sticky top-0 bg-white shadow-lg rounded-lg p-4 mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Category Filters */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide w-full md:w-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentPage(1);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-[22vw]">
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 pr-4 py-3 w-full bg-gray-100 text-gray-700 rounded-full focus:ring-2 focus:ring-blue-600 shadow-md border border-gray-300"
          />
          <FaSearch className="absolute left-4 top-3 text-gray-500 text-lg" />
        </div>
      </div>

      {/* Blog Cards */}
      <AnimatePresence>
        <motion.div
          key={selectedCategory + searchQuery}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {currentBlogs.map((blog) => (
            <motion.div
              key={blog._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              {/* Card Design */}
              <div className="overflow-hidden rounded-xl shadow-lg bg-white text-left transition-all duration-300 hover:shadow-2xl hover:scale-105">
                {/* Clickable Image */}
                <Link to={`/blogs-Details/${blog._id}`}>
                  <img
                    src={blog.blogImage}
                    alt={blog.name}
                    className="w-full h-48 object-cover cursor-pointer"
                  />
                </Link>

                {/* Author and Date Section */}
                <div className="px-6 pt-4 pb-2 bg-gray-50 border-b border-gray-200">
                  <div className="flex items-center text-gray-600 space-x-2">
                    <p className="text-sm font-semibold hover:text-blue-600 transition-all duration-300 cursor-pointer">
                      By {blog.authorName}
                    </p>
                    <span className="text-gray-400">|</span>
                    <p className="text-sm">
                      {new Date(blog.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>

                {/* Blog Content */}
                <div className="p-6">
                  {/* Clickable Title */}
                  <Link to={`/blogs-Details/${blog._id}`}>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900 cursor-pointer hover:text-blue-600 line-clamp-2">
                      {blog.name}
                    </h3>
                  </Link>

                  {/* Short Description */}
                  <p className="mb-4 text-gray-600 line-clamp-2">
                    {blog.description.replace(/<[^>]+>/g, "")}
                  </p>

                  {/* Read More Link */}
                  <Link
                    to={`/blogs-Details/${blog._id}`}
                    className="text-[#1E3A8A] p-0 font-semibold"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Pagination */}
      <div className="flex justify-center mt-12">
        {Array.from({
          length: Math.ceil(filteredBlogs.length / blogsPerPage),
        }).map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`mx-1 px-4 py-2 rounded-full transition-all duration-300 ${
              currentPage === index + 1
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-300 text-gray-700 hover:bg-gray-400"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default BlogPage;