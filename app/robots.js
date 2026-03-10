// app/robots.js — Generates /robots.txt at runtime
// This tells search engines what to crawl and what to ignore

// ===========================================
// BASE URL
// ===========================================
const BASE_URL = 'https://www.digitalfootprint.gr';

// ===========================================
// ROBOTS.TXT CONFIGURATION
// ===========================================
export default function robots() {
  return {
    // ===========================================
    // RULES FOR ALL SEARCH ENGINES
    // ===========================================
    rules: [
      {
        // Rule 1: Allow all crawlers to access main site
        userAgent: '*',
        allow: [
          '/',
          '/services',
          '/work',
          '/about',
          '/contact',
          '/estimator',
        ],
        disallow: [
          // Block API routes
          '/api/',
          '/api/*',
          
          // Block demo/portfolio preview sites (they shouldn't rank separately)
          '/(demos)/',
          '/(demos)/*',
          '/Architects',
          '/Clothing',
          '/EatPlay',
          '/escape-room',
          '/kaiser-omnia',
          '/NyConstruction',
          '/propertyhall',
          '/ShahinYavari',
          '/UltraChamp',
          
          // Block admin/internal pages
          '/admin/',
          '/admin/*',
          '/_next/',
          '/_next/*',
          
          // Block search results (if you have search)
          '/search',
          '/search/*',
          
          // Block temporary/draft pages
          '/draft/',
          '/draft/*',
          '/preview/',
          '/preview/*',
          
          // Block query parameters that create duplicate content
          '/*?*',
        ],
      },
      
      {
        // Rule 2: Specific rules for Googlebot
        userAgent: 'Googlebot',
        allow: [
          '/',
          '/services',
          '/work',
          '/about',
          '/contact',
          '/estimator',
          '/*.js',   // Allow JS for rendering
          '/*.css',  // Allow CSS for rendering
        ],
        disallow: [
          '/api/',
          '/(demos)/',
        ],
      },
      
      {
        // Rule 3: Block bad bots (optional but recommended)
        userAgent: [
          'AhrefsBot',      // Competitor analysis bot (uses your bandwidth)
          'SemrushBot',     // Competitor analysis bot
          'MJ12bot',        // Majestic SEO bot
          'DotBot',         // Moz bot
          'BLEXBot',        // Webmaster Link Explorer
        ],
        disallow: ['/'],    // Block these bots entirely
      },
      
      {
        // Rule 4: Allow Bing
        userAgent: 'Bingbot',
        allow: ['/'],
        disallow: [
          '/api/',
          '/(demos)/',
        ],
      },
    ],
    
    // ===========================================
    // SITEMAP LOCATION
    // ===========================================
    sitemap: `${BASE_URL}/sitemap.xml`,
    
    // ===========================================
    // HOST (Optional - helps some search engines)
    // ===========================================
    host: BASE_URL,
  };
}