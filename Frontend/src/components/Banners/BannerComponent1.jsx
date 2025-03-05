import { useState, useEffect } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

function BannerComponent1() {
  const complianceItems = [
    { text: "RBI Compliances", icon: "🏦" },
    { text: "SEBI Compliances", icon: "📊" },
    { text: "Data Protection Compliance", icon: "🔒" },
    { text: "Other Regulatory Compliances", icon: "📜" },
  ];

  const fullText = "Comply. Simplify. Streamline.";
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const speed = isDeleting ? 50 : 100;

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayText(fullText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        if (charIndex + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayText(fullText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
        if (charIndex === 0) {
          setIsDeleting(false);
        }
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting]);

  return (
    <Card
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('public/assets/Banner/Banner8.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-16 md:px-16 lg:px-24 text-center"
    >
      <div className="text-white max-w-4xl z-10">
        {/* Fixed Width for Animated Text to Prevent Shifting */}
        <div className="flex justify-center">

          <h1
            className="text-[10vw] md:text-6xl font-extrabold tracking-tight 
    bg-gradient-to-r md:h-[5vw] from-yellow-400 to-yellow-600 bg-clip-text text-transparent 
    drop-shadow-2xl w-full text-center"
          >
            {displayText}
          </h1>
        </div>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 drop-shadow-md mt-4">
          MANAGE YOUR COMPLIANCE. MITIGATE RISK.
        </h2>

        <p className="text-lg md:text-xl max-w-2xl mx-auto font-medium tracking-wide mt-4 text-gray-300 drop-shadow-md">
          Streamline, secure, and certi by your company with all regulatory
          compliances now.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {complianceItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center lg:w-[70vw] space-x-4 text-lg md:text-xl px-4 py-2 rounded-lg shadow-lg"
            >
              <span className="text-3xl md:text-4xl">{item.icon}</span>
              <span className="text-white font-semibold">{item.text}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mr-[6.5vw]">
          <Button className="bg-[#f3c370] hover:bg-yellow-700 text-black font-bold py-3 px-10 rounded-lg hover:scale-105 transition-transform duration-300 shadow-2xl">
            CONTACT US
          </Button>
          <p className="text-lg mt-4 font-semibold text-gray-300">
            We are your One-Stop Solution
          </p>
        </div>
      </div>
    </Card>
  );
}

export default BannerComponent1;
