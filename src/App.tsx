import { Routes, Route } from "react-router-dom";
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
import Terms from "./pages/Terms";
import ScrollToTop from "./components/common/ScrollToTop";

const App = () => {
  return (
    <>
      <ScrollToTop />
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
          <Route path="/booking" element={<Booking />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
