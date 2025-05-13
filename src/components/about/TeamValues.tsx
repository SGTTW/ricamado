// src/components/about/TeamValues.tsx
import { Award, Users, TreePine } from "lucide-react";

const teamValues = [
  {
    icon: Award,
    title: "Integrity First",
    description: "Transparency and honesty in every interaction",
  },
  {
    icon: Users,
    title: "Community Centered",
    description: "Empowering local ecosystems through thoughtful real estate",
  },
  {
    icon: TreePine,
    title: "Regenerative Vision",
    description: "Creating positive environmental and social impact",
  },
];

export default function TeamValues() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-12">
        Our Core Values
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {teamValues.map((value, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <value.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
            <p className="text-gray-600">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}