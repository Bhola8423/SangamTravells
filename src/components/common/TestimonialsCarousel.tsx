// src/components/common/TestimonialsCarousel.tsx
import React from "react";
import Slider from "react-slick";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    location: "New Delhi",
    text: "Excellent service! The driver was very polite and the car was clean. We covered Ayodhya and Varanasi comfortably.",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Mumbai",
    text: "Sangam Travels made our family pilgrimage so easy. Hotel bookings and darshan arrangements were perfect.",
    rating: 5,
  },
  {
    id: 3,
    name: "Amit Patel",
    location: "Gujarat",
    text: "Best taxi service in Ayodhya. Very punctual and reasonable rates. Highly recommended.",
    rating: 5,
  },
  {
    id: 4,
    name: "Sneha Gupta",
    location: "Lucknow",
    text: "We booked a tempo traveller for our group. The vehicle was brand new and the journey was smooth.",
    rating: 4,
  },
];

const TestimonialsCarousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="py-8">
      <Slider {...settings} className="pb-10">
        {testimonials.map((t) => (
          <div key={t.id} className="px-4 h-full">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full flex flex-col hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <FaQuoteLeft className="text-primary/20 text-4xl mb-4" />
              <p className="text-gray-600 mb-6 flex-grow italic leading-relaxed">"{t.text}"</p>

              <div className="flex items-center gap-1 mb-3 text-yellow-400">
                {[...Array(t.rating)].map((_, i) => <FaStar key={i} size={14} />)}
              </div>

              <div className="border-t border-gray-50 pt-4 mt-auto">
                <h4 className="font-bold text-gray-900">{t.name}</h4>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">{t.location}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialsCarousel;
