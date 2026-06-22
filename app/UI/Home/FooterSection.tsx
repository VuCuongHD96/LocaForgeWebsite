import { Separator } from "@/components/ui/separator";
import { SubtitlesIcon, GithubIcon } from "../CommonIcon/IconProps";

/* ------------------------------------------------------------------ */
/*  Footer                                                             */
/* ------------------------------------------------------------------ */

const footerLinks: Record<string, string[]> = {
  "Sản phẩm": ["Tài liệu API", "Tính năng mới", "Lộ trình phát triển"],
  "Hỗ trợ": ["Liên hệ hỗ trợ", "Hướng dẫn cộng đồng", "Báo cáo lỗi"],
  "Pháp lý": ["Điều khoản dịch vụ", "Chính sách bảo mật", "Giấy phép"],
};

export function Footer() {
  return (
    <footer id="footer" className="border-t border-white/[0.06] bg-[#0b1215]">
      <div className="mx-auto max-w-[1440px] px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#69d4f4]/10 ring-1 ring-[#69d4f4]/20">
                <SubtitlesIcon className="h-[18px] w-[18px] text-[#69d4f4]" />
              </div>
              <span className="font-bold text-[#e2e3df]">LocaForge</span>
            </div>
            <p className="text-sm text-[#8e9196] leading-relaxed mb-4">
              Precision in every frame.
            </p>
            <p className="text-xs text-[#8e9196]/60">
              Được xây dựng cho cộng đồng dịch thuật Việt Nam.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, items]) => (
            <div key={category}>
              <p className="mb-4 text-sm font-semibold text-[#e2e3df]">{category}</p>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-[#8e9196] transition-colors hover:text-[#c4c6cc]">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-10 bg-white/[0.05]" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-[#8e9196]">
            © 2026 LocaForge. Mọi quyền được bảo lưu.
          </p>
          <a href="#" className="text-[#8e9196] transition-colors hover:text-[#c4c6cc]">
            <GithubIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
