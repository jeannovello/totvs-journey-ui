"use client";

import { Typography } from "@/registry/ui/typography";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  if (isHome) return <></>;

  const navigations = [
    {
      label: "Guias",
      items: [
        {
          label: "Inicio rápido",
          href: "/guias/inicio-rapido"
        }
      ]
    },
    {
      label: "Blocos",
      items: [
        {
          label: "Header",
          href: "/blocks/header"
        }
      ]
    },
    {
      label: "Componentes",
      items: [
        {
          label: "Typography",
          href: "/componentes/typography"
        },
        {
          label: "Button",
          href: "/componentes/button"
        },
        {
          label: "Badge",
          href: "/componentes/badge"
        },
        {
          label: "Tooltip",
          href: "/componentes/tooltip"
        },
        {
          label: "Breadcrumbs",
          href: "/componentes/breadcrumbs"
        }
      ]
    }
  ]

  return (
    <div className="w-56 flex-shrink-0 h-full overflow-y-auto py-8 space-y-8">
      {navigations.map((navigation) => (
        <div key={navigation.label} className="flex flex-col gap-2 mr-16">
          <Typography variant="p1b" className="leading-none px-2">{navigation.label}</Typography>

          <nav>
            <ul>
              {navigation.items.sort((a, b) => a.label.localeCompare(b.label)).map((item) => (
                <li key={item.href}>
                  <LinkSidebar
                    href={item.href}
                    label={item.label}
                  />
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ))}
    </div>
  );
}

interface LinkSidebarProps {
  href: string;
  label: string;
}

function LinkSidebar({ href, label }: LinkSidebarProps) {
  return (
    <Link href={href}>
      <Typography variant="p2" className="leading-none w-min whitespace-nowrap p-2 rounded-md hover:bg-grey-2">{label}</Typography>
    </Link>
  )
}