
// src/components/properties/PropertyInsightSection.tsx
import React from 'react';
import { Lightbulb, Globe, Heart } from 'lucide-react';

const PropertyInsightSection: React.FC = () => {
  const insights = [
    {
      icon: Lightbulb,
      title: 'Beyond Transactions',
      description: 'We help you find spaces that amplify your life\'s potential, not just square footage.',
      color: 'text-yellow-500'
    },
    {
      icon: Globe,
      title: 'Sustainable Futures',
      description: 'Every property is an opportunity to contribute to a more sustainable, connected world.',
      color: 'text-green-500'
    },
    {
      icon: Heart,
      title: 'Holistic Living',
      description: 'Your space should nurture your physical, mental, and emotional well-being.',
      color: 'text-red-500'
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Approach to Real Estate
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don&apos;t just match you with a property. We help you discover a space 
            that aligns with your life&apos;s vision and potential.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-all"
            >
              <div className={`mb-6 ${insight.color}`}>
                <insight.icon size={64} className="mx-auto" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                {insight.title}
              </h3>
              <p className="text-gray-600">
                {insight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyInsightSection;