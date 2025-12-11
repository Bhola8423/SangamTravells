// src/components/common/TestimonialsCarousel.tsx
import React from "react";
import Slider from "react-slick";
import { testimonials } from "../../data/testimonials";

const TestimonialCard: React.FC<{ t: any }> = ({ t }) => {
  return (
    <div className="p-4 h-full">
      <div className="bg-white rounded-xl p-4 shadow-soft h-full flex flex-col">
        <p className="text-gray-700 italic flex-1">“{t.message}”</p>

        <div className="mt-4 flex items-center gap-3">
          <img
            src={
              t.photoUrl ||
              "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=200&q=80"
            }
            alt={t.name}
            className="w-11 h-11 rounded-full object-cover"
          />
          <div>
            <div className="text-sm font-semibold">{t.name}</div>
            {t.location && (
              <div className="text-xs text-gray-500">{t.location}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialsCarousel: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 900, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {testimonials.map((t) => (
          <div key={t.id}>
            <TestimonialCard t={t} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialsCarousel;
