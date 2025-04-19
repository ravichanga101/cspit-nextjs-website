"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Jayti Shah",
      role: "Student",
      image: "/images1/Jayti.jpg",
      quote:
        "The Computer Science and Engineering (CSE) department at our college provides an outstanding learning environment! Along with regular classes, the department organizes fun activities like the Tower of Hanoi challenge and treasure hunts, making learning both enjoyable and interesting.",
    },
    {
      id: 2,
      name: "Amit Panchal",
      role: "Parent",
      image: "/images1/AmitPanchal.jpg",
      quote:
        "As a parent of Shruti Panchal (22CS044) in the Computer Science & Engineering department, I want to express my sincere gratitude for the excellent education and support provided by the department.",
    },
    {
      id: 3,
      name: "Piyush Patel",
      role: "Parent",
      image: "/images1/PiyushPatel.jpg",
      quote:
        "I am highly impressed with the CSE Department. The expert sessions organized regularly offer students, including my daughter Pia, valuable exposure to industry insights and new technologies.",
    },
  ];

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const goToSlide = (index) => {
    if (!isAnimating && index !== currentIndex) {
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images1/about-us-bg.webp"
          alt="Background"
          fill
          sizes="100vw"
          quality={85}
          className="object-cover "
          priority
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        {/* <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Success Stories</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ffcc00] to-[#0056b3] mx-auto"></div>
        </div> */}

        <div className="max-w-6xl mx-auto">
          <div className="relative bg-white rounded-xl shadow-lg overflow-hidden opacity-92">
            <div
              className={`transition-opacity duration-500 ${
                isAnimating ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="p-8 md:p-14 flex flex-col md:flex-row items-center">
                <div className="relative mb-8 md:mb-0 md:mr-10">
                  <div className="h-44 w-44 relative rounded-full overflow-hidden border-4 border-[#0056b3]/10">
                    <Image
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-[#0056b3] text-white rounded-full p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <div className="mb-6">
                    <svg
                      className="w-12 h-12 text-gray-200 mb-4 mx-auto md:mx-0"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>

                    <p className="text-lg text-gray-700 italic leading-relaxed">
                      {testimonials[currentIndex].quote}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-xl text-gray-900">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-gray-600">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-md transition-all duration-200 focus:outline-none"
              aria-label="Previous testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 text-gray-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-md transition-all duration-200 focus:outline-none"
              aria-label="Next testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 text-gray-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>

          {/* Indicator dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-200 focus:outline-none ${
                  index === currentIndex
                    ? "w-8 bg-[#0056b3]"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
