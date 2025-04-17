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
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-3xl font-bold text-gray-900 bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-8 flex items-center">
              <div className="fas fa-graduation-cap text-blue-600 mr-4"></div>
              Undergraduate Programs
            </h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                  name: "Computer Engineering",
                  icon: "microchip",
                  intake: 60,
                  fees: "1,31,000",
                  link: "/departments/computer-engineering",
                },
                {
                  name: "AI & ML Engineering",
                  icon: "brain",
                  intake: 60,
                  fees: "1,31,000",
                  link: "/departments/aiml",
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
                  className="group block p-6 bg-gradient-to-br from-white to-blue-50 rounded-lg hover:shadow-xl transition-all duration-300 border border-blue-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 flex-shrink-0 bg-blue-600 text-white rounded-lg flex items-center justify-center">
                      <i className={`fas fa-${program.icon} text-xl`}></i>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                        {program.name}
                      </h4>
                      <p className="text-gray-600 mb-2">
                        Intake: {program.intake} | AICTE Approved
                      </p>
                      <p className="text-sm text-blue-600 font-medium">
                        Fees: ₹{program.fees}/year
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div id="post-graduate-programs">
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-3xl font-bold text-gray-900 bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-8 flex items-center">
              <div className="fas fa-user-graduate text-blue-600 mr-4"></div>
              Postgraduate Programs
            </h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                  className="group block p-6 bg-gradient-to-br from-white to-indigo-50 rounded-lg hover:shadow-xl transition-all duration-300 border border-indigo-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 flex-shrink-0 bg-indigo-600 text-white rounded-lg flex items-center justify-center">
                      <i className={`fas fa-${program.icon} text-xl`}></i>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600">
                        {program.name}
                      </h4>
                      <p className="text-gray-600 mb-2">
                        {program.specialization}
                      </p>
                      <p className="text-sm text-indigo-600 font-medium">
                        Fees: ₹{program.fees}/year
                      </p>
                    </div>
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
