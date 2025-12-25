import { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { FaCar, FaMapMarkerAlt, FaCalendarAlt, FaClock, FaUser, FaPhoneAlt, FaPaperPlane } from "react-icons/fa";
import ReadyToPlan from "../components/common/ReadyToPlan";
import { taxiRates } from "../data/taxi";

const TaxiBooking = () => {
    const location = useLocation();
    const [searchParams] = useSearchParams();

    // Priority: URL Param > Navigation State > Default
    const preSelectedVehicleId = searchParams.get("vehicleId") || location.state?.vehicleId || "";

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        pickupLocation: "",
        dropLocation: "",
        date: "",
        time: "",
        vehicleId: preSelectedVehicleId,
        message: "",
    });

    const [selectedVehicle, setSelectedVehicle] = useState(
        taxiRates.find(t => t.id.toString() === preSelectedVehicleId.toString()) || null
    );

    useEffect(() => {
        if (preSelectedVehicleId) {
            setFormData((prev) => ({ ...prev, vehicleId: preSelectedVehicleId }));
            const vehicle = taxiRates.find(t => t.id.toString() === preSelectedVehicleId.toString());
            setSelectedVehicle(vehicle || null);
        }
    }, [preSelectedVehicleId]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        if (name === "vehicleId") {
            const vehicle = taxiRates.find(t => t.id.toString() === value.toString());
            setSelectedVehicle(vehicle || null);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Taxi Booking Request Sent for ${selectedVehicle ? selectedVehicle.type : "Custom Request"}! We will contact you shortly.`);
        console.log("Taxi Booking Data:", formData);
    };

    return (
        <>
            {/* HERO */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900">
                <div className="absolute inset-0 z-0 opacity-40">
                    <img
                        src="/assets/allImages/kanak_bhawan.jpg" // Reuse a good background or specific taxi image
                        alt="Taxi Booking"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="container-custom relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
                        Book Your <span className="text-accent-yellow">Ride</span>
                    </h1>
                    <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                        Reliable, comfortable, and safe transfers. Choose your vehicle and let us drive you there.
                    </p>
                </div>
            </section>

            {/* FORM SECTION */}
            <section className="container-custom px-6 md:px-12 py-12 -mt-16 relative z-20">
                <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-slate-100 max-w-4xl mx-auto">

                    {/* SELECTED VEHICLE SUMMARY */}
                    {selectedVehicle && (
                        <div className="mb-8 bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center gap-4 animate-fade-in text-left">
                            <div className="w-24 h-16 rounded-lg overflow-hidden shrink-0">
                                <img src={selectedVehicle.image} alt={selectedVehicle.type} className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-slate-800">{selectedVehicle.type}</h3>
                                <p className="text-sm text-slate-500">{selectedVehicle.models}</p>
                            </div>
                            <div className="ml-auto text-right hidden sm:block">
                                <div className="text-xs text-slate-400">Rate</div>
                                <div className="font-bold text-primary">₹{selectedVehicle.outstationPrice}</div>
                            </div>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-8">

                        {/* 1. Trip Details */}
                        <div>
                            <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                                <FaMapMarkerAlt className="text-primary" /> Trip Details
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700">Pickup Location</label>
                                    <input
                                        type="text"
                                        name="pickupLocation"
                                        required
                                        value={formData.pickupLocation}
                                        onChange={handleChange}
                                        placeholder="e.g. Ayodhya Cantt Station"
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700">Drop Location</label>
                                    <input
                                        type="text"
                                        name="dropLocation"
                                        required
                                        value={formData.dropLocation}
                                        onChange={handleChange}
                                        placeholder="e.g. Ram Janmabhoomi"
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700">Date</label>
                                    <div className="relative">
                                        <FaCalendarAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                        <input
                                            type="date"
                                            name="date"
                                            required
                                            value={formData.date}
                                            onChange={handleChange}
                                            className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700">Time</label>
                                    <div className="relative">
                                        <FaClock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                        <input
                                            type="time"
                                            name="time"
                                            required
                                            value={formData.time}
                                            onChange={handleChange}
                                            className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2. Vehicle Selection */}
                        <div>
                            <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                                <FaCar className="text-primary" /> Select Vehicle
                            </h3>
                            <select
                                name="vehicleId"
                                value={formData.vehicleId}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none appearance-none"
                            >
                                <option value="">-- Choose a Vehicle --</option>
                                {taxiRates.map(taxi => (
                                    <option key={taxi.id} value={taxi.id}>
                                        {taxi.type} ({taxi.models}) - {taxi.capacity}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* 3. Contact Details */}
                        <div>
                            <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                                <FaUser className="text-primary" /> Personal Details
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                                    <div className="relative">
                                        <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-orange-600 text-white font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                        >
                            Book Taxi <FaPaperPlane />
                        </button>

                    </form>
                </div>
            </section>

            <ReadyToPlan />
        </>
    );
};

export default TaxiBooking;
