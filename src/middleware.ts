import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const hasHost = req.cookies.has("host");
  const hasToken = req.cookies.has("token");
  const isAuth = hasHost && hasToken;

  const loginPath = "/login";
  const { pathname } = req.nextUrl;

  // ログイン画面の場合
  if (pathname === loginPath) {
    // 認証済み
    if (isAuth) {
      req.nextUrl.pathname = "/dashboard";
      return NextResponse.redirect(req.nextUrl);
    }
    return NextResponse.next();
  }

  if (!isAuth) {
    req.nextUrl.pathname = loginPath;
    return NextResponse.redirect(req.nextUrl);
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/login",
    "/dashboard",
    "/favorites",
    "/gallery/:path*",
    "/notes/:path*",
    "/tags/:path*",
    "/users/:path*",
  ],
};
