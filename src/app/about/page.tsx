// src/app/about/page.tsx
import { Metadata } from "next";
import MissionPillars from "@/components/about/MissionPillars";
import TeamValues from "@/components/about/TeamValues";
import CallToAction from "@/components/about/CallToAction";

export const metadata: Metadata = {
  title: "Our Mission | Transforming Spaces, Empowering Lives",
  description:
    "Discover how Ricamado is reimagining real estate as a catalyst for personal and community growth",
};

export default function AboutPage() {
  return (
    
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-gradient-to-br from-ricamado-600 to-blue-800 text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">
            Reimagining Real Estate as a Force for Good
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            At Ricamado, we don&apos;t just sell properties. We create environments
            that inspire growth, foster community, and align with your deepest
            aspirations.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 space-y-16">
        <MissionPillars />
        <TeamValues />
        <CallToAction />
      </main>
    </div>
  );
}


// // src/app/about/page.tsx
// "use client";

// import { COMPANY_INFO } from '@/lib/constants';
// // import { WhySection, HowSection } from '@/components/core';
// // import Values from '@/components/sections/Values';
// import Container from '@/components/common/Container';
// import LearnMoreModal from '@/components/ui/LearnMoreModal';
// import { useState } from 'react';

// export default function AboutPage() {
//   const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false);

//   return (
//     <Container>
//       <div className="py-12">
//         {/* Hero Section */}
//         <section className="text-center mb-16">
//           <h1 className="text-4xl font-bold text-gray-900 mb-4">About {COMPANY_INFO.name}</h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             {COMPANY_INFO.mission}
//           </p>
//         </section>

//         {/* <WhySection /> */}
//         {/* <HowSection /> */}
//         {/* <Values /> */}

//         <div className="mt-12 text-center">
//           <button
//             onClick={() => setIsLearnMoreOpen(true)}
//             className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//           >
//             Learn More About Our Story
//           </button>
//         </div>

//         <LearnMoreModal 
//           isOpen={isLearnMoreOpen} 
//           onClose={() => setIsLearnMoreOpen(false)} 
//         />
//       </div>
//     </Container>
//   );
// }