import { defineConfig } from "tsup"

export default defineConfig({
  clean: true,
  dts: true,
  entry: ["src/index.ts", "src/registry/index.ts", "src/mcp/index.ts"],
  format: ["cjs"],
  sourcemap: true,
  minify: true,
  target: "node18",
  outDir: "dist",
  treeshake: true,
  splitting: false,
  bundle: true,
  external: [
    'tsconfig-paths',
    'fs',
    'path',
    'os',
    'util',
    'events',
    'stream'
  ],
  noExternal: [
    '@antfu/ni',
    'chalk',
    'commander',
    'cosmiconfig',
    'execa',
    'fs-extra',
    'kleur',
    'ora',
    'prompts',
    'zod'
  ]
})