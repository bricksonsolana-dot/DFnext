import { NextResponse } from 'next/server';

// --- IP Rate Limiter ---
// 100 requests per 60-second window per IP.
// Uses an in-memory Map — works for single-instance deployments.
// For multi-region / serverless (Vercel Edge), swap this out for
// @upstash/ratelimit + Redis so the store is shared across nodes.
const RATE_LIMIT = 100;       // max requests per window
const WINDOW_MS = 60 * 1000;  // 1-minute sliding window

const ipTimestamps = new Map(); // ip -> number[]

// Run a periodic cleanup every 5 minutes to prevent unbounded memory growth.
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const cutoff = Date.now() - WINDOW_MS;
    for (const [ip, timestamps] of ipTimestamps) {
      const fresh = timestamps.filter((t) => t > cutoff);
      if (fresh.length === 0) {
        ipTimestamps.delete(ip);
      } else {
        ipTimestamps.set(ip, fresh);
      }
    }
  }, 5 * 60 * 1000);
}

function getClientIP(request) {
  // Respect proxy / CDN headers first.
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  return request.ip ?? '127.0.0.1';
}

function checkRateLimit(ip) {
  const now = Date.now();
  const windowStart = now - WINDOW_MS;

  const timestamps = (ipTimestamps.get(ip) ?? []).filter((t) => t > windowStart);
  timestamps.push(now);
  ipTimestamps.set(ip, timestamps);

  const remaining = Math.max(0, RATE_LIMIT - timestamps.length);
  const limited = timestamps.length > RATE_LIMIT;
  return { limited, remaining, total: timestamps.length };
}
// --- End Rate Limiter ---

export function middleware(request) {
  const ip = getClientIP(request);
  const { limited, remaining } = checkRateLimit(ip);

  if (limited) {
    return new NextResponse(
      JSON.stringify({ error: 'Too Many Requests', retryAfter: 60 }),
      {
        status: 429,
        headers: {
          'Content-Type': 'application/json',
          'Retry-After': '60',
          'X-RateLimit-Limit': String(RATE_LIMIT),
          'X-RateLimit-Remaining': '0',
        },
      }
    );
  }

  // --- CSP & Security Headers ---
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');

  const cspHeader = [
    `default-src 'self'`,
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'`,
    `style-src 'self' 'unsafe-inline'`,
    `img-src 'self' blob: data: https:`,
    `font-src 'self'`,
    `connect-src 'self' https://api.web3forms.com`,
    `object-src 'none'`,
    `base-uri 'self'`,
    `form-action 'self' https://api.web3forms.com`,
    `frame-ancestors 'none'`,
    `upgrade-insecure-requests`,
  ].join('; ');

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);
  requestHeaders.set('Content-Security-Policy', cspHeader);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });

  response.headers.set('Content-Security-Policy', cspHeader);
  response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  response.headers.set('Referrer-Policy', 'no-referrer');
  response.headers.set('X-RateLimit-Limit', String(RATE_LIMIT));
  response.headers.set('X-RateLimit-Remaining', String(remaining));

  return response;
}

export const config = {
  matcher: [
    // Apply to all routes (pages + API) except static assets.
    {
      source: '/((?!_next/static|_next/image|favicon.ico).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
};
