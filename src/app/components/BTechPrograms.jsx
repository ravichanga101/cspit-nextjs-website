"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaUsers, FaClock, FaRupeeSign, FaAward } from "react-icons/fa";

const programs = [
  {
    title: "Computer Engineering",
    image: "/btech/computer.jpg",
    intake: 240,
    duration: "4 Years",
    fees: "₹1,31,000/year",
    accreditation: "UGC Approved",
    brochureLink: "#",
  },
  {
    title: "Information Technology",
    image: "/btech/it.jpg",
    intake: 120,
    duration: "4 Years",
    fees: "₹1,31,000/year",
    accreditation: "UGC Approved",
    brochureLink: "#",
  },
  {
    title: "Mechanical Engineering",
    image: "/btech/mechanical.jpg",
    intake: 120,
    duration: "4 Years",
    fees: "₹1,31,000/year",
    accreditation: "UGC Approved",
    brochureLink: "#",
  },
  {
    title: "Civil Engineering",
    image: "/btech/civil.jpg",
    intake: 60,
    duration: "4 Years",
    fees: "₹1,31,000/year",
    accreditation: "UGC Approved",
    brochureLink: "#",
  },
  {
    title: "Electronics & Communication",
    image: "/btech/ec.jpg",
    intake: 120,
    duration: "4 Years",
    fees: "₹1,31,000/year",
    accreditation: "UGC Approved",
    brochureLink: "#",
  },
  {
    title: "Electrical Engineering",
    image: "/btech/electrical.jpg",
    intake: 60,
    duration: "4 Years",
    fees: "₹1,31,000/year",
    accreditation: "UGC Approved",
    brochureLink: "#",
  },
  {
    title: "Chemical Engineering",
    image: "/btech/chemical.jpg",
    intake: 60,
    duration: "4 Years",
    fees: "₹1,31,000/year",
    accreditation: "UGC Approved",
    brochureLink: "#",
  },
  {
    title: "Automobile Engineering",
    image: "/btech/automobile.jpg",
    intake: 60,
    duration: "4 Years",
    fees: "₹1,31,000/year",
    accreditation: "UGC Approved",
    brochureLink: "#",
  },
];

export default function BTechPrograms() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-16 mb-24"
    >
      <div className="text-center mb-16">
        <h3 className="text-4xl font-bold text-white mb-4 tracking-tight">
          B.Tech Programs
        </h3>
        <p className="text-lg text-blue-100/90 max-w-2xl mx-auto font-medium">
          Launch your engineering career with our industry-aligned B.Tech
          programs
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {programs.map((program, index) => (
          <motion.div
            key={program.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-white/[0.02] backdrop-blur-sm rounded-xl overflow-hidden border border-white/[0.05] hover:border-white/[0.1] hover:bg-white/[0.05] transition-all duration-300"
          >
            <div className="relative h-44 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 mix-blend-multiply z-10"></div>
              <Image
                src={program.image}
                alt={program.title}
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/50 to-transparent z-20"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 z-30">
                <h4 className="text-lg font-bold text-white mb-1 tracking-tight">
                  {program.title}
                </h4>
                <div className="flex items-center gap-2">
                  <FaAward className="text-blue-400 w-4 h-4" />
                  <span className="text-blue-200 text-sm font-medium">
                    {program.accreditation}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-4">
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-white/[0.02] rounded-lg p-3 flex flex-col items-center justify-center">
                  <FaUsers className="text-blue-400 w-5 h-5 mb-1.5" />
                  <span className="text-blue-100 text-sm font-medium">
                    Intake
                  </span>
                  <span className="text-white font-bold">{program.intake}</span>
                </div>
                <div className="bg-white/[0.02] rounded-lg p-3 flex flex-col items-center justify-center">
                  <FaClock className="text-blue-400 w-5 h-5 mb-1.5" />
                  <span className="text-blue-100 text-sm font-medium">
                    Duration
                  </span>
                  <span className="text-white font-bold">
                    {program.duration}
                  </span>
                </div>
              </div>

              <div className="bg-white/[0.02] rounded-lg p-3 mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FaRupeeSign className="text-blue-400 w-5 h-5" />
                  <span className="text-blue-100 text-sm font-medium">
                    Annual Fees
                  </span>
                </div>
                <span className="text-white font-bold">{program.fees}</span>
              </div>

              <div className="flex items-center justify-center">
                <a
                  href={program.brochureLink}
                  className="w-full py-2.5 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold rounded-lg hover:from-blue-500 hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-950/50"
                >
                  Download Brochure
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
