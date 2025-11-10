import fs from 'fs-extra'
import path from 'path'
import prompts from 'prompts'
import { logger } from '../utils/logger'
import { spinner } from '../utils/spinner'
import type { RegistryItem } from '../registry/schema'
import { fetchRegistryItem } from '../registry/api'
import { JourneyUiConfig } from './journey-ui-config'

export async function copyRegistryFiles(
  items: RegistryItem[],
  targetCwd: string,
  options: {
    force?: boolean
    silent?: boolean
  } = {},
  journeyUiConfig: JourneyUiConfig
): Promise<void> {
  const copySpinner = spinner('Copying component files...', {
    silent: options.silent,
  }).start()

  try {
    for (const item of items) {
      if (!item.files || item.files.length === 0) continue
      
      for (const file of item.files) {
        if (!file.content) {
          // Buscar conteúdo do arquivo se não estiver incluído
          const fullItem = await fetchItemContent(item.name, item.type)
          if (!fullItem) continue
          
          const fullFile = fullItem.files.find(f => f.path === file.path)
          if (!fullFile?.content) continue
          
          file.content = resolveImportsByAliases(fullFile.content, journeyUiConfig)
        }

        const targetPath = resolveTargetFilePath(targetCwd, file, journeyUiConfig)
        
        if (await fs.pathExists(targetPath) && !options.force) {
          copySpinner.stop()

          const { shouldOverwrite } = await prompts({
            type: 'confirm',
            name: 'shouldOverwrite',
            message: `O arquivo ${file.target || file.path} já existe. Deseja sobrescrever?`,
            initial: false
          }, {
            onCancel: () => {
              logger.info('Operação cancelada pelo usuário')
              process.exit(0)
            }
          })

          copySpinner.start()

          if (!shouldOverwrite) {
            logger.info(`Arquivo ${file.target || file.path} mantido (não sobrescrito)`)
            continue
          }
          
          logger.info(`Sobrescrevendo arquivo ${file.target || file.path}...`)
        }

        await fs.ensureDir(path.dirname(targetPath))
        
        await fs.writeFile(targetPath, JSON.parse(file.content))
      }
    }

    copySpinner.succeed('Component files copied successfully')
  } catch (error) {
    copySpinner.fail('Failed to copy component files')
    throw error
  }
}

async function fetchItemContent(name: string, type: string): Promise<RegistryItem | null> {
  try {
    const result = await fetchRegistryItem(name, type)
    return result
  } catch (error) {
    return null
  }
}

export async function validateTargetDirectory(cwd: string): Promise<boolean> {
  const packageJsonPath = path.join(cwd, 'package.json')
  
  if (!await fs.pathExists(packageJsonPath)) {
    logger.error('No package.json found. Please run this command in a valid project.')
    return false
  }

  return true
}

function resolveTargetFilePath(cwd: string, file: { target?: string, type: string, path: string }, journeyUiConfig: JourneyUiConfig) {
  let target = ''

  const resolvedTargetPaths: Record<string, string> = {
    'registry:ui': journeyUiConfig.aliases.ui,
    'registry:lib': journeyUiConfig.aliases.lib,
    'registry:block': journeyUiConfig.aliases.blocks,
  }

  const targetDirByType = resolvedTargetPaths[file.type]

  const filename = file.path.split('/').pop() || ''
  target = path.join(cwd, targetDirByType.replace('@/', journeyUiConfig.isSrcDir ? 'src/' : ''), filename)

  return target
}

function resolveImportsByAliases(content: string, journeyUiConfig: JourneyUiConfig) {
  const aliases: Record<string, string> = {
    '@/registry/lib/utils': journeyUiConfig.aliases.utils,
    '@/registry/ui': journeyUiConfig.aliases.ui,
    '@/registry/blocks': journeyUiConfig.aliases.blocks,
  }

  for (const alias in aliases) {
    if (content.includes(alias)) {
      content = content.replaceAll(alias, aliases[alias])
    }
  }

  return content
}