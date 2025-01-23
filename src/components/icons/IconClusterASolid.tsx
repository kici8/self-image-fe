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
      <path
        d="M496,256L496,16L256,16L256,96C344.364,96.002 415.996,167.636 415.996,256L496,256Z"
        className="fill-self-blue-400"
      />
      <path
        d="M256,16L16,16L16,256L95.996,256C95.996,167.634 167.631,96 255.996,96C255.998,96 255.999,96 256,96L256,16Z"
        className="fill-self-blue-200"
      />
      <path
        d="M16,256L16,496L256,496L256,416C255.999,416 255.998,416 255.996,416C167.631,416 95.996,344.365 95.996,256L16,256Z"
        className="fill-self-blue-400"
      />
      <path
        d="M256,496L496,496L496,256L415.996,256C415.996,344.364 344.364,415.998 256,416L256,496Z"
        className="fill-self-blue-700"
      />
      <path
        d="M95.996,256C95.996,167.634 167.631,96 255.996,96C255.998,96 255.999,96 256,96L256,256L95.996,256Z"
        className="fill-self-blue-400"
      />
      <path
        d="M256,416C255.999,416 255.998,416 255.996,416C167.631,416 95.996,344.365 95.996,256L256,256L256,416Z"
        className="fill-self-blue-700"
      />
      <path
        d="M415.996,256C415.996,344.364 344.364,415.998 256,416L256,256L415.996,256Z"
        className="fill-self-blue-400"
      />
      <path
        d="M256,96C344.364,96.002 415.996,167.636 415.996,256L256,256L256,96Z"
        className="fill-self-blue-200"
      />
    </g>
  </svg>
));

IconClusterASolid.displayName = "IconClusterASolid";

export default IconClusterASolid;
