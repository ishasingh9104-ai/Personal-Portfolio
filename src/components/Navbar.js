import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { path: '/',            label: 'Home',         icon: '⌂' },
  { path: '/about',       label: 'About',        icon: '👤' },
  { path: '/skills',      label: 'Skills',       icon: '⚡' },
  { path: '/projects',    label: 'Projects',     icon: '🚀' },
  { path: '/certificates',label: 'Certificates', icon: '📜' },
  { path: '/resume',      label: 'Resume',       icon: '📄' },
];

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => setMobileOpen(false), [location.pathname]);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 500,
        height: '60px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 2rem',
        background: scrolled ? 'rgba(13,17,23,0.97)' : 'rgba(13,17,23,0.85)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border)',
        transition: 'all 0.3s',
        boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.4)' : 'none',
      }}>
        {/* LOGO */}
        <Link to="/" style={{
          fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '0.95rem',
          color: 'var(--white)', display: 'flex', alignItems: 'center', gap: '0.5rem',
        }}>
          <div style={{
            width: 32, height: 32, background: 'var(--blue2)', borderRadius: 6,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '0.72rem', fontWeight: 800, color: '#fff',
          }}>IS</div>
          <span style={{ color: 'var(--white3)' }}>~/</span>
          <span style={{ color: 'var(--blue)' }}>isha-singh</span>
        </Link>

        {/* DESKTOP LINKS */}
        <div style={{ display: 'flex', gap: '0.2rem', alignItems: 'center' }} className="desktop-nav">
          {navItems.map(item => (
            <Link key={item.path} to={item.path} style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.8rem',
              color: isActive(item.path) ? 'var(--blue)' : 'var(--white3)',
              padding: '0.4rem 0.85rem', borderRadius: '6px',
              background: isActive(item.path) ? 'rgba(88,166,255,0.1)' : 'transparent',
              border: isActive(item.path) ? '1px solid rgba(88,166,255,0.25)' : '1px solid transparent',
              transition: 'all 0.2s',
              position: 'relative',
            }}
            onMouseEnter={e => { if (!isActive(item.path)) { e.target.style.color='var(--white)'; e.target.style.background='rgba(255,255,255,0.05)'; }}}
            onMouseLeave={e => { if (!isActive(item.path)) { e.target.style.color='var(--white3)'; e.target.style.background='transparent'; }}}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/contact" style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 600,
            color: '#fff', background: 'var(--blue2)',
            padding: '0.45rem 1.2rem', borderRadius: '6px',
            marginLeft: '0.5rem', transition: 'all 0.2s',
            border: '1px solid var(--blue)',
          }}
          onMouseEnter={e => { e.currentTarget.style.background='var(--blue)'; e.currentTarget.style.transform='translateY(-1px)'; }}
          onMouseLeave={e => { e.currentTarget.style.background='var(--blue2)'; e.currentTarget.style.transform='none'; }}
          >
            Hire me
          </Link>
        </div>

        {/* HAMBURGER */}
        <button onClick={() => setMobileOpen(o => !o)} style={{
          display: 'none', flexDirection: 'column', gap: '5px',
          background: 'none', border: 'none', cursor: 'pointer', padding: '4px',
        }} className="hamburger">
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: 'block', width: '22px', height: '2px',
              background: 'var(--white2)', borderRadius: '2px', transition: 'all 0.3s',
            }} />
          ))}
        </button>
      </nav>

      {/* MOBILE DRAWER */}
      {mobileOpen && (
        <div style={{
          position: 'fixed', top: '60px', left: 0, right: 0, zIndex: 499,
          background: 'rgba(13,17,23,0.98)', backdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--border)',
          padding: '1rem 1.5rem 1.5rem',
          display: 'flex', flexDirection: 'column', gap: '0.3rem',
          animation: 'fadeIn 0.2s ease',
        }}>
          {[...navItems, { path: '/contact', label: 'Contact me', icon: '✉' }].map(item => (
            <Link key={item.path} to={item.path} style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.9rem',
              color: isActive(item.path) ? 'var(--blue)' : 'var(--white2)',
              padding: '0.65rem 0.9rem', borderRadius: '8px',
              background: isActive(item.path) ? 'rgba(88,166,255,0.08)' : 'transparent',
              display: 'flex', alignItems: 'center', gap: '0.7rem',
            }}>
              <span>{item.icon}</span>{item.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
