import TaxiServicesGrid from "../components/services/TaxiServicesGrid";
import HowItWorks from "../components/services/HowItWorks";
import WhyChooseTaxi from "../components/services/WhyChooseTaxi";
import ReadyToPlan from "../components/common/ReadyToPlan";

const Services = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-gradient-to-r from-[#f8fffb] to-[#fff7f2] my-10 py-10">
        <div className="container pt-20 pb-24">
          <h1 className="text-3xl md:text-4xl font-extrabold">
            Taxi & Travel Services
          </h1>
          <p className="mt-4 max-w-2xl text-slate-600 text-base md:text-lg">
            Comfortable, reliable and affordable taxi services for pilgrimage,
            local sightseeing and outstation journeys.
          </p>
        </div>

      </section>

      {/* TAXI SERVICES */}
      <TaxiServicesGrid />

      {/* HOW IT WORKS */}
      <HowItWorks />

      {/* WHY CHOOSE US */}
      <WhyChooseTaxi />

      {/* CTA */}
      <ReadyToPlan />
    </>
  );
};

export default Services;
