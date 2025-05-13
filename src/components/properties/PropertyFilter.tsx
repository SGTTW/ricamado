
// src/components/properties/PropertyFilter.tsx
import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';

// Purpose-Driven Filter Options
const purposeOptions = [
  'Personal Growth',
  'Family Well-being',
  'Work-Life Balance',
  'Sustainable Living',
  'Community Connection'
];

const locationOptions = [
  'Lagos',
  'Abuja',
  'Port Harcourt',
  'Ibadan',
  'Nationwide'
];

const PropertyFilter: React.FC = () => {
  const [selectedPurposes, setSelectedPurposes] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handlePurposeToggle = (purpose: string) => {
    setSelectedPurposes(prev => 
      prev.includes(purpose)
        ? prev.filter(p => p !== purpose)
        : [...prev, purpose]
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center mb-6">
        <Search className="text-gray-500 mr-3" />
        <input 
          type="text"
          placeholder="Search by property name, feature, or purpose"
          className="w-full text-gray-800 focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Purpose-Driven Filtering */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-700 mb-3">
          What&apos;s Your Life Vision?
        </h4>
        <div className="flex flex-wrap gap-2">
          {purposeOptions.map((purpose) => (
            <button
              key={purpose}
              onClick={() => handlePurposeToggle(purpose)}
              className={`
                px-3 py-1 rounded-full text-sm transition-colors
                ${selectedPurposes.includes(purpose) 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-blue-100'
                }
              `}
            >
              {purpose}
            </button>
          ))}
        </div>
      </div>

      {/* Location Filtering */}
      <div>
        <h4 className="font-semibold text-gray-700 mb-3">
          Choose Your Community
        </h4>
        <select 
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Locations</option>
          {locationOptions.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>

      {/* Search Button */}
      <button 
        className="w-full mt-6 bg-blue-600 text-white py-3 rounded-full 
        hover:bg-blue-700 transition-colors flex items-center justify-center"
      >
        <Filter className="mr-2" />
        Find Your Purposeful Space
      </button>
    </div>
  );
};

export default PropertyFilter;