// src/components/common/HeroCarousel.tsx
import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

type Slide = {
  id: string;
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  image?: string;
  // optional video: uncomment and use either image or video
  // videoUrl?: string;
  // poster?: string;
};

const slides: Slide[] = [
  {
    id: "s1",
    title: "Experience soulful journeys — Ayodhya, Varanasi & Prayagraj",
    subtitle: "Tailor-made yatra packages • Reliable taxi services • Trusted local guides",
    ctaText: "Explore Tours",
    ctaLink: "/tours",
    image:
      "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?auto=format&fit=crop&w=2000&q=80",
  },
  {
    id: "s2",
    title: "Comfortable taxi services for all group sizes",
    subtitle:
      "Sedan, SUV, Tempo Traveller, Mini Bus & Luxury Coaches — book instantly",
    ctaText: "Book Taxi",
    ctaLink: "/contact",
    image:
      "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=2000&q=80",
  },
  {
    id: "s3",
    title: "Guided Pilgrimage Tours with thoughtful itineraries",
    subtitle: "Local guides, smooth darshan timings and comfortable stays",
    ctaText: "View Featured Tours",
    ctaLink: "/tours",
    image:
      "https://images.unsplash.com/photo-1583054994298-cc68ddaca862?auto=format&fit=crop&w=2000&q=80",
  },
];

const PrevArrow: React.FC<any> = ({ onClick }) => (
  <button
    aria-label="Previous slide"
    className="hero-arrow left-4 md:left-8"
    onClick={onClick}
    type="button"
  >
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </button>
);

const NextArrow: React.FC<any> = ({ onClick }) => (
  <button
    aria-label="Next slide"
    className="hero-arrow right-4 md:right-8"
    onClick={onClick}
    type="button"
  >
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </button>
);

const HeroCarousel: React.FC = () => {
  const settings = {
    dots: true,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 4500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    accessibility: true,
    adaptiveHeight: false,
    fade: false,
    cssEase: "ease",
  };

  return (
    <div className="w-full relative ">
      <Slider {...settings}>
        {slides.map((s) => (
          <div key={s.id}>
            <div className="relative h-screen w-fulloverflow-hidden flex items-center">
              {/* Background image (cover & center). Use video tag instead if you want a video slide */}
              {s.image && (
                <img
                  src={s.image}
                  alt={s.title}
                  className="absolute inset-0 w-full h-full object-cover object-center brightness-[0.45]"
                  loading="eager"
                />
              )}

              {/* Example of video slide instead of image (commented out)
              {s.videoUrl && (
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  playsInline
                  muted
                  autoPlay
                  loop
                  poster={s.poster}
                >
                  <source src={s.videoUrl} type="video/mp4" />
                </video>
              )} */}

              {/* Centered glass panel for text (backdrop blur + semi-opaque) */}
              <div className="relative w-full flex items-center">
                <div className="container px-4 md:px-6 lg:px-8">
                  <div className="max-w-3xl">
                    <div className="backdrop-blur-sm bg-black/30 p-6 md:p-8 rounded-xl">
                      <div className="text-white space-y-4">
                        <div className="inline-block px-3 py-1 rounded-full bg-yellow-400/90 text-black text-xs font-semibold">
                          Pilgrimage • Taxi • Tours
                        </div>

                        <h2 className="heading-cursive text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight animate-fade-up">
                          {s.title}
                        </h2>

                        {s.subtitle && (
                          <p className="text-sm md:text-base text-white/90 max-w-2xl">
                            {s.subtitle}
                          </p>
                        )}

                        <div className="flex gap-3 mt-4 flex-wrap">
                          {s.ctaLink && (
                            <Link to={s.ctaLink} className="btn px-6 py-3 text-lg shadow-lg">
                              {s.ctaText || "Learn More"}
                            </Link>
                          )}
                          <a
                            href="https://wa.me/919876543210?text=Hello%20Sangam%20Tours"
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-outline px-5 py-3 text-base"
                          >
                            WhatsApp Us
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* subtle gradient at bottom for readability */}
              <div className="absolute left-0 right-0 bottom-0 h-36 bg-gradient-to-t from-black/60 to-transparent" />

              {/* scroll indicator */}
              <a
                href="#services"
                className="absolute left-1/2 transform -translate-x-1/2 bottom-8 text-white/90 flex flex-col items-center gap-1"
                aria-label="Scroll to services"
              >
                <span className="text-sm">Scroll</span>
                <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroCarousel;