import React, { useState } from 'react';
import SectionWrapper, { RevealCard } from '../components/SectionWrapper';
import motivational from '../assets/motivational.jpg';
import weather2 from '../assets/weather2.jpg';
import portfolio_photo from '../assets/portfolio_photo.jpg';


const projects = [
  {
    title: 'Personal Portfolio',
    desc: 'A responsive personal portfolio website built entirely in React. Features component-based architecture, React Router, smooth animations, and a clean VS Code-inspired dark theme.',
    tags: ['React', 'React Router', 'CSS', 'JavaScript'],
    thumb:  portfolio_photo,
    color: 'linear-gradient(135deg, #1c2128, #0d1117)',
    accent: '#61dafb',
    github: 'https://github.com/isha-singh/portfolio',
    demo: 'https://isha-portfolio.vercel.app',
    status: 'live',
  },
  {
    title: 'Weather App',
    desc: 'Real-time weather application using OpenWeatherMap API. Displays temperature, humidity, wind speed and conditions for any searched city with a clean animated UI.',
    tags: ['JavaScript', 'REST API', 'HTML', 'CSS'],
    thumb: weather2,
    color: 'linear-gradient(135deg, #0d1a2d, #0d1117)',
    accent: '#58a6ff',
    github: 'https://github.com/ishasingh9104-ai/WeatherApp',
    demo: 'https://weather-app-ten-drab-85.vercel.app/',
    status: 'live',
  },
  {
    title: 'Motivational Quote Generator',
    desc: 'Fetches random motivational quotes from a public API. Users can generate new quotes, copy to clipboard, and share on social media. Smooth fade-in transitions.',
    tags: ['JavaScript', 'Quotable API', 'HTML', 'CSS'],
    thumb: motivational,
    color: 'linear-gradient(135deg, #0d1f0d, #0d1117)',
    accent: '#3fb950',
    github: 'https://github.com/ishasingh9104-ai/Motivational-_Quotes',
    demo: 'https://motivational-quotes-alpha.vercel.app/',
    status: 'live',
  },
];

export default function Projects() {
  return (
    <SectionWrapper>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 2rem' }}>

        <RevealCard>
          <div style={{ fontFamily: 'var(--font-mono)', marginBottom: '3rem' }}>
            <div style={{ fontSize: '0.72rem', color: 'var(--white4)', marginBottom: '0.3rem' }}>// projects.tsx</div>
            <h1 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 900, letterSpacing: '-0.04em', color: 'var(--white)' }}>
              My <span style={{ color: 'var(--blue)' }}>Projects</span>
            </h1>
            <div style={{ width: '40px', height: '3px', background: 'linear-gradient(90deg,var(--blue),var(--purple))', borderRadius: '2px', marginTop: '0.8rem' }} />
            <p style={{ fontSize: '0.9rem', color: 'var(--white3)', marginTop: '1rem', lineHeight: 1.7 }}>
              Projects built during my learning journey — each one a new lesson.
            </p>
          </div>
        </RevealCard>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: '1.5rem' }}>
          {projects.map((proj, i) => (
            <RevealCard key={proj.title} delay={i * 100}>
              <ProjectCard proj={proj} />
            </RevealCard>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

function ProjectCard({ proj }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: 'var(--bg2)',
        border: `1px solid ${hov ? proj.accent + '55' : 'var(--border)'}`,
        borderRadius: '14px', overflow: 'hidden',
        transition: 'all 0.35s',
        transform: hov ? 'translateY(-6px)' : 'none',
        boxShadow: hov ? `0 20px 50px rgba(0,0,0,0.4), 0 0 0 1px ${proj.accent}22` : 'none',
        display: 'flex', flexDirection: 'column',
      }}>

      {/* Thumbnail */}
<div style={{
  height: '140px',
  position: 'relative',
  overflow: 'hidden',
  borderBottom: `2px solid ${proj.accent}30`,
}}>

  <img
    src={proj.thumb}
    alt={proj.title}
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.3s',
      transform: hov ? 'scale(1.1)' : 'scale(1)',
    }}
  />

  {/* Status pill */}
  <div style={{
    position: 'absolute', top: '0.75rem', right: '0.75rem',
    fontFamily: 'var(--font-mono)', fontSize: '0.65rem', fontWeight: 700,
    color: '#3fb950', background: 'rgba(63,185,80,0.12)',
    border: '1px solid rgba(63,185,80,0.3)',
    padding: '0.2rem 0.6rem', borderRadius: '100px',
  }}>
    ● {proj.status}
  </div>
</div>
      {/* Body */}
      <div style={{ padding: '1.4rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '0.8rem' }}>
          {proj.tags.map(t => (
            <span key={t} style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.65rem', fontWeight: 700,
              color: proj.accent, background: `${proj.accent}15`,
              border: `1px solid ${proj.accent}30`,
              padding: '0.2rem 0.55rem', borderRadius: '100px',
            }}>{t}</span>
          ))}
        </div>

        <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', fontWeight: 800, color: 'var(--white)', marginBottom: '0.5rem' }}>
          {proj.title}
        </h3>
        <p style={{ fontSize: '0.83rem', color: 'var(--white3)', lineHeight: 1.7, flex: 1 }}>{proj.desc}</p>

        {/* Links */}
        <div style={{
          marginTop: '1.2rem', paddingTop: '1rem',
          borderTop: '1px solid var(--border)',
          display: 'flex', gap: '0.75rem',
        }}>
          {/* GitHub */}
          <a href={proj.github} target="_blank" rel="noreferrer"
            style={{
              display: 'flex', alignItems: 'center', gap: '0.4rem',
              fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: 600,
              color: 'var(--white3)',
              background: 'var(--bg3)', border: '1px solid var(--border)',
              padding: '0.5rem 1rem', borderRadius: '7px',
              transition: 'all 0.2s', flex: 1, justifyContent: 'center',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.3)'; e.currentTarget.style.color='var(--white)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.color='var(--white3)'; }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
            GitHub
          </a>

          {/* Vercel Demo */}
          <a href={proj.demo} target="_blank" rel="noreferrer"
            style={{
              display: 'flex', alignItems: 'center', gap: '0.4rem',
              fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: 700,
              color: '#fff', background: proj.accent + 'dd',
              border: `1px solid ${proj.accent}`,
              padding: '0.5rem 1rem', borderRadius: '7px',
              transition: 'all 0.2s', flex: 1, justifyContent: 'center',
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity='0.85'; e.currentTarget.style.transform='translateY(-1px)'; }}
            onMouseLeave={e => { e.currentTarget.style.opacity='1'; e.currentTarget.style.transform='none'; }}
          >
            ▲ Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}
