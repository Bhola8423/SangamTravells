// src/pages/Home.tsx
import React from "react";
import SEO from "../components/common/SEO";
import { Link } from "react-router-dom";
import { FaMapMarkedAlt, FaCar, FaUserShield, FaStar, FaArrowRight } from "react-icons/fa";
import SectionTitle from "../components/common/SectionTitle";
import HeroCarousel from "../components/common/HeroCarousel";
import TestimonialsCarousel from "../components/common/TestimonialsCarousel";
import ReadyToPlan from "../components/common/ReadyToPlan";
import Image1 from "../assets/image1.jpg"
import { fleetData } from "../data/fleet";
import VehicleCard from "../components/common/VehicleCard";
import { destinations } from "../data/destinations";
import FeaturedPackages from "../components/tours/FeaturedPackages";
import { tours } from "../data/tours";
import TourCard from "../components/common/TourCard";

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
    <div className="space-y-0 text-secondary">
      {/* HERO SECTION */}
      <SEO
        title="Sangam Tour & Travels"
        description="Your trusted partner for spiritual journeys in Ayodhya, Kashi, and Prayagraj. Best taxi service and tour packages."
        keywords="Ayodhya Taxi, Kashi Tour, Prayagraj Sangam, Spiritual Tour India"
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "TravelAgency",
            "name": "Sangam Tour & Travels",
            "image": "https://sangamtravells.com/logo.png",
            "url": "https://sangamtravells.com",
            "telephone": "+919621147099",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Ayodhya",
              "addressLocality": "Ayodhya",
              "addressRegion": "UP",
              "postalCode": "224123",
              "addressCountry": "IN"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Sangam Tour & Travels",
            "description": "Premium taxi services and tour packages in Ayodhya.",
            "priceRange": "₹"
          }
        ]}
      />
      <h1 className="sr-only">Sangam Tour & Travels - Best Ayodhya Taxi Service & Jain Tour Packages</h1>
      <section className="relative h-screen sm:h-[90vh]">
        <HeroCarousel />
      </section>

      {/* SEARCH / BOOKING WIDGET (Overlapping Hero) */}
      <section className="relative z-20 -mt-10 md:-mt-16 container-custom px-4">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 flex flex-col md:flex-row gap-4 items-center justify-between border border-gray-100">
          <div className="flex-1 w-full">
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
              Destination
            </label>
            <select className="w-full bg-gray-50 border-none rounded-lg p-3 font-medium text-gray-800 focus:ring-2 focus:ring-primary">
              <option>Ayodhya</option>
              <option>Varanasi (Kashi)</option>
              <option>Prayagraj</option>
              <option>Chitrakoot</option>
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

      {/* SPECIAL BUDGET PACKAGES (1499 deals) */}
      <section className="py-24 bg-light overflow-hidden">
        <div className="container-custom">
          <SectionTitle
            title="Special Tour Packages"
            subtitle="Exclusive group deals with breakfast menu and special pricing"
            align="center"
          />
          <div className="mt-12">
            <FeaturedPackages />
          </div>
        </div>
      </section>

      {/* SPIRITUAL JOURNEYS (Standard Itineraries) */}
      <section className="py-24 bg-white relative">
        <div className="container-custom px-6 md:px-12">
          <SectionTitle
            title="Spiritual Journeys"
            subtitle="Explore our most popular pilgrimage packages with detailed itineraries"
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
              View More Professional Packages <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* POPULAR DESTINATIONS GRID */}
      <section className="py-24 bg-slate-50 mx-auto rounded-3xl">
        <div className="container-custom">
          <SectionTitle
            title="Popular Destinations"
            subtitle="Discover the rich heritage across the holy cities"
            align="left"
          />

          <div className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {Object.values(destinations).map((dest) => (
              <Link
                key={dest.id}
                to={`/destination/${dest.id}`}
                className="group relative h-80 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <img
                  src={dest.heroImage}
                  alt={dest.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold font-serif mb-1">{dest.name}</h3>
                  <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                    {dest.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DIVINE HERITAGE LANDMARKS */}
      <section className="py-24 bg-white mx-10">
        <div className="container-custom">
          <SectionTitle
            title="Divine Heritage of Ayodhya & Kashi"
            subtitle="Explore the sacred sites that define our spiritual roots"
            align="center"
          />

          <div className="mt-16 grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-slate-50 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100">
              <h3 className="text-2xl font-bold text-secondary mb-4 border-b-2 border-primary w-fit pb-2">Ram Mandir</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                The Ram Mandir is being built at the site of Ram Janmabhoomi, the birthplace of Lord Rama. Supervised by Shri Ram Janmabhoomi Teerth Kshetra, it stands as a testament to faith and architectural brilliance.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100">
              <h3 className="text-2xl font-bold text-secondary mb-4 border-b-2 border-primary w-fit pb-2">Hanuman Garhi</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                A 10th-century cave temple dedicated to Lord Hanuman. It is one of the most important temples in Ayodhya, housing a beautiful idol of Anjani with young Hanuman on her lap.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100">
              <h3 className="text-2xl font-bold text-secondary mb-4 border-b-2 border-primary w-fit pb-2">Kashi Vishwanath</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Located in the heart of Varanasi, this Jyotirlinga shrine is dedicated to Lord Shiva, the Lord of the Universe. The current structure was built by Ahilyabai Holkar in 1780.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100">
              <h3 className="text-2xl font-bold text-secondary mb-4 border-b-2 border-primary w-fit pb-2">Kanak Bhawan</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Believed to be a gift to Devi Sita by Kaikeyi after her marriage to Lord Ram. This private palace of Lord Ram and Mata Sita is a masterpiece of Ayodhya's spiritual architecture, renovated by Vikramaditya.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100">
              <h3 className="text-2xl font-bold text-secondary mb-4 border-b-2 border-primary w-fit pb-2">Triveni Sangam</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                The most pious confluence where the Ganga, Yamuna, and mythical Saraswati meet. It is the place of the first sacrifice by Lord Brahma and a major pilgrimage center.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100">
              <h3 className="text-2xl font-bold text-secondary mb-4 border-b-2 border-primary w-fit pb-2">Chitrakoot</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                The sacred forest where Lord Rama, Sita, and Lakshman spent over 11 years of their exile. It is believe that the supreme gods (Brahma, Vishnu, Shiva) took incarnations here.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100">
              <h3 className="text-2xl font-bold text-secondary mb-4 border-b-2 border-primary w-fit pb-2">Naya Ghat</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                A top player in the category in Ayodhya, Naya Ghat acts as a one-stop destination for pilgrims seeking spiritual solace along the holy Sarayu river.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100">
              <h3 className="text-2xl font-bold text-secondary mb-4 border-b-2 border-primary w-fit pb-2">Sri Nageshwarnath</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Dedicated to Lord Shiva, this temple houses one of the 12 jyotirlingas. It is believed to have been raised by Lord Rama’s son, Kush, at Ram-ki-Pairi.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100">
              <h3 className="text-2xl font-bold text-secondary mb-4 border-b-2 border-primary w-fit pb-2">Guptar Ghat</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                The sacred spot on the banks of Saryu where Lord Rama is believed to have taken Jal Samadhi. These beautiful ghats were built by Raja Darshan Singh in the 19th century.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100">
              <h3 className="text-2xl font-bold text-secondary mb-4 border-b-2 border-primary w-fit pb-2">Tomb of Bahu Begum</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                A memorial built for the queen of Nawab Shuja-ud-Daula. It is one of the tallest buildings in Faizabad and a notable example of non-Mughal Muslim architecture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FLEET PREVIEW */}
      <section className="section bg-gradient-to-br from-slate-50 to-orange-50/30 mx-10 relative overflow-hidden">
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
            subtitle="Explore our spiritual presence"
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
      <section className="section bg-slate-50">
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
