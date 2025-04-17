import FacultyDetailClient from "../../components/FacultyDetailClient";
import { getAllFaculties, getFacultyBySlug } from "@/lib/facultyData";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return getAllFaculties().map((f) => ({ id: f.slug }));
}

export async function generateMetadata({ params }) {
  const faculty = getFacultyBySlug(params.id);
  if (!faculty) {
    return { title: "Faculty Not Found" };
  }
  return {
    title: faculty.name,
    description: faculty.expertise,
    openGraph: {
      title: faculty.name,
      description: faculty.expertise,
      images: [faculty.image],
    },
  };
}

export default function FacultyDetail({ params }) {
  const faculty = getFacultyBySlug(params.id);
  if (!faculty) notFound();
  return <FacultyDetailClient faculty={faculty} />;
}
