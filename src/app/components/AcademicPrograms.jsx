"use client";

export default function AcademicPrograms() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-50 rounded-full mix-blend-multiply opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-50 rounded-full mix-blend-multiply opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-100 rounded-full mix-blend-multiply opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Academic Programs
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Shaping Future Leaders in Technology
          </p>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
        </div>

        <div id="under-graduate-programs" className="mb-16">
          <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold mb-6 relative inline-block">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                  Undergraduate Programs
                </span>
                <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto mt-6 text-lg">
                CSPIT offers a range of undergraduate engineering programs
                designed to create industry-ready professionals
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  name: "Computer Science Engineering",
                  icon: "laptop-code",
                  intake: 120,
                  fees: "1,31,000",
                  link: "/departments/computer-science",
                },
                {
                  name: "Information Technology",
                  icon: "database",
                  intake: 120,
                  fees: "1,31,000",
                  link: "/departments/information-technology",
                },
                {
                  name: "AI & ML Engineering",
                  icon: "brain",
                  intake: 60,
                  fees: "1,31,000",
                  link: "/departments/aiml",
                },
                {
                  name: "Computer Engineering",
                  icon: "microchip",
                  intake: 60,
                  fees: "1,31,000",
                  link: "/departments/computer-engineering",
                },
                {
                  name: "Electronics & Communication",
                  icon: "microchip",
                  intake: 60,
                  fees: "1,31,000",
                  link: "/departments/electronics",
                },
                {
                  name: "Electrical Engineering",
                  icon: "bolt",
                  intake: 60,
                  fees: "1,31,000",
                  link: "/departments/electrical",
                },
                {
                  name: "Mechanical Engineering",
                  icon: "cogs",
                  intake: 60,
                  fees: "1,31,000",
                  link: "/departments/mechanical",
                },
                {
                  name: "Civil Engineering",
                  icon: "building",
                  intake: 60,
                  fees: "1,31,000",
                  link: "/departments/civil",
                },
              ].map((program) => (
                <a
                  key={program.name}
                  href={program.link}
                  className="group flex items-center p-5 hover:bg-blue-50/50 rounded-md transition-colors duration-200 border border-transparent hover:border-blue-200 relative"
                >
                  <div className="w-10 h-10 flex-shrink-0 text-blue-600 rounded flex items-center justify-center">
                    <i className={`fas fa-${program.icon} text-lg`}></i>
                  </div>
                  <div className="ml-3 flex-grow">
                    <h4 className="text-base font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {program.name}
                    </h4>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <span>
                        <i className="fas fa-user-graduate text-xs mr-1"></i>{" "}
                        {program.intake}
                      </span>
                      <span className="mx-2">•</span>
                      <span>
                        <i className="fas fa-rupee-sign text-xs mr-1"></i>{" "}
                        {program.fees}/yr
                      </span>
                    </div>
                  </div>
                  <div className="absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-blue-600">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div id="post-graduate-programs" className="mb-16">
          <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold mb-6 relative inline-block">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                  Postgraduate Programs
                </span>
                <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto mt-6 text-lg">
                Advanced studies in specialized engineering fields for career
                advancement and research excellence
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  name: "M.Tech in Computer Engineering",
                  specialization: "Advanced Computing",
                  fees: "1,76,000",
                  link: "/departments/computer-science#mtech",
                  icon: "laptop-code",
                },
                {
                  name: "M.Tech in EC Engineering",
                  specialization: "Communication Systems",
                  fees: "1,76,000",
                  link: "/departments/electronics#mtech",
                  icon: "microchip",
                },
                {
                  name: "M.Tech in Electrical Engineering",
                  specialization: "Power Electronics & Electrical Drives",
                  fees: "1,76,000",
                  link: "/departments/electrical#mtech",
                  icon: "bolt",
                },
              ].map((program) => (
                <a
                  key={program.name}
                  href={program.link}
                  className="group flex items-center p-5 hover:bg-blue-50/50 rounded-md transition-colors duration-200 border border-transparent hover:border-blue-200 relative"
                >
                  <div className="w-10 h-10 flex-shrink-0 text-blue-600 rounded flex items-center justify-center">
                    <i className={`fas fa-${program.icon} text-lg`}></i>
                  </div>
                  <div className="ml-3 flex-grow">
                    <h4 className="text-base font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {program.name}
                    </h4>
                    <div className="text-sm text-gray-500 mt-1">
                      {program.specialization}
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <span>
                        <i className="fas fa-rupee-sign text-xs mr-1"></i>{" "}
                        {program.fees}/yr
                      </span>
                    </div>
                  </div>
                  <div className="absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-blue-600">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="/academics/programs"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
          >
            View All Programs Details
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
        </div>
      </div>
    </section>
  );
}
