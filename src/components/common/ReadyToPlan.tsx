import { Link } from 'react-router-dom'

const ReadyToPlan = () => {
  return (
     <section className="py-12">
        <div className="container text-center">
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-[#fff4f0] to-[#fff8f4] p-8 rounded-xl shadow-soft">
            <h2 className="text-2xl font-bold">Ready to plan your yatra?</h2>
            <p className="text-gray-600 mt-5 mb-5">Contact us now for taxi bookings, group discounts and customised itineraries.</p>
            <div className="mt-4 flex justify-center gap-3">
              <Link to="/contact" className="btn">Contact Us</Link>
              <a href="https://wa.me/919876543210?text=Hello%20Sangam%20Tours%20-%20I%20want%20a%20taxi" target="_blank" rel="noreferrer" className="btn btn-outline">WhatsApp Us</a>
            </div>
          </div>
        </div>
      </section>
  )
}

export default ReadyToPlan