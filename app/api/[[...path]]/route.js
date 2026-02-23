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

function buildContactEmail({ name, email, phone, message, budget }) {
  return [
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━',
    'NEW CONTACT FORM SUBMISSION',
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━',
    '',
    `Name:    ${name}`,
    `Email:   ${email}`,
    `Phone:   ${phone || '—'}`,
    `Budget:  ${budget || '—'}`,
    '',
    'Message:',
    message,
  ].join('\n');
}

function buildEstimatorEmail({ name, email, phone, company, notes, websiteTypeName, selectedFeatures, supportPlanName, estimatedCost, monthlyCost }) {
  const featuresText =
    selectedFeatures && selectedFeatures.length > 0
      ? selectedFeatures.map((f) => `  - ${f}`).join('\n')
      : '  (none selected beyond included features)';

  return [
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━',
    'NEW ESTIMATOR REQUEST',
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━',
    '',
    'CUSTOMER INFO',
    `Name:     ${name}`,
    `Email:    ${email}`,
    `Phone:    ${phone || '—'}`,
    `Company:  ${company || '—'}`,
    '',
    'PROJECT DETAILS',
    `Website Type:    ${websiteTypeName || '—'}`,
    `Support Plan:    ${supportPlanName || '—'}`,
    `Estimated Cost:  €${(estimatedCost || 0).toLocaleString('el-GR')}`,
    monthlyCost > 0 ? `Monthly Care:    €${monthlyCost}/month` : null,
    '',
    'EXTRA FEATURES SELECTED',
    featuresText,
    '',
    'NOTES',
    notes || '—',
  ]
    .filter((line) => line !== null)
    .join('\n');
}

async function sendWeb3formsEmail({ subject, replyToName, replyToEmail, message }) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey || accessKey === 'your_web3forms_access_key_here') return;

  await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      access_key: accessKey,
      subject,
      from_name: replyToName,
      email: replyToEmail,
      message,
    }),
  });
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
      const {
        name,
        email,
        phone,
        message,
        budget,
        // Estimator fields
        formType,
        websiteType,
        websiteTypeName,
        selectedFeatures,
        supportPlan,
        supportPlanName,
        estimatedCost,
        monthlyCost,
        company,
        notes,
      } = body;

      if (!name || !email) {
        return NextResponse.json(
          { error: 'Name and email are required' },
          { status: 400, headers: corsHeaders }
        );
      }

      if (formType !== 'estimator' && !message) {
        return NextResponse.json(
          { error: 'Message is required' },
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
        message: message || notes || '',
        budget: budget || '',
        formType: formType || 'contact',
        websiteType: websiteType || '',
        websiteTypeName: websiteTypeName || '',
        selectedFeatures: selectedFeatures || [],
        supportPlan: supportPlan || '',
        supportPlanName: supportPlanName || '',
        estimatedCost: estimatedCost || 0,
        monthlyCost: monthlyCost || 0,
        company: company || '',
        notes: notes || '',
        createdAt: new Date(),
        read: false,
      };

      await db.collection('contacts').insertOne(contact);

      // Send email via web3forms
      try {
        if (formType === 'estimator') {
          await sendWeb3formsEmail({
            subject: `[Estimator] Νέο αίτημα από ${name} — €${(estimatedCost || 0).toLocaleString('el-GR')}`,
            replyToName: name,
            replyToEmail: email,
            message: buildEstimatorEmail({
              name,
              email,
              phone,
              company,
              notes,
              websiteTypeName,
              selectedFeatures,
              supportPlanName,
              estimatedCost,
              monthlyCost,
            }),
          });
        } else {
          await sendWeb3formsEmail({
            subject: `[Contact] Νέο μήνυμα από ${name}`,
            replyToName: name,
            replyToEmail: email,
            message: buildContactEmail({ name, email, phone, message, budget }),
          });
        }
      } catch (emailError) {
        console.error('Web3forms email error:', emailError);
        // Do not fail the request if email sending fails
      }

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
