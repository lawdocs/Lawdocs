import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    image: "src/assets/People/People1.webp",
    name: "John Doe",
    designation: "CEO, Legal Solutions Inc.",
    text: "The legal team provided exceptional service. They were professional, responsive, and highly knowledgeable. I highly recommend them!",
  },
  {
    image: "src/assets/People/People2.webp",
    name: "Jane Smith",
    designation: "CFO, Corporate Compliance Co.",
    text: "Absolutely outstanding service! The compliance solutions streamlined our processes, ensuring hassle-free regulatory adherence.",
  },
  {
    image: "src/assets/People/People3.webp",
    name: "Michael Lee",
    designation: "Founder, SecureDocs",
    text: "Professional and efficient! The team guided us through complex legal matters with ease. We’re extremely satisfied with their expertise.",
  },
];

function Testimonials() {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-5xl font-extrabold font-playfair mb-10 text-gray-900 tracking-tight uppercase">
        What Our Clients Say
      </h2>
      <div className="flex flex-wrap justify-center gap-8 px-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="max-w-sm bg-white shadow-xl rounded-3xl p-6 flex flex-col items-center border border-gray-200 hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <FaQuoteLeft className="text-blue-500 text-4xl mb-4" />
            <p className="text-gray-600 text-lg italic text-center">
              {testimonial.text}
            </p>
            <div className="mt-6 flex flex-col items-center">
              <img
                className="h-16 w-16 rounded-full object-cover border-4 border-blue-500"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <p className="text-gray-900 font-semibold text-lg mt-3">
                {testimonial.name}
              </p>
              <p className="text-gray-500 text-sm">{testimonial.designation}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
