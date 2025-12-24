import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaPaperPlane } from "react-icons/fa";
import ReadyToPlan from "../components/common/ReadyToPlan";
import PageHero from "../components/common/PageHero";
import SITE from "../config/site";

const Contact = () => {
  return (
    <>
      <PageHero
        title={<>Get in <span className="text-accent-yellow">Touch</span></>}
        subtitle="Have questions or ready to plan your spiritual journey? Reach out to us — we’re always happy to help."
        backgroundImage="/assets/allImages/vishwanath_temple.jpg"
      />

      {/* CONTACT SECTION */}
      <section className="container-custom px-6 md:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* LEFT: CONTACT INFO */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-4">
                <FaPaperPlane /> 24/7 Support
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-4">
                We'd Love to Hear From You
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Our team is committed to providing you with the best travel experience. Whether it's a booking inquiry or a custom plan, we are just a message away.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* Call */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary text-2xl mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <FaPhoneAlt />
                </div>
                <h3 className="font-bold text-lg text-secondary mb-1">Call Us</h3>
                <p className="text-slate-600 font-medium">+91 95216 09765</p>
              </div>

              {/* WhatsApp */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-2xl mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors">
                  <FaWhatsapp />
                </div>
                <h3 className="font-bold text-lg text-secondary mb-1">WhatsApp</h3>
                <a
                  href="https://wa.me/919521609765"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary font-medium hover:underline"
                >
                  Chat Instantly
                </a>
              </div>

              {/* Email */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <FaEnvelope />
                </div>
                <h3 className="font-bold text-lg text-secondary mb-1">Email</h3>
                <div className="flex flex-col">
                  {SITE.emails.map((email) => (
                    <a key={email} href={`mailto:${email}`} className="text-slate-600 font-medium text-sm break-all hover:underline">{email}</a>
                  ))}
                </div>
              </div>

              {/* Address */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-2xl mb-4 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  <FaMapMarkerAlt />
                </div>
                <h3 className="font-bold text-lg text-secondary mb-1">Office</h3>
                <p className="text-slate-600 font-medium text-sm">{SITE.address}</p>
              </div>
            </div>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-10 -mt-10"></div>

            <h2 className="text-2xl font-serif font-bold text-secondary mb-6 relative z-10">
              Send Us a Message
            </h2>

            <form className="space-y-5 relative z-10">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full h-12 px-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full h-12 px-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full h-12 px-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Your Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your travel plans..."
                  className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full h-14 rounded-xl bg-[#E76F51] text-white font-bold text-lg shadow-lg hover:bg-[#D65A3A] hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2"
              >
                Send Inquiry <FaPaperPlane className="text-sm" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="container-custom px-6 md:px-12 pb-20">
        <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white">
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3567.8183182878!2d82.0526587!3d26.7319372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a0fc466f7f4d5%3A0x8f358850e9faf479!2sManapur%20Post%20Office!5e0!3m2!1sen!2sin!4v1735056300000!5m2!1sen!2sin"
            width="100%"
            height="450"
            loading="lazy"
            className="grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </section>

      {/* CTA */}
      <ReadyToPlan />
    </>
  );
};

export default Contact;
