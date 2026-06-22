import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRightIcon } from "../CommonIcon/IconProps";
import { EditorPreview } from "./EditorPreview";

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#69d4f4]/[0.04] blur-3xl" />
        <div className="absolute top-1/3 -right-20 h-[400px] w-[400px] rounded-full bg-[#bac8dc]/[0.03] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Text */}
          <div className="max-w-xl">
            <Badge className="mb-6 rounded-full border-[#69d4f4]/20 bg-[#69d4f4]/[0.08] px-3 py-1 text-xs font-medium text-[#69d4f4] hover:bg-[#69d4f4]/[0.08]">
              Nền tảng dịch thuật cộng đồng
            </Badge>

            <h1 className="mb-6 text-[2.5rem] font-bold leading-[1.15] tracking-[-0.02em] text-[#e2e3df] lg:text-5xl">
              Dịch thuật phụ đề{" "}
              <span className="text-[#69d4f4]">cùng cộng đồng</span>
            </h1>

            <p className="mb-8 text-lg leading-relaxed text-[#c4c6cc]">
              Nền tảng chuyên nghiệp kết hợp AI với hệ thống bình chọn thông minh,
              giúp quá trình dịch thuật nhanh hơn, chính xác hơn và minh bạch hơn.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link href="/upload">
                <Button
                  size="lg"
                  className="bg-[#69d4f4] text-[#003642] hover:bg-[#69d4f4]/90 font-semibold px-6"
                >
                  Bắt đầu ngay
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white/[0.12] bg-transparent text-[#e2e3df] hover:bg-white/[0.05] hover:border-white/20 px-6"
              >
                Tìm hiểu thêm
              </Button>
            </div>
          </div>

          {/* Editor mockup */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-[#69d4f4]/[0.03] blur-xl" />
            <EditorPreview />
          </div>
        </div>
      </div>
    </section>
  );
}
