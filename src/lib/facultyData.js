// Import static faculty data generated from the XLSX source
import faculties from "./facultyData.json";

// Normalize JSON keys to camelCase properties
function normalizeFaculty(f) {
  return {
    name: f.Name,
    title: f.Title,
    degree: f.Degree,
    researchInterests: f["Research Interests"],
    expertise: f["Research Interests"],
    subjects: f.Subjects,
    image: (() => {
      const raw = f["Image Src"] || "";
      const clean = raw.replace(/\\/g, "/");
      return clean.startsWith("/") ? clean : `/${clean}`;
    })(),
    email: f.Email,
    linkedin: f.LinkedIn,
    website: f.Website,
    scholar: f.Scholar,
    memberships: f.Membership,
    certifications: f.Certification,
    teaching: f.Teaching,
    slug: f.slug,
  };
}

/**
 * Returns the complete list of faculty objects (pre-generated JSON).
 */
export function getAllFaculties() {
  return faculties.map(normalizeFaculty);
}

export function getFacultyBySlug(slug) {
  const f = faculties.find((f) => f.slug === slug);
  return f ? normalizeFaculty(f) : undefined;
}
