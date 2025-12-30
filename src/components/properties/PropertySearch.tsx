// // src/components/properties/PropertySearch.tsx
// "use client";

// import { useState, useEffect, useRef } from "react";
// import { Search, X, MapPin } from "lucide-react";
// import Link from "next/link";
// import { Property } from "@/types";
// import propertiesData from "@/data/propertyData";
// import ContactAgentModal from "./ContactAgentModal";

// interface PropertySearchProps {
//   className?: string;
//   // customStyles?: string; // Optional prop for custom styles
//   variant?: "default" | "hero";
// }

// const PropertySearch = ({
//   className = "",
//   variant = "default",
// }: PropertySearchProps) => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchResults, setSearchResults] = useState<Property[]>([]);
//   const [recentSearches, setRecentSearches] = useState<
//     { id: string; title: string; location: string }[]
//   >([]);
//   const [showResults, setShowResults] = useState(false);
//   const [noResults, setNoResults] = useState(false);
//   const searchRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const savedSearches = localStorage.getItem("recentSearches");
//     if (savedSearches) {
//       setRecentSearches(JSON.parse(savedSearches).slice(0, 3));
//     }
//   }, []);

//   useEffect(() => {
//     if (searchTerm === "") {
//       setShowResults(false);
//     }
//   }, [searchTerm]);

//   // closing dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         searchRef.current &&
//         !searchRef.current.contains(event.target as Node)
//       ) {
//         setShowResults(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     setSearchTerm(value);

//     if (value.trim().length > 1) {
//       const filteredResults = propertiesData.filter(
//         (property) =>
//           property.location.toLowerCase().includes(value.toLowerCase()) ||
//           property.title.toLowerCase().includes(value.toLowerCase()) ||
//           property.features.some((feature) =>
//             feature.toLowerCase().includes(value.toLowerCase())
//           )
//       );
//       setSearchResults(filteredResults);
//       setShowResults(true);
//       setNoResults(filteredResults.length === 0);
//     } else {
//       setSearchResults([]);
//       setShowResults(value.trim().length > 0);
//       setNoResults(false);
//     }
//   };

//   const clearSearch = () => {
//     setSearchTerm("");
//     setSearchResults([]);
//     setShowResults(false);
//     setNoResults(false);
//   };

//   const handleSelectProperty = (id: string) => {
//     const newSearch = propertiesData.find((p) => p.id === id);
//     if (newSearch) {
//       const updatedSearches = [
//         {
//           id: newSearch.id,
//           title: newSearch.title,
//           location: newSearch.location,
//         },
//         ...recentSearches.filter((s) => s.id !== newSearch.id),
//       ].slice(0, 3);
//       setRecentSearches(updatedSearches);
//       localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
//     }
//     clearSearch();
//   };

//   return (
//     <div
//       ref={searchRef}
//       // className="relative max-w-2xl mx-auto bg-white/10   rounded-xl p-2"
//       // className="relative border-2 border-gray-200 rounded-lg shadow-md bg-blue-200  p-2"

//       className={`relative ${
//         variant === "hero"
//           ? "max-w-2xl mx-auto rounded-xl p-2"
//           : "border-2 border-gray-200 rounded-lg shadow-md p-2"
//       } ${className}`}
//     >
//       {/*  Updated input container - simplified for default variant */}
//       <div
//         className={
//           variant === "hero"
//             ? "bg-white/10 backdrop-blur-md rounded-xl p-2"
//             : "p-2"
//         }
//       >
//         <div
//           className={`flex items-center rounded-lg p-2  ${
//             variant === "hero" ? "bg-white/20 h-12" : "bg-white h-6"
//           }`}
//         >
//           <input
//             type="text"
//             placeholder={
//               variant === "hero"
//                 ? "Find spaces that resonate with your life's mission"
//                 : "Search properties by location, title, or features"
//             }
//             className={`w-full focus:outline-none ${
//               variant === "hero"
//                 ? "bg-transparent text-white placeholder-white/70"
//                 : "bg-transparent text-gray-900 placeholder-gray-500"
//             }`}
//             value={searchTerm}
//             onChange={handleSearchChange}
//             onClick={() => {
//               setShowResults((prev) => !prev);
//             }}
//           />

