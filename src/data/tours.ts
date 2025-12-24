// src/data/tours.ts
import type { Tour } from "../types";

export const tours: Tour[] = [
  {
    id: "ayodhya-darshan-1n2d",
    name: "Ayodhya Tour Package – 1 Night / 2 Days",
    slug: "ayodhya-darshan-1n2d",
    location: "Ayodhya, Uttar Pradesh",
    durationDays: 2,
    priceFrom: 3999,
    thumbnailUrl:
      "/assets/allImages/hanuman_garhi.jpg",
    heroImageUrl:
      "/assets/allImages/kanak_bhawan.jpg",
    shortDescription:
      "A complete spiritual journey covering all major temples and ghats of the holy city Ayodhya.",
    highlights: [
      "Saryu Ghat Aarti & Ram Ki Paidi",
      "Ram Janmabhoomi & Hanuman Garhi",
      "Kanak Bhawan & Dasharatha Bhawan",
      "Guptar Ghat & Suraj Kund",
    ],
    itinerary: [
      "Day 1: Pickup from Faizabad/Sangam station. Check in to hotel. Visit Suraj Kund, Bharat Kund, Guptar Ghat, Saryu Ghat Aarti, Nageshvaranath Temple and Ram Ki Paidi. Overnight stay.",
      "Day 2: After breakfast, visit Mani Parbat, Hanuman Garhi, Ram Janmabhoomi, Dasharatha Bhawan, Kanak Bhavan, and Ram Janmabhoomi Karyashala. Departure.",
    ],
    includes: [
      "Hotel accommodation (1 night)",
      "Local transport (AC cab)",
      "Welcome Drink",
      "Breakfast",
      "Guide support",
    ],
    excludes: ["Train / flight tickets", "Personal expenses", "Entry fees"],
  },
  {
    id: "varanasi-kashi-darshan",
    name: "Varanasi (Kashi) Tour Package",
    slug: "varanasi-kashi-darshan",
    location: "Varanasi, Uttar Pradesh",
    durationDays: 2,
    priceFrom: 4999,
    thumbnailUrl:
      "/assets/allImages/vishwanath_temple.jpg",
    heroImageUrl:
      "/assets/allImages/varanasi_img2.jpg",
    shortDescription:
      "Explore the spiritual capital of India with visits to Kashi Vishwanath and ancient temples.",
    highlights: [
      "Kashi Vishwanath Temple Darshan",
      "Dashaswamedh Ghat Ganga Aarti",
      "Sarnath (Buddhist Circle)",
      "Kaal Bhairav & Sankat Mochan",
    ],
    itinerary: [
      "Day 1: Kashi Vishwanath Temple, Ganga Aarti at Dasasumedh Ghat, Kaal Bhairav, and local markets.",
      "Day 2: Sarnath visit, Ram Nagar Fort, Sankat Mochan Temple, Bharat Mata Temple, Annapurna Temple, BHU, and Tulsi Manas Mandir.",
    ],
    includes: ["Hotel stay", "Local transport", "Ganga Aarti arrangements", "Breakfast"],
    excludes: ["Boat ride charges", "Personal expenses", "Meals except breakfast"],
  },
  {
    id: "agra-mathura-vrindavan",
    name: "Agra - Mathura - Vrindavan Tour",
    slug: "agra-mathura-vrindavan-2d",
    location: "Agra & Mathura",
    durationDays: 2,
    priceFrom: 6999,
    thumbnailUrl:
      "/assets/allImages/taj_mahal.jpg",
    heroImageUrl:
      "/assets/allImages/dwarikadhessh_temple.jpg",
    shortDescription:
      "Visit the Taj Mahal and the birthplace of Lord Krishna in this heritage circuit.",
    highlights: [
      "Taj Mahal & Agra Fort",
      "Prem Mandir & Banke Bihari",
      "Krishna Janmasthan Temple",
      "Fatehpur Sikri Excursion",
    ],
    itinerary: [
      "Day 1: Pickup from Ayodhya Cantt/Ayodhya station. Proceed to Agra. Visit Taj Mahal, Agra Fort, Jama Masjid, Fatehpur Sikri, Moti Masjid, Sikandra Fort, and Mehtab Bagh. Overnight stay.",
      "Day 2: Proceed to Mathura/Vrindavan. Visit Prem Mandir, Banke Bihari Temple, Dwarkadheesh Temple, ISKCON Vrindavan, and Krishna Janmasthan Temple. Return/Departure.",
    ],
    includes: ["Hotel stay (1 night)", "Intercity cab", "Breakfast", "Sightseeing"],
    excludes: ["Monument entry fees", "Guide charges", "Personal expenses"],
  },
  {
    id: "prayagraj-sangam-darshan",
    name: "Prayagraj Sangam & Temple Tour",
    slug: "prayagraj-sangam-darshan",
    location: "Prayagraj, Uttar Pradesh",
    durationDays: 1,
    priceFrom: 2499,
    thumbnailUrl:
      "/assets/allImages/prayagraj_img2.jpg",
    heroImageUrl:
      "/assets/allImages/prayagraj_img3.jpg",
    shortDescription:
      "Spiritual day trip to Triveni Sangam and sacred temples of Prayagraj.",
    highlights: [
      "Triveni Sangam Snan (Holy Bath)",
      "Lete Hanuman Mandir",
      "Akshayvat & Patalpuri Temple",
      "Anand Bhavan & Azad Park",
    ],
    itinerary: [
      "Morning arrival at Prayagraj. Visit Triveni Sangam, Lete Hanuman Mandir, Patalpuri Temple, Akshayvat, Mankameshwar Temple, Lalita Devi Temple, Bharadwaj Ashram, Nag Vasuki Temple, Saraswati Ghat, Chandrashekhar Azad Park, and Alopi Devi Temple. Evening return.",
    ],
    includes: ["Transport", "Sangam Boat ride support", "Temple visits"],
    excludes: ["Meals", "Boat ride actual charges", "Guide"],
  },
  {
    id: "chitrakoot-full",
    name: "Divine Chitrakoot Tour",
    slug: "chitrakoot-tour",
    location: "Chitrakoot, Uttar Pradesh",
    durationDays: 1,
    priceFrom: 2999,
    thumbnailUrl: "/assets/allImages/chitrakoot.jpg",
    heroImageUrl: "/assets/allImages/chitrakoot.jpg",
    shortDescription: "Explore the sacred forest where Lord Rama spent his exile.",
    highlights: [
      "Ramghat on Mandakini River",
      "Bharat Milap Mandir",
      "Kamadgiri Parikrama",
      "Gupt Godavari Caves",
    ],
    itinerary: [
      "Morning arrival at Chitrakoot. Visit Ramghat, Kamadgiri, Bharat Milap, Janaki Kund, Hanuman Dhara, and Gupt Godavari. Evening Aarti at Ramghat.",
    ],
    includes: ["Private Cab", "Sightseeing", "Expert Driver"],
    excludes: ["Meals", "Personal Expenses"],
  },
];
