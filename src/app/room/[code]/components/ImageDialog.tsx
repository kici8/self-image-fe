"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import { TypeGridImage } from "./ImageGrid";
import { XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

type ImageDialogProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  image: TypeGridImage;
};

export default function ImageDialog({
  image,
  isOpen,
  setIsOpen,
}: ImageDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        hideClose
        className="flex h-full max-h-[95vh] w-full max-w-[95vw] flex-col gap-0 overflow-hidden p-0"
      >
        <DialogHeader className="flex flex-row items-center p-3">
          <DialogTitle className="mr-3 flex-1 text-left align-middle text-lg md:text-2xl">
            {image.title}
          </DialogTitle>
          <Button
            size="icon"
            variant="ghost"
            onClick={() => setIsOpen(false)}
            className="!mt-0"
          >
            <XIcon />
          </Button>
        </DialogHeader>
        <div className="flex h-full flex-col overflow-hidden md:flex-row">
          <div className="relative flex h-[50vh] w-full items-center justify-center bg-primary/10 md:h-full md:w-2/3">
            <Image
              // TODO: add placeholder image
              src={image.src || "/placeholder.svg"}
              alt={image.title || ""}
              fill
              style={{ objectFit: "contain", width: "100%", height: "100%" }}
              priority
            />
          </div>
          <div className="w-full overflow-y-auto p-3 md:w-1/3">
            <h3 className="mb-2 text-lg font-semibold">{image.author}</h3>
            <p className="mb-6 text-sm text-muted-foreground">{image.year}</p>
            <p className="text-sm">{image.description}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
