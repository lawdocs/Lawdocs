import { useRef, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  RedirectToSignIn,
  useUser,
} from "@clerk/clerk-react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blogs from "./Pages/Blogs/Blogs";
import BlogsDetails from "./Pages/Blogs/BlogsDetails";
import Team from "./Pages/Team/Team";
import TeamDetails from "./Pages/Team/TeamDetails";
import DraftsPage from "./Pages/Drafts/DraftsPage";
import LegalPage from "./Pages/LegalResources/LegalPage.jsx";
import Layout from "./Layout/Layout";
import App1 from "../../Frontend/Admin/src/App1";
import AddBlog from "./Pages/Blogs/AddBlog";
import ScrollToTop from "./ScrollToTop.jsx";

import  DemoPage from "./Pages/Demo/DemoPage";

function ProtectedRoute({children}){
  const {isSignedIn} =useUser();
  return isSignedIn ? children :<RedirectToSignIn/>
}

function App() {
  const scrollRef = useRef(null);
  const { user, isLoaded } = useUser(); // Use isLoaded to check if user data is ready
  const [isAdmin, setIsAdmin] = useState(false);

  // Check if the user is an admin
  useEffect(() => {
    if (isLoaded && user) {
      setIsAdmin(user.publicMetadata?.role === "admin");
    }
  }, [user, isLoaded]);

  // Show a loading spinner until user data is loaded
  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Render the admin panel if the user is an admin
  // if (isAdmin) {
  //   return <App1 />;
  // }

  // Render the normal UI for non-admin users
  return (
    <div ref={scrollRef} className="min-h-[100vh] overflow-hidden">
      <Router>
        <ScrollToTop />
        <main className="flex-grow">
          <Routes>
            {/* Public Route (Accessible to Everyone) */}
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs-Details/:id" element={<BlogsDetails />} />
              <Route path="/team" element={<Team />} />
              <Route path="/team-details" element={<TeamDetails/>} />
              <Route path="/demo-page" element={<DemoPage/>} />
              <Route path="/drafts" element={<DraftsPage />} />
              <Route path="/legal" element={<LegalPage />} />
              <Route
                path="/about"
                element={
                  <ProtectedRoute>
                    <About />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/addblogs"
                element={
                  <ProtectedRoute>
                    <AddBlog />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/blogs"
                element={
                  <ProtectedRoute>
                    <Blogs />
                  </ProtectedRoute>
                }
              />
            </Route>
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
