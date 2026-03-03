import React from "react";

// app/not-found.tsx
export default function NotFound() {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'system-ui, sans-serif',
      }}>
        <h1>404</h1>
        <p>This page does not exist.</p>
        <a href="/" style={{ marginTop: '1rem' }}>
          Go home
        </a>
      </div>
    );
  }