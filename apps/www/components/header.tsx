"use client"

import Link from "next/link"
import { Typography } from "@/registry/ui/typography"

export function DocumentationHeader() {

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-zinc-800">
      <div className="h-14 container mx-auto border-r border-l border-zinc-800">
        <nav className="h-full w-full px-4 flex items-center justify-between">
          <Link href="/">
            <Typography variant="h3">Journey UI</Typography>
          </Link>
        </nav>
      </div>
    </header>
  )
}