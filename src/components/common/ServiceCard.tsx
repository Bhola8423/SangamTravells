// src/components/common/ServiceCard.tsx
import React from "react";

interface Props {
  title: string;
  desc: string;
  img: string;
}

const ServiceCard: React.FC<Props> = ({ title, desc, img }) => {
  return (
    <div className="group relative rounded-3xl overflow-hidden shadow-lg bg-white border border-transparent hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">

      {/* Animated gradient border (modern effect) */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 via-orange-300/10 to-amber-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      {/* Image Section */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent"></div>

        {/* Floating category badge */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full shadow-md text-xs font-semibold text-gray-800 uppercase tracking-wide">
          Taxi Service
        </div>

        {/* Glass icon circle */}
        <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-md border border-white/40 w-12 h-12 rounded-full flex items-center justify-center shadow-md">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 6h18M3 18h18"/>
          </svg>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 relative z-10">
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>

        <p className="text-sm text-gray-600 mt-2 leading-relaxed">
          {desc}
        </p>

        {/* Premium bottom action bar */}
        <div className="mt-5 flex items-center justify-between">

          {/* Price or badge placeholder */}
          <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
            Best Choice
          </span>

          {/* Button with animated arrow */}
          <button className="relative inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:underline">
            Explore
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
