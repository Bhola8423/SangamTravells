import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaRupeeSign } from "react-icons/fa";

export interface Hotel {
    id: number;
    name: string;
    category: string;
    price: number;
    image: string;
    features: string[];
    rating: number;
    popular?: boolean;
}

interface HotelCardProps {
    hotel: Hotel;
}

const HotelCard: React.FC<HotelCardProps> = ({ hotel }) => {
    return (
        <div key={hotel.id} className={`group relative bg-white rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 ${hotel.popular ? 'shadow-2xl ring-2 ring-primary border-transparent scale-105 z-10' : 'shadow-lg border border-slate-100 hover:shadow-xl'}`}>
            {hotel.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-l from-primary to-primary/80 text-white text-[10px] font-bold tracking-wider px-3 py-1 rounded-bl-xl z-20 shadow-md">
                    BESTSELLER
                </div>
            )}

            <div className="h-56 overflow-hidden relative">
                <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-4 left-4 z-20 text-white">
                    <div className="flex items-center gap-1 text-yellow-400 text-xs mb-1">
                        <FaStar /> <span className="font-bold text-white">{hotel.rating}</span>
                    </div>
                    <h3 className="text-xl font-bold font-serif leading-none">{hotel.name}</h3>
                    <p className="text-white/80 text-xs mt-1 uppercase tracking-wide">{hotel.category}</p>
                </div>
            </div>

            <div className="p-6">
                <div className="flex justify-between items-end mb-6 border-b border-slate-100 pb-4">
                    <div>
                        <span className="text-xs text-slate-500">Starting from</span>
                        <div className="text-2xl font-bold text-primary flex items-center gap-0.5">
                            <FaRupeeSign className="text-lg" />{hotel.price}
                        </div>
                    </div>
                    <span className="text-xs text-slate-400 mb-1">per night</span>
                </div>

                <div className="space-y-2 mb-6">
                    {hotel.features.map((f, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> {f}
                        </div>
                    ))}
                </div>

                <Link
                    to="/booking"
                    state={{ tourId: `hotel-${hotel.name}` }}
                    className={`w-full py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 text-sm uppercase tracking-wide
            ${hotel.popular
                            ? 'bg-gradient-to-r from-primary to-orange-600 text-white shadow-primary/30'
                            : 'bg-secondary text-white hover:bg-secondary/90 shadow-secondary/30'}`}
                >
                    Book Room
                </Link>
            </div>
        </div>
    );
};

export default HotelCard;
