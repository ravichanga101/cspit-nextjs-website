"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { cn } from "@/lib/utils";

export default function HomeSlider() {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);

  const slides = [
    "/images1/Slider/imageslider6.webp",
    "/images1/Slider/ICACS-2025.webp",
    "/images1/Slider/tedx-1.webp",
    "/images1/Slider/imageslider2.webp",
    "/images1/Slider/slider_2.webp",
    "/images1/Slider/tedx-2.webp",
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

  return (
    <section id="banner" className="section-1">
      <div className="relative w-full h-[90vh]">
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
              <CarouselItem key={slide} className="pl-0 relative w-full h-full">
                <div className="relative w-full h-full">
                  <Image
                    src={slide}
                    alt={`Slide ${index + 1}`}
                    fill
                    priority={index === 0}
                    className="object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
            {slides.map((slide, idx) => (
              <button
                key={`dot-${slide}`}
                className={cn(
                  "w-3 h-3 rounded-full transition-colors",
                  current === idx ? "bg-white" : "bg-white/50"
                )}
                onClick={() => api?.scrollTo(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 border-none" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 border-none" />
        </Carousel>
      </div>
    </section>
  );
}
