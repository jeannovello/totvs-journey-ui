import * as React from "react"
import { Slot } from "@radix-ui/react-slot"

import { cn } from "@/registry/lib/utils"
import { typographyVariants } from "@/registry/ui/typography"

interface ButtonIconProps {
  className?: string
  children: React.ReactNode
  position?: "left" | "right"
  size?: "regular" | "small" | "xsmall"
}

const iconOnlyButtonSize = {
  regular: "size-14",
  small: "size-12",
  xsmall: "size-9",
} as const

const ButtonIcon = React.forwardRef<HTMLSpanElement, ButtonIconProps>(
  ({ className, children, position = "left", size = "regular", ...props }, ref) => {
    const iconSizes = {
      regular: "size-9",
      small: "size-6", 
      xsmall: "size-4"
    } as const

    return (
      <span
        ref={ref}
        className={cn(
          "flex items-center justify-center shrink-0",
          `[&_svg]:${iconSizes[size]}`,
          className
        )}
        {...props}
      >
        {children}
      </span>
    )
  }
)
ButtonIcon.displayName = "ButtonIcon"

const buttonBase = "uppercase rounded-full inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors [&_svg]:pointer-events-none cursor-pointer disabled:cursor-not-allowed"

const buttonVariantClasses = {
  primary: "bg-primary text-white hover:bg-primary-3 disabled:bg-grey-3",
  secondary: "bg-transparent text-primary border border-primary hover:text-primary-3 hover:border-primary-3 disabled:text-grey-3 disabled:border-grey-3",
  tertiary: "bg-transparent text-primary hover:text-primary-3 disabled:text-grey-3",
}

type ButtonVariant = keyof typeof buttonVariantClasses

const buttonSizeClasses = {
  regular: "h-14 px-8 py-4",
  small: "h-12 px-6 py-3",
  xsmall: "h-9 px-4 py-2",
}

type ButtonSize = keyof typeof buttonSizeClasses

const buttonSizeToTypography = {
  regular: "p1b",
  small: "p2b",  
  xsmall: "p3b", 
} as const

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  variant?: ButtonVariant
  size?: ButtonSize
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
    const Comp = asChild ? Slot : "button"
    
    const typographyClasses = typographyVariants({ 
      variant: buttonSizeToTypography[size] 
    })

    const isIconOnly = iconOnly && !children && !leftIcon && !rightIcon
    const iconButtonSize = isIconOnly ? iconOnlyButtonSize[size] : null

    return (
      <Comp
        className={cn(
          buttonBase,
          buttonVariantClasses[variant],
          buttonSizeClasses[size],
          typographyClasses,
          "font-extrabold",
          iconButtonSize ? `${iconButtonSize} px-0 py-0` : "",
          className
        )}
        ref={ref}
        {...props as any}
      >
        {asChild ? (
          <span className="contents">
            {isIconOnly && (<ButtonIcon size={size}>{iconOnly}</ButtonIcon>)}
            {!isIconOnly && leftIcon && (
              <ButtonIcon size={size}>{leftIcon}</ButtonIcon>
            )}
            {!isIconOnly && children}
            {!isIconOnly && rightIcon && (
              <ButtonIcon size={size}>{rightIcon}</ButtonIcon>
            )}
          </span>
        ) : (
          <>
            {isIconOnly && (<ButtonIcon size={size}>{iconOnly}</ButtonIcon>)}
            {!isIconOnly && leftIcon && (
              <ButtonIcon size={size}>{leftIcon}</ButtonIcon>
            )}
            {!isIconOnly && children}
            {!isIconOnly && rightIcon && (
              <ButtonIcon size={size}>{rightIcon}</ButtonIcon>
            )}
          </>
        )}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button } 