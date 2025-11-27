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
        d1: "text-[64px] leading-[72px] font-black",
        d2: "text-[48px] leading-[56px] font-black",
        
        // Headline
        h1: "text-[32px] leading-[40px] font-extrabold",
        h2: "text-[24px] leading-[32px] font-extrabold", 
        h3: "text-[16px] leading-[24px] font-extrabold",
        
        // Title
        t1: "text-[24px] leading-[32px] font-extrabold",
        t2: "text-[18px] leading-[22px] font-extrabold",
        
        // Subtitle
        s1: "text-[20px] leading-[28px] font-semibold",
        s2: "text-[18px] leading-[26px] font-semibold",
        s3: "text-[16px] leading-auto font-semibold",
        s4: "text-[14px] leading-auto font-semibold",
        s5: "text-[12px] leading-[20px] font-semibold",
        
        // Paragraph
        p1: "text-[16px] leading-[24px] font-normal",
        p1b: "text-[16px] leading-[24px] font-bold",
        p1bb: "text-[16px] leading-[24px] font-black",
        p2: "text-[14px] leading-[22px] font-normal",
        p2b: "text-[14px] leading-[22px] font-bold",
        p2bb: "text-[14px] leading-[22px] font-black",
        p3: "text-[12px] leading-[20px] font-normal",
        p3b: "text-[12px] leading-[20px] font-bold",
        p3bb: "text-[12px] leading-[20px] font-black",
        
        // Caption
        c1: "text-[10px] leading-auto font-semibold",
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
  s3: "h6",
  s4: "h6",
  s5: "h6",
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