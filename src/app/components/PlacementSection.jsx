import Image from "next/image";

export default function PlacementSection() {
  return (
    <section
      className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24"
      id="placement"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          Placement Excellence
        </h2>

        {/* Placement Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
          <div className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-2 transition-all duration-300">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                8.5 LPA
              </div>
              <p className="text-gray-600">Average Package</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-2 transition-all duration-300">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                24 LPA
              </div>
              <p className="text-gray-600">Highest Package</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-2 transition-all duration-300">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">120+</div>
              <p className="text-gray-600">Companies Visited</p>
            </div>
          </div>
        </div>

        {/* Recruiters Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Our Prominent Recruiters
          </h3>
          <p className="text-gray-600">
            Leading companies that trust our talent
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
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
            <div
              key={company}
              className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center"
            >
              <div className="relative h-16 w-full">
                <Image
                  src={`/images1/recruiters/${company}${
                    company.endsWith(".jpg") ? "" : ".png"
                  }`}
                  alt={`${company} logo`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
