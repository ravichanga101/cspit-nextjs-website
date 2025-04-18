export default function Syllabus() {
  const departments = [
    {
      name: "Computer Science & Engineering",
      programs: [
        { name: "B.Tech", link: "/files/syllabus/cse/btech" },
        { name: "M.Tech", link: "/files/syllabus/cse/mtech" },
      ],
    },
    {
      name: "Information Technology",
      programs: [
        { name: "B.Tech", link: "/files/syllabus/it/btech" },
        { name: "M.Tech", link: "/files/syllabus/it/mtech" },
      ],
    },
    {
      name: "Civil Engineering",
      programs: [
        { name: "B.Tech", link: "/files/syllabus/civil/btech" },
        { name: "M.Tech", link: "/files/syllabus/civil/mtech" },
      ],
    },
    {
      name: "Mechanical Engineering",
      programs: [
        { name: "B.Tech", link: "/files/syllabus/mechanical/btech" },
        { name: "M.Tech", link: "/files/syllabus/mechanical/mtech" },
      ],
    },
    {
      name: "Electrical Engineering",
      programs: [
        { name: "B.Tech", link: "/files/syllabus/electrical/btech" },
        { name: "M.Tech", link: "/files/syllabus/electrical/mtech" },
      ],
    },
    {
      name: "Electronics & Communication",
      programs: [
        { name: "B.Tech", link: "/files/syllabus/electronics/btech" },
        { name: "M.Tech", link: "/files/syllabus/electronics/mtech" },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Academic Syllabus
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {departments.map((dept, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-4">{dept.name}</h2>
            <div className="space-y-2">
              {dept.programs.map((program, pIndex) => (
                <a
                  key={pIndex}
                  href={program.link}
                  className="block text-blue-600 hover:text-blue-800"
                >
                  {program.name}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <p className="text-gray-600">
          Note: For the latest syllabus updates and revisions, please check
          regularly or contact your department office.
        </p>
      </div>
    </div>
  );
}
