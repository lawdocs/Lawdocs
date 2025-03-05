import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaFileContract,
  FaClipboardCheck,
  FaCalendarCheck,
  FaClock,
} from "react-icons/fa";

function Work() {
  const companyNames = [
    "Arriba_Logo",
    "bazaari-finnance",
    "bhanix-finance-logo",
    "jain-finance",
    "Kannattu",
    "Amarpadma",
    "muthootfincorplogo",
    "RGSPL",
    "Standard-Capital",
    "Arriba_Logo",
    "bazaari-finnance",
    "bhanix-finance-logo",
    "jain-finance",
    "Kannattu",
    "Amarpadma",
    "muthootfincorplogo",
    "RGSPL",
    "Standard-Capital",
    "Arriba_Logo",
    "bazaari-finnance",
    "bhanix-finance-logo",
    "jain-finance",
    "Kannattu",
    "Amarpadma",
    "muthootfincorplogo",
    "RGSPL",
    "Standard-Capital",
  ];

  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <div ref={ref} className="font-['Inter'] w-full bg-gray-50">
      {/* Trusted Companies Section */}
      <div className="bg-gray-100 py-16 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0, transition: { duration: 1 } },
          }}
          className="text-4xl md:text-4xl font-playfair font-extrabold text-gray-700"
        >
          Trusted by Industry Leaders
        </motion.h2>
        {/* Infinite Scrolling Logos */}
        <div className="relative w-full overflow-hidden mt-8">
          <div className="bg-white py-6 rounded-lg shadow-md">
            <div className="marquee flex lg:h-[5vw]">
              {[...companyNames, ...companyNames].map((logo, index) => (
                <img
                  key={index}
                  src={`public/assets/Clients/${logo}.png`}
                  alt={logo}
                  className="object-contain w-20 md:w-28 h-14 md:h-20 opacity-80 hover:opacity-100 transition mx-4"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Document Drafting Section */}
      <div className="relative bg-white bg-gradient-to-br  from-[#F9FAFB] to-[#E5E7EB] text-gray-900 py-20 px-6 md:px-24 rounded-lg shadow-lg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 1 } },
          }}
          className="relative max-w-4xl mx-auto text-center"
        >
          <h3 className="font-playfair font-extrabold text-4xl md:text-5xl uppercase tracking-wider relative inline-block">
            Document Drafting & Review Service
            <span className="absolute left-0 top-[7vw] bottom-0 w-full h-1 bg-blue-600 "></span>
          </h3>
          <p className="text-gray-600 mt-6 text-lg md:text-xl leading-relaxed">
            Legal documentation plays a vital role in ensuring business
            compliance and smooth operations. Our expert team specializes in
            <span className="font-semibold text-gray-800">
              drafting well-structured, clear, and enforceable contracts.
            </span>
          </p>
        </motion.div>

        {/* Steps Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <FaFileContract className="text-blue-500 text-4xl" />,
              title: "Choose Documents",
              desc: "Select the required legal documents based on your needs.",
            },
            {
              icon: <FaClipboardCheck className="text-green-500 text-4xl" />,
              title: "Provide Details",
              desc: "Fill in necessary details and upload required documents.",
            },
            {
              icon: <FaCalendarCheck className="text-purple-500 text-4xl" />,
              title: "Schedule Call",
              desc: "Book a consultation call with our expert lawyers.",
            },
            {
              icon: <FaClock className="text-red-500 text-4xl" />,
              title: "Get in 48 Hours",
              desc: "Receive your Document or Review Report quickly.",
            },
          ].map((step, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center border border-gray-300 hover:bg-blue-50 transition-all duration-300"
            >
              <div className="mb-4">{step.icon}</div>
              <h4 className="text-lg font-bold text-gray-800">{step.title}</h4>
              <p className="text-gray-600 text-sm mt-2">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Smooth Marquee Animation */}
      <style>
        {`
          .marquee {
            display: flex;
            gap: 4vw;
            min-width: 200%;
            animation: marquee 15s linear infinite;
          }

          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }

          @media (max-width: 768px) {
            .marquee {
              animation: marquee 20s linear infinite;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Work;
