import fs from 'fs-extra'
import path from 'path'
import { logger } from '../utils/logger'
import { Registry, RegistryItem } from './schema'

const REGISTRY_URL = 'https://raw.githubusercontent.com/journey-ui/ui/main/apps/www/public/r'

export async function fetchRegistry(): Promise<Registry> {
  try {
    if (process.env.NODE_ENV === 'development') {
      const localPath = path.resolve(process.cwd(), '../../apps/www/public/r/index.json')
      if (await fs.pathExists(localPath)) {
        return await fs.readJson(localPath)
      }
    }

    const response = await fetch(`${REGISTRY_URL}/index.json`)

    if (!response.ok) {
      throw new Error(`Registry fetch failed: ${response.status}`)
    }
    
    return await response.json()
  } catch (error) {
    logger.error('Failed to fetch registry')
    throw error
  }
}

export async function fetchRegistryItem(name: string, type: string): Promise<RegistryItem | null> {
  try {
    const typeDir = type.split(':')[1] // registry:ui -> ui
    
    if (process.env.NODE_ENV === 'development') {
      const currentFile = __filename || (typeof __dirname !== 'undefined' ? __dirname : '')
      const localPath = path.resolve(currentFile, '..', '..', '..', '..', 'apps', 'www', 'public', 'r', typeDir, `${name}.json`)
      if (await fs.pathExists(localPath)) {
        return await fs.readJson(localPath)
      }
    }

    const response = await fetch(`${REGISTRY_URL}/${typeDir}/${name}.json`)

    if (!response.ok) {
      return null
    }
    
    return await response.json()
  } catch (error) {
    return null
  }
}

export function filterItemsByType(items: RegistryItem[], type: string): RegistryItem[] {
  return items.filter(item => item.type === type)
}

export function findItemsByNames(items: RegistryItem[], names: string[]): {
  found: RegistryItem[]
  missing: string[]
} {
  const found: RegistryItem[] = []
  const missing: string[] = []

  for (const name of names) {
    const item = items.find(i => i.name === name)
    if (item) {
      found.push(item)
    } else {
      missing.push(name)
    }
  }

  return { found, missing }
}

export function collectAllDependencies(items: RegistryItem[], registry: Registry): {
  items: RegistryItem[]
  dependencies: string[]
  devDependencies: string[]
} {
  const allItems = new Set<RegistryItem>()
  const allDeps = new Set<string>()
  const allDevDeps = new Set<string>()

  function collectItem(item: RegistryItem) {
    if (allItems.has(item)) return

    allItems.add(item)

    // Adicionar dependências npm
    item.dependencies?.forEach(dep => allDeps.add(dep))
    item.devDependencies?.forEach(dep => allDevDeps.add(dep))

    // Buscar dependências do registry recursivamente
    if (item.registryDependencies) {
      for (const depName of item.registryDependencies) {
        const depItem = registry.items.find(i => i.name === depName)
        if (depItem) {
          collectItem(depItem)
        }
      }
    }
  }

  items.forEach(collectItem)

  return {
    items: Array.from(allItems),
    dependencies: Array.from(allDeps),
    devDependencies: Array.from(allDevDeps)
  }
}