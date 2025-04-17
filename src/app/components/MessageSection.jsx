"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const messages = [
  {
    role: "Dean",
    name: "Dr. Vijaykumar Chaudhary",
    image: "/images/VijayChaudhary.webp",
    message: `Welcome to CSPIT, CHARUSAT! As Dean, I'm thrilled to lead our community of scholars, learners, and innovators. Together, let's embrace excellence, diversity, and collaboration. Students, seize every opportunity to grow and make a difference. Faculty, your dedication shapes futures. Staff, your efforts keep our institute thriving. Let's foster an inclusive environment where every voice matters. As we embark on this journey, let's uphold the values of integrity and empathy. I'm excited to witness our collective achievements.`,
  },
  {
    role: "Principal",
    name: "Dr. Trushit Upadhyaya",
    image: "/images/TKU.png",
    message: `Welcome to CSPIT, where we foster excellence and innovation in engineering education. To our students: Embrace opportunities, challenge yourself, and cultivate a passion for lifelong learning. Faculty: Your dedication molds future leaders; continue to inspire and innovate. Staff: Your commitment ensures our success; thank you for your invaluable contributions. Together, let's uphold integrity, excellence, and inclusivity. As Principal, I'm excited about the journey ahead. Let's collaborate, learn, and grow as we shape the future of engineering together.`,
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

                {/* Message Content with Quote Design */}
                <div className="relative">
                  <div className="absolute -left-2 -top-2 text-6xl text-blue-200 font-serif">
                    "
                  </div>
                  <div className="absolute -right-2 -bottom-2 text-6xl text-blue-200 font-serif">
                    "
                  </div>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed px-6 py-4 italic">
                    {item.message}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
