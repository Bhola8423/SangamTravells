
import { useState, useMemo } from "react";
import { FaCheckCircle, FaStar, FaShieldAlt, FaUserClock } from "react-icons/fa";
import TourCard from "../components/common/TourCard";
import TourFilters from "../components/common/TourFilters";
import ReadyToPlan from "../components/common/ReadyToPlan";
import { tours } from "../data/tours";
import { legacyPackages } from "../data/legacyPackages";

const Tours = () => {
  const [filters, setFilters] = useState({
    location: "All",
    duration: "All",
    budget: "All",
    tourType: "All",
  });

  // Merge tours and legacyPackages
  // We adapt legacyPackages to match the Tour interface structure used by TourCard
  const allTours = useMemo(() => {
    const adaptedLegacy = legacyPackages.map(pkg => ({
      id: `legacy-${pkg.id}`,
      name: pkg.title,
      slug: pkg.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, ''),
      location: pkg.destinations.join(" - "),
      durationDays: pkg.durationDays,
      priceFrom: pkg.price,
      thumbnailUrl: pkg.image,
      heroImageUrl: pkg.image,
      shortDescription: `Enjoy a ${pkg.durationDays}-day tour covering ${pkg.destinations.join(", ")}. Includes ${pkg.inclusions.join(", ")}.`,
      highlights: pkg.itinerary.slice(0, 3), // First 3 items as highlights
      itinerary: pkg.itinerary,
      includes: pkg.inclusions,
      excludes: ["Personal expenses"], // Default
    }));

    return [...tours, ...adaptedLegacy];
  }, []);

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const filteredTours = useMemo(() => {
    return allTours.filter((tour) => {
      // Location Filter
      if (filters.location !== "All" && !tour.location.includes(filters.location)) return false;

      // Duration Filter
      if (filters.duration !== "All") {
        const days = tour.durationDays;
        if (filters.duration === "1-2" && days > 2) return false;
        if (filters.duration === "3-5" && (days < 3 || days > 5)) return false;
        if (filters.duration === "6+" && days < 6) return false;
      }

      // Budget Filter
      if (filters.budget !== "All") {
        const price = tour.priceFrom;
        if (filters.budget === "Under 5000" && price >= 5000) return false;
        if (filters.budget === "5000-10000" && (price < 5000 || price > 10000)) return false;
        if (filters.budget === "10000+" && price <= 10000) return false;
      }

      return true;
    });
  }, [filters, allTours]);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1598324789736-4861f89564a0?auto=format&fit=crop&w=2000&q=80"
            alt="Spiritual Journey"
            className="w-full h-full object-cover"
          />
          {/* Darker gradient for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-white/10"></div>
        </div>

        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 drop-shadow-2xl">
            Sacred Pilgrimages & <br /> <span className="text-accent-yellow">Spiritual Journeys</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto mb-10 leading-relaxed font-medium drop-shadow-md">
            Discover thoughtfully curated yatra packages with comfortable travel,
            expert guides, and transparent pricing. Experience divinity with peace of mind.
          </p>

          {/* Trust Badges in Hero */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-white/95">
            <div className="flex items-center gap-2 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-sm">
              <FaStar className="text-yellow-400" /> 4.8/5 Rated
            </div>
            <div className="flex items-center gap-2 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-sm">
              <FaShieldAlt className="text-green-400" /> Verified Guides
            </div>
            <div className="flex items-center gap-2 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-sm">
              <FaUserClock className="text-blue-400" /> 24/7 Support
            </div>
          </div>
        </div>
      </section>

      {/* FILTER SECTION (Overlapping) */}
      <section className="relative z-20 -mt-24 pb-12 px-4 md:px-0">
        <div className="container-custom">
          <TourFilters
            filters={filters}
            onChange={handleFilterChange}
            onApply={() => { }}
          />
        </div>
      </section>

      {/* TOURS GRID */}
      <section className="py-20 bg-slate-50">
        {/* Added px-6 md:px-12 for extra side spacing as requested */}
        <div className="container-custom px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-serif font-bold text-secondary">Make Your Selection</h2>
              <p className="text-slate-500 mt-2">Explore our most loved spiritual destinations and packages</p>
            </div>
            <div className="text-sm font-medium text-slate-400">
              Showing {filteredTours.length} packages
            </div>
          </div>

          {filteredTours.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 pb-10">
              {filteredTours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="bg-white rounded-2xl shadow-sm p-10 inline-block">
                <h3 className="text-xl font-bold text-slate-800">No packages found</h3>
                <p className="text-slate-500 mt-2">Try adjusting your filters to find what you're looking for.</p>
                <button
                  onClick={() => setFilters({ location: "All", duration: "All", budget: "All", tourType: "All" })}
                  className="mt-6 text-primary font-medium hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* WHY CHOOSE US (Brief) */}
      <section className="py-24 bg-white">
        <div className="container-custom px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            <div className="relative order-2 lg:order-1">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
              <img
                src="https://images.unsplash.com/photo-1566863640085-3b6b66fa5468?auto=format&fit=crop&w=1200&q=80"
                alt="Happy Travelers"
                className="rounded-3xl shadow-2xl relative z-10 w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-xs border border-gray-100">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xl">
                    <FaCheckCircle />
                  </div>
                  <div>
                    <div className="font-bold text-lg">100% Verified</div>
                    <div className="text-xs text-slate-500">Travel Itineraries</div>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We ensure every trip is planned with precision and safety as our top priority.
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm mb-4">
                Why Travel With Us?
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-6">
                Experience the Divine <br /> Without the Worry
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                We specialize in pilgrimage tours that require special care and attention. From senior citizen-friendly transport to vip darshan coordination, we handle it all.
              </p>

              <ul className="space-y-4">
                {[
                  "Sanitized, Premium Vehicles (Innova Crysta, Tempo Traveller)",
                  "Experienced Drivers familiar with Temple Routes",
                  "Hidden-gem sightseeing stops",
                  "24/7 On-trip support"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-xs shrink-0">
                      <FaCheckCircle />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <ReadyToPlan />
    </>
  );
};

export default Tours;
