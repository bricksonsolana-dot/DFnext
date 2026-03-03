// app/error.tsx
'use client';

export default function Error({ reset }) {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'system-ui, sans-serif',
    }}>
      <h1>Something went wrong</h1>
      <p>An unexpected error occurred. Please try again.</p>
      <button
        onClick={() => reset()}
        style={{
          marginTop: '1rem',
          padding: '0.5rem 1rem',
          cursor: 'pointer',
        }}
      >
        Try again
      </button>
      {/* 
        NEVER show error.message or error.stack here.
        That leaks internal info to attackers.
      */}
    </div>
  );
}