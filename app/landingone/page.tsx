"use client";
import { useState, useEffect, useRef } from "react";

const DOCTOR = {
  name: "Dr. Arjun Mehta",
  specialty: "General Physician & Internal Medicine",
  area: "Connaught Place, New Delhi",
  phone: "+91 7679011952",
  whatsapp: "917679011952",
  experience: "18+",
  patients: "12,000+",
  rating: "4.9",
  reviews: "800+",
  timings: [
    { day: "Mon – Fri", time: "9:00 AM – 1:00 PM", slot: "Morning" },
    { day: "Mon – Fri", time: "5:00 PM – 8:30 PM", slot: "Evening" },
    { day: "Saturday", time: "9:00 AM – 2:00 PM", slot: "Morning" },
    { day: "Sunday", time: "Closed", slot: null },
  ],
  qualifications: ["MBBS – AIIMS Delhi", "MD – Internal Medicine", "Fellow – Cardiology"],
  services: [
    { icon: "🩺", title: "General Consultation", desc: "Comprehensive health check-ups and diagnosis for all age groups." },
    { icon: "💊", title: "Chronic Disease Mgmt.", desc: "Diabetes, hypertension, thyroid and long-term condition monitoring." },
    { icon: "🫀", title: "Cardiac Screening", desc: "ECG, stress tests and preventive cardiac care." },
    { icon: "🧪", title: "Lab Reports Review", desc: "Expert interpretation of blood work and imaging reports." },
    { icon: "👶", title: "Pediatric Care", desc: "Child health, vaccinations, growth and development tracking." },
    { icon: "🏥", title: "Home Visits", desc: "Doorstep consultations for elderly and post-operative patients." },
  ],
  testimonials: [
    { name: "Priya Sharma", role: "Patient since 2019", stars: 5, text: "Dr. Mehta diagnosed what three other doctors missed. His attention to detail and patience is truly unmatched. I now drive 30 km just to see him." },
    { name: "Rajesh Khanna", role: "Diabetic patient", stars: 5, text: "My HbA1c dropped from 9.2 to 6.4 in just 8 months. He doesn't just prescribe — he educates you about your own body." },
    { name: "Sunita Verma", role: "Family patient", stars: 5, text: "My entire family consults Dr. Mehta. He remembers every patient's history personally. Feels like having a family doctor from the old days." },
  ],
};

function useInView(ref) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); observer.disconnect(); }
    }, { threshold: 0.1 });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return inView;
}

function FadeUp({ children, delay = 0, style = {} }) {
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <div ref={ref} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(26px)",
      transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      ...style
    }}>
      {children}
    </div>
  );
}

