// src/components/layout/Navbar.tsx
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white shadow sticky top-0 z-30">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#e76f51] via-[#f4a261] to-[#2a9d8f] flex items-center justify-center text-white font-bold">S</div>
          <div>
            <div className="font-bold text-sm">Sangam Tour & Travels</div>
            <div className="text-xs text-gray-500">Pilgrimage & Spiritual Tours</div>
          </div>
        </Link>

        {/* desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavLink to="/" className={({isActive})=> isActive ? "text-primary font-semibold" : "text-gray-700"}>Home</NavLink>
          <NavLink to="/tours" className={({isActive})=> isActive ? "text-primary font-semibold" : "text-gray-700"}>Tours</NavLink>
          <NavLink to="/services" className={({isActive})=> isActive ? "text-primary font-semibold" : "text-gray-700"}>Services</NavLink>
          <NavLink to="/gallery" className={({isActive})=> isActive ? "text-primary font-semibold" : "text-gray-700"}>Gallery</NavLink>
          <NavLink to="/about" className={({isActive})=> isActive ? "text-primary font-semibold" : "text-gray-700"}>About</NavLink>
          <NavLink to="/contact" className={({isActive})=> isActive ? "text-primary font-semibold" : "text-gray-700"}>Contact</NavLink>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/contact" className="btn text-sm">Get a Quote</Link>
        </div>

        {/* mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
            {open ? (
              <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            ) : (
              <path d="M4 8h16M4 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            )}
          </svg>
        </button>
      </div>

      {/* mobile panel */}
      <div className={`md:hidden bg-white border-t ${open ? "block" : "hidden"}`}>
        <div className="container py-3 flex flex-col gap-2">
          <NavLink to="/" onClick={()=>setOpen(false)} className="text-gray-700">Home</NavLink>
          <NavLink to="/tours" onClick={()=>setOpen(false)} className="text-gray-700">Tours</NavLink>
          <NavLink to="/services" onClick={()=>setOpen(false)} className="text-gray-700">Services</NavLink>
          <NavLink to="/gallery" onClick={()=>setOpen(false)} className="text-gray-700">Gallery</NavLink>
          <NavLink to="/about" onClick={()=>setOpen(false)} className="text-gray-700">About</NavLink>
          <NavLink to="/contact" onClick={()=>setOpen(false)} className="text-gray-700">Contact</NavLink>
          <Link to="/contact" onClick={()=>setOpen(false)} className="btn mt-2">Get a Quote</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
