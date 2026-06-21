import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRightIcon, GithubIcon } from "../CommonIcon/IconProps";

/* ------------------------------------------------------------------ */
/*  CTA                                                                */
/* ------------------------------------------------------------------ */

export function CTASection() {
  return (
    <section className="py-24 bg-[#0d1b2a]/50">
      <div className="mx-auto max-w-[1440px] px-8">
        <div className="relative overflow-hidden rounded-2xl border border-[#69d4f4]/10 bg-[#1e201e] p-12 text-center lg:p-20">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#69d4f4]/[0.05] blur-3xl" />
          </div>

          <div className="relative">
            <Badge className="mb-6 rounded-full border-[#69d4f4]/20 bg-[#69d4f4]/[0.08] px-4 py-1.5 text-sm font-medium text-[#69d4f4] hover:bg-[#69d4f4]/[0.08]">
              Tham gia miễn phí
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight text-[#e2e3df] lg:text-5xl">
              Sẵn sàng nâng tầm phụ đề{" "}
              <span className="text-[#69d4f4]">của bạn?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#c4c6cc]">
              Tham gia cùng hàng nghìn dịch giả chuyên nghiệp và người yêu ngôn ngữ đang
              xây dựng thư viện phụ đề chất lượng cao cho cộng đồng Việt Nam.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/upload">
                <Button
                  size="lg"
                  className="bg-[#69d4f4] text-[#003642] hover:bg-[#69d4f4]/90 font-semibold px-8"
                >
                  Tạo dự án mới
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white/[0.12] bg-transparent text-[#e2e3df] hover:bg-white/[0.05] px-8"
              >
                <GithubIcon className="mr-2 h-4 w-4" />
                Xem trên GitHub
              </Button>
            </div>
            <p className="mt-6 text-sm text-[#8e9196]">
              Miễn phí vĩnh viễn cho dự án cộng đồng. Không cần thẻ tín dụng.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
