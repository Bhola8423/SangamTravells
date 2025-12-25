import PackageCard from "./PackageCard";

const packages = [
  {
    id: 1,
    title: "Ayodhya to Varanasi to Ayodhya Pack",
    price: 1499,
    inclusions: [
      "2 Times Breakfast",
      "Tea, Samosa, Water Bottle",
      "Laddu & Banana Per Head",
    ],
    itinerary: [
      "Day 1: Pickup & Saryu Ghat Visit + Suraj Kund + Temple Tour.",
      "Day 2: Hotel Breakfast + Ram Janmabhoomi + Drop by evening.",
    ],
    image: "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    title: "Ayodhya to Prayagraj to Mangarh to Ayodhya Pack",
    price: 1499,
    inclusions: [
      "2 Breakfast Included",
      "Tea, Samosa, Water Bottle",
      "Laddu, Banana Included",
    ],
    itinerary: [
      "Day 1: Pickup from Ayodhya + Prayagraj city tour.",
      "Day 2: Explore Mangarh + Return Ayodhya.",
    ],
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "Lucknow-Ayodhya-Varanasi-Prayagraj Loop (3N/5D)",
    price: 9999,
    inclusions: ["Hotel + Travel + Fooding Included"],
    itinerary: [
      "Day 1: Pickup + Transfer to Ayodhya + Hotel Checkin.",
      "Day 2: Ayodhya + Local Visits.",
      "Day 3: Varanasi + Ganga Aarti Experience.",
      "Day 4: Prayagraj Tour + Night Stay.",
      "Day 5: Return + Drop.",
    ],
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  },
  // add more as needed
];

const PackageList = () => (
  <section className="container py-12">
    <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8">
      {packages.map((pkg) => (
        <PackageCard key={pkg.id} pkg={pkg} />
      ))}
    </div>
  </section>
);

export default PackageList;
