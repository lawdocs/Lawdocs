  import { useState, useEffect } from "react";
  import { Button } from "../ui/button";
  import { CheckCircle, Bell, Calendar, ShieldCheck } from "lucide-react";

  const textArray = ["Compliance Management Software"];

  function AnimatedBanner() {
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const speed = isDeleting ? 50 : 100;

    useEffect(() => {
      const handleTyping = () => {
        const currentText = textArray[0];
        setDisplayText((prev) =>
          isDeleting
            ? currentText.substring(0, prev.length - 1)
            : currentText.substring(0, prev.length + 1)
        );
        if (!isDeleting && displayText === currentText) {
          setTimeout(() => setIsDeleting(true), 1000);
        } else if (isDeleting && displayText === "") {
          setIsDeleting(false);
        }
      };
      const timer = setTimeout(handleTyping, speed);
      return () => clearTimeout(timer);
    }, [displayText, isDeleting]);

    return (
      <div
        style={{
          backgroundImage: 'url("src/assets/Banner/Banner10.webp")',
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
        className="relative w-full h-screen flex flex-col justify-center items-center px-6 md:px-12 text-white"
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Animated Heading */}
        <h1 className="relative text-center text-[clamp(2rem,5vw,4rem)] font-extrabold tracking-wide text-white drop-shadow-xl">
          {displayText}
        </h1>

        {/* Key Benefits Section */}
        <div className="relative mt-8 text-center text-lg md:text-xl font-medium max-w-3xl space-y-5">
          <div className="flex items-center gap-3 text-gray-200">
            <CheckCircle className="text-[#f3c370]" size={24} /> Ensure 100%
            compliance with evolving regulations
          </div>
          <div className="flex items-center gap-3 text-gray-200">
            <ShieldCheck className="text-[#f3c370]" size={24} /> Minimize
            penalties and legal risks effectively
          </div>
          <div className="flex items-center gap-3 text-gray-200">
            <Bell className="text-[#f3c370]" size={24} /> Get real-time updates
            and alerts
          </div>
          <div className="flex items-center gap-3 text-gray-200">
            <Calendar className="text-[#f3c370]" size={24} /> Manage your
            compliance calendar effortlessly
          </div>
        </div>

        {/* Call-to-Action Button */}
        <div className="relative mt-10">
          <Button className="bg-[#E8C472] text-black   text-lg font-semibold py-3 px-8 rounded-lg transition-transform duration-300 shadow-md hover:scale-110 hover:bg-[#e0b060]">
            Get Started
          </Button>
        </div>
      </div>
    );
  }

  export default AnimatedBanner;
