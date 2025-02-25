import  {  useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
// import LocomotiveScroll from "locomotive-scroll";
import Blogs from "./Pages/Blogs/Blogs";
import  Layout  from "./Layout/Layout";
import SignUp from "./Pages/Auth/Signup";
import SignIn from "./Pages/Auth/SignIn";
import VerifyEmail from "./Pages/Auth/VerifyEmail";
import { RedirectToSignIn,SignedOut } from "@clerk/clerk-react";

function App() {
  const scrollRef = useRef(null); // Reference for the scroll container

  // useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //     el: scrollRef.current,
  //     smooth: true, // Enables smooth scrolling
  //     lerp: 0.1, // Adjusts the smoothness (lower values = smoother)
  //   });

  //   return () => {
  //     if (scroll) scroll.destroy(); // Cleanup on unmount
  //   };
  // }, []);
  return (
    <div ref={scrollRef} className="  min-h-[100vh] overflow-hidden">
      <Router>
        {/* Routes */}
        <main className=" flex-grow">
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/blogs" element={<Blogs />} />
            </Route>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/verify-email" element={<VerifyEmail />} />

            <Route
              path="*"
              element={
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              }
            />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
