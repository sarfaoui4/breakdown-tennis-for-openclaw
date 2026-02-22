import { NextResponse } from 'next/server'

export function middleware(request: Request) {
  const url = request.nextUrl.clone()
  if (url.pathname === '/google620f3bb84650dabf.html') {
    return new Response('google-site-verification: google620f3bb84650dabf.html', {
      status: 200,
      headers: { 'Content-Type': 'text/plain' },
    })
  }
  return NextResponse.next()
}

export const config = {
  matcher: '/google620f3bb84650dabf.html',
}
