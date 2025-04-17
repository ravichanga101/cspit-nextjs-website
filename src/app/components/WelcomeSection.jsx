import React from "react";
import Image from "next/image";

const WelcomeSection = () => {
  const scalars = [
    {
      value: "36",
      label: "PhD",
      icon: "M319.9 320c57.41 0 103.1-46.56 103.1-104c0-57.44-46.54-104-103.1-104c-57.41 0-103.1 46.56-103.1 104C215.9 273.4 262.5 320 319.9 320z",
    },
    {
      value: "118",
      label: "Faculty Members",
      icon: "M592 0h-384C181.5 0 160 22.25 160 49.63V96c23.42 0 45.1 6.781 63.1 17.81V64h352v288h-64V304c0-8.838-7.164-16-16-16h-96c-8.836 0-16 7.162-16 16V352H287.3c22.07 16.48 39.54 38.5 50.76 64h253.9C618.5 416 640 393.8 640 366.4V49.63C640 22.25 618.5 0 592 0z",
    },
    {
      value: "2313",
      label: "Publications",
      icon: "M480 32H128C110.3 32 96 46.33 96 64v336C96 408.8 88.84 416 80 416S64 408.8 64 400V96H32C14.33 96 0 110.3 0 128v288c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V64C512 46.33 497.7 32 480 32z",
    },
    {
      value: "61",
      label: "Research Grants",
      icon: "M384 128h-128V0L384 128zM256 160H384v304c0 26.51-21.49 48-48 48h-288C21.49 512 0 490.5 0 464v-416C0 21.49 21.49 0 48 0H224l.0039 128C224 145.7 238.3 160 256 160z",
    },
    {
      value: "₹55.8M",
      label: "Grant Amount",
      icon: "M568.2 336.3c-13.12-17.81-38.14-21.66-55.93-8.469l-119.7 88.17h-120.6c-8.748 0-15.1-7.25-15.1-15.99c0-8.75 7.25-16 15.1-16h78.25c15.1 0 30.75-10.88 33.37-26.62c3.25-20-12.12-37.38-31.62-37.38H191.1c-26.1 0-53.12 9.25-74.12 26.25l-46.5 37.74L15.1 383.1C7.251 383.1 0 391.3 0 400v95.98C0 504.8 7.251 512 15.1 512h346.1c22.03 0 43.92-7.188 61.7-20.27l135.1-99.52C577.5 379.1 581.3 354.1 568.2 336.3z",
    },
  ];

  const strategicPartners = [
    { name: "Microsoft Corporation", logo: "/images1/MOU/microsoft.png" },
    { name: "eInfochips", logo: "/images1/MOU/1einfochips.png" },
    {
      name: "Cipriani Harrison Valves",
      logo: "/images1/MOU/Cipriani Harrison Valves.png",
    },
    {
      name: "Edunet Foundation",
      logo: "/images1/MOU/Edunet-Foundation-logo.png",
    },
    { name: "Oracle Academy", logo: "/images1/industry courses/oracle.webp" },
    { name: "Red Hat Academy", logo: "/images1/industry courses/redhat.webp" },
  ];

  const researchAreas = [
    {
      title: "AI, ML and Data Science",
      description:
        "Advanced research in artificial intelligence, machine learning algorithms, and data analytics",
    },
    {
      title: "VLSI & Embedded Systems",
      description:
        "Cutting-edge research in integrated circuit design and embedded systems",
    },
    {
      title: "Cyber Security / Blockchain",
      description:
        "Research in network security, cryptography, and blockchain technology",
    },
    {
      title: "Composite Materials",
      description:
        "Development of advanced composite materials for engineering applications",
    },
    {
      title: "Thermal Engineering",
      description: "Research in heat transfer and energy systems optimization",
    },
    {
      title: "Electric Vehicle Technology",
      description:
        "Research in electric propulsion and sustainable transportation",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-20">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-50 rounded-full mix-blend-multiply opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-50 rounded-full mix-blend-multiply opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-100 rounded-full mix-blend-multiply opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto">
          {/* Main heading with gradient */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Welcome to CSPIT
            </h1>
            <p className="text-xl md:text-2xl font-medium text-gray-600 mb-6">
              Chandubhai S. Patel Institute of Technology
            </p>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
          </div>
          {/* Description card */}
          <div className="bg-white rounded-2xl my-3 p-8 md:p-12 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br from-blue-600 to-indigo-600 opacity-10 rounded-full transform rotate-45"></div>
            <div className="relative space-y-6">
              <p className="text-gray-600 leading-relaxed text-lg">
                CSPIT is the first institute established in year 2000 at
                Education Campus, Changa (now CHARUSAT). The institute is
                managed through a think tank of academicians, scientists,
                engineers and professionals from all parts of the world.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Started with 240 seats with four Bachelor Degree Engineering
                Programs in the year 2000, the institute now has total intake of
                600 seats in 8 programs of Bachelor Degree, 63 seats of Post
                Graduate Degree and a Doctor of Philosophy (Ph. D.) programme.
              </p>
            </div>
            {/* Scalars grid */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 m-12">
              {scalars.map((scalar) => (
                <div
                  key={scalar.label}
                  className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="text-blue-600 text-2xl mb-2 flex justify-center">
                    <svg
                      className="w-8 h-8"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                    >
                      <path fill="currentColor" d={scalar.icon} />
                    </svg>
                  </div>
                  <div className="text-2xl font-bold text-center text-gray-800 mb-1">
                    {scalar.value}
                  </div>
                  <div className="text-center text-gray-600 text-sm">
                    {scalar.label}
                  </div>
                </div>
              ))}
            </div>
            {/* Strategic Partners Section */}
            <div className="mt-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Our Strategic Partners
                </h2>
                <p className="text-gray-600">
                  Collaborating with industry leaders for excellence
                </p>
                <div className="h-1 w-32 mx-auto bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mt-4"></div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {strategicPartners.map((partner) => (
                  <div
                    key={partner.name}
                    className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="relative h-16 w-full">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Research Thrust Areas */}
          <div className="mt-12">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                Research Thrust Areas
              </h2>
              <p className="text-gray-600 text-sm">
                Pioneering Innovation Through Research Excellence
              </p>
              <div className="h-1 w-32 mx-auto bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mt-3"></div>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-lg">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {researchAreas.map((area) => (
                  <div
                    key={area.title}
                    className="flex items-start space-x-2 p-2 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white">
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 text-sm">
                        {area.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <a
              href="#under-graduate-programs"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              Download Brochure
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
            <a
              href="#contact-us"
              className="inline-flex items-center px-8 py-4 rounded-lg border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1"
            >
              Contact Us
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
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
