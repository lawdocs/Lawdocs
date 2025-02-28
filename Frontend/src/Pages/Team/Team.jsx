import React from "react";
import { FaLinkedin } from "react-icons/fa"; // Import LinkedIn icon from react-icons

const Team = () => {
  // Team members data grouped by category
  const teamMembersByCategory = [
    {
      category: "Investors",
      members: [
        {
          id: 1,
          name: "Jerome Bell",
          role: "Co-founder, Chairman",
          description: "Experienced leader with a passion for innovation and growth.",
          image: "https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-1.png",
          linkedin: "https://www.linkedin.com",
        },
        {
          id: 2,
          name: "Kathryn Murphy",
          role: "Chief Executive Officer",
          description: "Driving the company's vision and strategic direction.",
          image: "https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-2.png",
          linkedin: "https://www.linkedin.com",
        },
      ],
    },
    {
      category: "Board of Directors",
      members: [
        {
          id: 3,
          name: "Robert Fox",
          role: "Chief Technology Officer",
          description: "Expert in technology and product development.",
          image: "https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-3.png",
          linkedin: "https://www.linkedin.com",
        },
        {
          id: 4,
          name: "Darlene Robertson",
          role: "Chief Financial Officer",
          description: "Ensuring financial health and operational efficiency.",
          image: "https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-4.png",
          linkedin: "https://www.linkedin.com",
        },
      ],
    },
  ];

  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
            Our Investors & Board of Directors
          </h2>
        </div>

        {/* Render Team Members by Category */}
        {teamMembersByCategory.map((categoryGroup) => (
          <div key={categoryGroup.category} className="mt-12">
            {/* Category Title */}
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              {categoryGroup.category}
            </h3>

            {/* Team Members Grid */}
            <div className="grid max-w-6xl grid-cols-1 px-20 mx-auto text-center sm:px-0 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 lg:gap-x-16 xl:gap-x-20">
              {categoryGroup.members.map((member) => (
                <div key={member.id} className="space-y-4">
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
                    >
                      <FaLinkedin className="w-8 h-8 text-white" />
                    </a>
                  </div>
                  {/* Member Details */}
                  <div>
                    <p className="mt-5 text-lg font-bold text-gray-900 sm:text-xl sm:mt-8 font-pj">
                      {member.name}
                    </p>
                    <p className="mt-2 text-base font-normal text-gray-600 font-pj">
                      {member.role}
                    </p>
                    <p className="mt-2 text-sm text-gray-500 font-pj">
                      {member.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Divider */}
        <div className="mt-12 sm:mt-16">
          <svg
            className="w-auto h-4 mx-auto text-gray-300"
            viewBox="0 0 172 16"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* SVG Paths for the divider */}
            <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 11 1)" />
            <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 46 1)" />
            <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 81 1)" />
            <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 116 1)" />
            <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 151 1)" />
            <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 18 1)" />
            <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 53 1)" />
            <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 88 1)" />
            <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 123 1)" />
            <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 158 1)" />
            <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 25 1)" />
            <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 60 1)" />
            <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 95 1)" />
            <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 130 1)" />
            <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 165 1)" />
            <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 32 1)" />
            <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 67 1)" />
            <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 102 1)" />
            <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 137 1)" />
            <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 172 1)" />
            <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 39 1)" />
            <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 74 1)" />
            <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 109 1)" />
            <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 144 1)" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Team;