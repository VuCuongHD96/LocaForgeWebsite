"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Loader2Icon, MoonIcon, SunIcon } from "lucide-react";
import { SubtitlesIcon, DownloadIcon } from "./icons";
import { useTheme } from "./theme-provider";

interface EditorHeaderProps {
  projectName?: string;
  fileName?: string;
  userInitial: string;
  loading?: boolean;
  showBreadcrumb?: boolean;
  onExport?: () => void;
  exporting?: boolean;
}

const NAV_TABS = ["Workspace"] as const;

export function EditorHeader({
  projectName,
  fileName,
  userInitial,
  loading = false,
  showBreadcrumb = true,
  onExport,
  exporting = false,
}: EditorHeaderProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="z-50 shrink-0 bg-background/95 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
      <div className="flex h-14 items-center gap-4 px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/20">
            <SubtitlesIcon className="h-[15px] w-[15px] text-primary" />
          </div>
          <span className="text-sm font-bold tracking-tight text-foreground">LocaForge</span>
        </Link>

        <nav className="flex items-center gap-0.5">
          {NAV_TABS.map((label, i) => (
            <a
              key={label}
              href="#"
              className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors duration-150 ${
                i === 0
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <Button
            size="icon-sm"
            variant="ghost"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Chuyển sang light mode" : "Chuyển sang dark mode"}
            className="cursor-pointer text-muted-foreground hover:text-foreground"
          >
            {theme === "dark" ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
          </Button>

          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/20 ring-1 ring-primary/30">
            <span className="text-[10px] font-bold text-primary">{userInitial}</span>
          </div>
        </div>
      </div>

      {showBreadcrumb && (
        <div className="flex items-center justify-between gap-2 bg-muted/70 px-6 py-2">
          <div className="flex items-center gap-2">
            {loading ? (
              <>
                <Skeleton className="h-3 w-24 bg-foreground/10" />
                <span className="text-xs text-foreground/20">/</span>
                <Skeleton className="h-3 w-32 bg-foreground/10" />
              </>
            ) : (
              <>
                <span className="text-xs text-muted-foreground/70">{projectName}</span>
                <span className="text-xs text-foreground/20">/</span>
                <span className="text-xs font-medium text-muted-foreground">{fileName}</span>
              </>
            )}
          </div>

          <Button
            size="sm"
            onClick={onExport}
            disabled={exporting || !onExport}
            className="cursor-pointer gap-1.5 bg-primary font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-60"
          >
            {exporting ? (
              <Loader2Icon className="h-3.5 w-3.5 animate-spin" />
            ) : (
              <DownloadIcon className="h-3.5 w-3.5" />
            )}
            Xuất SRT
          </Button>
        </div>
      )}
    </header>
  );
}
