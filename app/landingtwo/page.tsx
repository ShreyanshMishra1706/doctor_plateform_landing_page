"use client";
import { useState, useEffect, useRef } from "react";

/* ─── CONFIG ─────────────────────────────────────────────── */
const DR = {
  name: "Dr. Arjun Mehta",
  title: "Senior Consultant",
  specialty: "General Physician & Internal Medicine",
  area: "Connaught Place, New Delhi",
  phone: "+91 98765 43210",
  whatsapp: "919876543210",
  experience: 18,
  patients: "12,000+",
  rating: "4.9",
  reviews: "800+",
  since: 2006,
  timings: [
    { day: "Monday – Friday", morn: "9:00 AM – 1:00 PM", eve: "5:00 PM – 8:30 PM" },
    { day: "Saturday",        morn: "9:00 AM – 2:00 PM", eve: null },
    { day: "Sunday",          morn: null,                 eve: null },
  ],
  qualifications: [
    { deg: "MBBS", inst: "AIIMS, New Delhi" },
    { deg: "MD – Internal Medicine", inst: "PGIMER, Chandigarh" },
    { deg: "Fellowship – Cardiology", inst: "Apollo Hospitals" },
  ],
  services: [
    { n: "01", icon: "◈", title: "General Consultation", desc: "Holistic diagnosis and treatment planning for adults and children of all ages." },
    { n: "02", icon: "◈", title: "Chronic Disease Care", desc: "Long-term management of diabetes, hypertension, thyroid and metabolic conditions." },
    { n: "03", icon: "◈", title: "Preventive Medicine", desc: "Annual health screens, cardiac risk profiling and lifestyle optimisation." },
    { n: "04", icon: "◈", title: "Lab Report Review", desc: "Expert interpretation of blood panels, imaging and specialist investigations." },
    { n: "05", icon: "◈", title: "Pediatric Health", desc: "Child wellness, immunisation schedules and growth tracking from birth." },
    { n: "06", icon: "◈", title: "Home Visits", desc: "Personalised doorstep care for the elderly, post-surgical and bed-bound patients." },
  ],
  testimonials: [
    { name: "Priya S.", since: "Patient since 2019", text: "Dr. Mehta diagnosed what three other specialists had missed. His thoroughness and genuine concern for wellbeing are extraordinary.", stars: 5 },
    { name: "Rajesh K.", since: "Diabetic care", text: "My HbA1c went from 9.2 to 6.4 in eight months. He doesn't simply prescribe — he educates and empowers you.", stars: 5 },
    { name: "Sunita V.", since: "Family patient", text: "Our entire family has consulted Dr. Mehta for years. He remembers every detail of your history personally. Old-school medicine at its finest.", stars: 5 },
  ],
};
/* ─────────────────────────────────────────────────────────── */

function useFade(threshold = 0.12) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); io.disconnect(); } }, { threshold });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return [ref, vis];
}

function Reveal({ children, delay = 0, dir = "up", style = {} }) {
  const [ref, vis] = useFade();
  const from = dir === "up" ? "translateY(30px)" : dir === "left" ? "translateX(-30px)" : dir === "right" ? "translateX(30px)" : "translateY(0px)";
  return (
    <div ref={ref} style={{
      opacity: vis ? 1 : 0,
      transform: vis ? "translate(0)" : from,
      transition: `opacity 0.8s cubic-bezier(.22,1,.36,1) ${delay}ms, transform 0.8s cubic-bezier(.22,1,.36,1) ${delay}ms`,
      ...style,
    }}>
      {children}
    </div>
  );
}

function Stars({ n }) {
  return <span style={{ letterSpacing: 2, color: "#D4A853", fontSize: "0.85rem" }}>{"★".repeat(n)}</span>;
}

