import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import BlogCategories from "./pages/Blog/BlogCategories";
import BlogList from "./pages/Blog/BlogList";
import EditBlog from "./pages/Blog/EditBlog";
import AddBlog from "./pages/Blog/AddBlog";
import PendingBlog from "./pages/Blog/PendingBlog";
import BlogCommentList from "./pages/Blog/BlogCommentList";
import BlogDescription from "./pages/Blog/BlogDescription";
import PendingComments from "./pages/Blog/PendingComments";
import User from "./pages/Users/User.jsx"
import companylogo from '../../public/assets/Logo/LawdocsLogo4.png'

const Sidebar = () => {


  const [open, setOpen] = useState(false);
  const [showBlogs, setShowBlogs] = useState(false); // State to toggle Blogs dropdown
  const sidebarRef = useRef(null);
  const overlayRef = useRef(null);
  const { user } = useUser();

  // Toggle sidebar function
  const toggleSidebar = () => {
    setOpen(!open);
  };

  // Toggle Blogs dropdown
  const toggleBlogs = () => {
    setShowBlogs(!showBlogs);
  };

  // GSAP animations for sidebar and overlay
  useEffect(() => {
    if (open) {
      gsap.to(sidebarRef.current, {
        x: "0%",
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(overlayRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
        pointerEvents: "auto", // Enable interaction with the overlay
      });
    } else {
      gsap.to(sidebarRef.current, {
        x: "-100%",
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
        pointerEvents: "none", // Disable interaction with the overlay
      });
    }
  }, [open]);

  // Close sidebar when clicking outside (on the overlay)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (open && !sidebarRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <Router>
      <div className="flex h-screen">
        {/* Overlay */}
        <div
          ref={overlayRef}
          className="fixed inset-0 bg-black bg-opacity-50 z-10 opacity-0 pointer-events-none"
          onClick={toggleSidebar}
        />

        {/* Sidebar Toggle Button */}
        <button
          className={`fixed top-2 left-4 z-20 text-white bg-blue-600 p-3 rounded-full shadow-lg transition-transform duration-300 hover:bg-blue-700 ${
            open ? "translate-x-64" : ""
          }`}
          onClick={toggleSidebar}
        >
          {open ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Sidebar */}
        <div
          ref={sidebarRef}
          className="fixed top-0 left-0 w-64 h-full bg-gray-800 text-white p-5 transform -translate-x-full z-20"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Admin Panel</h2>
          <ul>
            <li className="mb-3">
              <Link
                to="/users"
                className="block p-2 rounded hover:bg-gray-700 transition-colors duration-200"
                onClick={toggleSidebar}
              >
                Users
              </Link>
            </li>
            <li className="mb-3">
              <div
                className="flex justify-between items-center p-2 rounded hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
                onClick={toggleBlogs}
              >
                <span>Blogs</span>
                {showBlogs ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {/* Blog List Dropdown */}
              {showBlogs && (
                <ul className="ml-4 mt-2">
                  <li>
                    <Link
                      to="/blog-list"
                      className="block p-2 rounded hover:bg-gray-700 transition-colors duration-200"
                      onClick={toggleSidebar}
                    >
                      Blog List
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/blog-categories"
                      className="block p-2 rounded hover:bg-gray-700 transition-colors duration-200"
                      onClick={toggleSidebar}
                    >
                      Blog Categories
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Navbar */}
          <nav className="bg-white shadow-md p-4 flex justify-between items-center z-10">
            {/* Logo */}
            <div className=" ml-[5vw] flex font-bold text-gray-800">
              <img className="w-12 h-12" src={companylogo} alt="Company Logo" />
              <Link to="/" className="flex flex-col ">
                <div className=" ml-2 text-[1.8vw] font-serif font-bold">
                  Law <span className=" text-[#0808CE] font-normal">Docs</span>
                </div>
                {/* <div className="   ml-2 text-[0.9vw] font-serif font-bold">
                Get In Black
                </div> */}
              
              </Link>
            </div>

            {/* Clerk User Icon */}
            <div className="flex items-center">
              <UserButton afterSignOutUrl="/" />
            </div>
          </nav>

          {/* Page Content */}
          <div
            className={`flex-1 p-5 transition-all duration-300 ${
              open ? "ml-64" : "ml-0"
            }`}
          >
            <Routes>
              <Route path="/blog-categories" element={<BlogCategories />} />
              <Route path="/blog-list" element={<BlogList />} />
              <Route path="/edit-blog/:id" element={<EditBlog />} />
              <Route path="/addblog" element={<AddBlog />} />
              <Route path="/pending-blogs" element={<PendingBlog />} />
              <Route path="/users" element={<User />} />
              <Route path="/blog-categories" element={<BlogCategories/>} />

              <Route
                path="/pending-comments/:id"
                element={<PendingComments />}
              />
              <Route path="/blog/:id/comments" element={<BlogCommentList />} />
              <Route
                path="/blog/:id/description"
                element={<BlogDescription />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Sidebar;
