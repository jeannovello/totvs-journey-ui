#!/usr/bin/env node

import { Command } from 'commander'
import { add } from './commands/add.js'

process.on('SIGINT', () => process.exit(0))
process.on('SIGTERM', () => process.exit(0))

async function main() {
  const program = new Command()
    .name('totvs-journey-ui')
    .description('Add TOTVS Journey UI components to your project')

  program.addCommand(add)

  program.parse()
}

main().catch((error) => {
  console.error('Unexpected error:', error)
  process.exit(1)
})
