"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaFolder, FaFilePdf, FaFileImage, FaFileVideo, FaFileAlt, FaArrowLeft } from "react-icons/fa";

export default function DriveContent({ title = "Drive Content", defaultFolderId }) {
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
    setFolderStack(prev => [...prev, currentFolderId]);
    setCurrentFolderId(folderId);
  };

  const handleBack = () => {
    if (folderStack.length > 0) {
      const prevFolder = folderStack[folderStack.length - 1];
      setFolderStack(prev => prev.slice(0, -1));
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
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
        >
          {title}
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-1 w-24 mx-auto bg-blue-600 rounded-full mt-4"
        />
      </div>

      {folderStack.length > 0 && (
        <button
          onClick={handleBack}
          className="mb-6 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <FaArrowLeft className="mr-2" /> Back
        </button>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {files.map((file) => (
          <motion.div
            key={file.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="p-6">
              <div className="flex justify-center mb-4">
                {getFileIcon(file.mimeType)}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">{file.name}</h3>
              {file.mimeType === "application/vnd.google-apps.folder" ? (
                <button
                  onClick={() => handleFolderClick(file.id)}
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
                >
                  Open Folder
                </button>
              ) : (
                <a
                  href={`https://drive.google.com/file/d/${file.id}/view`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
                >
                  View File
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {files.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">No files found in this folder.</p>
        </div>
      )}
    </div>
  );
}