import { Link } from 'react-router-dom';
import { FaWhatsapp, FaArrowRight } from 'react-icons/fa';

const ReadyToPlan = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-secondary/5 skew-y-3 transform origin-bottom-left scale-110 z-0"></div>

      <div className="container-custom relative z-10 text-center">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-white to-orange-50 p-10 md:p-14 rounded-3xl shadow-2xl border border-white/40">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">Start Your Journey</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Ready to plan your <span className="text-primary">divine yatra?</span></h2>
          <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            We offer exclusive taxi packages, hotel bookings, and guided tours for Ayodhya, Kashi, and Prayagraj. Get a free quote today!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn btn-primary px-8 py-4 text-lg shadow-primary/30 shadow-lg flex items-center justify-center gap-2">
              Get Free Quote <FaArrowRight />
            </Link>
            <a
              href="https://wa.me/919919405400?text=Hello%20Sangam%20Tours%20-%20I%20want%20to%20plan%20a%20trip"
              target="_blank"
              rel="noreferrer"
              className="btn bg-white text-green-600 border border-gray-200 px-8 py-4 text-lg hover:bg-gray-50 flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="text-xl" /> WhatsApp Us
            </a>
          </div>

          <p className="mt-6 text-sm text-gray-400">No hidden charges • 24/7 Support • Instant Booking</p>
        </div>
      </div>
    </section>
  )
}

export default ReadyToPlan