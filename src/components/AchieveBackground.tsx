"use client";

import { motion } from "framer-motion";

export default function AchieveBackground({
  strokeWidth,
  className,
}: {
  strokeWidth?: string;
  className?: string;
}) {
  const stroke = strokeWidth || "1px";
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="1.5"
      viewBox="0 0 200 200"
      className={className}
      initial={{ opacity: 0, rotate: 0 }}
      animate={{ opacity: 1, rotate: 360 }}
      exit={{ opacity: 0 }}
      transition={{
        opacity: { duration: 0.5, ease: "easeInOut" },
        rotate: { duration: 36, repeat: Infinity, ease: "linear" },
      }}
    >
      <defs>
        <path
          id="reuse-0"
          d="M100 0v79.646"
          style={{
            fill: "none",
            stroke: "currentColor",
            strokeWidth: stroke,
          }}
        />
      </defs>
      <use
        xlinkHref="#reuse-0"
        style={{
          fill: "none",
          stroke: "currentColor",
          strokeWidth: stroke,
        }}
        transform="scale(1 1.00444)"
      />
      <use
        xlinkHref="#reuse-0"
        style={{
          fill: "none",
          stroke: "currentColor",
          strokeWidth: stroke,
        }}
        transform="matrix(1 0 0 1.00444 0 120)"
      />
      <use
        xlinkHref="#reuse-0"
        style={{
          fill: "none",
          stroke: "currentColor",
          strokeWidth: stroke,
        }}
        transform="matrix(.97815 -.20791 .20884 .9825 -18.606 22.976)"
      />
      <use
        xlinkHref="#reuse-0"
        style={{
          fill: "none",
          stroke: "currentColor",
          strokeWidth: stroke,
        }}
        transform="matrix(.97815 -.20791 .20884 .9825 6.343 140.354)"
      />
      <use
        xlinkHref="#reuse-0"
        style={{
          fill: "none",
          stroke: "currentColor",
          strokeWidth: stroke,
        }}
        transform="matrix(.91355 -.40674 .40854 .9176 -32.028 49.32)"
      />
      <use
        xlinkHref="#reuse-0"
        style={{
          fill: "none",
          stroke: "currentColor",
          strokeWidth: stroke,
        }}
        transform="matrix(.91355 -.40674 .40854 .9176 16.78 158.945)"
      />
      <use
        xlinkHref="#reuse-0"
        style={{
          fill: "none",
          stroke: "currentColor",
          strokeWidth: stroke,
        }}
        transform="matrix(.80902 -.58779 .5904 .81261 -39.68 77.877)"
      />
      <use
        xlinkHref="#reuse-0"
        style={{
          fill: "none",
          stroke: "currentColor",
          strokeWidth: stroke,
        }}
        transform="matrix(.80902 -.58779 .5904 .81261 30.854 174.959)"
      />
      <use
        xlinkHref="#reuse-0"
        style={{
          fill: "none",
          stroke: "currentColor",
          strokeWidth: stroke,
        }}
        transform="matrix(.66913 -.74314 .74645 .6721 -41.227 107.401)"
      />
      <use
        xlinkHref="#reuse-0"
        style={{
          fill: "none",
          stroke: "currentColor",
          strokeWidth: stroke,
        }}
        transform="matrix(.66913 -.74314 .74645 .6721 47.95 187.697)"
      />
      <use
        xlinkHref="#reuse-0"
        style={{
          fill: "none",
          stroke: "currentColor",
          strokeWidth: stroke,
        }}
        transform="matrix(.5 -.86603 .86987 .50222 -36.602 136.603)"
      />
      <use
        xlinkHref="#reuse-0"
        style={{
          fill: "none",
          stroke: "currentColor",
          strokeWidth: stroke,
        }}
        transform="matrix(.5 -.86603 .86987 .50222 67.32 196.603)"
      />
      <use
        xlinkHref="#reuse-0"
        style={{
          fill: "none",
          stroke: "currentColor",
          strokeWidth: stroke,
        }}
        transform="matrix(.30902 -.95106 .95528 .31039 -26.007 164.204)"
      />
      <use
        xlinkHref="#reuse-0"
        style={{
          fill: "none",
          stroke: "currentColor",
          strokeWidth: stroke,
        }}
        transform="matrix(.30902 -.95106 .95528 .31039 88.12 201.286)"
      />
      <use
        xlinkHref="#reuse-0"
        style={{
          fill: "none",
          stroke: "currentColor",
          strokeWidth: stroke,
        }}
        transform="matrix(.10453 -.99452 .99894 .105 -9.905 188.999)"
      />
      <use
        xlinkHref="#reuse-0"
        style={{
          fill: "none",
          stroke: "currentColor",
          strokeWidth: stroke,
        }}
        transform="matrix(.10453 -.99452 .99894 .105 109.438 201.543)"
      />
      <use
        xlinkHref="#reuse-0"
        style={{
          fill: "none",
          stroke: "currentColor",
          strokeWidth: stroke,
        }}
        transform="matrix(-.10453 -.99452 .99894 -.105 11 209.905)"
      />
      <use
        xlinkHref="#reuse-0"
        style={{
          fill: "none",
          stroke: "currentColor",
          strokeWidth: stroke,
        }}
        transform="matrix(-.10453 -.99452 .99894 -.105 130.343 197.362)"
      />
      <use
        xlinkHref="#reuse-0"
        style={{
          fill: "none",
          stroke: "currentColor",
          strokeWidth: stroke,
        }}
        transform="matrix(-.30902 -.95106 .95528 -.31039 35.796 226.007)"
      />
      <use
        xlinkHref="#reuse-0"
        style={{
          fill: "none",
          stroke: "currentColor",
          strokeWidth: stroke,
        }}
        transform="matrix(-.30902 -.95106 .95528 -.31039 149.923 188.925)"
      />
      <use
        xlinkHref="#reuse-0"
        style={{
          fill: "none",
          stroke: "currentColor",
          strokeWidth: stroke,
        }}
        transform="matrix(-.5 -.86603 .86987 -.50222 63.398 236.603)"
      />
      <use
        xlinkHref="#reuse-0"
        style={{
          fill: "none",
          stroke: "currentColor",
          strokeWidth: stroke,
        }}
        transform="matrix(-.5 -.86603 .86987 -.50222 167.321 176.603)"
      />
      <use
        xlinkHref="#reuse-0"
        style={{
          fill: "none",
          stroke: "currentColor",
          strokeWidth: stroke,
        }}
        transform="matrix(-.66913 -.74314 .74645 -.6721 92.599 241.228)"
      />
      <use
        xlinkHref="#reuse-0"
        style={{
          fill: "none",
          stroke: "currentColor",
          strokeWidth: stroke,
        }}
        transform="matrix(-.66913 -.74314 .74645 -.6721 181.776 160.932)"
      />
      <use
        xlinkHref="#reuse-0"
        style={{
          fill: "none",
          stroke: "currentColor",
          strokeWidth: stroke,
        }}
        transform="matrix(-.80902 -.58779 .5904 -.81261 122.123 239.68)"
      />
      <use
        xlinkHref="#reuse-0"
        style={{
          fill: "none",
          stroke: "currentColor",
          strokeWidth: stroke,
        }}
        transform="matrix(-.80902 -.58779 .5904 -.81261 192.657 142.598)"
      />
      <use
        xlinkHref="#reuse-0"
        style={{
          fill: "none",
          stroke: "currentColor",
          strokeWidth: stroke,
        }}
        transform="matrix(-.91355 -.40674 .40854 -.9176 150.681 232.028)"
      />
      <use
        xlinkHref="#reuse-0"
        style={{
          fill: "none",
          stroke: "currentColor",
          strokeWidth: stroke,
        }}
        transform="matrix(-.91355 -.40674 .40854 -.9176 199.489 122.403)"
      />
      <use
        xlinkHref="#reuse-0"
        style={{
          fill: "none",
          stroke: "currentColor",
          strokeWidth: stroke,
        }}
        transform="matrix(-.97815 -.20791 .20884 -.9825 177.024 218.606)"
      />
      <use
        xlinkHref="#reuse-0"
        style={{
          fill: "none",
          stroke: "currentColor",
          strokeWidth: stroke,
        }}
        transform="matrix(-.97815 -.20791 .20884 -.9825 201.973 101.228)"
      />
    </motion.svg>
  );
}
