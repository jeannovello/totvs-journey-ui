import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/registry/lib/utils";
import { typographyVariants } from "@/registry/ui/typography";
const badgeVariants = cva(
  "px-2 h-6 text-white rounded-full text-center inline-flex items-center gap-1 [&>svg]:size-3.5",
  {
    variants: {
      variant: {
        negative: "bg-status-negative",
        positive: "bg-status-positive",
        warning: "bg-status-warning",
        info: "bg-status-info",
        pending: "bg-status-pending",
        other: "bg-status-other",
      },
      size: {
        small: "",
        medium: "",
      }
    },
    defaultVariants: {
      variant: "info",
      size: "medium",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
}
  
function Badge({ className, variant, size, ...props }: BadgeProps) {
  const getTypographyVariant = (size: string | null | undefined) => {
    switch (size) {
      case "small": return "s5"
      case "medium": return "s4" 
      default: return "s4"
    }
  }
  
  return (
    <span className={cn(badgeVariants({ variant }), typographyVariants({ variant: getTypographyVariant(size) }),  className)} {...props} />
  )
}

export { Badge, badgeVariants }