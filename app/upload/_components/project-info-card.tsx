import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FieldError, Req } from "./field-error";
import { LANGS, REQUIRED_MSG, type Errors } from "./types";

interface Props {
  projectName: string;
  onProjectNameChange: (v: string) => void;
  sourceLang: string;
  onSourceLangChange: (v: string) => void;
  targetLang: string;
  onTargetLangChange: (v: string) => void;
  errors: Errors;
  clearError: (field: keyof Errors) => void;
}

export function ProjectInfoCard({
  projectName,
  onProjectNameChange,
  sourceLang,
  onSourceLangChange,
  targetLang,
  onTargetLangChange,
  errors,
  clearError,
}: Props) {
  return (
    <div className="mb-4 rounded-xl border border-border bg-muted/60 p-5">
      <div className="mb-4">
        <Label htmlFor="project-name" className="mb-1.5 flex items-center text-xs font-medium text-muted-foreground/70">
          Tên dự án<Req />
        </Label>
        <Input
          id="project-name"
          placeholder="Ví dụ: V-Drama Season 1"
          value={projectName}
          aria-invalid={!!errors.projectName}
          onChange={(e) => {
            onProjectNameChange(e.target.value);
            if (e.target.value.trim()) clearError("projectName");
          }}
          className="h-9 w-full"
        />
        <FieldError msg={errors.projectName} />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <LangSelect
          label="Ngôn ngữ gốc"
          value={sourceLang}
          error={errors.sourceLang}
          onChange={(v) => { onSourceLangChange(v); clearError("sourceLang"); }}
        />
        <LangSelect
          label="Ngôn ngữ dịch"
          value={targetLang}
          error={errors.targetLang}
          onChange={(v) => { onTargetLangChange(v); clearError("targetLang"); }}
        />
      </div>
    </div>
  );
}

interface LangSelectProps {
  label: string;
  value: string;
  error?: string;
  onChange: (v: string) => void;
}

function LangSelect({ label, value, error, onChange }: LangSelectProps) {
  return (
    <div>
      <Label className="mb-1.5 flex items-center text-xs font-medium text-muted-foreground/70">
        {label}<Req />
      </Label>
      <Select value={value} onValueChange={(v) => { if (v) onChange(v); }}>
        <SelectTrigger
          className={`h-9 w-full ${error ? "border-destructive" : ""}`}
        >
          <SelectValue>{LANGS.find((l) => l.value === value)?.label}</SelectValue>
        </SelectTrigger>
        <SelectContent>
          {LANGS.map((l) => (
            <SelectItem key={l.value} value={l.value}>{l.label}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <FieldError msg={error} />
    </div>
  );
}
