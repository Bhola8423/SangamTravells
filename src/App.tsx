import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import SEO from "./components/common/SEO";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Tours from "./pages/Tours";
import TourDetails from "./pages/TourDetails";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Gallery from "./pages/Gallery";
import Booking from "./pages/Booking";
import AyodhyaTaxi from "./pages/AyodhyaTaxi";
import Destination from "./pages/Destination";
import AyodhyaHotels from "./pages/AyodhyaHotels";
import DynamicSEOPage from "./pages/DynamicSEOPage";
import Paynow from "./pages/Paynow";
import TaxiBooking from "./pages/TaxiBooking";
import Terms from "./pages/Terms";
import ScrollToTop from "./components/common/ScrollToTop";

const App = () => {
  return (
    <>
      <HelmetProvider>
        <ScrollToTop />
        <SEO
          title="Sangam Tour & Travels"
          description="Premium taxi services, Jain pilgrimage tour packages, and curated spiritual journeys in Ayodhya, Kashi, and Prayagraj."
          keywords="Ayodhya Taxi Service, Jain Tour Package, Sangam Travels, Ayodhya Pilgrimage"
          url="/"
        />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/tours/:id" element={<TourDetails />} />
            <Route path="/services" element={<Services />} />
            <Route path="/taxi/ayodhya" element={<AyodhyaTaxi />} />
            <Route path="/hotels/ayodhya" element={<AyodhyaHotels />} />
            <Route path="/destination/:city" element={<Destination />} />
            <Route path="/info/:slug" element={<DynamicSEOPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/paynow" element={<Paynow />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/taxi-booking" element={<TaxiBooking />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </HelmetProvider>
    </>
  );
};

export default App;
