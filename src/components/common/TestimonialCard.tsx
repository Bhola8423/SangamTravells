// src/components/common/TestimonialCard.tsx
import React from "react";

interface Props {
  name: string;
  location?: string;
  message: string;
  photoUrl?: string;
  rating?: number;
  date?: string;
}

const TestimonialCard: React.FC<Props> = ({ name, location, message, photoUrl, rating = 4.8 }) => {
  return (
    <div className="p-4 h-full">
    <article className="relative group h-72 bg-white/80 dark:bg-slate-900/60 rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300">
        {/* subtle gradient stripe */}
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-primaryDark opacity-90" />

        <div className="p-5 md:p-6 flex flex-col h-full">
          {/* quote mark */}
          <div className="text-5xl leading-none text-primary/20 -mt-1">“</div>

          <p className="text-sm md:text-base text-slate-700 dark:text-slate-100 flex-1 mt-1">
            {message}
          </p>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-white/90 shadow-md">
                <img
                  src={photoUrl || "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=200&q=80"}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <div className="text-sm font-semibold text-slate-900 dark:text-white">{name}</div>
                {location && <div className="text-xs text-slate-500 dark:text-slate-300">{location}</div>}
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* rating */}
              <div className="inline-flex items-center gap-1 bg-white/90 dark:bg-slate-800 px-2 py-1 rounded-md shadow-sm">
                <svg className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 .587l3.668 7.431L24 9.748l-6 5.848L19.335 24 12 20.201 4.665 24 6 15.596 0 9.748l8.332-1.73z" />
                </svg>
                <span className="text-sm font-semibold text-slate-800 dark:text-white">{rating.toFixed(1)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* hover glass overlay */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.02))" }} />
      </article>
    </div>
  );
};

export default TestimonialCard;
