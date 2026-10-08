import { AlertTriangleIcon } from "./icons";

export function CopyrightNotice() {
  return (
    <div className="mb-4 flex items-start gap-3 rounded-xl border border-[var(--loca-gold)]/20 bg-[var(--loca-gold)]/[0.06] p-4">
      <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[var(--loca-gold)]/10">
        <AlertTriangleIcon className="h-4 w-4 text-[var(--loca-gold)]" />
      </div>
      <p className="text-xs leading-relaxed text-[var(--loca-gold)]/90">
        <span className="font-semibold text-[var(--loca-gold)]">Lưu ý bản quyền: </span>
        Bạn chịu trách nhiệm đảm bảo file phụ đề tải lên không vi phạm quyền sở hữu trí tuệ của bên thứ ba.
        Nội dung có dấu hiệu vi phạm sẽ bị gỡ bỏ ngay khi nhận được yêu cầu hợp lệ từ chủ sở hữu.
      </p>
    </div>
  );
}
