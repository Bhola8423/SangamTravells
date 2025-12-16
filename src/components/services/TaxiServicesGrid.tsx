import ServiceCard from "../common/ServiceCard";

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
    <section className="container py-12">
      <h2 className="text-2xl font-bold mb-6">
        Our Taxi Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {taxiServices.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
};

export default TaxiServicesGrid;
