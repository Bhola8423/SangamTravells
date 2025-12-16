const TourFilters = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
      <div>
        <label className="filter-label">Location</label>
        <select className="filter-input">
          <option>All Locations</option>
          <option>Ayodhya</option>
          <option>Varanasi</option>
          <option>Prayagraj</option>
        </select>
      </div>

      <div>
        <label className="filter-label">Duration</label>
        <select className="filter-input">
          <option>Any Duration</option>
          <option>1–2 Days</option>
          <option>3–5 Days</option>
          <option>6+ Days</option>
        </select>
      </div>

      <div>
        <label className="filter-label">Budget</label>
        <select className="filter-input">
          <option>Any Budget</option>
          <option>Under ₹5,000</option>
          <option>₹5,000 – ₹10,000</option>
          <option>₹10,000+</option>
        </select>
      </div>

      <div>
        <label className="filter-label">Tour Type</label>
        <select className="filter-input">
          <option>All Types</option>
          <option>Family</option>
          <option>Group</option>
          <option>VIP Darshan</option>
        </select>
      </div>

      <button className="btn h-[44px] w-full">
        Apply Filters
      </button>
    </div>
  );
};

export default TourFilters;
