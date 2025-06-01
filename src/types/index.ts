// src/types/index.ts

// export type PropertyTag = "for-sale" | "for-rent" | "sold";

export type PropertyTag =
  | "Sustainable"
  | "Community-Focused"
  | "Wellness"
  | "Just In"
  | "Sale"
  | "Rent"
  | "Luxury"
  | "Affordable"
  | "Investment"
  | "Innovation";

export interface Property {
  askingPrice?: string[];
  description: string;
  documents?: string[];
  features: string[];
  id: string;
  image: string;
  images: string[];
  label: string;
  landSize?: string;
  location: string;
  price: string;
  amenities?: string[];
  reasonForSale?: string;
  title: string;
  videos?: string[];
  tags: PropertyTag[];
  
}

export interface Testimonial {
  // id: string;
  name: string;
  title: string;
  text: string;
  // rating: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export const COMPANY_INFO = {
  name: "Ricamado",
  mission:
    "Reimagining real estate as a catalyst for personal and community growth.",
};
