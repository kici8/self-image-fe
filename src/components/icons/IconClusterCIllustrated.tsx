import { cn } from "@/lib/utils";
import * as React from "react";

const IconClusterCIllustrated = React.forwardRef<
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
    <path d="M321.752,154.5C294.828,154.5 273.002,132.674 273.002,105.75C273.002,78.826 294.828,57 321.752,57C348.676,57 370.502,78.826 370.502,105.75C370.502,132.674 348.676,154.5 321.752,154.5ZM451.752,187L451.752,122L516.752,122L516.752,187C516.752,222.899 487.648,252 451.752,252L404.477,252L418.917,577L353.853,577L346.633,414.5L296.863,414.5L289.639,577L224.575,577L237.906,277.125L169,369L117,330L224.25,187L451.752,187Z" />
  </svg>
));

IconClusterCIllustrated.displayName = "IconClusterCIllustrated";

export default IconClusterCIllustrated;
