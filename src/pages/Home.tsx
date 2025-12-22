// src/pages/Home.tsx
import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkedAlt, FaCar, FaUserShield, FaStar, FaArrowRight } from "react-icons/fa";
import SectionTitle from "../components/common/SectionTitle";
import TourCard from "../components/common/TourCard";
import { tours } from "../data/tours";
import HeroCarousel from "../components/common/HeroCarousel";
import TestimonialsCarousel from "../components/common/TestimonialsCarousel";
import ReadyToPlan from "../components/common/ReadyToPlan";
import Image1 from "../assets/image1.jpg"
import { fleetData } from "../data/fleet";
import VehicleCard from "../components/common/VehicleCard";

const features = [
  {
    icon: <FaMapMarkedAlt className="text-4xl text-primary" />,
    title: "Expert Local Guides",
    desc: "Experience the history of Ayodhya and Kashi with guides who know every story.",
  },
  {
    icon: <FaCar className="text-4xl text-primary" />,
    title: "Premium Fleet",
    desc: "From Swift Dzire to Luxury Tempo Travellers, we have vehicles for every group size.",
  },
  {
    icon: <FaUserShield className="text-4xl text-primary" />,
    title: "Safe & Reliable",
    desc: "verified drivers, 24/7 support, and transparent pricing for your peace of mind.",
  },
];

const Home: React.FC = () => {
  const featured = tours.slice(0, 3);

  return (
    <div className="space-y-0">
      {/* HERO SECTION */}
      <section className="relative h-screen sm:h-[90vh]">
        <HeroCarousel />
      </section>

      {/* SEARCH / BOOKING WIDGET (Overlapping Hero) */}
      <section className="relative z-20 -mt-16 container-custom px-4">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 flex flex-col md:flex-row gap-4 items-center justify-between border border-gray-100">
          <div className="flex-1 w-full">
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
              Destination
            </label>
            <select className="w-full bg-gray-50 border-none rounded-lg p-3 font-medium text-gray-800 focus:ring-2 focus:ring-primary">
              <option>Ayodhya</option>
              <option>Varanasi (Kashi)</option>
              <option>Prayagraj</option>
            </select>
          </div>
          <div className="hidden md:block w-px h-12 bg-gray-200"></div>
          <div className="flex-1 w-full">
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
              Travel Type
            </label>
            <select className="w-full bg-gray-50 border-none rounded-lg p-3 font-medium text-gray-800 focus:ring-2 focus:ring-primary">
              <option>Pilgrimage Tour</option>
              <option>Taxi Rental</option>
              <option>Airport Transfer</option>
            </select>
          </div>
          <div className="hidden md:block w-px h-12 bg-gray-200"></div>
          <div className="w-full md:w-auto">
            <Link
              to="/booking"
              className="btn btn-primary w-full md:w-auto h-12 px-8 flex items-center justify-center gap-2 shadow-primary/30 shadow-lg"
            >
              Book Now <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* DESTINATIONS / PACKAGES */}
      <section className="section bg-light mx-10">
        <div className="container-custom">
          <SectionTitle
            title="Spiritual Journeys"
            subtitle="Explore our most popular pilgrimage packages"
            align="center"
          />
          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3">
            {featured.map((t) => (
              <TourCard key={t.id} tour={t} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/tours"
              className="inline-flex items-center gap-2 font-semibold text-primary hover:text-primaryDark transition-colors"
            >
              View All Packages <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* FLEET PREVIEW */}
      <section className="section bg-gradient-to-br from-gray-50 to-orange-50/30 mx-10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-orange-200/10 rounded-full blur-2xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <SectionTitle
            title="Premium Fleet"
            subtitle="Choose the perfect ride for your journey"
            align="center"
          />

          <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {fleetData?.map((vehicle, index) => (
              <VehicleCard key={index} vehicle={vehicle} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-3 bg-white hover:bg-gray-50 text-primary font-semibold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/20"
            >
              Explore All Vehicles
              <FaArrowRight className="text-sm" />
            </Link>
          </div>
        </div>
      </section>


      {/* WHY CHOOSE US */}
      <section className="py-24 bg-white relative overflow-hidden px-20">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-50/50 skew-x-12 translate-x-32 z-0" />
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-secondary font-bold tracking-wider uppercase text-sm">
                Why Choose Sangam
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6 text-dark leading-tight">
                We Make Your Yatra <br />
                <span className="text-primary">Comfortable & Divine</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                With verified drivers, clean vehicles, and expert local guides,
                we ensure your pilgrimage is focused on devotion, not logistics.
              </p>

              <div className="space-y-8">
                {features.map((f, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center">
                      {f.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-dark">{f.title}</h4>
                      <p className="text-gray-600 mt-1">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-secondary rounded-2xl transform rotate-3 scale-95 opacity-10"></div>
              <img
                src={Image1}
                alt="Traveller in Ayodhya"
                className="rounded-2xl shadow-2xl relative z-10 w-full object-cover h-[600px]"
              />
              <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-xl shadow-xl flex items-center gap-4 max-w-xs">
                <div className="text-yellow-400 text-3xl">
                  <FaStar />
                </div>
                <div>
                  <div className="font-bold text-2xl text-dark">4.9/5</div>
                  <div className="text-sm text-gray-500">
                    Based on 1200+ Reviews
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="py-24 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container-custom relative z-10 text-center">
          <SectionTitle
            title="Experience the Divine Aura"
            subtitle="What our travellers say"
            align="center"
          />
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
            <div className="relative aspect-video">
              <iframe
                title="Sangam Promo"
                src="https://www.youtube.com/embed/uPRdS6RqAc0"
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section bg-light">
        <div className="container-custom">
          <SectionTitle
            title="Guest Stories"
            subtitle="What our travellers say"
            align="center"
          />
          <div className="mt-12 mx-10">
            <TestimonialsCarousel />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <ReadyToPlan />
    </div>
  );
};

export default Home;
