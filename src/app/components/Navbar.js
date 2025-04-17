"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Unified menu with nested children for dropdowns
const MENU_LINKS = [
  { label: "Placement", href: "#placement" },
  { label: "Gallery", href: "#gallery" },
  {
    label: "Academics",
    key: "academics",
    children: [
      {
        title: "Programs",
        links: [
          { label: "Undergraduate Programs", href: "#under-graduate-programs" },
          { label: "Postgraduate Programs", href: "#post-graduate-programs" },
          {
            label: "Ph.D.",
            href: "https://www.charusat.ac.in/assets/files/PHD/PhD_Regulations.pdf",
            target: "_blank",
          },
        ],
      },
      {
        title: "Centers",
        links: [
          {
            label: "Rural Education Development",
            href: "https://www.charusat.ac.in/CREDP",
            target: "_blank",
          },
          {
            label: "Women Development Cell",
            href: "https://www.charusat.ac.in/wdc",
            target: "_blank",
          },
          {
            label: "Startup and Innovation Centre",
            href: "https://www.charusat.ac.in/csic",
            target: "_blank",
          },
          {
            label: "Equal Opportunity Cell",
            href: "https://www.charusat.ac.in/eoc",
            target: "_blank",
          },
        ],
      },
      {
        title: "Resources",
        links: [
          {
            label: "Grievance Redressal",
            href: "https://www.charusat.ac.in/cspit/Grievance-Redressal-CSPIT.html",
            target: "_blank",
          },
          {
            label: "Internal Complaint Committee",
            href: "https://www.charusat.ac.in/ICC",
            target: "_blank",
          },
          {
            label: "Anti-Drug Policy",
            href: "./Resources/Anti.drug.circular.pdf",
            target: "_blank",
          },
        ],
      },
    ],
  },
  {
    label: "Student Corner",
    key: "student",
    children: [
      {
        title: "Student Resources",
        links: [
          {
            label: "Code Of Conduct",
            href: "https://www.charusat.ac.in/documents/pdfs/data_1/Code_Of_Conduct/Student%20code%20of%20Conduct.pdf",
            target: "_blank",
          },
          {
            label: "Student Handbook",
            href: "drive.html?folderId=1LgF2k8N_GeRCs-O50PvXUiywW-Bk8Lyw&heading=STUDENT%20HANDBOOK",
            target: "_blank",
          },
          {
            label: "Syllabus",
            href: "drive.html?folderId=1CrY0oeDZrnVZRuBwtTIp3MVIs9EoXCl2&heading=SYLLABUS",
            target: "_blank",
          },
        ],
      },
      {
        title: "Student Services",
        links: [
          {
            label: "Request Transcript",
            href: "https://charusat.edu.in:912/OthPaymentApp/",
            target: "_blank",
          },
          {
            label: "Pay Fees",
            href: "https://charusat.edu.in:912/FeesPaymentApp/",
            target: "_blank",
          },
          {
            label: "View Result",
            href: "https://charusat.edu.in:912/Uniexamresult/",
            target: "_blank",
          },
        ],
      },
      {
        title: "Quick Links",
        links: [
          {
            label: "i-create",
            href: "https://icreate.charusat.ac.in/",
            target: "_blank",
          },
          {
            label: "Question Papers",
            href: "drive.html?folderId=1U1hIPybwqdsF9Nn_K6QKom0Kg5yAWCaW&heading=QUESTION%20PAPERS",
            target: "_blank",
          },
          {
            label: "Academic Calendar",
            href: "drive.html?folderId=1EWfAd0mJ3MIVNA7Ct3XnHfS6aKpG2NeJ&heading=ACADEMIC%20CALENDER",
            target: "_blank",
          },
        ],
      },
    ],
  },
  { label: "Faculty & Staff", href: "/faculty" },
  {
    label: "Alumni",
    href: "https://alumni.charusat.ac.in/",
    target: "_blank",
  },
  { label: "Contact Us", href: "#contact-us" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

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
    <header className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200">
      <nav className="relative container mx-auto flex items-center justify-between p-2">
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

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {MENU_LINKS.map((item) =>
            item.key ? (
              <div key={item.key} className="relative group">
                <button className="text-gray-700 hover:text-[#0056b3] font-medium py-2 text-base transition-all duration-200 hover:scale-105 flex items-center gap-1">
                  {item.label}
                  <svg
                    className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div className="absolute left-1/2 -translate-x-1/2 hidden group-hover:flex w-screen max-w-4xl bg-white/95 backdrop-blur-md shadow-2xl rounded-xl p-6 gap-8 z-50 top-full opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out border border-gray-100 translate-y-2 group-hover:translate-y-0">
                  <div className="grid grid-cols-3 gap-8 w-full">
                    {item.children.map((cat) => (
                      <div key={cat.title} className="space-y-4">
                        <h3 className="font-semibold text-[#0056b3] text-base md:text-lg">
                          {cat.title}
                        </h3>
                        <div className="space-y-3">
                          {cat.links.map((ln) => (
                            <Link
                              key={ln.label}
                              href={ln.href}
                              target={ln.target}
                              className="block text-gray-600 hover:text-[#0056b3] hover:translate-x-1 transition-all duration-200 text-base"
                            >
                              {ln.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                target={item.target}
                className="text-gray-700 hover:text-[#0056b3] font-medium py-2 text-base transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#0056b3] after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </Link>
            )
          )}
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-2xl z-50 md:hidden">
            <div className="p-4 space-y-4 max-h-[80vh] overflow-y-auto">
              {MENU_LINKS.map((item) =>
                item.key ? (
                  <div key={item.key} className="space-y-2">
                    <button
                      className="flex items-center justify-between w-full text-gray-700 hover:text-[#0056b3] transition-all duration-200 text-base font-medium"
                      onClick={toggleSubmenu.bind(null, item.key)}
                    >
                      <span>{item.label}</span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeSubmenu === item.key ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div
                      className={`pl-4 space-y-2 text-base ${
                        activeSubmenu === item.key ? "block" : "hidden"
                      }`}
                    >
                      {item.children.map((cat) => (
                        <div key={cat.title} className="space-y-4">
                          <h3 className="font-semibold text-[#0056b3] text-base md:text-lg">
                            {cat.title}
                          </h3>
                          <div className="space-y-3">
                            {cat.links.map((ln) => (
                              <Link
                                key={ln.label}
                                href={ln.href}
                                target={ln.target}
                                className="block text-gray-600 hover:text-[#0056b3] hover:translate-x-1 transition-all duration-200 text-base"
                                onClick={closeMobileMenu}
                              >
                                {ln.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    target={item.target}
                    className="block text-gray-700 hover:text-[#0056b3] hover:translate-x-1 transition-all duration-200 text-base font-medium"
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
