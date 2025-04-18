"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Main menu items with submenu for ACADEMICS
const MAIN_MENU_LINKS = [
  { label: "ABOUT US", href: "#about-us" },
  {
    label: "ACADEMICS",
    href: "#academics",
    subMenu: [
      { label: "UNDERGRADUATE PROGRAMS (B. TECH)", href: "#undergraduate" },
      { label: "POSTGRADUATE PROGRAMS (M. TECH)", href: "#postgraduate" },
      { label: "PH.D.", href: "#phd" },
    ],
  },
  { label: "CENTRES", href: "#centres" },
  { label: "COMMITTEES", href: "#committees" },
  { label: "RESEARCH", href: "/research" },
  { label: "STUDENT CORNER", href: "#student-corner" },
];

// Secondary menu items (centers/cells)
const SECONDARY_MENU_LINKS = [
  { label: "RURAL EDUCATION DEVELOPMENT", href: "#rural-education" },
  { label: "WOMEN DEVELOPMENT CELL", href: "#women-development" },
  { label: "STARTUP AND INNOVATION CENTRE", href: "#startup-innovation" },
  { label: "EQUAL OPPORTUNITY CELL", href: "#equal-opportunity" },
  { label: "INDUSTRY INTERACTION CELL", href: "#industry-interaction" },
  { label: "INTERNATIONAL STUDENT CELL", href: "#international-student" },
  { label: "ENERGY CONSERVATION CELL", href: "#energy-conservation" },
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
  const [hoveredItem, setHoveredItem] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);

  // Add scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Initialize on mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuItemHover = (label) => {
    // Clear any existing timeout to prevent unnecessary state changes
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setHoveredItem(label);
  };

  const handleMenuItemLeave = () => {
    // Add a small delay before closing the submenu to allow cursor movement to submenu
    const id = setTimeout(() => {
      setHoveredItem(null);
    }, 100); // 100ms delay
    setTimeoutId(id);
  };

  const handleSubmenuHover = () => {
    // Clear timeout when entering the submenu to keep it open
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
  };

  const handleSubmenuLeave = () => {
    // When leaving submenu, close it after a small delay
    const id = setTimeout(() => {
      setHoveredItem(null);
    }, 100);
    setTimeoutId(id);
  };

  // Clean up any lingering timeouts when component unmounts
  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

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
      <nav className="w-full transition-all duration-300 bg-white py-0 border-b border-gray-200 relative">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="transition-all duration-300 hover:opacity-90"
            >
              <Image
                src="/images1/CSPIT_Logo.png"
                alt="CSPIT Logo"
                width={80}
                height={80}
                className="transition-all duration-300"
              />
            </Link>
          </div>

          {/* Desktop Menu - Updated to not have any active item by default */}
          <div className="hidden md:flex items-center">
            {MAIN_MENU_LINKS.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleMenuItemHover(item.label)}
                onMouseLeave={handleMenuItemLeave}
              >
                <Link
                  href={item.href}
                  target={item.target}
                  className={`px-8 py-6 text-black hover:bg-[#0054a6] hover:text-white font-medium text-base transition-colors border-x border-gray-200 inline-block ${
                    hoveredItem === item.label ? "bg-[#0054a6] text-white" : ""
                  }`}
                >
                  {item.label}
                </Link>

                {/* Dropdown for main menu items - Exactly matching the secondary nav design */}
                {item.subMenu && hoveredItem === item.label && (
                  <>
                    {/* This is a connector div that creates a bridge between menu item and submenu */}
                    <div className="absolute h-2 w-full bg-[#0054a6] bottom-0 left-0" />

                    {/* Full-width submenu with blue background */}
                    <div
                      className="absolute left-0 w-screen bg-[#003b75] text-white z-[100]"
                      style={{
                        top: "100%",
                        left: "50%",
                        right: "auto",
                        transform: "translateX(-50%)",
                      }}
                      onMouseEnter={handleSubmenuHover}
                      onMouseLeave={handleSubmenuLeave}
                    >
                      <div className="container mx-auto">
                        <div className="flex flex-wrap w-full bg-[#003b75]">
                          {item.subMenu.map((subItem) => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              className="px-8 py-5 text-sm hover:bg-[#00305e] transition-colors font-medium border-r border-[#004a8e] flex-1 text-left bg-[#003b75]"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
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
          <div className="w-full bg-white shadow-2xl z-50 md:hidden">
            <div className="p-4 space-y-4 max-h-[80vh] overflow-y-auto">
              {/* Top bar links for mobile */}
              <div className="border-b border-gray-200 pb-4 mb-4">
                {TOP_BAR_LINKS.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    target={item.target}
                    className="block text-gray-700 hover:text-[#0054a6] hover:translate-x-1 transition-all duration-200 text-base font-medium py-2"
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Main menu links for mobile */}
              {MAIN_MENU_LINKS.map((item) => (
                <div key={item.label}>
                  {item.subMenu ? (
                    <>
                      <button
                        onClick={() => toggleSubmenu(item.label)}
                        className="flex justify-between items-center w-full text-left text-gray-700 hover:text-[#0054a6] hover:translate-x-1 transition-all duration-200 text-base font-medium"
                      >
                        {item.label}
                        <svg
                          className={`w-4 h-4 transition-transform ${
                            activeSubmenu === item.label
                              ? "transform rotate-180"
                              : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </button>
                      {activeSubmenu === item.label && (
                        <div className="pl-4 mt-2 border-l border-gray-200 space-y-2">
                          {item.subMenu.map((subItem) => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              className="block text-gray-700 hover:text-[#0054a6] hover:translate-x-1 transition-all duration-200 text-sm py-2"
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
                      target={item.target}
                      className="block text-gray-700 hover:text-[#0054a6] hover:translate-x-1 transition-all duration-200 text-base font-medium py-2"
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* Secondary menu links (centers) for mobile */}
              <div className="border-t border-gray-200 pt-4 mt-4">
                <h3 className="font-semibold text-[#0054a6] mb-2">CENTRES</h3>
                {SECONDARY_MENU_LINKS.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    target={item.target}
                    className="block text-gray-700 hover:text-[#0054a6] hover:translate-x-1 transition-all duration-200 text-base font-medium py-2"
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
