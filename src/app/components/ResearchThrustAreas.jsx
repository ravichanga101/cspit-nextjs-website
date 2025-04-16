"use client";
import { useEffect } from "react";

const ResearchThrustAreas = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const researchAreas = [
    {
      title: "AI, ML and Data Science",
      image: "/images1/thrust1.jpeg",
    },
    {
      title: "VLSI & Embedded Systems",
      image: "/images1/thrust2.jpeg",
    },
    {
      title: "Cyber Security / Blockchain Technologies",
      image: "/images1/thrust3.jpeg",
    },
    {
      title: "Composite Materials",
      image: "/images1/thrust4.jpeg",
    },
    {
      title: "Thermal Engineering",
      image: "/images1/thrust5.jpeg",
    },
    {
      title: "Structural and Environmental Engineering",
      image: "/images1/thrust6.jpeg",
    },
    {
      title: "RF & Microwave Engineering",
      image: "/images1/thrust7.jpg",
    },
    {
      title: "High Performance Computing",
      image: "/images1/thrust20.jpeg",
    },
    {
      title: "Electric Vehicle",
      image: "/images1/electric_vehicle.webp",
    },
  ];

  return (
    <section
      id="thrust-areas"
      className="bg-gradient-to-b from-gray-50 to-white py-16"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            RESEARCH THRUST AREAS
          </span>
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchAreas.map((area, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 ease-out"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 leading-tight">
                    {area.title}
                  </h3>
                  <div className="flex items-center justify-between mt-4">
                    <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                    <div className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchThrustAreas;
