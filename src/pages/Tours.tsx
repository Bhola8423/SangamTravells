// src/pages/Tours.tsx
import { useMemo, useState } from "react";
import SectionTitle from "../components/common/SectionTitle";
import TourCard from "../components/common/TourCard";
import SearchFilter from "../components/common/SearchFilter";
import { tours } from "../data/tours";

const Tours = () => {
  const [filter, setFilter] = useState({ q: "", min: undefined as number|undefined, max: undefined as number|undefined });

  const results = useMemo(() => {
    const q = filter.q.toLowerCase();
    return tours.filter((t:any) => {
      if (q && !(t.name.toLowerCase().includes(q) || t.location.toLowerCase().includes(q) || t.shortDescription.toLowerCase().includes(q))) return false;
      if (filter.min !== undefined && t.priceFrom < filter.min) return false;
      if (filter.max !== undefined && t.priceFrom > filter.max) return false;
      return true;
    });
  }, [filter]);

  return (
    <section className="section">
      <SectionTitle title="All Tours & Packages" subtitle="Explore our pilgrimage & spiritual packages" align="left" />
      <SearchFilter onFilter={(q, min, max) => setFilter({ q: q || "", min, max })} />
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {results.length ? results.map((t : any) => <TourCard key={t.id} tour={t} />) : <p>No tours found for your search.</p>}
      </div>
    </section>
  );
};

export default Tours;
