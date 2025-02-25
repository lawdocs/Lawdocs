import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 md:px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-extrabold text-yellow-500 mb-4">
            LawDocs
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Simplifying legal processes for businesses and startups with trust
            and expertise.
          </p>
          <p className="mt-4 text-gray-300">
            <strong>Head Office:</strong> Statesman House, Barakhamba Road, New
            Delhi - 11001
          </p>
          <p className="text-gray-300">
            <strong>Jaipur Office:</strong> 405, R-5, Yudhishthir Marg,
            C-Scheme, Jaipur - 302005
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-400 mb-4">About</h3>
          <ul className="space-y-2">
            {[
              "About Us",
              "The Team",
              "Career",
              "Open Work Internship",
              "Help And Support",
            ].map((link, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-400 mb-4">
            Important Links
          </h3>
          <ul className="space-y-2">
            {[
              "Find a Professional",
              "Why Paralegals",
              "Join LawDocs Network",
              "News and Media",
              "LawDocs Training",
              "LawDocs Intranet",
              "Research & Blog",
            ].map((link, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Participation */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-400 mb-4">
            Participate
          </h3>
          <ul className="space-y-2">
            {[
              "LawDocs-events",
              "Partner with us",
              "Campus Ambassador",
              "Internships",
              "Speak at Webinars",
              "Submit an Article",
              "Shoot for LawDocs TV",
            ].map((link, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-12 text-center border-t border-gray-700 pt-6">
        <p className="text-gray-300">📞 +91 9468774000</p>
        <p className="text-gray-300">📧 help@lawdocs.in</p>
        <div className="flex justify-center space-x-4 mt-4 text-xl">
          <a
            href="#"
            className="text-gray-300 hover:text-yellow-400 transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-yellow-400 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-yellow-400 transition"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-yellow-400 transition"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-400 mt-6 border-t border-gray-700 pt-6">
        <p>
          ©2025 All Rights Reserved by LawDocs | Privacy Policy | Terms of
          Service
        </p>
      </div>
    </footer>
  );
}

export default Footer;
