const BlogDetails = () => {
    const blog = {
      author: {
        name: "Jayant Sharma",
        image: "",
      },
      publishedOn: "Jan 18, 2021",
      updatedOn: "Aug 6, 2024",
      // title: "React aur Tailwind CSS ka sahi istemal",
      content: `
        <p class="mb-6 text-gray-700 leading-relaxed">It is a big challenge for an entrepreneur to <a href="https://www.lawrbit.com/article/shops-establishment-act/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">establish</a> a new manufacturing business. Setting up a new Industry requires many approvals from Government Authorities. One of the major requirements is to obtain the Consent from the State Pollution Control Board.</p>
        <p class="mb-6 text-gray-700 leading-relaxed">The new units are under compulsion to obtain consent under the Water Act, 1974 and Air Act, 1981 even before starting subsequent production.</p>
        <p class="mb-6 text-gray-700 leading-relaxed">In case the unit is covered under Hazardous and Other Wastes (Management & Transboundary Movement) Rules, 2016, E-Waste (Management) Rules, 2016, Plastic Waste Management Rules, 2016 and Bio-Medical Waste Management Rules, 2016, it shall simultaneously apply for the grant of consent under Water (Prevention & Control of Pollution) Act, 1974, Air (Prevention & Control of Pollution) Act, 1981.</p>
        <h2 class="text-2xl font-bold text-blue-800 mt-8 mb-4">TYPES OF CONSENT</h2>
        <p class="mb-6 text-gray-700 leading-relaxed">Under the provisions of the Water (Prevention & Control of Pollution) Act, 1974 and the Air (Prevention & Control of Pollution) Act, 1981, “any industry, operation or process or an extension and addition thereto, which is likely to discharge sewerage or trade effluent into the environment or likely to emit any air pollution into the atmosphere will have to obtain the Consent”</p>
        <p class="mb-6 text-gray-700 leading-relaxed">There are two types of the Consent i.e. Consent to Establish (CTE), and Consent to Operate (CTO).</p>
        <ol class="list-decimal list-inside mb-6 text-gray-700 leading-relaxed">
          <li class="mb-2">Consent to Establish: This consent is required to be obtained before establishing any Industry, Plant, or Process. The Consent to Establish is the primary clearance.</li>
          <li class="mb-2">Consent to Operate: Once the Industry, Plant, or Process being established according to mandatory pollution control systems, the units are required to obtain consent to operate.</li>
        </ol>
        <h2 class="text-2xl font-bold text-blue-800 mt-8 mb-4">PROCEDURE TO OBTAIN CONSENT</h2>
        <p class="mb-6 text-gray-700 leading-relaxed">All the industrial sectors/projects have been categorized under Red, Orange, Green and White categories based upon their pollution potential and range of pollution index for the purpose of consent management under Water (Prevention & Control of Pollution) Act, 1974, Air (Prevention & Control of Pollution) Act, 1981.</p>
        <p class="mb-6 text-gray-700 leading-relaxed">The process for obtaining consent to establish and to operate involves making an application to the respective State Pollution Control Board along with required documents and scrutiny fees using the online portal of the State pollution control Board (Online consent management).</p>
        <p class="mb-6 text-gray-700 leading-relaxed">It’s followed by physical scrutiny of the location and assessment of the environmental management system planned to meet with the mandatory requirement prescribed by the State Pollution Control Board.</p>
        <h3 class="text-2xl font-bold text-blue-800 mt-8 mb-4">DOCUMENTS</h3>
        <p class="mb-6 text-gray-700 leading-relaxed">While every state has its specific requirement, the following set of documents are usually required across every state for seeking consent under Water Act, 1974 and Air Act, 1981</p>
        <p class="font-bold mb-4">Consent to Establish</p>
        <ul class="list-disc list-inside mb-6 text-gray-700 leading-relaxed">
          <li class="mb-2">Site Plan/Location Plan of the <a href="https://www.lawrbit.com/article/the-occupational-safety-health-and-working-conditions-code-2019/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">industry</a></li>
          <li class="mb-2">Detailed Project Report which includes the details of raw material, product to be manufactured, the capital cost of the unit (land, building, and plant machinery), water-balance, source of water, and its required quantity</li>
          <li class="mb-2">Land documents such as Registration deed/ Rent deed/Lease deed</li>
          <li class="mb-2">Details of Water Pollution Control/Air Pollution Control instruments</li>
          <li class="mb-2">MOA /partnership Deed</li>
        </ul>
        <p class="font-bold mb-4">Consent to Operate</p>
        <ul class="list-disc list-inside mb-6 text-gray-700 leading-relaxed">
          <li class="mb-2">Copy of last consent issued</li>
          <li class="mb-2">Layout plan showing the details of all manufacturing processes</li>
          <li class="mb-2">Latest analysis report of solid waste, effluent, hazardous wastes, and fuel gases</li>
          <li class="mb-2">Copy of balance sheet duly attested by CA or CA certificate</li>
          <li class="mb-2">Detail of land in case the effluent is discharged on land for percolation</li>
          <li class="mb-2">Occupation certificate issued by Town & Country Planning Department, in case of Building & construction projects/area development projects.</li>
          <li class="mb-2">MOA /partnership Deed</li>
        </ul>
        <h3 class="text-2xl font-bold text-blue-800 mt-8 mb-4">VALIDITY AND RENEWAL OF CONSENT</h3>
        <p class="mb-6 text-gray-700 leading-relaxed">Generally, Consent to Establish is a one-time activity. The State Pollution Control Board issues it for 3 to 5 years. In case the project proponent required an extension of the period, the entrepreneur can apply for an extension basis the requirement.</p>
        <p class="font-bold mb-4">Consent to operate remains valid for</p>
        <table class="w-full border-collapse border border-gray-300 mb-6">
          <thead>
            <tr class="bg-blue-600 text-white">
              <th class="p-2 border border-gray-300">Projects</th>
              <th class="p-2 border border-gray-300">Validity Period</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="p-2 border border-gray-300">Red Category (Large, Medium, Small & Micro scale)</td>
              <td class="p-2 border border-gray-300">5 years (5 year fees)</td>
            </tr>
            <tr>
              <td class="p-2 border border-gray-300">Orange Category (Large, Medium, & Small scale)</td>
              <td class="p-2 border border-gray-300">10 years (10 year fees)</td>
            </tr>
            <tr>
              <td class="p-2 border border-gray-300">Orange Category (Micro scale)</td>
              <td class="p-2 border border-gray-300">10 years (5 year fees)</td>
            </tr>
            <tr>
              <td class="p-2 border border-gray-300">Green Category (Large scale)</td>
              <td class="p-2 border border-gray-300">15 years (15 year fees)</td>
            </tr>
            <tr>
              <td class="p-2 border border-gray-300">Green Category (Medium scale)</td>
              <td class="p-2 border border-gray-300">15 Years (10 year fees)</td>
            </tr>
            <tr>
              <td class="p-2 border border-gray-300">Green Category (Micro & Small scale)</td>
              <td class="p-2 border border-gray-300">Combined CTE & CTO issued for period of 15 years after collecting 5 years fees</td>
            </tr>
          </tbody>
        </table>
        <p class="mb-6 text-gray-700 leading-relaxed">The industry/project proponent intending for renewal of the Consent to Operate shall apply through OCMMS (Online Consent Management & Monitoring System) before the expiry of the period of previous Consent to Operate permitted by the State Pollution Control Board.</p>
        <p class="mb-6 text-gray-700 leading-relaxed">In some states, there is the provision of Auto Renewal in the cases where there isn’t any change in their raw material, process, product, increase in overall capital investment cost, and machinery. Production capacity and pollution load of the unit remains the same as declared in the original application for Consent to Operate.</p>
        <h3 class="text-2xl font-bold text-blue-800 mt-8 mb-4">EXEMPTION</h3>
        <p class="mb-6 text-gray-700 leading-relaxed">The industrial units/projects covered under the white Category are exempted from Consent Management for obtaining CTE and CTO under Water Act, 1974 and Air Act, 1981 and any other units not covered under Red, Orange and Green category.</p>
        <h3 class="text-2xl font-bold text-blue-800 mt-8 mb-4">PENALTY</h3>
        <p class="mb-6 text-gray-700 leading-relaxed">If any Industry / Plant / project operates without obtaining Consent, the entrepreneur shall be liable for imprisonment for a term imprisonment for a term which shall not be less than one year and six months but which may extend to six years and with fine, and in case the failure continues, with an additional fine which may extend to fifty thousand rupees for every day during which such failure continues after the conviction for the first such failure.</p>
        <p class="mb-6 text-gray-700 leading-relaxed">For continuing violations, the imprisonment term will be no less than one year and six months, extending up to six years, along with fines. Additionally, if the violation persists, an extra fine of up to ₹50,000 may be imposed for each day the non-compliance continues after the initial conviction.</p>
        <p class="mb-6 text-gray-700 leading-relaxed">If non-compliance extends beyond one year from the date of conviction, the offender may be sentenced to imprisonment for no less than two years, up to seven years, and a fine.</p>
        <p class="mb-6 text-gray-700 leading-relaxed">Further, if any person fails to pay the imposed penalty or additional penalty within ninety days, they may face imprisonment for up to three years, or a fine up to twice the amount of the penalty or additional penalty, or both.</p>
        <p class="mb-6 text-gray-700 leading-relaxed">In cases where the offense is committed by a company, every individual responsible for the company’s operations at the time of the offense, as well as the company itself, will be deemed guilty. However, such individuals can avoid punishment if they can prove the offense occurred without their knowledge or that they exercised all due diligence to prevent it. (These penalties are outlined in the Jan Vishwas (Amendment of Provisions) Act, 2023, effective from April 1, 2024.)</p>
      `,
    };
  
    const solutions = [
      {
        title: "Global Compliance Management",
        link: "https://www.lawrbit.com/global-compliance-management-solution/",
      },
      {
        title: "Compliance Management - India",
        link: "https://www.lawrbit.com/india-most-intelligent-compliance-management-system/",
      },
      {
        title: "Legal Matter Management",
        link: "https://www.lawrbit.com/legal-matter-management-solution/",
      },
      {
        title: "Enterprise Risks Management Solution",
        link: "https://www.lawrbit.com/enterprise-risk-controls-management-software-solution/",
      },
    ];
  
    const relatedArticles = [
      {
        title: "Lawrbit: Elevating Hospitality with Seamless Compliance!",
        link: "https://www.lawrbit.com/article/lawrbit-elevating-hospitality-with-seamless-compliance/",
        image: "https://www.lawrbit.com/wp-content/uploads/2024/02/rbi-regulated-entities-banks-nbfcs-hfcs-cics-implement-futuristic-scalable-compliance-management-solution.jpg", // Replace with actual image URL
      },
      {
        title: "Vaibhav Global Ltd (VGL)",
        link: "https://www.lawrbit.com/article/vaibhav-global-ltd/",
        image: "https://www.lawrbit.com/wp-content/uploads/2024/02/rbi-regulated-entities-banks-nbfcs-hfcs-cics-implement-futuristic-scalable-compliance-management-solution.jpg", // Replace with actual image URL
      },
      {
        title: "Company Law of Maldives: A Recent Overview",
        link: "https://www.lawrbit.com/article/company-law-of-maldives-a-recent-overview/",
        image: "https://www.lawrbit.com/wp-content/uploads/2024/02/rbi-regulated-entities-banks-nbfcs-hfcs-cics-implement-futuristic-scalable-compliance-management-solution.jpg", // Replace with actual image URL
      },
      {
        title: "Exploring GST on Immovable Property Rentals",
        link: "https://www.lawrbit.com/article/exploring-gst-on-immovable-property-rentals/",
        image: "https://www.lawrbit.com/wp-content/uploads/2024/02/rbi-regulated-entities-banks-nbfcs-hfcs-cics-implement-futuristic-scalable-compliance-management-solution.jpg", // Replace with actual image URL
      },
      {
        title: "Union Budget 2025-26: Direct & Indirect Tax Highlights",
        link: "https://www.lawrbit.com/article/union-budget-2025-26-direct-indirect-tax-highlights/",
        image: "https://www.lawrbit.com/wp-content/uploads/2024/02/rbi-regulated-entities-banks-nbfcs-hfcs-cics-implement-futuristic-scalable-compliance-management-solution.jpg", // Replace with actual image URL
      },
      {
        title: "Australian Tax Laws Key Insights And Overview",
        link: "https://www.lawrbit.com/article/australian-tax-laws-key-insights-and-overview/",
        image: "https://www.lawrbit.com/wp-content/uploads/2024/02/rbi-regulated-entities-banks-nbfcs-hfcs-cics-implement-futuristic-scalable-compliance-management-solution.jpg", // Replace with actual image URL
      },
      {
        title: "Master Direction – KYC Ensuring Financial Integrity and Security",
        link: "https://www.lawrbit.com/article/master-direction-kyc-ensuring-financial-integrity-and-security/",
        image: "https://www.lawrbit.com/wp-content/uploads/2024/02/rbi-regulated-entities-banks-nbfcs-hfcs-cics-implement-futuristic-scalable-compliance-management-solution.jpg", // Replace with actual image URL
      },
      {
        title: "Understanding Cryptocurrency: A Beginner’s Guide to the Digital Revolution",
        link: "https://www.lawrbit.com/article/understanding-cryptocurrency-a-beginners-guide-to-the-digital-revolution/",
        image: "https://www.lawrbit.com/wp-content/uploads/2024/02/rbi-regulated-entities-banks-nbfcs-hfcs-cics-implement-futuristic-scalable-compliance-management-solution.jpg", // Replace with actual image URL
      },
      {
        title: "Parliament Watch – Winter Session 2024",
        link: "https://www.lawrbit.com/article/parliament-watch-winter-session-2024/",
        image: "https://www.lawrbit.com/wp-content/uploads/2024/02/rbi-regulated-entities-banks-nbfcs-hfcs-cics-implement-futuristic-scalable-compliance-management-solution.jpg", // Replace with actual image URL
      },
      {
        title: "Regulatory Tax Compliance Calendar – Ireland",
        link: "https://www.lawrbit.com/article/regulatory-compliance-calendar-ireland/",
        image: "https://www.lawrbit.com/wp-content/uploads/2024/02/rbi-regulated-entities-banks-nbfcs-hfcs-cics-implement-futuristic-scalable-compliance-management-solution.jpg", // Replace with actual image URL
      },
      {
        title: "FASTag Regulatory Insights from NACH Circulars",
        link: "https://www.lawrbit.com/article/fastag-regulatory-insights-from-nach-circulars/",
        image: "https://www.lawrbit.com/wp-content/uploads/2024/02/rbi-regulated-entities-banks-nbfcs-hfcs-cics-implement-futuristic-scalable-compliance-management-solution.jpg", // Replace with actual image URL
      },
      {
        title: "Preventing Greenwashing Practices in Business Landscape – Analysis of Greenwashing Guidelines, 2024",
        link: "https://www.lawrbit.com/article/guidelines-for-prevention-regulation-of-greenwashing-or-misleading-environmental-claims-2024/",
        image: "https://www.lawrbit.com/wp-content/uploads/2024/02/rbi-regulated-entities-banks-nbfcs-hfcs-cics-implement-futuristic-scalable-compliance-management-solution.jpg", // Replace with actual image URL
      },
      {
        title: "Foreign Company Branch in UAE: Analysis on Mode of Business Setup",
        link: "https://www.lawrbit.com/article/foreign-company-branch-in-uae-analysis-on-mode-of-business-setup/",
        image: "https://www.lawrbit.com/wp-content/uploads/2024/02/rbi-regulated-entities-banks-nbfcs-hfcs-cics-implement-futuristic-scalable-compliance-management-solution.jpg", // Replace with actual image URL
      },
      {
        title: "The Boilers Act, 1923 vs. The Boilers Bill, 2024 A Comparative Analysis",
        link: "https://www.lawrbit.com/article/comparative-analysis-of-the-boilers-act-1923-and-boilers-bill-2024/",
        image: "https://www.lawrbit.com/wp-content/uploads/2024/02/rbi-regulated-entities-banks-nbfcs-hfcs-cics-implement-futuristic-scalable-compliance-management-solution.jpg", // Replace with actual image URL
      },
      {
        title: "The Nitaqat Program – Saudization Policy",
        link: "https://www.lawrbit.com/article/the-nitaqat-program-saudization-policy/",
        image: "https://www.lawrbit.com/wp-content/uploads/2024/02/rbi-regulated-entities-banks-nbfcs-hfcs-cics-implement-futuristic-scalable-compliance-management-solution.jpg", // Replace with actual image URL
      },
    ];
  
    return (
      <div className="min-h-screen bg-gray-100">
        {/* Hero Section */}
        <div className="relative h-96 mt-2">
          <img
            src="https://www.lawrbit.com/wp-content/uploads/2024/02/rbi-regulated-entities-banks-nbfcs-hfcs-cics-implement-futuristic-scalable-compliance-management-solution.jpg" // Replace with your image URL
            alt="Hero Image"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-4xl font-bold text-white text-center mb-4">
              RBI REGULATED ENTITIES (BANKS, NBFCs, HFCs)
            </h1>
            <p className="text-lg md:text-xl text-amber-500 text-center">
              IMPLEMENT FUTURISTIC & SCALABLE COMPLIANCE MANAGEMENT SOLUTION
            </p>
          </div>
        </div>
  
        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Side - Blog Details */}
            <div className="lg:col-span-2">
              <div className="bg-white shadow-lg rounded-lg p-6">
                {/* Author Section */}
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={blog.author.image}
                    alt={blog.author.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h6 className="text-lg font-bold text-gray-800 mb-1">
                      {blog.author.name}
                    </h6>
                    <p className="text-sm text-gray-600 flex items-center">
                      <svg
                        fill="#114390"
                        width="12px"
                        height="12px"
                        viewBox="0 0 32 32"
                        className="mr-1"
                      >
                        <path d="M0 26.016q0 2.496 1.76 4.224t4.256 1.76h20q2.464 0 4.224-1.76t1.76-4.224v-20q0-1.952-1.12-3.488t-2.88-2.144v2.624q0 1.248-0.864 2.144t-2.144 0.864-2.112-0.864-0.864-2.144v-3.008h-12v3.008q0 1.248-0.896 2.144t-2.112 0.864-2.144-0.864-0.864-2.144v-2.624q-1.76 0.64-2.88 2.144t-1.12 3.488v20zM4 26.016v-16h24v16q0 0.832-0.576 1.408t-1.408 0.576h-20q-0.832 0-1.44-0.576t-0.576-1.408zM6.016 3.008q0 0.416 0.288 0.704t0.704 0.288 0.704-0.288 0.288-0.704v-3.008h-1.984v3.008zM8 24h4v-4h-4v4zM8 18.016h4v-4h-4v4zM14.016 24h4v-4h-4v4zM14.016 18.016h4v-4h-4v4zM20 24h4v-4h-4v4zM20 18.016h4v-4h-4v4zM24 3.008q0 0.416 0.288 0.704t0.704 0.288 0.704-0.288 0.32-0.704v-3.008h-2.016v3.008z"></path>
                      </svg>
                      Published on: {blog.publishedOn} | Updated on: {blog.updatedOn}
                    </p>
                  </div>
                </div>
  
                {/* Blog Content */}
                <div
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                ></div>
  
                {/* Disclaimer Section */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-blue-600 mb-4">
                    DISCLAIMER
                  </h3>
                  <p className="text-sm text-gray-600">
                    <em>
                      The information provided in this article is intended for general
                      informational purposes only and should not be construed as
                      legal advice. The content of this article is not intended to
                      create and receipt of it does not constitute any relationship.
                      Readers should not act upon this information without seeking
                      professional legal counsel.
                    </em>
                  </p>
                </div>
              </div>
            </div>
  
            {/* Right Side - Our Solutions and Related Articles */}
            <div className="lg:col-span-1">
              {/* Our Solutions Section */}
              <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
                <h5 className="text-xl font-bold text-gray-800 mb-4">
                  Our Solutions
                </h5>
                <ul className="space-y-2">
                  {solutions.map((solution, index) => (
                    <li key={index}>
                      <a
                        href={solution.link}
                        className="text-blue-600 hover:underline"
                      >
                        {solution.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
  
              {/* Related Articles Section */}
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h5 className="text-xl font-bold text-gray-800 mb-4">
                  Related Blogs
                </h5>
                <ul className="space-y-4">
                  {relatedArticles.map((article, index) => (
                    <li key={index} className="flex items-center space-x-4">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <a
                        href={article.link}
                        className="text-blue-600 hover:underline"
                      >
                        {article.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default BlogDetails;