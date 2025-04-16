"use client";

import Image from "next/image";

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
    <section className="bg-blue-600 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          STUDENT CLUBS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {clubsData.map((club) => (
            <div
              key={club.name}
              className="group bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2"
            >
              <a
                href={club.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={club.image}
                    alt={club.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4">
                    <h4 className="text-lg font-semibold text-center mb-2">
                      {club.name}
                    </h4>
                    <span className="inline-block px-3 py-1 bg-blue-600 rounded-full text-sm">
                      {club.category}
                    </span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
