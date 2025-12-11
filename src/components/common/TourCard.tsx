// src/components/common/TourCard.tsx
import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaHeart, FaClock, FaStar, FaRupeeSign } from "react-icons/fa";
import type { Tour } from "../../types";


interface Props {
  tour: Tour;
  rating?: number;
  reviews?: number;
}

const TourCard: React.FC<Props> = ({ tour, rating = 4.7, reviews = 128 }) => {
  return (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-slate-200/60">

      {/* Image Block */}
      <div className="relative h-52 md:h-56 overflow-hidden">
        <img
          src={tour.thumbnailUrl}
          loading="lazy"
          alt={tour.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Top-left badge: Duration */}
        <div className="absolute left-4 top-4 bg-white/90 px-3 py-1 rounded-full text-xs font-semibold text-gray-700 shadow-sm flex items-center gap-1">
          <FaClock className="text-gray-500 text-xs" />
          {tour.durationDays} Days
        </div>

        {/* Wishlist heart */}
        <button
          className="absolute right-4 top-4 bg-white/90 p-2 rounded-full shadow hover:scale-105 transition"
          aria-label="Add to wishlist"
        >
          <FaHeart className="text-primary text-sm" />
        </button>
      </div>

      {/* Content */}
      <div className="px-5 py-4">

        {/* Title */}
        <h3 className="text-base md:text-lg font-semibold text-slate-900 leading-snug line-clamp-2">
          {tour.name}
        </h3>

        {/* Sub description */}
        <p className="text-sm text-slate-500 mt-1 line-clamp-2">
          {tour.shortDescription}
        </p>

        {/* Location */}
        <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
          <FaMapMarkerAlt className="text-primary text-sm" />
          <span className="truncate">{tour.location}</span>
        </div>

        {/* Rating Block */}
        <div className="mt-3 inline-flex items-center gap-2 bg-slate-100 px-2 py-1 rounded-md text-xs">
          <FaStar className="text-yellow-400" />
          <span className="font-semibold">{rating.toFixed(1)}</span>
          <span className="text-slate-500">({reviews})</span>
        </div>

        {/* Price + Button */}
        <div className="mt-4 flex items-end justify-between">

          {/* PRICE */}
          <div>
            <div className="text-xs text-slate-500">Starting From</div>
            <div className="flex items-center gap-1 text-lg font-bold text-primary leading-none">
              <FaRupeeSign className="text-sm" />
              {tour.priceFrom.toLocaleString("en-IN")}
            </div>
          </div>

          {/* BOOK NOW button */}
          <Link
            to={`/tours/${tour.id}`}
            className="px-4 py-2 rounded-xl bg-primary text-white text-sm font-semibold shadow-md 
                transition-all duration-200 hover:bg-primaryDark 
                hover:shadow-lg hover:-translate-y-0.5"
          >
            Book Now
          </Link>
        </div>

      </div>
    </article>
  );
};

export default TourCard;
