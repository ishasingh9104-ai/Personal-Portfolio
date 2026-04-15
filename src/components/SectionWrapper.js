import React, { useEffect, useRef } from 'react';

export default function SectionWrapper({ children, style = {} }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    requestAnimationFrame(() => {
      el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
  }, []);

  return (
    <div ref={ref} style={{
      minHeight: '100vh',
      paddingTop: '60px',
      ...style
    }}>
      {children}
    </div>
  );
}

export function RevealCard({ children, delay = 0, style = {} }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          el.style.opacity = '1';
          el.style.transform = 'none';
        }, delay);
        obs.unobserve(el);
      }
    }, { threshold: 0.1 });
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return <div ref={ref} style={style}>{children}</div>;
}
