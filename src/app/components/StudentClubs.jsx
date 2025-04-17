"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const clubsData = [
  {
    name: "AWS Student Club",
    image: "/images1/Student Club/aws.webp",
    link: "./club2.html?club=AWS",
    category: "Cloud Computing",
  },
  {
    name: "AI/ML Club",
    image: "/images1/Student Club/Aiml.webp",
    link: "./club2.html?club=AIML",
    category: "Artificial Intelligence",
  },
  {
    name: "The Tribe of Creativity",
    image: "/images1/Student Club/CC.webp",
    link: "./club2.html?club=CC",
    category: "Design",
  },
  {
    name: "Club Gamma",
    image: "/images1/Student Club/Club_Gamma.webp",
    link: "./club2.html?club=Gamma",
    category: "Technology",
  },
  {
    name: "Cyber Security Club",
    image: "/images1/Student Club/Cyber_Security.webp",
    link: "./club2.html?club=Cyber",
    category: "Security",
  },
  {
    name: "Data Science Club",
    image: "/images1/Student Club/DSLogo.webp",
    link: "./club2.html?club=DS",
    category: "Data Science",
  },
  {
    name: "Machine Learning Club",
    image: "/images1/Student Club/ML_Club.webp",
    link: "./club2.html?club=ML",
    category: "Artificial Intelligence",
  },
  {
    name: "House of Innovation Club",
    image: "/images1/Student Club/innovation.webp",
    link: "./club2.html?club=Innovation",
    category: "Innovation",
  },
  {
    name: "ChipExplorers Club",
    image: "/images1/Student Club/ChipXplorers_Club.webp",
    link: "./club2.html?club=ChipX",
    category: "Hardware",
  },
  {
    name: "Competitive Programming Squad",
    image: "/images1/Student Club/CPSQAUD.webp",
    link: "./club2.html?club=CPS",
    category: "Programming",
  },
  {
    name: "Eloquence Club",
    image: "/images1/Student Club/eloquence_logo.webp",
    link: "./club2.html?club=Eloquence",
    category: "Communication",
  },
  {
    name: "Scrapping the Sky Club",
    image: "/images1/Student Club/Scrapping_The_sky.webp",
    link: "./club2.html?club=Sky",
    category: "Aviation",
  },
  {
    name: "Debate Club",
    image: "/images1/Student Club/Debate_Club.webp",
    link: "./club2.html?club=Debate",
    category: "Communication",
  },
  {
    name: "Code For Cause Club",
    image: "/images1/Student Club/Code_for_the_cause.webp",
    link: "./club2.html?club=CFC",
    category: "Social Impact",
  },
];

export default function StudentClubs() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Student Clubs
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fostering innovation and collaboration through student-led
            communities
          </p>
          <div className="h-1 w-32 mx-auto mt-4 bg-blue-600 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {clubsData.map((club, index) => (
              <motion.a
                key={club.name}
                href={club.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-24 mb-3">
                  <Image
                    src={club.image}
                    alt={club.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-center">
                  <p className="font-medium text-gray-800 line-clamp-2 mb-2 h-12">
                    {club.name}
                  </p>
                  <span className="inline-block px-3 py-1 bg-blue-50 rounded-full text-xs text-blue-600 font-medium">
                    {club.category}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
