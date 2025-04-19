"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

// Club data with extended information
const clubsData = {
  AWS: {
    name: "AWS Student Club",
    image: "/images1/Student Club/aws.webp",
    bannerColor: "#0066B2", // AWS Blue
    category: "Cloud Computing",
    description:
      "Together as a team AWS Cloud Club CHARUSAT aims to provide a platform for the intellectuals to learn and explore the cloud fundamentals of AWS.",
    longDescription:
      "As part of the club we assure that every individual gets something productive out of this club. AWS Cloud Club CHARUSAT intends to bring developers under one roof to create a community to inspire many. The club will be channeled into propagating learning and teaching symbolically.",
    establishedYear: "2018",
    membersCount: "50+",
    awardsCount: "10+",
    meetingFrequency: "Weekly Meetings",
    facultyAdvisors: [
      {
        name: "Dr. Parth Shah",
        title: "Faculty Coordinator",
        email: "parthshah.it@charusat.ac.in",
        phone: "99999",
        photo: "/CSPIT_Faculty/profile.png",
      },
      {
        name: "Dr. Sanket Suthar",
        title: "Faculty Coordinator",
        email: "sanketsuthar.it@charusat.ac.in",
        phone: "999999",
        photo: "/CSPIT_Faculty/profile.png",
      },
    ],
    studentCoordinators: [
      {
        name: "Dulari Bhushan",
        email: "dulari.bhushan@gmail.com",
        phone: "9999999999",
      },
      {
        name: "Parmesh Bhatt",
        email: "parmesh.bhatt@gmail.com",
        phone: "9999999999",
      },
    ],
    recentEvents: [
      {
        title: "AWS Cloud Bootcamp",
        description: "A three-day coding event",
        image: "/images1/events/technical/TEDx/ted5.webp",
        date: "15-17 Nov 2023",
        gallery: [
          "/images1/events/technical/TEDx/ted5.webp",
          "/images1/events/technical/TEDx/ted10.webp",
          "/images1/events/technical/TEDx/ted15.webp",
          "/images1/events/technical/TEDx/ted18.webp",
        ],
      },
      {
        title: "Certification Bootcamp",
        description: "AWS certification bootcamp",
        image: "/images1/events/technical/TEDx/ted10.webp",
        date: "2023-10-20",
        gallery: [
          "/images1/events/technical/TEDx/ted10.webp",
          "/images1/events/technical/TEDx/ted5.webp",
          "/images1/events/technical/TEDx/_ted1.webp",
          "/images1/events/technical/TEDx/_ted4.webp",
        ],
      },
    ],
    gallery: [
      "/images1/events/technical/TEDx/ted5.webp",
      "/images1/events/technical/TEDx/ted10.webp",
      "/images1/events/technical/TEDx/ted15.webp",
      "/images1/events/technical/TEDx/ted18.webp",
    ],
  },
  AIML: {
    name: "AI/ML Club",
    image: "/images1/Student Club/Aiml.webp",
    bannerColor: "#4B0082", // Deep Purple
    category: "Artificial Intelligence",
    description:
      "The AI/ML Club focuses on the exciting field of Artificial Intelligence and Machine Learning, bringing together enthusiasts and practitioners.",
    longDescription:
      "As members of this club, students get hands-on experience with cutting-edge machine learning algorithms, neural networks, and AI applications. Through workshops, projects, and competitions, we build skills that are highly sought after in today's tech industry.",
    establishedYear: "2019",
    membersCount: "45+",
    awardsCount: "8+",
    meetingFrequency: "Weekly Meetings",
    facultyAdvisors: [
      {
        name: "Dr. Neha Sharma",
        title: "Faculty Coordinator",
        email: "nehasharma.it@charusat.ac.in",
        phone: "99999",
        photo: "/CSPIT_Faculty/profile.png",
      },
      {
        name: "Dr. Amit Patel",
        title: "Faculty Coordinator",
        email: "amitpatel.it@charusat.ac.in",
        phone: "999999",
        photo: "/CSPIT_Faculty/profile.png",
      },
    ],
    studentCoordinators: [
      {
        name: "Riya Shah",
        email: "riya.shah@gmail.com",
        phone: "9999999999",
      },
      {
        name: "Jay Patel",
        email: "jay.patel@gmail.com",
        phone: "9999999999",
      },
    ],
    recentEvents: [
      {
        title: "AI Hackathon",
        description: "24-hour coding challenge",
        image: "/images1/Projects/Attendex-3.webp",
        date: "5-6 Feb 2023",
        gallery: [
          "/images1/Projects/Attendex-3.webp",
          "/images1/events/technical/TEDx/ted15.webp",
          "/images1/events/technical/TEDx/ted10.webp",
          "/images1/events/technical/TEDx/ted18.webp",
        ],
      },
      {
        title: "ML Workshop Series",
        description: "Introduction to machine learning",
        image: "/images1/events/technical/TEDx/ted15.webp",
        date: "2023-09-15",
        gallery: [
          "/images1/events/technical/TEDx/ted15.webp",
          "/images1/events/technical/TEDx/ted5.webp",
          "/images1/events/technical/TEDx/_ted1.webp",
          "/images1/events/technical/TEDx/_ted4.webp",
        ],
      },
    ],
    gallery: [
      "/images1/Student Club/Aiml.webp",
      "/images1/Projects/Attendex-3.webp",
      "/images1/events/technical/TEDx/ted15.webp",
      "/images1/events/technical/TEDx/ted18.webp",
    ],
  },
  // Additional clubs data would follow the same structure
  // For brevity, I'm not including all clubs, but the pattern is established
  CC: {
    name: "The Tribe of Creativity",
    image: "/images1/Student Club/CC.webp",
    bannerColor: "#FF6B6B", // Creative Red
    category: "Design",
    description:
      "The Tribe of Creativity brings together creative minds to explore design thinking and artistic expression.",
    longDescription:
      "Our club serves as a hub for students passionate about various forms of creative expression, from graphic design to digital art, UI/UX, and multimedia projects. We provide opportunities to develop portfolios and work on real-world design challenges.",
    establishedYear: "2020",
    membersCount: "30+",
    awardsCount: "5+",
    meetingFrequency: "Bi-Weekly Meetings",
    facultyAdvisors: [
      {
        name: "Prof. Anjali Desai",
        title: "Faculty Coordinator",
        email: "anjalidesai.it@charusat.ac.in",
        phone: "99999",
        photo: "/CSPIT_Faculty/profile.png",
      },
    ],
    studentCoordinators: [
      {
        name: "Priya Kapoor",
        email: "priya.k@gmail.com",
        phone: "9999999999",
      },
      {
        name: "Raj Mehta",
        email: "raj.mehta@gmail.com",
        phone: "9999999999",
      },
    ],
    recentEvents: [
      {
        title: "Design Bootcamp",
        description: "UI/UX design workshop",
        image: "/images1/events/cultural/cultural5.webp",
        date: "18 Jan 2023",
        gallery: [
          "/images1/events/cultural/cultural5.webp",
          "/images1/events/cultural/cultural6.webp",
          "/images1/events/cultural/cultural4.webp",
        ],
      },
      {
        title: "Art Exhibition",
        description: "Student artwork showcase",
        image: "/images1/events/cultural/cultural6.webp",
        date: "2023-12-05",
        gallery: [
          "/images1/events/cultural/cultural6.webp",
          "/images1/events/cultural/cultural5.webp",
          "/images1/events/cultural/cultural4.webp",
        ],
      },
    ],
    gallery: [
      "/images1/Student Club/CC.webp",
      "/images1/events/cultural/cultural5.webp",
      "/images1/events/cultural/cultural6.webp",
      "/images1/events/cultural/cultural4.webp",
    ],
  },
  // Other clubs similarly structured
};

