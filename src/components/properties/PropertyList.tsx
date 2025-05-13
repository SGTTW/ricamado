    // src/components/properties/PropertyList.tsx
import React, { useState } from 'react';
import PropertyCard from '@/components/properties/PropertyCard';
import { Property } from '@/types/index';
// import Image from 'next/image';

// Mock data - replace with actual data fetching
const mockProperties: Property[] = [
    {
        id: '1',
        title: 'Mindful Living Sanctuary',
        description: 'A space designed to nurture personal growth and well-being',
        location: 'Lagos, Nigeria',
        price: '$450,000',
        features: [
            'Meditation Room',
            'Home Office',
            'Sustainable Design',
            'Community Garden'
        ],
        images: [
            {
                src: '/images/properties/kuje_house_1.jpg',
                width: 800  
            }
        ],
        label: 'SALE',
        purposeAlignments: [
            'Personal Development',
            'Work-Life Balance',
            'Sustainable Living'
        ]
    },
    // Add more properties...
];


const PropertyList: React.FC = () => {
    const [properties] = useState<Property[]>(mockProperties);
  
    return (
      <div className="grid md:grid-cols-3 gap-8">
        {properties.map((property) => (
          <PropertyCard 
            key={property.id} 
            property={property} 
            // Pass additional purpose-driven props
            onPurposeExplore={() => {
              // Future: Open modal/navigation to deeper property insights
              console.log(`Exploring purpose for ${property.title}`);
            }}
          />
        ))}
      </div>
    );
  };
  
  export default PropertyList;