import Cookies from "js-cookie";

export const AUTH_COOKIE_NAMES = {
  access: "access",
  refresh: "refresh",
  username: "username",
} as const;

export function getAccessToken(): string | undefined {
  return Cookies.get(AUTH_COOKIE_NAMES.access);
}

export function getRefreshToken(): string | undefined {
  return Cookies.get(AUTH_COOKIE_NAMES.refresh); 
}

export function getStoredUsername(): string | undefined {
  return Cookies.get(AUTH_COOKIE_NAMES.username);
}

const cookieOpts = { path: "/" as const };

export function clearAuthCookies(): void {
  Cookies.remove(AUTH_COOKIE_NAMES.access, cookieOpts);
  Cookies.remove(AUTH_COOKIE_NAMES.refresh, cookieOpts);
  Cookies.remove(AUTH_COOKIE_NAMES.username, cookieOpts);
}

export function setAuthSession(params: {
  access: string;
  refresh: string;
  username: string;
}): void {
  const { access, refresh, username } = params;
  Cookies.set(AUTH_COOKIE_NAMES.access, access, { sameSite: "lax", path: "/" });
  Cookies.set(AUTH_COOKIE_NAMES.refresh, refresh, {
    sameSite: "lax",
    path: "/",
    expires: 7,
  });
  Cookies.set(AUTH_COOKIE_NAMES.username, username.trim(), {
    sameSite: "lax", 
    path: "/",
    expires: 7,
  });
}
