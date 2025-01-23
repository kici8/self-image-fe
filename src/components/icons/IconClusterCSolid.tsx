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
        d="M319.996,255.996L511.993,255.996C511.993,397.285 397.285,511.993 255.996,511.993L255.996,320C291.319,320 319.996,291.323 319.996,256L319.996,255.996Z"
        className="fill-self-blue-400"
      />
      <path
        d="M255.996,192L255.996,-0C397.285,-0 511.993,114.708 511.993,255.996L319.996,255.993C319.993,220.674 291.317,192 255.996,192Z"
        className="fill-self-blue-200"
      />
      <path
        d="M191.996,255.993L0,255.996C0,114.708 114.708,-0 255.996,-0L255.996,192C220.676,192 192,220.674 191.996,255.993Z"
        className="fill-self-blue-400"
      />
      <path
        d="M255.996,320L255.996,511.993C114.708,511.993 0,397.285 0,255.996L191.996,255.996L191.996,256C191.996,291.323 220.674,320 255.996,320Z"
        className="fill-self-blue-700"
      />
      <path
        d="M319.996,255.993C319.996,255.995 319.996,255.998 319.996,256C319.996,291.323 291.319,320 255.996,320L255.996,255.993L319.996,255.993Z"
        className="fill-self-blue-700"
      />
      <path
        d="M191.996,255.993C192,220.674 220.676,192 255.996,192L255.996,255.993L191.996,255.993Z"
        className="fill-self-blue-700"
      />
      <path
        d="M255.996,192C291.317,192 319.993,220.674 319.996,255.993L255.996,255.993L255.996,192Z"
        className="fill-self-blue-400"
      />
      <path
        d="M255.996,320C220.674,320 191.996,291.323 191.996,256C191.996,255.998 191.996,255.995 191.996,255.993L255.996,255.993L255.996,320Z"
        className="fill-self-blue-200"
      />
    </g>
  </svg>
));

IconClusterCSolid.displayName = "IconClusterCSolid";

export default IconClusterCSolid;
