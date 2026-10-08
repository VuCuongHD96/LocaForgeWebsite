import { ZapIcon, ExportIcon, SparkIcon } from "./icons";

const STATS = [
  { Icon: ZapIcon, label: "Tốc độ xử lý", value: "< 30 giây", color: "var(--chart-1)" },
  { Icon: ExportIcon, label: "Định dạng xuất", value: "SRT", color: "var(--chart-2)" },
  { Icon: SparkIcon, label: "AI hỗ trợ", value: "Deepseek v4", color: "var(--loca-gold)" },
] as const;

export function InfoStrip() {
  return (
    <div className="mt-5 grid grid-cols-3 gap-3">
      {STATS.map(({ Icon, label, value, color }) => (
        <div key={label} className="rounded-xl border border-border bg-card/50 p-4 text-center">
          <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-lg" style={{ backgroundColor: `color-mix(in srgb, ${color} 18%, transparent)` }}>
            <Icon className="h-4 w-4" style={{ color } as React.CSSProperties} />
          </div>
          <p className="text-sm font-semibold text-foreground">{value}</p>
          <p className="mt-0.5 text-xs text-muted-foreground/70">{label}</p>
        </div>
      ))}
    </div>
  );
}
