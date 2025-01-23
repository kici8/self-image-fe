import * as React from "react";

const IconClusterDSolid = React.forwardRef<
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
        d="M468.296,378.875L255.996,378.875L255.996,0.181C256.047,0.147 256.09,0.118 256.126,0.093C262.205,4.48 479.996,162.634 479.996,301.952C479.996,330.555 475.883,356.186 468.296,378.875Z"
        className="fill-self-blue-400"
      />
      <path
        d="M43.697,378.875C36.11,356.186 31.996,330.555 31.996,301.952C31.996,172.023 221.423,25.711 251.885,3.022C254.034,1.518 255.441,0.558 255.996,0.181L255.996,378.875L43.697,378.875Z"
        className="fill-self-blue-200"
      />
      <path
        d="M253.966,511.993C253.821,511.992 253.676,511.991 253.531,511.99C156,511.266 73.339,467.517 43.697,378.875L255.996,378.875L255.996,511.993L253.966,511.993Z"
        className="fill-self-blue-400"
      />
      <path
        d="M258.169,511.993L255.996,511.993L255.996,378.875L468.296,378.875C438.625,467.606 355.827,511.354 258.169,511.993Z"
        className="fill-self-blue-700"
      />
    </g>
  </svg>
));

IconClusterDSolid.displayName = "IconClusterDSolid";

export default IconClusterDSolid;
