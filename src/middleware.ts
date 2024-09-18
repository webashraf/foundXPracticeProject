import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { getCurrentUser } from "./services/AuthService";

const authBasedRoute = ["/login", "/register"];
const roleBasedRoute = {
  USER: [/^\/profile/],
  ADMIN: [/^\/admin/],
};
type TRoute = keyof typeof roleBasedRoute;

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const user = await getCurrentUser();

  if (user?.role) {
    if (authBasedRoute.includes(pathname)) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  if (!user) {
    if (authBasedRoute.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  if (user?.role && roleBasedRoute[user?.role as TRoute]) {
    const routes = roleBasedRoute[user?.role as TRoute];

    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/profile", "/profile/:page*", "/admin", "/login", "/register"],
};
