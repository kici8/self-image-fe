import { cn } from "@/lib/utils";
import * as React from "react";

const IconClusterB = React.forwardRef<
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
    <path d="M255.996,0C397.285,0 511.993,114.708 511.993,255.996C511.993,397.285 397.285,511.993 255.996,511.993C114.708,511.993 0,397.285 0,255.996C0,114.708 114.708,0 255.996,0ZM83.714,100.686C46.604,141.82 24,196.289 24,255.996C24,384.039 127.954,487.993 255.996,487.993C315.702,487.993 370.17,465.39 411.304,428.281L83.714,100.686ZM428.275,411.311C465.387,370.177 487.993,315.706 487.993,255.996C487.993,127.954 384.039,24 255.996,24C196.289,24 141.819,46.605 100.685,83.716L428.275,411.311Z" />
  </svg>
));

IconClusterB.displayName = "IconClusterB";

export default IconClusterB;
