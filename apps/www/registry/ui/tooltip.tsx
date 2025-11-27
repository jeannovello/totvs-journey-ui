import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/registry/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { typographyVariants } from "./typography";

const tooltipVariants = cva(
  "z-50 max-w-[258px] whitespace-normal break-words overflow-hidden rounded-md px-3 py-1.5 shadow-sm animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
  {
    variants: {
      variant: {
        light: "bg-grey-3 text-grey-6 shadow-primary-dark/20",
        dark: "bg-grey-5 text-grey-1 shadow-black/30",
      },
    },
    defaultVariants: {
      variant: "light",
    },
  }
);

const tooltipArrowVariants = cva("", {
  variants: {
    variant: {
      light: "fill-grey-3",
      dark: "fill-grey-5",
    },
  },
  defaultVariants: {
    variant: "light",
  },
});

export interface TooltipContentProps extends
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>,
  VariantProps<typeof tooltipVariants>
{}

const TooltipProvider = TooltipPrimitive.Provider;

const TooltipContent = React.forwardRef<
  React.ComponentRef<typeof TooltipPrimitive.Content>,
  TooltipContentProps
>(({ className, sideOffset = 4, variant, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      tooltipVariants({ variant }),
      typographyVariants({ variant: "p3" }),
      className
    )}
    {...props}
  >
    {props.children}
    <TooltipPrimitive.Arrow
      width={11}
      height={5}
      className={cn(tooltipArrowVariants({ variant }))}
    />
  </TooltipPrimitive.Content>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export interface TooltipProps extends
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Root>,
  VariantProps<typeof tooltipVariants>
{
  content: React.ReactNode;
  children: React.ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  sideOffset?: number;
  delayDuration?: number;
  disableHoverableContent?: boolean;
} 

const Tooltip = React.forwardRef<
  React.ComponentRef<typeof TooltipPrimitive.Trigger>,
  TooltipProps
>(
  (
    {
      children,
      content,
      side = "right",
      sideOffset = 4,
      delayDuration = 100,
      disableHoverableContent = false,
      variant,
      ...props
    },
    ref
  ) => {
    return (
      <TooltipProvider
        delayDuration={delayDuration}
        disableHoverableContent={disableHoverableContent}
      >
        <TooltipPrimitive.Root {...props}>
          <TooltipPrimitive.Trigger asChild ref={ref}>
            {children}
          </TooltipPrimitive.Trigger>
          <TooltipContent variant={variant} side={side} sideOffset={sideOffset}>
            {content}
          </TooltipContent>
        </TooltipPrimitive.Root>
      </TooltipProvider>
    );
  }
);
Tooltip.displayName = "Tooltip";

export { Tooltip, TooltipProvider };
