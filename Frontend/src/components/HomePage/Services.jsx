import { useState } from "react";
import { Card } from "../ui/card";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

function Services() {
  const services = [
    "SEBI Compliances",
    "NBFC Compliances",
    "Data Compliance",
    "Document Draftings",
    "Talk to a Lawyer",
    "Document Review",
    "Company Registration",
    "Trademark Registration",
    "ROC Compliance",
    "HR Compliance",
    "Compliance Audit",
    "Statutory Registration",
  ];

  const [showAll, setShowAll] = useState(false);
  const visibleServices = showAll ? services : services.slice(0, 6);

  return (
    <section className="py-16 bg-white text-center px-4">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-playfair font-extrabold mb-10 text-gray-900 tracking-tight uppercase"
      >
        Our Premium Services
      </motion.h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {visibleServices.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.07 }}
          >
            <Card className="p-6 rounded-3xl shadow-2xl bg-white hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-blue-200 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-700 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <h3 className="relative z-10 text-2xl font-semibold text-gray-800 group-hover:text-white tracking-wide">
                {service}
              </h3>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Toggle Button */}
      <div className="mt-10 flex justify-center">
        <Button
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-3 md:px-8 md:py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg  transform hover:scale-105 transition-all flex items-center gap-2"
        >
          {showAll ? "View Less" : "View More"}{" "}
          {showAll ? <FaArrowUp /> : <FaArrowDown />}
        </Button>
      </div>
    </section>
  );
}

export default Services;
