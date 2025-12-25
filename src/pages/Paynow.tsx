import React from "react";
import PageHero from "../components/common/PageHero";
import SectionTitle from "../components/common/SectionTitle";
import { FaQrcode, FaUniversity, FaMoneyBillWave } from "react-icons/fa";


const Paynow: React.FC = () => {
    return (
        <>
            <PageHero
                title="Make a Payment"
                subtitle="Secure and fast payment options for your bookings."
                backgroundImage="/assets/allImages/payment_images5.jpg"
            />

            <section className="py-20 bg-white">
                <div className="container-custom px-6 md:px-12">
                    <SectionTitle
                        title="Payment Options"
                        subtitle="Choose your preferred method to complete the transaction"
                        align="center"
                    />

                    <div className="mt-16 grid gap-10 md:grid-cols-2 max-w-5xl mx-auto">
                        {/* Bank Transfer */}
                        <div className="bg-slate-50 p-10 rounded-3xl shadow-lg border border-slate-100 hover:shadow-xl transition-all">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl">
                                    <FaUniversity />
                                </div>
                                <h3 className="text-2xl font-bold text-secondary">Bank Transfer</h3>
                            </div>

                            <div className="space-y-4 text-slate-700">
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="font-semibold text-gray-500">Account Name</span>
                                    <span className="font-bold text-secondary">Sangam Tour & Travels</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="font-semibold text-gray-500">Bank Name</span>
                                    <span className="font-bold text-secondary">HDFC Bank</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="font-semibold text-gray-500">Account Number</span>
                                    <span className="font-bold text-secondary">50200085421568</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="font-semibold text-gray-500">IFSC Code</span>
                                    <span className="font-bold text-secondary">HDFC0000125</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="font-semibold text-gray-500">Branch</span>
                                    <span className="font-bold text-secondary">Faizabad Civil Lines</span>
                                </div>
                            </div>
                        </div>

                        {/* UPI / QR Code */}
                        <div className="bg-slate-50 p-10 rounded-3xl shadow-lg border border-slate-100 hover:shadow-xl transition-all">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 text-2xl">
                                    <FaQrcode />
                                </div>
                                <h3 className="text-2xl font-bold text-secondary">UPI / QR Code</h3>
                            </div>

                            <div className="flex flex-col items-center justify-center space-y-6">
                                <div className="bg-white p-4 rounded-xl shadow-inner border border-gray-200">
                                    {/* Placeholder for QR Code - using an icon for now or a generic placeholder image */}
                                    <img
                                        src="/assets/allImages/payment_images1.jpeg"
                                        alt="UPI QR Code"
                                        className="w-48 h-48 object-contain"
                                    />
                                </div>
                                <div className="text-center">
                                    <p className="font-bold text-lg text-secondary">Scan to Pay via UPI</p>
                                    <p className="text-slate-500 text-sm">Accepted: GPay, PhonePe, Paytm, BHIM</p>
                                </div>

                                <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full border border-green-100 text-green-700 font-medium">
                                    <FaMoneyBillWave />
                                    <span>UPI ID: 9521609765@upi</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 text-center max-w-2xl mx-auto">
                        <p className="text-slate-600">
                            After making the payment, please share the screenshot/transaction ID on WhatsApp or Email for confirmation.
                        </p>
                        <div className="mt-6 flex flex-wrap justify-center gap-4">
                            <a href="https://wa.me/919521609765" target="_blank" rel="noreferrer" className="btn btn-primary">
                                Share on WhatsApp
                            </a>
                            <a href="mailto:info@sangamtourandtravels.com" className="btn bg-slate-800 text-white hover:bg-slate-900">
                                Email Confirmation
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Paynow;
