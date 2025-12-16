import TourCard from "../common/TourCard";
import { tours } from "../../data/tours";

const TourGrid = () => {
  return (
    <section className="container py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tours.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </section>
  );
};

export default TourGrid;
