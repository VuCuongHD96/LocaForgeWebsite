import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function UploadPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-background text-foreground">
      <h1 className="text-2xl font-bold mb-4">Upload Project</h1>
      <p className="text-muted-foreground mb-8">Trang này đang được xây dựng.</p>
      <Link href="/ui/files">
        <Button>Quay lại danh sách dự án</Button>
      </Link>
    </div>
  );
}
