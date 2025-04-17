"use client";
import Link from "next/link";
import Image from "next/image";
import PropTypes from "prop-types";

export default function FacultyAndStaff({ faculties }) {
  if (!faculties || faculties.length === 0) return null;
  return (
    <section className="faculty-section py-12 bg-gray-100">
      <div className="container mx-auto px-4" style={{ maxWidth: "85%" }}>
        <div className="faculty-title text-center mb-8">
          <h2 className="text-3xl font-bold">MEET OUR FACULTY</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {faculties.map((faculty) => (
            <div
              key={faculty.slug}
              className="faculty-card bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 rounded-lg shadow transition transform hover:shadow-xl hover:scale-105"
            >
              <Link
                href={`/faculty/${faculty.slug}`}
                className="block text-center p-4"
              >
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src={faculty.image || "/CSPIT_Faculty/profile.png"}
                    alt={faculty.name}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-800">
                  {faculty.name}
                </h4>
                <h5 className="text-md text-gray-600 mt-1">{faculty.title}</h5>
                <p className="text-sm text-gray-500 mt-1">{faculty.degree}</p>
                {faculty.researchInterests && (
                  <p className="text-sm text-gray-700 mt-2">
                    <strong>Research Interests:</strong>{" "}
                    {faculty.researchInterests}
                  </p>
                )}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

FacultyAndStaff.propTypes = {
  faculties: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      title: PropTypes.string,
      degree: PropTypes.string,
      image: PropTypes.string,
      researchInterests: PropTypes.string,
      slug: PropTypes.string.isRequired,
    })
  ).isRequired,
};
