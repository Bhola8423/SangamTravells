import { fleetData } from "../../data/fleet";
import VehicleCard from "../common/VehicleCard";
import { FaTaxi } from "react-icons/fa";

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
        {fleetData.map((vehicle, index) => (
          <VehicleCard key={index} vehicle={vehicle} />
        ))}
      </div>
    </section>
  );
};

export default TaxiServicesGrid;
