import { NextResponse } from 'next/server';
import clientPromise, { DB_NAME } from '@/lib/mongodb';
import { v4 as uuidv4 } from 'uuid';

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

  try {
    if (path === 'health' || path === '') {
      return NextResponse.json(
        { status: 'ok', timestamp: new Date().toISOString() },
        { headers: corsHeaders }
      );
    }

    if (path === 'contacts') {
      const client = await clientPromise;
      const db = client.db(DB_NAME);
      const contacts = await db
        .collection('contacts')
        .find({})
        .sort({ createdAt: -1 })
        .toArray();
      const sanitized = contacts.map(({ _id, ...rest }) => rest);
      return NextResponse.json({ contacts: sanitized }, { headers: corsHeaders });
    }

    return NextResponse.json({ error: 'Not found' }, { status: 404, headers: corsHeaders });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500, headers: corsHeaders });
  }
}

export async function POST(request) {
  const path = getPath(request);

  try {
    if (path === 'contact') {
      const body = await request.json();
      const { name, email, phone, message, budget } = body;

      if (!name || !email || !message) {
        return NextResponse.json(
          { error: 'Name, email, and message are required' },
          { status: 400, headers: corsHeaders }
        );
      }

      const client = await clientPromise;
      const db = client.db(DB_NAME);

      const contact = {
        id: uuidv4(),
        name,
        email,
        phone: phone || '',
        message,
        budget: budget || '',
        createdAt: new Date(),
        read: false,
      };

      await db.collection('contacts').insertOne(contact);

      return NextResponse.json(
        { success: true, id: contact.id, message: 'Message received successfully.' },
        { status: 201, headers: corsHeaders }
      );
    }

    return NextResponse.json({ error: 'Not found' }, { status: 404, headers: corsHeaders });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500, headers: corsHeaders });
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}
