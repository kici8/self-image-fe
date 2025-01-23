import { cn } from "@/lib/utils";
import * as React from "react";

const IconClusterE = React.forwardRef<
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
    <path d="M257.988,511.993L254.005,511.993C119.061,511.031 8.774,412.401 0,288L511.993,288C503.219,412.401 392.932,511.031 257.988,511.993ZM257.894,487.993L257.937,487.993C370.389,487.138 464.44,411.887 484.574,312C484.574,312 27.419,312 27.419,312C47.556,411.9 141.627,487.157 254.099,487.993L257.894,487.993ZM510.009,224L1.984,224C10.733,98.987 121.2,-0 255.997,-0C390.793,-0 501.26,98.987 510.009,224ZM482.62,200C462.547,99.577 368.375,24 255.997,24C143.618,24 49.446,99.577 29.373,200L482.62,200Z" />
  </svg>
));

IconClusterE.displayName = "IconClusterE";

export default IconClusterE;
