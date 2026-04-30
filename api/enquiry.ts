// Vercel Edge Function. Vercel auto-detects this file at /api/enquiry
// regardless of framework, so an Astro adapter is not required.
//
// Zero-config delivery: forwards the submission to formsubmit.co, which
// is already activated for mbmoffat@gmail.com. The frontend falls back
// to a mailto: link if this endpoint returns an error.
//
// TODO: replace formsubmit.co with a direct email service (Resend,
// SendGrid, Postmark, etc.) once an account is set up. Drop the
// formsubmit.co fetch and call the provider's API instead — the rest
// of the handler can stay the same.

export const config = { runtime: 'edge' };

const DESTINATION = 'mbmoffat@gmail.com';

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return json({ ok: false, error: 'Method not allowed' }, 405);
  }

  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return json({ ok: false, error: 'Invalid form data' }, 400);
  }

  // Honeypot. Bots fill this; real users do not.
  if (String(form.get('_honey') || '').trim()) {
    return json({ ok: true });
  }

  const name = field(form, 'name');
  const email = field(form, 'email');
  const phone = field(form, 'phone');
  const location = field(form, 'location');
  const message = field(form, 'message');

  if (!name || !email || !message) {
    return json({ ok: false, error: 'Name, email and message are required.' }, 400);
  }

  const fwd = new FormData();
  fwd.set('name', name);
  fwd.set('email', email);
  if (phone) fwd.set('phone', phone);
  if (location) fwd.set('location', location);
  fwd.set('message', message);
  fwd.set('_subject', 'New enquiry from UK Mortgages Worldwide');
  fwd.set('_template', 'table');
  fwd.set('_captcha', 'false');

  try {
    const res = await fetch(`https://formsubmit.co/ajax/${DESTINATION}`, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: fwd,
    });
    if (!res.ok) throw new Error(`formsubmit.co returned ${res.status}`);
    return json({ ok: true });
  } catch (err) {
    console.error('Enquiry forward failed:', err);
    return json(
      { ok: false, error: 'Submission failed. Please use the email link below.' },
      502,
    );
  }
}

function field(form: FormData, key: string): string {
  return String(form.get(key) || '').trim();
}

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
