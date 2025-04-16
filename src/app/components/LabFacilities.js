"use client";
import Image from "next/image";
import { useState } from "react";
import PropTypes from "prop-types";

// Separate component for the department filter buttons
const DepartmentFilter = ({
  departments,
  selectedDepartment,
  onDepartmentChange,
}) => (
  <div className="flex justify-center mb-8">
    <div className="inline-flex gap-3 flex-wrap justify-center">
      {departments.map((dept) => (
        <button
          key={dept}
          onClick={() => onDepartmentChange(dept)}
          className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:-translate-y-1
            ${
              selectedDepartment === dept
                ? "bg-[#0056b3] text-white shadow-lg"
                : "bg-gray-50 text-gray-700 hover:bg-gray-100 hover:shadow-md border border-gray-200"
            }`}
        >
          {dept}
        </button>
      ))}
    </div>
  </div>
);

DepartmentFilter.propTypes = {
  departments: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedDepartment: PropTypes.string.isRequired,
  onDepartmentChange: PropTypes.func.isRequired,
};

// Separate component for instrument card
const InstrumentCard = ({ instrument, onClick }) => (
  <div
    className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-100"
    onClick={onClick}
  >
    <div className="relative w-full h-52">
      <Image
        src={instrument.image}
        alt={instrument.name}
        fill
        className="object-cover"
      />
    </div>
    <div className="p-5">
      <h5 className="text-lg font-semibold text-[#0056b3] mb-3 line-clamp-2 min-h-[3.5rem]">
        {instrument.name}
      </h5>
      <div className="flex items-center">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#0056b3]/10 text-[#0056b3]">
          {instrument.department}
        </span>
      </div>
    </div>
  </div>
);

InstrumentCard.propTypes = {
  instrument: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

// Separate component for the modal
const InstrumentModal = ({ instrument, onClose }) => (
  <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 backdrop-blur-sm">
    <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
      <div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
        <div className="absolute right-4 top-4">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 transition-colors"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="bg-white px-6 pt-8 pb-6">
          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
              <h3 className="text-2xl leading-6 font-bold text-[#0056b3] mb-6">
                {instrument?.name}
              </h3>
              <div className="mt-4">
                <div className="relative w-full h-[28rem] mb-6">
                  <Image
                    src={instrument?.image}
                    alt={instrument?.name}
                    fill
                    className="object-contain rounded-xl"
                  />
                </div>
                <div className="text-center">
                  <h6 className="font-semibold text-lg text-gray-800 mb-2">
                    Department
                  </h6>
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-base font-medium bg-[#0056b3]/10 text-[#0056b3]">
                    {instrument?.department}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

InstrumentModal.propTypes = {
  instrument: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};

// Research Area Card Component
const ResearchArea = ({ area, description, icon }) => (
  <div className="group bg-white rounded-2xl shadow-sm overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl border border-gray-100">
    <div className="p-8">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0056b3]/10 to-[#0056b3]/20 flex items-center justify-center mb-2 transform transition-transform group-hover:rotate-6 group-hover:scale-110">
          <span className="text-4xl filter drop-shadow-sm">{icon}</span>
        </div>
        <h3 className="text-2xl font-bold text-[#0056b3] group-hover:text-[#003d7a] transition-colors">
          {area}
        </h3>
        <div className="w-12 h-1 bg-[#0056b3] rounded-full transition-all duration-300 group-hover:w-24"></div>
        <p className="text-gray-600 text-base leading-relaxed max-w-sm">
          {description}
        </p>
      </div>
    </div>
  </div>
);

ResearchArea.propTypes = {
  area: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

// Main component
export default function LabFacilities() {
  const [showModal, setShowModal] = useState(false);
  const [selectedInstrument, setSelectedInstrument] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  const researchAreas = [
    {
      area: "Advanced Materials & Manufacturing",
      description:
        "Research in innovative materials, advanced manufacturing processes, and smart manufacturing technologies",
      icon: "🔬",
    },
    {
      area: "AI & Machine Learning",
      description:
        "Cutting-edge research in artificial intelligence, deep learning, and intelligent systems",
      icon: "🤖",
    },
    {
      area: "Sustainable Technologies",
      description:
        "Development of eco-friendly solutions and renewable energy technologies",
      icon: "🌱",
    },
    {
      area: "IoT & Embedded Systems",
      description:
        "Research in connected devices, sensor networks, and embedded system design",
      icon: "📡",
    },
    {
      area: "Data Analytics",
      description:
        "Big data processing, analytics, and data-driven decision making",
      icon: "📊",
    },
    {
      area: "Robotics & Automation",
      description:
        "Research in robotics, industrial automation, and control systems",
      icon: "🤖",
    },
  ];

  const handleInstrumentClick = (instrument) => {
    setSelectedInstrument(instrument);
    setShowModal(true);
  };

  const departments = [
    "All",
    ...new Set(instruments.map((i) => i.department)),
  ].sort((a, b) => {
    if (a === "All") return -1;
    if (b === "All") return 1;
    return a.localeCompare(b);
  });

  const filteredInstruments =
    selectedDepartment === "All"
      ? instruments
      : instruments.filter((i) => i.department === selectedDepartment);

  return (
    <>
      <section className="container mx-auto px-4 py-12 max-w-7xl">
        <h1 className="text-4xl font-bold text-center mb-3 text-[#0056b3]">
          Research Labs & Sophisticated Instruments
        </h1>
        <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
          Explore our state-of-the-art facilities and advanced research
          equipment
        </p>

        <DepartmentFilter
          departments={departments}
          selectedDepartment={selectedDepartment}
          onDepartmentChange={setSelectedDepartment}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredInstruments.map((instrument) => (
            <InstrumentCard
              key={instrument.name}
              instrument={instrument}
              onClick={() => handleInstrumentClick(instrument)}
            />
          ))}
        </div>

        {showModal && selectedInstrument && (
          <InstrumentModal
            instrument={selectedInstrument}
            onClose={() => setShowModal(false)}
          />
        )}
      </section>

      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6 text-[#0056b3] leading-tight">
              Research Thrust Areas
            </h2>
            <div className="w-24 h-1 bg-[#0056b3] mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 text-lg leading-relaxed">
              Discover our key research focus areas where we drive innovation
              and technological advancement through cutting-edge research and
              development
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {researchAreas.map((area) => (
              <ResearchArea
                key={area.area}
                area={area.area}
                description={area.description}
                icon={area.icon}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// Keep existing instruments array
const instruments = [
  {
    name: "Electric resistance melting furnace",
    image: "/images1/facilities/Mech/mech1.webp",
    department: "Mechanical",
  },
  {
    name: "Inverted metallurgical microscope",
    image: "/images1/facilities/Mech/mech2.webp",
    department: "Mechanical",
  },
  {
    name: "Thermal Imaging Camera (AICTE funded project under RPS)",
    image: "/images1/facilities/Mech/thermalCamera.webp",
    department: "Mechanical",
  },
  {
    name: "Modular Melting Setup (Smart foundry 2020-DST funded project)",
    image: "/images1/facilities/Mech/Modular.webp",
    department: "Mechanical",
  },
  {
    name: "NI Data Acquisition System Temperature Module",
    image: "/images1/facilities/Mech/NI_Data.webp",
    department: "Mechanical",
  },
  {
    name: "Ultrasonic Melt Stirring Setup",
    image: "/images1/facilities/Mech/UltrasonicMelt.webp",
    department: "Mechanical",
  },
  {
    name: "Centrifugal Casting Machine",
    image: "/images1/facilities/Mech/centrifugal.webp",
    department: "Mechanical",
  },
  {
    name: "DCRF Magnetron Sputtering",
    image: "/images1/facilities/Mech/DCRF.webp",
    department: "Mechanical",
  },
  {
    name: "Automatic Goniometer",
    image: "/images1/facilities/Mech/goniometer.webp",
    department: "Mechanical",
  },
  {
    name: "Ultrasonic Probe Sonicator",
    image: "/images1/facilities/Mech/probe.webp",
    department: "Mechanical",
  },
  {
    name: "Auto CAST",
    image: "/images1/facilities/Mech/CAST.webp",
    department: "Mechanical",
  },
  {
    name: "COMSOL",
    image: "/images1/facilities/Mech/cosmol.webp",
    department: "Mechanical",
  },
  {
    name: "CNC Vertical Machining Center",
    image: "/images1/facilities/Mech/cnc.webp",
    department: "Mechanical",
  },
  {
    name: "Joemars Electrical Discharge Machining setup",
    image: "/images1/facilities/Mech/joemars.webp",
    department: "Mechanical",
  },
  {
    name: "Kistler 9272 Piezoelectric Dynamometer",
    image: "/images1/facilities/Mech/kistler.webp",
    department: "Mechanical",
  },
  {
    name: "Data Logging System from National Instruments equipped with LabVIEW software",
    image: "/images1/facilities/Mech/dataLog.webp",
    department: "Mechanical",
  },
  {
    name: "Universal Testing Machine",
    image: "/images1/facilities/CL/cl1.webp",
    department: "Civil",
  },
  {
    name: "Fatigue Testing Machine",
    image: "/images1/facilities/CL/cl2.webp",
    department: "Civil",
  },
  {
    name: "Torsion Testing Machine",
    image: "/images1/facilities/CL/cl3.webp",
    department: "Civil",
  },
  {
    name: "Gas Chromatograph",
    image: "/images1/facilities/CL/cl4.webp",
    department: "Civil",
  },
  {
    name: "UV Visible Spectrophotometer (CARY 60)",
    image: "/images1/facilities/CL/cl5.webp",
    department: "Civil",
  },
  {
    name: "Bending Stress in Beam - STR 5",
    image: "/images1/facilities/CL/cl6.webp",
    department: "Civil",
  },
  {
    name: "Pin Jointed Frameworks - STR 8",
    image: "/images1/facilities/CL/cl7.webp",
    department: "Civil",
  },
  {
    name: "Continuous and Indeterminate Beams - STR 13",
    image: "/images1/facilities/CL/cl8.webp",
    department: "Civil",
  },
  {
    name: "Plastic Bending of Portals - STR 16",
    image: "/images1/facilities/CL/cl9.webp",
    department: "Civil",
  },
  {
    name: "Redundant Truss - STR 17",
    image: "/images1/facilities/CL/cl10.webp",
    department: "Civil",
  },
  {
    name: "Bending Moments in a Portal Frame - STR 20",
    image: "/images1/facilities/CL/cl11.webp",
    department: "Civil",
  },
  {
    name: "Beam Apparatus - SM 1004",
    image: "/images1/facilities/CL/cl12.webp",
    department: "Civil",
  },
  {
    name: "Servo Shake Table",
    image: "/images1/facilities/CL/cl13.webp",
    department: "Civil",
  },
  {
    name: "Horizontal Shake Table with Cylindrical Cam",
    image: "/images1/facilities/CL/cl14.webp",
    department: "Civil",
  },
  {
    name: "Shake Table Instrumentation",
    image: "/images1/facilities/CL/cl15.webp",
    department: "Civil",
  },
  {
    name: "Total station",
    image: "/images1/facilities/CL/cl16.webp",
    department: "Civil",
  },
  {
    name: "HP-Z workstation",
    image: "/images1/facilities/CL/cl17.webp",
    department: "Civil",
  },
  {
    name: "Compression Testing Machine",
    image: "/images1/facilities/CL/cl18.webp",
    department: "Civil",
  },
  {
    name: "Torsion of Circular Section - STR 6",
    image: "/images1/facilities/CL/cl19.webp",
    department: "Civil",
  },
  {
    name: "Frame Deflections and Reactions - STR 18",
    image: "/images1/facilities/CL/cl20.webp",
    department: "Civil",
  },
  {
    name: "Triaxial Testing System",
    image: "/images1/facilities/CL/cl21.webp",
    department: "Civil",
  },
  {
    name: "Direct Shear Test",
    image: "/images1/facilities/CL/cl22.webp",
    department: "Civil",
  },
  {
    name: "Static Cone Penetrometer",
    image: "/images1/facilities/CL/cl23.webp",
    department: "Civil",
  },
  {
    name: "dSPACE",
    image: "/images1/facilities/EE/dSPACE.webp",
    department: "Electrical",
  },
  {
    name: "Earth Tester",
    image: "/images1/facilities/EE/Earth Tester.webp",
    department: "Electrical",
  },
  {
    name: "Mixed Signal Oscilloscope (MSO)",
    image: "/images1/facilities/EE/MSO.webp",
    department: "Electrical",
  },
  {
    name: "POWER QUALITY ANALYZER",
    image: "/images1/facilities/EE/Power Quality Analyzer.webp",
    department: "Electrical",
  },
  {
    name: "Advanced Programming Lab",
    image: "/images1/facilities/EC/Advance.webp",
    department: "Electronics",
  },
  {
    name: "Product Design Lab",
    image: "/images1/facilities/EC/Product.webp",
    department: "Electronics",
  },
  {
    name: "Tinkering & Innovation Lab",
    image: "/images1/facilities/EC/Tinker.webp",
    department: "Electronics",
  },
  {
    name: "Simulation Lab",
    image: "/images1/facilities/EC/Simulation.webp",
    department: "Electronics",
  },
  {
    name: "VLSI & Embedded Lab I/II",
    image: "/images1/facilities/EC/VLSI.webp",
    department: "Electronics",
  },
  {
    name: "IBM Server X3100 M4",
    image: "/images1/facilities/IT/IT_1.webp",
    department: "IT",
  },
  {
    name: "NVidia GPU TITAN X",
    image: "/images1/facilities/IT/IT_2.webp",
    department: "IT",
  },
  {
    name: "Super Computer PARAM SAVAK",
    image: "/images1/facilities/IT/IT_3.webp",
    department: "IT",
  },
  {
    name: "Supermicro 4U server",
    image: "/images1/facilities/IT/IT_4.webp",
    department: "IT",
  },
  {
    name: "View Sonic Digital Board",
    image: "/images1/facilities/IT/IT_5.webp",
    department: "IT",
  },
  {
    name: "Motorola Solutions Research and Innovation Center (Computer Lab)",
    image: "/images1/facilities/AIML/Motorola.webp",
    department: "AIML",
  },
  {
    name: "AIML Computer LAB",
    image: "/images1/facilities/AIML/IMG20241126104230.webp",
    department: "AIML",
  },
  {
    name: "Interactive Display",
    image: "/images1/facilities/AIML/View.webp",
    department: "AIML",
  },
];
