import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, title, biography, sessionTitle, sessionDescription, targetAudience, format, duration } = body;

    // Validate required fields
    if (!name || !email || !sessionTitle || !sessionDescription) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email content
    const emailContent = `
New Speaker Proposal for Agentica2026

SPEAKER INFORMATION
-------------------
Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}
Title: ${title || 'Not provided'}

Biography:
${biography || 'Not provided'}

SESSION DETAILS
--------------
Session Title: ${sessionTitle}

Session Description:
${sessionDescription}

Target Audience: ${targetAudience || 'Not specified'}
Format: ${format || 'Not specified'}
Duration: ${duration || 'Not specified'}

---
Submitted at: ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })}
    `.trim();

    // Send email using Resend API
    /*
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Agentica2026 <proposals@agentica2026.com>',
        to: ['mstrasser@scissero.com', 'abournewilliams@agentica2026.com'],
        subject: `New Speaker Proposal: ${sessionTitle}`,
        text: emailContent,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }
    */

    // For development, log to console
    console.log('Proposal received:', emailContent);

    return NextResponse.json(
      {
        success: true,
        message: 'Proposal submitted successfully',
        data: { name, email, sessionTitle }
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Proposal error:', error);
    return NextResponse.json(
      { error: 'Failed to process proposal' },
      { status: 500 }
    );
  }
}
