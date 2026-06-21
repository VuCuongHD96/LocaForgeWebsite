import { Badge } from "@/components/ui/badge";
import { SparkIcon, UpvoteIcon, DownvoteIcon } from "../CommonIcon/IconProps";

/* ------------------------------------------------------------------ */
/*  Editor Preview (Hero mockup)                                       */
/* ------------------------------------------------------------------ */

export function EditorPreview() {
  return (
    <div className="relative rounded-xl border border-white/[0.06] bg-[#0b1215] shadow-2xl overflow-hidden">
      {/* Titlebar */}
      <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
        <div className="h-2.5 w-2.5 rounded-full bg-[#e63946]/50" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#ffba27]/50" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#2d6a4f]/50" />
        <span className="ml-2 font-mono text-[11px] text-[#8e9196]">
          Interstellar.2014.srt — LocaForge Editor
        </span>
      </div>

      {/* Split view */}
      <div className="grid grid-cols-2 divide-x divide-white/[0.04]">
        {/* Source */}
        <div className="p-4 space-y-3">
          <p className="font-mono text-[9px] uppercase tracking-widest text-[#8e9196]">Nguồn · EN</p>
          {[
            { ts: "00:01:23,456 → 00:01:25,789", text: "The architecture of the universe is mathematical.", active: true },
            { ts: "00:01:26,100 → 00:01:28,430", text: "We are the cosmos made conscious.", active: false },
            { ts: "00:01:29,000 → 00:01:31,200", text: "Life is the means by which the universe understands itself.", active: false },
          ].map((line, i) => (
            <div
              key={i}
              className={`rounded-md border p-3 ${line.active
                ? "border-[#69d4f4]/40 bg-[#69d4f4]/[0.04]"
                : "border-white/[0.05] bg-[#1a1c1a]/60"
                }`}
            >
              <p className="font-mono text-[9px] text-[#69d4f4] mb-1">{line.ts}</p>
              <p className="text-[11px] text-[#c4c6cc] leading-relaxed">{line.text}</p>
            </div>
          ))}
        </div>

        {/* Translation */}
        <div className="p-4 space-y-2.5">
          <p className="font-mono text-[9px] uppercase tracking-widest text-[#8e9196]">Dịch thuật · VI</p>

          {/* Card 1 */}
          <div className="rounded-md border border-white/[0.05] bg-[#1e201e]">
            <div className="flex items-center gap-2 border-b border-white/[0.05] px-3 py-2">
              <div className="h-5 w-5 rounded-full bg-[#ffba27]/10 ring-1 ring-[#ffba27]/30 flex items-center justify-center shrink-0">
                <span className="text-[8px] font-bold text-[#ffba27]">D</span>
              </div>
              <span className="text-[10px] font-medium text-[#e2e3df]">dragon_sub</span>
              <Badge className="ml-auto h-4 px-1.5 text-[8px] bg-[#ffba27]/10 text-[#ffba27] border-[#ffba27]/20 hover:bg-[#ffba27]/10 rounded-full">
                Vàng
              </Badge>
            </div>
            <p className="px-3 py-2 text-[11px] text-[#e2e3df] leading-relaxed">
              Cấu trúc của vũ trụ mang tính toán học.
            </p>
            <div className="flex items-center gap-3 border-t border-white/[0.05] px-3 py-1.5">
              <button className="flex items-center gap-1 text-[#69d4f4]">
                <UpvoteIcon className="h-3 w-3" />
                <span className="text-[10px] font-semibold">42</span>
              </button>
              <button className="flex items-center gap-1 text-[#8e9196]">
                <DownvoteIcon className="h-3 w-3" />
                <span className="text-[10px]">3</span>
              </button>
              <span className="ml-auto text-[9px] text-[#8e9196]">vừa xong</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-md border border-white/[0.05] bg-[#1e201e] opacity-75">
            <div className="flex items-center gap-2 border-b border-white/[0.05] px-3 py-2">
              <div className="h-5 w-5 rounded-full bg-[#bde0fe]/10 ring-1 ring-[#bde0fe]/30 flex items-center justify-center shrink-0">
                <span className="text-[8px] font-bold text-[#bde0fe]">S</span>
              </div>
              <span className="text-[10px] font-medium text-[#e2e3df]">starlight_vi</span>
              <Badge className="ml-auto h-4 px-1.5 text-[8px] bg-[#bde0fe]/10 text-[#bde0fe] border-[#bde0fe]/20 hover:bg-[#bde0fe]/10 rounded-full">
                Kim cương
              </Badge>
            </div>
            <p className="px-3 py-2 text-[11px] text-[#c4c6cc] leading-relaxed">
              Kiến trúc vũ trụ được xây dựng trên nền tảng toán học.
            </p>
            <div className="flex items-center gap-3 border-t border-white/[0.05] px-3 py-1.5">
              <button className="flex items-center gap-1 text-[#8e9196]">
                <UpvoteIcon className="h-3 w-3" />
                <span className="text-[10px]">27</span>
              </button>
              <button className="flex items-center gap-1 text-[#8e9196]">
                <DownvoteIcon className="h-3 w-3" />
                <span className="text-[10px]">1</span>
              </button>
              <span className="ml-auto text-[9px] text-[#8e9196]">5 phút trước</span>
            </div>
          </div>

          {/* AI chip */}
          <div className="flex items-center gap-2 rounded-md border border-[#69d4f4]/10 bg-[#69d4f4]/[0.03] px-3 py-2">
            <SparkIcon className="h-3 w-3 text-[#69d4f4] shrink-0" />
            <span className="text-[9px] text-[#8e9196]">Gemini:</span>
            <span className="text-[10px] text-[#c4c6cc] truncate">Cấu trúc vũ trụ có tính toán học.</span>
          </div>
        </div>
      </div>

      {/* Status bar */}
      <div className="flex items-center gap-4 border-t border-white/[0.06] bg-[#0d1b2a]/60 px-4 py-2">
        <span className="font-mono text-[9px] text-[#8e9196]">Dòng 1/847</span>
        <div className="flex-1 h-1 rounded-full bg-white/[0.05]">
          <div className="h-1 w-[23%] rounded-full bg-[#69d4f4]" />
        </div>
        <span className="font-mono text-[9px] text-[#69d4f4]">23% hoàn thành</span>
      </div>
    </div>
  );
}
