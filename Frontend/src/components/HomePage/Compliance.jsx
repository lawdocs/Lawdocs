import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaShieldAlt,
  FaUserShield,
  FaBuilding,
  FaChartLine,
  FaCode,
  FaUniversity,
} from "react-icons/fa";
import { Button } from "../ui/button";

function Compliance() {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      controls.start("visible");
      setHasAnimated(true);
    }
  }, [inView, controls, hasAnimated]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center  justify-center min-h-screen px-6 py-16 bg-gradient-to-br  from-[#F9FAFB] shadow-lg rounded-md   to-[#E5E7EB] text-gray-900"
    >
      {/* Title Section */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: -30 },
          visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-playfair  font-extrabold tracking-wide drop-shadow-lg text-gray-800">
          🚀 Compliance Management Software
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          A customized solution designed to ensure proper compliance for your
          company.
        </p>
      </motion.div>

      {/* Compliance List */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl"
      >
        {/* Compliance Categories */}
        {[
          { name: "SEBI Compliance", icon: <FaChartLine /> },
          { name: "NBFC Compliance", icon: <FaUniversity /> },
          { name: "Data Protection", icon: <FaShieldAlt /> },
          { name: "HR Compliance", icon: <FaUserShield /> },
          { name: "ROC Compliance", icon: <FaBuilding /> },
          { name: "IT Compliance", icon: <FaCode /> },
        ].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4 bg-white px-6 py-4 rounded-xl shadow-lg border border-gray-200 text-gray-900 transition-all duration-300 hover:shadow-xl hover:border-blue-500"
          >
            <div className="text-blue-600 text-2xl">{item.icon}</div>
            <p className="text-lg font-semibold">{item.name}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Call-to-Action Button */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        }}
        className="mt-10"
      >
        <Button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white text-lg font-semibold py-3 px-8 rounded-lg transition-transform duration-300 shadow-md hover:scale-105">
          Get Started
        </Button>
      </motion.div>
    </div>
  );
}

export default Compliance;
