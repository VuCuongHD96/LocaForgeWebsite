import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SparkIcon, UsersIcon, TrophyIcon, ZapIcon, ShieldIcon, SubtitlesIcon } from "../CommonIcon/IconProps";

/* ------------------------------------------------------------------ */
/*  Features                                                           */
/* ------------------------------------------------------------------ */

const features = [
  { Icon: SparkIcon, title: "AI hỗ trợ thông minh", description: "Tích hợp Gemini & DeepL để gợi ý dịch thuật tức thì, giảm công sức và tăng độ chính xác cho mỗi dòng phụ đề.", color: "#69d4f4" },
  { Icon: UsersIcon, title: "Cộng đồng bình chọn", description: "Hệ thống upvote/downvote minh bạch đảm bảo bản dịch chất lượng cao luôn nổi bật, nhờ sức mạnh của cộng đồng.", color: "#bac8dc" },
  { Icon: TrophyIcon, title: "Hệ thống xếp hạng", description: "Tích lũy điểm qua từng bản dịch được bình chọn. Leo thang từ Đồng lên Kim cương và nhận phần thưởng cộng đồng.", color: "#ffba27" },
  { Icon: ZapIcon, title: "Trình soạn thảo mạnh mẽ", description: "Giao diện split-view đồng bộ timestamp, xem trước video thời gian thực, và phím tắt chuyên nghiệp.", color: "#69d4f4" },
  { Icon: ShieldIcon, title: "Kiểm soát chất lượng", description: "Quản trị viên có toàn quyền xét duyệt, chỉnh sửa và phát hành. Lịch sử thay đổi rõ ràng cho mọi dòng.", color: "#bac8dc" },
  { Icon: SubtitlesIcon, title: "Đa định dạng", description: "Hỗ trợ nhập và xuất SRT, VTT, ASS, SBV. Tương thích hoàn toàn với YouTube, Netflix, và mọi nền tảng video.", color: "#ffba27" },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-[#0d1b2a]/30">
      <div className="mx-auto max-w-[1440px] px-8">
        <div className="mb-16 text-center">
          <Badge className="mb-4 rounded-full border-[#69d4f4]/20 bg-[#69d4f4]/[0.08] px-3 py-1 text-xs font-medium text-[#69d4f4] hover:bg-[#69d4f4]/[0.08]">
            Tính năng
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight text-[#e2e3df]">
            Mọi thứ bạn cần để dịch thuật
          </h2>
          <p className="mt-4 text-lg text-[#c4c6cc] max-w-xl mx-auto">
            Được xây dựng cho dịch giả chuyên nghiệp và cộng đồng nhiệt huyết.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ Icon, title, description, color }) => (
            <Card
              key={title}
              className="group border-white/[0.06] bg-[#1e201e] transition-all hover:border-white/10 hover:bg-[#282b28]"
            >
              <CardContent className="p-6">
                <div
                  className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg transition-all group-hover:scale-105"
                  style={{ backgroundColor: color + "14", boxShadow: `0 0 0 1px ${color}26` }}
                >
                  <Icon className="h-5 w-5" style={{ color }} />
                </div>
                <h3 className="mb-2 font-semibold text-[#e2e3df]">{title}</h3>
                <p className="text-sm leading-relaxed text-[#c4c6cc]">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
