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
        x="31.993"
        y="32"
        width="128"
        height="128"
        fillRule="nonzero"
        className="fill-self-blue-200"
      />
      <path
        d="M494.708,159.998L159.993,159.998L159.993,32L511.993,32C511.993,76.319 505.974,119.243 494.708,159.998Z"
        className="fill-self-blue-400"
      />
      <path
        d="M31.993,512L31.993,159.998L159.991,159.998L159.991,494.716C119.236,505.981 76.312,512 31.993,512Z"
        className="fill-self-blue-400"
      />
      <path
        d="M159.993,494.715L159.993,159.998L494.708,159.998C449.901,322.106 322.101,449.907 159.993,494.715Z"
        className="fill-self-blue-700"
      />
    </g>
  </svg>
));

IconClusterFSolid.displayName = "IconClusterFSolid";

export default IconClusterFSolid;
