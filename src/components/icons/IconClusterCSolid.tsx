import * as React from "react";

const IconClusterCSolid = React.forwardRef<
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
        d="M511.993,255.996C511.993,397.378 397.378,511.993 255.996,511.993C114.613,511.993 0,397.378 0,255.996C0,114.613 114.613,0 255.996,0C397.378,0 511.993,114.613 511.993,255.996Z"
        fillRule="nonzero"
        className="fill-self-blue-400"
      />
      <path
        d="M511.993,258.556C511.993,115.76 398.525,0 258.556,0L258.556,258.556L511.993,258.556Z"
        fillRule="nonzero"
        className="fill-self-blue-200"
      />
      <path
        d="M258.556,0C115.76,0 0,115.76 0,258.556L258.556,258.556L258.556,0Z"
        fillRule="nonzero"
        className="fill-self-blue-400"
      />
      <path
        d="M0,258.556C0,398.525 115.76,511.993 258.556,511.993L258.556,258.556L0,258.556Z"
        fillRule="nonzero"
        className="fill-self-blue-700"
      />
      <path
        d="M257.276,291.836C276.364,291.836 291.836,276.364 291.836,257.276C291.836,238.19 276.364,222.717 257.276,222.717C238.19,222.717 222.717,238.19 222.717,257.276C222.717,276.364 238.19,291.836 257.276,291.836Z"
        fillRule="nonzero"
        className="fill-self-blue-700"
      />
      <path
        d="M222.717,258.556C222.717,276.937 238.763,291.836 258.556,291.836L258.556,258.556L222.717,258.556Z"
        fillRule="nonzero"
        className="fill-self-blue-200"
      />
      <path
        d="M291.836,258.556C291.836,238.763 276.937,222.717 258.556,222.717L258.556,258.556L291.836,258.556Z"
        fillRule="nonzero"
        className="fill-self-blue-400"
      />
      <path
        d="M291.836,258.556C291.836,276.937 276.937,291.836 258.556,291.836L258.556,258.556L291.836,258.556Z"
        fillRule="nonzero"
        className="fill-self-blue-700"
      />
    </g>
  </svg>
));

IconClusterCSolid.displayName = "IconClusterCSolid";

export default IconClusterCSolid;
