import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DownloadIcon,
  LoaderCircleIcon,
  Share2Icon,
  Undo2Icon,
  UploadIcon,
} from "lucide-react";
import Image from "next/image";

type SelfieDialogProps = {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
  closeScreenshotModal: () => void;
  screenshotUrl: string | null;
  handleDownload: () => void;
  handleShare: () => void;
  handleSubmit: () => void;
  uploading: boolean;
};

export default function SelfieDialog({
  modalOpen,
  setModalOpen,
  closeScreenshotModal,
  screenshotUrl,
  handleDownload,
  handleShare,
  handleSubmit,
  uploading,
}: SelfieDialogProps) {
  return (
    <Dialog
      open={modalOpen}
      onOpenChange={(open) =>
        open ? setModalOpen(open) : closeScreenshotModal()
      }
    >
      <DialogContent className="sm:max-w-[425px]" aria-describedby={undefined}>
        <DialogHeader>
          <DialogTitle>Carica Selfie</DialogTitle>
        </DialogHeader>
        <div className="relative">
          <div className="absolute right-2 top-2 flex items-center gap-2">
            <Button
              disabled={!screenshotUrl}
              onClick={handleDownload}
              variant="ghost"
              size="icon"
              className="rounded-full bg-secondary/40"
            >
              <DownloadIcon />
            </Button>
            {navigator.canShare &&
              navigator.canShare({ files: [new File([], "")] }) && (
                <Button
                  disabled={!screenshotUrl}
                  onClick={handleShare}
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-secondary/40"
                >
                  <Share2Icon />
                </Button>
              )}
          </div>

          {screenshotUrl ? (
            <Image
              src={screenshotUrl}
              alt="Screenshot preview"
              className="mb-4 max-h-[60vh] w-full object-contain"
              width={500}
              height={500}
              unoptimized
            />
          ) : (
            <div className="mb-4 h-[60vh] w-full animate-pulse rounded bg-gray-300" />
          )}
        </div>
        <DialogFooter className="flex flex-col gap-2 sm:flex-row">
          <Button onClick={closeScreenshotModal} variant="outline">
            Scatta ancora
            <Undo2Icon />
          </Button>
          <Button onClick={handleSubmit} disabled={uploading || !screenshotUrl}>
            Carica selfie
            {uploading ? (
              <LoaderCircleIcon className="animate-spin" />
            ) : (
              <UploadIcon />
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
