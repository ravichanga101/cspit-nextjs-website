"use client";

import Image from "next/image";

const mouData = [
  {
    name: "Microsoft Corporation",
    logo: "/images1/MOU/microsoft.png",
    type: "Technology Partner",
  },
  {
    name: "eInfochips",
    logo: "/images1/MOU/1einfochips.png",
    type: "Industry Partner",
  },
  {
    name: "Cipriani Harrison Valves",
    logo: "/images1/MOU/Cipriani Harrison Valves.png",
    type: "Industry Partner",
  },
  {
    name: "Edunet Foundation",
    logo: "/images1/MOU/Edunet-Foundation-logo.png",
    type: "Education Partner",
  },
  {
    name: "Oracle Academy",
    logo: "/images1/industry courses/oracle.webp",
    type: "Technology Partner",
  },
  {
    name: "Red Hat Academy",
    logo: "/images1/industry courses/redhat.webp",
    type: "Technology Partner",
  },
  {
    name: "CompTIA",
    logo: "/images1/industry courses/comptia_partner.webp",
    type: "Certification Partner",
  },
  {
    name: "EC-Council",
    logo: "/images1/industry courses/ec-council.webp",
    type: "Certification Partner",
  },
];

export default function MOUSection() {
  return (
    <section className="bg-gradient-to-b from-[#031b4e] to-blue-950 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white relative inline-block pb-6">
            Our Strategic Partners
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#ffcc00]"></div>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {mouData.map((mou) => (
            <div
              key={mou.name}
              className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="aspect-video relative bg-white rounded-lg overflow-hidden p-4">
                <Image
                  src={mou.logo}
                  alt={mou.name}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-[#ffcc00] mb-2">
                  {mou.name}
                </h3>
                <span className="text-sm text-white/60 px-3 py-1 rounded-full bg-white/10">
                  {mou.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
