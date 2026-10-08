import { fetchWithAuth } from "./client";
import type { ParseJobResponse } from "@/lib/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:5040";

export interface ParseSubtitleOptions {
  sourceLang?: string;
  targetLang?: string;
  workspace?: string | null;
}

export async function parseSubtitle(
  file: File,
  { sourceLang = "en", targetLang = "vi", workspace = null }: ParseSubtitleOptions = {},
): Promise<ParseJobResponse> {
  const form = new FormData();
  form.append("file", file);
  form.append("sourceLang", sourceLang);
  form.append("targetLang", targetLang);
  if (workspace != null) form.append("workspace", workspace);

  const res = await fetchWithAuth(`${API_URL}/subtitle/parse`, {
    method: "POST",
    body: form,
  });

  if (!res.ok) {
    throw new Error(`parseSubtitle: ${res.status} ${res.statusText}`);
  }
  return (await res.json()) as ParseJobResponse;
}

export async function exportSubtitle(fileId: string, lang?: string): Promise<void> {
  const url = new URL(`${API_URL}/subtitle/${fileId}/export`);
  if (lang) url.searchParams.set("lang", lang);

  const res = await fetchWithAuth(url.toString());
  if (!res.ok) {
    throw new Error(`exportSubtitle: ${res.status} ${res.statusText}`);
  }

  const blob = await res.blob();
  const disposition = res.headers.get("content-disposition");
  const match = disposition?.match(/filename\*?=(?:UTF-8'')?"?([^";]+)"?/i);
  const fileName = match ? decodeURIComponent(match[1]) : `${fileId}.srt`;

  const blobUrl = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = blobUrl;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(blobUrl);
}
