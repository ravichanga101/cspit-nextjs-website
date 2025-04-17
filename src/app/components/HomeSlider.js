"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function HomeSlider() {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sliderRef = useRef(null);

  const slides = [
    {
      image: "/images1/Slider/imageslider6.webp",
      title: "Excellence in Engineering Education",
      subtitle: "Shaping Future Innovators",
    },
    {
      image: "/images1/Slider/ICACS-2025.webp",
      title: "International Conference ICACS 2025",
      subtitle: "Advancing Computing Sciences",
    },
    {
      image: "/images1/Slider/tedx-1.webp",
      title: "TEDx @ CSPIT",
      subtitle: "Ideas Worth Spreading",
    },
    {
      image: "/images1/Slider/imageslider2.webp",
      title: "Research Innovation Hub",
      subtitle: "Cutting-edge Technologies",
    },
    {
      image: "/images1/Slider/slider_2.webp",
      title: "Industry Collaborations",
      subtitle: "Bridging Academia and Industry",
    },
    {
      image: "/images1/Slider/tedx-2.webp",
      title: "Inspiring Student Leaders",
      subtitle: "Cultivating Tomorrow's Pioneers",
    },
  ];

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    // Start auto-play
    const autoplayInterval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => {
      clearInterval(autoplayInterval);
      api.off("select");
    };
  }, [api]);

  // Mouse move handler for parallax effect
  const handleMouseMove = (e) => {
    if (!sliderRef.current || !hovering) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } =
      sliderRef.current.getBoundingClientRect();

    // Calculate mouse position relative to the slider
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;

    setMousePosition({ x, y });
  };

  return (
    <section 
      id="banner" 
      className="hero-section relative w-full z-10"
      ref={sliderRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div className="relative w-full h-screen">
        <Carousel
          setApi={setApi}
          className="w-full h-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-0">
            {slides.map((slide, index) => (
              <CarouselItem
                key={slide.image}
                className="pl-0 relative w-full h-full"
              >
                <div className="relative w-full h-full overflow-hidden">
                  {/* Background image with parallax effect */}
                  <motion.div
                    className="absolute w-[105%] h-[105%] -left-[2.5%] -top-[2.5%]"
                    animate={{
                      x: hovering ? mousePosition.x * -20 : 0,
                      y: hovering ? mousePosition.y * -20 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 100, damping: 30 }}
                  >
                    <Image
                      src={slide.image}
                      alt={`Slide ${index + 1}`}
                      fill
                      priority={index === 0}
                      className="object-cover"
                      sizes="100vw"
                    />
                  </motion.div>

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent z-10"></div>

                  {/* Slide content */}
                  <div className="absolute bottom-[20%] left-0 w-full z-20 px-8 md:px-16">
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: current === index ? 1 : 0,
                        y: current === index ? 0 : 20,
                      }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 max-w-4xl"
                    >
                      {slide.title}
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: current === index ? 1 : 0,
                        y: current === index ? 0 : 20,
                      }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="text-xl md:text-2xl text-white/90 max-w-2xl"
                    >
                      {slide.subtitle}
                    </motion.p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation dots */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
            {slides.map((slide, idx) => (
              <button
                key={`dot-${slide.image}`}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  current === idx
                    ? "bg-white w-8"
                    : "bg-white/50 hover:bg-white/80"
                )}
                onClick={() => api?.scrollTo(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Navigation buttons with improved styling */}
          <CarouselPrevious className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 border-none text-white w-12 h-12 z-20" />
          <CarouselNext className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 border-none text-white w-12 h-12 z-20" />
        </Carousel>
      </div>
    </section>
  );
}