//           <div className="ml-3">
//             {searchTerm ? (
//               <button
//                 onClick={clearSearch}
//                 className={
//                   variant === "hero"
//                     ? "text-white/70 hover:text-white"
//                     : "text-gray-500 hover:text-gray-700"
//                 }
//               >
//                 <X size={20} />
//               </button>
//             ) : (
//               <Search
//                 size={20}
//                 className={
//                   variant === "hero"
//                     ? "text-white/70 mr-1"
//                     : "text-gray-500 mr-1"
//                 }
//               />
//             )}
//           </div>
//         </div>
//       </div>

//       {showResults && (
//         <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 max-h-96 overflow-y-auto z-10">
//           {recentSearches.length > 0 && searchTerm.length === 0 && (
//             <div className="p-4">
//               <p className="text-sm font-medium text-gray-800 mb-2">
//                 Recent Searches
//               </p>
//               <div className="space-y-2">
//                 {recentSearches.map((item) => (
//                   <div
//                     key={item.id}
//                     className="flex items-center p-2 rounded-md hover:bg-gray-50 cursor-pointer"
//                     onClick={() => handleSelectProperty(item.id)}
//                   >
//                     <Search size={16} className="text-gray-500 mr-3" />
//                     <div>
//                       <p className="font-medium text-blue-600">{item.title}</p>
//                       <p className="text-sm text-gray-500">{item.location}</p>
//                      </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {searchResults.length > 0 && (
//             <div className="divide-y divide-gray-200">
//               {searchResults.slice(0, 5).map((property) => (
//                 <Link
//                   key={property.id}
//                   href={`/properties/${property.id}`}
//                   className="flex items-center p-4 hover:bg-gray-50"
//                 >
//                   <div className="w-16 h-16 bg-gray-100 rounded-md overflow-hidden mr-4 flex-shrink-0">
//                     <img
//                       src={property.image}
//                       alt={property.title}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div className="flex-1 min-w-0">
//                     <p className="font-medium truncate text-gray-600 text-start">{property.title}</p>
//                     <div className="flex items-center mt-1">
//                       <MapPin size={14} className="text-gray-500" />
//                       <p className="text-sm text-gray-600 ml-1 truncate">
//                         {property.location}
//                       </p>
//                     </div>
//                     <div className="flex items-center mt-1">
//                       <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-2">
//                         {property.askingPrice}
//                       </span>

//                       <p className="text-sm font-medium">{property.price}</p>

//                     </div>

//                   </div>
//                 </Link>
//               ))}
//             </div>
//           )}

//           {noResults && (
//             <div className="p-6 text-center">
//               <p className="font-medium text-gray-800 mb-2">
//                 No properties found for &quot;{searchTerm}&quot;
//               </p>
//               <p className="text-gray-600 text-sm mb-4">
//                 We couldn&apos;t find any matches. Would you like us to help you
//                 find what you&apos;re looking for?
//               </p>
//               <ContactAgentModal propertyTitle={searchTerm}>
//                 <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-md">
//                   Tell Us What You Need
//                 </button>
//               </ContactAgentModal>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default PropertySearch;

// --------------------------

// // src/components/properties/PropertySearch.tsx
// "use client";
// import { useState, useEffect, useRef } from "react";
// import { Search, X, MapPin } from "lucide-react";
// import Link from "next/link";
// import { Property } from "@/types";
// import {
//   InstantSearch,
//   SearchBox,
//   Hits,
//   useInstantSearch,
// } from "react-instantsearch";
// import { searchClient } from "@/lib/typesenseClient";
// import ContactAgentModal from "./ContactAgentModal";

// // Custom Hits component to match your UI
// function CustomHits({
//   hitComponent: HitComponent,
// }: {
//   hitComponent: React.ComponentType<{ hit: Property }>;
// }) {
//   const { results } = useInstantSearch();

