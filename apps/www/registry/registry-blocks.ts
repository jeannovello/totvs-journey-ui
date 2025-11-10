import { Registry } from "@/scripts/schema";

export const blocks: Registry["items"] = [
  {
    name: "header",
    type: "registry:block",
    dependencies: [],
    registryDependencies: ["breadcrumbs", "typography"],
    files: [
      {
        path: "blocks/header.tsx",
        type: "registry:block",
      },
    ],
  },
]