"use client";
import Image from "next/image";
import { useState } from "react";
import PropTypes from "prop-types";

export default function FacultyDetailClient({ faculty }) {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Section: Profile Image and Info */}
        <div className="md:w-1/4">
          <div className="text-center">
            <div className="relative w-64 h-64 mx-auto">
              <Image
                id="faculty-image"
                src={faculty.image || "/CSPIT_Faculty/Electronics/TRUSHIT.webp"}
                alt={faculty.name || "Dr. Trushit Upadhyaya"}
                fill
                className="object-cover rounded-lg border-4 border-blue-600 shadow-lg transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
          <div className="mt-6 text-center">
            <h1 className="text-2xl font-bold text-gray-800">
              {faculty.name || "Dr. Trushit Upadhyaya"}
            </h1>
            <p className="text-lg font-semibold text-gray-600 mt-2">
              {faculty.title || "PROFESSOR, PRINCIPAL"}
            </p>
            <p className="text-md text-gray-600 mt-1">
              {faculty.degree || "Ph. D."}
            </p>

            <div className="flex justify-center gap-4 mt-4">
              {faculty.email && (
                <a
                  href={`mailto:${faculty.email}`}
                  className="text-blue-600 hover:text-blue-800"
                  title="Email"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </a>
              )}
              {faculty.linkedin && (
                <a
                  href={faculty.linkedin}
                  className="text-blue-600 hover:text-blue-800"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              )}
              {faculty.website && (
                <a
                  href={faculty.website}
                  className="text-blue-600 hover:text-blue-800"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Website"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
                    <path d="M12 4c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 14c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z" />
                  </svg>
                </a>
              )}
              {faculty.scholar && (
                <a
                  href={faculty.scholar}
                  className="text-blue-600 hover:text-blue-800"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Google Scholar"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 24a7 7 0 110-14 7 7 0 010 14zm0-24L0 9.5l4.838 3.94A8 8 0 0112 21a8 8 0 017.162-7.56L24 9.5 12 0z" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Right Section: Accordion */}
        <div className="md:w-3/4">
          <div className="space-y-4">
            {[
              {
                id: "expertise",
                title: "Areas of Expertise",
                content:
                  faculty.expertise ||
                  "Antennas, Computer Networks, Microwave Engineering",
              },
              {
                id: "subjects",
                title: "Subjects Taught",
                content:
                  faculty.subjects ||
                  "Electromagnetic Theory, Computer Networks, Python Programming, Analog Electronics",
              },
              {
                id: "projects",
                title: "Projects",
                content: (
                  <a
                    href={
                      faculty.projectsUrl ||
                      "https://www.charusat.ac.in/cspit/trushitupadhyaya#Projects"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Click here for details →
                  </a>
                ),
              },
              {
                id: "memberships",
                title: "Memberships",
                content: faculty.memberships || "IEEE, ISTE",
              },
              {
                id: "certifications",
                title: "Certifications",
                content:
                  faculty.certifications ||
                  "CISCO CERTIFIED NETWORK ASSOCIATE, CISCO CERTIFIED ACADEMY INSTRUCTOR",
              },
            ].map((section) => (
              <div
                key={section.id}
                className="border rounded-lg overflow-hidden"
              >
                <button
                  className="w-full px-4 py-3 text-left bg-gray-50 hover:bg-gray-100 focus:outline-none flex justify-between items-center"
                  onClick={() => toggleSection(section.id)}
                >
                  <span className="font-semibold">{section.title}</span>
                  <svg
                    className={`w-5 h-5 transform transition-transform ${
                      openSection === section.id ? "rotate-180" : ""
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <div
                  className={`px-4 py-3 transition-all duration-200 ${
                    openSection === section.id ? "block" : "hidden"
                  }`}
                >
                  {typeof section.content === "string" ? (
                    <p>{section.content}</p>
                  ) : (
                    section.content
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

FacultyDetailClient.propTypes = {
  faculty: PropTypes.shape({
    name: PropTypes.string,
    title: PropTypes.string,
    degree: PropTypes.string,
    image: PropTypes.string,
    email: PropTypes.string,
    linkedin: PropTypes.string,
    website: PropTypes.string,
    scholar: PropTypes.string,
    expertise: PropTypes.string,
    subjects: PropTypes.string,
    projectsUrl: PropTypes.string,
    memberships: PropTypes.string,
    certifications: PropTypes.string,
  }).isRequired,
};
