import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Certificates from './pages/Certificates';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (isLoading) return <LoadingScreen />;

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      <Navbar />
      <Routes>
        <Route path="/"            element={<Home />} />
        <Route path="/about"       element={<About />} />
        <Route path="/skills"      element={<Skills />} />
        <Route path="/projects"    element={<Projects />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/resume"      element={<Resume />} />
        <Route path="/contact"     element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

function LoadingScreen() {
  return (
    <div style={{
      position: 'fixed', inset: 0, background: 'var(--bg)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', gap: '1.5rem', zIndex: 9999
    }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', color: 'var(--blue)' }}>
        <span style={{ color: 'var(--pink)' }}>const </span>
        <span style={{ color: 'var(--blue)' }}>isha </span>
        <span style={{ color: 'var(--white3)' }}>= </span>
        <span style={{ color: 'var(--yellow)' }}>loading</span>
        <span style={{ color: 'var(--white3)', animation: 'pulse 1s infinite' }}>...</span>
      </div>
      <div style={{ display: 'flex', gap: '8px' }}>
        {[0,1,2].map(i => (
          <div key={i} style={{
            width: 8, height: 8, borderRadius: '50%', background: 'var(--blue)',
            animation: `pulse 1s ${i * 0.2}s infinite`
          }} />
        ))}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '1.5rem 2rem',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      flexWrap: 'wrap', gap: '1rem',
      background: 'var(--bg2)',
    }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--white3)' }}>
        <span style={{ color: 'var(--white4)' }}>// </span>
        <span style={{ color: 'var(--white3)' }}>© 2026 Isha Singh · built with </span>
        <span style={{ color: 'var(--blue)' }}>React</span>
        <span style={{ color: 'var(--white3)' }}> + love 💙</span>
      </div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--white4)' }}>
        open to work ✓
      </div>
    </footer>
  );
}

export default App;
