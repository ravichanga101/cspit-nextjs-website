"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Gallery data with three event categories
const galleryData = {
  cultural: [
    {
      id: "cultural1",
      title: "Annual Cultural Festival",
      description:
        "Students performing traditional dance at Navratri celebration",
      image: "/images1/events/cultural/cultural1.webp",
    },
    {
      id: "cultural2",
      title: "Music Competition",
      description: "Inter-college singing competition finals",
      image: "/images1/events/cultural/cultural2.webp",
    },
    {
      id: "cultural3",
      title: "Drama Performance",
      description: "Theater club performing at the annual day",
      image: "/images1/events/cultural/cultural3.webp",
    },
    {
      id: "cultural4",
      title: "Traditional Day",
      description: "Students celebrating diversity through traditional attire",
      image: "/images1/events/cultural/cultural4.webp",
    },
    {
      id: "cultural5",
      title: "Dance Competition",
      description: "Group dance performance at inter-college competition",
      image: "/images1/events/cultural/cultural5.webp",
    },
    {
      id: "cultural6",
      title: "Art Exhibition",
      description: "Student artwork displayed at the annual art gallery",
      image: "/images1/events/cultural/cultural6.webp",
    },
  ],
  technical: [
    {
      id: "technical1",
      title: "Hackathon 2024",
      description:
        "Students solving real-world problems in 24-hour coding event",
      image: "/images1/events/technical/TEDx/ted5.webp",
    },
    {
      id: "technical2",
      title: "Robotics Workshop",
      description: "Hands-on training with advanced robotics equipment",
      image: "/images1/events/technical/TEDx/ted10.webp",
    },
    {
      id: "technical3",
      title: "Project Exhibition",
      description: "Final year students showcasing innovative projects",
      image: "/images1/events/technical/TEDx/ted15.webp",
    },
    {
      id: "technical4",
      title: "Industry Expert Talk",
      description: "Guest lecture by leading technology professionals",
      image: "/images1/events/technical/TEDx/ted18.webp",
    },
    {
      id: "technical5",
      title: "IoT Workshop",
      description: "Students learning about connected device ecosystems",
      image: "/images1/events/technical/TEDx/_ted4.webp",
    },
    {
      id: "technical6",
      title: "Coding Competition",
      description: "Students participating in algorithmic programming contest",
      image: "/images1/events/technical/TEDx/_ted1.webp",
    },
  ],
  sports: [
    {
      id: "sports1",
      title: "Annual Sports Meet",
      description:
        "Opening ceremony of the inter-departmental sports tournament",
      image: "/images1/events/sports/sports1.jpg",
    },
    {
      id: "sports2",
      title: "Cricket Tournament",
      description: "Final match of the inter-college cricket championship",
      image: "/images1/events/sports/sports2.jpg",
    },
    {
      id: "sports3",
      title: "Chess Competition",
      description: "Students competing in the strategic board game tournament",
      image: "/images1/events/sports/sports3.jpg",
    },
    {
      id: "sports4",
      title: "Basketball Championship",
      description: "CSPIT team during the state-level championship",
      image: "/images1/events/sports/sports4.jpg",
    },
    {
      id: "sports5",
      title: "Athletics Day",
      description: "Track and field events during the annual sports week",
      image: "/images1/events/sports/sports5.jpg",
    },
    {
      id: "sports6",
      title: "Table Tennis Tournament",
      description: "Students competing in the indoor sports competition",
      image: "/images1/events/sports/sports6.jpg",
    },
  ],
};

export default function EventsGallery() {
  const [activeCategory, setActiveCategory] = useState("cultural");
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideshowRef = useRef(null);

  // Effect for handling keyboard navigation in the slideshow
  useEffect(() => {
    if (selectedImage) {
      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          setSelectedImage(null);
        } else if (e.key === "ArrowRight") {
          handleNext();
        } else if (e.key === "ArrowLeft") {
          handlePrevious();
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [selectedImage]);

  // Open the slideshow with the clicked image
  const openSlideshow = (category, index) => {
    setSelectedImage(category);
    setCurrentSlide(index);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  // Close the slideshow
  const closeSlideshow = () => {
    setSelectedImage(null);
    document.body.style.overflow = ""; // Restore scrolling
  };

  // Navigate to the previous slide
  const handlePrevious = () => {
    const items = galleryData[selectedImage];
    setCurrentSlide((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  // Navigate to the next slide
  const handleNext = () => {
    const items = galleryData[selectedImage];
    setCurrentSlide((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  // Animation variants for the gallery items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-50 rounded-full mix-blend-multiply opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-50 rounded-full mix-blend-multiply opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Campus Life & Events
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Discover the vibrant experiences and memorable moments at CSPIT
          </p>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
        </div>

        {/* Category selector tabs */}
        <div className="flex flex-wrap justify-center mb-10 gap-4">
          {["cultural", "technical", "sports"].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)} Events
            </button>
          ))}
        </div>

        {/* Gallery grid - Reduced height and added more columns for space efficiency */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {galleryData[activeCategory].map((item, index) => (
              <motion.div
                key={item.id}
                custom={index}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -20 }}
                layoutId={`gallery-${item.id}`}
                className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer h-[200px]"
                onClick={() => openSlideshow(activeCategory, index)}
              >
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center z-10 p-3">
                  <h3 className="text-sm text-white font-bold text-center mb-1">
                    {item.title}
                  </h3>
                  <p className="text-white/90 text-center text-xs line-clamp-2">
                    {item.description}
                  </p>
                  <div className="mt-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs">
                    View
                  </div>
                </div>
                <div className="relative w-full h-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Slideshow Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-10"
            onClick={closeSlideshow}
          >
            <button
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white z-50 rounded-full bg-black/50 backdrop-blur-sm p-2 hover:bg-black/70 transition-all duration-300"
              onClick={(e) => {
                e.stopPropagation();
                closeSlideshow();
              }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-sm hover:bg-black/50 z-50 rounded-full p-3 text-white transform transition-all duration-300 hidden md:block"
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-sm hover:bg-black/50 z-50 rounded-full p-3 text-white transform transition-all duration-300 hidden md:block"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            <div
              className="relative w-full max-w-5xl max-h-[80vh] overflow-hidden rounded-xl"
              ref={slideshowRef}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src={galleryData[selectedImage][currentSlide].image}
                  alt={galleryData[selectedImage][currentSlide].title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 80vw"
                  priority
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm p-4 text-white">
                <h3 className="text-xl font-bold mb-1">
                  {galleryData[selectedImage][currentSlide].title}
                </h3>
                <p className="text-sm text-white/80">
                  {galleryData[selectedImage][currentSlide].description}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <p className="text-xs text-white/60">
                    {currentSlide + 1} / {galleryData[selectedImage].length}
                  </p>
                  <div className="flex gap-2">
                    <button
                      className="bg-white/20 hover:bg-white/30 rounded-full p-1 md:hidden"
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePrevious();
                      }}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
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
                      className="bg-white/20 hover:bg-white/30 rounded-full p-1 md:hidden"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNext();
                      }}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
