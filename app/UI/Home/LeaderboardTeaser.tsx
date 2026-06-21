import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

/* ------------------------------------------------------------------ */
/*  Leaderboard Teaser                                                 */
/* ------------------------------------------------------------------ */

const topUsers = [
  { rank: 1, name: "dragon_sub", score: "24,891", badge: "Kim cương", badgeColor: "#bde0fe" },
  { rank: 2, name: "starlight_vi", score: "19,204", badge: "Kim cương", badgeColor: "#bde0fe" },
  { rank: 3, name: "nguyen_translate", score: "15,672", badge: "Vàng", badgeColor: "#ffba27" },
  { rank: 4, name: "srt_master", score: "11,340", badge: "Vàng", badgeColor: "#ffba27" },
  { rank: 5, name: "le_subber", score: "8,912", badge: "Bạc", badgeColor: "#8e9aaf" },
];

const rankColors = ["#ffba27", "#8e9aaf", "#b08968"];

export function LeaderboardTeaser() {
  return (
    <section id="leaderboard" className="py-24">
      <div className="mx-auto max-w-[1440px] px-8">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          <div>
            <Badge className="mb-4 rounded-full border-[#ffba27]/20 bg-[#ffba27]/[0.06] px-3 py-1 text-xs font-medium text-[#ffba27] hover:bg-[#ffba27]/[0.06]">
              Bảng xếp hạng
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight text-[#e2e3df]">
              Cạnh tranh, tỏa sáng, được vinh danh
            </h2>
            <p className="mt-4 text-lg text-[#c4c6cc] leading-relaxed">
              Mỗi bản dịch được bình chọn giúp bạn leo thang bảng xếp hạng.
              Từ Đồng, Bạc, Vàng đến Kim cương — hành trình đỉnh cao bắt đầu từ đây.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { label: "Điểm thưởng", value: "2x" },
                { label: "Kim cương", value: "142" },
                { label: "Dự án VIP", value: "38" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-white/[0.06] bg-[#1e201e] p-4 text-center"
                >
                  <p className="text-2xl font-bold text-[#69d4f4]">{item.value}</p>
                  <p className="mt-1 text-xs text-[#8e9196]">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <Card className="border-white/[0.06] bg-[#1e201e]">
            <CardContent className="p-6">
              <div className="space-y-2">
                {topUsers.map((user, i) => (
                  <div key={user.name}>
                    <div className="flex items-center gap-4">
                      <span
                        className="flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold"
                        style={{
                          backgroundColor: (rankColors[i] ?? "#8e9196") + "14",
                          color: rankColors[i] ?? "#8e9196",
                        }}
                      >
                        {user.rank}
                      </span>
                      <p className="flex-1 min-w-0 text-sm font-medium text-[#e2e3df] truncate">
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
                      <span className="shrink-0 font-mono text-sm font-semibold text-[#69d4f4]">
                        {user.score}
                      </span>
                    </div>
                    {i < topUsers.length - 1 && <Separator className="bg-white/[0.04]" />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
