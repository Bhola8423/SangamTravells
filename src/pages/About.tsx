import {
  FaHistory,
  FaBullseye,
  FaEye,
  FaUsers,
  FaTrophy,
  FaRoute,
  FaCar,
  FaShieldAlt,
  FaHeadset,
  FaHotel
} from "react-icons/fa";
import ReadyToPlan from "../components/common/ReadyToPlan";

const About = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=2000&q=80"
            alt="About Sangam Travels"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-white/5"></div>
        </div>

        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 drop-shadow-2xl">
            Our Journey of <br /> <span className="text-accent-yellow">Faith & Exploration</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto mb-10 leading-relaxed font-medium drop-shadow-md">
            From humble beginnings to becoming a trusted name in pilgrimage and premium travel.
            We don't just move people; we move hearts.
          </p>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="container-custom px-6 md:px-12 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm">
              <FaHistory /> Since 2010
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">
              Bringing You Closer to Your <span className="text-primary">Divine Destinations</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed text-justify">
              Sangam Tour & Travels started with a single car and a big dream: to make the sacred journeys of Ayodhya, Varanasi, and Prayagraj accessible, comfortable, and safe for every devotee.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed text-justify">
              Over the years, we have grown into a full-service travel agency, serving thousands of families, groups, and solo travelers. Our roots are grounded in traditional hospitality ("Atithi Devo Bhava"), but our services are powered by modern efficiency.
            </p>
          </div>
          <div className="relative">
            {/* Image styling */}
            <div className="absolute top-4 left-4 w-full h-full border-2 border-primary rounded-2xl z-0 transform translate-x-4 translate-y-4 hidden md:block"></div>
            <img
              src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80"
              alt="Our Story"
              className="relative w-full h-[400px] object-cover rounded-2xl shadow-2xl z-10"
            />
          </div>
        </div>
      </section>

      {/* MISSION & VISION - REDESIGNED */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 bg-[#0f172a]">
          <img src="https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&w=2000&q=80" alt="Background" className="w-full h-full object-cover opacity-40 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/80"></div>
        </div>

        <div className="container-custom px-6 md:px-12 relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission Card */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-slate-900 text-3xl shadow-lg group-hover:scale-110 transition-transform">
                  <FaBullseye />
                </div>
                <h3 className="text-3xl font-serif font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                To simplify pilgrimage and travel by providing <span className="text-accent-yellow font-semibold">safe, reliable, and soulful</span> experiences. We strive to be the bridge that connects you to your spiritual destinations without the worry of logistics.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary text-3xl shadow-lg group-hover:scale-110 transition-transform">
                  <FaEye />
                </div>
                <h3 className="text-3xl font-serif font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                To become India's <span className="text-accent-yellow font-semibold">most loved travel partner</span>, recognized for setting new standards in hospitality, transparency, and customer happiness in every journey we undertake.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-20 bg-[#1e293b] relative">
        <div className="container-custom px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-700">
            {[
              { icon: <FaUsers color="white" />, value: "5,000+", label: "Happy Travelers" },
              { icon: <FaTrophy color="white" />, value: "12+", label: "Years Experience" },
              { icon: <FaRoute color="white" />, value: "50+", label: "Tour Packages" },
              { icon: <FaCar color="white" />, value: "100+", label: "Cities Covered" },
            ].map((stat, index) => (
              <div key={index} className="p-4 group">
                <div className="text-accent-yellow text-4xl mb-4 flex justify-center transform group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold mb-2 text-white">{stat.value}</div>
                <div className="text-lg text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="container-custom px-6 md:px-12 py-20 bg-slate-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4">Why Travel With Us?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We understand that every journey is special. Here is why thousands of travelers trust Sangam Tour & Travels.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Verified Experts", desc: "Our drivers and guides are background-checked and experts in local routes.", icon: <FaUsers /> },
            { title: "Safety First", desc: "Well-maintained fleet with GPS tracking and emergency support availability.", icon: <FaShieldAlt /> },
            { title: "Transparency", desc: "No hidden costs. What you see is what you pay. Honest pricing policy.", icon: <FaEye /> },
            { title: "24/7 Support", desc: "Our support team is always awake to help you, anytime, anywhere.", icon: <FaHeadset /> },
            { title: "Custom Plans", desc: "We tailor-make itineraries to suit your budget, time, and preferences.", icon: <FaRoute /> },
            { title: "Best Hotels", desc: "We partner with top-rated hotels to ensure a comfortable stay for you.", icon: <FaHotel /> },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 group">
              {/* Fixed hover icon issue by using simpler state */}
              <div className="w-16 h-16 bg-[#fff7ed] rounded-2xl flex items-center justify-center text-primary text-3xl mb-6 group-hover:bg-[#E76F51] group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed text-justify">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <ReadyToPlan />
    </>
  );
};

export default About;
