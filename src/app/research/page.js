import Image from "next/image";
import Link from "next/link";

const labs = [
  {
    title: "Artificial Intelligence & Machine Learning Lab",
    desc: "GPU clusters and specialized software for deep learning, computer vision, and data analytics research.",
    link: "#labs",
  },
  {
    title: "Internet of Things Lab",
    desc: "Embedded systems, sensor networks, and wireless communication modules for smart environment prototyping.",
    link: "#labs",
  },
  {
    title: "VLSI & Embedded Systems Lab",
    desc: "FPGA boards, PCB design stations, and EDA tools for custom chip development.",
    link: "#labs",
  },
  {
    title: "High-Performance Computing Cluster",
    desc: "500-core cluster for parallel processing, simulation, and large-scale computation.",
    link: "#labs",
  },
  {
    title: "Scanning Electron Microscope (SEM)",
    desc: "Enables high-resolution imaging and analysis of material surfaces.",
    link: "#labs",
  },
  {
    title: "Spectrophotometer",
    desc: "UV-Vis and IR spectroscopy for material characterization and chemical analysis.",
    link: "#labs",
  },
];

const projects = [
  {
    title: "Smart Agriculture IoT",
    image: "https://via.placeholder.com/400x300",
    description: "A system that uses sensors and AI to optimize crop yield.",
    link: "#projects",
  },
  {
    title: "Renewable Energy Management",
    image: "https://via.placeholder.com/400x300",
    description:
      "Optimizing solar and wind energy integration using ML algorithms.",
    link: "#projects",
  },
  {
    title: "Healthcare Analytics",
    image: "https://via.placeholder.com/400x300",
    description:
      "Data-driven insights for patient care and hospital management.",
    link: "#projects",
  },
];

export default function ResearchPage() {
  return (
    <main className="container mx-auto p-8 space-y-12">
      <section>
        <h1 className="text-4xl font-bold mb-4">Research</h1>
        <p className="text-lg text-gray-700">
          Our institution is committed to excellence in research across multiple
          disciplines, fostering innovation and interdisciplinary collaborations
          that address real-world challenges.
        </p>
      </section>

      <section id="labs" className="space-y-6">
        <h2 className="text-3xl font-semibold">
          Research Labs &amp; Sophisticated Instruments
        </h2>
        <p className="text-gray-600">
          Equipped with state-of-the-art facilities, our labs and instruments
          support cutting-edge research in science, technology, and engineering.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {labs.map((lab) => (
            <Link key={lab.title} href={lab.link} className="block">
              <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2">{lab.title}</h3>
                <p className="text-gray-600">{lab.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="projects" className="space-y-6">
        <h2 className="text-3xl font-semibold">Research Projects</h2>
        <p className="text-gray-600">
          Explore some of our ongoing and completed research projects.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link key={project.title} href={project.link} className="block">
              <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
