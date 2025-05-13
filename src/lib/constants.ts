export interface Property {
    id: string;
    title: string;
    location: string;
    price: string;
    description: string;
    features: string[];
    images: string[];
    videos?: string[];
    label: 'SALE' | 'RENT';
  }
  
  export interface Testimonial {
    id: string;
    name: string;
    title: string;
    text: string;
    rating: number;
  }
  
  export interface FAQ {
    question: string;
    answer: string;
  }

  export const COMPANY_INFO = {
    name: "Ricamado",
    mission: "Reimagining real estate as a catalyst for personal and community growth.",
  };