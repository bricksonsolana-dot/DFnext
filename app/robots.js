// app/robots.js — Generates /robots.txt at runtime

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: 'https://digitalfootprint.gr/sitemap.xml',
  };
}
