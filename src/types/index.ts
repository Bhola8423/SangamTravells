// src/types/index.ts

export interface Tour {
  id: string;
  name: string;
  slug?: string;
  location: string;
  durationDays: number;
  priceFrom: number;
  thumbnailUrl: string;
  heroImageUrl: string;
  shortDescription: string;
  highlights: string[];
  itinerary: string[];
  includes: string[];
  excludes: string[];
  // optional fields you might add later
  gallery?: string[]; // extra images
  tags?: string[]; // e.g. ["pilgrimage", "family"]
}

export interface Testimonial {
  id: string;
  name: string;
  location?: string;
  message: string;
  photoUrl?: string;
  date?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface Booking {
  id: string;
  tourId: string;
  tourName?: string;
  name: string;
  phone: string;
  email?: string;
  travelers: number;
  date: string; // ISO date string (yyyy-mm-dd)
  notes?: string;
  createdAt: string; // ISO timestamp
  status?: "pending" | "confirmed" | "cancelled";
}

export interface ContactMessage {
  id?: string;
  name: string;
  email?: string;
  phone?: string;
  message?: string;
  createdAt?: string; // ISO timestamp
}
