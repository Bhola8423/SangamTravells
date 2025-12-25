import { useParams, Link, useNavigate } from "react-router-dom";
import { tours } from "../data/tours";
import { FaMapMarkerAlt, FaClock, FaRupeeSign, FaCheckCircle, FaTimesCircle, FaArrowLeft } from "react-icons/fa";
import EmptyState from "../components/common/EmptyState";

const TourDetails = () => {
  const { id } = useParams<{ id: string }>();
  const tour = tours.find(t => t.id === id);
  const nav = useNavigate();

  if (!tour) return (
    <EmptyState
      title="Tour Not Found"
      description="We couldn't find the specific spiritual journey you are looking for. It might have been moved or the link is incorrect."
      icon={<FaTimesCircle className="text-5xl text-red-200" />}
      type="error"
      actionLabel="Back to All Tours"
      actionLink="/tours"
      showHomeLink
    />
  );

  return (
    <section className="pt-24 pb-16 bg-slate-50 min-h-screen">
      <div className="container-custom">
        {/* Breadcrumb / Back */}
        <Link to="/tours" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors mb-6 font-medium">
          <FaArrowLeft /> Back to all tours
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-secondary mb-4">{tour.name}</h1>
          <div className="flex flex-wrap items-center gap-4 text-slate-600">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-primary" /> {tour.location}
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
            <div className="flex items-center gap-2">
              <FaClock className="text-primary" /> {tour.durationDays} Days / {tour.durationDays - 1} Nights
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
            <div className="flex items-center gap-1 font-bold text-secondary text-lg">
              From ₹{tour.priceFrom.toLocaleString("en-IN")}
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="rounded-3xl overflow-hidden shadow-xl mb-10 h-[400px] md:h-[500px] relative group">
          <img
            src={tour.heroImageUrl}
            alt={tour.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">

            {/* Overview */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-serif font-bold text-secondary mb-4">Overview</h3>
              <p className="text-slate-600 leading-relaxed text-lg">{tour.shortDescription}</p>
            </div>

            {/* Highlights */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-serif font-bold text-secondary mb-6">Trip Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tour.highlights.map((h, i: number) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                      <FaCheckCircle className="text-xs" />
                    </div>
                    <span className="text-slate-700 font-medium">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Itinerary */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-serif font-bold text-secondary mb-6">Itinerary</h3>
              <div className="space-y-6">
                {tour.itinerary.map((day: string, idx: number) => (
                  <div key={idx} className="relative pl-8 border-l-2 border-primary/20 last:border-0 pb-6 last:pb-0">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-sm"></div>
                    <h4 className="font-bold text-lg text-secondary mb-2">Day {idx + 1}</h4>
                    <p className="text-slate-600">{day}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions / Exclusions */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50/50 rounded-2xl p-6 border border-green-100">
                <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                  <FaCheckCircle /> Included
                </h4>
                <ul className="space-y-2">
                  {tour.includes.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-green-900">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-red-50/50 rounded-2xl p-6 border border-red-100">
                <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                  <FaTimesCircle /> Excluded
                </h4>
                <ul className="space-y-2">
                  {tour.excludes.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-red-900">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* Sidebar Booking Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-primary p-6 text-white text-center">
                <div className="text-sm opacity-90 mb-1">Starting from</div>
                <div className="text-3xl font-bold flex items-center justify-center gap-1">
                  <FaRupeeSign className="text-2xl" /> {tour.priceFrom.toLocaleString("en-IN")}
                </div>
                <div className="text-xs mt-2 opacity-80">per person</div>
              </div>

              <div className="p-6 md:p-8 space-y-5">
                <h3 className="font-bold text-xl text-secondary text-center">Book This Tour</h3>

                <p className="text-slate-600 text-center text-sm mb-4 leading-relaxed">
                  Ready to experience the divine? Proceed to our booking page to secure your spot for <strong>{tour.name}</strong>.
                </p>

                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 flex items-start gap-3">
                  <FaCheckCircle className="text-blue-600 mt-1 shrink-0" />
                  <p className="text-sm text-blue-800">Free cancellation up to 48 hours before the trip.</p>
                </div>

                <button
                  onClick={() => nav(`/booking?tourId=${tour.id}`)}
                  className="w-full py-4 bg-primary hover:bg-primaryDark text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all text-lg mt-4"
                >
                  Proceed to Booking
                </button>

                <p className="text-center text-xs text-slate-400 mt-4">
                  You will be redirected to our secure booking page.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TourDetails;
