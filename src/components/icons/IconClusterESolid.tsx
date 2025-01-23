import * as React from "react";

const IconClusterESolid = React.forwardRef<
  SVGSVGElement,
  React.ComponentPropsWithoutRef<"svg">
>(({ className, ...props }, ref) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 512 512"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlSpace="preserve"
    fillRule="evenodd"
    clipRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit="2"
    ref={ref}
    className={className}
    {...props}
  >
    <g>
      <path
        d="M257.988,511.993L255.997,511.993L255.997,288L511.993,288C503.219,412.401 392.932,511.031 257.988,511.993Z"
        fillRule="nonzero"
        className="fill-self-blue-700"
      />
      <path
        d="M254.005,511.993C119.061,511.031 8.774,412.401 0,288L255.997,288L255.997,511.993L254.005,511.993Z"
        fillRule="nonzero"
        className="fill-self-blue-400"
      />
      <path
        d="M255.997,224L1.984,224C10.733,98.987 121.2,-0 255.997,-0L255.997,224Z"
        fillRule="nonzero"
        className="fill-self-blue-200"
      />
      <path
        d="M255.997,224L255.997,-0C390.793,-0 501.26,98.987 510.009,224L255.997,224Z"
        fillRule="nonzero"
        className="fill-self-blue-400"
      />
    </g>
  </svg>
));

IconClusterESolid.displayName = "IconClusterESolid";

export default IconClusterESolid;
