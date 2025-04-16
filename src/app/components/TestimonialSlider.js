"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function TestimonialSlider() {
  const containerRef = useRef(null);
  const intervalRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const slideLeft = () => {
    if (containerRef.current && !isAnimating) {
      setIsAnimating(true);
      const firstCard = containerRef.current.firstElementChild;
      containerRef.current.style.transition = "transform 1s cubic-bezier(0.4, 0, 0.2, 1)";
      containerRef.current.style.transform = `translateX(-${firstCard.offsetWidth + 32}px)`;

      setTimeout(() => {
        containerRef.current.style.transition = "none";
        containerRef.current.style.transform = "translateX(0)";
        containerRef.current.appendChild(firstCard.cloneNode(true));
        firstCard.remove();
        setIsAnimating(false);
      }, 1000);
    }
  };

  const slideRight = () => {
    if (containerRef.current && !isAnimating) {
      setIsAnimating(true);
      const cards = containerRef.current.children;
      const lastCard = cards[cards.length - 1];
      containerRef.current.style.transition = "none";
      containerRef.current.style.transform = `translateX(-${lastCard.offsetWidth + 32}px)`;
      containerRef.current.insertBefore(lastCard.cloneNode(true), cards[0]);
      lastCard.remove();

      requestAnimationFrame(() => {
        containerRef.current.style.transition = "transform 1s cubic-bezier(0.4, 0, 0.2, 1)";
        containerRef.current.style.transform = "translateX(0)";
        setTimeout(() => setIsAnimating(false), 1000);
      });
    }
  };

  useEffect(() => {
    intervalRef.current = setInterval(slideLeft, 6000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleSlide = (direction) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (direction === 'left') {
      slideLeft();
    } else {
      slideRight();
    }
    intervalRef.current = setInterval(slideLeft, 6000);
  };

  return (
    <section className="testimonials-section animate-on-scroll overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <h2 className="relative pb-4 mb-12">
          TESTIMONIALS
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#ffcc00] to-[#0056b3]"></span>
        </h2>
        
        <div className="testimonials-slider">
          <button 
            className="slider-btn left-btn group"
            onClick={() => handleSlide('left')}
            disabled={isAnimating}
            aria-label="Previous testimonial"
          >
            <span className="text-3xl leading-none transition-all duration-300 group-hover:scale-125">‹</span>
          </button>
          
          <div className="testimonials-container" ref={containerRef}>
            <div className="testimonial-card group">
              <div className="testimonial-card-image-wrapper">
                <Image
                  className="testimonial-card-image group-hover:scale-105 transition-transform duration-500"
                  src="/images1/Jayti.jpg"
                  alt="Jayti Shah"
                  width={120}
                  height={120}
                />
              </div>
              <div className="testimonial-card-info">
                <h3 className="testimonial-card-name">Jayti Shah</h3>
                <p className="testimonial-card-designation">Student</p>
                <p className="testimonial-card-paragraph">
                  The Computer Science and Engineering (CSE) department at our
                  college provides an outstanding learning environment! Along with
                  regular classes, the department organizes fun activities like
                  the Tower of Hanoi challenge and treasure hunts, making learning
                  both enjoyable and interesting.
                </p>
              </div>
            </div>

            <div className="testimonial-card group">
              <div className="testimonial-card-image-wrapper">
                <Image
                  className="testimonial-card-image group-hover:scale-105 transition-transform duration-500"
                  src="/images1/AmitPanchal.jpg"
                  alt="Amit Panchal"
                  width={120}
                  height={120}
                />
              </div>
              <div className="testimonial-card-info">
                <h3 className="testimonial-card-name">Amit Panchal</h3>
                <p className="testimonial-card-designation">Parent</p>
                <p className="testimonial-card-paragraph">
                  As a parent of Shruti Panchal (22CS044) in the Computer Science
                  & Engineering department, I want to express my sincere gratitude
                  for the excellent education and support provided by the
                  department.
                </p>
              </div>
            </div>

            <div className="testimonial-card group">
              <div className="testimonial-card-image-wrapper">
                <Image
                  className="testimonial-card-image group-hover:scale-105 transition-transform duration-500"
                  src="/images1/PiyushPatel.jpg"
                  alt="Piyush Patel"
                  width={120}
                  height={120}
                />
              </div>
              <div className="testimonial-card-info">
                <h3 className="testimonial-card-name">Piyush Patel</h3>
                <p className="testimonial-card-designation">Parent</p>
                <p className="testimonial-card-paragraph">
                  I am highly impressed with the CSE Department. The expert
                  sessions organized regularly offer students, including my
                  daughter Pia, valuable exposure to industry insights and new
                  technologies.
                </p>
              </div>
            </div>
          </div>
          
          <button 
            className="slider-btn right-btn group"
            onClick={() => handleSlide('right')}
            disabled={isAnimating}
            aria-label="Next testimonial"
          >
            <span className="text-3xl leading-none transition-all duration-300 group-hover:scale-125">›</span>
          </button>
        </div>
      </div>
    </section>
  );
}
