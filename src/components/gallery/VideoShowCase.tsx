import { useState } from "react";
import MediaModal from "./MediaModal";

const videos = [
  {
    id: 1,
    thumb: "/assets/seo/ayodhya_ram_mandir.png",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Ayodhya Yatra Experience",
  },
  {
    id: 2,
    thumb: "/assets/seo/varanasi_ghats.jpg",
    src: "https://www.w3schools.com/html/movie.mp4",
    title: "Varanasi Spiritual Tour",
  },
  {
    id: 3,
    thumb: "/assets/allImages/tempo_traveller1.jpeg",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Group Pilgrimage Journey",
  },
];

const VideoShowcase = () => {
  const [media, setMedia] = useState<{ type: "image" | "video"; src: string } | null>(null);

  return (
    <section className="bg-slate-900 py-16">
      <div className="container-custom px-6 md:px-12">
        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
          Watch Our Journeys
        </h2>
        <p className="text-slate-300 max-w-2xl mb-10">
          Experience our pilgrimage tours, taxi services and group yatras through
          real moments captured on the road.
        </p>

        {/* VIDEO GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              onClick={() => setMedia({ type: "video", src: video.src })}
              className="group relative cursor-pointer rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={video.thumb}
                alt={video.title}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition" />

              {/* play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-xl transition group-hover:scale-110 group-hover:bg-primary group-hover:text-white text-primary text-2xl pl-1">
                  ▶
                </div>
              </div>

              {/* title */}
              <div className="absolute bottom-4 left-4 right-4 text-white text-sm font-semibold">
                {video.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* VIDEO MODAL */}
      {media && (
        <MediaModal
          isOpen={!!media}
          type={media.type}
          src={media.src}
          onClose={() => setMedia(null)}
        />
      )}

    </section>
  );
};

export default VideoShowcase;
