import { cn } from "@/lib/utils";
import React from "react";

const ShineButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
  }
>(({ className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "relative inline-flex h-11 items-center justify-center rounded-full border border-white/20 bg-black px-8 py-2 text-sm font-medium text-white transition-all focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",
        "disabled:pointer-events-none disabled:opacity-40",
        className
      )}
      {...props}
    >
      {props.children}
    </button>
  );
});

ShineButton.displayName = "ShineButton";

export { ShineButton };
