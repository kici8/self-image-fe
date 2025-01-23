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
        d="M258.563,511.993L255.996,511.993L255.996,378.875L474.904,378.875C445.714,466.664 362.996,511.348 258.563,511.993Z"
        fillRule="nonzero"
        className="fill-self-blue-700"
      />
      <path
        d="M253.966,511.993C149.533,511.348 66.815,466.664 37.626,378.875L255.996,378.875L255.996,511.993L253.966,511.993Z"
        fillRule="nonzero"
        className="fill-self-blue-400"
      />
      <path
        d="M37.626,378.875C30.224,356.616 26.265,331.585 26.265,303.799C26.265,157.373 247.227,6.126 255.996,0.181L255.996,378.875L37.626,378.875Z"
        fillRule="nonzero"
        className="fill-self-blue-200"
      />
      <path
        d="M474.904,378.875L255.996,378.875L255.996,0.181C256.174,0.061 256.265,-0 256.265,-0C256.265,-0 486.265,154.409 486.265,303.799C486.265,331.585 482.305,356.616 474.904,378.875Z"
        fillRule="nonzero"
        className="fill-self-blue-400"
      />
    </g>
  </svg>
));

IconClusterDSolid.displayName = "IconClusterDSolid";

export default IconClusterDSolid;
