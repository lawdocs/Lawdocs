import { useState } from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa"; // Import LinkedIn and Email icons

const Team = () => {
  const teamMembers = [
    // Partners (Founder)
    {
      id: 1,
      name: "Rajan Prajapati",
      role: "Founder",
      description: "Experienced in corporate law and mergers.",
      image: "https://res.cloudinary.com/dzanl16re/image/upload/v1742298548/rajan_wvlonk.jpg",
      linkedin: "https://www.linkedin.com",
      email: "jerome.bell@example.com",
      category: "Founder",
      fullDetails:
        "Jerome Bell has over 20 years of experience in corporate law, specializing in mergers and acquisitions. He holds a JD from Harvard Law School.",
    },
    {
      id: 13,
      name: "Vinay Saini",
      role: "Senior Developer",
      description: "",
      image: "https://res.cloudinary.com/dzanl16re/image/upload/v1742298547/vinay_saini_cf7bn5.jpg",
      linkedin: "https://www.linkedin.com",
      email: "vinay@lawdocs.in",
      category: "Developers",
      fullDetails:
        "",
    },
    // {
    //   id: 13,
    //   name: "Vishal Saini",
    //   role: "Managing Developer",
    //   description: "",
    //   image: "https://res.cloudinary.com/dzanl16re/image/upload/v1742364400/vishal_saini_fafje7.jpg",
    //   linkedin: "https://www.linkedin.com/in/vishal-saini-4563a330b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    //   email: "vinayitlawdocs@gmail.com",
    //   category: "Developers",
    //   fullDetails:
    //     "",
    // },
    // Associates
    {
      id: 14,
      name: "Riya Agarwal",
      role: "Associate",
      description: "Focuses on tax and estate planning.",
      image: "https://res.cloudinary.com/dzanl16re/image/upload/v1742294293/RIYA_AGARWAL_dupkgn.jpg",
      linkedin: "https://www.linkedin.com",
      email: "riya@lawdocs.in",
      category: "Associates",
      fullDetails:
        "Riya Agarwal holds a Master's in Corporate and Commercial Laws from NLU Nagpur and a Bachelor's degree from Jaipur National University. With expertise in Governance, Risk, and Compliance (GRC), she specializes in regulatory frameworks, corporate governance, and risk management strategies. Her in-depth knowledge enables her to guide organizations in ensuring legal compliance and mitigating operational risks effectively. ",
    },
    {
      id: 13,
      name: "Krati Patni",
      role: "Associate",
      description: "Expert in family law.",
      image: "https://res.cloudinary.com/dzanl16re/image/upload/v1742294293/Krati_Patni_Image_idj7nn.jpg",
      linkedin: "https://www.linkedin.com",
      email: "Krati@lawdocs.in",
      category: "Associates",
      fullDetails:
        "Krati Patni is a dedicated legal professional who graduated from Manipal University Jaipur in 2024. With a strong foundation in corporate law, she is currently working as an Associate at LawDocs, where she specializes in legal drafting, regulatory compliance, and contract management. Krati is committed to delivering precise and strategic legal solutions, ensuring that clients receive comprehensive legal support tailored to their needs. Her keen analytical skills and attention to detail make her a valuable asset to the team.",
    },
    {
      id: 13,
      name: "Kshitiz Sharma",
      role: "Associate",
      description: "Expert in family law.",
      image: "https://res.cloudinary.com/dzanl16re/image/upload/v1742299458/shitij_yhnqas.jpg",
      linkedin: "https://www.linkedin.com",
      email: "emily.davis@example.com",
      category: "Associates",
      fullDetails:
        "",
    },
    {
      id: 15,
      name: "Sapna Chahar",
      role: "Trainee Associate",
      description: "Specializes in employment law.",
      image: "https://res.cloudinary.com/dzanl16re/image/upload/v1742294296/Sapna_Chahar_o8qiwc.jpg",
      linkedin: "https://www.linkedin.com",
      email: "sapnachahar3481@gmail.com",
      category: "Trainee Associates",
      fullDetails:
        "Sapna Chahar holds a Master's in Corporate and Commercial Laws from Dr. Bhimrao Ambedkar Law University, Jaipur and Bachelor's degree from Jaipur National University, Jaipur.With a deep understanding of the General Corporate work and Securities and Exchange Board of India’s regulations, she assists in ensuring compliance with SEBI laws and corporate governance matters. Her work is integral in managing legal risks, drafting Contracts , and advising clients on complex regulatory and business matters to ensure smooth and efficient operations within the legal framework.",
    },
    {
      id: 16,
      name: "Rupali Sharma",
      role: "Trainee Associate",
      description: "Focuses on criminal defense.",
      image: "https://res.cloudinary.com/dzanl16re/image/upload/v1742294295/IMG_20250317_224149_tfo3bv.jpg",
      linkedin: "https://www.linkedin.com",
      email: "rs.sharmarupali20@gmail.com",
      category: "Trainee Associates",
      fullDetails:
        "Rupali sharma is a dedicated legal professional with a B.A. LLB (Hons.) and is currently pursuing LLM (Corporate and Commercial Laws). She possesses knowledge of corporate laws, financial regulations and risk management. She holds expertise in Research and Publications, Compliance Management,Contract Drafting, Due Diligence and navigating complexities of Commercial Laws.",
    },
    {
      id: 17,
      name: "Niraj jha",
      role: "Trainee Associate",
      description: "Expert in international trade law.",
      image: "https://res.cloudinary.com/dzanl16re/image/upload/v1742294295/Photo_Niraj_Jha_dwu5se.jpg",
      linkedin: "https://www.linkedin.com",
      email: "sarah.martinez@example.com",
      category: "Trainee Associates",
      fullDetails:
    "Niraj Jha is a dynamic legal professional specializing in the intersection of law and technology. A graduate of the National Law University, Delhi, he cultivated a diverse skill set that encompasses Legal Professional Services, Compliance, Public Policy, Political Affairs Management, Campaign Management, Electioneering, and cutting-edge AI technological applications. His journey is marked by a commitment to exploring the evolving landscape of legal frameworks in the digital age. Previously, Niraj worked in the Political Compliances and Electioneering Domain, where he gained valuable insights into the legal challenges faced by political entities during election campaigns.",
    },
    {
      id: 17,
      name: "Mehul Jain",
      role: "Trainee Associate",
      description: "Expert in international trade law.",
      image: "https://res.cloudinary.com/dzanl16re/image/upload/v1742298547/mehul_jain_gwmivz.jpg",
      linkedin: "https://www.linkedin.com",
      email: "sarah.martinez@example.com",
      category: "Trainee Associates",
      fullDetails:
    "Niraj Jha is a dynamic legal professional specializing in the intersection of law and technology. A graduate of the National Law University, Delhi, he cultivated a diverse skill set that encompasses Legal Professional Services, Compliance, Public Policy, Political Affairs Management, Campaign Management, Electioneering, and cutting-edge AI technological applications. His journey is marked by a commitment to exploring the evolving landscape of legal frameworks in the digital age. Previously, Niraj worked in the Political Compliances and Electioneering Domain, where he gained valuable insights into the legal challenges faced by political entities during election campaigns.",
    },
    {
    id: 24,
    name: "Varun Rankawat",
    role: "Trainee Associate",
    description: "Focuses on criminal defense.",
    image: "https://res.cloudinary.com/dzanl16re/image/upload/v1742296351/Varun_Rankawat_t78uk8.jpg",
    linkedin: "https://www.linkedin.com",
    email: "varun.rankawat123@gmail.com",
    category: "Trainee Associates",
    fullDetails:
    "Varun is a dedicated and highly skilled Legal Intern with extensive experience working on cases in the High Court of Rajasthan, DRT, RERC, and NCLT. His expertise spans across a range of writ petitions in both Jodhpur and Jaipur jurisdictions. With a strong foundation in legal research, Varun is adept at navigating complex legal landscapes. Known for his eloquence and confident communication, he is able to articulate legal intricacies with clarity. Currently, he is focused on Governance Risk and Compliance within the NBFC sector, applying his legal acumen to ensure robust compliance and risk management practices.",
    },
    {
    id: 20,
    name: "Anjali Pareek",
    role: "Trainee Associates",
    description: "Focuses on intellectual property.",
    image: "https://res.cloudinary.com/dzanl16re/image/upload/v1742294295/Anjali_Pareek_de0pdj.jpg",
    linkedin: "https://www.linkedin.com",
    email: "adv.anjalipareek@gmail.com",
    category: "Trainee Associates",
    fullDetails:
    "Anjali Pareek is a dedicated Legal professional, graduated from University of Rajasthan, Jaipur in 2022. She specializes in general corporate law, company incorporation and risk compliance with expertise in business formation and corporate governance. She ensure smooth legal operations for clients. She provide guidance on risk mitigation, compliance with regulations, and drafting essential legal documents, ensuring that companies remain aligned with legal standards and minimize potential risks.",
    },
    {
      id: 13,
      name: "Naincy Faraday",
      role: "Trainee Associate",
      description: "Expert in family law.",
      image: "https://res.cloudinary.com/dzanl16re/image/upload/v1742294294/Picture_2_qrgdm4.jpg",
      linkedin: "https://www.linkedin.com",
      email: "naincyfaraday96@gmail.com",
      category: "Trainee Associates",
      fullDetails:
        "",
    },
    {
      id: 19,
      name: "Radhika Heda",
      role: "Trainee Associate",
      description: "Expert in corporate law.",
      image: "https://res.cloudinary.com/dzanl16re/image/upload/v1742294294/Radhika_Heda_wkahai.jpg",
      linkedin: "https://www.linkedin.com",
      email: "radhikaheda1999@gmail.com",
      category: "Trainee Associates",
      fullDetails:
        "Radhika Heda is a 2023 graduate from the National University of Study and Research in Law, Ranchi, and is currently pursuing CS Professional. She specializes in Governance, Risk, and Compliance (GRC) at LawDocs. With a strong legal and corporate governance background, she is dedicated to ensuring regulatory compliance and risk management excellence.",
    },
    {
      id: 21,
      name: "Bhavya Belwal",
      role: "Trainee Associate",
      description: "Specializes in employment law.",
      image: "https://res.cloudinary.com/dzanl16re/image/upload/v1742294293/Bhavya_Belwal_lwhz6f.jpg",
      linkedin: "https://www.linkedin.com",
      email: "bhavyabelwal28@gmail.com",
      category: "Trainee Associates",
      fullDetails:
        "Bhavya Belwal is an aspiring law student in his final year at Jindal Global Law School , Sonipat, Haryana. He has keen interest in NBFC and RBI compliances and drafting policies especially in the domain of governance, risks and compliances.",
    },
   
  ];

  const [selectedMember, setSelectedMember] = useState(null);
  const categories = [...new Set(teamMembers.map((member) => member.category))];

  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl font-serif">
            Meet Our Team
          </h2>
          <p className="mt-4 text-lg text-gray-600 sm:text-xl lg:text-2xl font-serif">
            A team of dedicated professionals providing exceptional legal services.
          </p>
          <div className="mt-8">
            <div className="inline-flex items-center justify-center w-16 h-1.5 bg-blue-600 rounded-full"></div>
          </div>
        </div>

        {/* Team Members */}
        {categories.map((category) => (
          <div key={category} className="mt-16">
            <div className="bg-gray-100 rounded-lg p-6 text-center">
              <h3 className="text-3xl font-bold text-gray-900 sm:text-4xl font-serif">
                {category}
              </h3>
            </div>
            <div
              className={`grid ${
                category === "Founder"
                  ? "grid-cols-1 sm:grid-cols-1 place-items-center"
                  : category === "Developers"
                  ? "grid-cols-1 sm:grid-cols-2 place-items-center"
                  : category === "Associates"
                  ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
                  : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8"
              } mt-8`}
            >
              {teamMembers
                .filter((member) => member.category === category)
                .map((member, index) => (
                  <div
                    key={member.id}
                    className={`space-y-4 text-center cursor-pointer ${
                      category === "Associates" && index === 1 ? "col-start-2" : ""
                    }`}
                    onClick={() => setSelectedMember(member)}
                  >
                    {/* Image */}
                    <div className="relative w-36 h-36 lg:w-44 lg:h-44 mx-auto rounded-full overflow-hidden">
                      <img
                        className="object-cover w-full h-full grayscale filter hover:grayscale-0 transition-all duration-300"
                        src={member.image}
                        alt={member.name}
                      />
                    </div>
                    <div>
                      <p className="mt-5 text-lg font-bold text-gray-900 sm:text-xl sm:mt-8 font-serif">
                        {member.name}
                      </p>
                      <p className="mt-2 text-base font-normal text-gray-600 font-serif">
                        {member.role}
                      </p>
                      <p className="mt-2 text-sm text-gray-500 font-serif">
                        {member.description}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}

        {/* Modal */}
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-8 max-w-2xl mx-auto relative">
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl"
              >
                &times;
              </button>
              <div className="text-center">
                <div className="relative w-36 h-36 mx-auto rounded-full overflow-hidden">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="object-cover w-full h-full grayscale filter hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <h2 className="mt-4 text-2xl font-bold text-gray-900 font-serif">
                  {selectedMember.name}
                </h2>
                <p className="mt-2 text-lg text-gray-600 font-serif">{selectedMember.role}</p>
                <div className="mt-2 flex items-center justify-center space-x-2">
                  <FaEnvelope className="w-5 h-5 text-gray-600" />
                  <a
                    href={`mailto:${selectedMember.email}`}
                    className="text-blue-600 hover:underline"
                  >
                    {selectedMember.email}
                  </a>
                </div>
                <div className="mt-2 flex items-center justify-center space-x-2">
                  <FaLinkedin className="w-5 h-5 text-gray-600" />
                  <a
                    href={selectedMember.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    LinkedIn
                  </a>
                </div>
                <p className="mt-4 text-gray-700 font-serif">{selectedMember.fullDetails}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Team;