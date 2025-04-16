"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link
            href="/"
            className="transition-transform hover:scale-105 duration-300"
          >
            <Image
              src="/images1/CSPIT_Logo.png"
              alt="CSPIT Logo"
              width={70}
              height={70}
              className="rounded-full shadow-md hover:shadow-lg transition-all"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="#placement"
            className="text-gray-700 hover:text-[#0056b3] font-medium transition-colors duration-200"
          >
            Placement
          </Link>
          <Link
            href="#gallery"
            className="text-gray-700 hover:text-[#0056b3] font-medium transition-colors duration-200"
          >
            Gallery
          </Link>

          {/* Academics Mega Menu */}
          <div className="relative group">
            <button className="text-gray-700 hover:text-[#0056b3] font-medium py-2 transition-colors duration-200">
              Academics
            </button>
            <div className="absolute left-1/4 -translate-x-1/2 hidden group-hover:flex w-screen max-w-4xl bg-white shadow-2xl rounded-xl p-6 gap-8 z-50 top-full opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out border border-gray-100">
              <div className="flex-1">
                <h3 className="font-semibold text-[#0056b3] mb-4 text-lg">
                  Programs
                </h3>
                <div className="space-y-3">
                  <Link
                    href="#under-graduate-programs"
                    className="block text-gray-600 hover:text-[#0056b3] hover:translate-x-1 transition-all duration-200"
                  >
                    Undergraduate Programs
                  </Link>
                  <Link
                    href="#post-graduate-programs"
                    className="block text-gray-600 hover:text-[#0056b3] hover:translate-x-1 transition-all duration-200"
                  >
                    Postgraduate Programs
                  </Link>
                  <Link
                    href="https://www.charusat.ac.in/assets/files/PHD/PhD_Regulations.pdf"
                    target="_blank"
                    className="block text-gray-600 hover:text-[#0056b3] hover:translate-x-1 transition-all duration-200"
                  >
                    Ph.D.
                  </Link>
                </div>
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-[#0056b3] mb-4">Centers</h3>
                <div className="space-y-2">
                  <Link
                    href="https://www.charusat.ac.in/CREDP"
                    target="_blank"
                    className="block text-gray-600 hover:text-[#0056b3] hover:translate-x-1 transition-all duration-200"
                  >
                    Rural Education Development
                  </Link>
                  <Link
                    href="https://www.charusat.ac.in/wdc"
                    target="_blank"
                    className="block text-gray-600 hover:text-[#0056b3] hover:translate-x-1 transition-all duration-200"
                  >
                    Women Development Cell
                  </Link>
                  <Link
                    href="https://www.charusat.ac.in/csic"
                    target="_blank"
                    className="block text-gray-600 hover:text-[#0056b3] hover:translate-x-1 transition-all duration-200"
                  >
                    Startup and Innovation Centre
                  </Link>
                  <Link
                    href="https://www.charusat.ac.in/eoc"
                    target="_blank"
                    className="block text-gray-600 hover:text-[#0056b3] hover:translate-x-1 transition-all duration-200"
                  >
                    Equal Opportunity Cell
                  </Link>
                </div>
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-[#0056b3] mb-4">Resources</h3>
                <div className="space-y-2">
                  <Link
                    href="https://www.charusat.ac.in/cspit/Grievance-Redressal-CSPIT.html"
                    target="_blank"
                    className="block text-gray-600 hover:text-[#0056b3] hover:translate-x-1 transition-all duration-200"
                  >
                    Grievance Redressal
                  </Link>
                  <Link
                    href="https://www.charusat.ac.in/ICC"
                    target="_blank"
                    className="block text-gray-600 hover:text-[#0056b3] hover:translate-x-1 transition-all duration-200"
                  >
                    Internal Complaint Committee
                  </Link>
                  <Link
                    href="./Resources/Anti.drug.circular.pdf"
                    target="_blank"
                    className="block text-gray-600 hover:text-[#0056b3] hover:translate-x-1 transition-all duration-200"
                  >
                    Anti-Drug Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Student Corner Mega Menu */}
          <div className="relative group">
            <button className="text-gray-700 hover:text-[#0056b3] font-medium py-2 transition-colors duration-200">
              Student Corner
            </button>
            <div className="absolute left-0 -translate-x-[60%] hidden group-hover:flex w-screen max-w-4xl bg-white shadow-2xl rounded-xl p-6 gap-8 z-50 top-full opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out border border-gray-100">
              <div className="grid grid-cols-3 gap-8 w-full">
                <div className="space-y-4">
                  <h3 className="font-semibold text-[#0056b3] text-lg">
                    Student Resources
                  </h3>
                  <div className="space-y-3">
                    <Link
                      href="https://www.charusat.ac.in/documents/pdfs/data_1/Code_Of_Conduct/Student%20code%20of%20Conduct.pdf"
                      target="_blank"
                      className="block text-gray-600 hover:text-[#0056b3] hover:translate-x-1 transition-all duration-200"
                    >
                      Code Of Conduct
                    </Link>
                    <Link
                      href="drive.html?folderId=1LgF2k8N_GeRCs-O50PvXUiywW-Bk8Lyw&amp;heading=STUDENT%20HANDBOOK"
                      target="_blank"
                      className="block text-gray-600 hover:text-[#0056b3] hover:translate-x-1 transition-all duration-200"
                    >
                      Student Handbook
                    </Link>
                    <Link
                      href="drive.html?folderId=1CrY0oeDZrnVZRuBwtTIp3MVIs9EoXCl2&amp;heading=SYLLABUS"
                      target="_blank"
                      className="block text-gray-600 hover:text-[#0056b3] hover:translate-x-1 transition-all duration-200"
                    >
                      Syllabus
                    </Link>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-[#0056b3] text-lg">
                    Student Services
                  </h3>
                  <div className="space-y-3">
                    <Link
                      href="https://charusat.edu.in:912/OthPaymentApp/"
                      target="_blank"
                      className="block text-gray-600 hover:text-[#0056b3] hover:translate-x-1 transition-all duration-200"
                    >
                      Request Transcript
                    </Link>
                    <Link
                      href="https://charusat.edu.in:912/FeesPaymentApp/"
                      target="_blank"
                      className="block text-gray-600 hover:text-[#0056b3] hover:translate-x-1 transition-all duration-200"
                    >
                      Pay Fees
                    </Link>
                    <Link
                      href="https://charusat.edu.in:912/Uniexamresult/"
                      target="_blank"
                      className="block text-gray-600 hover:text-[#0056b3] hover:translate-x-1 transition-all duration-200"
                    >
                      View Result
                    </Link>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-[#0056b3] text-lg">
                    Quick Links
                  </h3>
                  <div className="space-y-3">
                    <Link
                      href="https://icreate.charusat.ac.in/"
                      target="_blank"
                      className="block text-gray-600 hover:text-[#0056b3] hover:translate-x-1 transition-all duration-200"
                    >
                      i-create
                    </Link>
                    <Link
                      href="drive.html?folderId=1U1hIPybwqdsF9Nn_K6QKom0Kg5yAWCaW&amp;heading=QUESTION%20PAPERS"
                      target="_blank"
                      className="block text-gray-600 hover:text-[#0056b3] hover:translate-x-1 transition-all duration-200"
                    >
                      Question Papers
                    </Link>
                    <Link
                      href="drive.html?folderId=1EWfAd0mJ3MIVNA7Ct3XnHfS6aKpG2NeJ&amp;heading=ACADEMIC%20CALENDER"
                      target="_blank"
                      className="block text-gray-600 hover:text-[#0056b3] hover:translate-x-1 transition-all duration-200"
                    >
                      Academic Calendar
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/faculty"
            className="text-gray-700 hover:text-[#0056b3] font-medium transition-colors duration-200"
          >
            Faculty & Staff
          </Link>
          <Link
            href="https://alumni.charusat.ac.in/"
            target="_blank"
            className="text-gray-700 hover:text-[#0056b3] font-medium transition-colors duration-200"
          >
            Alumni
          </Link>
          <Link
            href="#contact-us"
            className="text-gray-700 hover:text-[#0056b3] font-medium transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-gray-700 focus:outline-none p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
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
          <div className="absolute top-full left-0 w-full bg-white shadow-2xl z-50 md:hidden">
            <div className="p-4 space-y-4 max-h-[80vh] overflow-y-auto">
              <Link
                href="#placement"
                className="block text-gray-700 hover:text-[#0056b3] hover:translate-x-1 transition-all duration-200"
              >
                Placement
              </Link>
              <Link
                href="#gallery"
                className="block text-gray-700 hover:text-[#0056b3] hover:translate-x-1 transition-all duration-200"
              >
                Gallery
              </Link>

              {/* Mobile Academics Menu */}
              <div className="space-y-2">
                <div className="font-semibold text-[#0056b3]">Academics</div>
                <div className="pl-4 space-y-2">
                  <Link
                    href="#under-graduate-programs"
                    className="block text-gray-600 hover:text-[#0056b3] hover:translate-x-1 transition-all duration-200"
                  >
                    Undergraduate Programs
                  </Link>
                  <Link
                    href="#post-graduate-programs"
                    className="block text-gray-600 hover:text-[#0056b3] hover:translate-x-1 transition-all duration-200"
                  >
                    Postgraduate Programs
                  </Link>
                  <Link
                    href="https://www.charusat.ac.in/assets/files/PHD/PhD_Regulations.pdf"
                    target="_blank"
                    className="block text-gray-600 hover:text-[#0056b3] hover:translate-x-1 transition-all duration-200"
                  >
                    Ph.D.
                  </Link>
                </div>
              </div>

              {/* Mobile Student Corner Menu */}
              <div className="space-y-2">
                <div className="font-semibold text-[#0056b3]">
                  Student Corner
                </div>
                <div className="pl-4 space-y-2">
                  <Link
                    href="https://www.charusat.ac.in/documents/pdfs/data_1/Code_Of_Conduct/Student%20code%20of%20Conduct.pdf"
                    target="_blank"
                    className="block text-gray-600 hover:text-[#0056b3] hover:translate-x-1 transition-all duration-200"
                  >
                    Code Of Conduct
                  </Link>
                  <Link
                    href="https://charusat.edu.in:912/Uniexamresult/"
                    target="_blank"
                    className="block text-gray-600 hover:text-[#0056b3] hover:translate-x-1 transition-all duration-200"
                  >
                    View Result
                  </Link>
                  <Link
                    href="https://charusat.edu.in:912/FeesPaymentApp/"
                    target="_blank"
                    className="block text-gray-600 hover:text-[#0056b3] hover:translate-x-1 transition-all duration-200"
                  >
                    Pay Fees
                  </Link>
                </div>
              </div>

              <Link
                href="/faculty"
                className="block text-gray-700 hover:text-[#0056b3] hover:translate-x-1 transition-all duration-200"
              >
                Faculty & Staff
              </Link>
              <Link
                href="https://alumni.charusat.ac.in/"
                target="_blank"
                className="block text-gray-700 hover:text-[#0056b3] hover:translate-x-1 transition-all duration-200"
              >
                Alumni
              </Link>
              <Link
                href="#contact-us"
                className="block text-gray-700 hover:text-[#0056b3] hover:translate-x-1 transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
