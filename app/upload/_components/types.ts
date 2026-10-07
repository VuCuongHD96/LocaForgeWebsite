export type Phase = "idle" | "dragging" | "uploading" | "done";
export type Errors = Partial<Record<"projectName" | "sourceLang" | "targetLang" | "file", string>>;

export type JobPhase = "idle" | "parsing" | "running" | "done" | "failed";

export const LANGS = [
  { value: "vi", label: "Tiếng Việt" },
  { value: "en", label: "Tiếng Anh" },
];

export const REQUIRED_MSG = "Đây là trường bắt buộc";

export function formatFileSize(file: File): string {
  return file.size >= 1024 * 1024
    ? (file.size / (1024 * 1024)).toFixed(1) + " MB"
    : (file.size / 1024).toFixed(1) + " KB";
}
