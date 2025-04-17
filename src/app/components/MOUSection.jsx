"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const mouData = [
  {
    name: "Microsoft Corporation",
    logo: "/images1/MOU/microsoft.png",
  },
  {
    name: "eInfochips",
    logo: "/images1/MOU/1einfochips.png",
  },
  {
    name: "Cipriani Harrison Valves",
    logo: "/images1/MOU/Cipriani Harrison Valves.png",
  },
  {
    name: "Edunet Foundation",
    logo: "/images1/MOU/Edunet-Foundation-logo.png",
  },
  {
    name: "Oracle Academy",
    logo: "/images1/industry courses/oracle.webp",
  },
  {
    name: "Red Hat Academy",
    logo: "/images1/industry courses/redhat.webp",
  },
  {
    name: "CompTIA",
    logo: "/images1/industry courses/comptia_partner.webp",
  },
  {
    name: "EC-Council",
    logo: "/images1/industry courses/ec-council.webp",
  },
];

export default function MOUSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-blue-600 py-16 md:py-24">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full mix-blend-overlay blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full mix-blend-overlay blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Our Strategic Partners
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 w-24 mx-auto bg-white/30 rounded-full"
          ></motion.div>
        </div>

        {/* Partners Logo Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6"
        >
          {mouData.map((partner) => (
            <motion.div
              key={partner.name}
              variants={itemVariants}
              className="group bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative w-full h-24">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
