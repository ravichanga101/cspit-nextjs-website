"use client";

import Image from "next/image";
import { useState } from "react";

const projectsData = [
  {
    id: "project1",
    title: "AttendX: AI-Based Attendance System",
    description:
      "An automated attendance system using facial recognition and AI",
    image: "/images1/Projects/Attendex-3.webp",
    category: "Artificial Intelligence",
  },
  {
    id: "project2",
    title: "Gaganmitra Drone",
    description: "Advanced surveillance and monitoring drone system",
    image: "/images1/Projects/Ganagnmitra_Drone_1.webp",
    category: "Robotics",
  },
  {
    id: "project3",
    title: "Hexapod",
    description: "Six-legged robotic system for rough terrain navigation",
    image: "/images1/Projects/Hexapod_1.webp",
    category: "Robotics",
  },
  {
    id: "project4",
    title: "Multi-Purpose Power Attachment",
    description: "Versatile power tool attachment system",
    image: "/images1/Projects/power_attachment-1.webp",
    category: "Mechanical",
  },
  {
    id: "project5",
    title: "RickMate: Share Rides, Save More!",
    description: "Smart ride-sharing application for auto rickshaws",
    image: "/images1/Projects/rickmate-1.webp",
    category: "Software",
  },
  {
    id: "project6",
    title: "Security Surveillance Robot",
    description: "Autonomous security monitoring robot system",
    image: "/images1/Projects/Security_1.webp",
    category: "Robotics",
  },
  {
    id: "project7",
    title: "Warehouse Mobility System",
    description: "Automated warehouse logistics and management system",
    image: "/images1/Projects/Warehouse_2.webp",
    category: "Automation",
  },
  {
    id: "project8",
    title: "AI Enabled Smart Bin",
    description: "Intelligent waste management system",
    image: "/images1/Projects/smart_bin-1.webp",
    category: "IoT",
  },
];

export default function StudentProjects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Student Projects
          </h2>
          <p className="text-gray-600">
            Showcasing innovation and technical excellence through hands-on
            projects
          </p>
          <div className="h-1 w-32 mx-auto mt-4 bg-blue-600/20 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectsData.map((project) => (
            <div key={project.id} className="relative group h-full">
              <div
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105 h-full flex flex-col"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-48 w-full">
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
                <div className="p-4 flex flex-col flex-grow">
                  <h5 className="font-semibold text-gray-800 group-hover:text-blue-600 line-clamp-2 mb-2 text-lg">
                    {project.title}
                  </h5>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-3 flex-grow">
                    {project.description}
                  </p>
                  <span className="inline-block px-2 py-1 bg-blue-50 rounded-full text-xs text-blue-600">
                    {project.category}
                  </span>
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
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-600">{selectedProject.description}</p>
                  <span className="inline-block px-3 py-1 mt-4 bg-blue-50 rounded-full text-sm text-blue-600">
                    {selectedProject.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
