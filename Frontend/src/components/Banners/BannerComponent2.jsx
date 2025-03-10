import React from "react";

function BannerComponent2() {
  return (
    <div
      style={{
        backgroundImage: "url('assets/Banner/Banner9.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="relative w-full min-h-screen flex items-center justify-center px-6 bg-black bg-opacity-80"
    >
      {/* Overlay for Better Text Contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative text-center text-white max-w-4xl px-6 md:px-12">
        {/* Title */}
        <h1 className="text-5xl md:text-6xl flex  justify-center gap-[1.2vw] font-bold text-gray-100 drop-shadow-lg">
          <span className="text-white">Smart</span>
          <span className="text-[#E8C472]">Drafts.</span>
        </h1>

        {/* Subtitle */}
        <h2 className="text-xl md:text-2xl font-semibold text-gray-200 mt-4 tracking-wide">
          The Documents with{" "}
          <span className="text-[#E8C472]">Legal Integrity.</span>
        </h2>

        {/* Horizontal Divider */}
        <div className="w-24 h-[3px] bg-[#E8C472] my-5 mx-auto"></div>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed tracking-wide drop-shadow-md">
          A trusted partner for{" "}
          <span className="text-[#E8C472] font-semibold">legally sound</span>{" "}
          and{" "}
          <span className="text-[#E8C472] font-semibold">
            precisely drafted
          </span>{" "}
          documents. We ensure contracts that safeguard your business interests.
        </p>

        {/* Feature Highlights */}
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <span className="px-4 py-2 border border-[#E8C472] text-[#E8C472] rounded-full text-sm font-medium shadow-md">
            🏆 Recognized Legal Expertise
          </span>
          <span className="px-4 py-2 border border-gray-400 text-gray-200 rounded-full text-sm font-medium shadow-md">
            💬 24/7 Client Support
          </span>
          <span className="px-4 py-2 border border-gray-400 text-gray-200 rounded-full text-sm font-medium shadow-md">
            ✔ 100% Confidentiality
          </span>
        </div>

        {/* CTA Button */}
        <div className="mt-8">
          <button className="bg-[#E8C472] hover:bg-[#d4ac5b] text-black font-semibold py-3 px-6 rounded-lg transition-all shadow-md text-lg">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default BannerComponent2;
