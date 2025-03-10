
import { useState } from 'react';

const DemoPage = () => {
  // State to manage FAQ dropdowns
  const [openIndex, setOpenIndex] = useState(null);

  // FAQs data
  const faqs = [
    {
      question: 'How do I reset my password?',
      answer: 'You can reset your password by clicking on the "Forgot Password" link on the login page.',
    },
    {
      question: 'How can I contact support?',
      answer: 'You can contact our support team by filling out the form below or emailing us at support@example.com.',
    },
    {
      question: 'Where can I find my order history?',
      answer: 'Your order history is available in the "My Account" section of the website.',
    },
  ];

  // Toggle FAQ answer visibility
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Attractive Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Help & Support</h1>
        <p className="text-lg">We're here to help you with any issues or questions. Reach out to us anytime!</p>
      </div>

      {/* New Attractive Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">How Can We Help You?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether you have a question, need assistance, or want to provide feedback, our team is ready to help you 24/7.
            Choose the option that best suits your needs.
          </p>
          <div className="mt-8 flex justify-center space-x-6">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
              Chat with Us
            </button>
            <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition duration-300">
              Call Support
            </button>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-[#e4e4e4] py-12">
        <div className="w-full px-4">
          <div className="bg-white p-8 rounded-lg shadow-md w-full">
            <h2 className="text-2xl font-bold text-blue-600 mb-6">Contact Us</h2>
            <form className="space-y-6">
              {/* Name, Mobile No., and Email in One Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Name Field */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Mobile No. Field */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2" htmlFor="mobile">
                    Mobile No.
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your mobile number"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Description Field */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="description">
                  Description
                </label>
                <textarea
                  id="description"
                  rows="4"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Describe your issue or question"
                ></textarea>
              </div>

              {/* Add Documents Field */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="documents">
                  Add Documents
                </label>
                <input
                  type="file"
                  id="documents"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  multiple
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-1/6 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-blue-600 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b pb-4">
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                    <svg
                      className={`w-6 h-6 transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  {openIndex === index && (
                    <p className="text-gray-600 mt-2">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;