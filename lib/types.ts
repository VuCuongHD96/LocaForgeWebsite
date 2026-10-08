export interface StoredToken {
  token: string;
  expiresAt: number; // epoch ms
}

export interface ParseJobResponse {
  jobId: string;
  fileId: string;
  totalLines: number;
}

export type JobStatus = "pending" | "running" | "done" | "failed";

export interface JobRow {
  id: string;
  file_id: string;
  status: JobStatus | string;
  progress: number;
  total: number;
  error: string | null;
  started_at: string | null;
  finished_at: string | null;
  created_at: string;
}

export interface SrtFileRow {
  id: string;
  title: string;
  workspace: string | null;
  source_lang: string;
  target_langs: string[];
  created_at?: string;
}

export interface SubtitleLineRow {
  id: string;
  file_id: string;
  line_index: number;
  start_time: string;
  end_time: string;
  original_text: string[];
}

export interface TranslationRow {
  id: string;
  line_id: string;
  file_id: string;
  author_id: string | null;
  text: string[];
  is_ai: boolean;
  is_best: boolean;
  like_count: number;
  dislike_count: number;
  language: string;
  created_at: string;
}
