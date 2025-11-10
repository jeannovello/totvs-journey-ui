import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "@radix-ui/react-slot"

import { cn } from "@/registry/lib/utils"

const typographyVariants = cva(
  "",
  {
    variants: {
      variant: {
        // Display
        d1: "text-[64px] leading-auto font-black",
        d2: "text-[48px] leading-[56px] font-black",
        
        // Headline
        h1: "text-[32px] leading-[40px] font-extrabold",
        h2: "text-[24px] leading-[32px] font-extrabold", 
        h3: "text-[16px] leading-[24px] font-extrabold",
        
        // Title
        t1: "text-[24px] leading-[32px] font-extrabold",
        t2: "text-[18px] leading-[22px] font-extrabold",
        
        // Subtitle
        s1: "text-[20px] leading-[28px] font-extrabold",
        s2: "text-[18px] leading-[26px] font-extrabold",
        
        // Paragraph
        p1: "text-[16px] leading-[24px] font-normal",
        p1b: "text-[16px] leading-[24px] font-bold",
        p2: "text-[14px] leading-[22px] font-normal",
        p2b: "text-[14px] leading-[22px] font-bold",
        p3: "text-[12px] leading-[20px] font-normal",
        p3b: "text-[12px] leading-[20px] font-bold",
        
        // Caption
        c1: "text-[10px] leading-[18px] font-normal",
      },
    },
    defaultVariants: {
      variant: "p1",
    },
  }
)

const defaultElements: Record<string, keyof React.JSX.IntrinsicElements> = {
  d1: "h1",
  d2: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  t1: "h4",
  t2: "h5",
  s1: "h6",
  s2: "h6",
  p1: "p",
  p1b: "p",
  p2: "p",
  p2b: "p",
  p3: "p",
  p3b: "p",
  c1: "span",
}

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean
  as?: keyof React.JSX.IntrinsicElements
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant = "p1", asChild = false, as, ...props }, ref) => {
    const Comp = asChild 
      ? Slot 
      : (as || defaultElements[variant!] || "p") as React.ElementType
    
    return (
      <Comp
        className={cn(typographyVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Typography.displayName = "Typography"

export { Typography, typographyVariants }