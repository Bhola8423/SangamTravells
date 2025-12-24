import PageHero from "../components/common/PageHero";
import { FaGavel, FaInfoCircle } from "react-icons/fa";

const Terms = () => {
    return (
        <>
            <PageHero
                title={<>Terms & <span className="text-accent-yellow">Conditions</span></>}
                subtitle="Please read our service policies carefully to ensure a smooth and worry-free travel experience."
                backgroundImage="/assets/allImages/tulsi_udyan_temple.jpg"
            />

            <section className="container-custom px-6 md:px-12 py-20">
                <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary text-2xl">
                            <FaGavel />
                        </div>
                        <h2 className="text-3xl font-serif font-bold text-secondary">Service Policies</h2>
                    </div>

                    <div className="space-y-8 text-slate-700 leading-relaxed">
                        <section>
                            <h3 className="text-xl font-bold text-secondary mb-4 flex items-center gap-3">
                                <span className="w-2 h-8 bg-primary rounded-full"></span>
                                General Terms
                            </h3>
                            <ul className="list-disc ml-6 space-y-3">
                                <li>Provision of additional bed in the room for extra person/child on twin sharing basis.</li>
                                <li>Hotel check-in / check-out timings as per specific hotel policies.</li>
                                <li>Govt. issued ID proof (Passport, Aadhar Card, Driving License, etc.) is mandatory for all guests including children.</li>
                                <li>Special child policies apply as per hotel age-proof requirements.</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-secondary mb-4 flex items-center gap-3">
                                <span className="w-2 h-8 bg-primary rounded-full"></span>
                                Tour & Meals
                            </h3>
                            <ul className="list-disc ml-6 space-y-3">
                                <li>Meal types (Veg/Non-Veg) will be served as specified in the package details.</li>
                                <li>Special terms and conditions apply for houseboats, camps, and adventure activities.</li>
                                <li>Travelers are responsible for carrying personal items not explicitly provided in the trip package.</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-secondary mb-4 flex items-center gap-3">
                                <span className="w-2 h-8 bg-primary rounded-full"></span>
                                Logistics & Charges
                            </h3>
                            <ul className="list-disc ml-6 space-y-3">
                                <li>Luggage restrictions and extra charges apply as per airline/transport provider rules.</li>
                                <li>Flight, Train, and Bus fares are excluded from the package cost unless specified.</li>
                                <li>Group packages require a minimum/maximum number of pax as stated during booking.</li>
                                <li>Visa requirements and currency exchange are the responsibility of the traveler for international packages.</li>
                                <li>Extra charges apply for extending the tour beyond the fixed itinerary.</li>
                            </ul>
                        </section>

                        <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-dashed border-slate-300 flex items-start gap-4">
                            <FaInfoCircle className="text-primary text-xl mt-1 shrink-0" />
                            <p className="text-sm text-slate-500 italic">
                                Any other important points not covered above are subject to our standard Inclusion, Exclusion, Payment, and Cancellation policies. Please contact our support team for clarifications.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Terms;
