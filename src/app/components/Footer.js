"use client";

const Footer = () => {
  const openCustomPopup = (popupId) => {
    // Implement popup functionality here
    console.log(`Opening popup: ${popupId}`);
  };

  return (
    <footer className="bg-gradient-to-b from-[#0056b3] to-[#003d80] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 - Logo and Institute Info */}
          <div className="flex flex-col items-center">
            <div className="bg-white/95 p-4 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 mb-6">
              <img
                className="w-[150px] h-auto"
                src="/images1/CSPIT_Logo.png"
                loading="lazy"
                alt="Institute Logo"
              />
            </div>
            <h5 className="text-lg font-semibold text-center mb-6">
              CHANDUBHAI S. PATEL <br />
              INSTITUTE OF TECHNOLOGY
            </h5>
            <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm hover:bg-white/30 transition-all duration-300">
              <img
                src="/images1/charusatlogo.png"
                alt="Charusat Logo"
                className="w-[300px] h-auto"
              />
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="flex flex-col">
            <h5 className="text-lg font-semibold mb-6">Quick Links</h5>
            <ul className="space-y-4">
              <li>
                <a
                  className="text-base hover:text-white/80 transition-colors duration-300 flex items-center group"
                  href="https://www.charusat.ac.in/cspit/files/CSPIT_Mandatory%20Disclosure_2023-24.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="transform group-hover:translate-x-2 transition-transform duration-300">
                    Mandatory Disclosure
                  </span>
                </a>
              </li>
              <li>
                <button
                  className="text-base hover:text-white/80 transition-colors duration-300 flex items-center group"
                  onClick={() => openCustomPopup("customPopupNIRF")}
                >
                  <span className="transform group-hover:translate-x-2 transition-transform duration-300">
                    NIRF
                  </span>
                </button>
              </li>
              <li>
                <button
                  className="text-base hover:text-white/80 transition-colors duration-300 flex items-center group"
                  onClick={() => openCustomPopup("customPopupAICTE")}
                >
                  <span className="transform group-hover:translate-x-2 transition-transform duration-300">
                    AICTE EOA
                  </span>
                </button>
              </li>
              <li>
                <button
                  className="hover:text-white/80 transition-colors duration-300 flex items-center group"
                  onClick={() => openCustomPopup("customPopupFeedback")}
                >
                  <span className="transform group-hover:translate-x-2 transition-transform duration-300">
                    Feedback Analysis and Action Taken Report
                  </span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact Us */}
          <div className="flex flex-col">
            <h5 className="text-lg font-semibold mb-6">Contact Us</h5>
            <ul className="space-y-6">
              <li className="flex items-start group">
                <div className="bg-white/20 p-2 rounded-lg mr-4 group-hover:bg-white/30 transition-colors duration-300">
                  <svg
                    className="text-[#0056b3] w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                  >
                    <path d="M18.92 351.2l108.5-46.52c12.78-5.531 27.77-1.801 36.45 8.98l44.09 53.82c69.25-34 125.5-90.31 159.5-159.5l-53.81-44.04c-10.75-8.781-14.41-23.69-8.974-36.47l46.51-108.5c6.094-13.91 21.1-21.52 35.79-18.11l100.8 23.25c14.25 3.25 24.22 15.8 24.22 30.46c0 252.3-205.2 457.5-457.5 457.5c-14.67 0-27.18-9.968-30.45-24.22l-23.25-100.8C-2.571 372.4 5.018 357.2 18.92 351.2z" />
                  </svg>
                </div>
                <span className="text-base group-hover:text-white/80 transition-colors duration-300">
                  +91-2697-265112
                </span>
              </li>
              <li className="flex items-start group">
                <div className="bg-white/20 p-2 rounded-lg mr-4 group-hover:bg-white/30 transition-colors duration-300">
                  <svg
                    className="text-[#0056b3] w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 352c-16.53 0-33.06-5.422-47.16-16.41L0 173.2V400C0 426.5 21.49 448 48 448h416c26.51 0 48-21.49 48-48V173.2l-208.8 162.5C289.1 346.6 272.5 352 256 352zM16.29 145.3l212.2 165.1c16.19 12.6 38.87 12.6 55.06 0l212.2-165.1C505.1 137.3 512 125 512 112C512 85.49 490.5 64 464 64h-416C21.49 64 0 85.49 0 112C0 125 6.01 137.3 16.29 145.3z" />
                  </svg>
                </div>
                <span className="group-hover:text-white/80 transition-colors duration-300">
                  principal.cspit@charusat.ac.in
                </span>
              </li>
              <li className="flex items-start group">
                <div className="bg-white/20 p-2 rounded-lg mr-4 group-hover:bg-white/30 transition-colors duration-300">
                  <svg
                    className="text-[#0056b3] w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 384 512"
                  >
                    <path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z" />
                  </svg>
                </div>
                <div className="group-hover:text-white/80 transition-colors duration-300">
                  Off. Nadiad-Petlad Highway,
                  <br />
                  Changa-388421, Anand, Gujarat, India
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4 - Location Map */}
          <div className="flex flex-col">
            <h5 className="text-lg font-semibold mb-6">Location</h5>
            <div className="relative w-full h-[190px] rounded-xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.41961737984!2d72.81767727475798!3d22.60080043193719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e50c699400001%3A0xb50162f2acb04c04!2sCSPIT%20(CE%2FIT)!5e0!3m2!1sen!2sin!4v1729709960389!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
              />
            </div>
            <p className="text-sm mt-4 text-gray-300">
              Visit us at our campus in Changa.
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <span className="text-sm text-white/90">
              ©Copyright CSPIT- CHARUSAT | All rights reserved
            </span>
            <div className="flex space-x-6">
              <a
                href="https://www.facebook.com/people/Cspit-Charusat/pfbid0XnpDeADufmh2SmRWAq2tWZmSvyJSsgVqRH5YTicU8Y6vo9qGvyCMNTGdkt7qxsLvl/"
                target="_blank"
                className="text-white/80 hover:text-white transition-all duration-300 transform hover:scale-110"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.8 90.69 226.4 209.3 245V327.7h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.3 482.4 504 379.8 504 256z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/school/chandubhai-s.-patel-institute-of-technology/?originalSubdomain=in"
                target="_blank"
                className="text-white/80 hover:text-white transition-all duration-300 transform hover:scale-110"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/cspit_charusat/"
                target="_blank"
                className="text-white/80 hover:text-white transition-all duration-300 transform hover:scale-110"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/thecharusat?lang=en"
                target="_blank"
                className="text-white/80 hover:text-white transition-all duration-300 transform hover:scale-110"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
