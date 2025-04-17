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

  // New intake scalars
  const intakeScalars = [
    {
      value: "2000",
      label: "Established in Year",
    },
    {
      value: "600",
      label: "B.Tech Seats",
    },
    {
      value: "8",
      label: "Bachelor's Programs",
    },
    {
      value: "63",
      label: "Post Graduate Seats",
    },
    {
      value: "36",
      label: "PhD Seats",
    },
    {
      value: "118",
      label: "Faculty Members",
    },
    {
      value: "2313",
      label: "Publications",
    },
    {
      value: "61",
      label: "Research Grants",
    },
    {
      value: "₹55.8M",
      label: "Grant Amount",
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
    },
    {
      title: "VLSI & Embedded Systems",
    },
    {
      title: "Cyber Security / Blockchain",
    },
    {
      title: "Composite Materials",
    },
    {
      title: "Thermal Engineering",
    },
    {
      title: "Electric Vehicle Technology",
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-12">
          {/* Welcome Text */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Welcome to CSPIT
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-gray-600 mb-6">
              Chandubhai S. Patel Institute of Technology
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-6"></div>

            <div className="space-y-4 text-gray-700">
              <p>
                CSPIT is the first institute established in year 2000 at
                Education Campus, Changa (now CHARUSAT). The institute is
                managed through a think tank of academicians, scientists,
                engineers and professionals from all parts of the world.
              </p>

              {/* Intake Scalars Grid - replacing the second paragraph */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6">
                {intakeScalars.map((scalar) => (
                  <div
                    key={scalar.label}
                    className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 p-2 rounded-lg"
                  >
                    <div className="font-bold text-lg md:text-xl text-gray-800">
                      {scalar.value}
                    </div>
                    <p className="font-medium text-xs text-gray-700 mt-1">
                      {scalar.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Welcome Image */}
          <div className="w-full lg:w-1/2 relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/images/ahmedabad-research-bg.jpg"
              alt="CSPIT Campus"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-blue-900/30"></div>

            {/* Action buttons below the image */}
            <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center gap-4">
              <a
                href="#download-brochure"
                className="px-4 py-2 bg-white text-blue-600 rounded-md font-medium text-sm shadow-lg hover:bg-blue-50 transition-all duration-300 flex items-center"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download Brochure
              </a>
              <a
                href="#apply-now"
                className="px-4 py-2 bg-blue-600 text-white rounded-md font-medium text-sm shadow-lg hover:bg-blue-700 transition-all duration-300 flex items-center"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                Apply Now
              </a>
            </div>
          </div>
        </div>

        {/* Research Thrust Areas - more compact with border */}
        <div className="mb-12 p-4 border border-blue-200 rounded-lg relative pb-8">
          {/* Centered Title with Background */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full shadow-md">
              <h2 className="text-lg font-bold">Research Thrust Areas</h2>
            </div>
          </div>

          {/* Grid content - starting further down to accommodate the title */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-6">
            {researchAreas.map((area) => (
              <div
                key={area.title}
                className="flex items-center space-x-2 p-2 hover:bg-blue-50 rounded-lg transition-colors duration-300"
              >
                <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white">
                  <svg
                    className="w-2.5 h-2.5"
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
                <h3 className="font-medium text-sm text-gray-900">
                  {area.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Partners Section - with light blue gradient background */}
        <div className="mb-12 py-8 px-4 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg shadow-sm relative pt-10">
          {/* Centered Title with Background - matching Research Thrust Areas style */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full shadow-md">
              <h2 className="text-lg font-bold">Strategic Partners</h2>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6">
            {strategicPartners.map((partner) => (
              <div
                key={partner.name}
                className="relative h-10 w-24 transition-all duration-300 hover:scale-105"
                title={partner.name}
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
