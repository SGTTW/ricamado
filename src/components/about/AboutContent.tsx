// src/components/about/AboutContent.tsx
import Image from "next/image";

import { achievements } from "@/data/achievements";
// import { coreValues } from "@/data/coreValues";
// import { teamMembers } from "@/data/teamMembers";

export default function AboutContent() {
  return (
    <div className="bg-white shadow rounded-lg p-4 md:p-6 my-12">
      <div className=" mx-auto">
        {/* Company Overview */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <p className="text-gray-700 mb-4">
                Founded in 2021, Ricamado Unique Limited has established itself
                as a premier real estate development company known for crafting
                distinctive properties that blend luxury, functionality, and
                innovation.
              </p>
              <p className="text-gray-700 mb-4">
                What began as a vision to transform the real estate landscape
                has evolved into a trusted brand that delivers exceptional
                living and commercial spaces across key locations. Our
                commitment to quality construction, thoughtful design, and
                client satisfaction has been the cornerstone of our success.
              </p>
              <p className="text-gray-700">
                Today, Ricamado continues to push boundaries in the real estate
                sector, creating developments that not only meet the present
                needs of our clients but anticipate future trends and lifestyle
                requirements.
              </p>
            </div>
            <div className="md:w-1/2 relative h-64 md:h-80 w-full rounded-lg overflow-hidden">
              <Image
                src="/images/about/aboutus.png"
                alt="Ricamado Headquarters"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="mb-12 bg-gray-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700">
                To create exceptional real estate properties that enhance the
                quality of life for our clients while delivering sustainable
                value to stakeholders, communities, and the environment.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700">
                To be recognized as the leading innovative real estate
                developer, setting new standards in design excellence,
                construction quality, and customer service while expanding our
                footprint across strategic locations.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 p-5 rounded-lg shadow-sm"
              >
                <div className="text-blue-600 mb-3">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        {/* <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Leadership Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-blue-600 mb-2">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </section> */}

        {/* Achievements */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Our Achievements
          </h2>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-blue-50 p-5 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {achievement.value}
                </div>
                <p className="text-gray-700">{achievement.label}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

// Data
const coreValues = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Integrity",
    description:
      "We conduct business with honesty, transparency, and ethical standards that build trust with all stakeholders.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    title: "Excellence",
    description:
      "We strive for excellence in every aspect of our developments, from design and construction to customer service.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
        />
      </svg>
    ),
    title: "Innovation",
    description:
      "We embrace innovative approaches and technologies to create future-ready properties that stand out in the market.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Timeliness",
    description:
      "We respect our commitments by delivering projects on schedule without compromising on quality.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: "Sustainability",
    description:
      "We integrate sustainable practices in our developments to minimize environmental impact and maximize long-term value.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: "Community Focus",
    description:
      "We develop properties that contribute positively to communities and enhance the quality of life for residents.",
  },
];
