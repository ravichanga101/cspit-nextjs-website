"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Main menu items with submenu for ACADEMICS
const MAIN_MENU_LINKS = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "#about-us" },
  {
    label: "ACADEMICS",
    href: "#academics",
    subMenu: [
      { label: "UNDERGRADUATE PROGRAMS", href: "#undergraduate" },
      { label: "POSTGRADUATE PROGRAMS", href: "#postgraduate" },
      { label: "PHD PROGRAMS", href: "#phd" },
      { label: "SYLLABUS", href: "#syllabus" },
      { label: "ACADEMIC CALENDAR", href: "#academic-calendar" },
    ],
  },
  {
    label: "ADMISSIONS",
    href: "#admissions",
    subMenu: [
      { label: "ADMISSION PROCEDURE", href: "#admission-procedure" },
      { label: "ELIGIBILITY", href: "#eligibility" },
      { label: "INTAKE & FEES", href: "#fees" },
      { label: "SCHOLARSHIPS", href: "#scholarships" },
    ],
  },
  {
    label: "DEPARTMENTS",
    href: "#departments",
    subMenu: [
      { label: "COMPUTER SCIENCE & ENGINEERING", href: "/departments/cse" },
      { label: "INFORMATION TECHNOLOGY", href: "/departments/it" },
      { label: "CIVIL ENGINEERING", href: "/departments/civil" },
      { label: "MECHANICAL ENGINEERING", href: "/departments/mechanical" },
      { label: "ELECTRICAL ENGINEERING", href: "/departments/electrical" },
      {
        label: "ELECTRONICS & COMMUNICATION",
        href: "/departments/electronics",
      },
    ],
  },
  {
    label: "RESEARCH",
    href: "/research",
    subMenu: [
      { label: "RESEARCH AREAS", href: "#research-areas" },
      { label: "PUBLICATIONS", href: "#publications" },
      { label: "PROJECTS", href: "#projects" },
      { label: "CONSULTANCY", href: "#consultancy" },
    ],
  },
  { label: "PLACEMENTS", href: "#placements" },
  { label: "CONTACT", href: "#contact" },
];

// Top bar links
const TOP_BAR_LINKS = [
  { label: "Placement", href: "#placement" },
  { label: "Gallery", href: "#gallery" },
  { label: "Newsletter", href: "#newsletter" },
  { label: "Scholarships", href: "#scholarships" },
  { label: "Faculty & Staff", href: "/faculty" },
  { label: "Alumni", href: "https://alumni.charusat.ac.in/", target: "_blank" },
  { label: "Contact Us", href: "#contact-us" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSubmenu = (menu) => {
    setActiveSubmenu((prev) => (prev === menu ? null : menu));
  };

  // Toggle mobile menu and reset any open submenu
  const handleMobileToggle = () => {
    setActiveSubmenu(null);
    setIsMobileMenuOpen((prev) => !prev);
  };

  // Close mobile menu
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="relative w-full z-50">
      {/* Top navigation bar - Exact blue color from image */}
      <div className="bg-[#0054a6] text-white hidden md:block">
        <div className="container mx-auto px-4 flex justify-end">
          {TOP_BAR_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target={item.target}
              className="px-3 py-2 text-sm hover:bg-[#00438a] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Main navigation - White background with gray border */}
      <nav className="w-full transition-all duration-300 bg-white py-0 border-b border-gray-100 sticky top-0 shadow-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center py-2">
            <Link
              href="/"
              className="transition-all duration-300 hover:opacity-90"
            >
              <Image
                src="/images1/CSPIT_Logo.png"
                alt="CSPIT Logo"
                width={100}
                height={100}
                className="transition-all duration-300"
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu - with right-aligned items */}
          <div className="hidden md:flex items-center justify-end flex-1">
            {MAIN_MENU_LINKS.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  target={item.target}
                  className="px-4 py-6 text-gray-700 hover:text-[#0054a6] font-medium text-sm transition-colors inline-flex items-center"
                >
                  {item.label}
                  {item.subMenu && (
                    <svg
                      className="w-4 h-4 ml-1 transform group-hover:rotate-180 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>

                {item.subMenu && (
                  <div
                    className="absolute left-0 min-w-[250px] bg-white shadow-lg invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 z-50 border border-gray-100"
                    style={{
                      top: "100%",
                    }}
                  >
                    <div className="py-1">
                      {item.subMenu.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#0054a6] hover:text-white transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-gray-700 focus:outline-none p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={handleMobileToggle}
            >
              <svg
                className="w-6 h-6 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16m-7 6h7"
                  }
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
            <div className="fixed right-0 top-0 h-full w-[300px] bg-white shadow-xl overflow-y-auto">
              {/* Mobile menu header with close button */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <h3 className="font-semibold text-gray-800">Menu</h3>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Mobile menu content */}
              <div className="p-4">
                {/* Main menu links */}
                <nav className="space-y-1">
                  {MAIN_MENU_LINKS.map((item) => (
                    <div key={item.label}>
                      {item.subMenu ? (
                        <>
                          <button
                            onClick={() => toggleSubmenu(item.label)}
                            className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                          >
                            <span className="font-medium text-sm">
                              {item.label}
                            </span>
                            <svg
                              className={`w-5 h-5 transition-transform duration-200 ${
                                activeSubmenu === item.label ? "rotate-180" : ""
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </button>
                          {activeSubmenu === item.label && (
                            <div className="mt-1 pl-4 border-l-2 border-gray-200 ml-4 space-y-1">
                              {item.subMenu.map((subItem) => (
                                <Link
                                  key={subItem.label}
                                  href={subItem.href}
                                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-[#0054a6] hover:text-white rounded-lg transition-colors"
                                  onClick={closeMobileMenu}
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                          onClick={closeMobileMenu}
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>

                {/* Top bar links in mobile */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="grid grid-cols-2 gap-4">
                    {TOP_BAR_LINKS.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        target={item.target}
                        className="text-sm text-gray-600 hover:text-[#0054a6]"
                        onClick={closeMobileMenu}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
