import * as React from "react";

const IconClusterB = React.forwardRef<
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
    <circle cx="125" cy="125" r="100" stroke="currentColor" strokeWidth="8" />
    {/* <path
      d="M168.589 170.589 29.411 31.411"
      stroke="currentColor"
      strokeWidth="8"
    /> */}
  </svg>
));

IconClusterB.displayName = "IconClusterB";

export default IconClusterB;
