import React from 'react'; // Import React library to use JSX and components

// CodeBlock component - creates a styled code container (like VS Code UI)
export function CodeBlock({ children, filename = 'isha.ts', style = {} }) {
  return (
    <div style={{
      background: '#1e1e2e', // Dark background color
      borderRadius: '12px', // Rounded corners
      overflow: 'auto', // Prevent content overflow
      border: '1px solid rgba(88,166,255,0.15)', // Light border
      boxShadow: '0 24px 48px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.03)', // Shadow for depth
      fontFamily: 'var(--font-mono)', // Monospace font for code look
      fontSize: '0.82rem', // Small font size
      ...style, // Allow custom styles to override default styles
    }}>
      
      {/* Title bar (top header like VS Code) */}
      <div style={{
        background: '#181825', // Slightly darker header
        padding: '0.65rem 1rem', // Spacing inside header
        display: 'flex', alignItems: 'center', gap: '0.5rem', // Align items horizontally
        borderBottom: '1px solid rgba(255,255,255,0.05)', // Bottom border
      }}>
        
        {/* Mac-style red, yellow, green buttons */}
        <div style={{ display: 'flex', gap: '6px' }}>
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#febc2e' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#28c840' }} />
        </div>

        {/* Filename displayed in header */}
        <span style={{ 
          marginLeft: '0.5rem', 
          fontSize: '0.72rem', 
          color: 'rgba(255,255,255,0.3)', // Faded text
          letterSpacing: '0.06em' 
        }}>
          {filename} {/* Shows file name */}
        </span>
      </div>

      {/* Code body (main content area) */}
      <div style={{ 
        padding: '1.4rem 1.8rem', // Inner spacing
        lineHeight: 1.9 // Line spacing for readability
      }}>
        {children} {/* Displays code lines passed as children */}
      </div>
    </div>
  );
}

// Line component - used to display each line with line number
export function Line({ num, children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline' }}>
      
      {/* Line number */}
      <span style={{
        color: 'rgba(255,255,255,0.15)', // Faded color
        display: 'inline-block',
        width: '24px', // Fixed width for alignment
        textAlign: 'right', // Align number to right
        marginRight: '1.4rem', // Space between number and code
        userSelect: 'none', // Prevent selecting line numbers
        fontSize: '0.7rem',
        flexShrink: 0, // Prevent shrinking
      }}>
        {num} {/* Displays line number */}
      </span>

      {/* Code content */}
      <span>{children}</span>
    </div>
  );

}

// Syntax highlighting helpers (each returns styled text)

// Keyword (like const, function, return)
export const kw  = (t) => <span style={{ color: '#ff79c6' }}>{t}</span>;

// Function names
export const fn  = (t) => <span style={{ color: '#50fa7b' }}>{t}</span>;

// Strings (normal)
export const str = (t) => <span style={{ color: '#f1fa8c' }}>{t}</span>;

// Alternative string style
export const str2= (t) => <span style={{ color: '#ff9580' }}>{t}</span>;

// Properties (object keys, etc.)
export const prop= (t) => <span style={{ color: '#8be9fd' }}>{t}</span>;

// Numbers
export const num = (t) => <span style={{ color: '#bd93f9' }}>{t}</span>;

// Comments
export const cmt = (t) => <span style={{ color: '#6272a4' }}>{t}</span>;

// Brackets, symbols
export const br  = (t) => <span style={{ color: '#f8f8f2' }}>{t}</span>;

// Operators (+, -, =, etc.)
export const op  = (t) => <span style={{ color: '#ff79c6' }}>{t}</span>;












  // This comment is just a test URL (not used in code)
  // http://localhost:3000 