//   if (results.query && results.nbHits === 0) {
//     return (
//       <div className="p-6 text-center">
//         <p className="font-medium text-gray-800 mb-2">
//           No properties found for &quot;{results.query}&quot;
//         </p>
//         <p className="text-gray-600 text-sm mb-4">
//           We couldn&apos;t find any matches. Would you like us to help you find
//           what you&apos;re looking for?
//         </p>
//         <ContactAgentModal propertyTitle={results.query}>
//           <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-md">
//             Tell Us What You Need
//           </button>
//         </ContactAgentModal>
//       </div>
//     );
//   }

//   return <Hits hitComponent={HitComponent} />;
// }

// // Custom Hit component to render each property
// function PropertyHit({ hit }: { hit: Property }) {
//   return (
//     <Link
//       href={`/properties/${hit.id}`}
//       className="flex items-center p-4 hover:bg-gray-50"
//     >
//       <div className="w-16 h-16 bg-gray-100 rounded-md overflow-hidden mr-4 flex-shrink-0">
//         <img
//           src={hit.image}
//           alt={hit.title}
//           className="w-full h-full object-cover"
//         />
//       </div>
//       <div className="flex-1 min-w-0">
//         <p className="font-medium truncate">{hit.title}</p>
//         <div className="flex items-center mt-1">
//           <MapPin size={14} className="text-gray-500" />
//           <p className="text-sm text-gray-600 ml-1 truncate">{hit.location}</p>
//         </div>
//         <div className="flex items-center mt-1">
//           <p className="text-sm font-medium">{hit.price}</p>
//           {/* <p className="text-sm font-medium">{hit.location} • {hit.price}</p> */}
//         </div>
//       </div>
//     </Link>
//   );
// }

// interface PropertySearchProps {
//   className?: string;
//   variant?: "default" | "hero";
// }

// const PropertySearch = ({
//   className = "",
//   variant = "default",
// }: PropertySearchProps) => {
//   const searchRef = useRef<HTMLDivElement>(null);
//   // const PropertySearch = ({
//   //   className = "",
//   //   variant = "default",
//   // }: PropertySearchProps) => {
//   //   const searchRef = useRef<HTMLDivElement>(null);

//   return (
//     <div
//       ref={searchRef}
//       className={`relative ${
//         variant === "hero"
//           ? "max-w-2xl mx-auto rounded-xl p-2"
//           : "border-2 border-gray-200 rounded-lg shadow-md p-2"
//       } ${className}`}
//     >
//       <div
//         className={
//           variant === "hero"
//             ? "bg-white/10 backdrop-blur-md rounded-xl p-2"
//             : "p-2"
//         }
//       >
//         <InstantSearch
//           searchClient={searchClient}
//           indexName="properties"
//           future={{ preserveSharedStateOnUnmount: true }}
//         >
//           <SearchBox
//             placeholder={
//               variant === "hero"
//                 ? "Find spaces that resonate with your life's mission"
//                 : "Search properties by location, title, or features"
//             }
//             classNames={{
//               root: "w-full",
//               form: `flex items-center rounded-lg p-2 ${
//                 variant === "hero" ? "bg-white/20 h-12" : "bg-white h-6"
//               }`,
//               input: `w-full focus:outline-none ${
//                 variant === "hero"
//                   ? "bg-transparent text-white placeholder-white/70"
//                   : "bg-transparent text-gray-900 placeholder-gray-500"
//               }`,
//               submitIcon:
//                 variant === "hero"
//                   ? "text-white/70 mr-1"
//                   : "text-gray-500 mr-1",
//               resetIcon:
//                 variant === "hero"
//                   ? "text-white/70 hover:text-white"
//                   : "text-gray-500 hover:text-gray-700",
//             }}
//             submitIconComponent={(props) => (
//               <Search size={20} className={props.classNames?.root ?? ""} />
//             )}
//             resetIconComponent={(props) => (
//               <X size={20} className={props.classNames?.root ?? ""} />
//             )}
//           />

//           <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 max-h-96 overflow-y-auto z-10">
//             <CustomHits hitComponent={PropertyHit} />
//           </div>
//         </InstantSearch>
//       </div>
//     </div>
//   );
// };

// export default PropertySearch;

// --------------------------------------------

// src/components/properties/PropertySearch.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { Search, X, MapPin } from "lucide-react";
import Link from "next/link";
import { Property } from "@/types";
import { typesenseClient } from "@/lib/typesenseClient";
import ContactAgentModal from "./ContactAgentModal";
 
 

