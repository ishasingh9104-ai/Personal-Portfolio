import React, { useState } from 'react';
import SectionWrapper, { RevealCard } from '../components/SectionWrapper';
import { CodeBlock, Line, kw, prop, str, cmt, br } from '../components/CodeBlock';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <SectionWrapper>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 2rem' }}>

        <RevealCard>
          <div style={{ fontFamily: 'var(--font-mono)', marginBottom: '3rem' }}>
            <div style={{ fontSize: '0.72rem', color: 'var(--white4)', marginBottom: '0.3rem' }}>// contact.tsx</div>
            <h1 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 900, letterSpacing: '-0.04em', color: 'var(--white)' }}>
              Get In <span style={{ color: 'var(--blue)' }}>Touch</span>
            </h1>
            <div style={{ width: '40px', height: '3px', background: 'linear-gradient(90deg,var(--blue),var(--purple))', borderRadius: '2px', marginTop: '0.8rem' }} />
          </div>
        </RevealCard>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>

          {/* Left: Code block */}
          <RevealCard delay={100}>
            <CodeBlock filename="contact-isha.ts">
              <Line num="1">{cmt('// ✉ reach out anytime!')}</Line>
              <Line num="2">&nbsp;</Line>
              <Line num="3">{kw('const ')} {prop('contact')} {br('= {')} </Line>
              <Line num="4">&nbsp;&nbsp;{prop('email')}{br(':    ')}{str('"ishasingh9104@gmail.com"')}{br(',')}</Line>
              <Line num="5">&nbsp;&nbsp;{prop('linkedin')}{br(': ')}{str('"www.linkedin.com/in/isha-singh-792810400"')}{br(',')}</Line>
              <Line num="6">&nbsp;&nbsp;{prop('github')}{br(':   ')}{str('"https://github.com/ishasingh9104-ai"')}{br(',')}</Line>
              <Line num="7">&nbsp;&nbsp;{prop('status')}{br(':   ')}{str('"open_to_work ✓"')}{br(',')}</Line>
              <Line num="8">&nbsp;&nbsp;{prop('response')}{br(': ')}{str('"within 24 hrs"')}</Line>
              <Line num="9">{br('};')}</Line>
              <Line num="10">&nbsp;</Line>
              <Line num="11">{kw('function ')} {prop('hire')}{br('(isha) {')} </Line>
              <Line num="12">&nbsp;&nbsp;{kw('return ')} {prop('isha')}{br('.')}{prop('buildAwesome')} {br('(')} </Line>
              <Line num="13">&nbsp;&nbsp;&nbsp;&nbsp;{str('"your project"')}</Line>
              <Line num="14">&nbsp;&nbsp;{br(');')}</Line>
              <Line num="15">{br('}')} </Line>
            </CodeBlock>
          </RevealCard>

          {/* Right: Links */}
          <RevealCard delay={200}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p style={{ fontSize: '0.93rem', color: 'var(--white3)', lineHeight: 1.8, marginBottom: '0.5rem' }}>
                I'm actively looking for my first developer opportunity — internships, junior roles, or freelance projects. I'd love to hear from you!
              </p>

              {/* Contact cards */}
              {[
                {
                  icon: '📧', label: 'Email', value: 'ishasingh9104@gmail.com',
                  href: 'mailto:ishasingh9104@gmail.com', color: '#58a6ff',
                  action: () => copy('ishasingh9104@gmail.com'), actionLabel: copied ? 'Copied!' : 'Copy',
                },
                {
                  icon: '🔗', label: 'LinkedIn', value: 'www.linkedin.com/in/isha-singh-792810400',
                  href: 'https://linkedin.com/in/isha-singh-792810400', color: '#0a66c2',
                  action: null, actionLabel: 'Open',
                },
                {
                  icon: '🐙', label: 'GitHub', value: 'https://github.com/ishasingh9104-ai',
                  href: 'https://github.com/ishasingh9104-ai', color: '#e6edf3',
                  action: null, actionLabel: 'Open',
                },
              ].map(item => (
                <ContactCard key={item.label} {...item} />
              ))}

              {/* Big CTA */}
              <a href="mailto:ishasingh9104@gmail.com" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem',
                fontFamily: 'var(--font-mono)', fontSize: '0.9rem', fontWeight: 800,
                background: 'var(--blue2)', color: '#fff',
                padding: '1rem', borderRadius: '10px',
                border: '1px solid var(--blue)', marginTop: '0.5rem',
                transition: 'all 0.25s', textDecoration: 'none',
              }}
              onMouseEnter={e => { e.currentTarget.style.background='var(--blue)'; e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 8px 24px rgba(88,166,255,0.35)'; }}
              onMouseLeave={e => { e.currentTarget.style.background='var(--blue2)'; e.currentTarget.style.transform='none'; e.currentTarget.style.boxShadow='none'; }}
              >
                ✉ Send Me an Email
              </a>

              <div style={{
                marginTop: '0.5rem', padding: '1rem',
                background: 'rgba(63,185,80,0.06)', border: '1px solid rgba(63,185,80,0.2)',
                borderRadius: '10px', fontFamily: 'var(--font-mono)', fontSize: '0.78rem',
                color: 'var(--green)', textAlign: 'center',
              }}>
                ● Currently open to internships &amp; junior roles
              </div>
            </div>
          </RevealCard>
        </div>
      </div>
    </SectionWrapper>
  );
}

function ContactCard({ icon, label, value, href, color, action, actionLabel }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? 'var(--bg3)' : 'var(--bg2)',
        border: `1px solid ${hov ? color + '55' : 'var(--border)'}`,
        borderRadius: '10px', padding: '1rem 1.2rem',
        display: 'flex', alignItems: 'center', gap: '1rem',
        transition: 'all 0.25s',
        transform: hov ? 'translateX(4px)' : 'none',
      }}>
      <span style={{ fontSize: '1.3rem', flexShrink: 0 }}>{icon}</span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--white4)', marginBottom: '0.15rem' }}>{label}</div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: color, fontWeight: 600,
          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{value}</div>
      </div>
      <a href={href} target="_blank" rel="noreferrer"
        onClick={action || undefined}
        style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 700,
          color: hov ? color : 'var(--white3)',
          background: 'var(--bg)', border: '1px solid var(--border)',
          padding: '0.3rem 0.75rem', borderRadius: '6px',
          textDecoration: 'none', transition: 'all 0.2s', flexShrink: 0,
        }}>
        {actionLabel} ↗
      </a>
    </div>
  );
}
