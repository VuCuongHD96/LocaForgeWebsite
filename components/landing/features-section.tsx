import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SparkIcon, UsersIcon, TrophyIcon } from "./icons";

const features = [
  { Icon: SparkIcon, title: "AI hỗ trợ thông minh", description: "Tích hợp AI để gợi ý dịch thuật tức thì, giảm công sức và tăng độ chính xác cho mỗi dòng phụ đề.", color: "var(--loca-teal)" },
  { Icon: UsersIcon, title: "Cộng đồng bình chọn", description: "Hệ thống upvote/downvote minh bạch đảm bảo bản dịch chất lượng cao luôn nổi bật, nhờ sức mạnh của cộng đồng.", color: "var(--loca-primary-blue)" },
  { Icon: TrophyIcon, title: "Hệ thống xếp hạng", description: "Tích lũy điểm qua từng bản dịch được bình chọn. Leo thang từ Đồng lên Kim cương và nhận phần thưởng cộng đồng.", color: "var(--loca-gold)" },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-[1440px] px-8">
        <div className="mb-16 text-center">
          <Badge className="mb-4 rounded-full border-primary/20 bg-primary/[0.08] px-3 py-1 text-xs font-medium text-primary hover:bg-primary/[0.08]">
            Tính năng
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight text-foreground">
            Mọi thứ bạn cần để dịch thuật
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Được xây dựng cho dịch giả chuyên nghiệp và cộng đồng nhiệt huyết.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ Icon, title, description, color }) => (
            <Card
              key={title}
              className="group border-border bg-card transition-all hover:border-foreground/10 hover:bg-secondary"
            >
              <CardContent className="p-6">
                <div
                  className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg transition-all group-hover:scale-105"
                  style={{ backgroundColor: color + "14", boxShadow: `0 0 0 1px ${color}26` }}
                >
                  <Icon className="h-5 w-5" style={{ color }} />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
