import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, ticket, dietary, comments } = body;

    // Validate required fields
    if (!name || !email || !ticket) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email content
    const emailContent = `
New Registration for Agentica2026

Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}
Phone: ${phone || 'Not provided'}
Ticket Type: ${ticket}
Dietary Requirements: ${dietary || 'None'}
Additional Comments: ${comments || 'None'}

---
Submitted at: ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })}
    `.trim();

    // Send email using Resend API (you'll need to set this up)
    // For now, we'll use a simple fetch to a service or log it

    // Example with Resend (uncomment and add your API key to .env.local)
    /*
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Agentica2026 <registrations@agentica2026.com>',
        to: ['mstrasser@scissero.com', 'abournewilliams@agentica2026.com'],
        subject: `New Registration: ${name} - ${ticket}`,
        text: emailContent,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }
    */

    // For development, log to console
    console.log('Registration received:', emailContent);

    return NextResponse.json(
      {
        success: true,
        message: 'Registration submitted successfully',
        data: { name, email, ticket }
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Failed to process registration' },
      { status: 500 }
    );
  }
}
