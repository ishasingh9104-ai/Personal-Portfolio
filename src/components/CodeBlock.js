import React from 'react';

export function CodeBlock({ children, filename = 'isha.ts', style = {} }) {
  return (
    <div style={{
      background: '#1e1e2e',
      borderRadius: '12px',
      overflow: 'hidden',
      border: '1px solid rgba(88,166,255,0.15)',
      boxShadow: '0 24px 48px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.03)',
      fontFamily: 'var(--font-mono)',
      fontSize: '0.82rem',
      ...style,       
    }}>
      {/* Title bar */}
      <div style={{
        background: '#181825',
        padding: '0.65rem 1rem',
        display: 'flex', alignItems: 'center', gap: '0.5rem',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}>
        <div style={{ display: 'flex', gap: '6px' }}>
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#febc2e' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#28c840' }} />
        </div>
        <span style={{ marginLeft: '0.5rem', fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.06em' }}>
          {filename}
        </span>
      </div>
      {/* Code body */}
      <div style={{ padding: '1.4rem 1.8rem', lineHeight: 1.9 }}>
        {children}
      </div>
    </div>
  );
}

export function Line({ num, children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline' }}>
      <span style={{
        color: 'rgba(255,255,255,0.15)', display: 'inline-block',
        width: '24px', textAlign: 'right', marginRight: '1.4rem',
        userSelect: 'none', fontSize: '0.7rem', flexShrink: 0,
      }}>{num}</span>
      <span>{children}</span>
    </div>
  );
  // http://localhost:3000 
}

export const kw  = (t) => <span style={{ color: '#ff79c6' }}>{t}</span>;
export const fn  = (t) => <span style={{ color: '#50fa7b' }}>{t}</span>;
export const str = (t) => <span style={{ color: '#f1fa8c' }}>{t}</span>;
export const str2= (t) => <span style={{ color: '#ff9580' }}>{t}</span>;
export const prop= (t) => <span style={{ color: '#8be9fd' }}>{t}</span>;
export const num = (t) => <span style={{ color: '#bd93f9' }}>{t}</span>;
export const cmt = (t) => <span style={{ color: '#6272a4' }}>{t}</span>;
export const br  = (t) => <span style={{ color: '#f8f8f2' }}>{t}</span>;
export const op  = (t) => <span style={{ color: '#ff79c6' }}>{t}</span>;
