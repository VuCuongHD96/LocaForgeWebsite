import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { UploadIcon, VoteIcon, ExportIcon } from "./icons";

const steps = [
  {
    Icon: UploadIcon,
    step: "01",
    title: "Tải lên dự án",
    description:
      "Tải lên tệp video hoặc phụ đề (.srt, .vtt). AI tự động phân đoạn và chuẩn bị bố cục dịch thuật.",
    color: "var(--loca-teal)",
  },
  {
    Icon: VoteIcon,
    step: "02",
    title: "Dịch & Bình chọn",
    description:
      "Cộng đồng đề xuất các bản dịch. Hệ thống upvote/downvote tự động xác định bản dịch tốt nhất.",
    color: "var(--loca-primary-blue)",
  },
  {
    Icon: ExportIcon,
    step: "03",
    title: "Xuất & Phát hành",
    description:
      "Quản trị viên duyệt và phát hành tệp phụ đề hoàn chỉnh, sẵn sàng để nhúng vào video.",
    color: "var(--loca-gold)",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="pb-[4rem]">
      <div className="mx-auto max-w-[1440px] px-8">
        <div className="mb-16 text-center">
          <Badge className="mb-4 rounded-full border-[var(--loca-primary-blue)]/20 bg-[var(--loca-primary-blue)]/[0.06] px-3 py-1 text-xs font-medium text-[var(--loca-primary-blue)] hover:bg-[var(--loca-primary-blue)]/[0.06]">
            Quy trình
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight text-foreground">
            Quy trình dịch thuật tinh gọn
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Ba bước đơn giản từ tệp thô đến phụ đề chất lượng cao, sẵn sàng phát hành.
          </p>
        </div>

        <div className="relative grid gap-8 lg:grid-cols-3">
          {steps.map(({ Icon, step, title, description, color }) => (
            <Card
              key={step}
              className="border-border bg-card transition-all hover:border-foreground/10 hover:bg-secondary"
            >
              <CardContent className="p-8">
                <div
                  className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl"
                  style={{ backgroundColor: color + "14", boxShadow: `0 0 0 1px ${color}26` }}
                >
                  <Icon className="h-7 w-7" style={{ color }} />
                </div>
                <span className="mb-2 block font-mono text-xs font-semibold tracking-widest" style={{ color }}>
                  {step}
                </span>
                <h3 className="mb-3 text-xl font-semibold text-foreground">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
