import { getToken, setToken, clearToken, isExpired } from "@/lib/auth/token-store";
import { fetchToken } from "./auth";

// Mutex: tránh nhiều request concurrent cùng gọi fetchToken
let refreshPromise: Promise<string> | null = null;

async function ensureValidToken(): Promise<string> {
  const current = getToken();
  if (current && !isExpired(current)) {
    return current.token;
  }
  if (!refreshPromise) {
    refreshPromise = fetchToken().finally(() => {
      refreshPromise = null;
    });
  }
  return refreshPromise;
}

export async function fetchWithAuth(
  url: string,
  init: RequestInit = {},
): Promise<Response> {
  const token = await ensureValidToken();

  const merged: RequestInit = {
    ...init,
    headers: {
      ...(init.headers ?? {}),
      Authorization: `Bearer ${token}`,
    },
  };

  let res = await fetch(url, merged);

  // 401 → token thực tế bị reject dù client tưởng còn hạn → refresh + retry 1 lần
  if (res.status === 401) {
    clearToken();
    const freshToken = await ensureValidToken();
    const retryInit: RequestInit = {
      ...init,
      headers: {
        ...(init.headers ?? {}),
        Authorization: `Bearer ${freshToken}`,
      },
    };
    res = await fetch(url, retryInit);
  }

  return res;
}
