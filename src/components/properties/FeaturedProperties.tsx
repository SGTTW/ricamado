// src/components/properties/FeaturedProperties.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, MapPin, ArrowRight } from 'lucide-react';
 

// Define types for properties
type PropertyTag = 'Sustainable' | 'Community-Focused' | 'Wellness' | 'Innovation';

interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  image: string;
  tags: PropertyTag[];
  purposeAlignment: string;
}

const featuredProperties: Property[] = [
  {
    id: 'eco-loft-1',
    title: 'Eco-Conscious Urban Loft',
    location: 'Lagos, Nigeria',
    price: 450000,
    image: '/images/properties/eco-loft.jpg',
    tags: ['Sustainable', 'Wellness'],
    purposeAlignment: 'Designed for professionals committed to environmental stewardship and personal well-being.'
  },
  {
    id: 'community-haven-2',
    title: 'Community-Integrated Residence',
    location: 'Abuja, Nigeria',
    price: 350000,
    image: '/images/properties/community-home.jpg',
    tags: ['Community-Focused', 'Innovation'],
    purposeAlignment: 'A living space that fosters connection, collaborative learning, and shared growth.'
  },
  {
    id: 'wellness-retreat-3',
    title: 'Holistic Wellness Sanctuary',
    location: 'Port Harcourt, Nigeria',
    price: 500000,
    image: '/images/properties/wellness-home.jpg',
    tags: ['Wellness', 'Sustainable'],
    purposeAlignment: 'A transformative environment supporting mental, physical, and spiritual well-being.'
  }
];

const FeaturedProperties = () => {
  const [activeProperty, setActiveProperty] = useState<string | null>(null);

  const tagColors: Record<PropertyTag, string> = {
    'Sustainable': 'bg-green-100 text-green-800',
    'Community-Focused': 'bg-blue-100 text-blue-800',
    'Wellness': 'bg-purple-100 text-purple-800',
    'Innovation': 'bg-orange-100 text-orange-800'
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Purposeful Living Spaces
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover properties that are more than structures—they&apos;re catalysts for personal and collective transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <motion.div
              key={property.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              onHoverStart={() => setActiveProperty(property.id)}
              onHoverEnd={() => setActiveProperty(null)}
              whileHover={{ scale: 1.05 }}
            >
              {/* Property Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.title} 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 flex space-x-2">
                  {property.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className={`px-2 py-1 text-xs rounded-full ${tagColors[tag]}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Property Details */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {property.title}
                  </h3>
                  <Heart 
                    className="text-gray-400 hover:text-red-500 cursor-pointer" 
                    size={24} 
                  />
                </div>

                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin size={18} className="mr-2" />
                  <span>{property.location}</span>
                </div>

                {activeProperty === property.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-4"
                  >
                    <p className="text-sm text-gray-500 italic">
                      {property.purposeAlignment}
                    </p>
                  </motion.div>
                )}

                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-blue-600">
                    ${property.price.toLocaleString()}
                  </span>
                  <Link 
                    href={`/properties/${property.id}`}
                    className="flex items-center text-blue-600 hover:text-blue-800 transition"
                  >
                    Details <ArrowRight className="ml-2" size={18} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;