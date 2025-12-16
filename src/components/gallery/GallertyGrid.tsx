import { useState } from "react";
import MediaModal from "./MedialModal";

const ImageFallbackCard = ({ category }: { category: string }) => {
    return (
        <div className="h-64 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-center p-6">
            <div>
                <div className="text-4xl mb-2">📷</div>
                <div className="font-semibold text-slate-700">
                    Image coming soon
                </div>
                <div className="text-xs text-slate-500 mt-1">
                    {category}
                </div>
            </div>
        </div>
    );
};


const images = [
    {
        id: 1,
        src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
        category: "Pilgrimage",
    },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80",
        category: "Taxi",
    },
    {
        id: 3,
        src: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",
        category: "Group Tour",
    },
    {
        id: 4,
        src: "https://images.unsplash.com/photo-1519817914152-22f90e1c02df?auto=format&fit=crop&w=800&q=80",
        category: "Pilgrimage",
    },
    {
        id: 5,
        src: "https://images.unsplash.com/photo-1500534314209-a26db0f5c8c9?auto=format&fit=crop&w=800&q=80",
        category: "Taxi",
    },
    {
        id: 6,
        src: "https://images.unsplash.com/photo-1500048993959-d6a3f6b1a1b9?auto=format&fit=crop&w=800&q=80",
        category: "Group Tour",
    },
];

const categories = ["All", "Pilgrimage", "Taxi", "Group Tour"];

const GalleryGrid = () => {
    const [active, setActive] = useState("All");
    const [media, setMedia] = useState<{ type: "image" | "video"; src: string } | null>(null);


    const filtered =
        active === "All" ? images : images.filter((i) => i.category === active);

    return (
        <section className="container py-12 ">
            {/* FILTER */}
            <div className="flex flex-wrap gap-3 mb-8 my-8">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActive(cat)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition
                        ${active === cat
                                ? "bg-primary text-white shadow"
                                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* MASONRY GRID */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 my-10">
                {filtered.map((img) => (
                    <div
                        key={img.id}
                        className="relative overflow-hidden rounded-2xl cursor-pointer group bg-white shadow"
                        onClick={() => img.src && setMedia({ type: "image", src: img.src })}

                    >
                        {img.src ? (
                            <img
                                src={img.src}
                                alt="Gallery"
                                className="w-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = "none";
                                }}
                            />
                        ) : (
                            <ImageFallbackCard category={img.category} />
                        )}
                        {/* overlay */}
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />

                        {/* label */}
                        <div className="absolute bottom-3 left-3 bg-white/90 px-3 py-1 rounded-full text-xs font-medium">
                            {img.category}
                        </div>
                    </div>
                ))}
            </div>

           
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

export default GalleryGrid;
