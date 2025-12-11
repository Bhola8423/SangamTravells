// src/components/layout/Navbar.tsx
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";

/**
 * Simple, clean Navbar
 * - Fixed height (72px) so page content can account for it
 * - Transparent + backdrop blur over hero, solid on scroll
 * - Compact mobile menu
 */

const NAV_ITEMS = [
  { path: "/", label: "Home" },
  { path: "/tours", label: "Tours" },
  { path: "/services", label: "Services" },
  { path: "/gallery", label: "Gallery" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

const HEADER_HEIGHT = 72; // keep in sync with CSS below

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 32);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`site-header fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-md backdrop-blur-sm" : "bg-transparent"
      }`}
      style={{ height: HEADER_HEIGHT }}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#e76f51] via-[#f4a261] to-[#2a9d8f] flex items-center justify-center text-white font-bold">
            S
          </div>
          <div
            className={`${
              scrolled ? "text-slate-900" : "text-slate-900"
            } font-semibold`}
          >
            Sangam Tour & Travels
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive
                    ? "text-primary"
                    : scrolled
                    ? "text-slate-700"
                    : "text-white/95"
                } hover:text-primary`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noreferrer"
            className={`hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-full font-medium transition bg-emerald-900 text-emerald-700 bg-green-200 `}
            aria-label="WhatsApp chat"
          >
            <FaWhatsapp />
            <span className="hidden lg:inline">WhatsApp</span>
          </a>

          {/* mobile menu button */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((s) => !s)}
            className={`md:hidden p-2 rounded-md ${
              scrolled ? "text-slate-700" : "text-white"
            }`}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-white/95 z-40 transition-max-height duration-300 overflow-hidden ${
          open ? "max-h-[60vh]" : "max-h-0"
        }`}
      >
        <nav className="px-4 py-4 flex flex-col gap-2">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className="py-2 px-3 rounded-md text-slate-700 hover:bg-slate-100 font-medium"
            >
              {item.label}
            </NavLink>
          ))}
          <div className="mt-3">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="btn w-full text-center"
            >
              Get a Quote
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
