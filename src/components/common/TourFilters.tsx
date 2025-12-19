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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
      
      <div>
        <label className="filter-label">Location</label>
        <select
          className="filter-input"
          value={filters.location}
          onChange={(e) => onChange("location", e.target.value)}
        >
          <option value="All">All Locations</option>
          <option value="Ayodhya">Ayodhya</option>
          <option value="Varanasi">Varanasi</option>
          <option value="Prayagraj">Prayagraj</option>
          <option value="Multi City">Multi City</option>
        </select>
      </div>

      <div>
        <label className="filter-label">Duration</label>
        <select
          className="filter-input"
          value={filters.duration}
          onChange={(e) => onChange("duration", e.target.value)}
        >
          <option value="All">Any Duration</option>
          <option value="1-2">1–2 Days</option>
          <option value="3-5">3–5 Days</option>
          <option value="6+">6+ Days</option>
        </select>
      </div>

      <div>
        <label className="filter-label">Budget</label>
        <select
          className="filter-input"
          value={filters.budget}
          onChange={(e) => onChange("budget", e.target.value)}
        >
          <option value="All">Any Budget</option>
          <option value="Under 5000">Under ₹5,000</option>
          <option value="5000-10000">₹5,000 – ₹10,000</option>
          <option value="10000+">₹10,000+</option>
        </select>
      </div>

      <div>
        <label className="filter-label">Tour Type</label>
        <select
          className="filter-input"
          value={filters.tourType}
          onChange={(e) => onChange("tourType", e.target.value)}
        >
          <option value="All">All Types</option>
          <option value="Family">Family</option>
          <option value="Group">Group</option>
          <option value="VIP">VIP Darshan</option>
        </select>
      </div>

      <button
        onClick={onApply}
        className="btn h-[44px] w-full"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default TourFilters;
