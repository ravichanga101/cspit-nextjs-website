"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaFolder,
  FaFilePdf,
  FaFileImage,
  FaFileVideo,
  FaFileAlt,
  FaArrowLeft,
} from "react-icons/fa";
import PropTypes from "prop-types";

export default function DriveContent({
  title = "Drive Content",
  defaultFolderId,
}) {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [folderStack, setFolderStack] = useState([]);
  const [currentFolderId, setCurrentFolderId] = useState(defaultFolderId);

  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

  useEffect(() => {
    fetchFiles(currentFolderId);
  }, [currentFolderId]);

  const fetchFiles = async (folderId) => {
    setLoading(true);
    try {
      const url = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.error) {
        throw new Error(data.error.message);
      }

      setFiles(data.files || []);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching files:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleFolderClick = (folderId) => {
    setFolderStack((prev) => [...prev, currentFolderId]);
    setCurrentFolderId(folderId);
  };

  const handleBack = () => {
    if (folderStack.length > 0) {
      const prevFolder = folderStack[folderStack.length - 1];
      setFolderStack((prev) => prev.slice(0, -1));
      setCurrentFolderId(prevFolder);
    }
  };

  const getFileIcon = (mimeType) => {
    switch (mimeType) {
      case "application/vnd.google-apps.folder":
        return <FaFolder className="text-yellow-500 text-4xl" />;
      case "application/pdf":
        return <FaFilePdf className="text-red-500 text-4xl" />;
      case "image/jpeg":
      case "image/png":
        return <FaFileImage className="text-blue-500 text-4xl" />;
      case "video/mp4":
        return <FaFileVideo className="text-purple-500 text-4xl" />;
      default:
        return <FaFileAlt className="text-gray-500 text-4xl" />;
    }
  };

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
        <p className="text-red-600 mb-4">Error: {error}</p>
        <button
          onClick={() => fetchFiles(currentFolderId)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Header with integrated back button */}
      <div className="relative mb-8">
        {folderStack.length > 0 && (
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleBack}
            className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center text-blue-600 hover:text-blue-800 transition-colors group bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-blue-100"
          >
            <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />{" "}
            Back
          </motion.button>
        )}

        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-[#0056b3] mb-2"
          >
            {title}
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 w-20 mx-auto bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
          />
        </div>
      </div>

      {/* Grid of files */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {files.map((file) => (
          <motion.div
            key={file.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200/70 group flex flex-col h-full"
          >
            <div className="p-3 flex flex-col flex-grow">
              <div className="flex justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                {getFileIcon(file.mimeType)}
              </div>
              <h3 className="text-sm font-medium text-gray-900 mb-2 text-center break-words group-hover:text-blue-600 transition-colors flex-grow">
                {file.name}
              </h3>
              {file.mimeType === "application/vnd.google-apps.folder" ? (
                <button
                  onClick={() => handleFolderClick(file.id)}
                  className="w-full mt-auto px-2 py-1.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm rounded-md hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center group"
                >
                  <span>Open</span>
                  <svg
                    className="w-3 h-3 ml-1.5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              ) : (
                <a
                  href={`https://drive.google.com/file/d/${file.id}/view`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-auto px-2 py-1.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm rounded-md hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center group"
                >
                  <span>View</span>
                  <svg
                    className="w-3 h-3 ml-1.5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {files.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-8 bg-gray-50 rounded-lg border border-gray-200/70 mt-4"
        >
          <p className="text-gray-600">No files found in this folder.</p>
        </motion.div>
      )}

      {loading && (
        <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
        </div>
      )}
    </div>
  );
}

DriveContent.propTypes = {
  title: PropTypes.string,
  defaultFolderId: PropTypes.string.isRequired,
};