export default function Page2() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const wa = `https://wa.me/${DR.whatsapp}?text=${encodeURIComponent("Hi Doctor, I want to book an appointment")}`;
  const tel = `tel:${DR.phone}`;
  // TODO: Change your location
  const maps = "https://maps.google.com/?q=Connaught+Place+New+Delhi";

  const C = {
    ivory:    "#FAF7F2",
    cream:    "#F3EDE3",
    burg:     "#6B1F2A",
    burgDark: "#4A1219",
    burgMid:  "#8B2F3C",
    gold:     "#D4A853",
    goldPale: "#F0DFA8",
    rose:     "#F5E6E8",
    text:     "#2C1810",
    muted:    "#8A7060",
    line:     "rgba(107,31,42,0.12)",
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Outfit:wght@300;400;500;600&display=swap');
        *,*::before,*::after { box-sizing:border-box; margin:0; padding:0; }
        html { scroll-behavior:smooth; }
        body { font-family:'Outfit',sans-serif; background:${C.ivory}; color:${C.text}; }
        a { text-decoration:none; color:inherit; }

        .serif { font-family:'Cormorant Garamond',serif; }

        /* buttons */
        .btn-burg {
          background:${C.burg}; color:white; border:none; padding:14px 34px;
          border-radius:2px; font-family:'Outfit',sans-serif; font-weight:500;
          font-size:.88rem; letter-spacing:.06em; text-transform:uppercase;
          cursor:pointer; transition:all .3s; display:inline-flex; align-items:center; gap:10px;
        }
        .btn-burg:hover { background:${C.burgDark}; transform:translateY(-2px); box-shadow:0 8px 28px rgba(107,31,42,.28); }
        .btn-ghost {
          background:transparent; color:${C.burg}; border:1.5px solid ${C.burg}; padding:13px 32px;
          border-radius:2px; font-family:'Outfit',sans-serif; font-weight:500;
          font-size:.88rem; letter-spacing:.06em; text-transform:uppercase;
          cursor:pointer; transition:all .3s; display:inline-flex; align-items:center; gap:10px;
        }
        .btn-ghost:hover { background:${C.burg}; color:white; transform:translateY(-2px); }
        .btn-wa {
          background:#25D366; color:white; border:none; padding:14px 34px;
          border-radius:2px; font-family:'Outfit',sans-serif; font-weight:500;
          font-size:.88rem; letter-spacing:.06em; text-transform:uppercase;
          cursor:pointer; transition:all .3s; display:inline-flex; align-items:center; gap:10px;
        }
        .btn-wa:hover { background:#1DA851; transform:translateY(-2px); box-shadow:0 8px 28px rgba(37,211,102,.3); }

        /* dividers */
        .rule { width:100%; height:1px; background:${C.line}; }
        .rule-gold { width:56px; height:2px; background:${C.gold}; }
        .rule-gold-c { width:56px; height:2px; background:${C.gold}; margin:0 auto; }

        /* cards */
        .svc-card {
          border:1px solid ${C.line}; padding:32px 28px; transition:all .35s; background:${C.ivory}; position:relative; overflow:hidden;
        }
        .svc-card::after {
          content:''; position:absolute; left:0; top:0; width:3px; height:0;
          background:${C.burg}; transition:height .4s cubic-bezier(.22,1,.36,1);
        }
        .svc-card:hover { background:white; box-shadow:0 12px 48px rgba(107,31,42,.09); transform:translateY(-4px); }
        .svc-card:hover::after { height:100%; }

        .testi-card {
          background:white; padding:36px; border-bottom:3px solid ${C.gold};
          box-shadow:0 2px 24px rgba(107,31,42,.06); transition:transform .3s;
        }
        .testi-card:hover { transform:translateY(-4px); box-shadow:0 12px 40px rgba(107,31,42,.1); }

        /* timing row */
        .t-row { display:flex; align-items:center; justify-content:space-between; padding:18px 24px; border:1px solid ${C.line}; margin-bottom:10px; transition:background .3s; }
        .t-row:hover { background:${C.rose}; }

        /* utils */
        .wrap { max-width:1200px; margin:0 auto; padding:0 40px; }
        .tag { font-size:.72rem; font-weight:600; letter-spacing:.2em; text-transform:uppercase; color:${C.burg}; }

        @keyframes slideDown { from{opacity:0;transform:translateY(-10px)} to{opacity:1;transform:translateY(0)} }
        @keyframes shimmer { 0%,100%{opacity:.6}50%{opacity:1} }

        @media(max-width:900px){
          .hero-g,.loc-g,.about-g { grid-template-columns:1fr!important; }
          .svc-g { grid-template-columns:1fr 1fr!important; }
          .testi-g { grid-template-columns:1fr!important; }
          .hide-m { display:none!important; }
          .show-m { display:flex!important; }
          .wrap { padding:0 20px; }
          section { padding:64px 0!important; }
        }
      `}</style>

      {/* ══ MOBILE CTA BAR ══ */}
      <div className="show-m" style={{ display:"none", position:"fixed", bottom:0, left:0, right:0, zIndex:999, background:"white", borderTop:`1px solid ${C.line}`, padding:"12px 16px", gap:10 }}>
        <a href={tel} className="btn-burg" style={{ flex:1, justifyContent:"center", fontSize:".8rem" }}>📞 Call</a>
        <a href={wa}  className="btn-wa"   style={{ flex:1, justifyContent:"center", fontSize:".8rem" }}>💬 WhatsApp</a>
      </div>

      {/* ══ NAVBAR ══ */}
      <header style={{
        position:"fixed", top:0, left:0, right:0, zIndex:100, height:68,
        background: scrolled ? "rgba(250,247,242,.97)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? `1px solid ${C.line}` : "1px solid rgba(255,255,255,.1)",
        transition:"all .4s",
        display:"flex", alignItems:"center",
      }}>
        <div className="wrap" style={{ width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          {/* Logo */}
          <div style={{ display:"flex", alignItems:"center", gap:12 }}>
            <div style={{ width:40, height:40, border:`2px solid ${scrolled ? C.burg : "rgba(255,255,255,.6)"}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.1rem", transition:"border-color .4s" }}>✚</div>
            <div>
              <div style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:600, fontSize:"1.1rem", color: scrolled ? C.text : "white", lineHeight:1.1, transition:"color .4s" }}>Dr. Arjun Mehta</div>
              <div style={{ fontSize:".62rem", letterSpacing:".15em", textTransform:"uppercase", color: scrolled ? C.muted : "rgba(255,255,255,.6)", transition:"color .4s" }}>General Physician</div>
            </div>
          </div>
          {/* Nav */}
          <nav className="hide-m" style={{ display:"flex", gap:38, alignItems:"center" }}>
            {[["About","#about"],["Services","#services"],["Timings","#timings"],["Reviews","#reviews"],["Location","#location"]].map(([l,h])=>(
              <a key={l} href={h} style={{ fontSize:".8rem", letterSpacing:".1em", textTransform:"uppercase", fontWeight:500, color: scrolled ? C.muted : "rgba(255,255,255,.75)", transition:"color .3s" }}
                onMouseEnter={e=>e.currentTarget.style.color=C.burg} onMouseLeave={e=>e.currentTarget.style.color=scrolled?C.muted:"rgba(255,255,255,.75)"}>{l}</a>
            ))}
          </nav>
          <a href={wa} className="btn-burg hide-m" style={{ padding:"9px 22px", fontSize:".78rem" }}>Book Appointment</a>
        </div>
      </header>

      {/* ══ HERO ══ */}
      <section style={{ background:`linear-gradient(160deg, ${C.burgDark} 0%, ${C.burg} 45%, #A03040 100%)`, minHeight:"100vh", display:"flex", flexDirection:"column", justifyContent:"flex-end", position:"relative", overflow:"hidden", padding:"0" }}>
        {/* Decorative grid overlay */}
        <div style={{ position:"absolute", inset:0, backgroundImage:`linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)`, backgroundSize:"80px 80px", pointerEvents:"none" }} />
        {/* Gold accent bar top */}
        <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:`linear-gradient(90deg, ${C.gold}, transparent)` }} />
        {/* Large faded number */}
        <div style={{ position:"absolute", right:-30, bottom:-60, fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(200px,30vw,380px)", fontWeight:700, color:"rgba(255,255,255,.04)", lineHeight:1, userSelect:"none", pointerEvents:"none" }}>
          {DR.since}
        </div>

        <div className="wrap" style={{ paddingBottom:80, paddingTop:140, width:"100%" }}>
          <div className="hero-g" style={{ display:"grid", gridTemplateColumns:"1fr 420px", gap:60, alignItems:"flex-end" }}>
            {/* LEFT */}
            <div>
              <div style={{ display:"inline-flex", alignItems:"center", gap:10, marginBottom:28 }}>
                <div style={{ width:24, height:1, background:C.gold }} />
                <span style={{ fontSize:".7rem", letterSpacing:".22em", textTransform:"uppercase", color:C.goldPale, fontWeight:500 }}>Est. {DR.since} · New Delhi</span>
              </div>
              <h1 className="serif" style={{ fontSize:"clamp(3rem,7vw,6.5rem)", fontWeight:300, color:"white", lineHeight:1.0, marginBottom:0 }}>
                Excellence<br/>
                <em style={{ fontStyle:"italic", color:C.goldPale }}>in Medicine</em>,<br/>
                <span style={{ fontWeight:600 }}>Compassion</span><br/>
                in Practice.
              </h1>
              <div style={{ width:1, height:48, background:`rgba(255,255,255,.2)`, margin:"36px 0" }} />
              <p style={{ color:"rgba(255,255,255,.6)", fontSize:"1rem", lineHeight:1.8, maxWidth:520, marginBottom:40 }}>
                {DR.experience}+ years of trusted, evidence-based care in Internal Medicine.<br/>
                Serving families across New Delhi since {DR.since}.
              </p>
              <div style={{ display:"flex", gap:14, flexWrap:"wrap" }}>
                <a href={wa}  className="btn-wa"   >💬 Book via WhatsApp</a>
                <a href={tel} className="btn-ghost" style={{ color:"rgba(255,255,255,.85)", borderColor:"rgba(255,255,255,.35)" }}>📞 {DR.phone}</a>
              </div>
              {/* Stats row */}
              <div style={{ display:"flex", gap:48, marginTop:56, paddingTop:40, borderTop:"1px solid rgba(255,255,255,.12)", flexWrap:"wrap" }}>
                {[[DR.experience+"+","Years Experience"],[DR.patients,"Patients Treated"],[DR.rating+"/5","Patient Rating"],[DR.reviews+"+","Verified Reviews"]].map(([v,l])=>(
                  <div key={l}>
                    <div className="serif" style={{ fontSize:"2.2rem", fontWeight:600, color:"white", lineHeight:1 }}>{v}</div>
                    <div style={{ fontSize:".7rem", letterSpacing:".12em", textTransform:"uppercase", color:"rgba(255,255,255,.45)", marginTop:4 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* RIGHT – credential card */}
            <div style={{ background:"rgba(250,247,242,.07)", border:"1px solid rgba(255,255,255,.12)", backdropFilter:"blur(16px)", padding:"40px 32px" }}>
              <div style={{ fontSize:".68rem", letterSpacing:".2em", textTransform:"uppercase", color:C.goldPale, marginBottom:24 }}>Credentials</div>
              {DR.qualifications.map((q,i)=>(
                <div key={i} style={{ paddingBottom:18, marginBottom:18, borderBottom:i<DR.qualifications.length-1?"1px solid rgba(255,255,255,.1)":"none" }}>
                  <div className="serif" style={{ color:"white", fontSize:"1.15rem", fontWeight:500, marginBottom:2 }}>{q.deg}</div>
                  <div style={{ color:"rgba(255,255,255,.45)", fontSize:".78rem" }}>{q.inst}</div>
                </div>
              ))}
              <div style={{ marginTop:28, background:"rgba(212,168,83,.12)", border:"1px solid rgba(212,168,83,.3)", padding:"16px 18px" }}>
                <div style={{ color:C.goldPale, fontSize:".68rem", letterSpacing:".15em", textTransform:"uppercase", marginBottom:6 }}>Next Available Slot</div>
                <div className="serif" style={{ color:"white", fontSize:"1.1rem", fontWeight:500 }}>Today · 5:00 PM onwards</div>
              </div>
              <a href={wa} className="btn-wa" style={{ width:"100%", justifyContent:"center", marginTop:20 }}>💬 Book Appointment</a>
            </div>
          </div>
        </div>
      </section>

      {/* ══ TIMINGS STRIP ══ */}
      <div style={{ background:C.gold, padding:"0 0" }}>
        <div className="wrap" style={{ display:"flex", alignItems:"stretch", flexWrap:"wrap" }}>
          <div style={{ background:C.burgDark, color:"white", padding:"18px 28px", display:"flex", alignItems:"center", gap:10, flexShrink:0 }}>
            <span style={{ fontSize:".7rem", letterSpacing:".18em", textTransform:"uppercase", fontWeight:600 }}>🕐 Clinic Hours</span>
          </div>
          {DR.timings.map((t,i)=>(
            <div key={i} style={{ padding:"14px 28px", borderLeft:"1px solid rgba(107,31,42,.2)", display:"flex", flexDirection:"column", justifyContent:"center", flexShrink:0 }}>
              <div style={{ fontSize:".65rem", letterSpacing:".1em", textTransform:"uppercase", color:C.burgDark, opacity:.7, marginBottom:3 }}>{t.day}</div>
              <div style={{ fontSize:".85rem", fontWeight:600, color:C.burgDark }}>
                {t.morn ? t.morn : <span style={{ color:"rgba(107,31,42,.45)" }}>Closed</span>}
                {t.eve ? <span style={{ opacity:.6 }}> · {t.eve}</span> : ""}
              </div>
            </div>
          ))}
          <a href={tel} className="btn-burg" style={{ marginLeft:"auto", borderRadius:0, alignSelf:"stretch", paddingLeft:28, paddingRight:28 }}>📞 Call Clinic</a>
        </div>
      </div>

      {/* ══ ABOUT ══ */}
      <section id="about" style={{ padding:"100px 0", background:C.ivory }}>
        <div className="wrap">
          <div className="about-g" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:80, alignItems:"center" }}>
            <Reveal dir="left">
              {/* Large serif pull quote */}
              <div style={{ position:"relative" }}>
                <div className="serif" style={{ fontSize:"clamp(3.5rem,6vw,5.5rem)", fontWeight:300, color:C.burg, lineHeight:.9, opacity:.06, position:"absolute", top:-20, left:-10, userSelect:"none" }}>18</div>
                <div className="tag" style={{ marginBottom:16 }}>About the Doctor</div>
                <h2 className="serif" style={{ fontSize:"clamp(2.2rem,4vw,3.4rem)", fontWeight:400, color:C.text, lineHeight:1.2, marginBottom:20 }}>
                  A physician who listens<br/><em>as carefully as he</em><br/>examines.
                </h2>
                <div className="rule-gold" style={{ marginBottom:28 }} />
                <p style={{ color:C.muted, lineHeight:1.85, fontSize:".95rem", marginBottom:18 }}>
                  Dr. Arjun Mehta brings over {DR.experience} years of clinical excellence to every consultation. Trained at India's finest institutions, he combines rigorous medical science with a deeply personal approach to patient care.
                </p>
                <p style={{ color:C.muted, lineHeight:1.85, fontSize:".95rem", marginBottom:36 }}>
                  His philosophy is simple: every patient deserves unhurried attention, honest answers, and a treatment plan built around their life — not just their diagnosis.
                </p>
                <div style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
                  <a href={wa}  className="btn-burg">💬 Book Consultation</a>
                  <a href={tel} className="btn-ghost">📞 Call Now</a>
                </div>
              </div>
            </Reveal>
            <Reveal dir="right" delay={120}>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:2 }}>
                {[[DR.experience+"+","Years of\nPractice","#"],["AIIMS","Where it all\nbegan","#"],[DR.patients,"Patients\nTreated","#"],["3","Speciality\nFellowships","#"]].map(([v,l],i)=>(
                  <div key={i} style={{
                    padding:"36px 28px",
                    background: i%2===0 ? C.cream : C.rose,
                    borderTop: i<2 ? "none" : `1px solid ${C.line}`,
                  }}>
                    <div className="serif" style={{ fontSize:"2.8rem", fontWeight:600, color:C.burg, lineHeight:1, marginBottom:8 }}>{v}</div>
                    <div style={{ fontSize:".75rem", letterSpacing:".08em", color:C.muted, lineHeight:1.5, whiteSpace:"pre-line" }}>{l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══ SERVICES ══ */}
      <section id="services" style={{ padding:"100px 0", background:C.cream }}>
        <div className="wrap">
          <Reveal>
            <div style={{ display:"flex", alignItems:"flex-end", justifyContent:"space-between", marginBottom:56, flexWrap:"wrap", gap:20 }}>
              <div>
                <div className="tag" style={{ marginBottom:14 }}>What We Treat</div>
                <h2 className="serif" style={{ fontSize:"clamp(2rem,4vw,3.2rem)", fontWeight:400, color:C.text, lineHeight:1.2 }}>
                  Comprehensive care,<br/><em>without compromise.</em>
                </h2>
              </div>
              <div className="rule-gold" />
            </div>
          </Reveal>
          <div className="svc-g" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:2 }}>
            {DR.services.map((s,i)=>(
              <Reveal key={s.n} delay={i*60}>
                <div className="svc-card">
                  <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:20 }}>
                    <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"2.6rem", color:C.goldPale, fontWeight:300, lineHeight:1 }}>{s.n}</span>
                    <span style={{ color:C.burg, fontSize:"1.2rem", opacity:.3 }}>{s.icon}</span>
                  </div>
                  <h3 className="serif" style={{ fontSize:"1.3rem", fontWeight:500, color:C.text, marginBottom:10 }}>{s.title}</h3>
                  <p style={{ color:C.muted, fontSize:".85rem", lineHeight:1.7 }}>{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div style={{ marginTop:48, padding:"28px 32px", background:C.rose, borderLeft:`3px solid ${C.burg}`, display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:16 }}>
              <div>
                <div className="serif" style={{ fontSize:"1.2rem", color:C.text }}>Not sure which service you need?</div>
                <div style={{ fontSize:".82rem", color:C.muted, marginTop:4 }}>Send a WhatsApp message — we'll guide you to the right consultation.</div>
              </div>
              <a href={wa} className="btn-wa">💬 Ask on WhatsApp</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ TIMINGS DETAIL ══ */}
      <section id="timings" style={{ padding:"100px 0", background:C.ivory }}>
        <div className="wrap">
          <div className="hero-g" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:80, alignItems:"center" }}>
            <Reveal dir="left">
              <div className="tag" style={{ marginBottom:14 }}>Visit the Clinic</div>
              <h2 className="serif" style={{ fontSize:"clamp(2rem,4vw,3.2rem)", fontWeight:400, color:C.text, lineHeight:1.2, marginBottom:24 }}>
                Our doors are open<br/><em>when you need us.</em>
              </h2>
              <div className="rule-gold" style={{ marginBottom:32 }} />
              <p style={{ color:C.muted, lineHeight:1.85, fontSize:".94rem", marginBottom:36, maxWidth:400 }}>
                Walk-ins are always welcome. For a guaranteed slot with minimal waiting, we recommend booking 24 hours in advance via WhatsApp.
              </p>
              <div style={{ padding:"24px", background:C.rose, marginBottom:32, borderLeft:`3px solid ${C.burg}` }}>
                <div style={{ fontSize:".68rem", letterSpacing:".15em", textTransform:"uppercase", color:C.burg, marginBottom:6 }}>🚨 Emergency Line</div>
                <a href={tel} className="serif" style={{ fontSize:"1.6rem", fontWeight:500, color:C.text }}>{DR.phone}</a>
              </div>
              <div style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
                <a href={wa}  className="btn-burg">💬 Book via WhatsApp</a>
                <a href={tel} className="btn-ghost">📞 Call Clinic</a>
              </div>
            </Reveal>
            <Reveal dir="right" delay={100}>
              <div>
                {DR.timings.map((t,i)=>(
                  <div key={i} className="t-row">
                    <div className="serif" style={{ fontSize:"1.15rem", fontWeight:500, color:C.text, minWidth:160 }}>{t.day}</div>
                    <div style={{ textAlign:"right" }}>
                      {t.morn
                        ? <>
                            <div style={{ fontSize:".85rem", color:C.burg, fontWeight:500 }}>{t.morn}</div>
                            {t.eve && <div style={{ fontSize:".82rem", color:C.muted }}>{t.eve}</div>}
                          </>
                        : <span style={{ fontSize:".85rem", color:"#B0A090", fontStyle:"italic" }}>Closed</span>
                      }
                    </div>
                  </div>
                ))}
                <div style={{ padding:"20px 24px", background:C.cream, marginTop:2, display:"flex", gap:14, alignItems:"center" }}>
                  <span style={{ fontSize:"1.5rem" }}>📍</span>
                  {/* TODO: Change your location */}
                  <div>
                    <div style={{ fontWeight:500, fontSize:".9rem", color:C.text }}>12, Medical Complex, Connaught Place</div>
                    <div style={{ fontSize:".8rem", color:C.muted }}>New Delhi – 110001</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <section id="reviews" style={{ padding:"100px 0", background:C.burgDark, position:"relative", overflow:"hidden" }}>
        {/* decorative */}
        <div style={{ position:"absolute", right:-80, top:-80, width:400, height:400, borderRadius:"50%", border:"1px solid rgba(255,255,255,.04)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", right:-20, top:-20, width:240, height:240, borderRadius:"50%", border:"1px solid rgba(255,255,255,.04)", pointerEvents:"none" }} />
        <div className="wrap">
          <Reveal>
            <div style={{ marginBottom:60 }}>
              <div className="tag" style={{ color:C.goldPale, marginBottom:14 }}>Patient Stories</div>
              <h2 className="serif" style={{ fontSize:"clamp(2rem,4vw,3.2rem)", fontWeight:400, color:"white", lineHeight:1.2 }}>
                In their own<br/><em style={{ color:C.goldPale }}>words.</em>
              </h2>
              <div className="rule-gold" style={{ marginTop:24 }} />
            </div>
          </Reveal>
          <div className="testi-g" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:20 }}>
            {DR.testimonials.map((t,i)=>(
              <Reveal key={t.name} delay={i*80}>
                <div className="testi-card">
                  <Stars n={t.stars} />
                  <div className="serif" style={{ fontSize:"3rem", color:C.goldPale, lineHeight:.8, marginTop:4, marginBottom:16, opacity:.6 }}>"</div>
                  <p style={{ color:"#3C2018", lineHeight:1.8, fontSize:".94rem", marginBottom:24, fontStyle:"italic" }}>{t.text}</p>
                  <div style={{ paddingTop:18, borderTop:`1px solid ${C.line}`, display:"flex", alignItems:"center", gap:12 }}>
                    <div style={{ width:42, height:42, background:`linear-gradient(135deg,${C.burg},${C.burgMid})`, display:"flex", alignItems:"center", justifyContent:"center", color:"white", fontFamily:"'Cormorant Garamond',serif", fontSize:"1.3rem", flexShrink:0 }}>{t.name[0]}</div>
                    <div>
                      <div style={{ fontWeight:600, fontSize:".9rem", color:C.text }}>{t.name}</div>
                      <div style={{ fontSize:".74rem", color:C.muted }}>{t.since}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ LOCATION ══ */}
      <section id="location" style={{ padding:"100px 0", background:C.ivory }}>
        <div className="wrap">
          <Reveal>
            <div style={{ marginBottom:56 }}>
              <div className="tag" style={{ marginBottom:14 }}>Find Us</div>
              <h2 className="serif" style={{ fontSize:"clamp(2rem,4vw,3.2rem)", fontWeight:400, color:C.text, lineHeight:1.2 }}>
                Come see us<br/><em>in person.</em>
              </h2>
              <div className="rule-gold" style={{ marginTop:20 }} />
            </div>
          </Reveal>
          <div className="loc-g" style={{ display:"grid", gridTemplateColumns:"1fr 1.5fr", gap:48, alignItems:"start" }}>
            <Reveal dir="left">
              <div style={{ border:`1px solid ${C.line}`, padding:32, marginBottom:20 }}>
                {[
                  ["📍","Address","12, Medical Complex, Connaught Place\nNew Delhi – 110001"],
                  ["📞","Phone", DR.phone],
                  ["💬","WhatsApp","Chat for appointments"],
                  ["🕐","Hours","Mon–Sat: 9 AM–1 PM & 5–8:30 PM"],
                ].map(([icon,label,val],i)=>(
                  <div key={i} style={{ display:"flex", gap:16, alignItems:"flex-start", paddingBottom:i<3?20:0, marginBottom:i<3?20:0, borderBottom:i<3?`1px solid ${C.line}`:"none" }}>
                    <span style={{ fontSize:"1.1rem", marginTop:2 }}>{icon}</span>
                    <div>
                      <div style={{ fontSize:".65rem", letterSpacing:".15em", textTransform:"uppercase", color:C.muted, marginBottom:3 }}>{label}</div>
                      {label==="Phone"
                        ? <a href={tel} style={{ color:C.burg, fontWeight:600, fontSize:".9rem" }}>{val}</a>
                        : label==="WhatsApp"
                        ? <a href={wa}  style={{ color:"#25D366", fontWeight:600, fontSize:".9rem" }}>{val}</a>
                        : <div style={{ color:C.text, fontSize:".88rem", lineHeight:1.6, whiteSpace:"pre-line" }}>{val}</div>
                      }
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
                <a href={wa}  className="btn-wa"   style={{ justifyContent:"center" }}>💬 Book via WhatsApp</a>
                <a href={tel} className="btn-burg" style={{ justifyContent:"center" }}>📞 Call for Directions</a>
              </div>
            </Reveal>

            {/* 
              NOTE: Google Maps iframes are blocked in the Claude preview sandbox.
              In your Next.js app, replace the div below with:
              
              <iframe
                src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL_HERE"
                width="100%" height="460"
                style={{ border:0, display:'block' }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              TODO: Get embed URL from maps.google.com → Share → Embed a map
            */}
            <Reveal dir="right" delay={120}>
              <div style={{ height:460, background:`linear-gradient(135deg, ${C.rose} 0%, ${C.cream} 100%)`, border:`1px solid ${C.line}`, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:0, position:"relative", overflow:"hidden" }}>
                <div style={{ position:"absolute", inset:0, backgroundImage:`repeating-linear-gradient(0deg,transparent,transparent 39px,${C.line} 39px,${C.line} 40px), repeating-linear-gradient(90deg,transparent,transparent 39px,${C.line} 39px,${C.line} 40px)`, opacity:.6 }} />
                <div style={{ position:"relative", textAlign:"center", padding:"0 40px" }}>
                  <div className="serif" style={{ fontSize:"4rem", color:C.burg, opacity:.15, lineHeight:1, marginBottom:8 }}>◎</div>
                  <div className="serif" style={{ fontSize:"1.8rem", fontWeight:500, color:C.text, marginBottom:6 }}>Connaught Place</div>
                  <div style={{ color:C.muted, fontSize:".85rem", marginBottom:28, lineHeight:1.6 }}>12, Medical Complex, CP<br/>New Delhi – 110001</div>
                  {/* TODO: Replace with your actual Google Maps link */}
                  <a href={maps} target="_blank" rel="noreferrer" className="btn-burg">📍 Open in Google Maps</a>
                  <div style={{ marginTop:16, fontSize:".68rem", color:C.muted, letterSpacing:".04em" }}>Live map loads in your Next.js app</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section style={{ padding:"100px 0", background:C.burg, position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, backgroundImage:`linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)`, backgroundSize:"60px 60px", pointerEvents:"none" }} />
        <div style={{ position:"absolute", left:-100, bottom:-100, width:500, height:500, borderRadius:"50%", background:"rgba(255,255,255,.03)", pointerEvents:"none" }} />
        <div className="wrap" style={{ position:"relative", textAlign:"center" }}>
          <Reveal>
            <div style={{ fontSize:".68rem", letterSpacing:".22em", textTransform:"uppercase", color:C.goldPale, marginBottom:20 }}>Take the First Step</div>
            <h2 className="serif" style={{ fontSize:"clamp(2.2rem,5vw,4.5rem)", fontWeight:300, color:"white", lineHeight:1.1, marginBottom:12 }}>
              Your health is your<br/>
              <em style={{ color:C.goldPale }}>most valuable possession.</em>
            </h2>
            <div style={{ width:1, height:40, background:"rgba(255,255,255,.2)", margin:"32px auto" }} />
            <p style={{ color:"rgba(255,255,255,.55)", fontSize:"1rem", lineHeight:1.8, marginBottom:44, maxWidth:520, margin:"0 auto 44px" }}>
              Don't wait for symptoms to decide your fate. A conversation with Dr. Mehta today could change everything.
            </p>
            <div style={{ display:"flex", gap:14, justifyContent:"center", flexWrap:"wrap" }}>
              <a href={wa}  className="btn-wa"   style={{ fontSize:".92rem", padding:"16px 38px" }}>💬 Book on WhatsApp</a>
              <a href={tel} className="btn-ghost" style={{ color:"rgba(255,255,255,.8)", borderColor:"rgba(255,255,255,.3)", fontSize:".92rem", padding:"16px 38px" }}>📞 {DR.phone}</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer style={{ background:C.burgDark, padding:"56px 0 28px" }}>
        <div className="wrap">
          <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr", gap:60, marginBottom:48, paddingBottom:48, borderBottom:`1px solid rgba(255,255,255,.07)` }} className="about-g">
            <div>
              <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:16 }}>
                <div style={{ width:36, height:36, border:`1.5px solid rgba(255,255,255,.3)`, display:"flex", alignItems:"center", justifyContent:"center", color:"white", fontSize:"1rem" }}>✚</div>
                <div>
                  <div className="serif" style={{ color:"white", fontWeight:500, fontSize:"1.05rem" }}>Dr. Arjun Mehta</div>
                  <div style={{ color:"rgba(255,255,255,.35)", fontSize:".65rem", letterSpacing:".12em", textTransform:"uppercase" }}>General Physician</div>
                </div>
              </div>
              <p style={{ color:"rgba(255,255,255,.35)", fontSize:".84rem", lineHeight:1.75, maxWidth:300 }}>
                {DR.experience}+ years of patient-first, evidence-based internal medicine. Trusted by families across New Delhi since {DR.since}.
              </p>
            </div>
            <div>
              <div style={{ fontSize:".65rem", letterSpacing:".18em", textTransform:"uppercase", color:"rgba(255,255,255,.3)", marginBottom:18 }}>Quick Links</div>
              {[["About","#about"],["Services","#services"],["Timings","#timings"],["Reviews","#reviews"],["Location","#location"]].map(([l,h])=>(
                <a key={l} href={h} style={{ display:"block", color:"rgba(255,255,255,.45)", fontSize:".85rem", marginBottom:10, transition:"color .2s" }}
                  onMouseEnter={e=>e.currentTarget.style.color=C.goldPale} onMouseLeave={e=>e.currentTarget.style.color="rgba(255,255,255,.45)"}>{l}</a>
              ))}
            </div>
            <div>
              <div style={{ fontSize:".65rem", letterSpacing:".18em", textTransform:"uppercase", color:"rgba(255,255,255,.3)", marginBottom:18 }}>Reach Us</div>
              <a href={tel} style={{ display:"block", color:"rgba(255,255,255,.45)", fontSize:".85rem", marginBottom:10 }}>{DR.phone}</a>
              <a href={wa}  style={{ display:"block", color:"#25D366", fontSize:".85rem", marginBottom:10 }}>WhatsApp</a>
              <div style={{ color:"rgba(255,255,255,.3)", fontSize:".8rem", lineHeight:1.65 }}>
                {/* TODO: Change your location */}
                Connaught Place<br/>New Delhi – 110001
              </div>
            </div>
          </div>
          <div style={{ display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:10, alignItems:"center" }}>
            <p style={{ color:"rgba(255,255,255,.2)", fontSize:".75rem" }}>© {new Date().getFullYear()} Dr. Arjun Mehta. All rights reserved.</p>
            {/* SEO */}
            <p style={{ color:"rgba(255,255,255,.15)", fontSize:".72rem" }}>Dr. Arjun Mehta – General Physician in Connaught Place, New Delhi</p>
          </div>
        </div>
      </footer>
    </>
  );
}