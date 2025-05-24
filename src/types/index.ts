// src/types/index.ts
export interface Property {
  askingPrice?: string[];
  description: string;
  documents?: string[];
  features: string[];
  id: string;
  image: string;
  images: string[];
  label: string;
  landSize?: string[];
  location: string;
  price: string;
  purposeAlignments?: string[];
  reasonForSale?: string;
  title: string;
  videos?: string[];
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
