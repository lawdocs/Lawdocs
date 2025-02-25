import React, { useState, useEffect } from "react";
import BannerComponent1 from "../Banners/BannerComponent1";
import BannerComponent2 from "../Banners/BannerComponent2";
import BannerComponent3 from "../Banners/BannerComponent3";

function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const banners = [
    { id: 1, Component: <BannerComponent1 /> },
    { id: 2, Component: <BannerComponent2 /> },
    { id: 3, Component: <BannerComponent3 /> },
  ];

  useEffect(() => {
    if (isPaused || isHovered) return; // Pause auto-slide when hovered or manually paused

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [banners.length, isPaused, isHovered]);

  const handleNavigation = (direction) => {
    setIsPaused(true); // Pause auto-slide on click
    setTimeout(() => setIsPaused(false), 5000); // Resume auto-slide after 3 seconds

    setActiveIndex((prevIndex) => {
      if (direction === "prev") {
        return prevIndex === 0 ? banners.length - 1 : prevIndex - 1;
      } else {
        return (prevIndex + 1) % banners.length;
      }
    });
  };

  return (
    <div className="relative w-full  max-w-8xl mx-auto overflow-hidden">
      {/* Carousel Content */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {banners.map((banner) => (
          <div key={banner.id} className="min-w-full">
            {banner.Component}
          </div>
        ))}
      </div>

      {/* Previous & Next Buttons */}
      <button
        onClick={() => handleNavigation("prev")}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10 hover:bg-gray-700 transition-colors w-10 h-10 flex items-center justify-center"
      >
        <i className="ri-arrow-left-line"></i>
      </button>
      <button
        onClick={() => handleNavigation("next")}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10 hover:bg-gray-700 transition-colors w-10 h-10 flex items-center justify-center"
      >
        <i className="ri-arrow-right-line"></i>
      </button>
    </div>
  );
}

export default HeroSection;
