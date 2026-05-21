"use client";

import Image from "next/image";
import { useState } from "react";

const AREAS = ["Personal Injury","Mass Tort","Hair Relaxer","Talcum Powder","Tylenol Pregnancy","Other"];

const inputStyle: React.CSSProperties = {
  width: "100%", height: "2.875rem",
  padding: "0 0.875rem",
  fontFamily: "var(--font-sans)", fontSize: "0.875rem",
  background: "var(--white)",
  border: "1px solid rgba(0,0,0,0.1)",
  borderRadius: "0.5rem",
  color: "var(--text-dark)", outline: "none",
};

export default function ContactSection() {
  const [form, setForm] = useState({ fullName:"", email:"", phone:"", practiceArea:"" });
  const [sent, setSent] = useState(false);
  const handle = (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e: React.FormEvent) => { e.preventDefault(); setSent(true); };

  return (
    <section id="contact" style={{ position: "relative", overflow: "hidden" }}>
      {/* Section Gradient bg */}
      <div aria-hidden style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image src="/images/Section Grediant.jpg" alt="" fill style={{ objectFit: "cover" }}/>
      </div>

      <div className="wrap" style={{ position: "relative", zIndex: 1, paddingBlock: "clamp(3.5rem,6vw,6rem)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(3rem,6vw,7rem)", alignItems: "center" }}>

          {/* LEFT — contact info */}
          <div>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", fontWeight: 600, color: "rgba(201,168,76,0.75)", letterSpacing: "0.06em", marginBottom: "0.75rem" }}>
              Contact Us
            </p>
            <h2 style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem,4vw,3rem)",
              fontWeight: 400, lineHeight: 1.1,
              color: "var(--ivory)", marginBottom: "2rem",
            }}>
              Let&apos;s Start a<br/>
              <em style={{ fontStyle: "italic" }}>Conversation</em>
            </h2>

            {/* 4 contact items in a row */}
            <div style={{ display: "flex", gap: "clamp(1.25rem,3vw,2.5rem)", flexWrap: "wrap" }}>
              {[
                {
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.07 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
                  text: "(424) 447-1147", href: "tel:4244471147",
                },
                {
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
                  text: "info@ymg-legal.com", href: "mailto:info@ymg-legal.com",
                },
                {
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
                  text: "Las Vegas Nevada", href: null,
                },
                {
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--gold)"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
                  text: "LinkedIn", href: "https://linkedin.com",
                },
              ].map((item) => (
                <div key={item.text} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.375rem" }}>
                  {item.icon}
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", color: "rgba(255,245,224,0.75)", textDecoration: "none" }}>
                      {item.text}
                    </a>
                  ) : (
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", color: "rgba(255,245,224,0.75)" }}>{item.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — white form card */}
          <div style={{
            background: "var(--white)", borderRadius: "1rem",
            padding: "clamp(1.75rem,3vw,2.5rem)",
            boxShadow: "0 8px 48px rgba(0,0,0,0.15)",
            border: "1px solid rgba(201,168,76,0.1)",
          }}>
            {sent ? (
              <div style={{ textAlign: "center", paddingBlock: "2.5rem" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>✅</div>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.25rem", color: "var(--walnut)", marginBottom: "0.625rem" }}>We&apos;ll be in touch!</h3>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "var(--text-mid)", lineHeight: 1.6 }}>
                  Expect a call from our team within 1 business day.
                </p>
              </div>
            ) : (
              <>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.1875rem", fontWeight: 700, color: "var(--text-dark)", marginBottom: "0.3rem" }}>
                  Book Your Free Strategy Call
                </h3>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.8125rem", color: "var(--text-mid)", marginBottom: "1.375rem", lineHeight: 1.5 }}>
                  Tell us about your firm and we&apos;ll show you how we can help.
                </p>

                <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                    <input name="fullName" type="text" required placeholder="Full Name" value={form.fullName} onChange={handle} style={inputStyle}/>
                    <input name="email" type="email" required placeholder="Email" value={form.email} onChange={handle} style={inputStyle}/>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                    <input name="phone" type="tel" required placeholder="Phone Number" value={form.phone} onChange={handle} style={inputStyle}/>
                    <select name="practiceArea" required value={form.practiceArea} onChange={handle} style={{ ...inputStyle, cursor: "pointer" }}>
                      <option value="" disabled>Practice Area</option>
                      {AREAS.map((a) => <option key={a} value={a}>{a}</option>)}
                    </select>
                  </div>
                  <button type="submit" className="btn btn-gold" style={{ width: "100%", justifyContent: "center", marginTop: "0.25rem" }}>
                    Book My Free Call
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr !important; } }
        input:focus, select:focus { border-color: var(--gold) !important; box-shadow: 0 0 0 2px rgba(201,168,76,0.15); }
        select option { color: var(--text-dark); }
      `}</style>
    </section>
  );
}
