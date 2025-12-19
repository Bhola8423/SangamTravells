const images = [
  "https://images.unsplash.com/photo-1548013146-72479768bada",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1519817650390-64a93db511aa",
  "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1",
  "https://images.unsplash.com/photo-1500048993959-d6a3f6b1a1b9",
];

const AyodhyaTourGallery = () => {
  return (
    <section className="container py-16">
      <h2 className="text-3xl font-extrabold mb-8">
        Ayodhya Tour Package – 05 Nights & 06 Days
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img) => (
          <div
            key={img}
            className="relative h-60 rounded-2xl overflow-hidden group"
          >
            <img
              src={`${img}?auto=format&fit=crop&w=800&q=80`}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AyodhyaTourGallery;
