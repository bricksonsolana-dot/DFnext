const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  
  // ✅ FIXED: Moved from experimental to top level
  serverExternalPackages: ['mongodb'],
  
  // ✅ FIXED: Added turbopack config to allow webpack alongside it
  turbopack: {
    // Turbopack is used in dev by default in Next.js 16
    // This empty config allows webpack to coexist
  },
  
  webpack(config, { dev }) {
    if (dev) {
      // Reduce CPU/memory from file watching
      config.watchOptions = {
        poll: 2000, // check every 2 seconds
        aggregateTimeout: 300, // wait before rebuilding
        ignored: ['**/node_modules'],
      };
    }
    return config;
  },
  
  // Note: onDemandEntries is deprecated in Next.js 16
  // It's ignored but won't cause errors - safe to remove
  // onDemandEntries: {
  //   maxInactiveAge: 10000,
  //   pagesBufferLength: 2,
  // },
  
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "ALLOWALL" },
          { key: "Content-Security-Policy", value: "frame-ancestors *;" },
          { key: "Access-Control-Allow-Origin", value: process.env.CORS_ORIGINS || "*" },
          { key: "Access-Control-Allow-Methods", value: "GET, POST, PUT, DELETE, OPTIONS" },
          { key: "Access-Control-Allow-Headers", value: "*" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;