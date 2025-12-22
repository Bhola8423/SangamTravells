import { useState } from "react";
import MediaModal from "./MediaModal";

const images = [
    // PILGRIMAGE
    {
        id: 1,
        src: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",
        category: "Pilgrimage",
        label: "Ram Mandir, Ayodhya"
    },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1598324789736-4861f89564a0?auto=format&fit=crop&w=800&q=80",
        category: "Pilgrimage",
        label: "Saryu Ghat Aarti"
    },
    {
        id: 3,
        src: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80",
        category: "Pilgrimage",
        label: "Kashi Vishwanath"
    },
    {
        id: 4,
        src: "https://images.unsplash.com/photo-1519817650390-64a93db511aa?auto=format&fit=crop&w=800&q=80",
        category: "Pilgrimage",
        label: "Triveni Sangam"
    },

    // TAXI / FLEET
    {
        id: 5,
        src: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80",
        category: "Taxi",
        label: "Premium Innova Crysta"
    },
    {
        id: 6,
        src: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80",
        category: "Taxi",
        label: "Urban Cruiser"
    },
    {
        id: 7,
        src: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80",
        category: "Taxi",
        label: "Comfortable Sedan"
    },

    // GROUP TOURS / HAPPY TRAVELERS
    {
        id: 8,
        src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80",
        category: "Group Tour",
        label: "Family Yatra"
    },
    {
        id: 9,
        src: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=800&q=80",
        category: "Group Tour",
        label: "Happy Group"
    },

    // LOCAL ASSETS
    {
        id: 10,
        src: "/assets/gallery/gallery1.jpg",
        category: "Pilgrimage",
        label: "Ayodhya View"
    },
    {
        id: 11,
        src: "/assets/gallery/gallery2.jpg",
        category: "Pilgrimage",
        label: "Saryu River"
    },
    {
        id: 12,
        src: "/assets/gallery/gallery3.jpg",
        category: "Pilgrimage",
        label: "Evening Aarti"
    },
    {
        id: 13,
        src: "/assets/gallery/gallery4.jpg",
        category: "Pilgrimage",
        label: "Sacred Temple"
    },
    {
        id: 14,
        src: "/assets/gallery/gallery5.jpg",
        category: "Taxi",
        label: "Fleet in Action"
    },
    {
        id: 15,
        src: "/assets/gallery/gallery6.jpg",
        category: "Taxi",
        label: "Comfortable Ride"
    },
    {
        id: 16,
        src: "/assets/gallery/gallery7.jpg",
        category: "Taxi",
        label: "Premium Service"
    },
    {
        id: 17,
        src: "/assets/gallery/gallery8.jpg",
        category: "Group Tour",
        label: "Pilgrim Group"
    },
    {
        id: 18,
        src: "/assets/gallery/gallery9.jpg",
        category: "Group Tour",
        label: "Memorable Journey"
    },
    {
        id: 19,
        src: "/assets/gallery/gallery10.jpg",
        category: "Group Tour",
        label: "Happy Travelers"
    },
    {
        id: 20,
        src: "/assets/gallery/gallery11.jpg",
        category: "Pilgrimage",
        label: "Holy Dip"
    },
    {
        id: 21,
        src: "/assets/gallery/gallery12.jpg",
        category: "Pilgrimage",
        label: "Kashi Ghats"
    },
    {
        id: 22,
        src: "/assets/gallery/gallery13.png",
        category: "Group Tour",
        label: "Group Excursion"
    },
    {
        id: 23,
        src: "/assets/gallery/gallery15.jpg",
        category: "Group Tour",
        label: "Travel Diaries"
    },
];

const categories = ["All", "Pilgrimage", "Taxi", "Group Tour"];

const GalleryGrid = () => {
    const [active, setActive] = useState("All");
    const [media, setMedia] = useState<{ type: "image" | "video"; src: string } | null>(null);

    const filtered =
        active === "All" ? images : images.filter((i) => i.category === active);

    return (
        <section className="container-custom py-20">
            {/* FILTER TABS */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActive(cat)}
                        className={`px-6 py-2.5 rounded-full text-base font-semibold transition-all duration-300 border
                        ${active === cat
                                ? "bg-[#E76F51] text-white border-[#E76F51] shadow-lg scale-105"
                                : "bg-white text-slate-600 border-slate-200 hover:border-[#E76F51]/50 hover:text-[#E76F51]"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* MASONRY GRID */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
                {filtered.map((img) => (
                    <div
                        key={img.id}
                        className="relative overflow-hidden rounded-3xl cursor-pointer group bg-white shadow-md hover:shadow-2xl transition-all duration-500 break-inside-avoid"
                        onClick={() => img.src && setMedia({ type: "image", src: img.src })}
                    >
                        <img
                            src={img.src}
                            alt={img.label}
                            className="w-full h-auto object-cover rounded-3xl transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* overlay */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* label */}
                        <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                            <div className="bg-primary/90 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-2">
                                {img.category}
                            </div>
                            <h3 className="text-white font-serif font-bold text-lg">
                                {img.label}
                            </h3>
                        </div>

                        {/* Zoom Icon */}
                        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md w-10 h-10 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/30">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path></svg>
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
