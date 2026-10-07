import { Button } from "@/components/ui/button";
import { CheckCircleIcon, ArrowRightIcon } from "./icons";

interface Props {
  fileName: string;
  onGoToEditor: () => void;
}

export function UploadDone({ fileName, onGoToEditor }: Props) {
  return (
    <div className="rounded-2xl border border-[var(--chart-4)]/30 bg-[var(--chart-4)]/[0.05] p-12 text-center">
      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-primary/25 bg-primary/[0.08]">
        <CheckCircleIcon className="h-10 w-10 text-primary" />
      </div>
      <h2 className="mb-2 text-xl font-semibold text-foreground">Tải lên thành công!</h2>
      <p className="mb-1 font-medium text-muted-foreground">{fileName}</p>
      <p className="mb-8 text-sm text-muted-foreground/70">
        847 dòng phụ đề đã được phân tích và sẵn sàng để dịch
      </p>
      <Button
        size="lg"
        className="cursor-pointer bg-primary px-8 font-semibold text-primary-foreground hover:bg-primary/90"
        onClick={onGoToEditor}
      >
        Vào trình biên tập
        <ArrowRightIcon className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}
