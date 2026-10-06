import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "./icons";

export function CTASection() {
  return (
    <section className="py-24 bg-muted/40">
      <div className="mx-auto max-w-[1440px] px-8">
        <div className="relative overflow-hidden rounded-2xl border border-primary/10 bg-card p-12 text-center lg:p-20">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.05] blur-3xl" />
          </div>

          <div className="relative">
            <Badge className="mb-6 rounded-full border-primary/20 bg-primary/[0.08] px-4 py-1.5 text-sm font-medium text-primary hover:bg-primary/[0.08]">
              Tham gia miễn phí
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
              Sẵn sàng nâng tầm phụ đề{" "}
              <span className="text-primary">của bạn?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Tham gia cùng hàng nghìn dịch giả chuyên nghiệp và người yêu ngôn ngữ đang
              xây dựng thư viện phụ đề chất lượng cao cho cộng đồng Việt Nam.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/files">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8"
                >
                  Tạo dự án mới
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
