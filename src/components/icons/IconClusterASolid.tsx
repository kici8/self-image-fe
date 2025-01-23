import * as React from "react";

const IconClusterASolid = React.forwardRef<
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
      <rect
        x="16"
        y="16"
        width="480"
        height="480"
        fillRule="nonzero"
        className="fill-self-blue-700"
      />
      <rect
        x="256"
        y="16"
        width="240"
        height="240"
        fillRule="nonzero"
        className="fill-self-blue-400"
      />
      <rect
        x="16"
        y="16"
        width="240"
        height="240"
        fillRule="nonzero"
        className="fill-self-blue-200"
      />
      <rect
        x="16"
        y="256"
        width="240"
        height="240"
        fillRule="nonzero"
        className="fill-self-blue-400"
      />
      <rect
        x="256"
        y="256"
        width="240"
        height="240"
        fillRule="nonzero"
        className="fill-self-blue-700"
      />
      <path
        d="M460,256C460,368.666 368.666,460 256,460C143.334,460 52,368.666 52,256C52,143.334 143.334,52 256,52C368.666,52 460,143.334 460,256Z"
        fillRule="nonzero"
        className="fill-self-blue-400"
      />
      <path
        d="M460,256C460,143.334 368.666,52 256,52L256,256L460,256Z"
        fillRule="nonzero"
        className="fill-self-blue-200"
      />
      <path
        d="M256,52C143.334,52 52,143.334 52,256L256,256L256,52Z"
        fillRule="nonzero"
        className="fill-self-blue-400"
      />
      <path
        d="M52,256C52,368.666 143.334,460 256,460L256,256L52,256Z"
        fillRule="nonzero"
        className="fill-self-blue-700"
      />
    </g>
  </svg>
));

IconClusterASolid.displayName = "IconClusterASolid";

export default IconClusterASolid;
