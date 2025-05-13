// src/components/properties/PropertySearch.tsx
'use client'

import { useState } from 'react'
import { 
  Search, 
  MapPin, 
  Briefcase, 
  Home, 
  Filter 
} from 'lucide-react'

type SearchCategory = 'all' | 'residential' | 'commercial' | 'investment'

export default function PropertySearch() {
  const [searchTerm, setSearchTerm] = useState('')
  const [category, setCategory] = useState<SearchCategory>('all')

  const categories: {
    value: SearchCategory, 
    label: string, 
    icon: React.ElementType
  }[] = [
    { 
      value: 'all', 
      label: 'All Spaces', 
      icon: Search 
    },
    { 
      value: 'residential', 
      label: 'Personal Living', 
      icon: Home 
    },
    { 
      value: 'commercial', 
      label: 'Professional Spaces', 
      icon: Briefcase 
    },
    { 
      value: 'investment', 
      label: 'Investment Opportunities', 
      icon: MapPin 
    }
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search logic
    console.log('Searching:', searchTerm, 'in category:', category)
  }

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6">
      <form onSubmit={handleSearch} className="space-y-4">
        {/* Search Input with Category Selection */}
        <div className="flex items-center border-2 border-gray-200 rounded-lg overflow-hidden">
          <div className="relative flex-grow">
            <input 
              type="text" 
              placeholder="Find spaces aligned with your life's purpose..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-ricamado-500"
            />
            <Search 
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" 
            />
          </div>
          <button 
            type="submit" 
            className="bg-ricamado-500 text-white px-6 py-3 hover:bg-ricamado-600 transition-colors"
          >
            Search
          </button>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center space-x-4">
          {categories.map((cat) => (
            <button
              key={cat.value}
              type="button"
              onClick={() => setCategory(cat.value)}
              className={`
                flex items-center space-x-2 px-4 py-2 rounded-full 
                transition-all duration-300
                ${category === cat.value 
                  ? 'bg-ricamado-500 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }
              `}
            >
              <cat.icon size={18} />
              <span className="text-sm font-medium">{cat.label}</span>
            </button>
          ))}
          <button 
            type="button" 
            className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-200 flex items-center space-x-2"
          >
            <Filter size={18} />
            <span>Advanced Filters</span>
          </button>
        </div>
      </form>
    </div>
  )
}