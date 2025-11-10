import { Typography } from "@/registry/ui/typography"
import { TerminalBlock } from "@/components/terminal-block"
import { LIB_NAME } from "@/lib/constants"

export default function InicioRapidoPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <Typography variant="h1" className="mb-6">
        Início rápido
      </Typography>
      
      <div className="max-w-none space-y-6">
        <Typography variant="p1" className="text-lg text-muted-foreground mb-8">
          Bem-vindo ao Journey UI! Esta é sua primeira página de documentação.
        </Typography>

        <section className="space-y-4">
          <Typography variant="h2">Instalação</Typography>
          <Typography variant="p1">
            Configure o projeto para usar o Journey UI.
          </Typography>

          <Typography variant="p1">
            O comando de instalação via script está em desenvolvimento, para configurar opte pelo método manual.
          </Typography>

          <Typography variant="p1">
            Para instalar o Journey UI, você deve fazer a configuracao manual do projeto criando variaveis de ambiente, instalando os pacotes, criando arquivo utils e criando arquivo de configuração do Journey UI (journey-ui.json).
          </Typography>
        </section>

        <section className="space-y-4">
          <Typography variant="h2">Primeiro componente</Typography>
          <Typography variant="p1">
            Para importar os componentes ao projeto, basta rodar o comando add + o nome do componente:
          </Typography>
          
          <TerminalBlock title="Terminal">
            {`npx ${LIB_NAME} add button`}
          </TerminalBlock>
        </section>
      </div>
    </div>
  )
}