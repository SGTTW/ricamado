export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  description: string;
  features: string[];
  images: { src: string; width: number }[];
  videos?: string[];
  label: "SALE" | "RENT";
  purposeAlignments?: string[];
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
