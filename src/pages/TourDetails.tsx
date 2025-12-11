// src/pages/TourDetails.tsx
import { useParams, Link, useNavigate } from "react-router-dom";
import { tours } from "../data/tours";
import { useState } from "react";

const TourDetails = () => {
  const { id } = useParams<{ id: string }>();
  const tour = tours.find(t => t.id === id);
  const nav = useNavigate();

  const [form, setForm] = useState({ name: "", phone: "", email: "", travelers: 2, date: "" });
  const [error, setError] = useState("");

  if (!tour) return (<section className="section"><p>Tour not found. <Link to="/tours" className="btn" style={{ marginLeft: 8 }}>Back</Link></p></section>);

  const handleBook = () => {
    if (!form.name.trim() || !form.phone.trim() || !form.date.trim()) {
      setError("Please fill name, phone and preferred date.");
      return;
    }
    const booking = {
      id: `${tour.id}-${Date.now()}`,
      tourId: tour.id,
      tourName: tour.name,
      ...form,
      createdAt: new Date().toISOString(),
    };
    // store locally — replace with API later
    const existing = JSON.parse(localStorage.getItem("bookings") || "[]");
    existing.push(booking);
    localStorage.setItem("bookings", JSON.stringify(existing));
    nav("/contact", { state: { booked: true, booking }});
  };

  return (
    <section className="section" style={{ maxWidth: 1000, margin: "0 auto" }}>
      <Link to="/tours" style={{ fontSize: 13, color: "#6b7280" }}>← Back to all tours</Link>
      <h1 style={{ marginTop: 8 }}>{tour.name}</h1>
      <p style={{ color: "#6b7280" }}>{tour.location} • {tour.durationDays} days • From ₹{tour.priceFrom.toLocaleString("en-IN")}</p>

      <div style={{ marginTop: 16, borderRadius: 12, overflow: "hidden", boxShadow: "var(--shadow-soft)" }}>
        <img src={tour.heroImageUrl} alt={tour.name} style={{ width: "100%", height: 420, objectFit: "cover" }} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 18, marginTop: 16 }}>
        <div>
          <h3>Overview</h3>
          <p style={{ color: "#444" }}>{tour.shortDescription}</p>

          <h3 style={{ marginTop: 12 }}>Itinerary</h3>
          <ol>
            {tour.itinerary.map((s : any, idx : number) => <li key={idx} style={{ marginBottom: 6 }}>{s}</li>)}
          </ol>

          <h3 style={{ marginTop: 12 }}>Highlights</h3>
          <ul>
            {tour.highlights.map((h : any, i : number) => <li key={i}>{h}</li>)}
          </ul>

          <h3 style={{ marginTop: 12 }}>Includes / Excludes</h3>
          <div style={{ display: "flex", gap: 12 }}>
            <div style={{ flex: 1 }}>
              <h4>Includes</h4>
              <ul>{tour.includes.map((i : any, idx : number) => <li key={idx}>{i}</li>)}</ul>
            </div>
            <div style={{ flex: 1 }}>
              <h4>Excludes</h4>
              <ul>{tour.excludes.map((i : any, idx : number) => <li key={idx}>{i}</li>)}</ul>
            </div>
          </div>

          <h3 style={{ marginTop: 12 }}>Map & Meeting Point</h3>
          <div style={{ borderRadius: 10, overflow: "hidden", background: "#fff", height: 220, display: "flex", alignItems: "center", justifyContent: "center", color: "#999" }}>
            {/* Replace this placeholder with Google Maps iframe or Mapbox component */}
            MAP PLACEHOLDER (Add Google Maps iframe or react-google-maps)
          </div>
        </div>

        <aside style={{ background: "#fff", padding: 16, borderRadius: 12, boxShadow: "var(--shadow-soft)" }}>
          <div style={{ fontSize: 13, color: "#6b7280" }}>Price From</div>
          <div style={{ fontSize: 20, fontWeight: 700, marginTop: 6 }}>₹{tour.priceFrom.toLocaleString("en-IN")}</div>

          <div style={{ marginTop: 12 }}>
            <h4 style={{ margin: "8px 0" }}>Book Now</h4>
            {error && <div style={{ color: "crimson", marginBottom: 8 }}>{error}</div>}
            <div className="form-field">
              <label>Name</label>
              <input value={form.name} onChange={(e) => setForm(s => ({...s, name: e.target.value}))} />
            </div>
            <div className="form-field">
              <label>Phone</label>
              <input value={form.phone} onChange={(e) => setForm(s => ({...s, phone: e.target.value}))} />
            </div>
            <div className="form-field">
              <label>Email (optional)</label>
              <input value={form.email} onChange={(e) => setForm(s => ({...s, email: e.target.value}))} />
            </div>
            <div className="form-field">
              <label>Travelers</label>
              <input type="number" min={1} value={form.travelers} onChange={(e) => setForm(s => ({...s, travelers: Number(e.target.value)}))} />
            </div>
            <div className="form-field">
              <label>Preferred Date</label>
              <input type="date" value={form.date} onChange={(e) => setForm(s => ({...s, date: e.target.value}))} />
            </div>

            <button className="btn" onClick={handleBook} style={{ width: "100%", marginTop: 8 }}>Confirm Booking</button>
            <button className="btn btn-outline" onClick={() => window.print()} style={{ width: "100%", marginTop: 8 }}>Print Itinerary</button>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default TourDetails;
