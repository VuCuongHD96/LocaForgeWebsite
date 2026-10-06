import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SubtitlesIcon } from "./icons";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-8">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/20">
            <SubtitlesIcon className="h-[18px] w-[18px] text-primary" />
          </div>
          <span className="text-base font-bold tracking-tight text-foreground">
            LocaForge
          </span>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {[
            { label: "Quy trình", href: "#how-it-works" },
            { label: "Tính năng", href: "#features" },
            { label: "Bảng xếp hạng", href: "#leaderboard" },
            { label: "Tài liệu", href: "#footer" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/files">
            <Button
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
            >
              Tham gia dịch thuật
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
