import { Separator as SeparatorPrimitive } from "@base-ui/react/separator";

import { cn } from "@/components/lib/utils";

function Separator({
  className,
  orientation = "horizontal",
  ...props
}: SeparatorPrimitive.Props) {
  return (
    <SeparatorPrimitive
      className={cn(
        "shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px data-[orientation=vertical]:h-full",
        className,
      )}
      data-slot="separator"
      orientation={orientation}
      style={{
        backgroundImage: orientation === "horizontal"
          ? "repeating-linear-gradient(to right, hsl(var(--border)) 0px, hsl(var(--border)) 6px, transparent 6px, transparent 14px)"
          : "repeating-linear-gradient(to bottom, hsl(var(--border)) 0px, hsl(var(--border)) 6px, transparent 6px, transparent 14px)",
        backgroundSize: orientation === "horizontal" ? "100% 1px" : "1px 100%",
        backgroundRepeat: "no-repeat",
      }}
      {...props}
    />
  );
}

export { Separator };
