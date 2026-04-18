import React, { useEffect, useRef } from 'react';

//  SectionWrapper component
//  Har section ko wrap karta hai + entry animation deta hai (page load pe)
export default function SectionWrapper({ children, style = {} }) {

  const ref = useRef(null); 
  //  DOM element ko directly access karne ke liye reference

  useEffect(() => {
    const el = ref.current; // current element mil gaya
    if (!el) return; // safety check

    //  Initial state (invisible + thoda neeche)
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';

    // Next frame me animation start karte hain
    requestAnimationFrame(() => {
      // transition define
      el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';

      // final state (visible + normal position)
      el.style.opacity = '1';
      el.style.transform = 'none';
    });

  }, []); //  sirf ek baar run hoga (component mount pe)

  return (
    <div
      ref={ref} // DOM reference attach
      style={{
        minHeight: '100%', // full screen height (each section full page lega)
        paddingTop: '60px', // navbar ke neeche space (overlap avoid)
        ...style // custom styles allow
      }}
    >
      {children} {/* jo bhi content aayega wo yaha render hoga */}
    </div>
  );
}


//  RevealCard component
//  Scroll karte waqt animation trigger hota hai (jab element viewport me aata hai)
export function RevealCard({ children, delay = 0, style = {} }) {

  const ref = useRef(null); // DOM reference

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // IntersectionObserver (check karta hai element screen me aaya ya nahi)
    const obs = new IntersectionObserver(([entry]) => {

      if (entry.isIntersecting) {
        // 👉 jab element visible ho jaye
        setTimeout(() => {

          // final visible state
          el.style.opacity = '1';
          el.style.transform = 'none';

        }, delay); // delay for stagger animation

        obs.unobserve(el); // ek baar show hone ke baad observer remove
      }

    }, { threshold: 0.1 }); // 10% visible hone par trigger

    //  Initial hidden state
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';

    // animation smooth banane ke liye transition
    el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';

    obs.observe(el); // observer start

    return () => obs.disconnect(); // cleanup (important)

  }, [delay]); // delay change hoga to re-run

  return (
    <div ref={ref} style={style}>
      {children} {/* card content */}
    </div>
  );
}