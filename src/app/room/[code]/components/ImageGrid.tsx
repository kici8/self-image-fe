"use client";
import { Button } from "@/components/ui/button";
import { ZoomInIcon, ZoomOutIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { TypeImage } from "../../../../lib/mockdata";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

export enum typeGridType {
  image = "IMAGE",
  selfie = "SELFIE",
}

export type TypeGridImage = TypeImage & {
  unlocked: boolean;
  type: typeGridType;
};

export default function ImageGrid({ images }: { images: TypeGridImage[] }) {
  const [numberOfColumns, setNumberOfColumns] = useState(5);

  // TODO:
  // randomize the order of the images
  // probably the images will be placed in order, than the selfies are pushed in a random position in the array
  // Locked images appear blurred and grayed out
  // When an image is clicked show a modal with the image in full size and the description
  // Check which data is needed for the modal

  const imageVariants = cva("transition-opacity", {
    variants: {
      unlocked: {
        true: ["opacity-100"],
        false: ["opacity-0"],
      },
    },
  });

  return (
    <div className="relative h-full w-full overflow-y-auto p-4">
      <div className="gap-0" style={{ columns: numberOfColumns }}>
        {images.map(({ src, id, unlocked }) => (
          <div key={id} className="p-1">
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src={src}
                // TODO: pass the right image width and height
                // to avoid layout shift
                width={720}
                height={720}
                alt=""
                className={cn(imageVariants({ unlocked }))}
              />
              {!unlocked ? (
                <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-stone-500/30 text-stone-500/30">
                  <svg
                    viewBox="0 0 24 24"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    strokeLinejoin="round"
                    strokeMiterlimit="2"
                    className="w-[30%]"
                    fill="currentColor"
                  >
                    <path d="M18,9L19,9C20.656,9 22,10.344 22,12L22,20C22,21.656 20.656,23 19,23L5,23C3.344,23 2,21.656 2,20L2,12C2,10.344 3.344,9 5,9L6,9L6,7C6,3.708 8.708,1 12,1C15.292,1 18,3.708 18,7L18,9ZM16,9L16,7C16,4.806 14.194,3 12,3C9.806,3 8,4.806 8,7L8,9L16,9ZM12,14C10.896,14 10,14.896 10,16C10,17.104 10.896,18 12,18C13.104,18 14,17.104 14,16C14,14.896 13.104,14 12,14Z" />
                  </svg>
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>

      <div className="fixed left-8 top-8 flex items-center justify-center gap-3">
        <Button
          size="icon"
          className="rounded-full shadow-lg"
          onClick={() =>
            setNumberOfColumns((prev) => (prev < 12 ? prev + 1 : prev))
          }
        >
          <ZoomOutIcon />
        </Button>
        <Button
          size="icon"
          className="rounded-full shadow-lg"
          onClick={() =>
            setNumberOfColumns((prev) => (prev > 1 ? prev - 1 : prev))
          }
        >
          <ZoomInIcon />
        </Button>
      </div>
    </div>
  );
}
