"use client";

import HomeSlider from "./components/HomeSlider";
import Image from "next/image";
import { initializeAccordions } from "@/lib/utils";
import { useEffect, useState } from "react";
import TestimonialSlider from "./components/TestimonialSlider";
import MessageSection from "./components/MessageSection.jsx";
import ResearchThrustAreas from "./components/ResearchThrustAreas";
import StudentClubs from "./components/StudentClubs";
import MOUSection from "./components/MOUSection";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    initializeAccordions();
  }, []);

  const projectData = {
    project1: {
      title: "AttendX: AI-Based Attendance System",
      description:
        "An automated attendance system using facial recognition and AI",
      image: "/images1/Projects/Attendex-3.webp",
    },
    project2: {
      title: "Gaganmitra Drone",
      description: "Advanced surveillance and monitoring drone system",
      image: "/images1/Projects/Ganagnmitra_Drone_1.webp",
    },
    project3: {
      title: "Hexapod",
      description: "Six-legged robotic system for rough terrain navigation",
      image: "/images1/Projects/Hexapod_1.webp",
    },
    project4: {
      title: "Multi-Purpose Power Attachment",
      description: "Versatile power tool attachment system",
      image: "/images1/Projects/power_attachment-1.webp",
    },
    project5: {
      title: "RickMate: Share Rides, Save More!",
      description: "Smart ride-sharing application for auto rickshaws",
      image: "/images1/Projects/rickmate-1.webp",
    },
    project6: {
      title: "Security Surveillance Robot",
      description: "Autonomous security monitoring robot system",
      image: "/images1/Projects/Security_1.webp",
    },
    project7: {
      title: "Warehouse Mobility System",
      description: "Automated warehouse logistics and management system",
      image: "/images1/Projects/Warehouse_2.webp",
    },
    project8: {
      title: "AI Enabled Smart Bin",
      description: "Intelligent waste management system",
      image: "/images1/Projects/smart_bin-2.webp",
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <HomeSlider />

      {/* Welcome Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Welcome to{" "}
            <span className="block mt-3 text-blue-600">
              Chandubhai S. Patel Institute of Technology (CSPIT)
            </span>
          </h1>

          <div className="mt-10 space-y-6 text-lg text-gray-600">
            <p className="leading-relaxed">
              CSPIT is the first institute established in year 2000 at Education
              Campus, Changa (now CHARUSAT). The institute is managed through a
              think tank of academician, scientists, engineers and professionals
              from all parts of the world.
            </p>
            <p className="leading-relaxed">
              Started with 240 seats with four Bachelor Degree Engineering
              Programs in the year 2000, the institute now has total intake of
              600 seats in 8 programs of Bachelor Degree, 63 seats of Post
              Graduate Degree and a Doctor of Philosophy (Ph. D.) programme.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <a
              href="#under-graduate-programs"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
            >
              Explore Programs
            </a>
            <a
              href="#contact-us"
              className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Research Thrust Areas */}
      <ResearchThrustAreas />

      {/* Scalars Section */}
      <section className="bg-gray-100 py-16 md:py-24" id="scalars">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            SCALARS
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-blue-600 text-4xl mb-4 flex justify-center">
                <svg
                  className="w-12 h-12"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path
                    fill="currentColor"
                    d="M319.9 320c57.41 0 103.1-46.56 103.1-104c0-57.44-46.54-104-103.1-104c-57.41 0-103.1 46.56-103.1 104C215.9 273.4 262.5 320 319.9 320z"
                  />
                </svg>
              </div>
              <div className="text-3xl font-bold text-center text-gray-800 mb-2">
                36
              </div>
              <div className="text-center text-gray-600">PhD</div>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-blue-600 text-4xl mb-4 flex justify-center">
                <svg
                  className="w-12 h-12"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M437.2 403.5L319.1 215L319.1 64h7.1c13.25 0 23.1-10.75 23.1-24l-.0002-16c0-13.25-10.75-24-23.1-24H120C106.8 0 96.01 10.75 96.01 24l-.0002 16c0 13.25 10.75 24 23.1 24h7.1L128 215l-117.2 188.5C-18.48 450.6 15.27 512 70.89 512h306.2C432.7 512 466.5 450.5 437.2 403.5z"
                  />
                </svg>
              </div>
              <div className="text-3xl font-bold text-center text-gray-800 mb-2">
                16
              </div>
              <div className="text-center text-gray-600">Research Projects</div>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-blue-600 text-4xl mb-4 flex justify-center">
                <svg
                  className="w-12 h-12"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M572.1 82.38C569.5 71.59 559.8 64 548.7 64h-100.8c.2422-12.45 .1078-23.7-.1559-33.02C447.3 13.63 433.2 0 415.8 0H160.2C142.8 0 128.7 13.63 128.2 30.98C127.1 40.3 127.8 51.55 128.1 64H27.26C16.16 64 6.537 71.59 3.912 82.38C3.1 85.78-15.71 167.2 37.07 245.9c37.44 55.82 100.6 95.03 187.5 117.4c18.7 4.805 31.41 22.06 31.41 41.37C256 428.5 236.5 448 212.6 448H208c-26.51 0-47.99 21.49-47.99 48c0 8.836 7.163 16 15.1 16h223.1c8.836 0 15.1-7.164 15.1-16c0-26.51-21.48-48-47.99-48h-4.644c-23.86 0-43.36-19.5-43.36-43.35c0-19.31 12.71-36.57 31.41-41.37c86.96-22.34 150.1-61.55 187.5-117.4C591.7 167.2 572.9 85.78 572.1 82.38z"
                  />
                </svg>
              </div>
              <div className="text-3xl font-bold text-center text-gray-800 mb-2">
                45
              </div>
              <div className="text-center text-gray-600">Ongoing Projects</div>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-blue-600 text-4xl mb-4 flex justify-center">
                <svg
                  className="w-12 h-12"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M320 336c0 8.844-7.156 16-16 16h-96C199.2 352 192 344.8 192 336V288H0v144C0 457.6 22.41 480 48 480h416c25.59 0 48-22.41 48-48V288h-192V336z"
                  />
                </svg>
              </div>
              <div className="text-3xl font-bold text-center text-gray-800 mb-2">
                115
              </div>
              <div className="text-center text-gray-600">Entrepreneurs</div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            <div className="p-6 bg-white rounded-lg shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-blue-600 text-4xl mb-4 flex justify-center">
                <svg
                  className="w-12 h-12"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path
                    fill="currentColor"
                    d="M592 0h-384C181.5 0 160 22.25 160 49.63V96c23.42 0 45.1 6.781 63.1 17.81V64h352v288h-64V304c0-8.838-7.164-16-16-16h-96c-8.836 0-16 7.162-16 16V352H287.3c22.07 16.48 39.54 38.5 50.76 64h253.9C618.5 416 640 393.8 640 366.4V49.63C640 22.25 618.5 0 592 0z"
                  />
                </svg>
              </div>
              <div className="text-3xl font-bold text-center text-gray-800 mb-2">
                118
              </div>
              <div className="text-center text-gray-600">Faculty Members</div>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-blue-600 text-4xl mb-4 flex justify-center">
                <svg
                  className="w-12 h-12"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M480 32H128C110.3 32 96 46.33 96 64v336C96 408.8 88.84 416 80 416S64 408.8 64 400V96H32C14.33 96 0 110.3 0 128v288c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V64C512 46.33 497.7 32 480 32z"
                  />
                </svg>
              </div>
              <div className="text-3xl font-bold text-center text-gray-800 mb-2">
                2313
              </div>
              <div className="text-center text-gray-600">Publications</div>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-blue-600 text-4xl mb-4 flex justify-center">
                <svg
                  className="w-12 h-12"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M384 128h-128V0L384 128zM256 160H384v304c0 26.51-21.49 48-48 48h-288C21.49 512 0 490.5 0 464v-416C0 21.49 21.49 0 48 0H224l.0039 128C224 145.7 238.3 160 256 160z"
                  />
                </svg>
              </div>
              <div className="text-3xl font-bold text-center text-gray-800 mb-2">
                61
              </div>
              <div className="text-center text-gray-600">Number of Grants</div>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-blue-600 text-4xl mb-4 flex justify-center">
                <svg
                  className="w-12 h-12"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M568.2 336.3c-13.12-17.81-38.14-21.66-55.93-8.469l-119.7 88.17h-120.6c-8.748 0-15.1-7.25-15.1-15.99c0-8.75 7.25-16 15.1-16h78.25c15.1 0 30.75-10.88 33.37-26.62c3.25-20-12.12-37.38-31.62-37.38H191.1c-26.1 0-53.12 9.25-74.12 26.25l-46.5 37.74L15.1 383.1C7.251 383.1 0 391.3 0 400v95.98C0 504.8 7.251 512 15.1 512h346.1c22.03 0 43.92-7.188 61.7-20.27l135.1-99.52C577.5 379.1 581.3 354.1 568.2 336.3z"
                  />
                </svg>
              </div>
              <div className="text-3xl font-bold text-center text-gray-800 mb-2">
                55.8M
              </div>
              <div className="text-center text-gray-600">Amount of Grants</div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="bg-gray-50 py-16 md:py-24" id="programs">
        <div className="container mx-auto px-4" id="under-graduate-programs">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            PROGRAMS OFFERED
          </h2>

          {/* Undergraduate Programs */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Under Graduate Programs (B. Tech)
            </h3>
            <div className="h-1 w-24 bg-blue-600 mb-8"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* CSE */}
              <a
                href="https://charusat.ac.in/cspit/cse/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                  <div className="relative h-48">
                    <Image
                      src="/images1/programs/programs-20.webp"
                      alt="B.Tech in Computer Science"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h5 className="font-semibold text-gray-800 group-hover:text-blue-600">
                      Computer Science & Engineering
                    </h5>
                  </div>
                </div>
              </a>

              {/* Electronics */}
              <a
                href="https://charusat.ac.in/cspit/ec/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                  <div className="relative h-48">
                    <Image
                      src="/images1/ec.avif"
                      alt="B.Tech in Electronics Engineering"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h5 className="font-semibold text-gray-800 group-hover:text-blue-600">
                      Electronics & Communication Engineering
                    </h5>
                  </div>
                </div>
              </a>

              {/* IT */}
              <a
                href="https://charusat.ac.in/cspit/it/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                  <div className="relative h-48">
                    <Image
                      src="/images1/programs/programs-7.webp"
                      alt="B.Tech in Information Technology"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h5 className="font-semibold text-gray-800 group-hover:text-blue-600">
                      Information Technology
                    </h5>
                  </div>
                </div>
              </a>

              {/* Civil */}
              <a
                href="https://cspitcivil.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                  <div className="relative h-48">
                    <Image
                      src="/images1/programs/programs-2.webp"
                      alt="B.Tech in Civil Engineering"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h5 className="font-semibold text-gray-800 group-hover:text-blue-600">
                      Civil Engineering
                    </h5>
                  </div>
                </div>
              </a>

              {/* Computer Engineering */}
              <a
                href="https://charusat.ac.in/cspit/ce/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                  <div className="relative h-48">
                    <Image
                      src="/images1/programs/programs-8.webp"
                      alt="B.Tech in Computer Engineering"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h5 className="font-semibold text-gray-800 group-hover:text-blue-600">
                      Computer Engineering
                    </h5>
                  </div>
                </div>
              </a>

              {/* Mechanical */}
              <a
                href="https://charusat.ac.in/cspit/me/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                  <div className="relative h-48">
                    <Image
                      src="/images1/programs/programs-3.webp"
                      alt="B.Tech in Mechanical Engineering"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h5 className="font-semibold text-gray-800 group-hover:text-blue-600">
                      Mechanical Engineering
                    </h5>
                  </div>
                </div>
              </a>

              {/* AI ML */}
              <a
                href="https://charusat.edu.in/cspit/aiml/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                  <div className="relative h-48">
                    <Image
                      src="/images1/programs/aiml.webp"
                      alt="B.Tech in Artificial Intelligence and Machine Learning"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h5 className="font-semibold text-gray-800 group-hover:text-blue-600">
                      Artificial Intelligence and Machine Learning
                    </h5>
                  </div>
                </div>
              </a>

              {/* Electrical */}
              <a
                href="https://charusat.ac.in/cspit/ee/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                  <div className="relative h-48">
                    <Image
                      src="/images1/programs/electrical.webp"
                      alt="B.Tech in Electrical Engineering"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h5 className="font-semibold text-gray-800 group-hover:text-blue-600">
                      Electrical Engineering
                    </h5>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Post Graduate Programs */}
          <div className="mt-20" id="post-graduate-programs">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Post Graduate Programs (M. Tech)
            </h3>
            <div className="h-1 w-24 bg-blue-600 mb-8"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Advanced Manufacturing */}
              <a
                href="https://charusat.ac.in/cspit/me/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                  <div className="relative h-48">
                    <Image
                      src="/images1/programs/programs-9.webp"
                      alt="M.Tech in Advanced Manufacturing Technology"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h5 className="font-semibold text-gray-800 group-hover:text-blue-600">
                      Advanced Manufacturing Technology
                    </h5>
                  </div>
                </div>
              </a>

              {/* Computer Engineering */}
              <a
                href="https://charusat.ac.in/cspit/ce/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                  <div className="relative h-48">
                    <Image
                      src="/images1/programs/programs-8.webp"
                      alt="M.Tech in Computer Engineering"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h5 className="font-semibold text-gray-800 group-hover:text-blue-600">
                      Computer Engineering
                    </h5>
                  </div>
                </div>
              </a>

              {/* Structural Engineering */}
              <a
                href="https://cspitcivil.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                  <div className="relative h-48">
                    <Image
                      src="/images1/programs/programs-2.webp"
                      alt="M.Tech in Structural Engineering"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h5 className="font-semibold text-gray-800 group-hover:text-blue-600">
                      Structural Engineering
                    </h5>
                  </div>
                </div>
              </a>

              {/* Thermal Engineering */}
              <a
                href="https://charusat.ac.in/cspit/me/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                  <div className="relative h-48">
                    <Image
                      src="/images1/programs/programs-11.webp"
                      alt="M.Tech in Thermal Engineering"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h5 className="font-semibold text-gray-800 group-hover:text-blue-600">
                      Thermal Engineering
                    </h5>
                  </div>
                </div>
              </a>

              {/* PGDEAMT */}
              <a
                href="https://www.charusat.ac.in/course-single#PGDEAMT"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                  <div className="relative h-48">
                    <Image
                      src="/images1/programs/programs-10.webp"
                      alt="PGDEAMT"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h5 className="font-semibold text-gray-800 group-hover:text-blue-600">
                      PGDEAMT
                    </h5>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Recognized Courses Section */}
      <section className="bg-blue-600 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            INDUSTRY RECOGNIZED COURSES
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* AWS */}
            <div className="bg-white rounded-lg p-4 shadow-lg transition-transform duration-300 hover:scale-105">
              <div className="relative h-32">
                <Image
                  src="/images1/industry courses/aws.webp"
                  alt="AWS Cloud Practitioner"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Cisco */}
            <div className="bg-white rounded-lg p-4 shadow-lg transition-transform duration-300 hover:scale-105">
              <div className="relative h-32">
                <Image
                  src="/images1/industry courses/cisco.webp"
                  alt="Cisco Certification"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Code Unnati */}
            <div className="bg-white rounded-lg p-4 shadow-lg transition-transform duration-300 hover:scale-105">
              <div className="relative h-32">
                <Image
                  src="/images1/industry courses/code_unnati.webp"
                  alt="Code Unnati"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* CompTIA */}
            <div className="bg-white rounded-lg p-4 shadow-lg transition-transform duration-300 hover:scale-105">
              <div className="relative h-32">
                <Image
                  src="/images1/industry courses/comptia_partner.webp"
                  alt="CompTIA Partner"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* EC Council */}
            <div className="bg-white rounded-lg p-4 shadow-lg transition-transform duration-300 hover:scale-105">
              <div className="relative h-32">
                <Image
                  src="/images1/industry courses/ec-council.webp"
                  alt="EC Council"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Microsoft */}
            <div className="bg-white rounded-lg p-4 shadow-lg transition-transform duration-300 hover:scale-105">
              <div className="relative h-32">
                <Image
                  src="/images1/industry courses/microsoft.webp"
                  alt="Microsoft"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* NPTEL */}
            <div className="bg-white rounded-lg p-4 shadow-lg transition-transform duration-300 hover:scale-105">
              <div className="relative h-32">
                <Image
                  src="/images1/industry courses/nptel.webp"
                  alt="NPTEL"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Oracle */}
            <div className="bg-white rounded-lg p-4 shadow-lg transition-transform duration-300 hover:scale-105">
              <div className="relative h-32">
                <Image
                  src="/images1/industry courses/oracle.webp"
                  alt="Oracle"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Red Hat */}
            <div className="bg-white rounded-lg p-4 shadow-lg transition-transform duration-300 hover:scale-105">
              <div className="relative h-32">
                <Image
                  src="/images1/industry courses/redhat.webp"
                  alt="Red Hat"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Tata Strive */}
            <div className="bg-white rounded-lg p-4 shadow-lg transition-transform duration-300 hover:scale-105">
              <div className="relative h-32">
                <Image
                  src="/images1/industry courses/tata_strive.webp"
                  alt="Tata Strive"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Placement Section */}
      <section
        className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24"
        id="placement"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Placement Excellence
          </h2>

          {/* Placement Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
            <div className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  8.5 LPA
                </div>
                <p className="text-gray-600">Average Package</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  24 LPA
                </div>
                <p className="text-gray-600">Highest Package</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  120+
                </div>
                <p className="text-gray-600">Companies Visited</p>
              </div>
            </div>
          </div>

          {/* Recruiters Section */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Our Prominent Recruiters
            </h3>
            <p className="text-gray-600">
              Leading companies that trust our talent
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              "amazon",
              "motorola",
              "tcs",
              "softwarem",
              "torrent",
              "intuitive",
              "infosys",
              "infocusp",
              "capgemi",
              "crest",
              "jeavio",
              "canblicks",
              "thomson",
              "zignuts",
              "tatvasoft",
              "ibm",
              "navaera",
              "einfo",
            ].map((company, index) => (
              <div
                key={company}
                className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center"
              >
                <div className="relative h-16 w-full">
                  <Image
                    src={`/images1/recruiters/${company}${
                      company.endsWith(".jpg") ? "" : ".png"
                    }`}
                    alt={`${company} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StudentClubs />

      {/* Student Projects Section */}
      <section
        className="bg-gray-50 py-16 md:py-24"
        id="students-work"
        data-sr-id="4"
        style={{
          visibility: "visible",
          WebkitTransform: "translateY(0) scale(1)",
          transform: "translateY(0) scale(1)",
          opacity: 1,
          WebkitTransition:
            "all, -webkit-transform 0.6s cubic-bezier(0.6, 0.2, 0.1, 1) 0s, opacity 0.6s cubic-bezier(0.6, 0.2, 0.1, 1) 0s",
          transition:
            "all, transform 0.6s cubic-bezier(0.6, 0.2, 0.1, 1) 0s, opacity 0.6s cubic-bezier(0.6, 0.2, 0.1, 1) 0s",
        }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            STUDENT PROJECTS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(projectData).map(([id, project]) => (
              <div key={id} className="relative group">
                <div
                  className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105"
                  onClick={() => setSelectedProject(id)}
                >
                  <div className="relative h-48">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <p className="text-white font-semibold">Know More</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h5 className="font-semibold text-gray-800 group-hover:text-blue-600">
                      {project.title}
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Project Modal */}
          {selectedProject && (
            <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-lg max-w-2xl w-full">
                <div className="relative">
                  <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                    onClick={() => setSelectedProject(null)}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  <div className="relative h-64">
                    <Image
                      src={projectData[selectedProject].image}
                      alt={projectData[selectedProject].title}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {projectData[selectedProject].title}
                    </h3>
                    <p className="text-gray-600">
                      {projectData[selectedProject].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Honors and Minor Programs Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            B. Tech. with Honors and Minor Degree Programs
          </h2>

          {/* Electric Vehicle Systems */}
          <div className="accordion">
            <div className="accordion-header">
              Electric Vehicle Systems <span>+</span>
            </div>
            <div className="accordion-content">
              <div className="tg-wrap">
                <table className="tg">
                  <thead>
                    <tr>
                      <th className="tg-kwiq" rowSpan="2">
                        Specialization
                      </th>
                      <th className="tg-kwiq" rowSpan="2">
                        Course
                        <br />
                        offering department
                      </th>
                      <th className="tg-kwiq" colSpan="2">
                        Degree
                      </th>
                      <th className="tg-kwiq" colSpan="2">
                        Degree
                      </th>
                    </tr>
                    <tr>
                      <th className="tg-kwiq">Eligible Branch</th>
                      <th className="tg-kwiq">Hons. with specialization</th>
                      <th className="tg-kwiq">Eligible Branches</th>
                      <th className="tg-kwiq">Minor Specialization</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="tg-kwiq">Electric Vehicle System</td>
                      <td className="tg-kwiq">Electrical Engineering</td>
                      <td className="tg-kwiq">Electrical Engineering</td>
                      <td className="tg-kwiq">
                        Bachelor of Technology (Hons.)
                        <br />
                        Electrical Engineering with Specialization in
                        <br />
                        Electric Vehicles
                      </td>
                      <td className="tg-kwiq">
                        Mechanical Engg.
                        <br />
                        Civil Engg.
                        <br />E & C Engg.
                        <br />
                        Information Tech.
                        <br />
                        Computer Engg.
                        <br />
                        Computer Science & Engg.
                      </td>
                      <td className="tg-kwiq">
                        Bachelor of Technology
                        <br />
                        <strong>
                          <i>Branch Name</i>
                        </strong>{" "}
                        with Minor Specialization in Electric Vehicle System
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* AI & ML */}
          <div className="accordion">
            <div className="accordion-header">
              Artificial Intelligence & Machine Learning <span>+</span>
            </div>
            <div className="accordion-content">
              <div className="tg-wrap">
                <table className="tg">
                  <thead>
                    <tr>
                      <th className="tg-kwiq" rowSpan="2">
                        Specialization
                      </th>
                      <th className="tg-kwiq" rowSpan="2">
                        Course
                        <br />
                        offering department
                      </th>
                      <th className="tg-kwiq" colSpan="2">
                        Degree
                      </th>
                      <th className="tg-kwiq" colSpan="2">
                        Degree
                      </th>
                    </tr>
                    <tr>
                      <th className="tg-kwiq">Eligible Branch</th>
                      <th className="tg-kwiq">Hons. with specialization</th>
                      <th className="tg-kwiq">Eligible Branches</th>
                      <th className="tg-kwiq">Minor Specialization</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="tg-kwiq">
                        Artificial Intelligence &<br />
                        Machine Learning
                      </td>
                      <td className="tg-kwiq">
                        <br />
                        --
                      </td>
                      <td className="tg-kwiq">
                        <br />
                        --
                      </td>
                      <td className="tg-kwiq">
                        <br />
                        --
                      </td>
                      <td className="tg-kwiq">
                        Mechanical Engg.
                        <br />
                        Civil Engg.
                        <br />
                        Electrical Engg.
                      </td>
                      <td className="tg-kwiq">
                        Bachelor of Technology
                        <br />
                        <strong>
                          <i>Branch Name</i>
                        </strong>{" "}
                        with Minor Specialization in Artificial Intelligence &
                        Machine Learning
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Robotics & IoT */}
          <div className="accordion">
            <div className="accordion-header">
              Robotics & Internet of Things <span>+</span>
            </div>
            <div className="accordion-content">
              <div className="tg-wrap">
                <table className="tg">
                  <thead>
                    <tr>
                      <th className="tg-kwiq" rowSpan="2">
                        Specialization
                      </th>
                      <th className="tg-kwiq" rowSpan="2">
                        Course
                        <br />
                        offering department
                      </th>
                      <th className="tg-kwiq" colSpan="2">
                        Degree
                      </th>
                      <th className="tg-kwiq" colSpan="2">
                        Degree
                      </th>
                    </tr>
                    <tr>
                      <th className="tg-kwiq">Eligible Branch</th>
                      <th className="tg-kwiq">Hons. with specialization</th>
                      <th className="tg-kwiq">Eligible Branches</th>
                      <th className="tg-kwiq">Minor Specialization</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="tg-kwiq">
                        Robotics &<br />
                        Internet of Things
                      </td>
                      <td className="tg-kwiq">E&C Engineering</td>
                      <td className="tg-kwiq">E&C Engineering</td>
                      <td className="tg-kwiq">
                        Bachelor of Technology (Hons.)
                        <br />
                        Electronics & Communication Engineering with
                        Specialization in
                        <br />
                        Robotics & Internet of Things
                      </td>
                      <td className="tg-kwiq">
                        Mechanical Engg.
                        <br />
                        Civil Engg.
                        <br />
                        Electrical Engg.
                        <br />
                        Information Tech.
                        <br />
                        Computer Engg.
                        <br />
                        Computer Science & Engg.
                      </td>
                      <td className="tg-kwiq">
                        Bachelor of Technology
                        <br />
                        <strong>
                          <i>Branch Name</i>
                        </strong>{" "}
                        with Minor Specialization in Robotics & Internet of
                        Things
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Data Science */}
          <div className="accordion">
            <div className="accordion-header">
              Data Science <span>+</span>
            </div>
            <div className="accordion-content">
              <div className="tg-wrap">
                <table className="tg">
                  <thead>
                    <tr>
                      <th className="tg-kwiq" rowSpan="2">
                        Specialization
                      </th>
                      <th className="tg-kwiq" rowSpan="2">
                        Course
                        <br />
                        offering department
                      </th>
                      <th className="tg-kwiq" colSpan="2">
                        Degree
                      </th>
                      <th className="tg-kwiq" colSpan="2">
                        Degree
                      </th>
                    </tr>
                    <tr>
                      <th className="tg-kwiq">Eligible Branch</th>
                      <th className="tg-kwiq">Hons. with specialization</th>
                      <th className="tg-kwiq">Eligible Branches</th>
                      <th className="tg-kwiq">Minor Specialization</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="tg-kwiq">Data Science</td>
                      <td className="tg-kwiq">E&C Engineering</td>
                      <td className="tg-kwiq">
                        <br />-
                      </td>
                      <td className="tg-kwiq">
                        <br />-
                      </td>
                      <td className="tg-kwiq">
                        E & C Engg.
                        <br />
                        Mechanical Engg.
                        <br />
                        Civil Engg.
                        <br />
                        Electrical Engg.
                      </td>
                      <td className="tg-kwiq">
                        Bachelor of Technology
                        <br />
                        <strong>
                          <i>Branch Name</i>
                        </strong>{" "}
                        with Minor Specialization in Data Science
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* GIS and Remote Sensing */}
          <div className="accordion">
            <div className="accordion-header">
              GIS and Remote Sensing <span>+</span>
            </div>
            <div className="accordion-content">
              <div className="tg-wrap">
                <table className="tg">
                  <thead>
                    <tr>
                      <th className="tg-kwiq" rowSpan="2">
                        Specialization
                      </th>
                      <th className="tg-kwiq" rowSpan="2">
                        Course
                        <br />
                        offering department
                      </th>
                      <th className="tg-kwiq" colSpan="2">
                        Degree
                      </th>
                      <th className="tg-kwiq" colSpan="2">
                        Degree
                      </th>
                    </tr>
                    <tr>
                      <th className="tg-kwiq">Eligible Branch</th>
                      <th className="tg-kwiq">Hons. with specialization</th>
                      <th className="tg-kwiq">Eligible Branches</th>
                      <th className="tg-kwiq">Minor Specialization</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="tg-kwiq">GIS and Remote Sensing</td>
                      <td className="tg-kwiq">Civil Engineering</td>
                      <td className="tg-kwiq">Civil Engineering</td>
                      <td className="tg-kwiq">
                        Bachelor of Technology (Hons.)
                        <br />
                        Civil Engineering with Specialization in
                        <br />
                        GIS and Remote Sensing
                      </td>
                      <td className="tg-kwiq">
                        Mechanical Engg.
                        <br />
                        Electrical Engg.
                        <br />E & C Engg.
                        <br />
                        Information Tech.
                        <br />
                        Computer Engg.
                        <br />
                        Computer Science & Engg.
                      </td>
                      <td className="tg-kwiq">
                        Bachelor of Technology
                        <br />
                        <strong>
                          <i>Branch Name</i>
                        </strong>{" "}
                        with Minor Specialization in GIS and Remote Sensing
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Green Technology and Sustainability Engineering */}
          <div className="accordion">
            <div className="accordion-header">
              Green Technology and Sustainability Engineering <span>+</span>
            </div>
            <div className="accordion-content">
              <div className="tg-wrap">
                <table className="tg">
                  <thead>
                    <tr>
                      <th className="tg-kwiq" rowSpan="2">
                        Specialization
                      </th>
                      <th className="tg-kwiq" rowSpan="2">
                        Course
                        <br />
                        offering department
                      </th>
                      <th className="tg-kwiq" colSpan="2">
                        Degree
                      </th>
                      <th className="tg-kwiq" colSpan="2">
                        Degree
                      </th>
                    </tr>
                    <tr>
                      <th className="tg-kwiq">Eligible Branch</th>
                      <th className="tg-kwiq">Hons. with specialization</th>
                      <th className="tg-kwiq">Eligible Branches</th>
                      <th className="tg-kwiq">Minor Specialization</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="tg-096r">
                        Green Technology and
                        <br />
                        Sustainability Engineering
                      </td>
                      <td className="tg-096r">Civil Engineering</td>
                      <td className="tg-096r">Civil Engineering</td>
                      <td className="tg-096r">
                        Bachelor of Technology (Hons.)
                        <br />
                        Civil Engineering with Specialization in
                        <br />
                        Green Technology and Sustainability Engineering
                      </td>
                      <td className="tg-096r">
                        Mechanical Engg.
                        <br />
                        Electrical Engg.
                        <br />E & C Engg.
                        <br />
                        Information Tech.
                        <br />
                        Computer Engg.
                        <br />
                        Computer Science & Engg.
                      </td>
                      <td className="tg-096r">
                        Bachelor of Technology
                        <br />
                        <strong>
                          <i>Branch Name</i>
                        </strong>{" "}
                        with Minor Specialization in Green Technology and
                        <br />
                        Sustainability Engineering
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* 3D Printing */}
          <div className="accordion">
            <div className="accordion-header">
              3D Printing <span>+</span>
            </div>
            <div className="accordion-content">
              <div className="tg-wrap">
                <table className="tg">
                  <thead>
                    <tr>
                      <th className="tg-kwiq" rowSpan="2">
                        Specialization
                      </th>
                      <th className="tg-kwiq" rowSpan="2">
                        Course
                        <br />
                        offering department
                      </th>
                      <th className="tg-kwiq" colSpan="2">
                        Degree
                      </th>
                      <th className="tg-kwiq" colSpan="2">
                        Degree
                      </th>
                    </tr>
                    <tr>
                      <th className="tg-kwiq">Eligible Branch</th>
                      <th className="tg-kwiq">Hons. with specialization</th>
                      <th className="tg-kwiq">Eligible Branches</th>
                      <th className="tg-kwiq">Minor Specialization</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="tg-kwiq">3D Printing</td>
                      <td className="tg-kwiq">Civil Engineering</td>
                      <td className="tg-kwiq">Civil Engineering</td>
                      <td className="tg-kwiq">
                        Bachelor of Technology (Hons.)
                        <br />
                        Civil Engineering with Specialization in
                        <br />
                        3D Printing
                      </td>
                      <td className="tg-kwiq">
                        Mechanical Engg.
                        <br />
                        Electrical Engg.
                        <br />E & C Engg.
                        <br />
                        Information Tech.
                        <br />
                        Computer Engg.
                        <br />
                        Computer Science & Engg.
                      </td>
                      <td className="tg-kwiq">
                        Bachelor of Technology
                        <br />
                        <strong>
                          <i>Branch Name</i>
                        </strong>{" "}
                        with Minor Specialization in 3D Printing
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Environmental Geotechnology */}
          <div className="accordion">
            <div className="accordion-header">
              Environmental Geotechnology <span>+</span>
            </div>
            <div className="accordion-content">
              <div className="tg-wrap">
                <table className="tg">
                  <thead>
                    <tr>
                      <th className="tg-kwiq" rowSpan="2">
                        Specialization
                      </th>
                      <th className="tg-kwiq" rowSpan="2">
                        Course
                        <br />
                        offering department
                      </th>
                      <th className="tg-kwiq" colSpan="2">
                        Degree
                      </th>
                      <th className="tg-kwiq" colSpan="2">
                        Degree
                      </th>
                    </tr>
                    <tr>
                      <th className="tg-kwiq">Eligible Branch</th>
                      <th className="tg-kwiq">Hons. with specialization</th>
                      <th className="tg-kwiq">Eligible Branches</th>
                      <th className="tg-kwiq">Minor Specialization</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="tg-096r">Environmental Geotechnology</td>
                      <td className="tg-096r">Civil Engineering</td>
                      <td className="tg-096r">Civil Engineering</td>
                      <td className="tg-096r">
                        Bachelor of Technology (Hons.)
                        <br />
                        Civil Engineering with Specialization in
                        <br />
                        Environmental Geotechnology
                      </td>
                      <td className="tg-096r">
                        Mechanical Engg.
                        <br />
                        Electrical Engg.
                        <br />E & C Engg.
                        <br />
                        Information Tech.
                        <br />
                        Computer Engg.
                        <br />
                        Computer Science & Engg.
                      </td>
                      <td className="tg-096r">
                        Bachelor of Technology
                        <br />
                        <strong>
                          <i>Branch Name</i>
                        </strong>{" "}
                        with Minor Specialization in Environmental Geotechnology
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Smart Cities */}
          <div className="accordion">
            <div className="accordion-header">
              Smart Cities <span>+</span>
            </div>
            <div className="accordion-content">
              <div className="tg-wrap">
                <table className="tg">
                  <thead>
                    <tr>
                      <th className="tg-kwiq" rowSpan="2">
                        Specialization
                      </th>
                      <th className="tg-kwiq" rowSpan="2">
                        Course
                        <br />
                        offering department
                      </th>
                      <th className="tg-kwiq" colSpan="2">
                        Degree
                      </th>
                      <th className="tg-kwiq" colSpan="2">
                        Degree
                      </th>
                    </tr>
                    <tr>
                      <th className="tg-kwiq">Eligible Branch</th>
                      <th className="tg-kwiq">Hons. with specialization</th>
                      <th className="tg-kwiq">Eligible Branches</th>
                      <th className="tg-kwiq">Minor Specialization</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="tg-096r">Smart Cities</td>
                      <td className="tg-096r">Civil Engineering</td>
                      <td className="tg-096r">Civil Engineering</td>
                      <td className="tg-096r">
                        Bachelor of Technology (Hons.)
                        <br />
                        Civil Engineering with Specialization in
                        <br />
                        Smart Cities
                      </td>
                      <td className="tg-096r">
                        Mechanical Engg.
                        <br />
                        Electrical Engg.
                        <br />E & C Engg.
                        <br />
                        Information Tech.
                        <br />
                        Computer Engg.
                        <br />
                        Computer Science & Engg.
                      </td>
                      <td className="tg-096r">
                        Bachelor of Technology
                        <br />
                        <strong>
                          <i>Branch Name</i>
                        </strong>{" "}
                        with Minor Specialization in Smart Cities
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MOUSection />

      <TestimonialSlider />
      <MessageSection />
    </div>
  );
}
