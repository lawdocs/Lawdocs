import React from 'react';

const TeamDetails = () => {
  return (
    <div className="min-h-screen">
      {/* Heading and Description Section with Background Color */}
      <div className="bg-blue-600 py-12">
        <div className="max-w-2xl mx-auto text-center px-4">
          {/* Heading */}
          <h1 className="text-4xl font-bold text-white mb-4">
            Create Your Legal Documents
          </h1>

          {/* Description (2 lines) */}
          <p className="text-lg text-gray-200">
            Draft, customize, and download professional legal documents in minutes. Our platform ensures perfection.
          </p>
        </div>
      </div>

      {/* Four Columns Section */}
      <div className="max-w-7xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1 - Rental Agreement */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            {/* Box Heading */}
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Rental Agreement
            </h2>

            {/* Form Image */}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtROIcd1OZPx9Z0tRvDDKrFUk4S71R7SrTrkpEc7K2S6qRsEcPX9cI-9VW1wqB63GEKa4&usqp=CAU"
              alt="Rental Agreement Form"
              className="w-full max-w-xs h-auto rounded-lg mb-4 mx-auto"
            />

            {/* Buttons */}
            <div className="flex justify-between">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                Create
              </button>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300">
                Download
              </button>
            </div>
          </div>

          {/* Column 2 - NDA */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            {/* Box Heading */}
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Non-Disclosure Agreement (NDA)
            </h2>

            {/* Form Image */}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4dJY8vUV6koSV6FRE8H1rbf3onCCp2Uj82Cl8cB2eqZ-gt5Rt9JlhcEqF8_6t5TNkgE&usqp=CAU"
              alt="NDA Form"
              className="w-full max-w-xs h-auto rounded-lg mb-4 mx-auto"
            />

            {/* Buttons */}
            <div className="flex justify-between">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                Create
              </button>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300">
                Download
              </button>
            </div>
          </div>

          {/* Column 3 - Employment Contract */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            {/* Box Heading */}
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Employment Contract
            </h2>

            {/* Form Image */}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4dJY8vUV6koSV6FRE8H1rbf3onCCp2Uj82Cl8cB2eqZ-gt5Rt9JlhcEqF8_6t5TNkgE&usqp=CAU"
              alt="Employment Contract Form"
              className="w-full max-w-xs h-auto rounded-lg mb-4 mx-auto"
            />

            {/* Buttons */}
            <div className="flex justify-between">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                Create
              </button>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300">
                Download
              </button>
            </div>
          </div>

          {/* Column 4 - Partnership Agreement */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            {/* Box Heading */}
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Partnership Agreement
            </h2>

            {/* Form Image */}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4dJY8vUV6koSV6FRE8H1rbf3onCCp2Uj82Cl8cB2eqZ-gt5Rt9JlhcEqF8_6t5TNkgE&usqp=CAU"
              alt="Partnership Agreement Form"
              className="w-full max-w-xs h-auto rounded-lg mb-4 mx-auto"
            />

            {/* Buttons */}
            <div className="flex justify-between">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                Create
              </button>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300">
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDetails; 