import Image from "next/image";
import { motion } from "framer-motion";

export default function PlacementSection() {
  return (
    <section
      className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
      id="placement"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-3"
          >
            Placement Excellence
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Our graduates are consistently sought after by leading industry
            players
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 w-24 mx-auto bg-blue-600 rounded-full mt-4"
          ></motion.div>
        </div>

        {/* Placement Statistics - more compact design */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden bg-white rounded-xl shadow px-5 py-6 border border-gray-100"
            >
              {/* Background decoration - smaller */}
              <div className="absolute top-0 right-0 -mt-8 -mr-8 w-24 h-24 bg-blue-50 rounded-full transform rotate-45 group-hover:bg-blue-100 transition-colors duration-300"></div>

              <div className="relative z-10">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 mb-3 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <svg
                      className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text mb-1">
                    8.5 LPA
                  </div>
                  <p className="text-gray-600 text-sm font-medium">
                    Average Package
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative overflow-hidden bg-white rounded-xl shadow px-5 py-6 border border-gray-100"
            >
              {/* Background decoration - smaller */}
              <div className="absolute top-0 right-0 -mt-8 -mr-8 w-24 h-24 bg-indigo-50 rounded-full transform rotate-45 group-hover:bg-indigo-100 transition-colors duration-300"></div>

              <div className="relative z-10">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 mb-3 rounded-full bg-indigo-100 flex items-center justify-center group-hover:bg-indigo-600 transition-colors duration-300">
                    <svg
                      className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-800 text-transparent bg-clip-text mb-1">
                    24 LPA
                  </div>
                  <p className="text-gray-600 text-sm font-medium">
                    Highest Package
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative overflow-hidden bg-white rounded-xl shadow px-5 py-6 border border-gray-100"
            >
              {/* Background decoration - smaller */}
              <div className="absolute top-0 right-0 -mt-8 -mr-8 w-24 h-24 bg-purple-50 rounded-full transform rotate-45 group-hover:bg-purple-100 transition-colors duration-300"></div>

              <div className="relative z-10">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 mb-3 rounded-full bg-purple-100 flex items-center justify-center group-hover:bg-purple-600 transition-colors duration-300">
                    <svg
                      className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 text-transparent bg-clip-text mb-1">
                    120+
                  </div>
                  <p className="text-gray-600 text-sm font-medium">
                    Companies Visited
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Recruiters Section */}
        <div className="mb-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-3">
              Our Prominent Recruiters
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Leading companies that trust our talent and consistently recruit
              our graduates
            </p>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                staggerChildren: 0.1,
              }}
              className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 py-8 px-4"
            >
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
                <motion.div
                  key={company}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-center justify-center hover:opacity-80 transition-opacity duration-300"
                >
                  <div className="relative h-14 w-full">
                    <Image
                      src={`/images1/recruiters/${company}${
                        company.endsWith(".jpg") ? "" : ".png"
                      }`}
                      alt={`${company} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-16"
        >
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            View Placement Report
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
