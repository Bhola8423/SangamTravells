import { useState } from "react";
import { legacyPackages } from "../../data/legacyPackages";
import SITE from "../../config/site";

const FeaturedPackages = () => {
  const [openId, setOpenId] = useState<number | null>(null);


  return (
    <div className="grid lg:grid-cols-2 gap-10">
      {legacyPackages.map((pkg) => (
        <div
          key={pkg.id}
          className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transition overflow-hidden"
        >
          {/* Image */}
          <div className="relative h-64 overflow-hidden">
            <img
              src={pkg.image}
              alt={pkg.title}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />

            <div className="absolute top-4 left-4 bg-white/90 px-4 py-1 rounded-full text-sm font-semibold">
              {pkg.price
                ? `₹${pkg.price} / ${pkg.priceType}`
                : pkg.priceType}
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold">{pkg.title}</h3>
            <p className="text-sm text-slate-500 mt-1">
              {pkg.seats}
            </p>

            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {pkg.inclusions.map((i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-green-500 shrink-0">✔</span>
                  <span>{i}</span>
                </li>
              ))}
            </ul>

            {pkg.itinerary.length > 0 && (
              <>
                <button
                  onClick={() =>
                    setOpenId(openId === pkg.id ? null : pkg.id)
                  }
                  className="mt-4 text-primary font-medium"
                >
                  {openId === pkg.id
                    ? "Hide Itinerary"
                    : "View Itinerary"}
                </button>

                {openId === pkg.id && (
                  <ul className="mt-3 text-sm text-slate-600 space-y-1">
                    {pkg.itinerary.map((day) => (
                      <li key={day}>• {day}</li>
                    ))}
                  </ul>
                )}
              </>
            )}
            <a
              href={SITE.social.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center justify-center w-full h-11 rounded-xl bg-gradient-to-r from-[#e76f51] to-[#d65a3a] text-white font-semibold shadow hover:scale-105 transition"
            >
              Book Now
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedPackages;
