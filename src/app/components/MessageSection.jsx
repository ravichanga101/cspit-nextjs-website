"use client";
import { Section, Heading } from "./ui";

const MessageSection = () => {
  return (
    <Section
      id="dean_s_message"
      background="white"
      className="scroll-mt-16 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#0056b3]/10 to-transparent rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#0056b3]/10 to-transparent rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      </div>

      <div className="space-y-24">
        {/* Dean's Message */}
        <div className="relative">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <Heading as="h2" variant="h2" color="primary">
                Message from Dean&apos;s Desk
              </Heading>
              <div className="h-1 w-32 mx-auto bg-gradient-to-r from-[#0056b3] to-[#0056b3]/60 rounded-full"></div>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-12">
              <div className="w-full md:w-3/4 space-y-6">
                <div className="relative">
                  <span className="absolute -left-6 top-0 text-8xl text-[#0056b3]/10 font-serif">
                    "
                  </span>
                  <p className="text-gray-700 leading-relaxed text-lg pl-8">
                    Welcome to CSPIT, CHARUSAT! As Dean, I&apos;m thrilled to
                    lead our community of scholars, learners, and innovators.
                    Together, let&apos;s embrace excellence, diversity, and
                    collaboration. Students, seize every opportunity to grow and
                    make a difference. Faculty, your dedication shapes futures.
                    Staff, your efforts keep our institute thriving. Let&apos;s
                    foster an inclusive environment where every voice matters.
                    As we embark on this journey, let&apos;s uphold the values
                    of integrity and empathy. I&apos;m excited to witness our
                    collective achievements.
                  </p>
                  <span className="absolute -right-6 bottom-0 text-8xl text-[#0056b3]/10 font-serif rotate-180">
                    "
                  </span>
                </div>
                <div className="font-semibold text-gray-900 pl-8 space-y-1">
                  <p className="text-lg">Dr. Vijaykumar Chaudhary</p>
                  <p className="text-[#0056b3]">Dean, FTE</p>
                </div>
              </div>
              <div className="w-full md:w-1/4 md:sticky md:top-24">
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl shadow-lg bg-gradient-to-b from-[#0056b3]/5 p-2">
                  <div className="relative h-full w-full overflow-hidden rounded-lg">
                    <img
                      loading="lazy"
                      src="https://www.charusat.ac.in/assets/images/People/VijayChaudhary.webp"
                      alt="Dr. Vijaykumar Chaudhary"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative divider */}
        <div className="relative">
          <hr className="border-gray-200" />
          <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-10 bg-white flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-[#0056b3] animate-pulse"></div>
          </div>
        </div>

        {/* Principal's Message */}
        <div className="relative">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <Heading as="h2" variant="h2" color="primary">
                Message from Principal&apos;s Desk
              </Heading>
              <div className="h-1 w-32 mx-auto bg-gradient-to-r from-[#0056b3] to-[#0056b3]/60 rounded-full"></div>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-12">
              <div className="w-full md:w-3/4 space-y-6">
                <div className="relative">
                  <span className="absolute -left-6 top-0 text-8xl text-[#0056b3]/10 font-serif">
                    "
                  </span>
                  <p className="text-gray-700 leading-relaxed text-lg pl-8">
                    Welcome to CSPIT, where we foster excellence and innovation
                    in engineering education. To our students: Embrace
                    opportunities, challenge yourself, and cultivate a passion
                    for lifelong learning. Faculty: Your dedication molds future
                    leaders; continue to inspire and innovate. Staff: Your
                    commitment ensures our success; thank you for your
                    invaluable contributions. Together, let&apos;s uphold
                    integrity, excellence, and inclusivity. As Principal,
                    I&apos;m excited about the journey ahead. Let&apos;s
                    collaborate, learn, and grow as we shape the future of
                    engineering together.
                  </p>
                  <span className="absolute -right-6 bottom-0 text-8xl text-[#0056b3]/10 font-serif rotate-180">
                    "
                  </span>
                </div>
                <div className="font-semibold text-gray-900 pl-8 space-y-1">
                  <p className="text-lg">Dr. Trushit Upadhyaya</p>
                  <p className="text-[#0056b3]">Principal, CSPIT</p>
                </div>
              </div>
              <div className="w-full md:w-1/4 md:sticky md:top-24">
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl shadow-lg bg-gradient-to-b from-[#0056b3]/5 p-2">
                  <div className="relative h-full w-full overflow-hidden rounded-lg">
                    <img
                      loading="lazy"
                      src="/images/TKU.png"
                      alt="Dr. Trushit Upadhyaya"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default MessageSection;
