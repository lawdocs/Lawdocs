import React from "react";
import {
  FaBalanceScale,
  FaGavel,
  FaBookOpen,
  FaUserTie,
  FaFileAlt,
} from "react-icons/fa";

function LegalResources() {
  return (
    <div className="bg-gradient-to-r from-gray-50  to-gray-100 py-20 px-6 md:px-12 text-gray-900 font-sans">
      {/* Heading Section */}
      <div className="text-center mb-16">
        <h2 className="text-5xl mb-4 font-bold text-gray-800 font-playfair">
          Legal Resources
        </h2>
        <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto font-lato leading-relaxed">
          Explore the latest insights, expert opinions, and comprehensive
          resources on regulatory updates, laws, and compliance.
        </p>
      </div>

      {/* Resource Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          {
            title: "Regulatory Updates",
            icon: <FaBalanceScale />,
            color: "text-purple-600",
          },
          {
            title: "Laws & Regulations",
            icon: <FaGavel />,
            color: "text-blue-600",
          },
          {
            title: "Research Papers",
            icon: <FaBookOpen />,
            color: "text-green-600",
          },
          {
            title: "Expert Opinions",
            icon: <FaUserTie />,
            color: "text-orange-600",
          },
          {
            title: "Compliance Reports",
            icon: <FaFileAlt />,
            color: "text-red-600",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-xl hover:border-transparent hover:scale-105"
          >
            <div className={`${item.color} text-5xl mb-6`}>{item.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              {item.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Access detailed information and updates on
              {item.title.toLowerCase()}.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LegalResources;
