import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import Slider from "react-slick";
import { FaCheckCircle, FaChevronLeft, FaChevronRight, FaArrowRight } from "react-icons/fa";
import { seoPages, seoCategories } from "../data/seoPages";
import { destinations } from "../data/destinations";
import ReadyToPlan from "../components/common/ReadyToPlan";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DynamicSEOPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const page = seoPages.find((p) => p.slug === slug);

    if (!page) {
        return <Navigate to="/404" replace />;
    }

    // Find related pages in the same category
    const category = seoCategories.find(cat => cat.pages.some(p => p.slug === slug));
    const relatedPages = category?.pages.filter(p => p.slug !== slug) || [];

    // Get location-specific places
    const destinationData = page.locationKey ? destinations[page.locationKey] : null;
    const mustVisitPlaces = destinationData?.places || [];

    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div className="bg-white">
            {/* HERO CAROUSEL */}
            <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
                <Slider {...carouselSettings} className="h-full">
                    {page.heroImages.map((img, idx) => (
                        <div key={idx} className="relative h-[60vh] md:h-[80vh]">
                            <img
                                src={img}
                                alt={`${page.title} - ${idx + 1}`}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <div className="container-custom text-center px-4">
                                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 drop-shadow-lg">
                                        {page.title}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </section>

            {/* CONTENT SECTIONS */}
            <section className="py-20">
                <div className="container-custom">
                    {page.sections.map((section, idx) => (
                        <div key={idx} className={`flex flex-col md:flex-row items-center gap-12 mb-20 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                            <div className="flex-1">
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-6">
                                    {section.title}
                                </h2>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    {section.description}
                                </p>
                                <div className="mt-8 space-y-3">
                                    <div className="flex items-center gap-3 text-slate-700">
                                        <FaCheckCircle className="text-primary" />
                                        <span>Professional & Experienced Guides</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-700">
                                        <FaCheckCircle className="text-primary" />
                                        <span>Transparent Pricing & No Hidden Costs</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 w-full grid grid-cols-1 gap-4">
                                {section.images?.map((img, imgIdx) => (
                                    <div key={imgIdx} className="rounded-2xl overflow-hidden shadow-xl aspect-video lg:aspect-auto h-80">
                                        <img src={img} alt={section.title} className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* MUST VISIT PLACES */}
            {mustVisitPlaces.length > 0 && (
                <section className="py-20 bg-slate-50">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary mb-4 italic">
                                Must visit places in {destinationData?.name}
                            </h2>
                            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {mustVisitPlaces.map((place, idx) => (
                                <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            src={place.image}
                                            alt={place.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    </div>
                                    <div className="p-8">
                                        <h3 className="text-2xl font-serif font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                                            {place.name}
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed">
                                            {place.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* VIDEO SHOWCASE (If Available) */}
            {page.videos && page.videos.length > 0 && (
                <section className="py-20 bg-slate-50">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Video Experience</h2>
                            <p className="text-slate-500 mt-2">Glimpses of the divine aura and our services</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            {page.videos.map((vid, idx) => (
                                <div key={idx} className="aspect-video rounded-3xl overflow-hidden shadow-2xl relative group bg-black">
                                    <iframe
                                        title={`Video ${idx}`}
                                        src={vid}
                                        className="w-full h-full"
                                        frameBorder="0"
                                        allowFullScreen
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA SECTION */}
            <section className="py-20 bg-primary text-white">
                <div className="container-custom text-center">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">Ready to start your divine journey?</h2>
                    <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
                        Book your {page.title.split('-')[0].trim()} with Sangam Travels today and experience the best of hospitality and devotion.
                    </p>
                    <Link
                        to={`/booking?tourId=${page.tourId || 'general'}`}
                        className="inline-flex items-center gap-3 bg-white text-primary font-bold py-4 px-10 rounded-full text-xl shadow-2xl hover:bg-slate-50 transition-all hover:scale-105"
                    >
                        Book Now <FaArrowRight />
                    </Link>
                </div>
            </section>

            {/* RELATED PAGES / CATEGORY MENU */}
            {relatedPages.length > 0 && (
                <section className="py-20 bg-white border-t border-slate-100">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-3xl font-serif font-bold text-secondary">More in {category?.name}</h2>
                            <p className="text-slate-500 mt-2">Explore related services and packages</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {relatedPages.map((rp) => (
                                <Link
                                    key={rp.slug}
                                    to={`/info/${rp.slug}`}
                                    className="p-4 rounded-xl border border-slate-200 hover:border-primary hover:text-primary transition-all text-center font-medium bg-slate-50 hover:bg-white hover:shadow-lg"
                                >
                                    {rp.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <ReadyToPlan />
        </div>
    );
};

const NextArrow = (props: { onClick?: () => void }) => {
    const { onClick } = props;
    return (
        <button
            onClick={onClick}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md hover:bg-primary hover:text-white transition-all duration-300"
        >
            <FaChevronRight />
        </button>
    );
};

const PrevArrow = (props: { onClick?: () => void }) => {
    const { onClick } = props;
    return (
        <button
            onClick={onClick}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md hover:bg-primary hover:text-white transition-all duration-300"
        >
            <FaChevronLeft />
        </button>
    );
};

export default DynamicSEOPage;
