import { cn } from "@/lib/utils";
import * as React from "react";

const IconClusterF = React.forwardRef<
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
    <path d="M31.993,511.993L31.993,31.993L511.993,31.993C511.993,296.912 296.912,511.993 31.993,511.993ZM55.993,487.371C288.58,475.286 475.286,288.58 487.371,55.993L55.993,55.993L55.993,487.371Z" />
  </svg>
));

IconClusterF.displayName = "IconClusterF";

export default IconClusterF;
