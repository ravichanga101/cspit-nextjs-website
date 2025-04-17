"use client";
import { FaGraduationCap } from "react-icons/fa";
import BTechPrograms from "./BTechPrograms";
import HonorsPrograms from "./HonorsPrograms";

export default function ProgramsSection() {
  return (
    <section className="relative bg-gradient-to-b from-blue-600 to-blue-800 py-20 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* B.Tech Programs */}
        <BTechPrograms />

        {/* Divider */}
        <div className="relative my-16">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-blue-700 px-4">
              <FaGraduationCap className="w-8 h-8 text-white/30" />
            </div>
          </div>
        </div>

        {/* Honors Programs */}
        <HonorsPrograms />
      </div>
    </section>
  );
}
