import { FaCar, FaCheckCircle, FaPhoneAlt, FaMapMarkerAlt, FaRupeeSign } from "react-icons/fa";
import { Link } from "react-router-dom";
import ReadyToPlan from "../components/common/ReadyToPlan";
import PageHero from "../components/common/PageHero";

// Taxi Rate Data
const taxiRates = [
    {
        id: 1,
        type: "Hatchback",
        models: "WagonR / Celerio",
        capacity: "4 Passengers",
        localPrice: 1600,
        outstationPrice: "11/km",
        // Generic reliable hatchback
        image: "/assets/allImages/hanuman_garhi.jpg",
        features: ["AC", "Audio System", "Comfortable Seats"]
    },
    {
        id: 2,
        type: "Sedan",
        models: "Dzire / Etios",
        capacity: "4 Passengers",
        localPrice: 1800,
        outstationPrice: "12/km",
        // White Sedan
        image: "/assets/allImages/nageshwarnath_temple.jpg",
        features: ["AC", "Large Boot", "Premium Interiors"],
        popular: true
    },
    {
        id: 3,
        type: "SUV / MUV",
        models: "Ertiga / Innova",
        capacity: "6-7 Passengers",
        localPrice: 2400,
        outstationPrice: "16/km",
        // White SUV
        image: "/assets/allImages/guptar_ghat.jpg",
        features: ["Dual AC", "Captain Seats", "Ample Space"]
    },
    {
        id: 4,
        type: "Premium SUV",
        models: "Innova Crysta",
        capacity: "6-7 Passengers",
        localPrice: 3000,
        outstationPrice: "20/km",
        // VIP/Premium look
        image: "/assets/allImages/naya_ghat.jpg",
        features: ["Leather Seats", "Ambient Light", "VIP Comfort"]
    },
];

