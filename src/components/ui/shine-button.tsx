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
        "relative inline-flex items-center justify-center rounded-xl border border-white/20 bg-black px-8 py-3 text-lg font-medium text-white transition-all focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",
        "shadow-[0_0_0_1px_#ffffff10_inset,0_0_0_1px_#ffffff10_inset,0_1px_1px_#ffffff08_inset,0_-1px_1px_#00000080_inset]",
        "hover:shadow-[0_0_0_1px_#ffffff10_inset,0_0_0_1px_#ffffff10_inset,0_2px_2px_#ffffff10_inset,0_-2px_2px_#00000080_inset]",
        "active:shadow-[0_0_0_1px_#ffffff10_inset,0_0_0_1px_#ffffff10_inset,0_1px_1px_#ffffff08_inset,0_-1px_1px_#00000080_inset]",
        "disabled:pointer-events-none disabled:opacity-40",
        className
      )}
      {...props}
    >
      <span className="absolute -top-px left-1/2 h-1/2 w-3/4 -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(255,255,255,0.1),transparent)] opacity-60"></span>
      {props.children}
    </button>
  );
});

ShineButton.displayName = "ShineButton";

export { ShineButton };
