// src/components/layout/Navbar.tsx
import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";

const NAV_ITEMS = [
  { path: "/", label: "Home", end: true },
  { path: "/tours", label: "Tours" },
  {
    path: "/services",
    label: "Services",
    dropdown: [
      { path: "/services", label: "All Services" },
      { path: "/taxi/ayodhya", label: "Ayodhya Taxi Service" },
      { path: "/hotels/ayodhya", label: "Hotels in Ayodhya" },
    ]
  },
  {
    path: "/destination/ayodhya",
    label: "Destinations",
    dropdown: [
      { path: "/destination/ayodhya", label: "Ayodhya" },
      { path: "/destination/varanasi", label: "Varanasi" },
      { path: "/destination/prayagraj", label: "Prayagraj" },
    ]
  },
  { path: "/gallery", label: "Gallery" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
  { path: "/booking", label: "Book Trip" },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Transparent only on Home when at the very top
  const isTransparent = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isTransparent
        ? "bg-transparent py-6"
        : "bg-white/95 backdrop-blur-md shadow-lg py-3"
        }`}
    >
      <div className="w-full px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent-yellow flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-105 transition-transform">
            S
          </div>
          <span className={`font-serif font-bold text-xl tracking-wide ${isTransparent ? 'text-white' : 'text-secondary'}`}>
            Sangam<span className="text-primary">Travels</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <div key={item.path} className="relative group">
              <NavLink
                to={item.path}
                end={item.end}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide transition-all duration-300 relative py-2 flex items-center gap-1
                  ${isActive
                    ? "text-primary font-semibold"
                    : isTransparent
                      ? "text-white hover:text-white/80"
                      : "text-secondary hover:text-primary"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {item.dropdown && <span className="text-[10px]">▼</span>}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 w-full bg-primary transition-transform duration-300 origin-left
                        ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                    />
                  </>
                )}
              </NavLink>

              {/* Dropdown Menu */}
              {item.dropdown && (
                <div className="absolute top-full left-0 w-56 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 overflow-hidden">
                  {item.dropdown.map((subItem) => (
                    <NavLink
                      key={subItem.path}
                      to={subItem.path}
                      className={({ isActive }) =>
                        `block px-5 py-3 text-sm font-medium transition-colors border-b border-gray-50 last:border-0
                        ${isActive ? "bg-primary/5 text-primary" : "text-slate-600 hover:bg-gray-50 hover:text-primary"}`
                      }
                    >
                      {subItem.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/919919405400"
            target="_blank"
            rel="noreferrer"
            className={`hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5
              ${isTransparent
                ? "bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20"
                : "bg-green-500 text-white hover:bg-green-600"
              }`}
          >
            <FaWhatsapp className="text-lg" />
            <span className="hidden lg:inline">WhatsApp</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((s) => !s)}
            className={`md:hidden text-2xl p-1 transition-colors ${isTransparent ? "text-white" : "text-secondary"
              }`}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 origin-top overflow-hidden ${open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <nav className="p-6 flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <div key={item.path}>
              <NavLink
                to={item.path}
                end={item.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block text-lg font-medium py-2 border-b border-gray-100 flex justify-between items-center
                  ${isActive
                    ? "text-primary border-primary/30 pl-2"
                    : "text-secondary hover:text-primary"
                  }`
                }
              >
                {item.label}
              </NavLink>
              {item.dropdown && (
                <div className="pl-6 space-y-2 mt-2">
                  {item.dropdown.map(sub => (
                    <NavLink
                      key={sub.path}
                      to={sub.path}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `block text-sm font-medium py-2 text-slate-500 hover:text-primary ${isActive ? 'text-primary' : ''}`
                      }
                    >
                      {sub.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a
            href="https://wa.me/919919405400"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary w-full mt-4 gap-2"
          >
            <FaWhatsapp /> Chat on WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