const AyodhyaTaxi = () => {
    return (
        <>
            <PageHero
                title={<>Premium <span className="text-accent-yellow">Taxi Services</span> <br /> in Ayodhya</>}
                subtitle="Explore the holy city with our reliable taxi services. With 2+ years of experience and thousands of satisfied customers, we provide clean cars, professional drivers, and specialized knowledge of Himalayan roads and Chardham routes."
                backgroundImage="/assets/allImages/darbhanga_ghat.jpg"
            />

            {/* WHY CHOOSE OUR TAXI */}
            <section className="py-20 bg-white">
                <div className="container-custom px-6 md:px-12">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold text-sm tracking-wide uppercase">Why Choose Sangam Travels</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mt-2">The Best Travel Experience</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: FaCar, title: "Clean & Sanitized Cars", desc: "Every car is deeply cleaned before every trip." },
                            { icon: FaPhoneAlt, title: "24/7 Support", desc: "Our team is always available to assist you." },
                            { icon: FaMapMarkerAlt, title: "Local Experts", desc: "Drivers who know every corner of Ayodhya." }
                        ].map((item, idx) => (
                            <div key={idx} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 text-center hover:shadow-xl transition-all hover:-translate-y-1">
                                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl mb-6">
                                    <item.icon />
                                </div>
                                <h3 className="text-xl font-bold text-secondary mb-3">{item.title}</h3>
                                <p className="text-slate-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* RATE CHART */}
            <section className="py-20 bg-slate-50">
                <div className="container-custom px-6 md:px-12">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Transparent Fare Chart</h2>
                        <p className="text-slate-500 mt-2">No hidden charges. Pay what you see.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {taxiRates.map((taxi) => (
                            <div key={taxi.id} className={`group relative bg-white rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 ${taxi.popular ? 'shadow-2xl ring-2 ring-primary border-transparent scale-105 z-10' : 'shadow-lg border border-slate-100 hover:shadow-xl'}`}>
                                {taxi.popular && (
                                    <div className="absolute top-0 right-0 bg-gradient-to-l from-primary to-primary/80 text-white text-[10px] font-bold tracking-wider px-3 py-1 rounded-bl-xl z-20 shadow-md">
                                        MOST POPULAR
                                    </div>
                                )}

                                <div className="h-52 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60"></div>
                                    <img src={taxi.image} alt={taxi.type} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute bottom-4 left-4 z-20 text-white">
                                        <h3 className="text-xl font-bold font-serif leading-none">{taxi.type}</h3>
                                        <p className="text-white/80 text-xs mt-1">{taxi.models}</p>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="space-y-3 mb-6">
                                        <div className="flex justify-between items-center p-3 bg-slate-50 rounded-xl border border-slate-100">
                                            <div className="text-xs text-slate-500 font-medium">Local Pack<br /><span className="text-[10px] opacity-70">(8hr/80km)</span></div>
                                            <div className="font-bold text-lg text-primary flex items-center"><FaRupeeSign className="text-sm" /> {taxi.localPrice}</div>
                                        </div>
                                        <div className="flex justify-between items-center px-2">
                                            <span className="text-xs text-slate-500 font-medium">Outstation</span>
                                            <span className="font-bold text-secondary text-sm flex items-center"><FaRupeeSign className="text-[10px]" /> {taxi.outstationPrice}</span>
                                        </div>
                                    </div>

                                    <div className="space-y-2 mb-6 border-t border-slate-100 pt-4">
                                        {taxi.features.map((f, i) => (
                                            <div key={i} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                                                <FaCheckCircle className="text-green-500 text-[10px]" /> {f}
                                            </div>
                                        ))}
                                    </div>

                                    <Link
                                        to="/booking"
                                        state={{ tourId: `taxi-${taxi.type}` }}
                                        className={`w-full py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 text-sm uppercase tracking-wide
                    ${taxi.popular
                                                ? 'bg-gradient-to-r from-primary to-orange-600 text-white shadow-primary/30'
                                                : 'bg-secondary text-white hover:bg-secondary/90 shadow-secondary/30'}`}
                                    >
                                        Book Now
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* EXPERIENCE & SERVICES */}
            <section className="py-20 bg-white">
                <div className="container-custom px-6 md:px-12">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-serif font-bold text-secondary mb-6 italic">2 Years of Happy Journeys</h2>
                            <p className="text-slate-600 leading-relaxed mb-6 text-justify uppercase tracking-tight text-sm font-semibold opacity-80 mb-2">Best Site about Sangam Tour and Travels Ayodhya ,Taxi Service – Ayodhya,Ratanpuri,Trilokpuri, kakandi, Prayagraj, Varanasi, Delhi, Agra & Chardam Taxi</p>
                            <p className="text-slate-600 leading-relaxed mb-6 text-justify">
                                Sangam Tour and Travels Ayodha Holidays offers great deals on taxis. We offer all types of taxis including basic 5-seater cars, budget taxi services, and luxury taxis for those who want to tour Sangam Tour and Travels Ayodha Yatra.
                            </p>
                            <p className="text-slate-600 leading-relaxed text-justify">
                                Travelers book Sangam Tour and Travels Yatra taxis only for their own comfort, privacy, and peace of mind. Book a taxi and you will reach everything in full security as our drivers have extensive experience and knowledge of Himalayan roads and Chardham routes.
                            </p>
                        </div>
                        <div className="bg-slate-100 rounded-3xl p-8 border border-slate-200 shadow-inner">
                            <h3 className="text-xl font-bold text-secondary mb-4">Intercity & Pilgrimage Specials</h3>
                            <ul className="space-y-3 font-medium text-slate-700">
                                <li className="flex items-center gap-3"><FaCheckCircle className="text-primary" /> Ayodhya to Ratanpuri & Trilokpuri</li>
                                <li className="flex items-center gap-3"><FaCheckCircle className="text-primary" /> Prayagraj & Varanasi Circuits</li>
                                <li className="flex items-center gap-3"><FaCheckCircle className="text-primary" /> Delhi, Agra & Chardam Yatra</li>
                                <li className="flex items-center gap-3"><FaCheckCircle className="text-primary" /> Budget & Luxury Car Rentals</li>
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

export default AyodhyaTaxi;
