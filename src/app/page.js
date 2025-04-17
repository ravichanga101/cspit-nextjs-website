"use client";

import HomeSlider from "./components/HomeSlider";
import { initializeAccordions } from "@/lib/utils";
import { useEffect } from "react";
import TestimonialSlider from "./components/TestimonialSlider";
import MessageSection from "./components/MessageSection.jsx";
import StudentClubs from "./components/StudentClubs";
import StudentProjects from "./components/StudentProjects";
import WelcomeSection from "./components/WelcomeSection";
import PlacementSection from "./components/PlacementSection";
import AcademicPrograms from "./components/AcademicPrograms";
import IndustryRecognizedCourses from "./components/IndustryRecognizedCourses";
import EventsGallery from "./components/EventsGallery";

export default function Home() {
  useEffect(() => {
    initializeAccordions();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Slider - now with normal position after navbar */}
      <HomeSlider />
      
      {/* Content sections */}
      <WelcomeSection />
      <AcademicPrograms />
      <IndustryRecognizedCourses />
      <PlacementSection />
      <EventsGallery />
      <StudentClubs />
      <StudentProjects />
      <TestimonialSlider />
      <MessageSection />
    </div>
  );
}
