const points = [
  "Verified & Experienced Drivers",
  "Clean & Well-Maintained Vehicles",
  "Transparent Pricing – No Hidden Charges",
  "24×7 Customer Support",
  "Flexible Pickup & Drop Locations",
  "Trusted by 1000+ Customers",
];

const WhyChooseTaxi = () => {
  return (
    <section className="container py-14">
      <h2 className="text-2xl font-bold mb-6">
        Why Choose Our Taxi Services
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {points.map((p) => (
          <div
            key={p}
            className="bg-white rounded-xl p-4 shadow-sm text-sm font-medium"
          >
            ✔ {p}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseTaxi;
