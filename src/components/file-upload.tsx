"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Upload, X, FileText, Video as VideoIcon, Image as ImageIcon, Loader2, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

interface FileUploadProps {
  onSuccess: (url: string, fileType: string, fileName: string) => void;
  onRemove?: () => void;
  purpose: "lesson-video" | "course-material" | "assignment-submission";
  accept?: string;
  label?: string;
  maxSize?: number; // in MB
  courseId?: string;
  sectionType?: "CORE" | "RECORDED";
}

export function FileUpload({ onSuccess, onRemove, purpose, accept = "*", label = "Upload File", maxSize = 100, courseId, sectionType }: FileUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!isAcceptedFile(file, accept)) {
      toast.error("This file type is not allowed");
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    if (file.size > maxSize * 1024 * 1024) {
      toast.error(`File is too large. Max size is ${maxSize}MB`);
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    setFileName(file.name);
    setIsUploading(true);
    setProgress(10);

    try {
      // 1. Get Authentication Parameters
      const authResponse = await fetch("/api/imagekit-auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fileName: file.name, purpose, courseId, sectionType }),
      });
      if (!authResponse.ok) throw new Error("Failed to get authentication parameters");
      const { token, uploadPayload } = await authResponse.json();

      // 2. Upload to ImageKit
      const formData = new FormData();
      formData.append("file", file);
      formData.append("fileName", file.name);
      formData.append("token", token);
      formData.append("useUniqueFileName", uploadPayload.useUniqueFileName);
      formData.append("folder", uploadPayload.folder);
      formData.append("isPrivateFile", uploadPayload.isPrivateFile);
      formData.append("checks", uploadPayload.checks);

      const xhr = new XMLHttpRequest();
      xhr.open("POST", "https://upload.imagekit.io/api/v2/files/upload", true);

      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          const percentComplete = (event.loaded / event.total) * 90 + 10;
          setProgress(percentComplete);
        }
      };

      xhr.onload = () => {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          setProgress(100);
          setIsUploading(false);
          setFileName(response.name || file.name);
          onSuccess(response.url, file.type, file.name);
          toast.success("File uploaded successfully");
        } else {
          setIsUploading(false);
          setProgress(0);
          setFileName(null);
          toast.error("Upload failed. Check the file type and size, then try again.");
        }
      };

      xhr.onerror = () => {
        setIsUploading(false);
        setProgress(0);
        setFileName(null);
        toast.error("Upload failed due to a network error");
      };

      xhr.send(formData);
    } catch (error) {
      console.error("Upload error:", error);
      toast.error("Failed to upload file");
      setIsUploading(false);
      setProgress(0);
      setFileName(null);
    }
  };

  const isAcceptedFile = (file: File, acceptedTypes: string) => {
    if (!acceptedTypes || acceptedTypes === "*") return true;

    const extension = `.${file.name.split(".").pop()?.toLowerCase() || ""}`;
    const mimeType = file.type.toLowerCase();

    return acceptedTypes
      .split(",")
      .map((type) => type.trim().toLowerCase())
      .filter(Boolean)
      .some((type) => {
        if (type.startsWith(".")) return extension === type;
        if (type.endsWith("/*")) return mimeType.startsWith(type.slice(0, -1));
        return mimeType === type;
      });
  };

  const clearFile = () => {
    setFileName(null);
    setProgress(0);
    if (fileInputRef.current) fileInputRef.current.value = "";
    onRemove?.();
  };

  const getFileIcon = (name: string | null) => {
    if (!name) return <Upload className="w-4 h-4" />;
    const ext = name.split(".").pop()?.toLowerCase();
    if (["mp4", "webm", "ogg", "mov"].includes(ext || "")) return <VideoIcon className="w-4 h-4" />;
    if (["jpg", "jpeg", "png", "gif", "webp", "svg"].includes(ext || "")) return <ImageIcon className="w-4 h-4" />;
    return <FileText className="w-4 h-4" />;
  };

  return (
    <div className="space-y-4 w-full">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleUpload}
        accept={accept}
        className="hidden"
      />
      
      {!isUploading ? (
        <div className="flex gap-2">
          <Button
            type="button"
            variant="outline"
            className="w-full gap-2 border-dashed h-20 hover:border-primary hover:bg-primary/5"
            onClick={() => fileInputRef.current?.click()}
          >
            {getFileIcon(fileName)}
            <div className="text-left min-w-0">
              <p className="font-medium text-sm truncate">{fileName || label}</p>
              <p className="text-xs text-muted-foreground">Click to browse</p>
            </div>
          </Button>
          {fileName && onRemove && (
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="h-20 w-12 shrink-0"
              onClick={clearFile}
              aria-label="Remove uploaded file"
            >
              <X className="w-4 h-4" />
            </Button>
          )}
        </div>
      ) : (
        <div className="space-y-2 p-4 border rounded-lg bg-muted/20">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 truncate">
              <Loader2 className="w-3 h-3 animate-spin text-primary" />
              <span className="truncate">{fileName}</span>
            </div>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-1.5" />
        </div>
      )}
    </div>
  );
}
