import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"

import { cn } from "@/registry/lib/utils"
import { ChevronDown } from "@untitled-ui/icons-react"
import { typographyVariants } from "@/registry/ui/typography"

const Dropdown = SelectPrimitive.Root

const DropdownValue = SelectPrimitive.Value

const DropdownTrigger = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      typographyVariants({ variant: "p1" }),
      "group w-max h-11 py-2.5 px-4 flex items-center justify-between gap-3 border border-grey-5 rounded-full cursor-pointer text-grey-5 whitespace-nowrap transition-all",
      "focus:outline-none hover:border-primary data-[state=open]:border-primary-3",
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown
        aria-label="Abrir menu"
        className="text-grey-5 group-hover:text-primary group-data-[state=open]:text-primary-3 transition-all group-disabled:text-grey-3" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
DropdownTrigger.displayName = SelectPrimitive.Trigger.displayName

const DropdownContent = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative py-[18px] max-h-96 px-4 z-50 overflow-y-auto rounded-2xl bg-white border border-grey-3 drop-shadow-2xl",
        typographyVariants({ variant: "p1" }),
        className
      )}
      position={position}
      sideOffset={props.sideOffset || 8}
      {...props}
    >

      <SelectPrimitive.Viewport className="space-y-2.5">
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
DropdownContent.displayName = SelectPrimitive.Content.displayName

const DropdownItem = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex items-center select-none cursor-pointer outline-none",
      "data-[disabled]:opacity-50 data-[disabled]:pointer-events-none data-[selected=true]:text-primary hover:text-primary hover:data-[selected=true]:text-primary-dark",
      className
    )}
    {...props}
  >
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
DropdownItem.displayName = SelectPrimitive.Item.displayName

const DropdownSeparator = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
DropdownSeparator.displayName = SelectPrimitive.Separator.displayName

export interface DropdownComponentItem {
  value: string
  label: string
}

interface DropdownComponentProps {
  placeholder?: string
  options: DropdownComponentItem[]
  handleSelect?: (value: string) => void
}

const DropdownComponent = React.forwardRef<
  HTMLDivElement,
  DropdownComponentProps
>(({ options, handleSelect, placeholder = "Selecione uma opção" }, ref) => (
  <Dropdown onValueChange={handleSelect}>
    <DropdownTrigger>
      <DropdownValue placeholder={placeholder} />
    </DropdownTrigger>
    <DropdownContent>
      {options.map(({ value, label }: DropdownComponentItem) => {
        return (
          <DropdownItem value={value} key={value}>
            {label}
          </DropdownItem>
        );
      })}
    </DropdownContent>
  </Dropdown>
))

export {
  Dropdown,
  DropdownValue,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  DropdownSeparator,
  DropdownComponent,
}
