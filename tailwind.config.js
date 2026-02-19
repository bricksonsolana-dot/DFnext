/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: { '2xl': '1400px' },
    },
    extend: {
      colors: {
        'ag-bg': '#0A0A0A',
        'ag-card': '#111111',      // = old df-surface
        'ag-surface': '#1A1A1A',   // = old df-elevated
        'ag-border': '#2A2A2A',    // = old df-border
        'ag-accent': '#E8FF3D',    // = old df-accent
        'ag-text': '#FFFFFF',      // = old df-text
        'ag-body': '#888888',      // = old df-muted
        'ag-muted': '#444444',     // = old df-subtle
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: { DEFAULT: 'hsl(var(--primary))', foreground: 'hsl(var(--primary-foreground))' },
        secondary: { DEFAULT: 'hsl(var(--secondary))', foreground: 'hsl(var(--secondary-foreground))' },
        destructive: { DEFAULT: 'hsl(var(--destructive))', foreground: 'hsl(var(--destructive-foreground))' },
        muted: { DEFAULT: 'hsl(var(--muted))', foreground: 'hsl(var(--muted-foreground))' },
        accent: { DEFAULT: 'hsl(var(--accent))', foreground: 'hsl(var(--accent-foreground))' },
        popover: { DEFAULT: 'hsl(var(--popover))', foreground: 'hsl(var(--popover-foreground))' },
        card: { DEFAULT: 'hsl(var(--card))', foreground: 'hsl(var(--card-foreground))' },
      },
      fontFamily: {
        heading: ['var(--font-space-grotesk)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      // ✅ Changed: clamp-based responsive sizing to match old project
      fontSize: {
        'display': ['clamp(3rem, 10vw, 6rem)', { lineHeight: '0.9', letterSpacing: '-0.04em' }],
        'h1': ['clamp(2.5rem, 8vw, 4.5rem)', { lineHeight: '1.0', letterSpacing: '-0.03em' }],
        'h2': ['clamp(1.75rem, 5vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h3': ['clamp(1.25rem, 3vw, 2rem)', { lineHeight: '1.2' }],
        'body-lg': ['18px', { lineHeight: '1.7' }],
        'label-sm': ['12px', { letterSpacing: '0.12em' }],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        // ✅ Added: scroll indicator animation from old project
        'scroll-indicator': {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.3' },
          '50%': { transform: 'translateY(20px)', opacity: '1' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        // ✅ Changed: 20s to match old project (was 25s)
        marquee: 'marquee 20s linear infinite',
        'scroll-indicator': 'scroll-indicator 2s ease-in-out infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};