export default function DoctorLanding() {
  const [scrolled, setScrolled] = useState(false);
  const whatsappURL = `https://wa.me/${DOCTOR.whatsapp}?text=${encodeURIComponent("Hi Doctor, I want to book an appointment")}`;
  const callURL = `tel:${DOCTOR.phone}`;
  // TODO: Replace with your actual Google Maps link
  const mapsURL = "https://maps.google.com/?q=Connaught+Place+New+Delhi";

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const BP = {
    primary: { background:"#00897b",color:"white",border:"none",padding:"14px 32px",borderRadius:50,fontFamily:"'DM Sans',sans-serif",fontWeight:600,fontSize:".95rem",cursor:"pointer",transition:"all .25s",display:"inline-flex",alignItems:"center",gap:8,textDecoration:"none" },
    outlineWhite: { background:"transparent",color:"white",border:"2px solid rgba(255,255,255,.4)",padding:"13px 30px",borderRadius:50,fontFamily:"'DM Sans',sans-serif",fontWeight:600,fontSize:".95rem",cursor:"pointer",transition:"all .25s",display:"inline-flex",alignItems:"center",gap:8,textDecoration:"none" },
    whatsapp: { background:"#25D366",color:"white",border:"none",padding:"14px 32px",borderRadius:50,fontFamily:"'DM Sans',sans-serif",fontWeight:600,fontSize:".95rem",cursor:"pointer",transition:"all .25s",display:"inline-flex",alignItems:"center",gap:8,textDecoration:"none" },
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        html{scroll-behavior:smooth}
        body{font-family:'DM Sans',sans-serif;background:#f8f7f4;color:#1a2332}
        a{text-decoration:none}
        .card{background:white;border-radius:20px;padding:30px;box-shadow:0 2px 20px rgba(0,0,0,.06);transition:transform .3s,box-shadow .3s;height:100%}
        .card:hover{transform:translateY(-5px);box-shadow:0 14px 44px rgba(0,0,0,.11)}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:.35}}
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
        @media(max-width:768px){
          .hero-cols,.two-cols{grid-template-columns:1fr!important}
          .three-cols{grid-template-columns:1fr 1fr!important}
          .hide-m{display:none!important}
          .show-m{display:flex!important}
          .tb-pad{padding:60px 20px!important}
        }
      `}</style>

      {/* Mobile CTA */}
      <div className="show-m" style={{ display:"none",position:"fixed",bottom:0,left:0,right:0,zIndex:999,padding:"12px 16px",background:"white",boxShadow:"0 -4px 20px rgba(0,0,0,.1)",gap:10,borderTop:"1px solid #eee" }}>
        <a href={callURL} style={{ ...BP.primary,flex:1,justifyContent:"center",fontSize:".85rem",padding:"12px" }}>📞 Call</a>
        <a href={whatsappURL} style={{ ...BP.whatsapp,flex:1,justifyContent:"center",fontSize:".85rem",padding:"12px" }}>💬 WhatsApp</a>
      </div>

      {/* Navbar */}
      <nav style={{ position:"fixed",top:0,left:0,right:0,zIndex:100,padding:"0 40px",height:70,background:scrolled?"rgba(255,255,255,.97)":"transparent",backdropFilter:scrolled?"blur(20px)":"none",boxShadow:scrolled?"0 2px 20px rgba(0,0,0,.08)":"none",transition:"all .35s",display:"flex",alignItems:"center",justifyContent:"space-between" }}>
        <div style={{ display:"flex",alignItems:"center",gap:10 }}>
          <div style={{ width:38,height:38,borderRadius:10,background:"linear-gradient(135deg,#00897b,#4db6ac)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem" }}>🏥</div>
          <span style={{ fontFamily:"'Playfair Display',serif",fontWeight:700,fontSize:"1.1rem",color:scrolled?"#0d1b2a":"white" }}>Dr. Arjun Mehta</span>
        </div>
        <div className="hide-m" style={{ display:"flex",gap:34,alignItems:"center" }}>
          {["services","timings","testimonials","location"].map(id=>(
            <a key={id} href={`#${id}`} style={{ color:scrolled?"#1a2332":"white",fontSize:".88rem",fontWeight:500,opacity:.85,transition:"opacity .2s",textTransform:"capitalize" }}
              onMouseEnter={e=>e.target.style.opacity=1} onMouseLeave={e=>e.target.style.opacity=.85}>
              {id.charAt(0).toUpperCase()+id.slice(1)}
            </a>
          ))}
        </div>
        <a href={whatsappURL} className="hide-m" style={{ ...BP.primary,padding:"10px 22px",fontSize:".85rem" }}>💬 Book Appointment</a>
      </nav>

      {/* Hero */}
      <section style={{ background:"linear-gradient(135deg,#0d1b2a 0%,#1a3a4a 55%,#0a3d3a 100%)",minHeight:"100vh",display:"flex",alignItems:"center",position:"relative",overflow:"hidden" }}>
        <div style={{ position:"absolute",inset:0,pointerEvents:"none" }}>
          <div style={{ position:"absolute",top:-120,right:-120,width:600,height:600,borderRadius:"50%",background:"radial-gradient(circle,rgba(0,137,123,.2) 0%,transparent 70%)" }} />
          <div style={{ position:"absolute",bottom:-160,left:-100,width:500,height:500,borderRadius:"50%",background:"radial-gradient(circle,rgba(201,168,76,.12) 0%,transparent 70%)" }} />
        </div>
        <div style={{ maxWidth:1200,margin:"0 auto",padding:"120px 40px 80px",width:"100%" }}>
          <div className="hero-cols" style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:80,alignItems:"center" }}>
            <div>
              <div style={{ display:"inline-flex",alignItems:"center",gap:8,background:"rgba(0,137,123,.15)",border:"1px solid rgba(0,137,123,.3)",borderRadius:50,padding:"6px 16px",marginBottom:28 }}>
                <span style={{ width:8,height:8,borderRadius:"50%",background:"#4db6ac",display:"inline-block",animation:"pulse 2s infinite" }} />
                <span style={{ color:"#4db6ac",fontSize:".76rem",fontWeight:600,letterSpacing:".08em" }}>ACCEPTING NEW PATIENTS</span>
              </div>
              <h1 style={{ fontFamily:"'Playfair Display',serif",fontSize:"clamp(2.4rem,5vw,3.8rem)",fontWeight:900,color:"white",lineHeight:1.1,marginBottom:16 }}>
                Excellence in<br/><span style={{ color:"#4db6ac" }}>Healthcare</span>,<br/>Delivered<br/>with Care.
              </h1>
              <p style={{ color:"rgba(255,255,255,.6)",fontSize:"1rem",lineHeight:1.7,margin:"20px 0 12px",maxWidth:460 }}>
                MBBS, MD — Internal Medicine · {DOCTOR.experience} Years Experience<br/>{DOCTOR.area}
              </p>
              <div style={{ display:"flex",gap:32,margin:"24px 0 36px",flexWrap:"wrap" }}>
                {[["⭐",DOCTOR.rating,"Rating"],["👥",DOCTOR.patients,"Patients"],["🏆",DOCTOR.experience+" Yrs","Experience"]].map(([icon,val,lbl])=>(
                  <div key={lbl}>
                    <div style={{ color:"white",fontSize:"1.35rem",fontWeight:700,fontFamily:"'Playfair Display',serif" }}>{icon} {val}</div>
                    <div style={{ color:"rgba(255,255,255,.42)",fontSize:".73rem",letterSpacing:".06em",textTransform:"uppercase" }}>{lbl}</div>
                  </div>
                ))}
              </div>
              <div style={{ display:"flex",gap:14,flexWrap:"wrap" }}>
                <a href={whatsappURL} style={BP.whatsapp}>💬 Book via WhatsApp</a>
                <a href={callURL} style={BP.outlineWhite}>📞 {DOCTOR.phone}</a>
              </div>
            </div>
            <div style={{ display:"flex",justifyContent:"center" }}>
              <div style={{ position:"relative",width:360,animation:"float 4s ease-in-out infinite" }}>
                <div style={{ background:"linear-gradient(145deg,rgba(0,137,123,.18),rgba(13,27,42,.85))",border:"1px solid rgba(0,137,123,.3)",borderRadius:28,padding:32,backdropFilter:"blur(12px)" }}>
                  <div style={{ display:"flex",alignItems:"center",gap:14,marginBottom:22,paddingBottom:18,borderBottom:"1px solid rgba(255,255,255,.08)" }}>
                    <div style={{ width:62,height:62,borderRadius:"50%",background:"linear-gradient(135deg,#00897b,#4db6ac)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.7rem",flexShrink:0 }}>👨‍⚕️</div>
                    <div>
                      <div style={{ color:"white",fontWeight:700,fontSize:"1.02rem",fontFamily:"'Playfair Display',serif" }}>Dr. Arjun Mehta</div>
                      <div style={{ color:"#4db6ac",fontSize:".8rem",marginTop:2 }}>General Physician</div>
                    </div>
                  </div>
                  {DOCTOR.qualifications.map(q=>(
                    <div key={q} style={{ display:"flex",alignItems:"center",gap:10,padding:"8px 0",borderBottom:"1px solid rgba(255,255,255,.06)" }}>
                      <span style={{ color:"#c9a84c",fontWeight:700,fontSize:".9rem" }}>✓</span>
                      <span style={{ color:"rgba(255,255,255,.8)",fontSize:".86rem" }}>{q}</span>
                    </div>
                  ))}
                  <div style={{ marginTop:18,background:"rgba(0,137,123,.15)",borderRadius:14,padding:"14px 18px" }}>
                    <div style={{ color:"rgba(255,255,255,.45)",fontSize:".7rem",letterSpacing:".1em",textTransform:"uppercase",marginBottom:4 }}>Next Available</div>
                    <div style={{ color:"white",fontWeight:600,fontSize:".9rem" }}>Today · 5:00 PM – 8:30 PM</div>
                  </div>
                </div>
                <div style={{ position:"absolute",top:-14,right:-14,background:"linear-gradient(135deg,#f59e0b,#f97316)",borderRadius:14,padding:"10px 16px",boxShadow:"0 8px 24px rgba(245,158,11,.4)" }}>
                  <div style={{ color:"white",fontWeight:700,fontSize:".88rem" }}>⭐ {DOCTOR.rating}/5</div>
                  <div style={{ color:"rgba(255,255,255,.85)",fontSize:".7rem" }}>{DOCTOR.reviews} Reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timings Banner */}
      <div style={{ background:"linear-gradient(90deg,#00897b,#00695c)",padding:"20px 40px" }}>
        <div style={{ maxWidth:1200,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:14 }}>
          <div style={{ display:"flex",alignItems:"center",gap:10 }}>
            <span style={{ fontSize:"1.3rem" }}>🕐</span>
            <span style={{ color:"white",fontWeight:700 }}>Clinic Hours</span>
          </div>
          {DOCTOR.timings.map((t,i)=>(
            <div key={i} style={{ textAlign:"center" }}>
              <div style={{ color:"rgba(255,255,255,.7)",fontSize:".7rem",letterSpacing:".06em",textTransform:"uppercase" }}>{t.day}</div>
              <div style={{ color:t.slot?"white":"#ff8a80",fontWeight:600,fontSize:".87rem" }}>{t.time}</div>
            </div>
          ))}
          <a href={callURL} style={{ ...BP.primary,background:"white",color:"#00897b",padding:"10px 22px",fontSize:".84rem" }}>📞 Call Clinic</a>
        </div>
      </div>

      {/* Services */}
      <section id="services" style={{ background:"#f8f7f4",padding:"90px 24px" }} className="tb-pad">
        <div style={{ maxWidth:1200,margin:"0 auto" }}>
          <FadeUp style={{ textAlign:"center",marginBottom:56 }}>
            <div style={{ fontSize:".75rem",fontWeight:600,letterSpacing:".14em",textTransform:"uppercase",color:"#00897b",marginBottom:12 }}>What We Offer</div>
            <h2 style={{ fontFamily:"'Playfair Display',serif",fontSize:"clamp(2rem,4vw,3rem)",fontWeight:700,color:"#0d1b2a",lineHeight:1.2 }}>Comprehensive Care<br/>Under One Roof</h2>
            <div style={{ width:48,height:3,background:"#c9a84c",borderRadius:2,margin:"20px auto 0" }} />
          </FadeUp>
          <div className="three-cols" style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:24 }}>
            {DOCTOR.services.map((s,i)=>(
              <FadeUp key={s.title} delay={i*80}>
                <div className="card" style={{ position:"relative",overflow:"hidden" }}>
                  <div style={{ position:"absolute",top:0,left:0,right:0,height:3,background:"linear-gradient(90deg,#00897b,#4db6ac)" }} />
                  <div style={{ fontSize:"2rem",marginBottom:14 }}>{s.icon}</div>
                  <h3 style={{ fontFamily:"'Playfair Display',serif",fontSize:"1.08rem",fontWeight:700,color:"#0d1b2a",marginBottom:8 }}>{s.title}</h3>
                  <p style={{ color:"#6b7a8d",fontSize:".87rem",lineHeight:1.65 }}>{s.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Timings Detail */}
      <section id="timings" style={{ background:"#0d1b2a",padding:"90px 24px" }} className="tb-pad">
        <div style={{ maxWidth:1200,margin:"0 auto" }}>
          <div className="hero-cols" style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:80,alignItems:"center" }}>
            <FadeUp>
              <div style={{ fontSize:".75rem",fontWeight:600,letterSpacing:".14em",textTransform:"uppercase",color:"#4db6ac",marginBottom:12 }}>Visit Us</div>
              <h2 style={{ fontFamily:"'Playfair Display',serif",fontSize:"clamp(2rem,4vw,3rem)",fontWeight:700,color:"white",lineHeight:1.2 }}>Clinic Timings<br/>&amp; Appointments</h2>
              <div style={{ width:48,height:3,background:"#c9a84c",borderRadius:2,margin:"20px 0" }} />
              <p style={{ color:"rgba(255,255,255,.52)",lineHeight:1.8,marginBottom:36,maxWidth:420 }}>Walk-ins welcome. For priority slots and shorter wait times, book in advance via WhatsApp.</p>
              <div style={{ display:"flex",gap:14,flexWrap:"wrap" }}>
                <a href={whatsappURL} style={BP.whatsapp}>💬 Book Appointment</a>
                <a href={callURL} style={BP.primary}>📞 Call Now</a>
              </div>
            </FadeUp>
            <FadeUp delay={150}>
              <div style={{ display:"flex",flexDirection:"column",gap:12 }}>
                {DOCTOR.timings.map((t,i)=>(
                  <div key={i} style={{ display:"flex",justifyContent:"space-between",alignItems:"center",padding:"17px 22px",borderRadius:14,background:i===3?"rgba(255,255,255,.03)":"rgba(0,137,123,.1)",border:`1px solid ${i===3?"rgba(255,255,255,.07)":"rgba(0,137,123,.25)"}` }}>
                    <div>
                      <div style={{ color:"white",fontWeight:600,marginBottom:2 }}>{t.day}</div>
                      {t.slot&&<div style={{ color:"#4db6ac",fontSize:".74rem" }}>{t.slot} Session</div>}
                    </div>
                    <div style={{ color:t.slot?"#4db6ac":"#ff6b6b",fontWeight:600,fontSize:".88rem" }}>{t.time}</div>
                  </div>
                ))}
                <div style={{ background:"rgba(201,168,76,.1)",border:"1px solid rgba(201,168,76,.25)",borderRadius:14,padding:"16px 22px",display:"flex",gap:12,alignItems:"center" }}>
                  <span style={{ fontSize:"1.2rem" }}>🚨</span>
                  <div>
                    <div style={{ color:"#c9a84c",fontWeight:600,fontSize:".83rem" }}>Emergency Contact</div>
                    <a href={callURL} style={{ color:"white",fontSize:".88rem" }}>{DOCTOR.phone}</a>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" style={{ background:"#fdf6ec",padding:"90px 24px" }} className="tb-pad">
        <div style={{ maxWidth:1200,margin:"0 auto" }}>
          <FadeUp style={{ textAlign:"center",marginBottom:56 }}>
            <div style={{ fontSize:".75rem",fontWeight:600,letterSpacing:".14em",textTransform:"uppercase",color:"#00897b",marginBottom:12 }}>Patient Stories</div>
            <h2 style={{ fontFamily:"'Playfair Display',serif",fontSize:"clamp(2rem,4vw,3rem)",fontWeight:700,color:"#0d1b2a",lineHeight:1.2 }}>What Our Patients Say</h2>
            <div style={{ width:48,height:3,background:"#c9a84c",borderRadius:2,margin:"20px auto 0" }} />
          </FadeUp>
          <div className="three-cols" style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:28 }}>
            {DOCTOR.testimonials.map((t,i)=>(
              <FadeUp key={t.name} delay={i*100}>
                <div className="card" style={{ position:"relative",paddingTop:42 }}>
                  <div style={{ position:"absolute",top:6,left:26,fontSize:"4.5rem",color:"#e8f5e9",lineHeight:1,fontFamily:"Georgia,serif",userSelect:"none" }}>"</div>
                  <div style={{ marginBottom:12,fontSize:"1rem" }}>{"⭐".repeat(t.stars)}</div>
                  <p style={{ color:"#374151",lineHeight:1.75,fontSize:".93rem",marginBottom:22,fontStyle:"italic" }}>"{t.text}"</p>
                  <div style={{ display:"flex",alignItems:"center",gap:12,paddingTop:16,borderTop:"1px solid #f0ede8" }}>
                    <div style={{ width:42,height:42,borderRadius:"50%",background:"linear-gradient(135deg,#00897b,#4db6ac)",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:700,fontSize:"1rem",flexShrink:0 }}>{t.name[0]}</div>
                    <div>
                      <div style={{ fontWeight:600,fontSize:".89rem",color:"#0d1b2a" }}>{t.name}</div>
                      <div style={{ color:"#9ca3af",fontSize:".74rem" }}>{t.role}</div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="location" style={{ background:"#f8f7f4",padding:"90px 24px" }} className="tb-pad">
        <div style={{ maxWidth:1200,margin:"0 auto" }}>
          <FadeUp style={{ textAlign:"center",marginBottom:56 }}>
            <div style={{ fontSize:".75rem",fontWeight:600,letterSpacing:".14em",textTransform:"uppercase",color:"#00897b",marginBottom:12 }}>Find Us</div>
            <h2 style={{ fontFamily:"'Playfair Display',serif",fontSize:"clamp(2rem,4vw,3rem)",fontWeight:700,color:"#0d1b2a",lineHeight:1.2 }}>Our Location</h2>
            <div style={{ width:48,height:3,background:"#c9a84c",borderRadius:2,margin:"20px auto 0" }} />
          </FadeUp>
          <div className="two-cols" style={{ display:"grid",gridTemplateColumns:"1fr 1.6fr",gap:48,alignItems:"start" }}>
            <FadeUp>
              <div style={{ background:"white",borderRadius:20,padding:28,boxShadow:"0 2px 20px rgba(0,0,0,.06)",marginBottom:18 }}>
                <div style={{ display:"flex",gap:14,alignItems:"flex-start",marginBottom:18,paddingBottom:16,borderBottom:"1px solid #f0ede8" }}>
                  <span style={{ fontSize:"1.4rem" }}>📍</span>
                  <div>
                    <div style={{ fontWeight:700,color:"#0d1b2a",marginBottom:4 }}>Clinic Address</div>
                    {/* TODO: Change your location */}
                    <div style={{ color:"#6b7a8d",lineHeight:1.7,fontSize:".89rem" }}>12, Medical Complex, Connaught Place<br/>New Delhi – 110001</div>
                  </div>
                </div>
                {[["📞",<a href={callURL} style={{ color:"#00897b",fontWeight:600,fontSize:".89rem" }}>{DOCTOR.phone}</a>],
                  ["💬",<a href={whatsappURL} style={{ color:"#25D366",fontWeight:600,fontSize:".89rem" }}>Chat on WhatsApp</a>],
                  ["🕐",<span style={{ color:"#6b7a8d",fontSize:".84rem" }}>Mon–Sat: 9AM–1PM & 5PM–8:30PM</span>]
                ].map(([icon,content],i)=>(
                  <div key={i} style={{ display:"flex",gap:12,alignItems:"center",marginBottom:12 }}>
                    <span style={{ fontSize:"1.15rem" }}>{icon}</span>{content}
                  </div>
                ))}
              </div>
              <div style={{ display:"flex",flexDirection:"column",gap:12 }}>
                <a href={whatsappURL} style={{ ...BP.whatsapp,justifyContent:"center" }}>💬 Book via WhatsApp</a>
                <a href={callURL} style={{ ...BP.primary,justifyContent:"center" }}>📞 Call for Directions</a>
              </div>
            </FadeUp>

{/*             
              NOTE: Google Maps iframe is blocked in Claude's preview sandbox due to browser security (CSP).
              In your actual Next.js app, replace the div below with this iframe:
              
              <iframe
                src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE_HERE"
                width="100%" height="420"
                style={{ border:0, borderRadius:20, display:'block' }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              
              TODO: Get your embed code from: maps.google.com → Share → Embed a map
            */}
            <FadeUp delay={150}>
              <div style={{ borderRadius:20,overflow:"hidden",boxShadow:"0 8px 40px rgba(0,0,0,.1)",height:420,background:"linear-gradient(135deg,#e0f2f1,#e3f2fd)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:0,position:"relative" }}>
                <div style={{ position:"absolute",inset:0,opacity:.12,backgroundImage:"repeating-linear-gradient(0deg,transparent,transparent 39px,#00897b 39px,#00897b 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,#00897b 39px,#00897b 40px)" }} />
                <div style={{ position:"absolute",inset:0,background:"radial-gradient(circle at 60% 40%,rgba(0,137,123,.08) 0%,transparent 60%)" }} />
                <div style={{ position:"relative",textAlign:"center",padding:"0 32px" }}>
                  <div style={{ fontSize:"3.2rem",marginBottom:12 }}>🗺️</div>
                  <h3 style={{ fontFamily:"'Playfair Display',serif",fontSize:"1.25rem",fontWeight:700,color:"#0d1b2a",marginBottom:6 }}>Connaught Place, New Delhi</h3>
                  <p style={{ color:"#6b7a8d",fontSize:".87rem",marginBottom:22,lineHeight:1.6 }}>12, Medical Complex, CP<br/>New Delhi – 110001</p>
                  {/* TODO: Replace href with your actual Google Maps link */}
                  <a href={mapsURL} target="_blank" rel="noreferrer" style={{ ...BP.primary,margin:"0 auto" }}>📍 Open in Google Maps</a>
                  <p style={{ color:"#9ca3af",fontSize:".7rem",marginTop:14,lineHeight:1.5 }}>Live embed works in your Next.js app.<br/>Replace with your Google Maps iframe.</p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background:"linear-gradient(135deg,#0d1b2a 0%,#0a3d3a 100%)",padding:"80px 40px" }}>
        <div style={{ maxWidth:680,margin:"0 auto",textAlign:"center" }}>
          <FadeUp>
            <h2 style={{ fontFamily:"'Playfair Display',serif",fontSize:"clamp(1.8rem,4vw,2.8rem)",color:"white",fontWeight:700,marginBottom:16 }}>Your Health Deserves<br/>the Best Attention</h2>
            <p style={{ color:"rgba(255,255,255,.58)",lineHeight:1.75,marginBottom:40,fontSize:"1rem" }}>Don't wait for symptoms to worsen. Book a consultation with Dr. Mehta today.</p>
            <div style={{ display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap" }}>
              <a href={whatsappURL} style={{ ...BP.whatsapp,fontSize:"1rem",padding:"16px 36px" }}>💬 Book on WhatsApp</a>
              <a href={callURL} style={{ ...BP.outlineWhite,fontSize:"1rem",padding:"16px 36px" }}>📞 {DOCTOR.phone}</a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background:"#060e17",padding:"52px 40px 28px" }}>
        <div style={{ maxWidth:1200,margin:"0 auto" }}>
          <div className="three-cols" style={{ display:"grid",gridTemplateColumns:"2fr 1fr 1fr",gap:56,marginBottom:40 }}>
            <div>
              <div style={{ display:"flex",alignItems:"center",gap:10,marginBottom:14 }}>
                <div style={{ width:36,height:36,borderRadius:10,background:"linear-gradient(135deg,#00897b,#4db6ac)",display:"flex",alignItems:"center",justifyContent:"center" }}>🏥</div>
                <span style={{ color:"white",fontFamily:"'Playfair Display',serif",fontWeight:700 }}>Dr. Arjun Mehta</span>
              </div>
              <p style={{ color:"rgba(255,255,255,.38)",fontSize:".86rem",lineHeight:1.7,maxWidth:280 }}>{DOCTOR.experience} years of trusted healthcare. Patient-first, evidence-based medicine in New Delhi.</p>
            </div>
            <div>
              <div style={{ color:"rgba(255,255,255,.38)",fontSize:".72rem",letterSpacing:".1em",textTransform:"uppercase",marginBottom:14 }}>Quick Links</div>
              {["Services","Timings","Testimonials","Location"].map(l=>(
                <a key={l} href={`#${l.toLowerCase()}`} style={{ display:"block",color:"rgba(255,255,255,.52)",fontSize:".87rem",marginBottom:10,transition:"color .2s" }}
                  onMouseEnter={e=>e.target.style.color="#4db6ac"} onMouseLeave={e=>e.target.style.color="rgba(255,255,255,.52)"}>{l}</a>
              ))}
            </div>
            <div>
              <div style={{ color:"rgba(255,255,255,.38)",fontSize:".72rem",letterSpacing:".1em",textTransform:"uppercase",marginBottom:14 }}>Contact</div>
              <a href={callURL} style={{ display:"block",color:"rgba(255,255,255,.52)",fontSize:".87rem",marginBottom:10 }}>{DOCTOR.phone}</a>
              <a href={whatsappURL} style={{ display:"block",color:"#25D366",fontSize:".87rem",marginBottom:10 }}>WhatsApp</a>
              <div style={{ color:"rgba(255,255,255,.38)",fontSize:".8rem",lineHeight:1.6 }}>Connaught Place,<br/>New Delhi – 110001</div>
            </div>
          </div>
          <div style={{ borderTop:"1px solid rgba(255,255,255,.06)",paddingTop:22,display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:10 }}>
            <p style={{ color:"rgba(255,255,255,.22)",fontSize:".77rem" }}>© 2025 Dr. Arjun Mehta. All rights reserved.</p>
            <p style={{ color:"rgba(255,255,255,.16)",fontSize:".75rem" }}>Dr. Arjun Mehta – General Physician in Connaught Place, New Delhi</p>
          </div>
        </div>
      </footer>
    </>
  );
}