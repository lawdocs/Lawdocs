import { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignedIn, SignedOut, RedirectToSignIn, useUser } from "@clerk/clerk-react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blogs from "./Pages/Blogs/Blogs";
import Layout from "./Layout/Layout";
import App1 from '../../Frontend/Admin/src/App1'
import AddBlog from "./Pages/Blogs/AddBlog";

function ProtectedRoute({children}){
  const {isSignedIn} =useUser();
  return isSignedIn ? children :<RedirectToSignIn/>

  
}



function App() {
  const scrollRef = useRef(null);
  const { user } = useUser();

  // Check if the user is an admin
  const isAdmin = user?.publicMetadata?.role === "admin";
  if (isAdmin) {
    return <App1 />;
  }


  return (
    <div ref={scrollRef} className="min-h-[100vh] overflow-hidden">
      <Router>
        <main className="flex-grow">
          <Routes>
            {/* Public Route (Accessible to Everyone) */}

            {/* Protected Routes (Require Authentication) */}
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
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

            {isAdmin && (
              <Route element={<Layout />}>
                <Route
                  path="/admin"
                  element={
                    <SignedIn>
                    <App1/>
                    </SignedIn>
                  }
                />
              </Route>
            )}

            {/* Authentication Routes */}

            {/* Redirect Unauthenticated Users for Protected Routes */}
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
