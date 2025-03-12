const TeamDetails = () => {
  return (
    <div className="min-h-screen">
      {/* Heading and Description Section with Background Color */}
      <div className="bg-black py-12">
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
        {/* Row 1 */}
        <div className="p-6 rounded-lg mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Column 1 - Rental Agreement */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Rental Agreement
              </h2>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4dJY8vUV6koSV6FRE8H1rbf3onCCp2Uj82Cl8cB2eqZ-gt5Rt9JlhcEqF8_6t5TNkgE&usqp=CAU"
                alt="Rental Agreement Form"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
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
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Non-Disclosure Agreement (NDA)
              </h2>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4dJY8vUV6koSV6FRE8H1rbf3onCCp2Uj82Cl8cB2eqZ-gt5Rt9JlhcEqF8_6t5TNkgE&usqp=CAU"
                alt="NDA Form"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
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
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Employment Contract
              </h2>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4dJY8vUV6koSV6FRE8H1rbf3onCCp2Uj82Cl8cB2eqZ-gt5Rt9JlhcEqF8_6t5TNkgE&usqp=CAU"
                alt="Employment Contract Form"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
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
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Partnership Agreement
              </h2>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4dJY8vUV6koSV6FRE8H1rbf3onCCp2Uj82Cl8cB2eqZ-gt5Rt9JlhcEqF8_6t5TNkgE&usqp=CAU"
                alt="Partnership Agreement Form"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
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

        {/* Row 2 */}
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-lg mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Column 1 - Loan Agreement */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Loan Agreement
              </h2>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4dJY8vUV6koSV6FRE8H1rbf3onCCp2Uj82Cl8cB2eqZ-gt5Rt9JlhcEqF8_6t5TNkgE&usqp=CAU"
                alt="Loan Agreement Form"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <div className="flex justify-between">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                  Create
                </button>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300">
                  Download
                </button>
              </div>
            </div>

            {/* Column 2 - Service Agreement */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Service Agreement
              </h2>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4dJY8vUV6koSV6FRE8H1rbf3onCCp2Uj82Cl8cB2eqZ-gt5Rt9JlhcEqF8_6t5TNkgE&usqp=CAU"
                alt="Service Agreement Form"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <div className="flex justify-between">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                  Create
                </button>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300">
                  Download
                </button>
              </div>
            </div>

            {/* Column 3 - Lease Agreement */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Lease Agreement
              </h2>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4dJY8vUV6koSV6FRE8H1rbf3onCCp2Uj82Cl8cB2eqZ-gt5Rt9JlhcEqF8_6t5TNkgE&usqp=CAU"
                alt="Lease Agreement Form"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <div className="flex justify-between">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                  Create
                </button>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300">
                  Download
                </button>
              </div>
            </div>

            {/* Column 4 - Sales Agreement */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Sales Agreement
              </h2>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4dJY8vUV6koSV6FRE8H1rbf3onCCp2Uj82Cl8cB2eqZ-gt5Rt9JlhcEqF8_6t5TNkgE&usqp=CAU"
                alt="Sales Agreement Form"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
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

        {/* Row 3 */}
        <div className="p-6 rounded-lg mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Column 1 - Consulting Agreement */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Consulting Agreement
              </h2>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4dJY8vUV6koSV6FRE8H1rbf3onCCp2Uj82Cl8cB2eqZ-gt5Rt9JlhcEqF8_6t5TNkgE&usqp=CAU"
                alt="Consulting Agreement Form"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <div className="flex justify-between">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                  Create
                </button>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300">
                  Download
                </button>
              </div>
            </div>

            {/* Column 2 - Franchise Agreement */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Franchise Agreement
              </h2>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4dJY8vUV6koSV6FRE8H1rbf3onCCp2Uj82Cl8cB2eqZ-gt5Rt9JlhcEqF8_6t5TNkgE&usqp=CAU"
                alt="Franchise Agreement Form"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <div className="flex justify-between">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                  Create
                </button>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300">
                  Download
                </button>
              </div>
            </div>

            {/* Column 3 - Joint Venture Agreement */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Joint Venture Agreement
              </h2>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4dJY8vUV6koSV6FRE8H1rbf3onCCp2Uj82Cl8cB2eqZ-gt5Rt9JlhcEqF8_6t5TNkgE&usqp=CAU"
                alt="Joint Venture Agreement Form"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <div className="flex justify-between">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                  Create
                </button>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300">
                  Download
                </button>
              </div>
            </div>

            {/* Column 4 - Licensing Agreement */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Licensing Agreement
              </h2>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4dJY8vUV6koSV6FRE8H1rbf3onCCp2Uj82Cl8cB2eqZ-gt5Rt9JlhcEqF8_6t5TNkgE&usqp=CAU"
                alt="Licensing Agreement Form"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
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

        {/* Row 4 */}
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-lg mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Column 1 - Shareholder Agreement */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Shareholder Agreement
              </h2>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4dJY8vUV6koSV6FRE8H1rbf3onCCp2Uj82Cl8cB2eqZ-gt5Rt9JlhcEqF8_6t5TNkgE&usqp=CAU"
                alt="Shareholder Agreement Form"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <div className="flex justify-between">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                  Create
                </button>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300">
                  Download
                </button>
              </div>
            </div>

            {/* Column 2 - Supply Agreement */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Supply Agreement
              </h2>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4dJY8vUV6koSV6FRE8H1rbf3onCCp2Uj82Cl8cB2eqZ-gt5Rt9JlhcEqF8_6t5TNkgE&usqp=CAU"
                alt="Supply Agreement Form"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <div className="flex justify-between">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                  Create
                </button>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300">
                  Download
                </button>
              </div>
            </div>

            {/* Column 3 - Distribution Agreement */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Distribution Agreement
              </h2>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4dJY8vUV6koSV6FRE8H1rbf3onCCp2Uj82Cl8cB2eqZ-gt5Rt9JlhcEqF8_6t5TNkgE&usqp=CAU"
                alt="Distribution Agreement Form"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <div className="flex justify-between">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                  Create
                </button>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300">
                  Download
                </button>
              </div>
            </div>

            {/* Column 4 - Reseller Agreement */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Reseller Agreement
              </h2>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4dJY8vUV6koSV6FRE8H1rbf3onCCp2Uj82Cl8cB2eqZ-gt5Rt9JlhcEqF8_6t5TNkgE&usqp=CAU"
                alt="Reseller Agreement Form"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
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

        {/* Row 5 */}
        <div className="p-6 rounded-lg mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Column 1 - Sponsorship Agreement */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Sponsorship Agreement
              </h2>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4dJY8vUV6koSV6FRE8H1rbf3onCCp2Uj82Cl8cB2eqZ-gt5Rt9JlhcEqF8_6t5TNkgE&usqp=CAU"
                alt="Sponsorship Agreement Form"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <div className="flex justify-between">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                  Create
                </button>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300">
                  Download
                </button>
              </div>
            </div>

            {/* Column 2 - Endorsement Agreement */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Endorsement Agreement
              </h2>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4dJY8vUV6koSV6FRE8H1rbf3onCCp2Uj82Cl8cB2eqZ-gt5Rt9JlhcEqF8_6t5TNkgE&usqp=CAU"
                alt="Endorsement Agreement Form"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <div className="flex justify-between">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                  Create
                </button>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300">
                  Download
                </button>
              </div>
            </div>

            {/* Column 3 - Collaboration Agreement */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Collaboration Agreement
              </h2>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4dJY8vUV6koSV6FRE8H1rbf3onCCp2Uj82Cl8cB2eqZ-gt5Rt9JlhcEqF8_6t5TNkgE&usqp=CAU"
                alt="Collaboration Agreement Form"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <div className="flex justify-between">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                  Create
                </button>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300">
                  Download
                </button>
              </div>
            </div>

            {/* Column 4 - Confidentiality Agreement */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Confidentiality Agreement
              </h2>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4dJY8vUV6koSV6FRE8H1rbf3onCCp2Uj82Cl8cB2eqZ-gt5Rt9JlhcEqF8_6t5TNkgE&usqp=CAU"
                alt="Confidentiality Agreement Form"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
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
    </div>
  );
  
};

export default TeamDetails;
              
             