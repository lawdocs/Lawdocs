import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const BuildingContract = () => {
  const faqs = [
    { question: "What is a building contract?", answer: "A building contract is a legally binding agreement that outlines the scope, terms, and responsibilities of construction work." },
    { question: "Why is a contract necessary?", answer: "Contracts ensure clarity, prevent disputes, and protect all parties involved in a project." },
    { question: "What should be included in a contract?", answer: "Key elements include scope of work, payment terms, timeline, legal compliance, and responsibilities." },
    { question: "How do I create a contract?", answer: "You can use templates or consult a legal expert to draft a contract tailored to your project." },
    { question: "Can contracts be modified?", answer: "Yes, contracts can be amended with mutual agreement between parties involved." },
    { question: "Are digital contracts valid?", answer: "Yes, digital contracts are legally valid as long as they meet electronic signature regulations." },
    { question: "What happens if a party breaches the contract?", answer: "Legal action may be taken, including penalties or termination of the agreement." },
    { question: "Do contracts need to be notarized?", answer: "Not all contracts require notarization, but it can add an extra layer of security." },
    { question: "How long does a contract remain valid?", answer: "A contract remains valid until the completion of the project or as per agreed terms." },
    { question: "Where can I find contract templates?", answer: "There are several online resources providing customizable building contract templates." }
  ];
  
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Header Section */}
      <div className="relative w-full h-48 bg-gray-800 flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-transparent to-blue-500 animate-pulse transition-all"></div>
        <h1 className="text-3xl font-bold text-white relative z-10">Building Contracts</h1>
        <p className="text-gray-300 relative z-10 mt-2 text-center max-w-2xl">
          Essential agreements that define construction work, terms, and responsibilities for all parties involved.
        </p>
      </div>
      
      {/* Available Contracts Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg mt-8 w-full max-w-6xl mx-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Available Contracts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(9)].map((_, index) => (
            <div key={index} className="bg-gray-50 rounded-lg shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-shadow duration-300">
              <img
                src="https://via.placeholder.com/100"
                alt="Demo"
                className="w-20 h-20 rounded-full object-cover mb-4"
              />
              <p className="text-gray-600 text-center mb-4">This is a demo contract description to illustrate layout.</p>
              <div className="flex space-x-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                  Create
                </button>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Call to Action Section */}
      <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-blue-600 to-blue-800 p-8 rounded-lg shadow-lg max-w-6xl mt-8 mx-4 w-full">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-bold text-white">Continue Drafting Your Contract</h2>
          <p className="text-gray-200 mt-4">Start creating your custom building contract today and ensure your project runs smoothly.</p>
          <button className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition">
            Continue Drafting
          </button>
        </div>
        <img
          src="https://via.placeholder.com/300"
          alt="Call to Action"
          className="w-64 h-40 rounded-lg object-cover mt-6 md:mt-0 md:ml-6"
        />
      </div>
      
      {/* FAQ Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-6xl mt-8 mx-4 w-full">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
              <button
                className="w-full text-left text-gray-800 font-semibold flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
                {openIndex === index ? <FaChevronUp className="text-blue-600" /> : <FaChevronDown className="text-blue-600" />}
              </button>
              <div className={`transition-all duration-300 overflow-hidden ${openIndex === index ? 'max-h-40' : 'max-h-0'}`}>
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuildingContract