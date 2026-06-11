// app/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tên ứng dụng",
  description: "...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
