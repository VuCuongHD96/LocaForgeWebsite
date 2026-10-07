import type { Metadata } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "@/app/_components/theme-provider";

export const metadata: Metadata = {
  title: "LocaForge - Dịch thuật phụ đề cùng cộng đồng",
  description:
    "Nền tảng dịch thuật phụ đề chuyên nghiệp kết hợp AI với hệ thống bình chọn thông minh.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
