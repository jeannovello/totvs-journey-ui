import { execSync } from 'child_process'
import fs from 'fs-extra'
import path from 'path'
import chalk from 'chalk'
import ora from 'ora'
import { spinner } from './spinner'

export async function installProjectDependencies(
  dependencies: string[],
  devDependencies: string[],
  cwd: string,
  options: {
    silent?: boolean
  } = {}
): Promise<void> {
  if (dependencies.length === 0 && devDependencies.length === 0) {
    return
  }

  const depSpinner = spinner('Installing dependencies...', {
    silent: options.silent,
  }).start()

  try {
    if (dependencies.length > 0) {
      await installDependencies(dependencies, cwd)
      depSpinner.text = `Installed dependencies: ${dependencies.join(', ')}`
    }

    if (devDependencies.length > 0) {
      await installDependencies(devDependencies, cwd, true)
      depSpinner.text = `Installed dev dependencies: ${devDependencies.join(', ')}`
    }

    depSpinner.succeed('Dependencies installed successfully')
  } catch (error) {
    depSpinner.fail('Failed to install dependencies')
    throw error
  }
}

export function validateDependencies(items: string[], allItems: string[]): {valid: string[], invalid: string[]} {
  const valid: string[] = []
  const invalid: string[] = []

  for (const item of items) {
    if (allItems.includes(item)) {
      valid.push(item)
    } else {
      invalid.push(item)
    }
  }

  return { valid, invalid }
}

export async function installDependencies(dependencies: string[], cwd: string, isDev: boolean = false) {
  if (dependencies.length === 0) return
  
  const uniqueDeps = [...new Set(dependencies)]
  const spinner = ora(`Installing ${uniqueDeps.length} dependencies...`).start()
  
  try {
    const packageManager = await detectPackageManager(cwd)
    const installCommand = getInstallCommand(packageManager, uniqueDeps, isDev)
    
    spinner.text = `Running: ${installCommand}`
    
    execSync(installCommand, {
      cwd,
      stdio: 'pipe'
    })
    
    spinner.succeed(`Installed dependencies: ${uniqueDeps.join(', ')}`)
  } catch (error) {
    spinner.fail('Failed to install dependencies')
    console.log(chalk.yellow('Please install them manually:'))
    console.log(chalk.gray(`  npm install ${uniqueDeps.join(' ')}`))
  }
}

async function detectPackageManager(cwd: string): Promise<'npm' | 'yarn' | 'pnpm' | 'bun'> {
  if (await fs.pathExists(path.join(cwd, 'bun.lockb'))) return 'bun'
  if (await fs.pathExists(path.join(cwd, 'pnpm-lock.yaml'))) return 'pnpm'
  if (await fs.pathExists(path.join(cwd, 'yarn.lock'))) return 'yarn'
  return 'npm'
}

function getInstallCommand(packageManager: string, dependencies: string[], isDev: boolean = false): string {
  const deps = dependencies.join(' ')
  let command = ''
  
  switch (packageManager) {
    case 'yarn':
      command = `yarn add ${deps}`
      break
    case 'pnpm':
      command = `pnpm add ${deps}`
      break
    case 'bun':
      command = `bun add ${deps}`
      break
    default:
      command = `npm install ${deps}`
  }

  if (isDev) {
    command += ` -D`
  }

  return command
}