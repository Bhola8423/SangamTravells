import TaxiServicesGrid from "../components/services/TaxiServicesGrid";
import HowItWorks from "../components/services/HowItWorks";
import WhyChooseTaxi from "../components/services/WhyChooseTaxi";
import ReadyToPlan from "../components/common/ReadyToPlan";
import TestimonialsCarousel from "../components/common/TestimonialsCarousel";
import { FaStar, FaShieldAlt, FaUserTie } from "react-icons/fa";

const Services = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=2000&q=80"
            alt="Luxury Travel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-white/5"></div>
        </div>

        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 drop-shadow-2xl">
            Premium Travel & <br /> <span className="text-accent-yellow">Taxi Services</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto mb-10 leading-relaxed font-medium drop-shadow-md">
            Experience comfort, reliability, and safety with our premium fleet and expert drivers.
            Whether it's a local ride or a pilgrimage daily tour, we serve you with a smile.
          </p>

          {/* Trust Badges in Hero */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-white/95">
            <div className="flex items-center gap-2 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-sm">
              <FaStar className="text-yellow-400" /> Top Rated Service
            </div>
            <div className="flex items-center gap-2 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-sm">
              <FaShieldAlt className="text-green-400" /> Safe & Secure
            </div>
            <div className="flex items-center gap-2 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-sm">
              <FaUserTie className="text-blue-400" /> Expert Drivers
            </div>
          </div>
        </div>
      </section>

      {/* TAXI SERVICES GRID */}
      <div className="-mt-10 relative z-20">
        <TaxiServicesGrid />
      </div>

      {/* HOTELS & ACCOMMODATION PROMO */}
      <section className="py-16 bg-white">
        <div className="container-custom px-6 md:px-12">
          <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="md:w-1/2 relative h-64 md:h-auto">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80"
                alt="Luxury Hotel"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 to-transparent md:bg-gradient-to-r md:from-transparent md:to-slate-900/90"></div>
            </div>
            <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center relative z-10 text-white">
              <span className="text-accent-yellow font-bold tracking-wider uppercase text-sm mb-2">New Service</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Stay in Divine Comfort</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                We now offer curated premium stays in Ayodhya. From budget-friendly rooms to luxury resorts near Ram Mandir, book your perfect stay with us.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/hotels/ayodhya" className="btn btn-primary shadow-lg shadow-primary/30">
                  Explore Hotels
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <HowItWorks />

      {/* WHY CHOOSE US */}
      <WhyChooseTaxi />

      <section className="bg-slate-50 py-20">
        <div className="container-custom px-6 md:px-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif font-bold text-secondary">What Our Travelers Say</h2>
            <p className="text-slate-600 mt-2">Real reviews from our happy customers</p>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* CTA */}
      <ReadyToPlan />
    </>
  );
};

export default Services;
