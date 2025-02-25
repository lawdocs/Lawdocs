    import { useEffect, useState } from "react";
    import { motion, AnimatePresence } from "framer-motion";
    import { FaArrowUp, FaSearch } from "react-icons/fa";
    import blogimg from "../../assets/Blogs/Blog13.webp";

    const blogs = [
      {
        id: 1,
        title: "2 Cybersecurity Threats in Fintech in the Indian Context",
        date: "15 Feb",
        author: "LawDocs Team",
        category: "FinTech",
        image: "https://via.placeholder.com/400x200",
      },
      {
        id: 2,
        title: "4 Reasons Why We Need Multiple Corona Vaccines For Covid-19",
        date: "14 Feb",
        author: "Tushya Bhadani",
        category: "Trend",
        image: "https://via.placeholder.com/400x200",
      },
      {
        id: 3,
        title: "A Critical Analysis Of The Wage Code, 2020",
        date: "14 Feb",
        author: "Aayusha Gupta",
        category: "HR and Service",
        image: "https://via.placeholder.com/400x200",
      },
      {
        id: 4,
        title: "A Glance on Benami Transactions and Black Money",
        date: "14 Feb",
        author: "Jigyasa Vohra",
        category: "Financial Transactions",
        image: "https://via.placeholder.com/400x200",
      },
      {
        id: 5,
        title: "A Guide to Loan Providing Apps and Recovery Agents",
        date: "07 Dec",
        author: "Shubhashish Banerjee",
        category: "Banking Law",
        image: "https://via.placeholder.com/400x200",
      },
      {
        id: 6,
        title: "A Regulatory Framework for Primary Market Transactions",
        date: "11 Feb",
        author: "Rachel Sethia",
        category: "Corporate Law & SEBI",
        image: "https://via.placeholder.com/400x200",
      },
      {
        id: 7,
        title: "A review: India’s Foreign Trade Policy From 2015-2020",
        date: "14 Feb",
        author: "Abeer Tiwari",
        category: "International Trade Laws",
        image: "https://via.placeholder.com/400x200",
      },
      {
        id: 8,
        title: "Abortion Misconceptions and Realities : An Analysis",
        date: "07 Feb",
        author: "Riffat Soin",
        category: "Legal",
        image: "https://via.placeholder.com/400x200",
      },
      {
        id: 9,
        title: "Addressing Bias and Fairness: AI in Credit Assessment",
        date: "10 Feb",
        author: "LawDocs Team",
        category: "FinTech",
        image: "https://via.placeholder.com/400x200",
      },
      {
        id: 10,
        title: "Adultery and the Indian Law",
        date: "11 Feb",
        author: "Ayushi Nanda",
        category: "Legal",
        image: "https://via.placeholder.com/400x200",
      },
      {
        id: 11,
        title: "Adverse Possession: a Boon or a Curse?",
        date: "11 Feb",
        author: "Aaysha Khatri",
        category: "Property Transactions",
        image: "https://via.placeholder.com/400x200",
      },
      {
        id: 12,
        title: "AI and Machine Learning in Banking",
        date: "09 Feb",
        author: "LawDocs Team",
        category: "FinTech",
        image: "https://via.placeholder.com/400x200",
      },
      {
        id: 13,
        title: "Alimony and Maintenance in India",
        date: "19 Dec",
        author: "Lavanya",
        category: "Family Matters",
        image: "https://via.placeholder.com/400x200",
      },
      {
        id: 14,
        title: "All About Claw-back Provision",
        date: "11 Feb",
        author: "Nishi Kumari",
        category: "Corporate Law & SEBI",
        image: "https://via.placeholder.com/400x200",
      },
      {
        id: 15,
        title: "All About Common Internet and Technology Contract in India",
        date: "11 Feb",
        author: "Pragati Mudgal",
        category: "IT and Websites",
        image: "https://via.placeholder.com/400x200",
      },
      {
        id: 16,
        title: "MISLEADING OF ADVERTISEMENTS AND HOW IT IMPACTS THE CONSUMERS",
        date: "21 Jan",
        author: "Srijan Sonkar",
        category: "Consumer Law",
        image: "https://via.placeholder.com/400x200",
      },
      {
        id: 17,
        title: "The NDPS: Cannabis laws in India",
        date: "21 Jan",
        author: "Kudrat Bains",
        category: "Criminal Law",
        image: "https://via.placeholder.com/400x200",
      },
      {
        id: 18,
        title:
          "What are the factors which constitute the welfare of the child in a custody case in India?",
        date: "21 Jan",
        author: "JITASHA BAHL",
        category: "Family Matters",
        image: "https://via.placeholder.com/400x200",
      },
      {
        id: 19,
        title: "WHATSAPP AND VIOLENCE: THE DEADLY FORWARDS",
        date: "21 Jan",
        author: "SACHIN KUMAR",
        category: "Legal",
        image: "https://via.placeholder.com/400x200",
      },
      {
        id: 20,
        title: "A Guide to Loan Providing Apps and Recovery Agents",
        date: "07 Dec",
        author: "Shubhashish Banerjee",
        category: "Banking Law",
        image: "https://via.placeholder.com/400x200",
      },
    ];  

    const categories = [
      "All",
      "FinTech",
      "Trend",
      "HR and Service",
      "Banking Law",
      "Corporate Law & SEBI",
      "International Trade Laws",
      "Legal",
      "Property Transactions",
      "Family Matters",
    ];

    function BlogPage() {
      const [selectedCategory, setSelectedCategory] = useState("All");
      const [searchQuery, setSearchQuery] = useState("");
      const [currentPage, setCurrentPage] = useState(1);
      const blogsPerPage = 6;

      useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, []);

      const filteredBlogs = blogs.filter((blog) => {
        const matchesCategory =
          selectedCategory === "All" || blog.category === selectedCategory;
        const matchesSearch = blog.title
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      });

      const indexOfLastBlog = currentPage * blogsPerPage;
      const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
      const currentBlogs = filteredBlogs.slice(
        indexOfFirstBlog,
        indexOfLastBlog
      );

      const paginate = (pageNumber) => setCurrentPage(pageNumber);

      return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 md:px-10 lg:px-16">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-playfair font-extrabold text-gray-900">
              Latest Blogs
            </h1>
            <p className="mt-3 text-lg text-gray-600">
              Explore insights on legal and fintech developments.
            </p>
          </div>

          {/* Category & Search Bar */}
          <div className="sticky top-0 bg-white shadow-lg rounded-lg p-4 mb-8 flex flex-col lg:flex-row justify-between items-center gap-4">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
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
            <div className="relative w-full max-w-[22vw]">
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
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              {currentBlogs.map((blog) => (
                <motion.div
                  key={blog.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="rounded-lg shadow-lg bg-white overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <img
                    src={blogimg}
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <span className="text-sm text-gray-500">{blog.date}</span>
                    <h2 className="mt-2 text-lg font-semibold text-gray-900">
                      {blog.title}
                    </h2>
                    <p className="mt-1 text-gray-700">By {blog.author}</p>
                    <button className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all duration-300">
                      Read More →
                    </button>
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

          {/* Scroll to Top Button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
          >
            <FaArrowUp className="text-xl" />
          </button>
        </div>
      );
    }

    export default BlogPage;
