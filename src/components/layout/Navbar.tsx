// src/components/layout/Navbar.tsx
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";

const NAV_ITEMS = [
  { path: "/", label: "Home", end: true },
  { path: "/tours", label: "Tours" },
  { path: "/services", label: "Services" },
  { path: "/gallery", label: "Gallery" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

const HEADER_HEIGHT = 72;

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-md backdrop-blur-sm" : "bg-transparent"
      }`}
      style={{ height: HEADER_HEIGHT }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#e76f51] via-[#f4a261] to-[#2a9d8f] flex items-center justify-center text-white font-bold">
            S
          </div>
          <span className="font-semibold text-slate-900">
            Sangam Tour & Travels
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.end}
              className={({ isActive }) =>
                `group relative text-sm font-medium transition-all
                ${
                  isActive
                    ? "text-[var(--primary)] font-semibold"
                    : scrolled
                    ? "text-slate-700"
                    : "text-white"
                }
                hover:text-primary`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {/* underline indicator */}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] w-full bg-[var(--primary)] transition-transform duration-300 origin-left
                      ${isActive ? "scale-x-100" : "scale-x-0"}`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium bg-green-200 text-emerald-800 hover:bg-green-300 transition"
          >
            <FaWhatsapp />
            <span className="hidden lg:inline">WhatsApp</span>
          </a>

          {/* Mobile menu toggle */}
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
        className={`md:hidden bg-white/95 backdrop-blur z-40 overflow-hidden transition-[max-height] duration-300 ${
          open ? "max-h-[60vh]" : "max-h-0"
        }`}
      >
        <nav className="px-4 py-4 flex flex-col gap-2">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.end}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `group relative py-2 px-3 rounded-md font-medium transition
                ${
                  isActive
                    ? "bg-primary/10 text-[var(--primary)]"
                    : "text-slate-700 hover:bg-slate-100"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] w-full bg-[var(--primary)] transition-transform duration-300 origin-left
                      ${isActive ? "scale-x-100" : "scale-x-0"}`}
                  />
                </>
              )}
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
