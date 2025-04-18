"use client";
import { useState } from "react";

export default function HonorsPrograms() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h3
          className="mb-6 text-3xl md:text-4xl font-bold"
          style={{ fontFamily: "Playfair" }}
        >
          B. Tech. with Honors and Minor Degree Programs
        </h3>
        <hr className="mb-8" />

        {[
          {
            id: "evs",
            title: "Electric Vehicle Systems",
            specialization: "Electric Vehicle System",
            offeringDept: "Electrical Engineering",
            honorsEligible: "Electrical Engineering",
            honorsTitle:
              "Bachelor of Technology (Hons.) Electrical Engineering with Specialization in Electric Vehicles",
            minorEligible:
              "Mechanical Engg.,Civil Engg.,E & C Engg.,Information Tech.,Computer Engg.,Computer Science & Engg.",
          },
          {
            id: "aiml",
            title: "Artificial Intelligence & Machine Learning",
            specialization: "Artificial Intelligence & Machine Learning",
            offeringDept: "--",
            honorsEligible: "--",
            honorsTitle: "--",
            minorEligible: "Mechanical Engg.,Civil Engg.,Electrical Engg.",
          },
          {
            id: "iot",
            title: "Robotics & Internet of Things",
            specialization: "Robotics & Internet of Things",
            offeringDept: "E&C Engineering",
            honorsEligible: "E&C Engineering",
            honorsTitle:
              "Bachelor of Technology (Hons.) Electronics & Communication Engineering with Specialization in Robotics & Internet of Things",
            minorEligible:
              "Mechanical Engg.,Civil Engg.,Electrical Engg.,Information Tech.,Computer Engg.,Computer Science & Engg.",
          },
          {
            id: "ds",
            title: "Data Science",
            specialization: "Data Science",
            offeringDept: "E&C Engineering",
            honorsEligible: "-",
            honorsTitle: "-",
            minorEligible:
              "E & C Engg.,Mechanical Engg.,Civil Engg.,Electrical Engg.",
          },
          {
            id: "gis",
            title: "GIS and Remote Sensing",
            specialization: "GIS and Remote Sensing",
            offeringDept: "Civil Engineering",
            honorsEligible: "Civil Engineering",
            honorsTitle:
              "Bachelor of Technology (Hons.) Civil Engineering with Specialization in GIS and Remote Sensing",
            minorEligible:
              "Mechanical Engg.,Electrical Engg.,E & C Engg.,Information Tech.,Computer Engg.,Computer Science & Engg.",
          },
          {
            id: "green",
            title: "Green Technology and Sustainability Engineering",
            specialization: "Green Technology and Sustainability Engineering",
            offeringDept: "Civil Engineering",
            honorsEligible: "Civil Engineering",
            honorsTitle:
              "Bachelor of Technology (Hons.) Civil Engineering with Specialization in Green Technology and Sustainability Engineering",
            minorEligible:
              "Mechanical Engg.,Electrical Engg.,E & C Engg.,Information Tech.,Computer Engg.,Computer Science & Engg.",
          },
          {
            id: "3d",
            title: "3D Printing",
            specialization: "3D Printing",
            offeringDept: "Civil Engineering",
            honorsEligible: "Civil Engineering",
            honorsTitle:
              "Bachelor of Technology (Hons.) Civil Engineering with Specialization in 3D Printing",
            minorEligible:
              "Mechanical Engg.,Electrical Engg.,E & C Engg.,Information Tech.,Computer Engg.,Computer Science & Engg.",
          },
          {
            id: "envgeo",
            title: "Environmental Geotechnology",
            specialization: "Environmental Geotechnology",
            offeringDept: "Civil Engineering",
            honorsEligible: "Civil Engineering",
            honorsTitle:
              "Bachelor of Technology (Hons.) Civil Engineering with Specialization in Environmental Geotechnology",
            minorEligible:
              "Mechanical Engg.,Electrical Engg.,E & C Engg.,Information Tech.,Computer Engg.,Computer Science & Engg.",
          },
          {
            id: "smart",
            title: "Smart Cities",
            specialization: "Smart Cities",
            offeringDept: "Civil Engineering",
            honorsEligible: "Civil Engineering",
            honorsTitle:
              "Bachelor of Technology (Hons.) Civil Engineering with Specialization in Smart Cities",
            minorEligible:
              "Mechanical Engg.,Electrical Engg.,E & C Engg.,Information Tech.,Computer Engg.,Computer Science & Engg.",
          },
        ].map((program) => (
          <div key={program.id} className="accordion mb-4">
            <div
              className="accordion-header cursor-pointer bg-gray-100 p-4 flex justify-between items-center rounded-t"
              onClick={() => toggleAccordion(program.id)}
            >
              <span className="font-semibold">{program.title}</span>
              <span>{activeAccordion === program.id ? "-" : "+"}</span>
            </div>
            {activeAccordion === program.id && (
              <div className="accordion-content p-4 border border-gray-200 rounded-b">
                <div className="overflow-x-auto">
                  <table className="w-full table-auto border-collapse">
                    <thead>
                      <tr>
                        <th rowSpan="2" className="border p-2">
                          Specialization
                        </th>
                        <th rowSpan="2" className="border p-2">
                          Course offering department
                        </th>
                        <th colSpan="2" className="border p-2">
                          Degree
                        </th>
                        <th colSpan="2" className="border p-2">
                          Degree
                        </th>
                      </tr>
                      <tr>
                        <th className="border p-2">Eligible Branch</th>
                        <th className="border p-2">
                          Hons. with specialization
                        </th>
                        <th className="border p-2">Eligible Branches</th>
                        <th className="border p-2">Minor Specialization</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-2">{program.specialization}</td>
                        <td className="border p-2">{program.offeringDept}</td>
                        <td className="border p-2">{program.honorsEligible}</td>
                        <td className="border p-2">{program.honorsTitle}</td>
                        <td className="border p-2">
                          {program.minorEligible.split(",").map((branch) => (
                            <span key={`${program.id}-${branch.trim()}`}>
                              {branch}
                              <br />
                            </span>
                          ))}
                        </td>
                        <td className="border p-2">
                          Bachelor of Technology
                          <br />
                          <strong>
                            <i>Branch Name</i>
                          </strong>{" "}
                          with Minor Specialization in {program.specialization}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
