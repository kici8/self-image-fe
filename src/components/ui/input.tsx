import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "bg-self-blue-300/10 px-3 py-2 text-base outline outline-1 -outline-offset-1 outline-self-blue-300/40 placeholder:text-primary/40 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-self-blue-400 sm:text-sm/6",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
