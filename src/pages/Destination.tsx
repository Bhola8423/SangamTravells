import { useParams, Navigate } from "react-router-dom";
import { destinations } from "../data/destinations";
import { tours } from "../data/tours";
import TourCard from "../components/common/TourCard";
import ReadyToPlan from "../components/common/ReadyToPlan";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

const Destination = () => {
    const { city } = useParams<{ city: string }>();

    // Normalize city to lowercase to match keys
    const destinationKey = city?.toLowerCase();
    const destination = destinationKey ? destinations[destinationKey] : null;

    if (!destination) {
        return <Navigate to="/404" />;
    }

    // Filter tours that include this destination in their name or description
    const relatedTours = tours.filter(t =>
        t.location.toLowerCase().includes(destination.name.toLowerCase()) ||
        t.name.toLowerCase().includes(destination.name.toLowerCase())
    );

    return (
        <>
            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden h-[60vh] min-h-[500px] flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <img
                        src={destination.heroImage}
                        alt={destination.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>
                </div>

                <div className="container-custom relative z-10 text-center text-white">
                    <span className="uppercase tracking-[0.2em] text-sm font-semibold mb-4 block bg-white/10 backdrop-blur-md px-4 py-1 rounded-full inline-block border border-white/20">
                        Explore {destination.name}
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 drop-shadow-2xl">
                        {destination.title}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-md">
                        {destination.description}
                    </p>
                </div>
            </section>

            {/* QUICK INFO */}
            <div className="bg-white relative z-20 -mt-10 mx-6 md:mx-auto max-w-4xl rounded-2xl shadow-xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 border border-gray-100">
                <div className="flex items-center gap-4 w-full md:w-auto">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl">
                        <FaMapMarkerAlt />
                    </div>
                    <div>
                        <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Destination</div>
                        <div className="text-lg font-bold text-secondary">{destination.name}, India</div>
                    </div>
                </div>
                <div className="hidden md:block w-px h-12 bg-gray-200"></div>
                <div className="flex items-center gap-4 w-full md:w-auto">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl">
                        <FaCalendarAlt />
                    </div>
                    <div>
                        <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Best Time to Visit</div>
                        <div className="text-lg font-bold text-secondary">{destination.bestTime}</div>
                    </div>
                </div>
            </div>

            {/* PLACES TO VISIT */}
            <section className="py-20 bg-slate-50">
                <div className="container-custom px-6 md:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Must Visit Places</h2>
                        <p className="text-slate-500 mt-2">Iconic spiritual and historical landmarks in {destination.name}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {destination.places.map((place, idx) => (
                            <div key={idx} className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={place.image}
                                        alt={place.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-secondary mb-2">{place.name}</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed">{place.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* RELATED TOURS */}
            {relatedTours.length > 0 && (
                <section className="py-20 bg-white">
                    <div className="container-custom px-6 md:px-12">
                        <div className="text-center mb-16">
                            <span className="text-primary font-bold text-sm tracking-wide uppercase">Plan Your Trip</span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mt-2">Popular {destination.name} Packages</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedTours.map(tour => (
                                <TourCard key={tour.id} tour={tour} />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <ReadyToPlan />
        </>
    );
};

export default Destination;
