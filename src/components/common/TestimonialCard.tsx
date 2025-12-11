// src/components/common/TestimonialCard.tsx
import React from "react";

interface Props {
  name: string;
  location?: string;
  message: string;
}

const TestimonialCard: React.FC<Props> = ({ name, location, message }) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-soft">
      <p className="text-gray-700 italic">“{message}”</p>
      <div className="mt-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#e76f51] to-[#2a9d8f] flex items-center justify-center text-white font-bold">{name?.[0] || "U"}</div>
        <div>
          <div className="font-semibold text-sm">{name}</div>
          {location && <div className="text-xs text-gray-500">{location}</div>}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
