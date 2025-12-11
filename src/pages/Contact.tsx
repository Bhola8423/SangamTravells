// src/pages/Contact.tsx
import { useState } from "react";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const loc = useLocation() as any;

  // If user came here after booking we can show a message
  const booked = loc.state?.booked;
  const booking = loc.state?.booking;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      alert("Please fill name and phone");
      return;
    }
    // Save to localStorage for demo purposes (replace with API)
    const contacts = JSON.parse(localStorage.getItem("contacts") || "[]");
    contacts.push({ ...form, createdAt: new Date().toISOString() });
    localStorage.setItem("contacts", JSON.stringify(contacts));
    setSent(true);
  };

  return (
    <section className="section">
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <h1>Contact Us</h1>
        {booked && (
          <div style={{ background: "#ecfccb", padding: 12, borderRadius: 8, marginBottom: 12 }}>
            <strong>Booking received!</strong>
            <div>We received your booking for <strong>{booking?.tourName}</strong>. Our team will contact you shortly.</div>
          </div>
        )}

        {sent ? (
          <div style={{ background: "#ecfccb", padding: 16, borderRadius: 10 }}>Thank you! We will get back to you shortly.</div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12 }}>
            <div className="form-field">
              <label>Name</label>
              <input value={form.name} onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))} />
            </div>
            <div className="form-field">
              <label>Email</label>
              <input value={form.email} onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))} />
            </div>
            <div className="form-field">
              <label>Phone</label>
              <input value={form.phone} onChange={(e) => setForm(f => ({ ...f, phone: e.target.value }))} />
            </div>
            <div className="form-field">
              <label>Message</label>
              <textarea rows={4} value={form.message} onChange={(e) => setForm(f => ({ ...f, message: e.target.value }))} />
            </div>
            <button className="btn" type="submit">Send Message</button>
          </form>
        )}

        <div style={{ marginTop: 18 }}>
          <h4>Contact Info</h4>
          <p>Phone: +91-98765-43210 • Email: info@sangamtourandtravels.com</p>
          <div style={{ marginTop: 8 }}>
            <h4>Office Address</h4>
            <p>Ayodhya / Prayagraj, Uttar Pradesh</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
