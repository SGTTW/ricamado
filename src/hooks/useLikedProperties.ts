  // src/hooks/useLikedProperties.ts
  "use client";

  import { useState, useEffect } from 'react';

  export const useLikedProperties = () => {
    const [likedProperties, setLikedProperties] = useState<Set<string>>(new Set());
    const [isHydrated, setIsHydrated] = useState(false);

    // Handle hydration and load saved likes
    useEffect(() => {
      setIsHydrated(true);
      
      if (typeof window !== "undefined") {
        const saved = sessionStorage.getItem("likedProperties");
        if (saved) {
          try {
            const parsedLikes = JSON.parse(saved);
            setLikedProperties(new Set(parsedLikes));
          } catch (error) {
            console.error("Error parsing liked properties:", error);
            sessionStorage.removeItem("likedProperties");
          }
        }
      }
    }, []);

    const toggleLike = (propertyId: string) => {
      if (!isHydrated) return;
      
      setLikedProperties((prev) => {
        const newSet = new Set(prev);
        if (newSet.has(propertyId)) {
          newSet.delete(propertyId);
        } else {
          newSet.add(propertyId);
        }
        
        // Save to sessionStorage
        if (typeof window !== "undefined") {
          try {
            sessionStorage.setItem(
              "likedProperties",
              JSON.stringify(Array.from(newSet))
            );
          } catch (error) {
            console.error("Error saving liked properties:", error);
          }
        }
        
        return newSet;
      });
    };

    const isLiked = (propertyId: string) => {
      return likedProperties.has(propertyId);
    };

    return {
      likedProperties,
      toggleLike,
      isLiked,
      isHydrated
    };
  };