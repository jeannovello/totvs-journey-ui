import { Command } from "commander"
import fs from "fs-extra"
import path from "path"
import { spinner } from "../utils/spinner"
import { logger } from "../utils/logger"

export const init = new Command()
  .name("init")
  .description("Inicializa o projeto para usar o Journey UI")
  .option("-y, --yes", "Usa as configurações padrão", false)
  .option("-c, --cwd <cwd>", "Diretório alvo", process.cwd())
  .action(async (opts) => {
    const cwd = path.resolve(opts.cwd)

    try {
      logger.info("")
      logger.info("🔧 Iniciando configuração do Journey UI...")
      logger.info("")

      // --- 1) Criar journey-ui.json ----------------------------------------
      const configPath = path.join(cwd, "journey-ui.json")

      const defaultConfig = {
        isSrcDir: true,
        rsc: false,
        tailwind: {
          css: "./src/styles/journey.css",
          config: "tailwind.config.js"
        },
        aliases: {
          ui: "@/components/ui",
          utils: "@/lib/utils",
          lib: "@/lib",
          blocks: "@/components/blocks"
        }
      }

      const step1 = spinner("Criando journey-ui.json...")
      await fs.writeFile(configPath, JSON.stringify(defaultConfig, null, 2))
      step1.succeed("journey-ui.json criado ✅")

      // --- 2) Criar pastas --------------------------------------------------
      const step2 = spinner("Criando estrutura de pastas...")
      await fs.ensureDir(path.join(cwd, "src/components/ui"))
      await fs.ensureDir(path.join(cwd, "src/components/blocks"))
      await fs.ensureDir(path.join(cwd, "src/lib"))
      await fs.ensureDir(path.join(cwd, "src/styles"))
      step2.succeed("Pastas criadas ✅")

      // --- 3) Criar arquivo base de CSS ------------------------------------
      const cssPath = path.join(cwd, "src/styles/journey.css")
      const cssContent = `
@tailwind base;
@tailwind components;
@tailwind utilities;
`

      const step3 = spinner("Criando arquivo base de CSS...")
      if (!fs.existsSync(cssPath)) {
        await fs.writeFile(cssPath, cssContent)
      }
      step3.succeed("Arquivo journey.css criado ✅")

      // --- 4) Configurar Tailwind ------------------------------------------
      const tailwindConfigPath = path.join(cwd, "tailwind.config.js")
      const tailwindConfigContent = `
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
`

      const step4 = spinner("Configurando Tailwind...")
      if (!fs.existsSync(tailwindConfigPath)) {
        await fs.writeFile(tailwindConfigPath, tailwindConfigContent)
      }
      step4.succeed("Tailwind configurado ✅")

      // --- 5) Finalização ---------------------------------------------------
      logger.success("")
      logger.success("🎉 Journey UI foi inicializado com sucesso!")
      logger.info("")
      logger.info("Agora você pode instalar componentes:")
      logger.info(`  npx totvs-journey-ui add button`)
      logger.info("")
      logger.info("Ou explorar outros comandos:")
      logger.info(`  totvs-journey-ui --help`)
      logger.info("")

    } catch (error) {
      logger.error("")
      logger.error("❌ Falha ao inicializar o Journey UI")
      logger.error(error instanceof Error ? error.message : "Erro desconhecido")
      logger.error("")
      process.exit(1)
    }
  })
