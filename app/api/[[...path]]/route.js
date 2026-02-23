import { NextResponse } from 'next/server';

const corsHeaders = {
  'Access-Control-Allow-Origin': process.env.CORS_ORIGINS || '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

function getPath(request) {
  const url = new URL(request.url);
  const pathname = url.pathname.replace(/^\/api\/?/, '');
  return pathname;
}

export async function GET(request) {
  const path = getPath(request);

  if (path === 'health' || path === '') {
    return NextResponse.json(
      { status: 'ok', timestamp: new Date().toISOString() },
      { headers: corsHeaders }
    );
  }

  return NextResponse.json({ error: 'Not found' }, { status: 404, headers: corsHeaders });
}

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}
