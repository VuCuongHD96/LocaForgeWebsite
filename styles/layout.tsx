import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: "LocaForge – Dịch thuật phụ đề cùng cộng đồng",
  description:
    "Nền tảng dịch thuật phụ đề cộng đồng chuyên nghiệp, kết hợp AI với hệ thống bình chọn thông minh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${inter.variable} dark scroll-smooth`}
      trancy-version="7.8.7"
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
