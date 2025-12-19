import React, { useState } from "react";

const PackageCard = ({ pkg }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden transition hover:shadow-2xl">
      <img
        src={pkg.image}
        alt={pkg.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-6 space-y-3">
        <h3 className="text-xl font-semibold text-slate-900">
          {pkg.title}
        </h3>

        <div className="text-primary font-bold text-lg">
          ₹{pkg.price.toLocaleString("en-IN")}
        </div>

        {/* Inclusions */}
        <ul className="text-sm text-slate-600 space-y-1">
          {pkg.inclusions.map((i: string) => (
            <li key={i}>• {i}</li>
          ))}
        </ul>

        {/* Expand itinerary */}
        <button
          onClick={() => setOpen(!open)}
          className="text-sm text-primary font-medium hover:underline"
        >
          {open ? "Hide Details" : "View Itinerary"}
        </button>

        {open && (
          <ul className="text-sm text-slate-700 space-y-1 mt-2">
            {pkg.itinerary.map((day: string) => (
              <li key={day}>• {day}</li>
            ))}
          </ul>
        )}

        <button className="mt-3 w-full bg-primary text-white py-2 rounded-lg font-semibold hover:bg-primaryDark transition">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default PackageCard;
