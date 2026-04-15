import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from '../components/Typewriter';
import formal_pic from "../assets/formal_pic.jpg";
const typewriterWords = [
  
  'Full stack Web  Developer.',
  'Fresher.',
  'UI Builder.',
  'Open to Work ✓',
];

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      paddingTop: '60px',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* ── LEFT: DARK PANEL ── */}
      <div style={{
        background: 'var(--bg)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '4rem 4rem 4rem 5rem',
        position: 'relative',
        zIndex: 2,
        borderRight: '1px solid var(--border)',
      }}>

        {/* Status badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 600,
          color: 'var(--green)', background: 'rgba(63,185,80,0.08)',
          border: '1px solid rgba(63,185,80,0.25)',
          padding: '0.38rem 0.9rem', borderRadius: '100px',
          marginBottom: '2rem',
          animation: 'fadeUp 0.6s 0.2s both',
          width: 'fit-content',
        }}>
          <span style={{
            width: 7, height: 7, borderRadius: '50%',
            background: 'var(--green)',
            animation: 'pulse 2s infinite',
            display: 'inline-block',
          }} />
          available for hire
        </div>

        {/* Hi text */}
        <p style={{
          fontFamily: 'var(--font-mono)', fontSize: '1rem',
          color: 'var(--white3)', marginBottom: '0.4rem',
          animation: 'fadeUp 0.7s 0.3s both',
        }}>
          <span style={{ color: 'var(--white4)' }}>// </span>Hi, I am
        </p>

        {/* NAME — big typewriter */}
        <h1 style={{
          fontFamily: 'var(--font-mono)', fontWeight: 900,
          fontSize: 'clamp(3rem, 5.5vw, 5rem)',
          letterSpacing: '-0.04em', lineHeight: 1.1,
          marginBottom: '0.5rem',
          animation: 'fadeUp 0.7s 0.4s both',
        }}>
          <span style={{ color: 'var(--white)' }}>Isha </span>
          <span style={{ color: 'var(--blue)' }}>Singh</span>
          <span style={{ color: 'var(--white3)' }}>.</span>
        </h1>

        {/* Role typewriter */}
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: '1rem',
          color: 'var(--white3)', marginBottom: '2.5rem',
          animation: 'fadeUp 1s 1s both',
          minHeight: '1.0rem',
        }}>
          <span style={{ color: 'var(--white4)' }}>$ </span>
          <Typewriter
            words={typewriterWords}
            style={{ color: 'var(--blue)', fontWeight: 600 }}
            cursorColor="var(--blue)"
          />
        </div>

        {/* Social Icons — ONLY on home */}
        <div style={{
          display: 'flex', gap: '0.75rem',
          animation: 'fadeUp 0.7s 0.8s both',
          marginBottom: '2.5rem',
        }}>
          {[
            { href: 'mailto:ishasingh9104@gmail.com', label: '@', title: 'Email' },
            {
              href: 'https://github.com/ishasingh9104-ai',
              label: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              ),
              title: 'GitHub',
            },
            {
              href: 'https://linkedin.com/in/isha-singh-792810400',
              label: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              ),
              title: 'LinkedIn',
            },
          ].map(({ href, label, title }) => (
            <a key={title} href={href} target="_blank" rel="noreferrer" title={title} style={{
              width: 44, height: 44, borderRadius: '50%',
              border: '1.5px solid var(--border2)',
              background: 'var(--bg2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--white3)',
              fontFamily: 'var(--font-mono)', fontSize: '1rem', fontWeight: 700,
              transition: 'all 0.25s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background='var(--blue2)'; e.currentTarget.style.color='#fff'; e.currentTarget.style.borderColor='var(--blue)'; e.currentTarget.style.transform='translateY(-3px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background='var(--bg2)'; e.currentTarget.style.color='var(--white3)'; e.currentTarget.style.borderColor='var(--border2)'; e.currentTarget.style.transform='none'; }}
            >
              {label}
            </a>
          ))}
        </div>

        {/* CTA buttons */}
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', animation: 'fadeUp 0.7s 1s both' }}>
          <Link to="/projects" style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 700,
            background: 'var(--blue2)', color: '#fff',
            padding: '0.75rem 1.6rem', borderRadius: '8px',
            border: '1px solid var(--blue)', transition: 'all 0.25s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background='var(--blue)'; e.currentTarget.style.transform='translateY(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.background='var(--blue2)'; e.currentTarget.style.transform='none'; }}
          >
            view_my_work() →
          </Link>
          <Link to="/contact" style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 600,
            background: 'transparent', color: 'var(--white2)',
            padding: '0.75rem 1.6rem', borderRadius: '8px',
            border: '1px solid var(--border2)', transition: 'all 0.25s',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor='var(--blue)'; e.currentTarget.style.color='var(--blue)'; e.currentTarget.style.transform='translateY(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border2)'; e.currentTarget.style.color='var(--white2)'; e.currentTarget.style.transform='none'; }}
          >
            let's_talk()
          </Link>
        </div>
      </div>

      {/* ── RIGHT: PHOTO + CODE WATERMARK ── */}
      <div style={{
        background: '#0d1117',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        animation: 'fadeIn 0.9s 0.3s both',
      }}>

        {/* BIG NAME WATERMARK behind photo */}
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          pointerEvents: 'none', userSelect: 'none', zIndex: 0,
        }}>
          <span style={{
            fontFamily: 'var(--font-mono)', fontWeight: 900,
            fontSize: 'clamp(4rem, 9vw, 8rem)',
            color: 'rgba(88,166,255,0.06)',
            letterSpacing: '-0.04em', lineHeight: 1,
            transform: 'rotate(-15deg)',
            whiteSpace: 'nowrap',
          }}>ISHA</span>
          <span style={{
            fontFamily: 'var(--font-mono)', fontWeight: 900,
            fontSize: 'clamp(3rem, 7vw, 6rem)',
            color: 'rgba(88,166,255,0.04)',
            letterSpacing: '-0.04em',
            transform: 'rotate(-15deg)',
            whiteSpace: 'nowrap',
          }}>SINGH</span>
        </div>

        {/* Decorative grid lines */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
          backgroundImage: `
            linear-gradient(rgba(88,166,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(88,166,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }} />

        {/* Photo area */}
        <div style={{
          position: 'relative', zIndex: 2,
          width: '65%', maxWidth: '340px',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem',
        }}>

          {/* Photo frame */}
          <div style={{
            width: '100%', aspectRatio: '3/4',
            borderRadius: '16px',
            border: '2px solid rgba(88,166,255,0.2)',
            overflow: 'hidden',
            background: 'linear-gradient(135deg, #1c2128, #161b22)',
            position: 'relative',
            boxShadow: '0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(88,166,255,0.1)',
          }}>
           <img 
            src={formal_pic} 
            alt="Isha Singh"
            style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover'
         }} 
/>

            {/* Corner accent */}
            <div style={{
              position: 'absolute', top: 0, right: 0,
              width: '40px', height: '40px',
              borderTop: '2px solid var(--blue)', borderRight: '2px solid var(--blue)',
              borderRadius: '0 16px 0 0',
            }} />
            <div style={{
              position: 'absolute', bottom: 0, left: 0,
              width: '40px', height: '40px',
              borderBottom: '2px solid var(--blue)', borderLeft: '2px solid var(--blue)',
              borderRadius: '0 0 0 16px',
            }} />
          </div>

          {/* Name tag below photo */}
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
            color: 'var(--white3)', textAlign: 'center',
            background: 'rgba(88,166,255,0.06)',
            border: '1px solid rgba(88,166,255,0.15)',
            borderRadius: '8px', padding: '0.5rem 1rem',
          }}>
            <span style={{ color: 'var(--blue)' }}>@isha_singh</span>
            <span style={{ color: 'var(--white4)' }}> · frontend dev</span>
          </div>
        </div>

        {/* Corner watermark */}
        <div style={{
          position: 'absolute', bottom: '1.5rem', right: '1.5rem',
          fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
          color: 'rgba(255,255,255,0.12)', letterSpacing: '0.1em',
          pointerEvents: 'none',
        }}>
          isha.singh.dev
        </div>
      </div>

      {/* RESPONSIVE */}
      <style>{`
        @media (max-width: 768px) {
          #home-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
