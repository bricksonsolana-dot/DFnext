// app/sitemap.js — Generates /sitemap.xml at runtime
// This tells search engines about ALL your pages

// ===========================================
// BASE URL
// ===========================================
const BASE_URL = 'https://www.digitalfootprint.gr';

// ===========================================
// SITEMAP CONFIGURATION
// ===========================================
export default function sitemap() {
  // ===========================================
  // CURRENT DATE (for lastModified)
  // ===========================================
  const currentDate = new Date().toISOString();
  
  // ===========================================
  // MAIN PAGES (Static)
  // ===========================================
  const mainPages = [
    {
      url: BASE_URL,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/work`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/estimator`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
  
  // ===========================================
  // SERVICE PAGES (If you have individual service pages)
  // Uncomment and customize if needed
  // ===========================================
  /*
  const servicePages = [
    {
      url: `${BASE_URL}/services/website-development`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services/ecommerce`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services/ui-ux-design`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/services/seo`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
  */
  
  // ===========================================
  // PORTFOLIO/WORK PAGES (If you have individual project pages)
  // Uncomment and customize if needed
  // ===========================================
  /*
  const portfolioPages = [
    {
      url: `${BASE_URL}/work/project-1`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/work/project-2`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ];
  */
  
  // ===========================================
  // BLOG PAGES (When you add a blog)
  // ===========================================
  /*
  const blogPages = [
    {
      url: `${BASE_URL}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog/poso-kostizei-istoselida`,
      lastModified: '2025-01-15',
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/kataskevi-eshop-odigos`,
      lastModified: '2025-01-20',
      changeFrequency: 'yearly',
      priority: 0.7,
    },
  ];
  */
  
  // ===========================================
  // LOCATION PAGES (For local SEO - POWERFUL!)
  // Add these when you create location-specific pages
  // ===========================================
  /*
  const locationPages = [
    {
      url: `${BASE_URL}/kataskevi-istoselidas-athina`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/kataskevi-istoselidas-thessaloniki`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/kataskevi-istoselidas-patra`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/kataskevi-istoselidas-irakleio`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/kataskevi-istoselidas-larisa`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
  */
  
  // ===========================================
  // LEGAL PAGES (If you have them)
  // ===========================================
  const legalPages = [
    {
      url: `${BASE_URL}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
  
  // ===========================================
  // COMBINE ALL PAGES
  // ===========================================
  return [
    ...mainPages,
    // ...servicePages,     // Uncomment when you add these
    // ...portfolioPages,   // Uncomment when you add these
    // ...blogPages,        // Uncomment when you add these
    // ...locationPages,    // Uncomment when you add these
    ...legalPages,
  ];
}