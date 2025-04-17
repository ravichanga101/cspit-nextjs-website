"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";

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
      description:
        "Advanced research in artificial intelligence, machine learning algorithms, and data analytics for real-world applications.",
      publications: 45,
      projects: 12,
    },
    {
      title: "VLSI & Embedded Systems",
      image: "/images1/thrust2.jpeg",
      description:
        "Cutting-edge research in integrated circuit design, embedded systems, and hardware optimization.",
      publications: 38,
      projects: 15,
    },
    {
      title: "Cyber Security / Blockchain",
      image: "/images1/thrust3.jpeg",
      description:
        "Research in network security, cryptography, blockchain technology, and secure system design.",
      publications: 32,
      projects: 8,
    },
    {
      title: "Composite Materials",
      image: "/images1/thrust4.jpeg",
      description:
        "Development and characterization of advanced composite materials for engineering applications.",
      publications: 28,
      projects: 10,
    },
    {
      title: "Thermal Engineering",
      image: "/images1/thrust5.jpeg",
      description:
        "Research in heat transfer, thermodynamics, and energy systems optimization.",
      publications: 35,
      projects: 14,
    },
    {
      title: "Structural Engineering",
      image: "/images1/thrust6.jpeg",
      description:
        "Advanced research in structural design, analysis, and sustainable construction technologies.",
      publications: 42,
      projects: 16,
    },
    {
      title: "RF & Microwave Engineering",
      image: "/images1/thrust7.jpg",
      description:
        "Research in radio frequency systems, microwave devices, and wireless communications.",
      publications: 30,
      projects: 11,
    },
    {
      title: "High Performance Computing",
      image: "/images1/thrust20.jpeg",
      description:
        "Research in parallel computing, distributed systems, and computational optimization.",
      publications: 25,
      projects: 9,
    },
    {
      title: "Electric Vehicle Technology",
      image: "/images1/electric_vehicle.webp",
      description:
        "Research in electric propulsion, battery technology, and sustainable transportation systems.",
      publications: 22,
      projects: 7,
    },
  ];

  return (
    <section
      id="thrust-areas"
      className="bg-gradient-to-b from-gray-50 to-white py-20"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 relative inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Research Thrust Areas
            </span>
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-8 text-lg">
            Discover our key research areas where innovation meets excellence,
            driving technological advancement and scientific discovery.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-lg font-bold text-white mb-2">
                      {area.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {area.description}
                  </p>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <p className="text-blue-600 font-semibold">
                          {area.publications}
                        </p>
                        <p className="text-xs text-gray-500">Publications</p>
                      </div>
                      <div className="text-center">
                        <p className="text-indigo-600 font-semibold">
                          {area.projects}
                        </p>
                        <p className="text-xs text-gray-500">Projects</p>
                      </div>
                    </div>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchThrustAreas;
