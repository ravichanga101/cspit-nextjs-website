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
    <section className="bg-gradient-to-b from-blue-600 to-blue-700 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Industry Recognized Courses
          </h2>
          <p className="text-blue-100">
            Empowering students with industry-relevant certifications
          </p>
          <div className="h-1 w-32 mx-auto mt-4 bg-white/20 rounded-full"></div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {certificationPartners.map((partner) => (
              <div
                key={partner.logo}
                className="bg-white rounded-xl p-4 shadow-lg transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-20">
                  <Image
                    src={`/images1/industry courses/${partner.logo}.webp`}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="mt-3 text-center">
                  <p className="text-sm font-medium text-gray-600">
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
