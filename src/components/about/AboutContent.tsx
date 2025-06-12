// src/components/about/AboutContent.tsx
import Image from "next/image";

import { achievements } from "@/data/achievements";
import { coreValues } from "@/data/coreValues";
// import { teamMembers } from "@/data/teamMembers";
import { services } from "@/data/services";

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
                {/* Founded in 2021, Ricamado Unique Limited has established itself
                as a premier real estate development company known for crafting
                distinctive properties that blend luxury, functionality, and
                innovation. */}
                Founded in 2021, Ricamado Unique Limited has established itself
                as a premier real estate consultancy and property management
                company, specializing in connecting property owners with buyers,
                and investors across Nigeria&apos;s dynamic real estate market.
              </p>
              <p className="text-gray-700 mb-4">
                {/* What began as a vision to transform the real estate landscape
                has evolved into a trusted brand that delivers exceptional
                living and commercial spaces across key locations. Our
                commitment to quality construction, thoughtful design, and
                client satisfaction has been the cornerstone of our success. */}
                {/* What began as a vision to bridge the gap between property owners
                and prospective clients has evolved into a trusted consultancy
                that delivers comprehensive real estate solutions. Our deep
                market knowledge, extensive network, and client-first approach
                have made us the go-to partner for property owners seeking to
                maximize their investment returns. */}
                {/* What began as a vision to transform how Nigerians discover their
                ideal spaces has evolved into a comprehensive digital platform
                that bridges the gap between property seekers and perfect
                properties. We understand that your environment shapes your
                success—whether it's finding the right home that nurtures your
                family's growth, securing commercial space that accelerates your
                business, or identifying investment properties that build your
                wealth. */}
              </p>
              <p className="text-gray-700">
                {/* Today, Ricamado continues to push boundaries in the real estate
                sector, creating developments that not only meet the present
                needs of our clients but anticipate future trends and lifestyle
                requirements. */}
                {/* Today, Ricamado continues to redefine real estate consultancy,
                providing strategic guidance that not only meets our
                clients&apos; immediate needs but positions them for long-term
                success in Nigeria&apos;s evolving property landscape. */}
                At Ricamado, we start with WHY: We believe everyone deserves to
                live and work in spaces that align with their purpose and
                potential. Our systematic approach begins with deeply
                understanding your unique needs, lifestyle, and goals. Then,
                through our curated property listings, strategic promotion, and
                expert consultation services, we connect you with tailored
                spaces that don&apos;t just meet your requirements but aim at
                elevating lives and businesses.
              </p>
              {/* add rc number */}
              <p className="text-gray-700 mt-4">
                <i>
                  Ricamado Unique Limited is registered with the Corporate
                  Affairs Commission (CAC) of Nigeria, RC Number: 1890684.
                </i>
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
                {/* To create exceptional real estate properties that enhance the
                quality of life for our clients while delivering sustainable
                value to stakeholders, communities, and the environment. */}
                {/* To bridge the gap between property owners and prospective
                clients through expert consultancy, comprehensive market
                knowledge, and personalized service that delivers optimal
                outcomes for all parties. */}
                To transform lives by connecting individuals and businesses with
                purposeful spaces that inspire growth, success, and fulfillment.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700">
                {/* To be recognized as the leading innovative real estate
                developer, setting new standards in design excellence,
                construction quality, and customer service while expanding our
                footprint across strategic locations. */}
                {/* To be Nigeria&apos;s most trusted real estate consultancy, known
                for our innovative approach to property matching, market
                expertise, and commitment to maximizing value for property
                owners and satisfaction for clients. */}
                To be Nigeria&apos;s most trusted real estate partner,
                recognized for our ability to match individuals and businesses
                with spaces that don&apos;t just meet their needs—but elevate
                their potential and shape their success stories.
              </p>
            </div>
          </div>
        </section>

        {/* Services   */}

        {/* NEW SERVICES SECTION - ADDED HERE */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Our Services
          </h2>
          {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"> */}
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                // className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                className="bg-white border border-gray-100 p-5 rounded-lg shadow-sm"
              >
                <div className="text-blue-600 mb-3">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                {/* <p className="text-gray-600 text-sm leading-relaxed"> */}
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
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
