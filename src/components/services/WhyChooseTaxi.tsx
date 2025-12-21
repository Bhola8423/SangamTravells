import { FaUserShield, FaCarAlt, FaTags, FaHeadset, FaMapMarkedAlt, FaSmileBeam } from "react-icons/fa";

const points = [
  {
    title: "Verified Drivers",
    desc: "Experienced drivers ensuring your safety on every route.",
    icon: <FaUserShield />
  },
  {
    title: "Premium Fleet",
    desc: "Clean, sanitized, and well-maintained vehicles for maximum comfort.",
    icon: <FaCarAlt />
  },
  {
    title: "Transparent Pricing",
    desc: "No hidden charges. What you see is what you pay.",
    icon: <FaTags />
  },
  {
    title: "24/7 Support",
    desc: "Round the clock customer support for any assistance during your trip.",
    icon: <FaHeadset />
  },
  {
    title: "Flexible Routes",
    desc: "Customizable pickup and drop locations to suit your schedule.",
    icon: <FaMapMarkedAlt />
  },
  {
    title: "Happy Customers",
    desc: "Trusted by 1000+ satisfied pilgrims and travelers.",
    icon: <FaSmileBeam />
  },
];

const WhyChooseTaxi = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-secondary mb-4">
            Why Choose Our Taxi Services
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            We go the extra mile to ensure your journey is not just a travel, but a memorable experience.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((p) => (
            <div
              key={p.title}
              className="bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/20 group"
            >
              <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center text-2xl text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                {p.icon}
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">{p.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseTaxi;
