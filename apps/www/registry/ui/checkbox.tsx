"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"

import { cn } from "@/registry/lib/utils"
import { Typography } from "@/registry/ui/typography"
import { cva, type VariantProps } from "class-variance-authority"

const checkboxVariants = cva(
  "rounded-[4px] border-2 border-grey-5 bg-white data-[state=checked]:bg-primary data-[state=checked]:text-primary-white",
  {
    variants: {
      size: {
        base: 'size-6',
        sm: 'size-5',
      },
    },
    defaultVariants: {
      size: 'base',
    },
  }
)

export interface CheckboxProps extends React.ComponentProps<typeof CheckboxPrimitive.Root>, VariantProps<typeof checkboxVariants> {
  label?: string
}

function Checkbox({
  className,
  size,
  label,
  ...props
}: CheckboxProps) {
  return (
    <label className="w-min [&>*]:cursor-pointer whitespace-nowrap flex items-center gap-2">
      <CheckboxPrimitive.Root
        data-slot="checkbox"
        className={cn(
          checkboxVariants({ size }),
          "hover:ring-2 hover:ring-primary-2",
          className
        )}
        {...props}
      >
        <CheckboxPrimitive.Indicator
          data-slot="checkbox-indicator"
          className="flex items-center justify-center text-current transition-none"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 8.82608L6.55114 13L14 5.60491L12.3864 4L6.55114 9.80151L3.60227 6.99433L2 8.82608Z" fill="white" />
          </svg>

        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      {!!label && (<Typography variant="p2">{label}</Typography>)}
    </label>
  )
}

export { Checkbox, checkboxVariants }
