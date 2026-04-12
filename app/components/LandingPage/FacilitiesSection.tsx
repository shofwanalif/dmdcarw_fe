"use client";

import { useState, useEffect } from "react";

export default function FacilitiesSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of facility images
  const facilityImages = [
    "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1559329007-40df8a9345d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % facilityImages.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [facilityImages.length]);

  // Navigate to specific slide
  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  // Navigate to previous slide
  const goToPrevious = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + facilityImages.length) % facilityImages.length,
    );
  };

  // Navigate to next slide
  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % facilityImages.length);
  };

  return (
    <section
      id="facilities"
      className="py-20 px-4 md:px-10 lg:px-40 bg-background-light dark:bg-background-dark"
    >
      <div className="max-w-960px mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 order-2 md:order-1">
            <h2 className="text-[#0d141b] dark:text-white text-3xl font-black tracking-tight leading-tight mb-4">
              Food & Waiting Area
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed mb-8">
              Kami memastikan anda agar tidak bosan ketika menunggu. pelanggan
              dapat menikmati berbagai camilan, makanan, dan minuman sembari
              menunggu kami membuat kendaraan Anda tampak berkilau. Beberapa
              fasilitas yang kami sediakan di area tunggu meliputi:
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-[#1a2632] border border-gray-100 dark:border-gray-700 shadow-sm">
                <span className="material-symbols-outlined text-primary">
                  mosque
                </span>
                <span className="text-sm font-bold">Musholla</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-[#1a2632] border border-gray-100 dark:border-gray-700 shadow-sm">
                <span className="material-symbols-outlined text-primary">
                  fastfood
                </span>
                <span className="text-sm font-bold">Angkringan</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-[#1a2632] border border-gray-100 dark:border-gray-700 shadow-sm">
                <span className="material-symbols-outlined text-primary">
                  wifi
                </span>
                <span className="text-sm font-bold">Free Wi-Fi</span>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full order-1 md:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Carousel Container */}
              <div className="relative aspect-square">
                {/* Slides */}
                <div className="relative w-full h-full overflow-hidden">
                  {facilityImages.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                        index === currentSlide ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${image})` }}
                      >
                        <div className="absolute inset-0 bg-black/10"></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 z-10"
                  aria-label="Previous image"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 z-10"
                  aria-label="Next image"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                  {facilityImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === currentSlide
                          ? "bg-white w-6"
                          : "bg-white/50 hover:bg-white/75"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary rounded-full blur-3xl opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
