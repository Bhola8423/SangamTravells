// src/components/layout/Footer.tsx
import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaTwitter } from "react-icons/fa";
import SITE from "../../config/site";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-100 pt-10 pb-6">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold">{SITE.name}</h3>
          <p className="text-sm text-slate-300 mt-2">Trusted partner for pilgrimage tours across North India.</p>
          <div className="flex gap-3 mt-4">
            <a href={SITE.social.facebook} aria-label="Facebook" className="p-2 bg-white/5 rounded-md hover:bg-gradient-to-br hover:from-[#e76f51] hover:to-[#f4a261]">
              <FaFacebookF />
            </a>
            <a href={SITE.social.instagram} aria-label="Instagram" className="p-2 bg-white/5 rounded-md hover:bg-gradient-to-br hover:from-[#e76f51] hover:to-[#f4a261]">
              <FaInstagram />
            </a>
            <a href={SITE.social.youtube} aria-label="YouTube" className="p-2 bg-white/5 rounded-md hover:bg-gradient-to-br hover:from-[#e76f51] hover:to-[#f4a261]">
              <FaYoutube />
            </a>
            <a href={SITE.social.whatsapp} aria-label="WhatsApp" className="p-2 bg-white/5 rounded-md hover:bg-gradient-to-br hover:from-[#e76f51] hover:to-[#f4a261]">
              <FaWhatsapp />
            </a>
            <a href={SITE.social.twitter} aria-label="Twitter" className="p-2 bg-white/5 rounded-md hover:bg-gradient-to-br hover:from-[#e76f51] hover:to-[#f4a261]">
              <FaTwitter />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold">Contact</h4>
          <p className="text-sm text-slate-300 mt-2">{SITE.address}</p>
          <p className="text-sm text-slate-300 mt-1">Phone: <a href={`tel:${SITE.phone}`} className="text-orange-300">{SITE.phone}</a></p>
          <p className="text-sm text-slate-300 mt-1">Email: <a href={`mailto:${SITE.email}`} className="text-orange-300">{SITE.email}</a></p>
        </div>

        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="mt-2 text-sm text-slate-300 space-y-2">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/tours" className="hover:text-white">Tours</a></li>
            <li><a href="/gallery" className="hover:text-white">Gallery</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-slate-800 pt-4 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} {SITE.name} • All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
