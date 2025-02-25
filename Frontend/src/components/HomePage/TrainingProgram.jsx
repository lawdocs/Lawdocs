import { Card } from "../ui/card";
import { Button } from "../ui/button";
import {
  FaChalkboardTeacher,
  FaUserShield,
  FaBusinessTime,
  FaCode,
} from "react-icons/fa";

const trainingPrograms = [
  {
    title: "Corporate Compliance Training",
    description:
      "Ensure your employees understand and adhere to regulatory standards effectively.",
    icon: <FaBusinessTime className="text-5xl text-blue-500" />,
  },
  {
    title: "Cybersecurity Awareness",
    description:
      "Equip your team with essential knowledge to protect against cyber threats and data breaches.",
    icon: <FaUserShield className="text-5xl text-green-500" />,
  },
  {
    title: "Regulatory & Legal Workshops",
    description:
      "Stay up-to-date with the latest government and financial regulations through expert-led workshops.",
    icon: <FaChalkboardTeacher className="text-5xl text-yellow-500" />,
  },
  {
    title: "Tech & Development Training",
    description:
      "Enhance your technical skills with expert-led courses in software development, AI, and automation.",
    icon: <FaCode className="text-5xl text-red-500" />,
  },
];

function TrainingProgram() {
  return (
    <section className="py-16 bg-gradient-to-br from-[#F9FAFB] to-[#E5E7EB] shadow-2xl">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-playfair text-gray-900">
          Our Training Programs
        </h2>
        <p className="text-lg text-gray-600 mt-3">
          Empower your workforce with expert-led training to ensure compliance
          and skill development.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {trainingPrograms.map((program, index) => (
          <Card
            key={index}
            className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center text-center hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <div className="mb-4">{program.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-900">
              {program.title}
            </h3>
            <p className="text-gray-600 mt-2">{program.description}</p>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-transform hover:scale-105 shadow-lg">
          Enroll Now
        </Button>
      </div>
    </section>
  );
}

export default TrainingProgram;
