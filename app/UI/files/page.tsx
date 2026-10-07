"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { PlusIcon, SearchIcon, FolderOpenIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { EditorHeader } from "@/app/_components/editor-header";
import { SrtFileCard, SrtFileCardSkeleton, type SrtFileRow } from "./_components/file-card";
// import { getSrtFiles } from "@/lib/supabase/project";
// import type { SrtFileRow } from "@/lib/types";

const Input = ({ className, ...props }: any) => <input className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`} {...props} />;

const getSrtFiles = async (): Promise<SrtFileRow[]> => {
  return [];
};

export default function FilesPage() {
  const [files, setFiles] = useState<SrtFileRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const rows = await getSrtFiles();
        if (!cancelled) setFiles(rows);
      } catch (err) {
        console.error("load srt_files error", err);
        if (!cancelled) setError("Không thể tải danh sách tệp.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const filtered = files.filter((f) => {
    if (!search) return true;
    const q = search.toLowerCase();
    return f.title.toLowerCase().includes(q) || (f.workspace ?? "").toLowerCase().includes(q);
  });

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b p-4">
        <div className="font-semibold">Editor Header (Temp)</div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-xl font-bold tracking-tight text-foreground">Dự án phụ đề</h1>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground/50" />
              <Input
                placeholder="Tìm theo tên tệp hoặc dự án..."
                value={search}
                onChange={(e: any) => setSearch(e.target.value)}
                className="h-9 w-64 pl-9"
              />
            </div>
            <Link href="/upload">
              <Button className="cursor-pointer gap-1.5 bg-primary font-semibold text-primary-foreground hover:bg-primary/90">
                <PlusIcon className="h-4 w-4" />
                Tạo dự án
              </Button>
            </Link>
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <SrtFileCardSkeleton key={i} />
            ))}
          </div>
        ) : error ? (
          <div className="flex flex-col items-center gap-2 rounded-xl border border-destructive/20 bg-destructive/[0.06] py-16 text-center">
            <p className="text-sm text-destructive">{error}</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center gap-3 rounded-xl border border-border bg-muted/40 py-20 text-center">
            <FolderOpenIcon className="h-8 w-8 text-muted-foreground/50" />
            <p className="text-sm text-muted-foreground">
              {search ? "Không tìm thấy tệp phù hợp" : "Chưa có dự án phụ đề nào"}
            </p>
            {!search && (
              <Link href="/upload">
                <Button
                  size="sm"
                  className="mt-1 cursor-pointer gap-1.5 bg-primary font-semibold text-primary-foreground hover:bg-primary/90"
                >
                  <PlusIcon className="h-3.5 w-3.5" />
                  Tạo dự án
                </Button>
              </Link>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((file) => (
              <SrtFileCard key={file.id} file={file} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
