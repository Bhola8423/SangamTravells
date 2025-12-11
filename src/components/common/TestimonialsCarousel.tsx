// src/components/common/TestimonialsCarousel.tsx
import React from "react";
import Slider from "react-slick";
import { testimonials } from "../../data/testimonials";
import TestimonialCard from "./TestimonialCard";

const settings = {
  dots: false,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  centerMode: false,
  adaptiveHeight: true,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 3 } },
    { breakpoint: 900, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } },
  ],
};

const TestimonialsCarousel: React.FC = () => {
  return (
    <div className="w-full">
      <Slider {...settings}>
        {testimonials.map((t) => (
          <div key={t.id} className="px-2">
            <TestimonialCard
              name={t.name}
              location={t.location}
              message={t.message}
              photoUrl={t.photoUrl}
              rating={4.8}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialsCarousel;
