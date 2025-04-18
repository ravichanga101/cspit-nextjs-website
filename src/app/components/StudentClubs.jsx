"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const clubsData = [
  {
    name: "AWS Student Club",
    image: "/images1/Student Club/aws.webp",
    link: "/clubs/AWS",
    category: "Cloud Computing",
  },
  {
    name: "AI/ML Club",
    image: "/images1/Student Club/Aiml.webp",
    link: "/clubs/AIML",
    category: "Artificial Intelligence",
  },
  {
    name: "The Tribe of Creativity",
    image: "/images1/Student Club/CC.webp",
    link: "/clubs/CC",
    category: "Design",
  },
  {
    name: "Club Gamma",
    image: "/images1/Student Club/Club_Gamma.webp",
    link: "/clubs/Gamma",
    category: "Technology",
  },
  {
    name: "Cyber Security Club",
    image: "/images1/Student Club/Cyber_Security.webp",
    link: "/clubs/Cyber",
    category: "Security",
  },
  {
    name: "Data Science Club",
    image: "/images1/Student Club/DSLogo.webp",
    link: "/clubs/DS",
    category: "Data Science",
  },
  {
    name: "Machine Learning Club",
    image: "/images1/Student Club/ML_Club.webp",
    link: "/clubs/ML",
    category: "Artificial Intelligence",
  },
  {
    name: "House of Innovation Club",
    image: "/images1/Student Club/innovation.webp",
    link: "/clubs/Innovation",
    category: "Innovation",
  },
  {
    name: "ChipExplorers Club",
    image: "/images1/Student Club/ChipXplorers_Club.webp",
    link: "/clubs/ChipX",
    category: "Hardware",
  },
  {
    name: "Competitive Programming Squad",
    image: "/images1/Student Club/CPSQAUD.webp",
    link: "/clubs/CPS",
    category: "Programming",
  },
  {
    name: "Eloquence Club",
    image: "/images1/Student Club/eloquence_logo.webp",
    link: "/clubs/Eloquence",
    category: "Communication",
  },
  {
    name: "Scrapping the Sky Club",
    image: "/images1/Student Club/Scrapping_The_sky.webp",
    link: "/clubs/Sky",
    category: "Aviation",
  },
  {
    name: "Debate Club",
    image: "/images1/Student Club/Debate_Club.webp",
    link: "/clubs/Debate",
    category: "Communication",
  },
  {
    name: "Code For Cause Club",
    image: "/images1/Student Club/Code_for_the_cause.webp",
    link: "/clubs/CFC",
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
              <motion.div
                key={club.name}
                className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
              >
                <Link href={club.link} className="block h-full">
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
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
