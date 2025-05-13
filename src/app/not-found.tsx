// src/app/not-found.tsx
 


import Link from "next/link";
 
import { HomeIcon, SearchIcon } from "lucide-react";

export default function NotFoundPage() {
 
  return (
    <div className="min-h-screen flex flex-col items-center overflow-hidden justify-center bg-gradient-to-br from-white-50 to-blue-50 p-4">
      <div className="text-center max-w-md">
        <h1 className="text-8xl font-bold text-blue-500 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          The page you&apos;re looking for seems to have wandered off its path. Let&apos;s
          help you find your way back.
        </p>

        <div className="flex justify-center space-x-4">
          <Link
            href="/"
            className="flex items-center bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            <HomeIcon className="mr-2" />
            Go Home
          </Link>
          <Link
            href="/properties"
            className="flex items-center bg-gray-100 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <SearchIcon className="mr-2" />
            Browse Properties
          </Link>
        </div>
      </div>
    </div>
  );
}

// // src/app/not-found.tsx
// import Link from 'next/link';
// import { HomeIcon, SearchIcon } from 'lucide-react';

// export default function NotFound() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex items-center justify-center px-4">
//       <div className="max-w-md w-full text-center">
//         <div className="mb-8">
//           <h1 className="text-6xl font-bold text-blue-900 mb-4">404</h1>
//           <p className="text-2xl font-semibold text-gray-700 mb-4">
//             Oops! Page Not Found
//           </p>
//           <p className="text-gray-600 mb-8">
//             The page you're looking for seems to have taken an unexpected detour.
//             Let's get you back on track.
//           </p>
//         </div>

//         <div className="flex justify-center space-x-4">
//           <Link
//             href="/"
//             className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
//           >
//             <HomeIcon className="mr-2" />
//             Go Home
//           </Link>
//           <Link
//             href="/properties"
//             className="flex items-center bg-gray-100 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors"
//           >
//             <SearchIcon className="mr-2" />
//             Browse Properties
//           </Link>
//         </div>

//         {/* Playful illustration or animation could be added here */}
//         <div className="mt-12 opacity-50">
//           <p className="text-sm text-gray-500">
//             Sometimes, even the best navigators lose their way.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
