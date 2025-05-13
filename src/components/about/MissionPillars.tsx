// src/components/about/MissionPillars.tsx
import { Target, Globe, Heart } from "lucide-react";

const missionPillars = [
  {
    icon: Target,
    title: "Intentional Living",
    description:
      "We believe spaces are more than structures—they're platforms for personal transformation.",
    color: "text-blue-600",
    Image: "/images/mission1.jpg",
  },
  {
    icon: Globe,
    title: "Sustainable Impact",
    description:
      "Our approach considers ecological balance and community well-being in every property.",
    color: "text-green-600",
  },
  {
    icon: Heart,
    title: "Holistic Approach",
    description:
      "We match people with spaces that nurture their physical, mental, and emotional landscapes.",
    color: "text-red-600",
  },
];

export default function MissionPillars() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-12">
        Our Guiding Principles
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {missionPillars.map((pillar, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <pillar.icon
              className={`w-12 h-12 mx-auto mb-4 ${pillar.color}`}
            />
            <h3 className="text-xl font-semibold mb-2">{pillar.title}</h3>
            <p className="text-gray-600">{pillar.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}