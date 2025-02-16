import { cn } from "@/lib/utils";
import * as React from "react";

const IconClusterEIllustrated = React.forwardRef<
  SVGSVGElement,
  React.ComponentPropsWithoutRef<"svg">
>(({ className, ...props }, ref) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 634 634"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    className={cn("fill-current", className)}
    {...props}
  >
    <path d="M290.332,50C317.204,50 338.988,71.784 338.988,98.656C338.988,110.132 335.015,120.68 328.37,129L257.676,62.586C266.31,54.765 277.764,50 290.332,50ZM290.332,147.312C263.46,147.312 241.676,125.528 241.676,98.656C241.676,88.164 244.997,78.447 250.645,70.5L324.176,133.614C315.419,142.094 303.485,147.312 290.332,147.312ZM536.966,213.438L407.676,223.5L407.676,158.429L531.932,148.759L536.966,213.438ZM361.2,561.208L341.431,400.069L291.908,403.923L293.623,455.5L228.346,444.5L226.869,400.069L395.743,310L425.945,556.17L361.2,561.208ZM222.56,574.22L218.712,458.5L284.338,480L287.303,569.181L222.56,574.22ZM77.709,257.915L72.676,193.236L386.405,168.82L386.405,233.891L394.27,298L225.802,368L221.769,246.704L77.709,257.915Z" />
  </svg>
));

IconClusterEIllustrated.displayName = "IconClusterEIllustrated";

export default IconClusterEIllustrated;
