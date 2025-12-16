import ReadyToPlan from "../components/common/ReadyToPlan";

const Contact = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-gradient-to-r from-[#fff7f2] to-[#f8fffb] my-10 py-10">
        <div className="container pt-20 pb-24">
          <h1 className="text-3xl md:text-4xl font-extrabold">
            Contact Us
          </h1>
          <p className="mt-4 max-w-2xl text-slate-600 text-base md:text-lg">
            Have questions or ready to plan your journey?  
            Reach out to us — we’re always happy to help.
          </p>
        </div>

      </section>

      {/* CONTACT SECTION */}
      <section className="container py-14">
        <div className="grid lg:grid-cols-2 gap-10">
          
          {/* LEFT: CONTACT INFO */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">
              Get in Touch
            </h2>

            <p className="text-slate-600">
              Our team is available 24×7 to assist you with taxi bookings,
              pilgrimage tours, and customized travel plans.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {/* Call */}
              <div className="bg-white rounded-xl p-5 shadow-md">
                <div className="text-primary text-xl mb-2">📞</div>
                <h3 className="font-semibold">Call Us</h3>
                <p className="text-sm text-slate-600 mt-1">
                  +91 98765 43210
                </p>
              </div>

              {/* WhatsApp */}
              <div className="bg-white rounded-xl p-5 shadow-md">
                <div className="text-green-500 text-xl mb-2">💬</div>
                <h3 className="font-semibold">WhatsApp</h3>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-slate-600 mt-1 inline-block hover:underline"
                >
                  Chat with us instantly
                </a>
              </div>

              {/* Email */}
              <div className="bg-white rounded-xl p-5 shadow-md">
                <div className="text-blue-500 text-xl mb-2">✉️</div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-sm text-slate-600 mt-1">
                  support@sangamtourandtravels.com
                </p>
              </div>

              {/* Address */}
              <div className="bg-white rounded-xl p-5 shadow-md">
                <div className="text-orange-500 text-xl mb-2">📍</div>
                <h3 className="font-semibold">Office Address</h3>
                <p className="text-sm text-slate-600 mt-1">
                  Prayagraj, Uttar Pradesh, India
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <h2 className="text-xl font-bold mb-4">
              Send Us a Message
            </h2>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full h-11 px-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary/30 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="10 digit mobile number"
                  className="w-full h-11 px-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary/30 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your travel plan"
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary/30 outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full h-11 rounded-lg bg-[var(--primary)] from-primary to-primaryDark text-white font-semibold shadow hover:scale-105 transition"
              >
                Submit Inquiry
              </button>

              <p className="text-xs text-slate-500 text-center mt-2">
                We usually respond within 30 minutes.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="container pb-14">
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <iframe
            title="Office Location"
            src="https://www.google.com/maps?q=Prayagraj&output=embed"
            width="100%"
            height="350"
            loading="lazy"
          />
        </div>
      </section>

      {/* CTA */}
      <ReadyToPlan />
    </>
  );
};

export default Contact;
