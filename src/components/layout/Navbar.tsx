// src/components/layout/Navbar.tsx
import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";
import { seoCategories } from "../../data/seoPages";

interface NavItem {
  path: string;
  label: string;
  end?: boolean;
  dropdown?: {
    path: string;
    label: string;
  }[];
}

const NAV_ITEMS: NavItem[] = [
  { path: "/", label: "Home", end: true },
  { path: "/tours", label: "Tours" },
  ...seoCategories.slice(0, 3).map(cat => ({
    path: `/info/${cat.pages[0]?.slug}`,
    label: cat.name,
    dropdown: cat.pages.map(p => ({
      path: `/info/${p.slug}`,
      label: p.title
    }))
  })),
  {
    path: "#",
    label: "More",
    dropdown: seoCategories.slice(3).map(cat => ({
      path: `/info/${cat.pages[0]?.slug}`,
      label: cat.name
    }))
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

  const isTransparent = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isTransparent
        ? "bg-transparent py-6"
        : "bg-white/95 backdrop-blur-md shadow-lg py-3"
        }`}
    >
      <div className="w-full px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent-yellow flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-105 transition-transform">
            S
          </div>
          <span className={`font-serif font-bold text-xl tracking-wide ${isTransparent ? 'text-white' : 'text-secondary'}`}>
            Sangam<span className="text-primary">Travels</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <div key={item.path} className="relative group">
              <NavLink
                to={item.path}
                end={item.end}
                className={({ isActive }: { isActive: boolean }) =>
                  `text-sm font-medium tracking-wide transition-all duration-300 relative py-2 flex items-center gap-1
                  ${isActive
                    ? "text-primary font-semibold"
                    : isTransparent
                      ? "text-white hover:text-white/80"
                      : "text-secondary hover:text-primary"
                  }`
                }
              >
                {({ isActive }: { isActive: boolean }) => (
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

              {item.dropdown && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 overflow-hidden">
                  {item.dropdown.map((subItem) => (
                    <NavLink
                      key={subItem.path}
                      to={subItem.path}
                      className={({ isActive }: { isActive: boolean }) =>
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

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((s: boolean) => !s)}
            className={`md:hidden text-2xl p-1 transition-colors ${isTransparent ? "text-white" : "text-secondary"
              }`}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 origin-top overflow-hidden ${open ? "max-h-screen opacity-100 border-t border-gray-100" : "max-h-0 opacity-0"
          }`}
      >
        <nav className="p-6 flex flex-col gap-2">
          {NAV_ITEMS.map((item) => (
            <div key={item.path} className="border-b border-gray-50 last:border-0 pb-2">
              <NavLink
                to={item.path}
                end={item.end}
                onClick={() => setOpen(false)}
                className={({ isActive }: { isActive: boolean }) =>
                  `block text-lg font-medium py-2 flex justify-between items-center
                  ${isActive
                    ? "text-primary border-primary/30 pl-2"
                    : "text-secondary hover:text-primary"
                  }`
                }
              >
                {item.label}
              </NavLink>
              {item.dropdown && (
                <div className="pl-4 space-y-1 mt-1 pb-2">
                  {item.dropdown.map((sub: { path: string; label: string }) => (
                    <NavLink
                      key={sub.path}
                      to={sub.path}
                      onClick={() => setOpen(false)}
                      className={({ isActive }: { isActive: boolean }) =>
                        `block text-sm font-medium py-1.5 text-slate-500 hover:text-primary ${isActive ? 'text-primary' : ''}`
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
            className="btn btn-primary w-full mt-4 gap-2 flex items-center justify-center py-3 rounded-xl font-bold"
          >
            <FaWhatsapp /> Chat on WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
