import type { StoredToken } from "@/lib/types";

const KEY = "locaforge:auth";
const LIFETIME_MS = (1 * 60 * 60 + 50 * 60) * 1000; // 1h50p
const REFRESH_LEAD_MS = 30 * 60 * 1000; // refresh trước 30p

export function getToken(): StoredToken | null {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem(KEY);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as StoredToken;
    if (typeof parsed.token !== "string" || typeof parsed.expiresAt !== "number") return null;
    return parsed;
  } catch {
    return null;
  }
}

export function setToken(token: string): void {
  if (typeof window === "undefined") return;
  const value: StoredToken = { token, expiresAt: Date.now() + LIFETIME_MS };
  window.localStorage.setItem(KEY, JSON.stringify(value));
}

export function clearToken(): void {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(KEY);
}

export function isExpired(t: StoredToken | null = getToken()): boolean {
  if (!t) return true;
  return Date.now() > t.expiresAt - REFRESH_LEAD_MS;
}
