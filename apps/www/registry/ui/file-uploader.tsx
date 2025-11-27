"use client"

import { ChangeEvent, useRef, useState, DragEvent } from "react";
import { CheckCircle, CircleXIcon, Upload } from "lucide-react";
import { cn } from "@/lib/utils";
import { Typography } from "@/registry/ui/typography";

type UploadStatus = "idle" | "success" | "error";

interface FileUploaderProps {
  accept?: string;
  maxSizeMB?: number;
  onFileSelect?: (file: File) => void;
  onError?: (error: string) => void;
  className?: string;
}

const FileUploader = ({
  accept = ".csv",
  maxSizeMB = 50,
  onFileSelect,
  onError,
  className,
}: FileUploaderProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<UploadStatus>("idle");
  const [isDragOver, setIsDragOver] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateFile = (selectedFile: File): string | null => {
    const fileExtension =
      "." + (selectedFile.name.split(".").pop()?.toLowerCase() || "");
    if (!accept.includes(fileExtension)) {
      return `O arquivo enviado não é compatível ou possui algum erro.\nTente novamente e lembre-se de enviar arquivo no formato ${accept}.`;
    }

    const fileSizeMB = selectedFile.size / (1024 * 1024);
    if (fileSizeMB > maxSizeMB) {
      return `Arquivo muito grande. Tamanho máximo permitido: ${maxSizeMB}MB`;
    }

    return null;
  };

  const handleFileSelection = (selectedFile: File) => {
    const error = validateFile(selectedFile);

    if (error) {
      setStatus("error");
      setErrorMessage(error);
      setFile(null);
      onError?.(error);
    } else {
      setStatus("success");
      setFile(selectedFile);
      setErrorMessage("");
      onFileSelect?.(selectedFile);
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;
    handleFileSelection(selectedFile);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);

    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile) {
      handleFileSelection(droppedFile);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-full max-w-[600px] space-y-4">
      <div
        role="button"
        tabIndex={0}
        aria-label="Selecionar arquivo para upload"
        className={cn(
          "relative rounded-lg border-2 border-dashed p-6 min-h-[140px] flex flex-col items-center justify-center transition-all duration-200 cursor-pointer",
          status === "idle" && "border-status-info",
          status === "error" && "border-status-negative",
          status === "success" && "border-status-positive",
          isDragOver && "border-status-info scale-[1.02]",
          className
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClick}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleClick();
          }
        }}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          onChange={handleFileChange}
          className="hidden"
        />

        {status === "idle" && (
          <div className="text-center space-y-3 text-sm text-gray-500">
            <Upload className="mx-auto text-status-info" size={24} />
            <Typography
              as="p"
              variant="s2"
              className="text-status-info text-sm font-semibold leading-relaxed max-w-md"
            >
              <span className="font-bold underline">Clique aqui</span> ou
              arraste o arquivo para fazer o upload do seu arquivo.
            </Typography>
          </div>
        )}

        {status === "success" && file && (
          <div className="text-center space-y-3">
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle
                className="text-status-positive flex-shrink-0"
                size={24}
              />
            </div>
            <div className="text-center space-y-3">
              <Typography
                as="p"
                variant="s2"
                className="text-status-positive text-sm font-semibold leading-relaxed max-w-md"
              >
                {file.name}
              </Typography>
              <Typography
                as="p"
                variant="s2"
                className="text-status-positive text-sm font-semibold leading-relaxed"
              >
                Clique em enviar para iniciar o processamento do arquivo.
              </Typography>
            </div>
          </div>
        )}

        {status === "error" && (
          <div className="text-center space-y-3">
            <CircleXIcon className="mx-auto text-status-negative" size={24} />
            <Typography
              as="div"
              variant="s2"
              className="text-status-negative text-sm font-semibold leading-relaxed max-w-md"
            >
              {errorMessage.split("\n").map((line) => (
                <div key={line}>
                  {line === errorMessage.split("\n")[0] ? (
                    <span className="font-bold">{line}</span>
                  ) : (
                    line
                  )}
                </div>
              ))}
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
};

export { FileUploader };
