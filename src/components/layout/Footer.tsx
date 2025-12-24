// src/components/layout/Footer.tsx
import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmazonPay,
  FaSearch,
} from "react-icons/fa";
import SITE from "../../config/site";
import { Link } from "react-router-dom";

/**
 * Modern Footer — Tailwind + TypeScript
 * Drop into src/components/layout/Footer.tsx
 * Ensure react-icons is installed: npm i react-icons
 */

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return setMsg("Please enter an email");
    setSubmitting(true);
    try {
      // placeholder: store locally. Replace with API call.
      const subs = JSON.parse(localStorage.getItem("sangam_subs") || "[]");
      subs.unshift({ email, createdAt: new Date().toISOString() });
      localStorage.setItem("sangam_subs", JSON.stringify(subs));
      setMsg("Thanks — subscription saved!");
      setEmail("");
    } catch (err) {
      setMsg("Could not save subscription.");
    } finally {
      setSubmitting(false);
      setTimeout(() => setMsg(null), 3500);
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-100">
      {/* Top trust row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#e76f51] to-[#2a9d8f] flex items-center justify-center font-bold text-white shadow-lg">S</div>
          <div>
            <div className="font-semibold">Sangam Tour & Travels</div>
            <div className="text-xs text-slate-300">Trusted pilgrimage and taxi services</div>
          </div>
        </div>

        <div className="flex gap-6 items-center">
          <div className="text-sm text-slate-300 hidden sm:block">Trusted by <span className="font-semibold text-white">1,200+</span> travellers</div>
          <div className="flex items-center gap-3">
            <div className="text-xs text-slate-300">ISO Certified</div>
            <div className="h-6 w-px bg-slate-700" />
            <div className="text-xs text-slate-300">100% Verified Guides</div>
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">About</h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              We craft comfortable and memorable pilgrimage experiences with reliable transport, verified local guides, and family-friendly accommodation. Fast taxi bookings and customised itineraries.
            </p>

            <div className="flex items-center gap-3 mt-3">
              <a href={SITE.social.facebook} aria-label="Facebook" target="_blank" rel="noreferrer" className="footer-social">
                <FaFacebookF />
              </a>
              <a href={SITE.social.instagram} aria-label="Instagram" target="_blank" rel="noreferrer" className="footer-social">
                <FaInstagram />
              </a>
              <a href={SITE.social.youtube} aria-label="YouTube" target="_blank" rel="noreferrer" className="footer-social">
                <FaYoutube />
              </a>
              <a href={SITE.social.whatsapp} aria-label="WhatsApp" target="_blank" rel="noreferrer" className="footer-social">
                <FaWhatsapp />
              </a>
              {SITE.social.justdial && (
                <a href={SITE.social.justdial} aria-label="Justdial" target="_blank" rel="noreferrer" className="footer-social">
                  <FaSearch />
                </a>
              )}
              <a href={SITE.social.twitter} aria-label="Twitter" target="_blank" rel="noreferrer" className="footer-social hidden sm:inline-flex">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2 text-sm text-slate-300">
              <Link to="/" className="hover:text-white">Home</Link>
              <Link to="/tours" className="hover:text-white">All Tours</Link>
              <Link to="/services" className="hover:text-white">Taxi Services</Link>
              <Link to="/gallery" className="hover:text-white">Gallery</Link>
              <Link to="/about" className="hover:text-white">About Us</Link>
              <Link to="/contact" className="hover:text-white">Contact</Link>
            </div>

            <div className="mt-3">
              <h5 className="text-sm font-medium text-slate-200">Payments accepted</h5>
              <div className="flex items-center gap-3 mt-2 text-slate-300">
                <FaCcVisa className="w-6 h-6" />
                <FaCcMastercard className="w-6 h-6" />
                <FaCcAmazonPay className="w-6 h-6 hidden sm:inline-flex" />
                {/* add more icons as needed */}
              </div>
            </div>
          </div>

          {/* Contact + Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>

            <div className="flex items-start gap-3 text-sm text-slate-300">
              <FaMapMarkerAlt className="mt-1 text-slate-400" />
              <div>
                <div className="text-slate-200">{SITE.address}</div>
                <div className="text-xs text-slate-400">We operate across Uttar Pradesh & nearby regions</div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <FaPhoneAlt className="text-slate-400" />
              <a href={`tel:${SITE.phone}`} className="text-slate-100 font-medium hover:underline">{SITE.phone}</a>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <FaEnvelope className="text-slate-400" />
              <div className="flex flex-col">
                {SITE.emails.map((email) => (
                  <a key={email} href={`mailto:${email}`} className="text-slate-100 hover:underline">{email}</a>
                ))}
              </div>
            </div>

            <form onSubmit={subscribe} className="mt-4">
              <label htmlFor="footer-sub-email" className="sr-only">Email for offers</label>
              <div className="flex gap-2">
                <input
                  id="footer-sub-email"
                  type="email"
                  inputMode="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-3 py-2 rounded-lg bg-slate-800 text-slate-100 placeholder-slate-400 border border-slate-700 focus:ring-2 focus:ring-primary/30 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-primaryDark text-white font-medium shadow hover:brightness-105 transition"
                >
                  {submitting ? "Saving..." : "Subscribe"}
                </button>
              </div>
              {msg && <div className="mt-2 text-xs text-emerald-300">{msg}</div>}
            </form>
          </div>
        </div>
      </div>

      {/* Legal & bottom */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-slate-400">
          <div>{SITE.copyrightText}</div>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-white">Privacy</Link>
            <Link to="/terms" className="hover:text-white">Terms</Link>
            <a href={`https://wa.me/${SITE.social.whatsapp?.replace(/\D/g, "")}`} className="hidden md:inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-slate-200 hover:bg-white/20">
              <FaWhatsapp /> Chat
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
