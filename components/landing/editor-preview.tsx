import { Badge } from "@/components/ui/badge";
import { SparkIcon, UpvoteIcon, DownvoteIcon } from "./icons";

export function EditorPreview() {
  return (
    <div className="relative rounded-xl border border-border bg-card shadow-2xl overflow-hidden">
      {/* Titlebar */}
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <div className="h-2.5 w-2.5 rounded-full bg-[#e63946]/50" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#ffba27]/50" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#2d6a4f]/50" />
        <span className="ml-2 font-mono text-[11px] text-muted-foreground/70">
          Interstellar.2014.srt — LocaForge Editor
        </span>
      </div>

      {/* Split view */}
      <div className="grid grid-cols-2 divide-x divide-border">
        {/* Source */}
        <div className="p-4 space-y-3">
          <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground/70">Nguồn · EN</p>
          {[
            { ts: "00:01:23,456 → 00:01:25,789", text: "The architecture of the universe is mathematical.", active: true },
            { ts: "00:01:26,100 → 00:01:28,430", text: "We are the cosmos made conscious.", active: false },
            { ts: "00:01:29,000 → 00:01:31,200", text: "Life is the means by which the universe understands itself.", active: false },
          ].map((line, i) => (
            <div
              key={i}
              className={`rounded-md border p-3 ${line.active
                ? "border-primary/40 bg-primary/[0.04]"
                : "border-border bg-muted/60"
                }`}
            >
              <p className="font-mono text-[9px] text-primary mb-1">{line.ts}</p>
              <p className="text-[11px] text-muted-foreground leading-relaxed">{line.text}</p>
            </div>
          ))}
        </div>

        {/* Translation */}
        <div className="p-4 space-y-2.5">
          <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground/70">Dịch thuật · VI</p>

          {/* Card 1 */}
          <div className="rounded-md border border-border bg-secondary">
            <div className="flex items-center gap-2 border-b border-border px-3 py-2">
              <div className="h-5 w-5 rounded-full bg-[var(--loca-gold)]/10 ring-1 ring-[var(--loca-gold)]/30 flex items-center justify-center shrink-0">
                <span className="text-[8px] font-bold text-[var(--loca-gold)]">D</span>
              </div>
              <span className="text-[10px] font-medium text-foreground">dragon_sub</span>
              <Badge className="ml-auto h-4 px-1.5 text-[8px] bg-[var(--loca-gold)]/10 text-[var(--loca-gold)] border-[var(--loca-gold)]/20 hover:bg-[var(--loca-gold)]/10 rounded-full">
                Vàng
              </Badge>
            </div>
            <p className="px-3 py-2 text-[11px] text-foreground leading-relaxed">
              Cấu trúc của vũ trụ mang tính toán học.
            </p>
            <div className="flex items-center gap-3 border-t border-border px-3 py-1.5">
              <button className="flex items-center gap-1 text-primary">
                <UpvoteIcon className="h-3 w-3" />
                <span className="text-[10px] font-semibold">42</span>
              </button>
              <button className="flex items-center gap-1 text-muted-foreground/70">
                <DownvoteIcon className="h-3 w-3" />
                <span className="text-[10px]">3</span>
              </button>
              <span className="ml-auto text-[9px] text-muted-foreground/70">vừa xong</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-md border border-border bg-secondary opacity-75">
            <div className="flex items-center gap-2 border-b border-border px-3 py-2">
              <div className="h-5 w-5 rounded-full bg-[var(--loca-diamond)]/10 ring-1 ring-[var(--loca-diamond)]/30 flex items-center justify-center shrink-0">
                <span className="text-[8px] font-bold text-[var(--loca-diamond)]">S</span>
              </div>
              <span className="text-[10px] font-medium text-foreground">starlight_vi</span>
              <Badge className="ml-auto h-4 px-1.5 text-[8px] bg-[var(--loca-diamond)]/10 text-[var(--loca-diamond)] border-[var(--loca-diamond)]/20 hover:bg-[var(--loca-diamond)]/10 rounded-full">
                Kim cương
              </Badge>
            </div>
            <p className="px-3 py-2 text-[11px] text-muted-foreground leading-relaxed">
              Kiến trúc vũ trụ được xây dựng trên nền tảng toán học.
            </p>
            <div className="flex items-center gap-3 border-t border-border px-3 py-1.5">
              <button className="flex items-center gap-1 text-muted-foreground/70">
                <UpvoteIcon className="h-3 w-3" />
                <span className="text-[10px]">27</span>
              </button>
              <button className="flex items-center gap-1 text-muted-foreground/70">
                <DownvoteIcon className="h-3 w-3" />
                <span className="text-[10px]">1</span>
              </button>
              <span className="ml-auto text-[9px] text-muted-foreground/70">5 phút trước</span>
            </div>
          </div>

          {/* AI chip */}
          <div className="flex items-center gap-2 rounded-md border border-primary/10 bg-primary/[0.03] px-3 py-2">
            <SparkIcon className="h-3 w-3 text-primary shrink-0" />
            <span className="text-[9px] text-muted-foreground/70">Gemini:</span>
            <span className="text-[10px] text-muted-foreground truncate">Cấu trúc vũ trụ có tính toán học.</span>
          </div>
        </div>
      </div>

      {/* Status bar */}
      <div className="flex items-center gap-4 border-t border-border bg-muted/60 px-4 py-2">
        <span className="font-mono text-[9px] text-muted-foreground/70">Dòng 1/847</span>
        <div className="flex-1 h-1 rounded-full bg-foreground/[0.05]">
          <div className="h-1 w-[23%] rounded-full bg-primary" />
        </div>
        <span className="font-mono text-[9px] text-primary">23% hoàn thành</span>
      </div>
    </div>
  );
}
