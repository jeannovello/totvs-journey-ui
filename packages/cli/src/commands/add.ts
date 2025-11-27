import { Command } from 'commander'
import { z } from 'zod'
import { installComponents } from '../utils/component-installer'
import { logger } from '../utils/logger'
import { highlighter } from '../utils/highlighter'
import { getJourneyUiConfig } from '../utils/journey-ui-config'

const addOptionsSchema = z.object({
  components: z.array(z.string()).optional(),
  type: z.string().optional(),
  cwd: z.string(),
  force: z.boolean().default(false),
  silent: z.boolean().default(false),
})

export const add = new Command()
  .name('add')
  .description('Add components to your project')
  .argument('[components...]', 'The components to add')
  .option('-t, --type <type>', 'Component type to install (ui, lib, hook, etc.)')
  .option('-f, --force', 'Overwrite existing files', false)
  .option('-s, --silent', 'Silent mode', false)
  .option(
    '-c, --cwd <cwd>',
    'The working directory. defaults to the current directory.',
    process.cwd()
  )
  .action(async (components, opts) => {
    try {
      const options = addOptionsSchema.parse({
        components: components?.length > 0 ? components : undefined,
        ...opts,
      })

      const journeyUiConfig = await getJourneyUiConfig(options.cwd)

      if (!journeyUiConfig) {
        logger.error('Journey UI config not found.')
        process.exit(1)
      }

      if (!options.components && !options.type) {
        logger.error('')
        logger.error('Please specify components to add or use --type to filter by type')
        logger.error('')
        logger.info('Examples:')
        logger.info(`  ${highlighter.info('npx totvs-journey-ui add button card')}`)
        logger.info(`  ${highlighter.info('npx totvs-journey-ui add --type ui')}`)
        logger.info(`  ${highlighter.info('npx totvs-journey-ui add --type lib')}`)
        logger.error('')
        process.exit(1)
      }

      logger.info('')
      logger.info(`${highlighter.info('Journey UI')} - Adding components...`)
      logger.info('')

      await installComponents({
        cwd: options.cwd,
        components: options.components,
        type: options.type,
        force: options.force,
        silent: options.silent,
        journeyUiConfig,
      })

      logger.info('')
      logger.success('✅ Components added successfully!')
      logger.info('')

    } catch (error) {
      logger.error('')
      logger.error('Failed to add components')
      logger.error(error instanceof Error ? error.message : 'Unknown error')
      logger.error('')
      process.exit(1)
    }
  })