"use client";

import { useState } from "react";
import { FileText, Video, Image as ImageIcon, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface FileViewerProps {
  url: string;
  type?: string;
  title?: string;
  className?: string;
}

export function FileViewer({ url, type, title, className = "" }: FileViewerProps) {
  const [error, setError] = useState(false);

  if (!url) return null;

  const isVideo = type?.startsWith("video/") || /\.(mp4|webm|ogg|mov)$/i.test(url);
  const isImage = type?.startsWith("image/") || /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(url);
  const isPDF = type === "application/pdf" || /\.pdf$/i.test(url);

  if (isVideo) {
    return (
      <div className={`aspect-video w-full overflow-hidden rounded-lg bg-black ${className}`}>
        <video
          src={url}
          controls
          className="h-full w-full"
          onError={() => setError(true)}
        >
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }

  if (isImage) {
    return (
      <div className={`overflow-hidden rounded-lg border bg-muted/10 ${className}`}>
        <img
          src={url}
          alt={title || "Image"}
          className="h-auto w-full max-h-[500px] object-contain"
          onError={() => setError(true)}
        />
      </div>
    );
  }

  if (isPDF) {
    return (
      <div className={`w-full space-y-4 ${className}`}>
        <Card className="overflow-hidden border-2 h-[600px]">
          <iframe
            src={`${url}#toolbar=0`}
            className="h-full w-full"
            title={title || "PDF Viewer"}
          />
        </Card>
        <div className="flex justify-end gap-2">
          <Button variant="outline" size="sm" asChild>
            <a href={url} target="_blank" rel="noopener noreferrer" className="gap-2">
              <ExternalLink className="w-4 h-4" />
              Open in New Tab
            </a>
          </Button>
          <Button size="sm" asChild>
            <a href={url} download className="gap-2">
              <Download className="w-4 h-4" />
              Download PDF
            </a>
          </Button>
        </div>
      </div>
    );
  }

  // Fallback for other file types
  return (
    <Card className={`flex items-center justify-between p-4 ${className}`}>
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <FileText className="h-5 w-5" />
        </div>
        <div>
          <p className="font-medium text-sm truncate max-w-[200px] md:max-w-md">
            {title || "Downloadable File"}
          </p>
          <p className="text-xs text-muted-foreground uppercase">{type?.split("/")[1] || "File"}</p>
        </div>
      </div>
      <Button variant="ghost" size="icon" asChild>
        <a href={url} download>
          <Download className="h-4 w-4" />
        </a>
      </Button>
    </Card>
  );
}
