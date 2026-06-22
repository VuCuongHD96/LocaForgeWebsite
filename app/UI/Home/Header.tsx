import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SubtitlesIcon } from "../CommonIcon/IconProps";

/* ------------------------------------------------------------------ */
/*  Header                                                             */
/* ------------------------------------------------------------------ */

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.06] bg-[#0b1215]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-8">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#69d4f4]/10 ring-1 ring-[#69d4f4]/20">
            <SubtitlesIcon className="h-[18px] w-[18px] text-[#69d4f4]" />
          </div>
          <span className="text-base font-bold tracking-tight text-[#e2e3df]">
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
              className="text-sm font-medium text-[#c4c6cc] transition-colors hover:text-[#e2e3df]"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            className="text-[#c4c6cc] hover:text-[#e2e3df] hover:bg-white/[0.05]"
          >
            Đăng nhập
          </Button>
          <Link href="/upload">
            <Button
              size="sm"
              className="bg-[#69d4f4] text-[#003642] hover:bg-[#69d4f4]/90 font-semibold"
            >
              Tham gia dịch thuật
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
