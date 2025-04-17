"use client";
import Image from "next/image";

const certificationPartners = [
  { name: "AWS Cloud Practitioner", logo: "aws" },
  { name: "Cisco Certification", logo: "cisco" },
  { name: "Code Unnati", logo: "code_unnati" },
  { name: "CompTIA Partner", logo: "comptia_partner" },
  { name: "EC Council", logo: "ec-council" },
  { name: "Microsoft", logo: "microsoft" },
  { name: "NPTEL", logo: "nptel" },
  { name: "Oracle", logo: "oracle" },
  { name: "Red Hat", logo: "redhat" },
  { name: "Tata Strive", logo: "tata_strive" },
];

export default function IndustryRecognizedCourses() {
  return (
    <section className="bg-gray-50 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Industry Recognized Courses
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Empowering students with industry-relevant certifications for
            real-world career readiness
          </p>
          <div className="h-1 w-24 mx-auto mt-4 bg-blue-600 rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {certificationPartners.map((partner) => (
              <div
                key={partner.logo}
                className="bg-white rounded-lg p-3 border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow transition-all duration-300"
              >
                <div className="relative h-16">
                  <Image
                    src={`/images1/industry courses/${partner.logo}.webp`}
                    alt={partner.name}
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div className="mt-2 text-center">
                  <p className="text-xs font-medium text-gray-700 line-clamp-2">
                    {partner.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="text-center mt-12">
          <a
            href="/academics/certifications"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-blue-600 font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1"
          >
            View All Certifications
            <svg
              className="w-5 h-5 ml-2"
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
          </a>
        </div> */}
      </div>
    </section>
  );
}
