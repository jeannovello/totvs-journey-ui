// import { installComponents } from '../utils/component-installer'
// import { logger } from '../utils/logger'
// import { highlighter } from '../utils/highlighter'
// import { z } from 'zod'

// export const initOptionsSchema = z.object({
//   cwd: z.string(),
//   components: z.array(z.string()).optional(),
//   yes: z.boolean(),
//   defaults: z.boolean(),
//   force: z.boolean(),
//   silent: z.boolean(),
//   isNewProject: z.boolean(),
//   srcDir: z.boolean().optional(),
// })

// export async function init(options: z.infer<typeof initOptionsSchema>) {
//   logger.info('')
//   logger.info(`${highlighter.info('Journey UI')} initialization started...`)
//   logger.info('')

//   // 2. Instalar componentes essenciais
//   const essentialComponents = ['postcss-config', 'global-css', 'utils']
  
//   try {
//     await installComponents({
//       cwd: options.cwd,
//       components: essentialComponents,
//       force: options.force,
//       silent: options.silent
//     })

//     logger.info('')
//     logger.success('✅ Journey UI initialized successfully!')
//     logger.info('')
//     logger.info(`${highlighter.info('Next steps:')}`)
//     logger.info('  1. Run "npx journey-ui add button" to add your first component')
//     logger.info('  2. Import and use components in your code')
//     logger.info('  3. Customize the utils and theme as needed')
//     logger.info('')

//   } catch (error) {
//     logger.error('Initialization failed')
//     logger.error(error instanceof Error ? error.message : 'Unknown error')
//     process.exit(1)
//   }
// }