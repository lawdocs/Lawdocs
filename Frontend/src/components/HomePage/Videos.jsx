import React from "react";

function Videos() {
  return (
    <div className="flex flex-col w-full items-center justify-center py-12 px-6 bg-white">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold  font-playfair text-gray-900 text-center">
        🎥 Legal Insights & Guidance
      </h2>
      <p className="text-gray-600 text-lg mt-3 text-center max-w-3xl">
        Stay informed with expert legal discussions and guidance for compliance
        and corporate law.
      </p>

      {/* Video Section */}
      <div className="mt-8 md:w-[120vw] bg-white shadow-lg rounded-2xl p-8 border border-gray-200 max-w-[93vw] w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Video 1 */}
          <div className="relative group">
            <iframe
              className="w-full h-56 md:h-64 lg:h-72 rounded-lg shadow-md border border-gray-300"
              src="https://www.youtube.com/embed/9t3w_r1N5OA"
              title="Understanding Business Agreements"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <p className="mt-3 text-gray-700 text-center font-medium">
              Understanding Business Agreements
            </p>
          </div>

          {/* Video 2 */}
          <div className="relative group">
            <iframe
              className="w-full h-56 md:h-64 lg:h-72 rounded-lg shadow-md border border-gray-300"
              src="https://www.youtube.com/embed/9t3w_r1N5OA"
              title="Essential Corporate Compliance Tips"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <p className="mt-3 text-gray-700 text-center font-medium">
              Essential Corporate Compliance Tips
            </p>
          </div>

          {/* Video 3 */}
          <div className="relative group">
            <iframe
              className="w-full h-56 md:h-64 lg:h-72 rounded-lg shadow-md border border-gray-300"
              src="https://www.youtube.com/embed/9t3w_r1N5OA"
              title="Legal Pitfalls to Avoid in Contracts"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <p className="mt-3 text-gray-700 text-center font-medium">
              Legal Pitfalls to Avoid in Contracts
            </p>
          </div>
        </div>

        {/* Watch More Button */}
        <div className="mt-8 flex justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all shadow-md border border-gray-300">
            Watch More Videos
          </button>
        </div>
      </div>
    </div>
  );
}

export default Videos;
