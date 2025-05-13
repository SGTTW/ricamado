// // src/app/properties/page.tsx
// import { Metadata } from 'next';
// // import PropertyList from '@/components/properties/PropertyList';
// // import PropertyFilter from '@/components/properties/PropertyFilter';
// // import PropertyInsightSection from '@/components/properties/PropertyInsightSection';

// export const metadata: Metadata = {
//   title: 'Discover Property Spaces | Ricamado Properties',
//   description: 'Explore properties that align with your life\'s vision and potential. More than listings, we offer pathways to transformation.',
// };

// export default function PropertiesPage() {
//   return (
//     <main className="bg-gray-50 min-h-screen">
//       {/* Purpose-Driven Hero */}
//       <section className="bg-blue-900 text-white py-16 text-center">
//         <div className="container mx-auto px-4">
//           <h1 className="text-4xl md:text-5xl font-bold mb-6">
//             Your Space, Your Potential
//           </h1>
//           <p className="text-xl max-w-2xl mx-auto mb-8">
//             Each property is a unique opportunity for growth, connection, and personal transformation.
//           </p>

//           {/* Integrated Search and Filter */}
//           <div className="max-w-4xl mx-auto">
//             {/* <PropertyFilter /> */}
//           </div>
//         </div>
//       </section>

//       {/* Property Listings with Intentional Approach */}
//       <section className="container mx-auto px-4 py-16">
//         {/* <PropertyList /> */}
//       </section>

//       {/* Insight Section */}
//       {/* <PropertyInsightSection /> */}
//     </main>
//   );
// }

// src/app/properties/page.tsx

"use client";

// import { Metadata } from "next";

// import PropertyFilter from "@/components/properties/PropertyFilter";
// import PropertyGrid from '@/components/properties/PropertyGrid'
import PropertyList from "@/components/properties/PropertyList";
import PropertySearch from "@/components/properties/PropertySearch";
import PropertyInsightSection from "@/components/properties/PropertyInsightSection";

// export const metadata: Metadata = {
//   title: "Find Your Purposeful Space",
//   description:
//     "Discover properties that align with your life's mission and values",
// };

export default function PropertiesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Property Search Header */}
        <section className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Your Journey, Your Space
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            More than properties. We help you find spaces that reflect and
            support your life&apos;s purpose.
          </p>

          {/* Advanced Property Search */}
          <div className="mt-8">
            <PropertySearch />
          </div>
        </section>

        {/* Property Filtering and Grid */}
        {/* <div className="grid md:grid-cols-12 gap-6"> */}
          {/* Filtering Sidebar */}
          {/* <div className="md:col-span-3"> */}
            {" "}
            {/* <PropertyFilter />{" "} */}
          {/* </div> */}

          {/* Property Listings with Intentional Approach */}
          <section className="container mx-auto px-4 py-16">
            <PropertyList />
          </section>

          {/* Property Grid */}
     {/*      <div className="md:col-span-9"><PropertyGrid /></div> */}
        {/* </div> */}

        {/* Purpose-Driven Insights */}
        <section className="bg-white shadow-lg rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Beyond the Listing
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Lifestyle Alignment",
                description:
                  "Properties curated to match your personal and professional aspirations.",
              },
              {
                title: "Community Impact",
                description:
                  "Spaces that contribute positively to local neighborhoods and ecosystems.",
              },
              {
                title: "Future-Focused",
                description:
                  "Properties designed with sustainability, technology, and holistic living in mind.",
              },
            ].map((insight, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-lg hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-bold mb-3 text-ricamado-600">
                  {insight.title}
                </h3>
                <p className="text-gray-700">{insight.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Insight Section */}
        <PropertyInsightSection />
      </div>
    </div>
  );
}
