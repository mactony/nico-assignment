import { auth } from "@/auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

type RouteConfig = {
  PUBLIC_ROUTES: string[];
  PROTECTED_ROUTES: string[];
  ADMIN_ROUTES: string[];
  PROTECTED_API_ROUTES: string[];
};

// Define route configurations
const ROUTE_CONFIGS: RouteConfig = {
  // Public routes that don't require authentication
  PUBLIC_ROUTES: [
    "/",
    "/login",
    "/register",
    "/about",
    "/contact",
    "/api/health",
    "/blog",
    "/pricing",
  ],

  // Routes that require authentication
  PROTECTED_ROUTES: ["/dashboard", "/profile", "/settings"],

  // Routes that require admin access
  ADMIN_ROUTES: ["/admin", "/admin/:path*"],

  // API routes that require authentication
  PROTECTED_API_ROUTES: ["/api/dashboard", "/api/user"],
};

// Helper function to check if path matches any pattern
function matchesPattern(path: string, patterns: string[]): boolean {
  return patterns.some((pattern) => {
    // Convert route pattern to regex
    const regexPattern = pattern
      .replace(/\/:path\*/, "(?:/.*)?")
      .replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`^${regexPattern}$`);
    return regex.test(path);
  });
}

export default auth(async function middleware(request: NextRequest) {
  const session = await auth();
  const { pathname } = request.nextUrl;

  // Allow public assets and API routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api/auth") ||
    pathname.includes("/favicon") ||
    pathname.includes(".") ||
    ROUTE_CONFIGS.PUBLIC_ROUTES.includes(pathname)
  ) {
    return NextResponse.next();
  }

  // Check if route requires authentication
  const isProtectedRoute = matchesPattern(pathname, [
    ...ROUTE_CONFIGS.PROTECTED_ROUTES,
    ...ROUTE_CONFIGS.ADMIN_ROUTES,
    ...ROUTE_CONFIGS.PROTECTED_API_ROUTES,
  ]);

  // Handle unauthenticated users
  if (isProtectedRoute && !session) {
    // Store the original URL to redirect back after login
    const loginUrl = new URL("/login", request.nextUrl.origin);
    loginUrl.searchParams.set("callbackUrl", pathname);

    return NextResponse.redirect(loginUrl);
  }

  // Handle authenticated users trying to access auth pages
  if (session && (pathname === "/login" || pathname === "/register")) {
    return NextResponse.redirect(new URL("/dashboard", request.nextUrl.origin));
  }

  // Check admin routes
  if (matchesPattern(pathname, ROUTE_CONFIGS.ADMIN_ROUTES)) {
    // Verify admin role
    const isAdmin = session?.user?.role === "ADMIN";

    if (!isAdmin) {
      // If user is not an admin, redirect to 403 page
      return NextResponse.redirect(new URL("/403", request.nextUrl.origin));
    }
  }

  // Add security headers
  const response = NextResponse.next();

  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains"
  );

  return response;
});

// Optimize matcher patterns for better performance
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api/auth (auth endpoints)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api/auth|_next/static|_next/image|favicon.ico).*)",
  ],
};
