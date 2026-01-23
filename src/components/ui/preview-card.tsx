"use client";

import { PreviewCard as PreviewCardPrimitive } from "@base-ui/react/preview-card";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/components/lib/utils";

const PreviewCard = PreviewCardPrimitive.Root;

function PreviewCardTrigger({
  onMouseEnter,
  onMouseMove,
  onMouseLeave,
  delay = 0,
  closeDelay = 0,
  ...props
}: PreviewCardPrimitive.Trigger.Props & {
  delay?: number;
  closeDelay?: number;
}) {
  return (
    <PreviewCardPrimitive.Trigger
      data-slot="preview-card-trigger"
      delay={delay}
      closeDelay={closeDelay}
      onMouseEnter={onMouseEnter}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      {...props}
    />
  );
}

function PreviewCardPopup({
  className,
  children,
  align = "center",
  sideOffset = 4,
  followCursor = false,
  mousePosition,
  ...props
}: PreviewCardPrimitive.Popup.Props & {
  align?: PreviewCardPrimitive.Positioner.Props["align"];
  sideOffset?: PreviewCardPrimitive.Positioner.Props["sideOffset"];
  followCursor?: boolean;
  mousePosition?: { x: number; y: number } | null;
}) {
  const positionerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!followCursor) return;

    const updatePosition = (x: number, y: number) => {
      if (!positionerRef.current) return;

      const positioner = positionerRef.current;
      const popupWidth = positioner.offsetWidth || 320;
      const popupHeight = positioner.offsetHeight || 200;
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const offset = 10;

      // Calculate position keeping popup within viewport
      let left = x + offset;
      let top = y + offset;

      // Prevent horizontal overflow
      if (left + popupWidth > viewportWidth) {
        left = x - popupWidth - offset;
      }

      // Prevent vertical overflow
      if (top + popupHeight > viewportHeight) {
        top = y - popupHeight - offset;
      }

      // Ensure minimum bounds
      left = Math.max(0, left);
      top = Math.max(0, top);

      positioner.style.position = 'fixed';
      positioner.style.transform = 'none';
      positioner.style.margin = '0';
      positioner.style.left = `${left}px`;
      positioner.style.top = `${top}px`;
      positioner.style.right = 'auto';
      positioner.style.bottom = 'auto';
    };

    const handleMouseMove = (e: MouseEvent) => {
      updatePosition(e.clientX, e.clientY);
    };

    // Set initial position if mousePosition is provided
    if (mousePosition) {
      updatePosition(mousePosition.x, mousePosition.y);
    }

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [followCursor, mousePosition]);

  return (
    <PreviewCardPrimitive.Portal>
      <PreviewCardPrimitive.Positioner
        ref={positionerRef}
        align={align}
        className={cn("z-50", followCursor && "!fixed")}
        data-slot="preview-card-positioner"
        sideOffset={sideOffset}
      >
        <PreviewCardPrimitive.Popup
          className={cn(
            "relative flex origin-(--transform-origin) text-balance rounded-lg border bg-popover not-dark:bg-clip-padding text-popover-foreground text-sm shadow-lg/5 transition-[scale,opacity] before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] before:shadow-[0_1px_--theme(--color-black/6%)] data-ending-style:scale-98 data-starting-style:scale-98 data-ending-style:opacity-0 data-starting-style:opacity-0 dark:before:shadow-[0_-1px_--theme(--color-white/6%)]",
            className,
          )}
          data-slot="preview-card-content"
          {...props}
        >
          {children}
        </PreviewCardPrimitive.Popup>
      </PreviewCardPrimitive.Positioner>
    </PreviewCardPrimitive.Portal>
  );
}

export {
  PreviewCard,
  PreviewCard as HoverCard,
  PreviewCardTrigger,
  PreviewCardTrigger as HoverCardTrigger,
  PreviewCardPopup,
  PreviewCardPopup as HoverCardContent,
};
