import { Progress } from "@/components/ui/progress";
import { FileTextIcon } from "./icons";
import { formatFileSize } from "./types";

interface Props {
  progress: number;
  uploadMsg: string;
  file: File;
}

export function UploadProgress({ progress, uploadMsg, file }: Props) {
  return (
    <div className="rounded-2xl border border-border bg-card p-10">
      <div className="mb-8 flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/[0.08]">
          <FileTextIcon className="h-6 w-6 text-primary" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate font-medium text-foreground">{file.name}</p>
          <p className="text-sm text-muted-foreground/70">{formatFileSize(file)}</p>
        </div>
        <span className="shrink-0 font-mono text-sm font-semibold tabular-nums text-primary">
          {progress}%
        </span>
      </div>
      <Progress value={progress} className="mb-4" />
      <p className="text-center text-sm text-muted-foreground transition-all duration-300">{uploadMsg}</p>
    </div>
  );
}
