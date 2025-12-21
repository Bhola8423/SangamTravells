import ServiceCard from "../common/ServiceCard";
import { FaTaxi } from "react-icons/fa";

const taxiServices = [
  {
    title: "Sedan Taxi",
    desc: "Comfortable AC sedan for city rides, airport transfers and small families.",
    img: "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "SUV Taxi",
    desc: "Spacious SUVs for long journeys, hill routes and family trips.",
    img: "https://images.unsplash.com/photo-1605559424843-9f2a85f93c3b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Tempo Traveller",
    desc: "Perfect for group pilgrimage tours with ample space and comfort.",
    img: "https://images.unsplash.com/photo-1622396481255-b7b1cbb7a8b7?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Mini Bus",
    desc: "Ideal for large groups, wedding travel and group yatras.",
    img: "https://images.unsplash.com/photo-1605236453806-6f4c0e01c7f4?auto=format&fit=crop&w=800&q=80",
  },
];

const TaxiServicesGrid = () => {
  return (
    <section className="container-custom px-6 md:px-12 py-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-4">
          <FaTaxi /> Premium Fleet
        </div>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-6">
          Comfortable Rides for Every Journey
        </h2>
        <p className="text-lg text-slate-600">
          Choose from our wide range of well-maintained vehicles. Whether you need a quick city ride or a long-distance pilgrimage, we have the perfect car for you.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {taxiServices.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
};

export default TaxiServicesGrid;
