import { logger } from '../utils/logger'
import { spinner } from './spinner'
import type { Registry, RegistryItem } from '../registry/schema'
import {
  fetchRegistry,
  findItemsByNames,
  filterItemsByType,
  collectAllDependencies
} from '../registry/api'
import { copyRegistryFiles, validateTargetDirectory } from '../utils/file-operations'
import { installProjectDependencies } from './dependencies'
import { JourneyUiConfig } from './journey-ui-config'
export interface InstallOptions {
  cwd: string
  components?: string[]
  type?: string
  force?: boolean
  silent?: boolean
  journeyUiConfig: JourneyUiConfig
}

export async function installComponents(options: InstallOptions): Promise<void> {
  if (!await validateTargetDirectory(options.cwd)) {
    process.exit(1)
  }

  const fetchSpinner = spinner('Fetching registry...', {
    silent: options.silent,
  }).start()

  let registry: Registry
  try {
    registry = await fetchRegistry()
    fetchSpinner.succeed('Registry fetched successfully')
  } catch (error) {
    fetchSpinner.fail('Failed to fetch registry')
    throw error
  }

  let itemsToInstall: RegistryItem[] = []

  if (options.components && options.components.length > 0) {
    // Instalar componentes específicos por nome
    const { found, missing } = findItemsByNames(registry.items, options.components)
    
    if (missing.length > 0) {
      logger.error(`Components not found: ${missing.join(', ')}`)
      process.exit(1)
    }

    itemsToInstall = found
  } else if (options.type) {
    // Instalar componentes por tipo
    const typeFilter = options.type.startsWith('registry:') ? options.type : `registry:${options.type}`
    itemsToInstall = filterItemsByType(registry.items, typeFilter)
    
    if (itemsToInstall.length === 0) {
      logger.error(`No components found for type: ${options.type}`)
      process.exit(1)
    }
  } else {
    logger.error('Please specify components to install using --components or --type')
    process.exit(1)
  }

  // Coletar todas as dependências
  const { items: allItems, dependencies, devDependencies } = collectAllDependencies(
    itemsToInstall,
    registry
  )

  logger.info(`Installing ${allItems.length} component(s)...`)
  if (allItems.length > itemsToInstall.length) {
    const additionalItems = allItems.length - itemsToInstall.length
    logger.info(`Including ${additionalItems} additional dependency component(s)`)
  }

  // Copiar arquivos
  await copyRegistryFiles(allItems, options.cwd, {
    force: options.force,
    silent: options.silent,
  }, options.journeyUiConfig)

  // Instalar dependências npm
  await installProjectDependencies(dependencies, devDependencies, options.cwd, {
    silent: options.silent
  })

  logger.success('Components installed successfully!')
} 