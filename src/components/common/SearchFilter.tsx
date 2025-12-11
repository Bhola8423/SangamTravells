// src/components/common/SearchFilter.tsx
import React, { useState } from "react";

interface Props {
  onFilter: (q: string, minPrice?: number, maxPrice?: number) => void;
}

const SearchFilter: React.FC<Props> = ({ onFilter }) => {
  const [q, setQ] = useState("");
  const [min, setMin] = useState<string>("");
  const [max, setMax] = useState<string>("");

  return (
    <div style={{ marginBottom: 18, display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
      <input
        placeholder="Search tours or location..."
        value={q}
        onChange={(e) => setQ(e.target.value)}
        style={{ padding: 10, borderRadius: 8, border: "1px solid #ddd", minWidth: 220 }}
      />
      <input
        placeholder="Min price"
        value={min}
        onChange={(e) => setMin(e.target.value)}
        style={{ padding: 10, borderRadius: 8, border: "1px solid #ddd", width: 120 }}
      />
      <input
        placeholder="Max price"
        value={max}
        onChange={(e) => setMax(e.target.value)}
        style={{ padding: 10, borderRadius: 8, border: "1px solid #ddd", width: 120 }}
      />
      <button
        className="btn"
        onClick={() =>
          onFilter(q.trim(), min ? Number(min) : undefined, max ? Number(max) : undefined)
        }
      >
        Apply
      </button>
      <button
        className="btn btn-outline"
        onClick={() => {
          setQ(""); setMin(""); setMax("");
          onFilter("", undefined, undefined);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default SearchFilter;
