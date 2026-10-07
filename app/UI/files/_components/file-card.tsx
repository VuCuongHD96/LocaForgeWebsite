import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { TypeIcon as SubtitlesIcon } from "lucide-react";
// Removed LANGS import
// import type { SrtFileRow } from "@/lib/types";
export interface SrtFileRow {
  id: string | number;
  title: string;
  workspace?: string;
  source_lang: string;
  target_langs: string[];
  created_at?: string;
}

interface SrtFileCardProps {
  file: SrtFileRow;
}

function langLabel(code: string): string {
  return code.toUpperCase();
}

function formatRelativeDate(iso: string): string {
  const diffMs = Date.now() - new Date(iso).getTime();
  const days = Math.floor(diffMs / 86_400_000);
  if (days <= 0) return "Hôm nay";
  if (days === 1) return "Hôm qua";
  if (days < 30) return `${days} ngày trước`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months} tháng trước`;
  return `${Math.floor(months / 12)} năm trước`;
}

export function SrtFileCard({ file }: SrtFileCardProps) {
  const extraTargets = file.target_langs.length - 1;

  return (
    <Link
      href={`/project/${file.id}`}
      className="group flex flex-col rounded-xl border border-border bg-card p-5 transition-colors duration-150 hover:border-foreground/10 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
    >
      <div className="mb-4 flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/20">
          <SubtitlesIcon className="h-5 w-5 text-primary" />
        </div>
        <div className="min-w-0 flex-1 pt-0.5">
          <h3 className="truncate text-sm font-semibold text-foreground" title={file.title}>
            {file.title}
          </h3>
          <p className="truncate text-xs text-muted-foreground/70">{file.workspace ?? "Chưa phân loại"}</p>
        </div>
      </div>

      <div className="flex items-center gap-1.5">
        <Badge className="rounded-full border-primary/20 bg-primary/10 px-2 text-[10px] text-primary hover:bg-primary/10">
          {langLabel(file.source_lang)}
        </Badge>
        <ArrowRightIcon className="h-3.5 w-3.5 shrink-0 text-muted-foreground/50" />
        <Badge className="rounded-full border-[var(--loca-gold)]/20 bg-[var(--loca-gold)]/10 px-2 text-[10px] text-[var(--loca-gold)] hover:bg-[var(--loca-gold)]/10">
          {langLabel(file.target_langs[0])}
        </Badge>
        {extraTargets > 0 && (
          <Badge className="rounded-full border-border bg-foreground/[0.05] px-1.5 text-[10px] text-muted-foreground/70 hover:bg-foreground/[0.05]">
            +{extraTargets}
          </Badge>
        )}
      </div>

      {file.created_at && (
        <p className="mt-4 border-t border-border pt-3 text-[11px] text-muted-foreground/70">
          {formatRelativeDate(file.created_at)}
        </p>
      )}
    </Link>
  );
}

export function SrtFileCardSkeleton() {
  const Skeleton = ({ className }: { className?: string }) => (
    <div className={`animate-pulse ${className}`} />
  );
  return (
    <div className="flex flex-col rounded-xl border border-border bg-card p-5">
      <div className="mb-4 flex items-start gap-3">
        <Skeleton className="h-10 w-10 shrink-0 rounded-lg bg-foreground/[0.06]" />
        <div className="min-w-0 flex-1 space-y-2 pt-1">
          <Skeleton className="h-3.5 w-3/4 bg-foreground/[0.06]" />
          <Skeleton className="h-2.5 w-1/2 bg-foreground/[0.06]" />
        </div>
      </div>
      <div className="flex items-center gap-1.5">
        <Skeleton className="h-5 w-12 rounded-full bg-foreground/[0.06]" />
        <Skeleton className="h-3.5 w-3.5 bg-foreground/[0.06]" />
        <Skeleton className="h-5 w-12 rounded-full bg-foreground/[0.06]" />
      </div>
      <Skeleton className="mt-4 h-2.5 w-20 bg-foreground/[0.06]" />
    </div>
  );
}
