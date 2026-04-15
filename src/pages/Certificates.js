import React, { useState } from 'react';
import SectionWrapper, { RevealCard } from '../components/SectionWrapper';

const certs = [
  {
    id: 1, title: 'Web Development Essentials — HTML & CSS',
    org: 'ITVedant Institute', year: '2026',
    desc: 'Completed structured coursework covering semantic HTML5, modern CSS3, Grid, responsive design, and accessibility standards.',
    skills: ['HTML5','CSS3','Semantic','Accessibility','Grid','Responsive'],
    icon: '🌐', color: '#e34c26', badge: '#e34c26',
  },
  {
    id: 2, title: 'JavaScript',
    org: 'ITVedant Institute', year: '2026',
    desc: 'Mastered core JavaScript ES6+, DOM manipulation, Fetch API, events, and built interactive web features using JavaScript.',
    skills: ['ES6+','DOM','DOM Manipulation','Fetch API','Events'],
    icon: '⚡', color: '#61dafb', badge: '#61dafb',
  },
  {
    id: 3, title: 'Java Programming Core',
    org: 'ITVedant Institute', year: '2026',
    desc: 'Learned object-oriented programming with Java including classes, inheritance, polymorphism, interfaces, and exception handling.',
    skills: ['OOP','Classes','Inheritance','Java SE'],
    icon: '☕', color: '#b07219', badge: '#b07219',
  },
  {
    id: 4, title: 'MySQL & Database Design',
    org: 'ITVedant Institute', year: '2026',
    desc: 'Covered relational database concepts, SQL queries, JOINs, normalization, and database design principles using MySQL.',
    skills: ['SQL','Joins','Normalization'],
    icon: '🗄️', color: '#00758f', badge: '#00758f',
  },
  {
    id: 5, title: 'React ',
    org: 'ITVedant Institute', year: '2026',
    desc: 'Learned React, a popular JavaScript library for building user interfaces, including components, state, and props.',
    skills: ['React' ,'Components','State','Props'],
    icon: '⚛️', color: '#61dafb', badge: '#61dafb',
  },
];

export default function Certificates() {
  return (
    <SectionWrapper>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 2rem' }}>

        <RevealCard>
          <div style={{ fontFamily: 'var(--font-mono)', marginBottom: '3rem' }}>
            <div style={{ fontSize: '0.72rem', color: 'var(--white4)', marginBottom: '0.3rem' }}>// certificates.tsx</div>
            <h1 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 900, letterSpacing: '-0.04em', color: 'var(--white)' }}>
              My <span style={{ color: 'var(--blue)' }}>Certificates</span>
            </h1>
            <div style={{ width: '40px', height: '3px', background: 'linear-gradient(90deg,var(--blue),var(--purple))', borderRadius: '2px', marginTop: '0.8rem' }} />
            <p style={{ fontSize: '0.9rem', color: 'var(--white3)', marginTop: '1rem', lineHeight: 1.7 }}>
              Industry-recognised certifications from <strong style={{ color: 'var(--blue)' }}>ITVedant Institute</strong> earned through structured coursework and practical assessments.
            </p>
          </div>
        </RevealCard>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(480px,1fr))', gap: '1.3rem' }}>
          {certs.map((cert, i) => (
            <RevealCard key={cert.id} delay={i * 80}>
              <CertCard cert={cert} />
            </RevealCard>
          ))}
        </div>

        {/* Note */}
        <RevealCard delay={400}>
          <div style={{
            marginTop: '2rem', padding: '1rem 1.5rem',
            background: 'rgba(88,166,255,0.05)', border: '1px solid rgba(88,166,255,0.15)',
            borderRadius: '10px', fontFamily: 'var(--font-mono)', fontSize: '0.78rem',
            color: 'var(--white3)',
          }}>
            <span style={{ color: 'var(--white4)' }}>// </span>
            updated certification from ITVedant Institute, showcasing my commitment to continuous learning and skill development in web technologies.
          </div>
        </RevealCard>
      </div>
    </SectionWrapper>
  );
}

function CertCard({ cert }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: 'var(--bg2)',
        border: `1px solid ${hov ? cert.color + '55' : 'var(--border)'}`,
        borderRadius: '14px', padding: '1.6rem',
        transition: 'all 0.3s', position: 'relative', overflow: 'hidden',
        transform: hov ? 'translateY(-4px)' : 'none',
        boxShadow: hov ? `0 16px 40px rgba(0,0,0,0.3)` : 'none',
      }}>

      {/* Top accent bar */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
        background: `linear-gradient(90deg, ${cert.color}, transparent)`,
        opacity: hov ? 1 : 0, transition: 'opacity 0.3s',
      }} />

      <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
        {/* Icon */}
       <div style={{
  width: 52,
  height: 52,
  borderRadius: '12px',
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.8rem',  // 🔥 bigger & better
  background: `${cert.color}15`,
  border: `1px solid ${cert.color}35`,
  transition: 'transform 0.3s',
  transform: hov ? 'scale(1.1)' : 'none', // clean (rotate hata diya)
}}>
  {cert.icon}
</div>

        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.3rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.95rem', fontWeight: 800, color: 'var(--white)' }}>
              {cert.title}
            </h3>
            {/* Verified badge */}
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.65rem', fontWeight: 700,
              color: '#3fb950', background: 'rgba(63,185,80,0.1)',
              border: '1px solid rgba(63,185,80,0.25)',
              padding: '0.2rem 0.6rem', borderRadius: '100px',
            }}>✓ Certified</span>
          </div>

          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--white4)', marginBottom: '0.7rem' }}>
            {cert.org} · {cert.year}
          </div>

          <p style={{ fontSize: '0.83rem', color: 'var(--white3)', lineHeight: 1.7, marginBottom: '1rem' }}>
            {cert.desc}
          </p>

          {/* Skills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {cert.skills.map(sk => (
              <span key={sk} style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.68rem', fontWeight: 600,
                color: cert.color, background: `${cert.color}12`,
                border: `1px solid ${cert.color}30`,
                padding: '0.2rem 0.6rem', borderRadius: '100px',
              }}>{sk}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
