import { FaWifi, FaSnowflake, FaUtensils, FaParking, FaConciergeBell, FaStar, FaRupeeSign } from "react-icons/fa";
import { Link } from "react-router-dom";
import ReadyToPlan from "../components/common/ReadyToPlan";

// Hotel Data
const hotels = [
    {
        id: 1,
        name: "Economy Stay",
        category: "Budget",
        price: 1500,
        image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=600&q=80",
        features: ["Clean Rooms", "Free WiFi", "Near Ram Mandir"],
        rating: 4.0
    },
    {
        id: 2,
        name: "Comfort Inn",
        category: "Standard",
        price: 2500,
        image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=600&q=80",
        features: ["AC Rooms", "Room Service", "Led TV", "Attached Bath"],
        rating: 4.5,
        popular: true
    },
    {
        id: 3,
        name: "Royal Heritage",
        category: "Premium",
        price: 4500,
        image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=600&q=80",
        features: ["Luxury Interiors", "Multi-cuisine Restaurant", "Pick & Drop", "City View"],
        rating: 4.8
    },
    {
        id: 4,
        name: "Divine Palace",
        category: "Luxury",
        price: 6500,
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80",
        features: ["5-Star Amenities", "Spa & Wellness", "Banquet Hall", "VIP Service"],
        rating: 5.0
    }
];

const AyodhyaHotels = () => {
    return (
        <>
            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=80"
                        alt="Ayodhya Hotels"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-white/5"></div>
                </div>

                <div className="container-custom relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 drop-shadow-2xl">
                        Stay in <span className="text-accent-yellow">Divine Comfort</span> <br /> in Ayodhya
                    </h1>
                    <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto mb-10 leading-relaxed font-medium drop-shadow-md">
                        Experience the best hospitality with our curated selection of hotels, from budget-friendly stays to luxurious resorts near Ram Mandir.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link to="/booking" className="btn btn-primary h-14 px-8 text-lg shadow-xl shadow-primary/30">
                            Book Your Stay
                        </Link>
                    </div>
                </div>
            </section>

            {/* AMENITIES */}
            <section className="py-16 bg-white">
                <div className="container-custom px-6 md:px-12">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
                        {[
                            { icon: FaWifi, label: "Free Wifi" },
                            { icon: FaSnowflake, label: "AC Rooms" },
                            { icon: FaUtensils, label: "Restaurant" },
                            { icon: FaParking, label: "Parking" },
                            { icon: FaConciergeBell, label: "24/7 Service" }
                        ].map((item, i) => (
                            <div key={i} className="group bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center gap-4">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-transparent group-hover:from-primary group-hover:to-orange-500 flex items-center justify-center text-primary group-hover:text-white text-2xl transition-all duration-300 shadow-inner">
                                    <item.icon />
                                </div>
                                <span className="font-bold text-secondary group-hover:text-primary transition-colors">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* HOTEL LISTING */}
            <section className="py-20 bg-slate-50">
                <div className="container-custom px-6 md:px-12">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold text-sm tracking-wide uppercase">Handpicked Stays</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mt-2">Recommended Hotels</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {hotels.map((hotel) => (
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
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <ReadyToPlan />
        </>
    );
};

export default AyodhyaHotels;
