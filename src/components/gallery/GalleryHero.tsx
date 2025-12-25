import { FaCamera, FaHeart, FaMapMarkedAlt } from "react-icons/fa";

const GalleryHero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/allImages/naya_ghat.jpg"
          alt="Travel Memories"
          className="w-full h-full object-cover"
        />
        {/* Dark gradient for text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-white/5"></div>
      </div>

      <div className="container-custom relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 drop-shadow-2xl">
          Travel Moments & <br /> <span className="text-accent-yellow">Golden Memories</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto mb-10 leading-relaxed font-medium drop-shadow-md">
          A glimpse into the spiritual journeys, happy smiles, and beautiful destinations we've explored with our travelers.
        </p>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-white/95">
          <div className="flex items-center gap-2 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-sm">
            <FaCamera className="text-yellow-400" /> Captured Moments
          </div>
          <div className="flex items-center gap-2 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-sm">
            <FaHeart className="text-red-400" /> Happy Travelers
          </div>
          <div className="flex items-center gap-2 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-sm">
            <FaMapMarkedAlt className="text-blue-400" /> Scenic Spots
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryHero;
