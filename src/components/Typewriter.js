import React, { useState, useEffect } from 'react';

export default function Typewriter({ words = [], speed = 90, deleteSpeed = 100, pause = 1000, style = {}, cursorColor = 'var(--blue)' }) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return;
    const current = words[wordIndex];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause);
        }
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length === 0) {
          setDeleting(false);
          setWordIndex((wordIndex + 1) % words.length);
        }
      }
    }, deleting ? deleteSpeed : speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, deleteSpeed, pause]);

  return (
    <span style={style}>
      {text}
      <span style={{
        display: 'inline-block', width: '2px', height: '1em',
        background: cursorColor, marginLeft: '2px',
        verticalAlign: 'text-bottom',
        animation: 'pulse 5s step-end infinite',
      }} />
    </span>
  );
}
