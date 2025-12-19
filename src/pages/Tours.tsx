
import ReadyToPlan from "../components/common/ReadyToPlan";
import TourFilters from "../components/common/TourFilters";
import TourGrid from "../components/common/TourGrid";
import AyodhyaTourGallery from "../components/tours/AyodhyaToursGallery";
import FeaturedPackages from "../components/tours/FeaturedPackages";

const Tours = () => {
  return (
    <>
      {/* HERO / INTRO */}
      <section className="relative bg-gradient-to-r from-[#fff7f2] to-[#f8fffb] py-10">
        <div className="container pt-20 pb-24">
          <h1 className="text-3xl md:text-4xl font-extrabold">
            Pilgrimage & Yatra Tours
          </h1>
          <p className="mt-4 max-w-2xl text-slate-600 text-base md:text-lg">
            Discover thoughtfully curated pilgrimage tours with comfortable travel,
            verified guides, and transparent pricing — designed for peace of mind.
          </p>
        </div>

        {/* soft curve separator */}
        {/* <div className="absolute bottom-0 left-0 right-0 h-12 bg-white rounded-t-[40px]" /> */}
      </section>

      {/* FILTER SECTION (SEPARATE & SPACIOUS) */}
      <section className="relative bg-white my-10">
        <div className="container -mt-10 pb-10">
          <div className="rounded-2xl   bg-white p-6">
            <TourFilters />
          </div>
        </div>
      </section>

      <FeaturedPackages />
      <section className="my-16">
      <AyodhyaTourGallery />
      </section>
      {/* TOUR GRID */}
      {/* <section className="bg-slate-50">
        <div className="container py-12">
          <TourGrid />
        </div>
      </section> */}

      {/* CTA */}
      <ReadyToPlan />
    </>
  );
};

export default Tours;
