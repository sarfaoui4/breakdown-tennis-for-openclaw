export const dynamic = 'force-static';

export async function GET() {
  return new Response('google-site-verification: google620f3bb84650dabf.html', {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  });
}
