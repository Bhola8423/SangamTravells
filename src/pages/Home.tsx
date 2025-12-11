// src/pages/Home.tsx
import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../components/common/SectionTitle";
import TourCard from "../components/common/TourCard";
import { tours } from "../data/tours";
import ServiceCard from "../components/common/ServiceCard";
import HeroCarousel from "../components/common/HeroCarousel";
import TestimonialsCarousel from "../components/common/TestimonialsCarousel";

const taxiTypes = [
  {
    id: "taxi-sedan",
    title: "Sedan (Swift / Dzire)",
    desc: "Comfortable 4-seater cars for couples and small families. Ideal for city drop/pickups.",
    img: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "taxi-suv",
    title: "SUV (Innova / XUV)",
    desc: "Spacious and reliable 6-7 seater SUVs for family trips and medium groups.",
    img: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "taxi-tempo",
    title: "Tempo Traveller",
    desc: "Perfect for group yatras — comfortable seating for 9–15 passengers with luggage space.",
    img: "https://images.unsplash.com/photo-1582719478178-8c8b6f5b4c92?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "taxi-minibus",
    title: "Mini Bus",
    desc: "Large groups and corporate pilgrimages — seating up to 25 with professional drivers.",
    img: "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "taxi-luxury",
    title: "Luxury Coach",
    desc: "Premium coaches for big groups and premium packages — recliner seats & onboard amenities.",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
  },
];

const Home: React.FC = () => {
  const featured = tours.slice(0, 3);

  return (
    <div className="space-y-12">
      {/* HERO CAROUSEL */}
     <section className="full-width-section">
  <HeroCarousel />
</section>

      {/* SERVICES / TAXI TYPES */}
      <section className="section pt-10 md:pt-16">
        <div className="container">
          <SectionTitle
            title="Taxi & Travel Services"
            subtitle="Multiple vehicle types to match every group and budget"
            align="center"
          />
          <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {taxiTypes.map((s) => (
              <ServiceCard key={s.id} title={s.title} desc={s.desc} img={s.img} />
            ))}
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              We provide door-to-door pickup, hourly local sightseeing, intercity
              transfers and customised pilgrimage packages.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED TOURS */}
      <section className="section bg-white">
        <div className="container">
          <SectionTitle
            title="Featured Pilgrimage Tours"
            subtitle="Hand-picked popular itineraries"
            align="center"
          />
          <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((t) => (
              <TourCard key={t.id} tour={t} />
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link to="/tours" className="btn">
              View All Tours
            </Link>
          </div>
        </div>
      </section>

      {/* PROMO VIDEO + HOW IT WORKS */}
      <section className="section pt-10 md:pt-16">
        <div className="container grid gap-8 grid-cols-1 lg:grid-cols-2 items-center">
          <div>
            <SectionTitle title="Watch Our Journey" subtitle="Short promo — see what travellers experienced" align="left" />
            <div className="rounded-xl overflow-hidden shadow-soft mt-4">
              <div className="relative" style={{ paddingBottom: "56.25%", height: 0 }}>
                <iframe
                  title="Sangam Promo"
                  src="https://www.youtube.com/embed/ysz5S6PUM-U"
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          <div>
            <SectionTitle title="How It Works" subtitle="Simple 3-step booking process" align="left" />
            <ol className="mt-4 space-y-4">
              <li className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
                <div>
                  <h4 className="font-semibold">Choose a tour or taxi</h4>
                  <p className="text-sm text-gray-600">Browse our packages or tell us your pickup & drop details for a taxi quote.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</div>
                <div>
                  <h4 className="font-semibold">Confirm & pay (or pay later)</h4>
                  <p className="text-sm text-gray-600">Pay online or via bank/UPI. For taxi calls, choose to pay at drop or online.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">3</div>
                <div>
                  <h4 className="font-semibold">Travel with comfort</h4>
                  <p className="text-sm text-gray-600">We handle local guides, hotel check-ins and smooth pickup/drop timings.</p>
                </div>
              </li>
            </ol>

            <div className="mt-6">
              <Link to="/contact" className="btn">Request Custom Plan</Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS CAROUSEL */}
      <section className="section bg-white">
        <div className="container">
          <SectionTitle title="What Travellers Say" subtitle="Real reviews from our guests" align="center" />
          <div className="mt-6">
            <TestimonialsCarousel />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-12">
        <div className="container text-center">
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-[#fff4f0] to-[#fff8f4] p-8 rounded-xl shadow-soft">
            <h2 className="text-2xl font-bold">Ready to plan your yatra?</h2>
            <p className="text-gray-600 mt-5 mb-5">Contact us now for taxi bookings, group discounts and customised itineraries.</p>
            <div className="mt-4 flex justify-center gap-3">
              <Link to="/contact" className="btn">Contact Us</Link>
              <a href="https://wa.me/919876543210?text=Hello%20Sangam%20Tours%20-%20I%20want%20a%20taxi" target="_blank" rel="noreferrer" className="btn btn-outline">WhatsApp Us</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
