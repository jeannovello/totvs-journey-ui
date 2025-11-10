import Link from "next/link";
import { ChevronRight } from "@untitled-ui/icons-react";
import { Typography } from "./typography";

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

export interface BreadcrumbsProps {
  breadcrumbs: BreadcrumbItem[];
}

function Breadcrumbs({ breadcrumbs }: BreadcrumbsProps) {
  const showEllipsis = breadcrumbs.length >= 5;
  let itemsToRender: BreadcrumbItem[] = breadcrumbs;
  if (showEllipsis) {
    itemsToRender = [
      breadcrumbs[0],
      { label: "...", path: undefined },
      ...breadcrumbs.slice(-2),
    ];
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center text-base font-normal text-grey-4 space-x-0.5"
    >
      {itemsToRender.map(({ label, path }, index) => {
        const isLast = index === itemsToRender.length - 1;

        return (
          <div key={index} className="flex items-center space-x-0.5">
            {index > 0 && (
              <ChevronRight
                width={24}
                height={24}
                aria-label="Separador de breadcrumb"
                className="text-primary"
              />
            )}

            {label === "..." ? (
              <Typography className="text-grey-5">...</Typography>
            ) : isLast ? (
              <Typography variant="s2" className="text-grey">
                {label}
              </Typography>
            ) : path ? (
              <Link href={path}>
                <Typography className="text-grey-5 hover:text-primary">
                  {label}
                </Typography>
              </Link>
            ) : (
              <Typography className="text-grey-5">{label}</Typography>
            )}
          </div>
        );
      })}
    </nav>
  );
}

export { Breadcrumbs };
