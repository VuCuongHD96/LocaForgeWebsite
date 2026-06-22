import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { UploadIcon, VoteIcon, ExportIcon } from "../CommonIcon/IconProps";

/* ------------------------------------------------------------------ */
/*  How It Works                                                       */
/* ------------------------------------------------------------------ */

const steps = [
  {
    Icon: UploadIcon,
    step: "01",
    title: "Tải lên dự án",
    description:
      "Tải lên tệp video hoặc phụ đề (.srt, .vtt). AI tự động phân đoạn và chuẩn bị bố cục dịch thuật.",
    color: "#69d4f4",
  },
  {
    Icon: VoteIcon,
    step: "02",
    title: "Dịch & Bình chọn",
    description:
      "Cộng đồng đề xuất các bản dịch. Hệ thống upvote/downvote tự động xác định bản dịch tốt nhất.",
    color: "#bac8dc",
  },
  {
    Icon: ExportIcon,
    step: "03",
    title: "Xuất & Phát hành",
    description:
      "Quản trị viên duyệt và phát hành tệp phụ đề hoàn chỉnh, sẵn sàng để nhúng vào video.",
    color: "#ffba27",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works">
      <div className="mx-auto max-w-[1440px] px-8">
        <div className="mb-16 text-center">
          <Badge className="mb-4 rounded-full border-[#bac8dc]/20 bg-[#bac8dc]/[0.06] px-3 py-1 text-xs font-medium text-[#bac8dc] hover:bg-[#bac8dc]/[0.06]">
            Quy trình
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight text-[#e2e3df]">
            Quy trình dịch thuật tinh gọn
          </h2>
          <p className="mt-4 text-lg text-[#c4c6cc] max-w-xl mx-auto">
            Ba bước đơn giản từ tệp thô đến phụ đề chất lượng cao, sẵn sàng phát hành.
          </p>
        </div>

        <div className="relative grid gap-8 lg:grid-cols-3">
          {steps.map(({ Icon, step, title, description, color }) => (
            <Card
              key={step}
              className="border-white/[0.06] bg-[#1e201e] transition-all hover:border-white/10 hover:bg-[#282b28]"
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
                <h3 className="mb-3 text-xl font-semibold text-[#e2e3df]">{title}</h3>
                <p className="text-[#c4c6cc] leading-relaxed">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
