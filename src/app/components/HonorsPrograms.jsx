"use client";
import { motion } from "framer-motion";
import { FaBrain, FaCloud, FaMicrochip as FaIoT, FaIndustry } from "react-icons/fa";

const honorsPrograms = [
  {
    title: "Honors in AI & Machine Learning",
    department: "CSE & IT",
    credits: 20,
    description: "Advanced coursework in artificial intelligence, deep learning, and data science applications.",
    icon: FaBrain,
  },
  {
    title: "Honors in Cloud Computing",
    department: "CSE & IT",
    credits: 20,
    description: "Specialized training in cloud platforms, distributed systems, and DevOps practices.",
    icon: FaCloud,
  },
  {
    title: "Minor in IoT",
    department: "EC",
    credits: 18,
    description: "Comprehensive study of IoT architectures, sensors, and connected systems.",
    icon: FaIoT,
  },
  {
    title: "Minor in Industrial Automation",
    department: "Mechanical",
    credits: 18,
    description: "Focus on industrial robotics, automation systems, and smart manufacturing.",
    icon: FaIndustry,
  },
];

export default function HonorsPrograms() {
  return (
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
          Enhance your B.Tech. degree with specialized knowledge and skills through our Honors and Minor programs
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
  );
} 