import { setToken } from "@/lib/auth/token-store";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:5040";

export async function fetchToken(): Promise<string> {
  const res = await fetch(`${API_URL}/auth/token`, { method: "POST" });
  if (!res.ok) {
    throw new Error(`fetchToken: ${res.status} ${res.statusText}`);
  }
  const data = (await res.json()) as { token?: string };
  if (!data?.token) {
    throw new Error("fetchToken: response thiếu token");
  }
  setToken(data.token);
  return data.token;
}
