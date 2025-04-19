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
      { label: "UNDERGRADUATE PROGRAMS", href: "#undergraduate" },
      { label: "POSTGRADUATE PROGRAMS", href: "#postgraduate" },
      { label: "PHD PROGRAMS", href: "#phd" },
      { label: "SYLLABUS", href: "/academics/syllabus" },
      { label: "QUESTION PAPERS", href: "/academics/question-papers" },
      { label: "ACADEMIC CALENDAR", href: "#academic-calendar" },
    ],
  },
  {
    label: "CENTRES",
    href: "#centres",
    subMenu: [
      {
        label: "RURAL EDUCATION DEVELOPMENT",
        href: "https://www.charusat.ac.in/CREDP",
        target: "_blank",
      },
      {
        label: "WOMEN DEVELOPMENT CELL",
        href: "https://www.charusat.ac.in/wdc",
        target: "_blank",
      },
      {
        label: "STARTUP AND INNOVATION CENTRE",
        href: "https://www.charusat.ac.in/csic",
        target: "_blank",
      },
      {
        label: "EQUAL OPPORTUNITY CELL",
        href: "https://www.charusat.ac.in/eoc",
        target: "_blank",
      },
      {
        label: "INDUSTRY INTERACTION CELL",
        href: "https://www.charusat.ac.in/university-industry-interaction-cell",
        target: "_blank",
      },
      {
        label: "INTERNATIONAL STUDENT CELL",
        href: "https://isc.charusat.ac.in/",
        target: "_blank",
      },
      {
        label: "ENERGY CONSERVATION CELL",
        href: "/ecc",
        target: "_blank",
      },
    ],
  },
  {
    label: "COMMITTEES",
    href: "#committees",
    subMenu: [
      {
        label: "GRIEVANCE REDRESSAL",
        href: "https://www.charusat.ac.in/cspit/Grievance-Redressal-CSPIT.html",
        target: "_blank",
      },
      {
        label: "ANTI-RAGGING SQUAD",
        href: "https://www.charusat.ac.in/cspit/Anti-Ragging-Squad.html",
        target: "_blank",
      },
      {
        label: "INTERNAL COMPLAINT COMMITTEE",
        href: "https://www.charusat.ac.in/ICC",
        target: "_blank",
      },
      {
        label: "ANTI-DRUG",
        href: "/files/Anti.drug.circular.pdf",
        target: "_blank",
      },
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

  {
    label: "STUDENT CORNER",
    href: "#student-corner",
    subMenu: [
      {
        label: "CODE OF CONDUCT",
        href: "https://www.charusat.ac.in/documents/pdfs/data_1/Code_Of_Conduct/Student%20code%20of%20Conduct.pdf",
        target: "_blank",
      },
      {
        label: "STUDENT HANDBOOK",
        href: "/drive?folderId=1LgF2k8N_GeRCs-O50PvXUiywW-Bk8Lyw&heading=STUDENT%20HANDBOOK",
        target: "_blank",
      },
      {
        label: "SYLLABUS",
        href: "/drive?folderId=1CrY0oeDZrnVZRuBwtTIp3MVIs9EoXCl2&heading=SYLLABUS",
        target: "_blank",
      },
      {
        label: "REQUEST TRANSCRIPT",
        href: "https://charusat.edu.in:912/OthPaymentApp/",
        target: "_blank",
      },
      {
        label: "PAY FEES",
        href: "https://charusat.edu.in:912/FeesPaymentApp/",
        target: "_blank",
      },
      {
        label: "VIEW RESULT",
        href: "https://charusat.edu.in:912/Uniexamresult/",
        target: "_blank",
      },
      {
        label: "I-CREATE",
        href: "https://icreate.charusat.ac.in/",
        target: "_blank",
      },
      {
        label: "QUESTION PAPERS",
        href: "/drive?folderId=1U1hIPybwqdsF9Nn_K6QKom0Kg5yAWCaW&heading=QUESTION%20PAPERS",
        target: "_blank",
      },
      {
        label: "ACADEMIC CALENDAR",
        href: "/drive?folderId=1EWfAd0mJ3MIVNA7Ct3XnHfS6aKpG2NeJ&heading=ACADEMIC%20CALENDER",
        target: "_blank",
      },
      {
        label: "STUDENT SUPPORT POLICY",
        href: "/files/student_support_policy_UGSF_PGSF.pdf",
        target: "_blank",
      },
    ],
  },
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

  // Add scroll detection
  useEffect(() => {
    const handleScroll = () => {
      // Scroll logic can be added here if needed in the future
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
                width={80}
                height={80}
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
                  className="px-4 py-6 text-gray-700 hover:text-[#0054a6] font-medium text-sm transition-all duration-300 inline-flex items-center relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#0054a6] after:left-0 after:bottom-4 after:transform after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300"
                >
                  {item.label}
                  {item.subMenu && (
                    <svg
                      className="w-4 h-4 ml-1 transform group-hover:rotate-180 transition-transform duration-300 ease-out"
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
                    className="absolute left-0 min-w-[250px] bg-white shadow-lg invisible opacity-0 group-hover:visible group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-2 transition-all duration-300 ease-out z-50 border border-gray-100"
                    style={{
                      top: "100%",
                    }}
                  >
                    <div className="py-1">
                      {item.subMenu.map((subItem, index) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#0054a6] hover:text-white transition-all duration-200 relative group/item"
                        >
                          <span className="relative z-10 transform group-hover/item:translate-x-2 transition-transform duration-200 inline-block">
                            {subItem.label}
                          </span>
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
