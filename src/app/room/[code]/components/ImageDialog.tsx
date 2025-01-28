"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { XIcon } from "lucide-react";
import Image from "next/image";
import { TypeGridImage } from "./ImageGrid";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
            {""}
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
          <div className="relative flex h-[50vh] w-full items-center justify-center bg-primary/10 md:h-full md:w-1/2">
            <Image
              // TODO: add placeholder image
              src={image.src || "/placeholder.svg"}
              alt={image.title || ""}
              fill
              style={{ objectFit: "contain", width: "100%", height: "100%" }}
              priority
              data-loaded="false"
              onLoad={(event) => {
                event.currentTarget.setAttribute("data-loaded", "true");
              }}
              className="data-[loaded=false]:animate-pulse data-[loaded=false]:bg-self-blue-300/10"
            />
          </div>
          <div className="w-full overflow-y-auto p-4 md:w-1/2">
            <h4 className="mb-2 text-lg font-semibold">
              {image.author || "Autore sconosciuto"}
            </h4>
            <h3 className="mb-2 text-2xl font-semibold">
              {image.title || "Opera senza titolo"}
            </h3>
            <p className="mb-8 text-lg text-muted-foreground">
              {image.year || "Senza data"}
            </p>
            {image.description ? (
              <div className="text-lg">
                <Markdown remarkPlugins={[remarkGfm]}>
                  {image.description}
                </Markdown>
              </div>
            ) : null}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
