import PropTypes from "prop-types";
import FacultyDetailClient from "../../components/FacultyDetailClient";

export default function FacultyDetail({ params }) {
  // This is where you would fetch faculty data based on params.id
  // For now using static data
  const faculty = {
    name: "Dr. Trushit Upadhyaya",
    title: "PROFESSOR, PRINCIPAL",
    degree: "Ph. D.",
    image: "/CSPIT_Faculty/Electronics/TRUSHIT.webp",
    email: "trushitupadhyay.ec@charusat.ac.in",
    linkedin: "https://www.linkedin.com/in/tkupadhyaya/",
    website: "https://www.charusat.ac.in/cspit/trushitupadhyaya",
    scholar:
      "https://scholar.google.com/citations?user=GzsxoNAoAAAAJ&hl=en&oi=ao",
    expertise: "Antennas, Computer Networks, Microwave Engineering",
    subjects:
      "Electromagnetic Theory, Computer Networks, Python Programming, Analog Electronics",
    projectsUrl: "https://www.charusat.ac.in/cspit/trushitupadhyaya#Projects",
    memberships: "IEEE, ISTE",
    certifications:
      "CISCO CERTIFIED NETWORK ASSOCIATE, CISCO CERTIFIED ACADEMY INSTRUCTOR",
  };

  return <FacultyDetailClient faculty={faculty} />;
}

FacultyDetail.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};
