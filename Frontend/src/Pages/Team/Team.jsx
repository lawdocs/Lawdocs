import { useState } from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa"; // Import LinkedIn and Email icons

const Team = () => {
  // Team members data grouped by category
  const teamMembers = [
    // Partners (6 members)
    {
      id: 1,
      name: "Jerome Bell",
      role: "Partner",
      description: "Experienced in corporate law and mergers.",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      linkedin: "https://www.linkedin.com",
      email: "jerome.bell@example.com",
      category: "Partners",
      fullDetails:
        "Jerome Bell has over 20 years of experience in corporate law, specializing in mergers and acquisitions. He holds a JD from Harvard Law School.",
    },
    {
      id: 2,
      name: "Kathryn Murphy",
      role: "Partner",
      description: "Expert in intellectual property law.",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      linkedin: "https://www.linkedin.com",
      email: "kathryn.murphy@example.com",
      category: "Partners",
      fullDetails:
        "Kathryn Murphy is a leading expert in intellectual property law, with a focus on patents and trademarks. She has represented Fortune 500 companies in high-stakes litigation.",
    },
    {
      id: 3,
      name: "Robert Fox",
      role: "Partner",
      description: "Specializes in litigation and dispute resolution.",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      linkedin: "https://www.linkedin.com",
      email: "robert.fox@example.com",
      category: "Partners",
      fullDetails:
        "Robert Fox is a seasoned litigator with expertise in commercial disputes and arbitration. He has successfully resolved complex cases across multiple jurisdictions.",
    },
    {
      id: 4,
      name: "Darlene Robertson",
      role: "Partner",
      description: "Focuses on real estate and property law.",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      linkedin: "https://www.linkedin.com",
      email: "darlene.robertson@example.com",
      category: "Partners",
      fullDetails:
        "Darlene Robertson is a trusted advisor in real estate law, with extensive experience in property transactions and development projects.",
    },
    {
      id: 5,
      name: "Jane Cooper",
      role: "Partner",
      description: "Specializes in employment law.",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
      linkedin: "https://www.linkedin.com",
      email: "jane.cooper@example.com",
      category: "Partners",
      fullDetails:
        "Jane Cooper is an expert in employment law, advising clients on labor disputes, contracts, and compliance.",
    },
    {
      id: 6,
      name: "Wade Warren",
      role: "Partner",
      description: "Focuses on tax and estate planning.",
      image: "https://randomuser.me/api/portraits/men/6.jpg",
      linkedin: "https://www.linkedin.com",
      email: "wade.warren@example.com",
      category: "Partners",
      fullDetails:
        "Wade Warren provides strategic advice on tax planning, estate management, and wealth preservation.",
    },
    // Trainee Associates (6 members)
    {
      id: 7,
      name: "Leslie Alexander",
      role: "Trainee Associate",
      description: "Expert in family law.",
      image: "https://randomuser.me/api/portraits/women/7.jpg",
      linkedin: "https://www.linkedin.com",
      email: "leslie.alexander@example.com",
      category: "Trainee Associates",
      fullDetails:
        "Leslie Alexander specializes in family law, including divorce, child custody, and adoption cases.",
    },
    {
      id: 8,
      name: "Cody Fisher",
      role: "Trainee Associate",
      description: "Focuses on criminal defense.",
      image: "https://randomuser.me/api/portraits/men/8.jpg",
      linkedin: "https://www.linkedin.com",
      email: "cody.fisher@example.com",
      category: "Trainee Associates",
      fullDetails:
        "Cody Fisher is a dedicated criminal defense attorney with a strong track record in high-profile cases.",
    },
    {
      id: 9,
      name: "Arlene McCoy",
      role: "Trainee Associate",
      description: "Expert in international trade law.",
      image: "https://randomuser.me/api/portraits/women/9.jpg",
      linkedin: "https://www.linkedin.com",
      email: "arlene.mccoy@example.com",
      category: "Trainee Associates",
      fullDetails:
        "Arlene McCoy advises clients on international trade agreements, tariffs, and cross-border transactions.",
    },
    {
      id: 10,
      name: "Marvin McKinney",
      role: "Trainee Associate",
      description: "Specializes in environmental law.",
      image: "https://randomuser.me/api/portraits/men/10.jpg",
      linkedin: "https://www.linkedin.com",
      email: "marvin.mckinney@example.com",
      category: "Trainee Associates",
      fullDetails:
        "Marvin McKinney is a leading expert in environmental law, focusing on regulatory compliance and sustainability.",
    },
    {
      id: 11,
      name: "John Doe",
      role: "Trainee Associate",
      description: "Specializes in corporate law.",
      image: "https://randomuser.me/api/portraits/men/11.jpg",
      linkedin: "https://www.linkedin.com",
      email: "john.doe@example.com",
      category: "Trainee Associates",
      fullDetails:
        "John Doe is a corporate law expert with experience in mergers and acquisitions.",
    },
    {
      id: 12,
      name: "Jane Smith",
      role: "Trainee Associate",
      description: "Focuses on intellectual property.",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      linkedin: "https://www.linkedin.com",
      email: "jane.smith@example.com",
      category: "Trainee Associates",
      fullDetails:
        "Jane Smith is an expert in intellectual property law, with a focus on patents and trademarks.",
    },
    // Associates (6 members)
    {
      id: 13,
      name: "Alice Johnson",
      role: "Associate",
      description: "Specializes in employment law.",
      image: "https://randomuser.me/api/portraits/women/13.jpg",
      linkedin: "https://www.linkedin.com",
      email: "alice.johnson@example.com",
      category: "Associates",
      fullDetails:
        "Alice Johnson is an expert in employment law, advising clients on labor disputes and compliance.",
    },
    {
      id: 14,
      name: "Michael Brown",
      role: "Associate",
      description: "Focuses on tax and estate planning.",
      image: "https://randomuser.me/api/portraits/men/14.jpg",
      linkedin: "https://www.linkedin.com",
      email: "michael.brown@example.com",
      category: "Associates",
      fullDetails:
        "Michael Brown provides strategic advice on tax planning and estate management.",
    },
    {
      id: 15,
      name: "Emily Davis",
      role: "Associate",
      description: "Expert in family law.",
      image: "https://randomuser.me/api/portraits/women/15.jpg",
      linkedin: "https://www.linkedin.com",
      email: "emily.davis@example.com",
      category: "Associates",
      fullDetails:
        "Emily Davis specializes in family law, including divorce and child custody cases.",
    },
    {
      id: 16,
      name: "David Wilson",
      role: "Associate",
      description: "Focuses on criminal defense.",
      image: "https://randomuser.me/api/portraits/men/16.jpg",
      linkedin: "https://www.linkedin.com",
      email: "david.wilson@example.com",
      category: "Associates",
      fullDetails:
        "David Wilson is a dedicated criminal defense attorney with a strong track record.",
    },
    {
      id: 17,
      name: "Sarah Martinez",
      role: "Associate",
      description: "Expert in international trade law.",
      image: "https://randomuser.me/api/portraits/women/17.jpg",
      linkedin: "https://www.linkedin.com",
      email: "sarah.martinez@example.com",
      category: "Associates",
      fullDetails:
        "Sarah Martinez advises clients on international trade agreements and tariffs.",
    },
    {
      id: 18,
      name: "James Anderson",
      role: "Associate",
      description: "Specializes in environmental law.",
      image: "https://randomuser.me/api/portraits/men/18.jpg",
      linkedin: "https://www.linkedin.com",
      email: "james.anderson@example.com",
      category: "Associates",
      fullDetails:
        "James Anderson is a leading expert in environmental law and sustainability.",
    },
    // Senior Associates (6 members)
    {
      id: 19,
      name: "Olivia Taylor",
      role: "Senior Associate",
      description: "Expert in corporate law.",
      image: "https://randomuser.me/api/portraits/women/19.jpg",
      linkedin: "https://www.linkedin.com",
      email: "olivia.taylor@example.com",
      category: "Senior Associates",
      fullDetails:
        "Olivia Taylor has extensive experience in corporate law and mergers.",
    },
    {
      id: 20,
      name: "William Thomas",
      role: "Senior Associate",
      description: "Focuses on intellectual property.",
      image: "https://randomuser.me/api/portraits/men/20.jpg",
      linkedin: "https://www.linkedin.com",
      email: "william.thomas@example.com",
      category: "Senior Associates",
      fullDetails:
        "William Thomas is an expert in intellectual property law and patents.",
    },
    {
      id: 21,
      name: "Sophia Hernandez",
      role: "Senior Associate",
      description: "Specializes in employment law.",
      image: "https://randomuser.me/api/portraits/women/21.jpg",
      linkedin: "https://www.linkedin.com",
      email: "sophia.hernandez@example.com",
      category: "Senior Associates",
      fullDetails:
        "Sophia Hernandez advises clients on labor disputes and compliance.",
    },
    {
      id: 22,
      name: "Daniel Moore",
      role: "Senior Associate",
      description: "Focuses on tax and estate planning.",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      linkedin: "https://www.linkedin.com",
      email: "daniel.moore@example.com",
      category: "Senior Associates",
      fullDetails:
        "Daniel Moore provides strategic advice on tax planning and estate management.",
    },
    {
      id: 23,
      name: "Isabella Jackson",
      role: "Senior Associate",
      description: "Expert in family law.",
      image: "https://randomuser.me/api/portraits/women/23.jpg",
      linkedin: "https://www.linkedin.com",
      email: "isabella.jackson@example.com",
      category: "Senior Associates",
      fullDetails:
        "Isabella Jackson specializes in family law, including divorce and child custody.",
    },
    {
      id: 24,
      name: "Ethan White",
      role: "Senior Associate",
      description: "Focuses on criminal defense.",
      image: "https://randomuser.me/api/portraits/men/24.jpg",
      linkedin: "https://www.linkedin.com",
      email: "ethan.white@example.com",
      category: "Senior Associates",
      fullDetails:
        "Ethan White is a dedicated criminal defense attorney with a strong track record.",
    },
    // Interns (6 members)
    {
      id: 25,
      name: "Mia Harris",
      role: "Intern",
      description: "Specializes in corporate law.",
      image: "https://randomuser.me/api/portraits/women/25.jpg",
      linkedin: "https://www.linkedin.com",
      email: "mia.harris@example.com",
      category: "Interns",
      fullDetails:
        "Mia Harris is gaining experience in corporate law and mergers.",
    },
    {
      id: 26,
      name: "Alexander Clark",
      role: "Intern",
      description: "Focuses on intellectual property.",
      image: "https://randomuser.me/api/portraits/men/26.jpg",
      linkedin: "https://www.linkedin.com",
      email: "alexander.clark@example.com",
      category: "Interns",
      fullDetails:
        "Alexander Clark is learning about intellectual property law and patents.",
    },
    {
      id: 27,
      name: "Charlotte Lewis",
      role: "Intern",
      description: "Specializes in employment law.",
      image: "https://randomuser.me/api/portraits/women/27.jpg",
      linkedin: "https://www.linkedin.com",
      email: "charlotte.lewis@example.com",
      category: "Interns",
      fullDetails:
        "Charlotte Lewis is gaining experience in employment law and compliance.",
    },
    {
      id: 28,
      name: "Benjamin Walker",
      role: "Intern",
      description: "Focuses on tax and estate planning.",
      image: "https://randomuser.me/api/portraits/men/28.jpg",
      linkedin: "https://www.linkedin.com",
      email: "benjamin.walker@example.com",
      category: "Interns",
      fullDetails:
        "Benjamin Walker is learning about tax planning and estate management.",
    },
    {
      id: 29,
      name: "Amelia Hall",
      role: "Intern",
      description: "Expert in family law.",
      image: "https://randomuser.me/api/portraits/women/29.jpg",
      linkedin: "https://www.linkedin.com",
      email: "amelia.hall@example.com",
      category: "Interns",
      fullDetails:
        "Amelia Hall is gaining experience in family law and child custody cases.",
    },
    {
      id: 30,
      name: "Lucas Young",
      role: "Intern",
      description: "Focuses on criminal defense.",
      image: "https://randomuser.me/api/portraits/men/30.jpg",
      linkedin: "https://www.linkedin.com",
      email: "lucas.young@example.com",
      category: "Interns",
      fullDetails:
        "Lucas Young is learning about criminal defense and litigation.",
    },
  ];

  // State to manage the selected member for modal
  const [selectedMember, setSelectedMember] = useState(null);

  // Get unique categories for the headings
  const categories = [...new Set(teamMembers.map((member) => member.category))];

  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Stylish Header */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl font-serif">
            Our Legal Team
          </h2>
          <p className="mt-4 text-lg text-gray-600 sm:text-xl lg:text-2xl font-serif">
            A team of dedicated professionals providing exceptional legal services.
          </p>
          <div className="mt-8">
            <div className="inline-flex items-center justify-center w-16 h-1.5 bg-blue-600 rounded-full"></div>
          </div>
        </div>

        {/* Display Team Members under Headings */}
        {categories.map((category) => (
          <div key={category} className="mt-16">
            {/* Improved Heading UI */}
            <div className="bg-gray-100 rounded-lg p-6 text-center">
              <h3 className="text-3xl font-bold text-gray-900 sm:text-4xl font-serif">
                {category}
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-12 mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-x-8 gap-y-12">
              {teamMembers
                .filter((member) => member.category === category)
                .map((member) => (
                  <div
                    key={member.id}
                    className="space-y-4 text-center cursor-pointer"
                    onClick={() => setSelectedMember(member)}
                  >
                    {/* Image Container with LinkedIn Icon */}
                    <div className="relative w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 overflow-hidden group">
                      <img
                        className="object-cover w-full h-full grayscale filter group-hover:grayscale-0 transition-all duration-300"
                        src={member.image}
                        alt={member.name}
                      />
                      {/* LinkedIn Icon Overlay */}
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        onClick={(e) => e.stopPropagation()} // Prevents modal from opening
                      >
                        <FaLinkedin className="w-8 h-8 text-white" />
                      </a>
                    </div>
                    {/* Member Details */}
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

        {/* Modal for Member Details */}
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-8 max-w-2xl mx-auto relative">
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
              >
                &times;
              </button>
              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden group">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="object-cover w-full h-full"
                  />
                  {/* LinkedIn Icon Overlay in Modal */}
                  <a
                    href={selectedMember.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <FaLinkedin className="w-8 h-8 text-white" />
                  </a>
                </div>
                <h2 className="mt-4 text-2xl font-bold text-gray-900 font-serif">
                  {selectedMember.name}
                </h2>
                <p className="mt-2 text-lg text-gray-600 font-serif">{selectedMember.role}</p>
                {/* Email Section */}
                <div className="mt-2 flex items-center justify-center space-x-2">
                  <FaEnvelope className="w-5 h-5 text-gray-600" />
                  <a
                    href={`mailto:${selectedMember.email}`}
                    className="text-blue-600 hover:underline"
                  >
                    {selectedMember.email}
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