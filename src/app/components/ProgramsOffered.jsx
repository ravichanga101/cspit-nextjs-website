"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaMicrochip,
  FaNetworkWired,
  FaCogs,
  FaBrain,
  FaCloud,
  FaMicrochip as FaIoT,
  FaIndustry,
} from "react-icons/fa";

const programs = [
  {
    title: "Computer Science & Engineering",
    icon: FaLaptopCode,
    intake: 180,
    description:
      "Focus on software development, AI/ML, data science, and advanced computing technologies.",
    specializations: [
      "AI & Machine Learning",
      "Cloud Computing",
      "Cybersecurity",
      "Full Stack Development",
    ],
  },
  {
    title: "Information Technology",
    icon: FaNetworkWired,
    intake: 120,
    description:
      "Emphasis on network systems, database management, and modern IT infrastructure.",
    specializations: [
      "Cloud & DevOps",
      "Data Analytics",
      "Web Technologies",
      "Information Security",
    ],
  },
  {
    title: "Electronics & Communication",
    icon: FaMicrochip,
    intake: 120,
    description:
      "Focus on electronic systems, communication technologies, and signal processing.",
    specializations: [
      "VLSI Design",
      "Embedded Systems",
      "Communication Systems",
      "IoT Technologies",
    ],
  },
  {
    title: "Mechanical Engineering",
    icon: FaCogs,
    intake: 60,
    description:
      "Study of mechanical systems, thermal engineering, and industrial automation.",
    specializations: [
      "CAD/CAM",
      "Thermal Engineering",
      "Industrial Automation",
      "Manufacturing Systems",
    ],
  },
];

const honorsPrograms = [
  {
    title: "Honors in AI & Machine Learning",
    department: "CSE & IT",
    credits: 20,
    description:
      "Advanced coursework in artificial intelligence, deep learning, and data science applications.",
    icon: FaBrain,
  },
  {
    title: "Honors in Cloud Computing",
    department: "CSE & IT",
    credits: 20,
    description:
      "Specialized training in cloud platforms, distributed systems, and DevOps practices.",
    icon: FaCloud,
  },
  {
    title: "Minor in IoT",
    department: "EC",
    credits: 18,
    description:
      "Comprehensive study of IoT architectures, sensors, and connected systems.",
    icon: FaIoT,
  },
  {
    title: "Minor in Industrial Automation",
    department: "Mechanical",
    credits: 18,
    description:
      "Focus on industrial robotics, automation systems, and smart manufacturing.",
    icon: FaIndustry,
  },
];

export default function ProgramsOffered() {
  return (
    <section className="relative bg-gradient-to-b from-blue-600 to-blue-800 py-20 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Programs Section */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            B.Tech. Programs
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 w-24 mx-auto bg-white/30 rounded-full"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-24">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {program.title}
                    </h3>
                    <p className="text-white/80 text-sm mb-4">
                      {program.description}
                    </p>
                    <div className="flex items-center gap-2 mb-4">
                      <FaGraduationCap className="text-white/60" />
                      <span className="text-white/80 text-sm">
                        Intake: {program.intake} seats
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {program.specializations.map((spec) => (
                        <div
                          key={spec}
                          className="bg-white/10 px-3 py-1 rounded-full text-sm text-white/90"
                        >
                          {spec}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Divider */}
        <div className="relative my-16">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-blue-700 px-4">
              <FaGraduationCap className="w-8 h-8 text-white/30" />
            </div>
          </div>
        </div>

        {/* Honors & Minor Programs Section */}
        <div>
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              B.Tech. with Honors & Minor Programs
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-1 w-24 mx-auto bg-white/30 rounded-full"
            ></motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-white/80 max-w-2xl mx-auto"
            >
              Enhance your B.Tech. degree with specialized knowledge and skills
              through our Honors and Minor programs
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {honorsPrograms.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg p-2 mb-4">
                    <program.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {program.title}
                  </h3>
                  <p className="text-white/70 text-sm mb-4">
                    {program.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-white/60">
                    <span>{program.department}</span>
                    <span>{program.credits} Credits</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
