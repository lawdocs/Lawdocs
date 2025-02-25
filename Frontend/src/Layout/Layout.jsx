// Layout Component

import {
  Outlet,
} from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
const Layout = () => {
  return (
    <div className="">
      {/* Navbar */}
      <Navbar />

      {/* Main Content - Outlet for nested routes */}
      <main className="pt-[5vw]">
              {/* Add paddinmt-[g-top to account for Navbar height */}
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};


export default Layout