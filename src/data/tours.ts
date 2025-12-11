// src/data/tours.ts
import type { Tour } from "../types";

export const tours : Tour[] = [
  {
    id: "ayodhya-darshan-2d1n",
    name: "Ayodhya Darshan – 2 Days / 1 Night",
    slug: "ayodhya-darshan-2d1n",
    location: "Ayodhya, Uttar Pradesh",
    durationDays: 2,
    priceFrom: 3999,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1711878202758-f5b0e8077bc0?auto=format&fit=crop&w=900&q=80",
    heroImageUrl:
      "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?auto=format&fit=crop&w=1400&q=80",
    shortDescription:
      "A spiritually uplifting short trip covering Shri Ram Janmabhoomi, Hanuman Garhi, and key ghats of Ayodhya.",
    highlights: [
      "Darshan at Shri Ram Janmabhoomi",
      "Evening aarti at Saryu Ghat",
      "Local sightseeing with experienced guide",
      "Comfortable hotel stay with breakfast",
    ],
    itinerary: [
      "Day 1: Arrival in Ayodhya, check-in, Ram Janmabhoomi visit, Hanuman Garhi, local markets.",
      "Day 2: Early morning Saryu Ghat visit, temple darshans, shopping, departure.",
    ],
    includes: [
      "Hotel accommodation (1 night)",
      "Local transport (AC cab)",
      "Guided sightseeing",
      "Breakfast",
    ],
    excludes: ["Train / flight tickets", "Personal expenses", "Entry fees (if any)"],
  },
  {
    id: "varanasi-ganga-aarti-3d2n",
    name: "Varanasi Ganga Aarti – 3 Days / 2 Nights",
    slug: "varanasi-ganga-aarti-3d2n",
    location: "Varanasi, Uttar Pradesh",
    durationDays: 3,
    priceFrom: 6499,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1603262110263-0f1d24b8aa59?auto=format&fit=crop&w=900&q=80",
    heroImageUrl:
      "https://images.unsplash.com/photo-1583054994298-cc68ddaca862?auto=format&fit=crop&w=1400&q=80",
    shortDescription:
      "Experience the magical Ganga Aarti, Kashi Vishwanath Temple, and sunrise boat ride on the holy Ganga.",
    highlights: [
      "Evening Ganga Aarti at Dashashwamedh Ghat",
      "Darshan at Kashi Vishwanath Temple",
      "Sunrise boat ride",
      "Walk through ancient lanes of Varanasi",
    ],
    itinerary: [
      "Day 1: Arrival and evening Ganga Aarti.",
      "Day 2: Kashi Vishwanath Darshan and city tour.",
      "Day 3: Sunrise boat ride and shopping, departure.",
    ],
    includes: ["Hotel stay (2 nights)", "Local transport", "Guide", "Breakfast"],
    excludes: ["Train / flight", "Meals except breakfast", "Personal expenses"],
  },
  {
    id: "prayagraj-sangam-1d",
    name: "Prayagraj Sangam Snan – Same Day Tour",
    slug: "prayagraj-sangam-1d",
    location: "Prayagraj, Uttar Pradesh",
    durationDays: 1,
    priceFrom: 2499,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=900&q=80",
    heroImageUrl:
      "https://images.unsplash.com/photo-1638280413186-7fcef084c58c?auto=format&fit=crop&w=1400&q=80",
    shortDescription:
      "Holy bath at Triveni Sangam with local temple visits and sightseeing.",
    highlights: [
      "Boat ride to Triveni Sangam",
      "Guided snan arrangements",
      "Visit nearby temples and Anand Bhavan (optional)",
    ],
    itinerary: [
      "Morning departure, arrival at Prayagraj, boat ride and snan at Sangam, local sightseeing, evening return.",
    ],
    includes: ["Transport from starting city (as per plan)", "Boat ride", "Guide"],
    excludes: ["Meals", "Personal puja items", "Personal expenses"],
  },
];
