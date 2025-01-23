import * as React from "react";

const IconClusterBSolid = React.forwardRef<
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
        d="M437.014,74.983C536.986,174.956 536.986,337.044 437.014,437.016C337.041,536.991 174.953,536.991 74.98,437.016C-24.993,337.044 -24.993,174.956 74.98,74.983C174.953,-24.99 337.041,-24.99 437.014,74.983Z"
        fillRule="nonzero"
        className="fill-self-blue-400"
      />
      <path
        d="M437.924,75.893C337.447,-24.583 175.36,-25.397 75.89,74.073L257.816,255.999L437.924,75.893Z"
        fillRule="nonzero"
        className="fill-self-blue-200"
      />
      <path
        d="M75.889,74.073C-24.586,174.548 -24.586,337.453 75.889,437.927L257.816,255.999L75.889,74.073Z"
        fillRule="nonzero"
        className="fill-self-blue-700"
      />
      <path
        d="M75.89,437.927C175.36,537.398 337.447,536.582 437.924,436.108L257.816,255.999L75.89,437.927Z"
        fillRule="nonzero"
        className="fill-self-blue-700"
      />
    </g>
  </svg>
));

IconClusterBSolid.displayName = "IconClusterBSolid";

export default IconClusterBSolid;
