import { Registry } from "@/scripts/schema"

import { lib } from "@/registry/registry-lib"
import { ui } from "@/registry/registry-ui"
import { blocks } from "@/registry/registry-blocks"

export const registry: Registry = {
  name: "journey-ui",
  homepage: "https://journey-ui.com",
  items: [
    ...lib,
    ...ui,
    ...blocks,
    {
      name: "postcss-config",
      type: "registry:init",
      files: [
        {   
          path: "postcss.config.mjs",
          type: "registry:init",
        },
      ],
    },
    {
      name: "global-css",
      type: "registry:init",
      files: [
        {
          path: "globals.css",
          type: "registry:init"
        },
      ],
    },
  ],
}