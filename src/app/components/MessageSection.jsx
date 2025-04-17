"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const messages = [
  {
    role: "Dean",
    name: "Dr. Trushit Upadhyaya",
    image: "/CSPIT_Faculty/Electronics/TRUSHIT.webp",
    message: `At CSPIT, we are committed to fostering innovation and academic excellence. Our vision is to create future-ready engineers who can tackle global challenges with creativity and confidence. Through our state-of-the-art facilities, industry collaborations, and dedicated faculty, we ensure that our students receive world-class education and practical exposure.

We believe in nurturing not just technical skills, but also leadership qualities, ethical values, and entrepreneurial spirit. Our curriculum is designed to meet industry demands while encouraging research and innovation. Join us in this journey of transforming education and shaping tomorrow's leaders.`,
    highlights: [
      { label: "Research Publications", value: "250+" },
      { label: "Industry Partners", value: "50+" },
      { label: "Years of Excellence", value: "20+" },
    ],
  },
  {
    role: "Principal",
    name: "Dr. Rajesh Patel",
    image: "/CSPIT_Faculty/Electronics/RAJESH.webp",
    message: `Welcome to CSPIT, where we blend tradition with technology to create an innovative learning environment. Our institution stands at the forefront of technical education, committed to producing industry-ready professionals who can lead technological advancement.

Our focus on practical learning, research opportunities, and industry collaboration creates an ecosystem that nurtures creativity and technical excellence. We take pride in our state-of-the-art infrastructure, experienced faculty, and strong industry connections that help our students excel in their chosen fields.`,
    highlights: [
      { label: "Placement Rate", value: "95%" },
      { label: "Faculty Members", value: "100+" },
      { label: "Research Projects", value: "75+" },
    ],
  },
];

export default function MessageSection() {
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 py-16 md:py-24 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Message from Leadership
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 w-24 mx-auto bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
          ></motion.div>
        </div>

        {/* Messages Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {messages.map((item, index) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative bg-white rounded-2xl shadow-xl overflow-hidden group"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="p-8">
                {/* Header with Image */}
                <div className="flex items-center gap-6 mb-6">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-blue-600/20">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
                      {item.name}
                    </h3>
                    <p className="text-base md:text-lg text-blue-600 font-semibold">
                      {item.role}
                    </p>
                  </div>
                </div>

                {/* Message Content */}
                <div className="space-y-6">
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    {item.message}
                  </p>

                  {/* Highlights */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
                    {item.highlights.map((highlight) => (
                      <div
                        key={highlight.label}
                        className="text-center group cursor-pointer"
                      >
                        <p className="text-xl md:text-2xl font-bold text-blue-600 mb-1 group-hover:scale-110 transition-transform">
                          {highlight.value}
                        </p>
                        <p className="text-sm text-gray-500">
                          {highlight.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
