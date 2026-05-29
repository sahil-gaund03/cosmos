import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// 1. Rate Limiting (In-Memory IP tracking for Edge)
// Note: In a real distributed SaaS environment, use Redis (e.g. @upstash/ratelimit)
// This is a naive edge-compatible implementation for demonstration.
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 100;
const ipCache = new Map<string, { count: number; expiresAt: number }>();

function applyRateLimit(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "127.0.0.1";
  const now = Date.now();
  const record = ipCache.get(ip);

  if (!record || record.expiresAt < now) {
    ipCache.set(ip, { count: 1, expiresAt: now + RATE_LIMIT_WINDOW });
    return null;
  }

  if (record.count >= MAX_REQUESTS) {
    return new NextResponse(
      JSON.stringify({ 
        error: "Too Many Requests", 
        message: "Rate limit exceeded. Please try again later." 
      }),
      { status: 429, headers: { "Content-Type": "application/json", "Retry-After": "60" } }
    );
  }

  record.count++;
  ipCache.set(ip, record);
  return null;
}

// 2. OWASP Secure Headers
function applySecureHeaders(res: NextResponse) {
  const headers = res.headers;
  
  // Prevent clickjacking
  headers.set("X-Frame-Options", "DENY");
  // Prevent MIME type sniffing
  headers.set("X-Content-Type-Options", "nosniff");
  // Strict Transport Security (HSTS)
  headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");
  // Cross-Site Scripting (XSS) Protection
  headers.set("X-XSS-Protection", "1; mode=block");
  // Referrer Policy
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  // Permissions Policy (disable camera/mic unless needed)
  headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");

  return res;
}

export async function middleware(req: NextRequest) {
  // 1. Check Rate Limit
  const rateLimitResponse = applyRateLimit(req);
  if (rateLimitResponse) return rateLimitResponse;

  const res = NextResponse.next();

  // 2. Apply Security Headers
  applySecureHeaders(res);

  // 3. Optional: Route Protection (Auth)
  // If the user tries to access /admin or /dashboard, require JWT
  if (req.nextUrl.pathname.startsWith("/admin") || req.nextUrl.pathname.startsWith("/dashboard")) {
    const token = req.cookies.get("nexus_auth_token")?.value;
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
    // Note: Use 'jose' to verify the JWT edge-side here in a full implementation.
  }

  return res;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, textures, etc)
     */
    "/((?!_next/static|_next/image|favicon.ico|textures|images|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
