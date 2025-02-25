// src/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const isAuthenticated = !!token;
  const isAdmin = token?.role === "ADMIN";
  const isAdminRoute = request.nextUrl.pathname.startsWith("/admin");
  const isAuthRoute = request.nextUrl.pathname.startsWith("/signin") || 
                      request.nextUrl.pathname.startsWith("/signup");

  // Redirect unauthenticated users from admin routes to login
  if (isAdminRoute && !isAuthenticated) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  // Redirect non-admin users from admin routes to home
  if (isAdminRoute && !isAdmin) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Redirect authenticated users from auth routes to home
  if (isAuthRoute && isAuthenticated) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path*", 
    "/signin", 
    "/signup", 
    "/account/:path*"
  ],
};