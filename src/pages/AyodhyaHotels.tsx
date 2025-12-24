import { FaWifi, FaSnowflake, FaUtensils, FaParking, FaConciergeBell } from "react-icons/fa";
import ReadyToPlan from "../components/common/ReadyToPlan";
import PageHero from "../components/common/PageHero";
import HotelCard from "../components/common/HotelCard";

// Hotel Data
const hotels = [
    {
        id: 1,
        name: "Economy Stay",
        category: "Budget",
        price: 1500,
        image: "/assets/allImages/kanak_bhawan.jpg",
        features: ["Clean Rooms", "Free WiFi", "Near Ram Mandir"],
        rating: 4.0
    },
    {
        id: 2,
        name: "Comfort Inn",
        category: "Standard",
        price: 2500,
        image: "/assets/allImages/hanuman_garhi2.jpg",
        features: ["AC Rooms", "Room Service", "Led TV", "Attached Bath"],
        rating: 4.5,
        popular: true
    },
    {
        id: 3,
        name: "Royal Heritage",
        category: "Premium",
        price: 4500,
        image: "/assets/allImages/guptar_ghat.jpg",
        features: ["Luxury Interiors", "Multi-cuisine Restaurant", "Pick & Drop", "City View"],
        rating: 4.8
    },
    {
        id: 4,
        name: "Divine Palace",
        category: "Luxury",
        price: 6500,
        image: "/assets/allImages/naya_ghat.jpg",
        features: ["5-Star Amenities", "Spa & Wellness", "Banquet Hall", "VIP Service"],
        rating: 5.0
    }
];

const AyodhyaHotels = () => {
    return (
        <>
            <PageHero
                title={<>Stay in <span className="text-accent-yellow">Divine Comfort</span> <br /> in Ayodhya</>}
                subtitle="Experience the best hospitality with our curated selection of hotels, from budget-friendly stays to luxurious resorts near Ram Mandir."
                backgroundImage="/assets/allImages/tulsi_udyan_temple.jpg"
            />

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
                            <HotelCard key={hotel.id} hotel={hotel} />
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
