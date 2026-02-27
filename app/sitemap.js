// app/sitemap.js — Generates /sitemap.xml at runtime

const BASE_URL = 'https://digitalfootprint.gr';

export default function sitemap() {
  const now = new Date().toISOString();

  const mainRoutes = [
    { url: BASE_URL, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/about`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/services`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/work`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/contact`, changeFrequency: 'yearly', priority: 0.7 },
  ];

  return mainRoutes.map((route) => ({
    ...route,
    lastModified: now,
  }));
}
