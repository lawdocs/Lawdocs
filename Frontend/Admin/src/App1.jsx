import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { FaBars, FaTimes } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BlogCategories from "./pages/Blog/BlogCategories";
import BlogComments from "./pages/Blog/BlogComment";
import BlogList from "./pages/Blog/BlogList";
import EditBlog from "./pages/Blog/EditBlog";
import AddBlog from "./pages/Blog/AddBlog";
import PendingBlog from "./pages/Blog/PendingBlog";
import BlogCommentList from "./pages/Blog/BlogCommentList";
import BlogDescription from "./pages/Blog/BlogDescription";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    if (open) {
      gsap.to(sidebarRef.current, {
        x: "-100%",
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      gsap.to(sidebarRef.current, {
        x: "0%",
        duration: 0.3,
        ease: "power2.out",
      });
    }
    setOpen(!open);
  };

  return (
    <Router>
      <div className="flex h-screen">
        <div className="relative">
          <button
            className={`fixed top-1 left-9 z-20 text-white bg-blue-600 p-2 rounded-md shadow-lg transition-transform duration-600 ${
              open ? "translate-x-44" : ""
            }`}
            onClick={toggleSidebar}
          >
            {open ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          <div
            ref={sidebarRef}
            className={`fixed top-0 left-0 w-64 h-full bg-gray-800 text-white p-5 transform transition-transform duration-300 ${
              open ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
            <ul>
              <li className="mb-2 cursor-pointer hover:text-gray-400">
                <Link to="/users">Users</Link>
              </li>
              <li className="mb-2 cursor-pointer hover:text-gray-400">Blogs</li>
              <ul className="ml-4 text-sm">
                <li className="cursor-pointer hover:text-gray-400">
                  <Link to="/blog-categories">Blog Categories</Link>
                </li>
                <li className="cursor-pointer hover:text-gray-400">
                  <Link to="/blog-comments">Blog Comments</Link>
                </li>
                <li className="cursor-pointer hover:text-gray-400">
                  <Link to="/blog-list">Blog List</Link>
                </li>
              </ul>
            </ul>
          </div>
        </div>

        <div
          className={`flex-1 p-5 transition-all duration-300 ${
            open ? "ml-64" : "ml-0 mt-8"
          }`}
        >
          <Routes>
            <Route path="/blog-categories" element={<BlogCategories />} />
            <Route path="/blog-comments" element={<BlogComments />} />
            <Route path="/blog-list" element={<BlogList />} />
            <Route path="/edit-blog/:id" element={<EditBlog />} />
            <Route path="/addblog" element={<AddBlog />} />
            <Route path="/pending-blogs" element={<PendingBlog />} />
            <Route
              path="/blog/:id/comments"
              element={<BlogCommentList />}
            />
            <Route path="/blog/:id/description" element={<BlogDescription />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Sidebar;
