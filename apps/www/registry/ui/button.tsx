import * as React from "react"
import { Slot } from "@radix-ui/react-slot"

import { cn } from "@/registry/lib/utils"
import { typographyVariants } from "@/registry/ui/typography"
import { cva, VariantProps } from "class-variance-authority"

const buttonVariants = cva(
  "rounded-full inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors [&_svg]:pointer-events-none cursor-pointer disabled:cursor-not-allowed disabled:text-grey-4",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white hover:bg-primary-3 disabled:bg-grey-3",
        secondary: "bg-transparent text-primary border border-primary hover:text-primary-3 hover:border-primary-3 disabled:border-grey-4",
        tertiary: "bg-transparent text-primary hover:text-primary-3 disabled:text-grey-3",
      },
      size: {
        regular: "h-14 px-4 py-4 [&_svg]:size-8",
        medium: "h-[46px] px-4 py-3 [&_svg]:size-6",
        small: "h-9 px-4 py-3 [&_svg]:size-5",
        'icon-line': "[&_svg]:size-4",
      }
    }
  }
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  iconOnly?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className,
    variant = "primary",
    size = "regular",
    asChild = false,
    children,
    leftIcon,
    rightIcon,
    iconOnly,
    ...props
}, ref) => {
    size = size || "regular"
    const Comp = asChild ? Slot : "button"
    
    const getTypographyVariant = (size: string | null | undefined) => {
      switch (size) {
        case "regular": return "p1bb"
        case "medium": return "p2bb"
        case "small": return "p3bb"
        default: return "p1b"
      }
    }

    const getIconSize = (size: string | null | undefined) => {
      switch (size) {
        case "regular": return "size-14"
        case "medium": return "size-12"
        case "small": return "size-10"
        case "icon-line": return "size-6"
        default: return "size-14"
      }
    }

    const isIconOnly = iconOnly && !children && !leftIcon && !rightIcon
    const iconButtonSize = isIconOnly ? getIconSize(size) : null

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size }),
          typographyVariants({ variant: getTypographyVariant(size) }),
          iconButtonSize ? `${iconButtonSize} px-0 py-0` : "",
          className
        )}
        ref={ref}
        {...props as any}
      >
        {asChild ? (
          <span className="contents">
            {isIconOnly && iconOnly}
            {!isIconOnly && leftIcon}
            {!isIconOnly && children}
            {!isIconOnly && rightIcon}
          </span>
        ) : (
          <>
            {isIconOnly && iconOnly}
            {!isIconOnly && leftIcon}
            {!isIconOnly && children}
            {!isIconOnly && rightIcon}
          </>
        )}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button } 