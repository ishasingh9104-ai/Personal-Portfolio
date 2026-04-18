import React from 'react';
import SectionWrapper, { RevealCard } from '../components/SectionWrapper';

const skills = [
  { name: 'HTML5',      icon: '🌐', level: 88, color: '#e34c26', desc: 'Semantic markup · Accessibility · Forms' },
  { name: 'CSS3',       icon: '🎨', level: 84, color: '#264de4', desc: 'Flexbox · Grid · Animations · Responsive' },
  { name: 'JavaScript', icon: '⚡', level: 78, color: '#f7df1e', desc: 'ES6+ · DOM · Fetch API · Events' },
  { name: 'React',      icon: '⚛️', level: 72, color: '#61dafb', desc: 'Components · Hooks · State · Props' },
  { name: 'Java',       icon: '☕', level: 68, color: '#b07219', desc: 'OOP · Classes · Problem Solving' },
  { name: 'MySQL',      icon: '🗄️', level: 65, color: '#00758f', desc: 'Queries · Joins · Database Design' },
  { name: 'Bootstrap',  icon: '🔧', level: 70, color: '#563d7c', desc: 'CSS Framework · Responsive Design' },
];

export default function Skills() {
  return (
    <SectionWrapper>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 2rem' }}>

        <RevealCard>
          <div style={{ fontFamily: 'var(--font-mono)', marginBottom: '3rem' }}>
            <div style={{ fontSize: '0.72rem', color: 'var(--white4)', marginBottom: '0.3rem' }}>// skills.tsx</div>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, letterSpacing: '-0.04em', color: 'var(--white)' }}>
              Tech <span style={{ color: 'var(--blue)' }}>Stack</span>
            </h1>
            <div style={{ width: '40px', height: '3px', background: 'linear-gradient(90deg, var(--blue), var(--purple))', borderRadius: '2px', marginTop: '0.8rem' }} />
            <p style={{ fontSize: '0.9rem', color: 'var(--white3)', marginTop: '1rem', maxWidth: '500px', lineHeight: 1.7 }}>
              Technologies I've learned and applied in real projects.
            </p>
          </div>
        </RevealCard>

        {/* Skills grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
          {skills.map((sk, i) => (
            <RevealCard key={sk.name} delay={i * 60}>
              <SkillCard sk={sk} />
            </RevealCard>
          ))}
        </div>

        {/* Also know */}
        <RevealCard delay={400}>
          <div style={{
            marginTop: '2.5rem', padding: '1.5rem 2rem',
            background: 'var(--bg2)', border: '1px solid var(--border)',
            borderRadius: '12px',
          }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--white3)', marginBottom: '1rem' }}>
              <span style={{ color: 'var(--white4)' }}>// </span>also comfortable with
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {['Git & GitHub','VS Code','Responsive Design','REST APIs','npm','Chrome DevTools'].map(t => (
                <span key={t} style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
                  color: 'var(--white3)', background: 'var(--bg3)',
                  border: '1px solid var(--border)', padding: '0.3rem 0.8rem', borderRadius: '6px',
                }}>{t}</span>
              ))}
            </div>
          </div>
        </RevealCard>
      </div>
    </SectionWrapper>
  );
}

function SkillCard({ sk }) {
  const [hovered, setHovered] = React.useState(false);
  const [animated, setAnimated] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setTimeout(() => setAnimated(true), 300); obs.disconnect(); }
    }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'var(--bg3)' : 'var(--bg2)',
        border: `1px solid ${hovered ? 'rgba(88,166,255,0.35)' : 'var(--border)'}`,
        borderRadius: '12px', padding: '1.4rem',
        transition: 'all 0.3s',
        transform: hovered ? 'translateY(-4px)' : 'none',
        boxShadow: hovered ? '0 12px 30px rgba(0,0,0,0.3)' : 'none',
        position: 'relative', overflow: 'hidden',
      }}>
      {/* top accent */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: `linear-gradient(90deg, ${sk.color}, transparent)`,
        opacity: hovered ? 1 : 0, transition: 'opacity 0.3s',
      }} />

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', marginBottom: '1rem' }}>
        <div style={{
          width: 42, height: 42, borderRadius: '10px',
          background: 'var(--bg)', border: '1px solid var(--border)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.3rem', transition: 'transform 0.3s',
          transform: hovered ? 'scale(1.1) rotate(-5deg)' : 'none',
        }}>{sk.icon}</div>
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--white)' }}>{sk.name}</div>
          <div style={{ fontSize: '0.73rem', color: 'var(--white4)', marginTop: '0.1rem' }}>{sk.desc}</div>
        </div>
        <div style={{
          marginLeft: 'auto', fontFamily: 'var(--font-mono)',
          fontSize: '0.9rem', fontWeight: 700,
          color: sk.color,
        }}>{sk.level}%</div>
      </div>

      {/* Progress bar */}
      <div style={{ height: '4px', background: 'var(--bg4)', borderRadius: '2px', overflow: 'hidden' }}>
        <div style={{
          height: '100%', borderRadius: '2px',
          background: `linear-gradient(90deg, ${sk.color}, var(--blue))`,
          width: animated ? `${sk.level}%` : '0%',
          transition: 'width 1.4s cubic-bezier(0.4, 0, 0.2, 1)',
        }} />
      </div>
    </div>
  );
}
