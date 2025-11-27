"use client";
import Image from "next/image";

import { cn } from "@/registry/lib/utils";
import { type BreadcrumbItem, Breadcrumbs } from "@/registry/ui/breadcrumbs";
import { Typography } from "@/registry/ui/typography";

export interface HeaderProps {
  title: string;
  description?: string;
  breadcrumbs?: Array<BreadcrumbItem>;

  rightImagePath?: string;
}

const Header = ({ title, breadcrumbs, description, rightImagePath }: HeaderProps) => {
  return (
    <div className={cn("relative bg-grey-3 overflow-hidden pl-18 h-[200px]")}>
      {rightImagePath && (
        <div
          className={cn(
            "absolute bg-contain bg-no-repeat bg-right ml-auto container inset-0 h-[200px] -top-[18px]"
          )}
        >
          <Image
            src={rightImagePath}
            width={262}
            height={258}
            alt="Header background"
            className="absolute inset-0 bg-contain bg-no-repeat bg-right mr-14 ml-auto right-[24px] -top-[18px] "
          />
        </div>
      )}

      <div
        className={cn("container relative z-10 flex justify-between")}
        style={{
          paddingTop: breadcrumbs ? "48px" : "66px",
        }}
      >
        <div className="space-y-2 max-w-[800px]">
          {breadcrumbs && breadcrumbs.length > 0 && (
            <Breadcrumbs breadcrumbs={breadcrumbs} />
          )}
          
          <Typography as="h1" variant="h1">
            {title}
          </Typography>
          
          {description && (
            <Typography as="p" variant="s2" className="text-sm leading-none font-semibold text-grey-5">
              {description}
            </Typography>
          )}
        </div>
      </div>
    </div>
  );
};

export { Header };
