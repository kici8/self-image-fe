import * as React from "react";

const IconClusterFSolid = React.forwardRef<
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
        width="128"
        height="128"
        fillRule="nonzero"
        className="fill-self-blue-200"
      />
      <path
        d="M478.716,143.998L144,143.998L144,16L496,16C496,60.319 489.981,103.243 478.716,143.998Z"
        fillRule="nonzero"
        className="fill-self-blue-400"
      />
      <path
        d="M16,496L16,143.998L143.998,143.998L143.998,478.716C103.243,489.981 60.319,496 16,496Z"
        fillRule="nonzero"
        className="fill-self-blue-400"
      />
      <path
        d="M144,478.715L144,143.998L478.716,143.998C433.908,306.106 306.108,433.907 144,478.715Z"
        fillRule="nonzero"
        className="fill-self-blue-700"
      />
    </g>
  </svg>
));

IconClusterFSolid.displayName = "IconClusterFSolid";

export default IconClusterFSolid;
