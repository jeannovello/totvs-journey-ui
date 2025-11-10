import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/registry/lib/utils";

const badgeVariants = cva(
  "px-2 py-1 h-min text-white text-xs font-semibold leading-5 rounded-full capitalize text-center inline-flex items-center gap-1",
  {
    variants: {
      variant: {
        info: "bg-status-info",
        success: "bg-status-success",
        warning: "bg-status-warning",
        alert: "bg-status-alert",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
}

  
function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }