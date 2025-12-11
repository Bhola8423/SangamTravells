// src/components/common/Hero.tsx
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="py-8">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="space-y-4">
          <span className="inline-block px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-semibold">Pilgrimage • Family • Group</span>
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">Experience soulful journeys — <span className="text-primary">Ayodhya, Varanasi & Prayagraj</span></h1>
          <p className="text-gray-600 max-w-xl">Tailored yatra packages, comfortable stay, reliable transport, and experienced local guides — designed for families & devotionals.</p>
          <div className="flex gap-3 flex-wrap mt-3">
            <Link to="/tours" className="btn">Explore Tours</Link>
            <Link to="/contact" className="btn-outline">Contact Us</Link>
            <a href="https://www.youtube.com/watch?v=ysz5S6PUM-U" target="_blank" rel="noreferrer" className="btn-outline">▶ Watch Promo</a>
          </div>
          <div className="text-sm text-gray-500 mt-2">Trusted by hundreds of families • Customizable itineraries</div>
        </div>

        <div className="rounded-xl overflow-hidden shadow-soft">
          <img src="https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?auto=format&fit=crop&w=1400&q=80" alt="Pilgrimage" className="w-full h-64 md:h-80 object-cover"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
