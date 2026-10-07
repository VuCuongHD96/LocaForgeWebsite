"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { EditorHeader } from "@/app/_components/editor-header";
import { ProjectInfoCard } from "./_components/project-info-card";
import { CopyrightNotice } from "./_components/copyright-notice";
import { FileZone } from "./_components/file-zone";
import { InfoStrip } from "./_components/info-strip";
import { JobProgressCard } from "./_components/job-progress-card";
import { parseSubtitle } from "@/lib/api/subtitle";
import { getJob } from "@/lib/api/jobs";

import { type Phase, type Errors, type JobPhase, REQUIRED_MSG } from "./_components/types";

export default function UploadPage() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [projectName, setProjectName] = useState("");
  const [sourceLang, setSourceLang] = useState("en");
  const [targetLang, setTargetLang] = useState("vi");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<Errors>({});

  const [jobPhase, setJobPhase] = useState<JobPhase>("idle");
  const [progress, setProgress] = useState(0);
  const [total, setTotal] = useState(0);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const router = useRouter();

  const clearError = useCallback((field: keyof Errors) => {
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  }, []);

  const handleFileSelect = useCallback((file: File) => {
    setSelectedFile(file);
    clearError("file");
  }, [clearError]);

  const handleFileClear = useCallback(() => {
    setSelectedFile(null);
  }, []);

  const resetJob = useCallback(() => {
    setJobPhase("idle");
    setProgress(0);
    setTotal(0);
    setErrorMsg(null);
  }, []);

  const handleSubmit = useCallback(async () => {
    const errs: Errors = {};
    if (!projectName.trim()) errs.projectName = REQUIRED_MSG;
    if (!sourceLang) errs.sourceLang = REQUIRED_MSG;
    if (!targetLang) errs.targetLang = REQUIRED_MSG;
    if (!selectedFile) errs.file = REQUIRED_MSG;

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setJobPhase("parsing");
    setProgress(0);
    setTotal(0);
    setErrorMsg(null);

    let parseRes;
    try {
      parseRes = await parseSubtitle(selectedFile!, {
        sourceLang,
        targetLang,
        workspace: projectName,
      });
    } catch (err) {
      console.error(err);
      setJobPhase("failed");
      setErrorMsg("Không thể phân tích file, vui lòng thử lại.");
      return;
    }

    setTotal(parseRes.totalLines);
    setJobPhase("running");

    let receivedRealtime = false;
    let pollTimer: ReturnType<typeof setInterval> | null = null;

    const applyRow = (row: {
      status: string; progress: number; total: number; error: string | null;
    }) => {
      setProgress(row.progress);
      setTotal(row.total);
      if (row.status === "done") finish("done", row);
      else if (row.status === "failed") finish("failed", row);
    };

    const finish = (status: "done" | "failed", row?: { error?: string | null }) => {
      if (pollTimer) clearInterval(pollTimer);

      if (status === "done") {
        setJobPhase("done");
        router.push(`/project/${parseRes.fileId}`);
      } else {
        setJobPhase("failed");
        setErrorMsg(row?.error ?? "Dịch thất bại, vui lòng thử lại.");
      }
    };



    // Fallback polling sau 5s nếu realtime im lặng
    setTimeout(() => {
      if (receivedRealtime) return;
      pollTimer = setInterval(async () => {
        try {
          const job = await getJob(parseRes.jobId);
          applyRow(job);
        } catch (err) {
          console.error("poll getJob error", err);
        }
      }, 2000);
    }, 5000);
  }, [projectName, sourceLang, targetLang, selectedFile, router]);

  const isBusy = jobPhase === "parsing" || jobPhase === "running";

  return (
    <div className="min-h-screen bg-background">
      <EditorHeader userInitial="E" showBreadcrumb={false} />

      <main className="mx-auto max-w-2xl px-6 py-14">

        <div className="mb-10 flex flex-col items-center gap-3 text-center">
          <h1 className="text-xl font-bold tracking-tight text-foreground">Tạo dự án</h1>
        </div>

        <CopyrightNotice />

        <ProjectInfoCard
          projectName={projectName}
          onProjectNameChange={setProjectName}
          sourceLang={sourceLang}
          onSourceLangChange={setSourceLang}
          targetLang={targetLang}
          onTargetLangChange={setTargetLang}
          errors={errors}
          clearError={clearError}
        />

        <FileZone
          phase={phase}
          setPhase={setPhase}
          selectedFile={selectedFile}
          onFileSelect={handleFileSelect}
          onFileClear={handleFileClear}
          errors={errors}
        />

        <InfoStrip />

        <Button
          size="lg"
          className="mt-5 w-full cursor-pointer bg-primary font-semibold text-primary-foreground hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
          onClick={handleSubmit}
          disabled={isBusy}
        >
          Tạo dự án
        </Button>

        {jobPhase !== "idle" && (
          <JobProgressCard
            phase={jobPhase}
            progress={progress}
            total={total}
            error={errorMsg}
            onRetry={resetJob}
          />
        )}
      </main>
    </div>
  );
}
