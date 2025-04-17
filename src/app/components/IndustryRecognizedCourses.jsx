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
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50 opacity-70"></div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20px 20px, rgba(0, 50, 150, 0.03) 0, rgba(0, 50, 150, 0.03) 2px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* Content container */}
      <div className="container relative mx-auto px-4 z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Industry Recognized Courses
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Empowering students with industry-relevant certifications for
            real-world career readiness
          </p>
          <div className="h-1 w-24 mx-auto mt-4 bg-blue-600 rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/70 p-8 md:p-10">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-14">
            {certificationPartners.map((partner) => (
              <div key={partner.logo} className="group relative">
                <div className="flex flex-col items-center p-3 transition-all duration-300 rounded-lg hover:bg-blue-50/80 hover:border hover:border-blue-100">
                  <div className="relative h-16 w-28 md:h-18 md:w-32 transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src={`/images1/industry courses/${partner.logo}.webp`}
                      alt={partner.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="mt-2 text-xs font-medium text-gray-700 text-center opacity-80 group-hover:opacity-100 group-hover:text-blue-800">
                    {partner.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8 text-sm font-medium text-blue-700">
          <p>
            Preparing industry-ready professionals with globally recognized
            certifications
          </p>
        </div>
      </div>
    </section>
  );
}
