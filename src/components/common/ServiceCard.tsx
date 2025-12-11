// src/components/common/ServiceCard.tsx
import React from "react";

interface Props {
  title: string;
  desc: string;
  img: string;
}

const ServiceCard: React.FC<Props> = ({ title, desc, img }) => {
  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-soft flex flex-col">
      <div className="h-44 lg:h-48 w-full overflow-hidden">
        <img src={img} alt={title} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"/>
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">{desc}</p>
        <div className="mt-auto pt-4">
          <a href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">Book this vehicle →</a>
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;
