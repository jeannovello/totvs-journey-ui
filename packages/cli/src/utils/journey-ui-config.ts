import fs from 'fs/promises'
import path from 'path'

export interface JourneyUiConfig {
  isSrcDir: boolean
  rsc: boolean
  tailwind: {
    css: string
    config: string
  }
  aliases: {
    ui: string
    utils: string
    lib: string
    blocks: string
  }
}

export async function getJourneyUiConfig(cwd: string): Promise<JourneyUiConfig | null> {
  const configPath = path.join(cwd, 'journey-ui.json')

  try {
    const config = await fs.readFile(configPath, 'utf8')
    return JSON.parse(config)
  } catch {
    return null
  }
}
