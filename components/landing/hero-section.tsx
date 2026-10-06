import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "./icons";
import { EditorPreview } from "./editor-preview";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/[0.04] blur-3xl" />
        <div className="absolute top-1/3 -right-20 h-[400px] w-[400px] rounded-full bg-[var(--loca-primary-blue)]/[0.03] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Text */}
          <div className="max-w-xl">
            <Badge className="mb-6 rounded-full border-primary/20 bg-primary/[0.08] px-3 py-1 text-xs font-medium text-primary hover:bg-primary/[0.08]">
              Nền tảng dịch thuật cộng đồng
            </Badge>

            <h1 className="mb-6 text-[2.5rem] font-bold leading-[1.15] tracking-[-0.02em] text-foreground lg:text-5xl">
              Dịch thuật phụ đề{" "} <br />
              <span className="text-primary">cùng cộng đồng</span>
            </h1>

            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              Nền tảng chuyên nghiệp kết hợp AI với hệ thống bình chọn thông minh,
              giúp quá trình dịch thuật nhanh hơn, chính xác hơn và minh bạch hơn.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link href="/files">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6"
                >
                  Bắt đầu ngay
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Editor mockup */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-primary/[0.03] blur-xl" />
            <EditorPreview />
          </div>
        </div>
      </div>
    </section>
  );
}