interface PropertySearchProps {
  className?: string;
  variant?: "default" | "hero";
}

interface TypesenseHit {
  document: Property;
  highlights?: Array<{
    field: string;
    matched_tokens: string[];
    snippet: string;
  }>;
}

const PropertySearch = ({
  className = "",
  variant = "default",
}: PropertySearchProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Property[]>([]);
  const [highlightedResults, setHighlightedResults] = useState<TypesenseHit[]>(
    []
  );
  const [recentSearches, setRecentSearches] = useState<
    { id: string; title: string; location: string }[]
  >([]);
  const [showResults, setShowResults] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedSearches = localStorage.getItem("recentSearches");
    if (savedSearches) {
      setRecentSearches(JSON.parse(savedSearches).slice(0, 3));
    }
  }, []);

  useEffect(() => {
    if (searchTerm === "") {
      setShowResults(false);
    }
  }, [searchTerm]);

  // closing dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  // giving some linting errors
  // const highlightText = (text: string, highlight?: string) => {
  //   void highlightText;
  //   if (!highlight) return text;

  //   const parts = text.split(new RegExp(`(${highlight})`, "gi"));
  //   return parts.map((part, index) =>
  //     part.toLowerCase() === highlight.toLowerCase() ? (
  //       <mark key={index} className="bg-yellow-200 text-gray-900 font-medium">
  //         {part}
  //       </mark>
  //     ) : (
  //       part
  //     )
  //   );
  // };

  const handleSearchChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim().length > 1) {
      setIsLoading(true);
      try {
        const searchParameters = {
          q: value,
          query_by: "title,location,features,description,tags",
          highlight_fields: "title,location,features,description,tags",
          highlight_start_tag: "<mark>",
          highlight_end_tag: "</mark>",
          num_typos: 2,
          drop_tokens_threshold: 1,
          use_cache: true,
          per_page: 5,
        };

        const searchResults = await typesenseClient
          .collections("properties")
          .documents()
          .search(searchParameters);

        const hits = searchResults.hits as TypesenseHit[];
        const properties = hits.map((hit) => hit.document);

        setSearchResults(properties);
        setHighlightedResults(hits);
        setShowResults(true);
        setNoResults(properties.length === 0);
      } catch (error) {
        console.error("Search error:", error);
        setSearchResults([]);
        setHighlightedResults([]);
        setShowResults(true);
        setNoResults(true);
      } finally {
        setIsLoading(false);
      }
    } else {
      setSearchResults([]);
      setHighlightedResults([]);
      setShowResults(value.trim().length > 0);
      setNoResults(false);
    }
  };

  const clearSearch = () => {
    setSearchTerm("");
    setSearchResults([]);
    setHighlightedResults([]);
    setShowResults(false);
    setNoResults(false);
  };

  const handleSelectProperty = (id: string) => {
    const newSearch = searchResults.find((p) => p.id === id);
    if (newSearch) {
      const updatedSearches = [
        {
          id: newSearch.id,
          title: newSearch.title,
          location: newSearch.location,
        },
        ...recentSearches.filter((s) => s.id !== newSearch.id),
      ].slice(0, 3);
      setRecentSearches(updatedSearches);
      localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
    }
    clearSearch();
  };

  const getHighlightedTitle = (property: Property) => {
    const hit = highlightedResults.find((h) => h.document.id === property.id);
    const titleHighlight = hit?.highlights?.find((h) => h.field === "title");

    if (titleHighlight) {
      return (
        <span
          dangerouslySetInnerHTML={{ __html: titleHighlight.snippet }}
          // className="[&_mark]:bg-yellow-300 [&_mark]:text-gray-900 [&_mark]:font-semibold"
        />
      );
    }
    return property.title;
  };

  const getHighlightedLocation = (property: Property) => {
    const hit = highlightedResults.find((h) => h.document.id === property.id);
    const locationHighlight = hit?.highlights?.find(
      (h) => h.field === "location"
    );

    if (locationHighlight) {
      return (
        <span
          dangerouslySetInnerHTML={{ __html: locationHighlight.snippet }}
          // className="[&_mark]:bg-yellow-300 [&_mark]:text-gray-900 [&_mark]:font-semibold"
        />
      );
    }
    return property.location;
  };

  return (
    <div
      ref={searchRef}
      className={`relative ${
        variant === "hero"
          ? "max-w-2xl mx-auto rounded-xl p-2"
          : "border-2 border-gray-200 rounded-lg shadow-md p-2"
      } ${className}`}
    >
      {/*  Updated input container - simplified for default variant */}
      <div
        className={
          variant === "hero"
            ? "bg-white/10 backdrop-blur-md rounded-xl p-2"
            : "p-2"
        }
      >
        <div
          className={`flex items-center rounded-lg p-2  ${
            variant === "hero" ? "bg-white/20 h-12" : "bg-white h-6"
          }`}
        >
          <input
            type="text"
            placeholder={
              variant === "hero"
                ? "Find spaces that resonate with your life's mission"
                : "Search properties by location, title, or features"
            }
            className={`w-full focus:outline-none ${
              variant === "hero"
                ? "bg-transparent text-white placeholder-white/70"
                : "bg-transparent text-gray-900 placeholder-gray-500"
            }`}
            value={searchTerm}
            onChange={handleSearchChange}
            onClick={() => {
              setShowResults((prev) => !prev);
            }}
          />

          <div className="ml-3">
            {searchTerm ? (
              <button
                onClick={clearSearch}
                className={
                  variant === "hero"
                    ? "text-white/70 hover:text-white"
                    : "text-gray-500 hover:text-gray-700"
                }
              >
                <X size={20} />
              </button>
            ) : (
              <Search
                size={20}
                className={
                  variant === "hero"
                    ? "text-white/70 mr-1"
                    : "text-gray-500 mr-1"
                }
              />
            )}
          </div>
        </div>
      </div>

      {showResults && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 max-h-96 overflow-y-auto z-10">
          {recentSearches.length > 0 && searchTerm.length === 0 && (
            <div className="p-4">
              <p className="text-sm font-medium text-gray-800 mb-2">
                Recent Searches
              </p>
              <div className="space-y-2">
                {recentSearches.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center p-2 rounded-md hover:bg-gray-50 cursor-pointer"
                    onClick={() => handleSelectProperty(item.id)}
                  >
                    <Search size={16} className="text-gray-500 mr-3" />
                    <div>
                      <p className="font-medium text-blue-600">{item.title}</p>
                      <p className="text-sm text-gray-500">{item.location}</p>
                      {/* <p className="text-sm text-gray-500">{item.price}</p> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {isLoading && (
            <div className="p-4 text-center">
              <p className="text-gray-500">Searching...</p>
            </div>
          )}

          {searchResults.length > 0 && !isLoading && (
            <div className="divide-y divide-gray-200">
              {searchResults.slice(0, 5).map((property) => (
                <Link
                  key={property.id}
                  href={`/properties/${property.id}`}
                  className="flex items-center p-4 hover:bg-gray-50"
                  onClick={() => handleSelectProperty(property.id)}
                >
                  <div className="w-16 h-16 bg-gray-100 rounded-md overflow-hidden mr-4 flex-shrink-0">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate text-gray-600 text-start">
                      {getHighlightedTitle(property)}
                    </p>
                    <div className="flex items-center mt-1">
                      <MapPin size={14} className="text-gray-500" />
                      <p className="text-sm text-gray-600 ml-1 truncate">
                        {getHighlightedLocation(property)}
                      </p>
                    </div>
                    <div className="flex items-center mt-1">
                      <p className="text-sm font-medium text-gray-500">{property.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {noResults && !isLoading && (
            <div className="p-6 text-center">
              <p className="font-medium text-gray-800 mb-2">
                No properties found for &quot;{searchTerm}&quot;
              </p>
              <p className="text-gray-600 text-sm mb-4">
                We couldn&apos;t find any matches. Would you like us to help you
                find what you&apos;re looking for?
              </p>
              <ContactAgentModal propertyTitle={searchTerm}>
                <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-md">
                  Tell Us What You Need
                </button>
              </ContactAgentModal>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PropertySearch;
