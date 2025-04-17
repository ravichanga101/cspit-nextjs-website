import { getAllFaculties } from "@/lib/facultyData";
import FacultyAndStaff from "../components/FacultyAndStaff";

export default function FacultyPage() {
  const faculties = getAllFaculties();
  return (
    <div>
      <FacultyAndStaff faculties={faculties} />
    </div>
  );
}
