import { useRef, useCallback, useState } from "react";
import { Label } from "@/components/ui/label";
import { CloudUploadIcon, FileTextIcon, XIcon } from "./icons";
import { FieldError, Req } from "./field-error";
import { formatFileSize, type Phase, type Errors } from "./types";

const MAX_SIZE = 300 * 1024;

interface Props {
  phase: Phase;
  setPhase: (p: Phase) => void;
  selectedFile: File | null;
  onFileSelect: (file: File) => void;
  onFileClear: () => void;
  errors: Errors;
}

export function FileZone({ phase, setPhase, selectedFile, onFileSelect, onFileClear, errors }: Props) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [validationError, setValidationError] = useState<string | undefined>();
  const isDragging = phase === "dragging";

  const validateAndSelect = useCallback(
    (file: File) => {
      if (!file.name.toLowerCase().endsWith(".srt")) {
        setValidationError("Chỉ hỗ trợ file .srt");
        return;
      }
      if (file.size > MAX_SIZE) {
        setValidationError("File vượt quá 300 KB");
        return;
      }
      setValidationError(undefined);
      onFileSelect(file);
    },
    [onFileSelect]
  );

  const onDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setPhase("idle");
      const file = e.dataTransfer.files[0];
      if (file) validateAndSelect(file);
    },
    [setPhase, validateAndSelect]
  );

  const onFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) validateAndSelect(file);
      e.target.value = "";
    },
    [validateAndSelect]
  );

  const handleClear = useCallback(() => {
    setValidationError(undefined);
    onFileClear();
  }, [onFileClear]);

  const displayError = !selectedFile ? (validationError ?? errors.file) : undefined;
  const hasError = !!displayError;

  return (
    <div className="mb-5">
      <Label className="mb-1.5 flex items-center text-xs font-medium text-muted-foreground/70">
        File phụ đề<Req />
      </Label>

      {selectedFile ? (
        <FilePreview file={selectedFile} onClear={handleClear} />
      ) : (
        <DropZone
          isDragging={isDragging}
          hasError={hasError}
          onDragOver={(e) => { e.preventDefault(); setPhase("dragging"); }}
          onDragLeave={() => setPhase("idle")}
          onDrop={onDrop}
          onClick={() => fileRef.current?.click()}
        />
      )}

      <FieldError msg={displayError} />

      <input
        ref={fileRef}
        type="file"
        accept=".srt"
        className="hidden"
        onChange={onFileChange}
        aria-hidden="true"
      />
    </div>
  );
}

function FilePreview({ file, onClear }: { file: File; onClear: () => void }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-primary/20 bg-muted/60 p-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/[0.08]">
        <FileTextIcon className="h-5 w-5 text-primary" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-foreground">{file.name}</p>
        <p className="text-xs text-muted-foreground/70">{formatFileSize(file)}</p>
      </div>
      <button
        type="button"
        onClick={onClear}
        aria-label="Xóa file đã chọn"
        className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-md text-muted-foreground/70 transition-colors duration-150 hover:bg-accent hover:text-foreground"
      >
        <XIcon className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}

interface DropZoneProps {
  isDragging: boolean;
  hasError: boolean;
  onDragOver: (e: React.DragEvent) => void;
  onDragLeave: () => void;
  onDrop: (e: React.DragEvent) => void;
  onClick: () => void;
}

function DropZone({ isDragging, hasError, onDragOver, onDragLeave, onDrop, onClick }: DropZoneProps) {
  return (
    <div
      role="button"
      tabIndex={0}
      aria-label="Khu vực tải lên — nhấn hoặc kéo thả file phụ đề"
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      onClick={onClick}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onClick(); }}
      className={`cursor-pointer select-none rounded-xl border-2 border-dashed p-10 text-center outline-none transition-all duration-200 focus-visible:ring-2 focus-visible:ring-primary/50 ${
        hasError
          ? "border-destructive/40 bg-destructive/[0.03] hover:border-destructive/50"
          : isDragging
            ? "scale-[1.01] border-primary/60 bg-primary/[0.05]"
            : "border-border bg-card/40 hover:border-primary/30 hover:bg-card/70"
      }`}
    >
      <div className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border transition-all duration-200 ${
        isDragging ? "border-primary/40 bg-primary/15" : "border-primary/20 bg-primary/[0.08]"
      }`}>
        <CloudUploadIcon className={`h-7 w-7 text-primary transition-transform duration-200 ${isDragging ? "scale-110" : ""}`} />
      </div>
      <p className="mb-1 text-sm font-medium text-muted-foreground">
        {isDragging ? "Thả file vào đây" : "Kéo & thả hoặc nhấn để chọn file"}
      </p>
      <p className="text-xs text-muted-foreground/70">
        Chỉ hỗ trợ SRT&nbsp;&nbsp;·&nbsp;&nbsp;Tối đa 300 KB
      </p>
    </div>
  );
}
