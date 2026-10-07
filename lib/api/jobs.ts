import { fetchWithAuth } from "./client";
import type { JobRow } from "@/lib/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:5040";

export async function getJob(jobId: string): Promise<JobRow> {
  const res = await fetchWithAuth(`${API_URL}/jobs/${jobId}`, { method: "GET" });
  if (!res.ok) {
    throw new Error(`getJob: ${res.status} ${res.statusText}`);
  }
  return (await res.json()) as JobRow;
}
