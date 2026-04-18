import React from 'react';
import SectionWrapper, { RevealCard } from '../components/SectionWrapper';
import { CodeBlock, Line, kw, prop, str, str2, num, cmt, br } from '../components/CodeBlock';

const education = [
  {
     period: '2026', degree: 'Full Stack Web Development',
    school: 'ITVedant Institute', board: 'Certified Program',
    desc: 'HTML, CSS, JavaScript, React, Java, MySQL. Project-based — earned 4 certifications.',
    icon: '💻',
  },
  {
   
    period: '2022 – 2025', degree: 'Bachelor in Science (Chemistry)',
     board: 'Patliputra University',
    desc: 'Pursued Bachelor of Science in Chemistry.',
    icon: '🎓',
  },
  {
    period: '2021', degree: 'Higher Secondary Education (12th)',
    school: 'S.D.C.C.L public school', board: 'CBSC',
    desc: 'Completed 12th standard and developed early interest in computers and technology.',
    icon: '📚',
  },
  {
    period: '2019', degree: ' Secondary Education (10th)',
    school: 'S.D.C.C.L public school', board: 'CBSC',
    desc: 'Completed 10th standard and developed early interest in computers and technology.',
    icon: '📚',
  },
];

export default function Resume() {
  return (
    <SectionWrapper>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 2rem' }}>

        <RevealCard>
          <div style={{ fontFamily: 'var(--font-mono)', marginBottom: '3rem' }}>
            <div style={{ fontSize: '0.72rem', color: 'var(--white4)', marginBottom: '0.3rem' }}>// resume.tsx</div>
            <h1 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 900, letterSpacing: '-0.04em', color: 'var(--white)' }}>
              My <span style={{ color: 'var(--blue)' }}>Resume</span>
            </h1>
            <div style={{ width: '40px', height: '3px', background: 'linear-gradient(90deg,var(--blue),var(--purple))', borderRadius: '2px', marginTop: '0.8rem' }} />
          </div>
        </RevealCard>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>

          {/* LEFT — Download card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <RevealCard delay={100}>
              {/* Download card */}
              <div style={{
                background: 'var(--bg2)',
                border: '1px solid var(--border)',
                borderRadius: '16px', padding: '2.5rem',
                textAlign: 'center', position: 'relative', overflow: 'hidden',
              }}>
                {/* Top shimmer bar */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                  background: 'linear-gradient(90deg,var(--blue),var(--purple),var(--blue))',
                  backgroundSize: '200% auto',
                  animation: 'shimmer 3s linear infinite',
                }} />

                <div style={{
                  width: 72, height: 72, borderRadius: '16px', margin: '0 auto 1.5rem',
                  background: 'rgba(88,166,255,0.1)', border: '1px solid rgba(88,166,255,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '2rem',
                  animation: 'floatY 3.5s ease-in-out infinite',
                }}>📄</div>

                <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', fontWeight: 800, color: 'var(--white)', marginBottom: '0.5rem' }}>
                  Isha Singh — Resume
                </h3>
                <p style={{ fontSize: '0.83rem', color: 'var(--white3)', lineHeight: 1.7, marginBottom: '2rem' }}>
                  Download my latest resume. Updated for fresher applications — skills, education, projects and certificates all included.
                </p>

                {/* DOWNLOAD BUTTON */}
                {/*
                 
                  1. Place "Isha_Singh_Resume.pdf" in the /public folder.
                  2. The link below will trigger the download.
                */}
                <a href="/Isha_Singh_Resume.pdf" download="Isha_Singh_Resume.pdf"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                    background: 'var(--blue2)', color: '#fff',
                    fontFamily: 'var(--font-mono)', fontSize: '0.9rem', fontWeight: 800,
                    padding: '0.9rem 2rem', borderRadius: '10px',
                    border: '1px solid var(--blue)', transition: 'all 0.25s',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background='var(--blue)'; e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 8px 24px rgba(88,166,255,0.35)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background='var(--blue2)'; e.currentTarget.style.transform='none'; e.currentTarget.style.boxShadow='none'; }}
                >
                  <span style={{ animation: 'dlBounce 1.8s ease-in-out infinite', display: 'inline-block' }}>⬇</span>
                  Download Resume (PDF)
                </a>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--white4)', marginTop: '0.8rem' }}>
                  PDF · Fresher 2026
                </p>
              </div>
            </RevealCard>

            {/* What's inside */}
            <RevealCard delay={200}>
              <div style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.4rem' }}>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--white4)', marginBottom: '0.9rem' }}>// what's inside</p>
                {[
                  'Professional summary & career objective',
                  'Tech skills — HTML, CSS, JS, React, Java, MySQL',
                  '4 ITVedant certificates with details',
                  '3 projects — Portfolio, Weather App, Quotes',
                  'Education — Bachelor in Science (Chemistry) + ITVedant program',
                  'Contact details, GitHub & LinkedIn',
                ].map(item => (
                  <div key={item} style={{ display: 'flex', gap: '0.7rem', alignItems: 'flex-start', marginBottom: '0.6rem' }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--blue)', marginTop: '0.42rem', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.83rem', color: 'var(--white3)', lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </RevealCard>
          </div>

          {/* RIGHT — Education timeline + code block */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <RevealCard delay={150}>
              <CodeBlock filename="education.ts">
                <Line num="1">{cmt('// 🎓 education timeline')}</Line>
                <Line num="2">&nbsp;</Line>
                <Line num="3">{kw('const ')} {prop('education')} {br('= [')} </Line>
                 <Line num="4">&nbsp;&nbsp;{br('{')} {prop('degree')}{br(': ')}{str('"Web Development"')}{br(',')}</Line>
                <Line num="5">&nbsp;&nbsp;&nbsp;&nbsp;{prop('org')}{br(': ')}{str('"ITVedant"')}{br('}')} </Line>
                <Line num="6">&nbsp;&nbsp;{br('{')} {prop('degree')}{br(': ')}{str('"Bsc in Chemistry"')}{br(',')} </Line>
                <Line num="7">&nbsp;&nbsp;&nbsp;&nbsp;{prop('year')}{br(': ')}{str('"2022-25"')}{br('}')} </Line>                
                <Line num="8">&nbsp;&nbsp;{br('{')} {prop('degree')}{br(': ')}{str('"12th"')}{br(',')} </Line>
                <Line num="9">&nbsp;&nbsp;&nbsp;&nbsp;{prop('year')}{br(': ')}{str('"2021"')}{br('}')} </Line>
                <Line num="10">&nbsp;&nbsp;{br('{')} {prop('degree')}{br(': ')}{str('"10th"')}{br(',')}</Line>
                <Line num="11">&nbsp;&nbsp;&nbsp;&nbsp;{prop('year')}{br(': ')}{str('"2019"')}{br('}')} </Line>

                <Line num="12">{br('];')}</Line>
              </CodeBlock>
            </RevealCard>

            {/* Education timeline */}
            <RevealCard delay={250}>
              <div style={{ position: 'relative', paddingLeft: '2rem' }}>
                {/* timeline line */}
                <div style={{
                  position: 'absolute', left: '5px', top: 8, bottom: 8,
                  width: '2px',
                  background: 'linear-gradient(to bottom, var(--blue), var(--purple), rgba(88,166,255,0.1))',
                }} />
                {education.map((edu, i) => (
                  <EduItem key={i} edu={edu} />
                ))}
              </div>
            </RevealCard>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer { 0%{background-position:0%} 100%{background-position:200%} }
        @keyframes floatY { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
        @keyframes dlBounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(3px)} }
        @media(max-width:768px){ .resume-grid{grid-template-columns:1fr!important} }
      `}</style>
    </SectionWrapper>
  );
}

function EduItem({ edu }) {
  const [hov, setHov] = React.useState(false);
  return (
    <div style={{ position: 'relative', paddingBottom: '1.8rem', paddingLeft: '1.5rem' }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      {/* dot */}
      <div style={{
        position: 'absolute', left: '-1.65rem', top: 4,
        width: 14, height: 14, borderRadius: '50%',
        background: hov ? 'var(--blue)' : 'var(--bg)',
        border: '2.5px solid var(--blue)',
        transition: 'all 0.3s',
        transform: hov ? 'scale(1.3)' : 'none',
      }} />
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', fontWeight: 700, color: 'var(--blue)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
        {edu.period}
      </div>
      <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.2rem' }}>{edu.degree}</div>
      <div style={{ fontSize: '0.83rem', color: 'var(--white3)', marginBottom: '0.4rem' }}>{edu.school} · {edu.board}</div>
      <div style={{ fontSize: '0.8rem', color: 'var(--white4)', lineHeight: 1.65 }}>{edu.desc}</div>
    </div>
  );
}

