"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const departments = [
  { name: "All Departments", value: "all" },
  { name: "Computer Science & Engineering", value: "cse" },
  { name: "Information Technology", value: "it" },
  { name: "Artificial Intelligence & ML", value: "aiml" },
  { name: "Electronics & Communication", value: "ec" },
  { name: "Electrical Engineering", value: "electrical" },
  { name: "Mechanical Engineering", value: "mechanical" },
  { name: "Civil Engineering", value: "civil" },
  { name: "Chemical Engineering", value: "chemical" },
];

const years = [
  { name: "All Years", value: "all" },
  { name: "2024-25", value: "2024-25" },
  { name: "2023-24", value: "2023-24" },
  { name: "2022-23", value: "2022-23" },
  { name: "2021-22", value: "2021-22" },
  { name: "2020-21", value: "2020-21" },
];

export default function QuestionPapers() {
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [papers, setPapers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPapers = async () => {
      try {
        const response = await fetch("/api/question-papers");
        if (!response.ok) {
          throw new Error("Failed to fetch question papers");
        }
        const data = await response.json();
        setPapers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPapers();
  }, []);

  const filteredPapers = papers.filter((paper) => {
    const matchesDepartment =
      selectedDepartment === "all" || paper.department === selectedDepartment;
    const matchesYear = selectedYear === "all" || paper.year === selectedYear;
    const matchesSearch = paper.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesDepartment && matchesYear && matchesSearch;
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600">Error: {error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
        >
          Question Papers
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-gray-600 max-w-2xl mx-auto"
        >
          Access previous year question papers for all departments and semesters
        </motion.p>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-1 w-24 mx-auto bg-blue-600 rounded-full mt-4"
        />
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Department
          </label>
          <select
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            {departments.map((dept) => (
              <option key={dept.value} value={dept.value}>
                {dept.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Academic Year
          </label>
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            {years.map((year) => (
              <option key={year.value} value={year.value}>
                {year.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Search
          </label>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by subject name..."
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Question Papers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPapers.map((paper) => (
          <motion.div
            key={paper.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {paper.title}
              </h3>
              <div className="flex items-center text-sm text-gray-600 mb-4">
                <span className="mr-4">Semester {paper.semester}</span>
                <span>{paper.year}</span>
              </div>
              <a
                href={paper.driveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                <FaDownload className="mr-2" />
                Download
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredPapers.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">
            No question papers found matching your criteria.
          </p>
        </div>
      )}
    </div>
  );
}
