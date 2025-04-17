"use client";

import HomeSlider from "./components/HomeSlider";
import { initializeAccordions } from "@/lib/utils";
import { useEffect } from "react";
import TestimonialSlider from "./components/TestimonialSlider";
import MessageSection from "./components/MessageSection.jsx";
import ResearchThrustAreas from "./components/ResearchThrustAreas";
import StudentClubs from "./components/StudentClubs";
import StudentProjects from "./components/StudentProjects";
import MOUSection from "./components/MOUSection";
import WelcomeSection from "./components/WelcomeSection";
import PlacementSection from "./components/PlacementSection";
import AcademicPrograms from "./components/AcademicPrograms";
import IndustryRecognizedCourses from "./components/IndustryRecognizedCourses";

export default function Home() {
  useEffect(() => {
    initializeAccordions();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <HomeSlider />
      <WelcomeSection />
      {/* <ResearchThrustAreas /> */}
      <AcademicPrograms />
      <IndustryRecognizedCourses />
      <PlacementSection />
      <StudentClubs />
      <StudentProjects />
      {/* <MOUSection /> */}
      <TestimonialSlider />
      <MessageSection />
    </div>
  );
}
