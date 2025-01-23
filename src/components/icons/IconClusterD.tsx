import { cn } from "@/lib/utils";
import * as React from "react";

const IconClusterD = React.forwardRef<
  SVGSVGElement,
  React.ComponentPropsWithoutRef<"svg">
>(({ className, ...props }, ref) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    className={cn("fill-current", className)}
    {...props}
  >
    <path d="M255.996,-0C255.996,-0 479.996,160.662 479.996,301.952C479.996,443.243 379.625,512 255.996,512C132.367,512 31.996,443.243 31.996,301.952C31.996,160.662 255.996,-0 255.996,-0ZM255.996,30.043C230.698,49.65 175.652,94.797 129.22,150.066C90.015,196.732 55.996,250.434 55.996,301.952C55.996,352.08 69.775,392.062 93.886,421.817C130.364,466.835 189.637,488 255.996,488C322.356,488 381.629,466.835 418.107,421.817C442.218,392.062 455.996,352.08 455.996,301.952C455.996,250.434 421.978,196.732 382.773,150.066C336.341,94.797 281.295,49.65 255.996,30.043Z" />
  </svg>
));

IconClusterD.displayName = "IconClusterD";

export default IconClusterD;
