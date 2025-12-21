import React from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaRupeeSign, FaSuitcaseRolling, FaFilter, FaSearch } from 'react-icons/fa';

interface Props {
  filters: {
    location: string;
    duration: string;
    budget: string;
    tourType: string;
  };
  onChange: (key: string, value: string) => void;
  onApply: () => void;
}

const TourFilters: React.FC<Props> = ({ filters, onChange, onApply }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8 w-full">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
        <div className="p-2 bg-primary/10 rounded-lg text-primary">
          <FaFilter />
        </div>
        <h3 className="text-xl font-serif font-bold text-secondary">Find Your Journey</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">

        {/* Location Filter */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
            <FaMapMarkerAlt className="text-primary" /> Location
          </label>
          <div className="relative">
            <select
              className="w-full h-12 pl-4 pr-10 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none cursor-pointer hover:bg-white"
              value={filters?.location}
              onChange={(e) => onChange("location", e.target.value)}
            >
              <option value="All">All Locations</option>
              <option value="Ayodhya">Ayodhya</option>
              <option value="Varanasi">Varanasi</option>
              <option value="Prayagraj">Prayagraj</option>
              <option value="Multi City">Multi City</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>
        </div>

        {/* Duration Filter */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
            <FaCalendarAlt className="text-primary" /> Duration
          </label>
          <div className="relative">
            <select
              className="w-full h-12 pl-4 pr-10 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none cursor-pointer hover:bg-white"
              value={filters?.duration}
              onChange={(e) => onChange("duration", e.target.value)}
            >
              <option value="All">Any Duration</option>
              <option value="1-2">1–2 Days</option>
              <option value="3-5">3–5 Days</option>
              <option value="6+">6+ Days</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>
        </div>

        {/* Budget Filter */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
            <FaRupeeSign className="text-primary" /> Budget
          </label>
          <div className="relative">
            <select
              className="w-full h-12 pl-4 pr-10 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none cursor-pointer hover:bg-white"
              value={filters?.budget}
              onChange={(e) => onChange("budget", e.target.value)}
            >
              <option value="All">Any Budget</option>
              <option value="Under 5000">Under ₹5,000</option>
              <option value="5000-10000">₹5,000 – ₹10,000</option>
              <option value="10000+">₹10,000+</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>
        </div>

        {/* Tour Type Filter */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
            <FaSuitcaseRolling className="text-primary" /> Tour Type
          </label>
          <div className="relative">
            <select
              className="w-full h-12 pl-4 pr-10 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none cursor-pointer hover:bg-white"
              value={filters?.tourType}
              onChange={(e) => onChange("tourType", e.target.value)}
            >
              <option value="All">All Types</option>
              <option value="Family">Family</option>
              <option value="Group">Group</option>
              <option value="VIP">VIP Darshan</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>
        </div>

        {/* Search Button */}
        <div className="flex items-end">
          <button
            onClick={onApply}
            className="h-12 w-full bg-primary hover:bg-primary/90 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
          >
            <FaSearch /> Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourFilters;
