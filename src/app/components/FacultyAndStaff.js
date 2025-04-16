export default function FacultyAndStaff() {
  return (
    <section className="faculty-section">
      <div className="container-fluid" style={{ width: "85%" }}>
        <div className="faculty-title">
          <h2>MEET OUR FACULTY</h2>
        </div>

        <div className="faculty-layout">
          <div className="faculty-cards-container" id="faculty-cards">
            <div className="faculty-card">
              <a
                href="details.html?name=Dr.%20Aayushi%20Chaudhari%20%20"
                className="text-decoration-none text-dark"
              >
                <div>
                  <img
                    src="CSPIT_Faculty/CE/AAYUSHI.webp"
                    alt="Dr. Aayushi Chaudhari  "
                  />
                  <h4>
                    <strong>Dr. Aayushi Chaudhari </strong>
                  </h4>
                  <h5>ASSISTANT PROFESSOR</h5>
                  <p>Ph. D.</p>
                  <p>
                    <strong>Research Interests:</strong>
                    <br />
                    C, C++, Computer Vision
                  </p>
                </div>
              </a>
            </div>
            <div className="faculty-card">
              <a
                href="details.html?name=Dr.%20John%20Doe"
                className="text-decoration-none text-dark"
              >
                <div>
                  <img
                    src="CSPIT_Faculty/CE/JOHN_DOE.webp"
                    alt="Dr. John Doe"
                  />
                  <h4>
                    <strong>Dr. John Doe</strong>
                  </h4>
                  <h5>PROFESSOR</h5>
                  <p>Ph. D. in Artificial Intelligence</p>
                  <p>
                    <strong>Research Interests:</strong>
                    <br />
                    Machine Learning, AI, Data Science
                  </p>
                </div>
              </a>
            </div>
            <div className="faculty-card">
              <a
                href="details.html?name=Dr.%20Jane%20Smith"
                className="text-decoration-none text-dark"
              >
                <div>
                  <img
                    src="CSPIT_Faculty/CE/JANE_SMITH.webp"
                    alt="Dr. Jane Smith"
                  />
                  <h4>
                    <strong>Dr. Jane Smith</strong>
                  </h4>
                  <h5>ASSOCIATE PROFESSOR</h5>
                  <p>Ph. D. in Cybersecurity</p>
                  <p>
                    <strong>Research Interests:</strong>
                    <br />
                    Network Security, Cryptography
                  </p>
                </div>
              </a>
            </div>
            <div className="faculty-card">
              <a
                href="details.html?name=Dr.%20Emily%20Clark"
                className="text-decoration-none text-dark"
              >
                <div>
                  <img
                    src="CSPIT_Faculty/CE/EMILY_CLARK.webp"
                    alt="Dr. Emily Clark"
                  />
                  <h4>
                    <strong>Dr. Emily Clark</strong>
                  </h4>
                  <h5>ASSISTANT PROFESSOR</h5>
                  <p>Ph. D. in Software Engineering</p>
                  <p>
                    <strong>Research Interests:</strong>
                    <br />
                    Agile Development, Software Testing
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
