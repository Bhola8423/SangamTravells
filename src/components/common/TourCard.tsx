// src/components/common/TourCard.tsx
import { Link } from "react-router-dom";
import type { Tour } from "../../types";


interface TourCardProps { tour: Tour; }

const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-soft flex flex-col">
      <div className="relative">
        <img src={tour.thumbnailUrl} alt={tour.name} className="w-full h-48 object-cover"/>
        <div className="absolute left-3 bottom-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full">{tour.location}</div>
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold">{tour.name}</h3>
        <p className="text-gray-500 text-sm mt-2 line-clamp-3">{tour.shortDescription}</p>

        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm">From <span className="font-bold">₹{tour.priceFrom.toLocaleString("en-IN")}</span></div>
          <Link to={`/tours/${tour.id}`} className="btn text-sm">View</Link>
        </div>
      </div>
    </article>
  );
};

export default TourCard;
