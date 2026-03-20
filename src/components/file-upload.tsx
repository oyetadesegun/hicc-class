"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Upload, X, FileText, Video as VideoIcon, Image as ImageIcon, Loader2, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

interface FileUploadProps {
  onSuccess: (url: string, fileType: string, fileName: string) => void;
  folder?: string;
  accept?: string;
  label?: string;
  maxSize?: number; // in MB
}

export function FileUpload({ onSuccess, folder = "uploads", accept = "*", label = "Upload File", maxSize = 100 }: FileUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > maxSize * 1024 * 1024) {
      toast.error(`File is too large. Max size is ${maxSize}MB`);
      return;
    }

    setFileName(file.name);
    setIsUploading(true);
    setProgress(10);

    try {
      // 1. Get Authentication Parameters
      const authResponse = await fetch("/api/imagekit-auth");
      if (!authResponse.ok) throw new Error("Failed to get authentication parameters");
      const { signature, token, expire } = await authResponse.json();

      // 2. Upload to ImageKit
      const formData = new FormData();
      formData.append("file", file);
      formData.append("fileName", file.name);
      formData.append("publicKey", process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!);
      formData.append("signature", signature);
      formData.append("expire", expire.toString());
      formData.append("token", token);
      formData.append("useUniqueFileName", "true");
      formData.append("folder", folder);

      const xhr = new XMLHttpRequest();
      xhr.open("POST", "https://upload.imagekit.io/api/v1/files/upload", true);

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
          onSuccess(response.url, file.type, file.name);
          toast.success("File uploaded successfully");
        } else {
          throw new Error("Upload failed");
        }
      };

      xhr.onerror = () => {
        throw new Error("Upload failed");
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
        <Button
          type="button"
          variant="outline"
          className="w-full gap-2 border-dashed h-20 hover:border-primary hover:bg-primary/5"
          onClick={() => fileInputRef.current?.click()}
        >
          {getFileIcon(fileName)}
          <div className="text-left">
            <p className="font-medium text-sm">{fileName || label}</p>
            <p className="text-xs text-muted-foreground">Click to browse or drag and drop</p>
          </div>
        </Button>
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
