import React from 'react';
import { Link } from 'react-router-dom';
import SectionWrapper, { RevealCard } from '../components/SectionWrapper';
import { CodeBlock, Line, kw, prop, str, str2, num, cmt, br } from '../components/CodeBlock';

export default function About() {
  return (
    <SectionWrapper>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 2rem' }}>

        {/* Header */}
        <RevealCard>
          <div style={{ fontFamily: 'var(--font-mono)', marginBottom: '3rem' }}>
            <div style={{ fontSize: '0.72rem', color: 'var(--white4)', marginBottom: '0.3rem' }}>
              // about.tsx
            </div>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, letterSpacing: '-0.04em', color: 'var(--white)' }}>
              About <span style={{ color: 'var(--blue)' }}>Me</span>
            </h1>
            <div style={{ width: '40px', height: '3px', background: 'linear-gradient(90deg, var(--blue), var(--purple))', borderRadius: '2px', marginTop: '0.8rem' }} />
          </div>
        </RevealCard>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>

          {/* Left: Code block */}
          <RevealCard delay={100}>
            <CodeBlock filename="about-isha.ts">
              <Line num="1">{cmt('// 👩‍💻 isha singh · fresher developer')}</Line>
              <Line num="2">&nbsp;</Line>
              <Line num="3">{kw('const ')} {prop('developer')} {br('= {')} </Line>
              <Line num="4">&nbsp;&nbsp;{prop('name')}{br(':     ')}{str('"Isha Singh"')}{br(',')}</Line>
              <Line num="5">&nbsp;&nbsp;{prop('role')}{br(':     ')}{str('"Frontend Developer"')}{br(',')}</Line>
              <Line num="6">&nbsp;&nbsp;{prop('location')}{br(': ')}{str('"India 🇮🇳"')}{br(',')}</Line>
              <Line num="7">&nbsp;&nbsp;{prop('education')}{br(': ')}{str('"Bsc in Chemistry"')}{br(',')}</Line>
              <Line num="8">&nbsp;&nbsp;{prop('institute')}{br(': ')}{str('"ITVedant"')}{br(',')}</Line>
              <Line num="9">&nbsp;&nbsp;{prop('stack')}{br(':     [')} </Line>
              <Line num="10">&nbsp;&nbsp;&nbsp;&nbsp;{str2('"HTML"')}{br(', ')}{str2('"CSS"')}{br(', ')}{str2('"JS"')}{br(',')}</Line>
              <Line num="11">&nbsp;&nbsp;&nbsp;&nbsp;{str2('"React"')}{br(', ')}{str2('"Java"')}{br(', ')}{str2('"MySQL"')}</Line>
              <Line num="12">&nbsp;&nbsp;{br('],')} </Line>
              <Line num="13">&nbsp;&nbsp;{prop('certs')}{br(':     ')}{num('4')}{br(',   ')}{cmt('// ITVedant')}</Line>
              <Line num="14">&nbsp;&nbsp;{prop('projects')}{br(':  ')}{num('3')}{br(',')}</Line>
              <Line num="15">&nbsp;&nbsp;{prop('status')}{br(':    ')}{str('"open_to_work ✓"')}</Line>
              <Line num="16">{br('};')}</Line>
              <Line num="17">&nbsp;</Line>
              <Line num="18">{kw('export default ')} {prop('developer')}{br(';')}</Line>
            </CodeBlock>
          </RevealCard>

          {/* Right: Text */}
          <RevealCard delay={200}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <p style={{ fontSize: '0.95rem', color: 'var(--white2)', lineHeight: 1.85, marginBottom: '1rem' }}>
                  Hi! I'm <strong style={{ color: 'var(--blue)' }}>Isha Singh</strong>, a passionate fresher frontend developer who loves building beautiful, functional web experiences.
                </p>
                <p style={{ fontSize: '0.93rem', color: 'var(--white3)', lineHeight: 1.85, marginBottom: '1rem' }}>
                  My journey started with structured learning at <strong style={{ color: 'var(--blue)' }}>ITVedant Institute</strong>, where I earned 4 certifications covering the full web development stack.
                </p>
                <p style={{ fontSize: '0.93rem', color: 'var(--white3)', lineHeight: 1.85 }}>
                  I'm actively looking for my <strong style={{ color: 'var(--green)' }}>first professional role</strong> — an internship or junior position where I can grow fast alongside experienced teams.
                </p>
              </div>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['Frontend Dev','React Learner','Java Basics','MySQL','Quick Learner','Team Player','Open to Work ✓'].map(tag => (
                  <span key={tag} style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.74rem', fontWeight: 500,
                    color: 'var(--blue)', background: 'rgba(88,166,255,0.08)',
                    border: '1px solid rgba(88,166,255,0.2)',
                    padding: '0.3rem 0.8rem', borderRadius: '100px',
                  }}>{tag}</span>
                ))}
              </div>

              {/* Stats */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '0.5rem' }}>
                {[
                  { icon: '💻', val: '6+', label: 'Technologies' },
                  { icon: '📜', val: '4',  label: 'ITVedant Certs' },
                  { icon: '🚀', val: '3',  label: 'Projects Built' },
                  { icon: '📍', val: 'IN', label: 'Remote Ready' },
                ].map(({ icon, val, label }) => (
                  <div key={label} style={{
                    background: 'var(--bg2)', border: '1px solid var(--border)',
                    borderRadius: '10px', padding: '1rem',
                    display: 'flex', alignItems: 'center', gap: '0.8rem',
                    transition: 'border-color 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.borderColor='rgba(88,166,255,0.3)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor='var(--border)'}
                  >
                    <span style={{ fontSize: '1.3rem' }}>{icon}</span>
                    <div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.2rem', fontWeight: 800, color: 'var(--blue)' }}>{val}</div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--white4)', marginTop: '0.1rem' }}>{label}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link to="/contact" style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 700,
                background: 'var(--blue2)', color: '#fff',
                padding: '0.75rem 1.6rem', borderRadius: '8px',
                border: '1px solid var(--blue)', width: 'fit-content',
                transition: 'all 0.25s', display: 'inline-block',
              }}
              onMouseEnter={e => { e.currentTarget.style.background='var(--blue)'; e.currentTarget.style.transform='translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background='var(--blue2)'; e.currentTarget.style.transform='none'; }}
              >
                contact_me() ✉
              </Link>
            </div>
          </RevealCard>
        </div>
      </div>

      <style>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr!important}}`}</style>
    </SectionWrapper>
  );
}
