import * as React from "react";

const IconClusterA = React.forwardRef<
  SVGSVGElement,
  React.ComponentPropsWithoutRef<"svg">
>(({ className, ...props }, ref) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 250 250"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    className={className}
    {...props}
  >
    <rect
      x="32"
      y="32"
      width="186"
      height="186"
      stroke="currentColor"
      strokeWidth="8"
    />
    <circle cx="125" cy="125" r="72" stroke="currentColor" stroke-width="8" />
  </svg>
));

IconClusterA.displayName = "IconClusterA";

export default IconClusterA;
