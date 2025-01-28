"use client";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import {
  CameraIcon,
  CameraOffIcon,
  LockKeyholeIcon,
  LockKeyholeOpenIcon,
  MoonIcon,
  SunIcon,
  ZoomInIcon,
  ZoomOutIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useState } from "react";
import { TypeImage } from "../../../../lib/referenceElements";
import ImageDialog from "./ImageDialog";

export enum typeGridType {
  image = "IMAGE",
  selfie = "SELFIE",
}

export type TypeGridImage = TypeImage & {
  index: number;
  unlocked: boolean;
  type: typeGridType;
  session_id: string | null;
};

export default function ImageGrid({ images }: { images: TypeGridImage[] }) {
  // Hooks
  const { setTheme, theme } = useTheme();

  // States
  const [numberOfColumns, setNumberOfColumns] = useState(9);
  const [showSelfie, setShowSelfie] = useState(true);
  const [showLockedImages, setShowLockedImages] = useState(false);
  const [imageModalOpen, setImageModalOpen] = useState<TypeGridImage | null>(
    null,
  );
  // TODO:
  // When an image is clicked show a modal with the image in full size and the description
  // Check which data is needed for the modal
  // If the showSelfie is true, show all the images else filter out the selfies (type: SELFIE)
  const filteredImages = showSelfie
    ? images
    : images.filter((image) => image.type !== typeGridType.selfie);

  const imageVariants = cva("transition-opacity", {
    variants: {
      unlocked: {
        true: ["opacity-100"],
        false: ["opacity-0"],
      },
    },
  });

  const ToggleButtonVariants = cva("rounded-full", {
    variants: {
      checked: {
        true: ["bg-primary text-primary-foreground"],
        false: ["bg-stone-500/30 text-stone-500"],
      },
    },
  });

  return (
    <div className="group static h-full w-full overflow-y-auto p-4 sm:relative">
      <div className="static mx-auto mb-4 flex items-center justify-center gap-3 rounded-full border bg-card p-2 shadow-lg sm:fixed sm:left-8 sm:top-8 sm:z-10 sm:opacity-0 sm:transition-opacity sm:group-hover:opacity-100">
        <Tooltip delayDuration={125}>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              className="rounded-full"
              onClick={() =>
                setNumberOfColumns((prev) => (prev < 12 ? prev + 1 : prev))
              }
            >
              <ZoomOutIcon />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom" sideOffset={8}>
            Riduci
          </TooltipContent>
        </Tooltip>

        <Tooltip delayDuration={125}>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              className="rounded-full"
              onClick={() =>
                setNumberOfColumns((prev) => (prev > 1 ? prev - 1 : prev))
              }
            >
              <ZoomInIcon />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom" sideOffset={8}>
            Ingrandisci
          </TooltipContent>
        </Tooltip>

        <Tooltip delayDuration={125}>
          <TooltipTrigger asChild>
            <Button
              className="rounded-full"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom" sideOffset={8}>
            {theme === "dark" ? <p>Tema chiaro</p> : <p>Tema scuro</p>}
          </TooltipContent>
        </Tooltip>

        <Tooltip delayDuration={125}>
          <TooltipTrigger asChild>
            <Button
              className={cn(ToggleButtonVariants({ checked: showSelfie }))}
              size="icon"
              onClick={() => setShowSelfie((prev) => !prev)}
            >
              {showSelfie ? <CameraIcon /> : <CameraOffIcon />}
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom" sideOffset={8}>
            {showSelfie ? <p>Nascondi selfie</p> : <p>Mostra selfie</p>}
          </TooltipContent>
        </Tooltip>

        <Tooltip delayDuration={125}>
          <TooltipTrigger asChild>
            <Button
              className={cn(
                ToggleButtonVariants({ checked: showLockedImages }),
              )}
              size="icon"
              onClick={() => setShowLockedImages((prev) => !prev)}
            >
              {showLockedImages ? <LockKeyholeOpenIcon /> : <LockKeyholeIcon />}
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom" sideOffset={8}>
            {showLockedImages ? (
              <p>Nascondi bloccate</p>
            ) : (
              <p>Mostra bloccate</p>
            )}
          </TooltipContent>
        </Tooltip>
      </div>

      <div className="gap-1" style={{ columns: numberOfColumns }}>
        {filteredImages.map((image) => {
          const isImageUnlocked = image.unlocked || showLockedImages;
          return (
            <div
              key={image.id}
              className="mb-1"
              onClick={() => setImageModalOpen(image)}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={image.src}
                  // TODO: pass the right image width and height
                  // to avoid layout shift
                  width={720}
                  height={720}
                  alt=""
                  className={cn(imageVariants({ unlocked: isImageUnlocked }))}
                />
                {!isImageUnlocked ? (
                  <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-card text-card-foreground/10">
                    <svg
                      viewBox="0 0 24 24"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      strokeLinejoin="round"
                      strokeMiterlimit="2"
                      className="w-[25%]"
                      fill="currentColor"
                    >
                      <path d="M18,9L19,9C20.656,9 22,10.344 22,12L22,20C22,21.656 20.656,23 19,23L5,23C3.344,23 2,21.656 2,20L2,12C2,10.344 3.344,9 5,9L6,9L6,7C6,3.708 8.708,1 12,1C15.292,1 18,3.708 18,7L18,9ZM16,9L16,7C16,4.806 14.194,3 12,3C9.806,3 8,4.806 8,7L8,9L16,9ZM12,14C10.896,14 10,14.896 10,16C10,17.104 10.896,18 12,18C13.104,18 14,17.104 14,16C14,14.896 13.104,14 12,14Z" />
                    </svg>
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>

      {imageModalOpen ? (
        <ImageDialog
          image={imageModalOpen}
          isOpen={imageModalOpen !== null}
          setIsOpen={(open) => setImageModalOpen(open ? imageModalOpen : null)}
        />
      ) : null}
    </div>
  );
}
