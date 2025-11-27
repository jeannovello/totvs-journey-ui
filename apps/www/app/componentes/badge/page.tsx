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

      {/* Exemplos de uso */}
      <section className="mb-12">
        <Typography variant="h2" className="mb-6">
          Exemplos de uso
        </Typography>

        <div className="space-y-4">
          <Typography variant="h3" className="mb-4">
            Badge - variant
          </Typography>

          <CodeBlock language="tsx" filename="page.tsx">
            {`<div className="flex gap-4 flex-wrap">
  <Badge variant="negative">Negative</Badge>
  <Badge variant="positive">Positive</Badge>
  <Badge variant="warning">Warning</Badge>
  <Badge variant="info">Info</Badge>
  <Badge variant="pending">Pending</Badge>
  <Badge variant="other">Other</Badge>
  <Badge className="bg-emerald-300">Outra cor</Badge>
  <Badge>
    Com icone
    <InfoIcon />
  </Badge>
</div>`}
          </CodeBlock>
          <div className="flex gap-4 flex-wrap">
            <Badge variant="negative">Negative</Badge>
            <Badge variant="positive">Positive</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="info">Info</Badge>
            <Badge variant="pending">Pending</Badge>
            <Badge variant="other">Other</Badge>
            <Badge>
              Com icone
              <InfoIcon />
            </Badge>
            <Badge className="bg-emerald-300">Outra cor</Badge>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <Typography variant="h3" className="mb-4">
            Badge - size
          </Typography>

          <CodeBlock language="tsx" filename="page.tsx">
          {`<div className="flex gap-4 flex-wrap">
  <Badge size="small">Small</Badge>
  <Badge size="medium">Medium</Badge>
  <Badge>
    Com icone
    <InfoIcon />
  </Badge>
</div>`}
        </CodeBlock>

          <div className="flex gap-4 flex-wrap">
            <Badge size="small">Small</Badge>
            <Badge size="medium">Medium</Badge>
          </div>
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
              <tr>
                <td className="border border-slate-200 px-4 py-3"><InlineCode>size</InlineCode></td>
                <td className="border border-slate-200 px-4 py-3"><code>string</code></td>
                <td className="border border-slate-200 px-4 py-3"><InlineCode>medium</InlineCode></td>
                <td className="border border-slate-200 px-4 py-3">Tamanho do badge.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

    </div>
  )
}
