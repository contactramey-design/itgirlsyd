import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Simple rate limiting store (in production, use Redis or similar)
const rateLimitStore = new Map<string, { count: number; resetAt: number }>()

export function middleware(request: NextRequest) {
  // Only apply to API routes
  if (!request.nextUrl.pathname.startsWith('/api')) {
    return NextResponse.next()
  }

  // CORS headers for API routes
  const response = NextResponse.next()

  // Set CORS headers
  response.headers.set('Access-Control-Allow-Origin', '*')
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, X-API-Key, Authorization')

  // Handle OPTIONS request
  if (request.method === 'OPTIONS') {
    return new NextResponse(null, { status: 200, headers: response.headers })
  }

  // Rate limiting for API routes (basic implementation)
  if (request.nextUrl.pathname.startsWith('/api/try-on')) {
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown'
    const now = Date.now()
    const limit = rateLimitStore.get(ip)

    if (limit) {
      if (now > limit.resetAt) {
        // Reset limit
        rateLimitStore.set(ip, { count: 1, resetAt: now + 60 * 60 * 1000 }) // 1 hour
      } else if (limit.count >= 100) {
        // Rate limit exceeded
        return NextResponse.json(
          { error: 'Rate limit exceeded. Please try again later.' },
          { status: 429, headers: response.headers }
        )
      } else {
        // Increment count
        limit.count++
        rateLimitStore.set(ip, limit)
      }
    } else {
      // First request
      rateLimitStore.set(ip, { count: 1, resetAt: now + 60 * 60 * 1000 })
    }
  }

  return response
}

export const config = {
  matcher: '/api/:path*',
}
