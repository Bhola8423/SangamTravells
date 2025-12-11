// src/pages/Gallery.tsx
import SectionTitle from "../components/common/SectionTitle";

const images = [
  "https://images.unsplash.com/photo-1711878202758-f5b0e8077bc0?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1583054994298-cc68ddaca862?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1638280413186-7fcef084c58c?auto=format&fit=crop&w=900&q=80",
];

const Gallery = () => {
  return (
    <section className="section">
      <SectionTitle title="Gallery & Promo Video" subtitle="Moments from our pilgrimages" />
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ marginBottom: 18 }}>
          {/* Replace videoId with your YouTube video ID */}
          <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
            <iframe
              title="Promo video"
              src={`https://www.youtube.com/embed/ysz5S6PUM-U`}
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div className="grid grid-3">
          {images.map((u, i) => (
            <div key={i} style={{ borderRadius: 12, overflow: "hidden", boxShadow: "var(--shadow-soft)" }}>
              <img src={u} alt={`gallery-${i}`} style={{ width: "100%", height: 220, objectFit: "cover" }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