export default function ClubDetailsPage() {
  const params = useParams();
  const [club, setClub] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const clubId = params.club;
    if (clubsData[clubId]) {
      setClub(clubsData[clubId]);
    }
    setLoading(false);
  }, [params.club]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!club) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Club Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The club you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
          <Link
            href="/"
            className="px-5 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-4">
      <div className="container mx-auto px-4">
        {/* Back button */}
        <div className="mb-4 flex justify-end">
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors text-sm"
          >
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Clubs
          </Link>
        </div>

        {/* Club Header Banner */}
        <div
          style={{ backgroundColor: club.bannerColor || "#0066B2" }}
          className="rounded-lg overflow-hidden shadow-md mb-6 text-white"
        >
          <div className="md:flex items-center p-6">
            <div className="relative h-32 w-32 md:mr-6 mx-auto md:mx-0 mb-4 md:mb-0 bg-white rounded-full p-2">
              <Image
                src={club.image}
                alt={club.name}
                fill
                className="object-contain rounded-full"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-2 text-center md:text-left">
                {club.name}
              </h1>
              <p className="text-white/90 mb-4 text-center md:text-left">
                {club.description}
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-3 py-1 rounded-md text-sm">
                  <span className="mr-2">🏆</span>
                  <span className="font-medium mr-1">
                    Est. {club.establishedYear}
                  </span>
                </div>
                <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-3 py-1 rounded-md text-sm">
                  <span className="mr-2">👥</span>
                  <span className="font-medium">
                    {club.membersCount} Members
                  </span>
                </div>
                <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-3 py-1 rounded-md text-sm">
                  <span className="mr-2">🏅</span>
                  <span className="font-medium">{club.awardsCount} Awards</span>
                </div>
                <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-3 py-1 rounded-md text-sm">
                  <span className="mr-2">📅</span>
                  <span className="font-medium">{club.meetingFrequency}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About the Club */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 mb-6 p-6">
          <h2 className="text-xl font-semibold text-gray-800 border-b border-orange-500 pb-2 mb-4 inline-block">
            About the Club
          </h2>
          <p className="text-gray-600">{club.description}</p>
          {club.longDescription && (
            <p className="text-gray-600 mt-3">{club.longDescription}</p>
          )}
        </div>

        {/* Faculty Advisors */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 mb-6 p-6">
          <h2 className="text-xl font-semibold text-gray-800 border-b border-orange-500 pb-2 mb-4 inline-block">
            Faculty Advisors
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {club.facultyAdvisors.map((advisor, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 flex items-start"
              >
                <div className="relative h-16 w-16 mr-4 flex-shrink-0">
                  <Image
                    src={advisor.photo || "/CSPIT_Faculty/profile.png"}
                    alt={advisor.name}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">{advisor.name}</h3>
                  <p className="text-gray-600 text-sm mb-1">{advisor.title}</p>

                  <div className="flex items-center text-sm text-blue-600 mt-2">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                    <a
                      href={`mailto:${advisor.email}`}
                      className="hover:underline"
                    >
                      {advisor.email}
                    </a>
                  </div>

                  <div className="flex items-center text-sm text-blue-600 mt-1">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                    </svg>
                    <span>{advisor.phone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Student Coordinators */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 mb-6 p-6">
          <h2 className="text-xl font-semibold text-gray-800 border-b border-orange-500 pb-2 mb-4 inline-block">
            Student Coordinators
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {club.studentCoordinators.map((coordinator, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-4"
              >
                <h3 className="font-medium text-gray-800">
                  {coordinator.name}
                </h3>

                <div className="flex items-center text-sm text-blue-600 mt-3">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  <a
                    href={`mailto:${coordinator.email}`}
                    className="hover:underline"
                  >
                    {coordinator.email}
                  </a>
                </div>

                <div className="flex items-center text-sm text-blue-600 mt-1">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  <span>{coordinator.phone}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Events */}
        {club.recentEvents && club.recentEvents.length > 0 && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 mb-6 p-6">
            <h2 className="text-xl font-semibold text-gray-800 border-b border-orange-500 pb-2 mb-4 inline-block">
              Recent Events
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {club.recentEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-medium px-2 py-1 rounded-md">
                      {event.date}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-gray-800 mb-1">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{event.description}</p>
                    <button
                      className="mt-3 inline-flex items-center text-blue-600 text-sm font-medium"
                      onClick={() => setSelectedEvent(event)}
                    >
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                          clipRule="evenodd"
                        />
                      </svg>
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Events Gallery */}
        {club.gallery && club.gallery.length > 0 && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 mb-6 p-6">
            <h2 className="text-xl font-semibold text-gray-800 border-b border-orange-500 pb-2 mb-4 inline-block">
              Events Gallery
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {club.gallery.map((image, index) => (
                <div
                  key={index}
                  className="relative h-48 w-full rounded-lg overflow-hidden shadow-sm border border-gray-200"
                >
                  <Image
                    src={image}
                    alt={`${club.name} gallery image ${index + 1}`}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Event Details Modal */}
        {selectedEvent && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
                <h5 className="text-xl font-semibold text-gray-800">
                  {selectedEvent.title}
                </h5>
                <button
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                  onClick={() => setSelectedEvent(null)}
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
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <div className="relative h-64 w-full rounded-lg overflow-hidden mb-4">
                    <Image
                      src={selectedEvent.image}
                      alt={selectedEvent.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center mb-3">
                    <span className="bg-blue-600 text-white text-sm px-2 py-1 rounded-md flex items-center mr-2">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {selectedEvent.date}
                    </span>
                  </div>
                  <p className="text-gray-600">{selectedEvent.description}</p>
                </div>

                <h5 className="text-lg font-semibold text-gray-800 mb-3">
                  Event Gallery
                </h5>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {selectedEvent.gallery &&
                    selectedEvent.gallery.map((img, idx) => (
                      <div
                        key={idx}
                        className="relative h-24 rounded-lg overflow-hidden cursor-pointer"
                      >
                        <Image
                          src={img}
                          alt={`${selectedEvent.title} image ${idx + 1}`}
                          fill
                          className="object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    ))}
                </div>
              </div>
              <div className="border-t border-gray-200 p-4 flex justify-end">
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
