import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaCalendarAlt, FaUser, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaUsers, FaPaperPlane } from "react-icons/fa";
import ReadyToPlan from "../components/common/ReadyToPlan";
import { tours } from "../data/tours";

const Booking = () => {
    const location = useLocation();
    const preSelectedTourId = location.state?.tourId || "";

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        tourId: preSelectedTourId,
        date: "",
        travelers: 2,
        message: "",
    });

    // Update tourId if passed via navigation state later
    useEffect(() => {
        if (preSelectedTourId) {
            setFormData((prev) => ({ ...prev, tourId: preSelectedTourId }));
        }
    }, [preSelectedTourId]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, send to API. For now, just alert or log.
        alert("Booking Request Sent! We will contact you shortly.");
        console.log("Booking Data:", formData);
    };

    return (
        <>
            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/assets/allImages/kanak_bhawan.jpg"
                        alt="Booking Hero"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-white/5"></div>
                </div>

                <div className="container-custom relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 drop-shadow-2xl">
                        Start Your <span className="text-accent-yellow">Journey</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto mb-10 leading-relaxed font-medium drop-shadow-md">
                        Reserve your spot for a divine experience. Fill in the details below, and our travel experts will handle the rest.
                    </p>
                </div>
            </section>

            {/* BOOKING FORM SECTION */}
            <section className="container-custom px-6 md:px-12 py-20 -mt-20 relative z-20">
                <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-slate-100 max-w-5xl mx-auto">
                    <div className="text-center mb-10">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm mb-4">
                            Easy Booking Process
                        </span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">
                            Book Your Trip
                        </h2>
                        <p className="text-slate-500 mt-2">No payment required immediately. We will confirm availability first.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">

                        {/* Personal Details */}
                        <div>
                            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2 border-b pb-2">
                                <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm">1</span>
                                Personal Information
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                                    <div className="relative">
                                        <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Enter your full name"
                                            className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                                    <div className="relative">
                                        <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+91 98765 43210"
                                            className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                                    <div className="relative">
                                        <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="name@example.com"
                                            className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Trip Details */}
                        <div>
                            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2 border-b pb-2">
                                <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm">2</span>
                                Trip Detail
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-sm font-bold text-slate-700 ml-1">Select Package</label>
                                    <div className="relative">
                                        <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                        <select
                                            name="tourId"
                                            value={formData.tourId}
                                            onChange={handleChange}
                                            className="w-full pl-11 pr-10 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium appearance-none"
                                        >
                                            <option value="">-- Select a Package --</option>
                                            <option value="custom">I want a Custom Plan</option>
                                            {tours.map((t) => (
                                                <option key={t.id} value={t.id}>{t.name} ({t.durationDays} Days)</option>
                                            ))}
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none border-l pl-2 border-gray-300">
                                            <span className="text-gray-400 text-xs">▼</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 ml-1">Travel Date</label>
                                    <div className="relative">
                                        <FaCalendarAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                        <input
                                            type="date"
                                            name="date"
                                            required
                                            value={formData.date}
                                            onChange={handleChange}
                                            className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium text-slate-600"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 ml-1">Number of Travelers</label>
                                    <div className="relative">
                                        <FaUsers className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                        <input
                                            type="number"
                                            name="travelers"
                                            min="1"
                                            value={formData.travelers}
                                            onChange={handleChange}
                                            className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Message */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 ml-1">Special Requests (Optional)</label>
                            <textarea
                                name="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Any specific preferences like hotels, food, or extra places..."
                                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium resize-none"
                            />
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                className="w-full h-16 rounded-xl bg-[#E76F51] text-white font-bold text-xl shadow-lg hover:bg-[#D65A3A] hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-3"
                            >
                                Confirm Booking Request <FaPaperPlane className="text-lg" />
                            </button>
                            <p className="text-center text-sm text-slate-400 mt-4">
                                By clicking submit, you agree to our terms. We will contact you to finalize.
                            </p>
                        </div>

                    </form>
                </div>
            </section>

            <ReadyToPlan />
        </>
    );
};

export default Booking;
