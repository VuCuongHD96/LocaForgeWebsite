import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { FileTextIcon, CheckCircleIcon } from "./icons";
import type { JobPhase } from "./types";

interface Props {
  phase: JobPhase;
  progress: number;
  total: number;
  error?: string | null;
  onRetry?: () => void;
}

export function JobProgressCard({ phase, progress, total, error, onRetry }: Props) {
  const percent = total > 0 ? Math.min(100, Math.round((progress / total) * 100)) : 0;

  if (phase === "failed") {
    return (
      <div className="mt-5 rounded-2xl border border-destructive/30 bg-destructive/[0.06] p-6 text-center">
        <p className="mb-2 font-medium text-destructive">Không thể xử lý dự án</p>
        <p className="mb-4 text-sm text-muted-foreground/70">{error ?? "Đã có lỗi xảy ra, vui lòng thử lại."}</p>
        {onRetry && (
          <Button variant="outline" className="cursor-pointer" onClick={onRetry}>
            Thử lại
          </Button>
        )}
      </div>
    );
  }

  if (phase === "done") {
    return (
      <div className="mt-5 flex items-center gap-3 rounded-2xl border border-primary/20 bg-primary/[0.06] p-4">
        <CheckCircleIcon className="h-5 w-5 shrink-0 text-primary" />
        <p className="text-sm text-muted-foreground">Hoàn tất! Đang chuyển sang trình biên tập...</p>
      </div>
    );
  }

  const label =
    phase === "parsing" ? "Đang tải lên & phân tích phụ đề..." : `Đang dịch ${progress}/${total} dòng`;

  return (
    <div className="mt-5 rounded-2xl border border-border bg-card p-6">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/[0.08]">
          <FileTextIcon className="h-5 w-5 text-primary" />
        </div>
        <p className="text-sm text-muted-foreground transition-all duration-300">{label}</p>
        <span className="ml-auto shrink-0 font-mono text-sm font-semibold tabular-nums text-primary">
          {phase === "parsing" ? "…" : `${percent}%`}
        </span>
      </div>
      <Progress value={phase === "parsing" ? 0 : percent} />
    </div>
  );
}
