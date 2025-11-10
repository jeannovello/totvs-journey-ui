import { Typography } from "@/registry/ui/typography"
import { CodeBlock } from "@/components/code-block"
import { InlineCode } from "@/components/code-block"
import { LIB_NAME } from "@/lib/constants"
import { Badge } from "@/registry/ui/badge"
import { SourceCodeDisplay } from "@/components/source-code-display"
import { InfoIcon } from "lucide-react"

export default function BadgePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-12">
        <Typography variant="h1" className="mb-4">
          Badge
        </Typography>
        <Typography variant="p1" className="text-slate-600 text-lg">
          Componente Badge para exibir status ou informações em pequenas etiquetas com estilos customizados via classes CSS.
        </Typography>
      </div>

      <section className="mb-12">
        <Typography variant="h2" className="mb-6">
          Instalação
        </Typography>
        <div className="space-y-4">
          <Typography variant="p1">
            Instale o componente Badge em seu projeto:
          </Typography>
          <CodeBlock language="bash" title="Terminal">
            {`npx ${LIB_NAME} add badge`}
          </CodeBlock>
          <Typography variant="p1">
            Ou copie e cole o código diretamente:
          </Typography>
          
          <SourceCodeDisplay 
            filePath="registry/ui/badge.tsx"
            title="badge.tsx"
          />

        </div>
      </section>

      {/* Uso básico */}
      <section className="mb-12">
        <Typography variant="h2" className="mb-6">
          Uso básico
        </Typography>
        <Typography variant="p1" className="mb-4">
          Importe o componente e utilize passando classes CSS para controlar as cores e estilos:
        </Typography>
        <div className="flex gap-4 flex-wrap">
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="alert">Alert</Badge>
          <Badge variant="info">Info</Badge>
          <Badge className="bg-purple-300 text-black">Outra cor</Badge>
          <Badge>
            Com icone
            <InfoIcon className="size-4" />
          </Badge>
        </div>
      </section>

      {/* Propriedades */}
      <section className="mb-12">
        <Typography variant="h2" className="mb-6">
          Propriedades
        </Typography>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-slate-200">
            <thead>
              <tr className="bg-slate-50">
                <th className="border border-slate-200 px-4 py-3 text-left">Propriedade</th>
                <th className="border border-slate-200 px-4 py-3 text-left">Tipo</th>
                <th className="border border-slate-200 px-4 py-3 text-left">Padrão</th>
                <th className="border border-slate-200 px-4 py-3 text-left">Descrição</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-4 py-3"><InlineCode>variant</InlineCode></td>
                <td className="border border-slate-200 px-4 py-3"><code>string</code></td>
                <td className="border border-slate-200 px-4 py-3"><InlineCode>info</InlineCode></td>
                <td className="border border-slate-200 px-4 py-3">Cor do badge.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

    </div>
  )
}
