import { useEffect, useState } from "react";
import { Card } from "../ui/card";
import { Link } from "react-router-dom";
import axios from "axios";

function BlogSection() {
  const [trendingBlogs, setTrendingBlogs] = useState([]); // State to store trending blogs

  // Fetch trending blogs from the backend
  useEffect(() => {
    const fetchTrendingBlogs = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/blogs/trending`
        );
        console.log("res", response);
        setTrendingBlogs(response.data.blogs); // Assuming the API returns { blogs: [...] }
      } catch (error) {
        console.error("Error fetching trending blogs:", error);
      }
    };
    fetchTrendingBlogs();
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-[#F9FAFB] to-[#E5E7EB] shadow-xl">
      <div className="container mx-auto text-center px-6 md:px-12">
        <h2 className="text-4xl md:text-[3vw] font-bold font-playfair text-center mb-12 text-gray-900">
          Trending Topics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trendingBlogs.map((blog) => (
            <Card
              key={blog._id}
              className="overflow-hidden rounded-xl shadow-lg bg-white text-left transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              {/* Clickable Image */}
              <Link to={`/blogs-Details/${blog._id}`}>
                <img
                  src={blog.blogImage}
                  alt={blog.name}
                  className="w-full h-48 object-cover cursor-pointer"
                />
              </Link>
              <div className="p-6">
                {/* Clickable Title */}
                <Link to={`/blogs-Details/${blog._id}`}>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 line-clamp-2 cursor-pointer hover:text-blue-600">
                    {blog.name}
                  </h3>
                </Link>
                {/* Description with 2 lines */}
                <p className="mb-4 text-gray-600 line-clamp-2">
                  {blog.description.replace(/<[^>]+>/g, "")}
                </p>
                <div className="text-sm text-gray-500 mb-4">
                  <span>By {blog.authorName}</span> |{" "}
                  <span>{new Date(blog.date).toLocaleDateString()}</span>
                </div>
                <Link
                  to={`/blogs-Details/${blog._id}`}
                  className="text-[#1E3A8A] p-0 font-semibold"
                >
                  Read More →
                </Link>
              </div>
            </Card>
          ))}
        </div>
        {/* Read More Button */}
        <div className="flex gap-[2vw] w-full justify-center">
          <div className="mt-10 flex justify-center">
            <Link
              to="/blogs"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-lg transition-transform duration-300 shadow-md hover:scale-110"
            >
              Read More
            </Link>
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              to="/addblogs"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-lg transition-transform duration-300 shadow-md hover:scale-110"
            >
              Submit an Article
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogSection;