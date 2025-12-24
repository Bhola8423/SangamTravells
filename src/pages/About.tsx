import {
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
import PageHero from "../components/common/PageHero";
import WhyChoose from "../components/common/WhyChoose";

const About = () => {
  return (
    <>
      <PageHero
        title={<>Our Journey of <br /> <span className="text-accent-yellow">Faith & Exploration</span></>}
        subtitle="From humble beginnings to becoming a trusted name in pilgrimage and premium travel. We don't just move people; we move hearts."
        backgroundImage="/assets/allImages/guptar_ghat.jpg"
      />

      {/* STORY SECTION */}
      <section className="container-custom px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm mb-4">
              Escape The Ordinary, Go with Sangam
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-6 italic">
              “Escape The Ordinary, Go with Sangam”
            </h2>
            <h3 className="text-2xl font-bold text-secondary mb-4">Our Story</h3>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                <strong>Sangam Tour & Travels Ayodhya (Complete Travel Solutions)</strong>. We have been providing exceptional services in the Ayodhya, Varanasi, Prayagraj, and Naimisharanya circuit since <strong>2022</strong>.
              </p>
              <p>
                India is a multi-cultural nation famous for its ancient history and Jain temples. Ayodhya, Ratanpuri, Trilokpuri, Shravasti, and Kakandi are key pilgrimage sites. Our journey began with a vision to connect pilgrims and travelers to these sacred roots with comfort and deep spiritual connection.
              </p>
              <p>
                We offer all types of Tour & Travels services, including group tours, spiritual tours, pilgrimage tours, hotel booking, professional guide services, ground support, and all types of transportation across the Sangam region and throughout India. We are dedicated to offering the <strong>Best Travel Services in Ayodhya</strong>.
              </p>
            </div>
          </div>
          <div className="relative">
            {/* Image styling */}
            <div className="absolute top-4 left-4 w-full h-full border-2 border-primary rounded-2xl z-0 transform translate-x-4 translate-y-4 hidden md:block"></div>
            <img
              src="/assets/allImages/sankat_mochan_hanuman_mandir.jpg"
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
          <img src="/assets/allImages/bharat_temple.jpg" alt="Background" className="w-full h-full object-cover opacity-40 mix-blend-overlay" />
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
              { icon: <FaUsers color="white" />, value: "1,200+", label: "Happy Travelers" },
              { icon: <FaTrophy color="white" />, value: "2+", label: "Years Experience" },
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

      <WhyChoose
        title="Why Travel With Us?"
        subtitle="We understand that every journey is special. Here is why thousands of travelers trust Sangam Tour & Travels."
        backgroundColor="bg-slate-50"
        items={[
          { title: "Verified Experts", desc: "Our drivers and guides are background-checked and experts in local routes.", icon: <FaUsers /> },
          { title: "Safety First", desc: "Well-maintained fleet with GPS tracking and emergency support availability.", icon: <FaShieldAlt /> },
          { title: "Transparency", desc: "No hidden costs. What you see is what you pay. Honest pricing policy.", icon: <FaEye /> },
          { title: "24/7 Support", desc: "Our support team is always awake to help you, anytime, anywhere.", icon: <FaHeadset /> },
          { title: "Custom Plans", desc: "We tailor-make itineraries to suit your budget, time, and preferences.", icon: <FaRoute /> },
          { title: "Best Hotels", desc: "We partner with top-rated hotels to ensure a comfortable stay for you.", icon: <FaHotel /> },
        ]}
      />

      {/* CTA */}
      <ReadyToPlan />
    </>
  );
};

export default About;
