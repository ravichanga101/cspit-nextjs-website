import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function initializeAccordions() {
  if (typeof window !== "undefined") {
    const accordions = document.querySelectorAll(".accordion-header");
    accordions.forEach((header) => {
      header.addEventListener("click", () => {
        const accordion = header.parentElement;
        accordion.classList.toggle("active");
      });
    });
  }
}
