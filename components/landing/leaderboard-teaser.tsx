import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckIcon, ArrowRightIcon, TrophyIcon } from "./icons";

const topUsers = [
  { rank: 1, name: "dragon_sub", score: "24,891", badge: "Kim cương", badgeColor: "var(--loca-diamond)" },
  { rank: 2, name: "starlight_vi", score: "19,204", badge: "Kim cương", badgeColor: "var(--loca-diamond)" },
  { rank: 3, name: "nguyen_translate", score: "15,678", badge: "Vàng", badgeColor: "var(--loca-gold)" },
  { rank: 4, name: "phanthu_sub", score: "12,445", badge: "Vàng", badgeColor: "var(--loca-gold)" },
  { rank: 5, name: "hanoitranslator", score: "9,832", badge: "Bạc", badgeColor: "var(--loca-silver)" },
];

const rankColors = ["var(--loca-gold)", "var(--loca-silver)", "var(--loca-bronze)"];

export function LeaderboardTeaser() {
  return (
    <section id="leaderboard" className="py-24">
      <div className="mx-auto max-w-[1440px] px-8">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          <div>
            <Badge className="mb-4 rounded-full border-[var(--loca-gold)]/20 bg-[var(--loca-gold)]/[0.06] px-3 py-1 text-xs font-medium text-[var(--loca-gold)] hover:bg-[var(--loca-gold)]/[0.06]">
              Bảng xếp hạng
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight text-foreground">
              Cạnh tranh, tỏa sáng, được vinh danh
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Mỗi bản dịch được bình chọn giúp bạn leo thang bảng xếp hạng.
              Từ Đồng, Bạc, Vàng đến Kim cương — hành trình đỉnh cao bắt đầu từ đây.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "Điểm tích lũy qua mỗi upvote nhận được",
                "Huy hiệu hạng được hiển thị trên mọi bản dịch",
                "Phần thưởng độc quyền cho top dịch giả mỗi tháng",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--chart-4)]/30 ring-1 ring-[var(--chart-4)]/50">
                    <CheckIcon className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <Button
              className="mt-8 border-[var(--loca-gold)]/20 bg-[var(--loca-gold)]/[0.08] text-[var(--loca-gold)] hover:bg-[var(--loca-gold)]/[0.14]"
              variant="outline"
            >
              Xem bảng xếp hạng đầy đủ
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <Card className="border-border bg-card overflow-hidden">
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <div className="flex items-center gap-2">
                <TrophyIcon className="h-4 w-4 text-[var(--loca-gold)]" />
                <span className="font-semibold text-foreground">Top dịch giả tháng 6</span>
              </div>
              <Badge className="text-[10px] bg-[var(--loca-gold)]/10 text-[var(--loca-gold)] border-[var(--loca-gold)]/20 hover:bg-[var(--loca-gold)]/10">
                Cập nhật hàng giờ
              </Badge>
            </div>
            <CardContent className="p-0">
              {topUsers.map((user, i) => (
                <div key={user.rank}>
                  <div className="flex items-center gap-4 px-5 py-4">
                    <span
                      className="w-5 shrink-0 text-center font-mono text-sm font-bold"
                      style={{ color: i < 3 ? rankColors[i] : "var(--muted-foreground)" }}
                    >
                      {user.rank}
                    </span>
                    <div className="h-8 w-8 rounded-full bg-foreground/[0.04] ring-1 ring-foreground/[0.08] flex items-center justify-center shrink-0">
                      <span className="text-xs font-semibold text-muted-foreground">
                        {user.name[0].toUpperCase()}
                      </span>
                    </div>
                    <p className="flex-1 min-w-0 text-sm font-medium text-foreground truncate">
                      {user.name}
                    </p>
                    <Badge
                      className="shrink-0 text-[10px] h-5 px-2 rounded-full"
                      style={{
                        backgroundColor: user.badgeColor + "14",
                        color: user.badgeColor,
                        borderColor: user.badgeColor + "30",
                      }}
                    >
                      {user.badge}
                    </Badge>
                    <span className="shrink-0 font-mono text-sm font-semibold text-primary">
                      {user.score}
                    </span>
                  </div>
                  {i < topUsers.length - 1 && <Separator className="bg-border" />}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
