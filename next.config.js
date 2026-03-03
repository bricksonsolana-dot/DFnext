/** @type {import('next').NextConfig} */
const nextConfig = {

  // ── Security ──
  poweredByHeader: false,                // Hide "X-Powered-By: Next.js"
  reactStrictMode: true,                 // Catch unsafe patterns
  productionBrowserSourceMaps: false,    // Don't expose source code

  // ── Images ──


  // ── Turbopack ──
  turbopack: {},

  // ── Remove console.log in production ──
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
      ? { exclude: ['error', 'warn'] }
      : false,
  },

  // ── Security Headers ──
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Prevent clickjacking
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          // Prevent MIME-type sniffing
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // Force HTTPS (2 years + preload)
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          // Control referrer info
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          // Disable unused browser features
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
          },
          // ❌ CORS HEADERS REMOVED — you don't need them
        ],
      },
    ];
  },
};

module.exports = nextConfig;