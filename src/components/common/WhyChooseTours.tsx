const features = [
  "Verified Drivers & Guides",
  "Transparent Pricing – No Hidden Cost",
  "24×7 Customer Support",
  "Customized Yatra Plans",
];

const WhyChooseTours = () => {
  return (
    <section className="bg-slate-50 py-12">
      <div className="container">
        <h2 className="text-2xl font-bold mb-6">
          Why Choose Our Tours
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((f) => (
            <div
              key={f}
              className="bg-white rounded-xl p-4 shadow-sm text-sm font-medium"
            >
              ✔ {f}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseTours;
