  import { Card } from "../ui/card";
  import { Button } from "../ui/button";
  import { Link } from "react-router-dom";
function BlogSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-[#F9FAFB] to-[#E5E7EB] shadow-xl">
      <div className="container mx-auto text-center px-6 md:px-12">
        <h2 className="text-4xl md:text-[3vw] font-bold font-playfair text-center mb-12 text-gray-900">
          Latest Blogs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title:
                "Intellectual Property Rights Made Easy: A Guide for Small Businesses",
              description: "A guide for small businesses.",
              image: "src/assets/Blogs/Blog6.webp",
            },
            {
              title:
                "Why Every Business Needs a Business Partnership Agreement: Key Benefits and Legal Protection",
              description: "Key benefits and legal protection.",
              image: "src/assets/Blogs/Blog8.webp",
            },
            {
              title:
                "Non-Disclosure Agreements: Protecting Confidentiality and Minimizing Legal Risks",
              description: "Protecting confidentiality.",
              image: "src/assets/Blogs/Blog9.webp",
            },
          ].map((blog, index) => (
            <Card
              key={index}
              className="overflow-hidden rounded-xl shadow-lg bg-white text-left transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-[15vw] object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {blog.title}
                </h3>
                <p className="mb-4 text-gray-600">{blog.description}</p>
                <Button
                  variant="link"
                  className="text-[#1E3A8A] p-0 font-semibold"
                >
                  Read More →
                </Button>
              </div>
            </Card>
          ))}
        </div>
        {/* Read More Button */}
        <div className="flex gap-[2vw] w-full justify-center">
          <div className="mt-10 flex justify-center">
            <Link
              to="/blogs"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-lg transition-transform duration-300 shadow-md hover:scale-110"
            >
              Read More
            </Link>
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              to="/addblogs"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-lg transition-transform duration-300 shadow-md hover:scale-110"
            >
              Add Blog
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
