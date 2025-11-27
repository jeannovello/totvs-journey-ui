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
  return (
    <nav aria-label="Breadcrumb" className="flex items-center text-base font-normal text-grey-4 space-x-0.5">
      {breadcrumbs.map(({ label, path }, index) => {
        const isLast = index === breadcrumbs.length - 1;

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

            {isLast ? (
              <Typography variant="s3" className="text-grey">{label}</Typography>
            ) : path ? (
              <Link href={path}>
                <Typography className="text-grey-5 hover:text-primary">{label}</Typography>
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