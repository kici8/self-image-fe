import { cn } from "@/lib/utils";
import * as React from "react";

const IconClusterA = React.forwardRef<
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
    <path d="M496,16L496,496L16,496L16,16L496,16ZM472,40C472,40 40,40 40,40L40,472L472,472L472,40ZM255.996,95.996C344.303,95.996 415.996,167.69 415.996,255.996C415.996,344.303 344.303,415.996 255.996,415.996C167.69,415.996 95.996,344.303 95.996,255.996C95.996,167.69 167.69,95.996 255.996,95.996ZM255.996,119.996C180.936,119.996 119.996,180.936 119.996,255.996C119.996,331.057 180.936,391.996 255.996,391.996C331.057,391.996 391.996,331.057 391.996,255.996C391.996,180.936 331.057,119.996 255.996,119.996Z" />
  </svg>
));

IconClusterA.displayName = "IconClusterA";

export default IconClusterA;
