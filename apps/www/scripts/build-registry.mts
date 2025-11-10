import path from "path"
import fs from "fs/promises"
import { RegistryItem } from "./schema.js"

const { registry } = await import("../registry/index.js")

const REGISTRY_PATH = path.join(process.cwd(), "public/r")

async function buildRegistryItem(registryItem: RegistryItem) {
  // com base no registryItem.files, criar o arquivo o arquivo json de cada
  let registryItemJson: RegistryItem = {
    name: registryItem.name,
    type: registryItem.type,
    dependencies: registryItem.dependencies,
    registryDependencies: registryItem.registryDependencies,
    files: []
  }

  // criar o arquivo index.json
  for (const file of registryItem.files) {
    let content = await fs.readFile(
      path.join(process.cwd(), "registry", file.path),
      "utf8"
    )

    registryItemJson = {
      ...registryItemJson,
      files: [
        ...registryItemJson.files,
        {
          path: file.path,
          type: file.type,
          content: JSON.stringify(content, null, 2),
        }
      ]
    }
  }

  const registryTypeDir = registryItem.type.split(":")[1]

  const registryTypeDirPath = path.join(REGISTRY_PATH, registryTypeDir)

  await fs.mkdir(registryTypeDirPath, { recursive: true })
  await fs.writeFile(path.join(registryTypeDirPath, `${registryItem.name}.json`), JSON.stringify(registryItemJson, null, 2), "utf8")
}

async function buildRegistry() {
  console.log("🏗️  Building registry...: ", registry)
  for (const item of registry.items) {
    await buildRegistryItem(item)
  }

  // criar o arquivo index.json
  await fs.writeFile(path.join(REGISTRY_PATH, 'index.json'), JSON.stringify(registry, null, 2), "utf8")
}

buildRegistry().catch(console.error)