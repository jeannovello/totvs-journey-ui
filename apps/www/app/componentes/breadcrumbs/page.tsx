import { Typography } from "@/registry/ui/typography"
import { Breadcrumbs } from "@/registry/ui/breadcrumbs"
import { CodeBlock } from "@/components/code-block"
import { SourceCodeDisplay } from "@/components/source-code-display"

export default function BreadcrumbsPage() {
  const basicExample = `import { Breadcrumbs } from "@/components/ui/breadcrumbs"

const breadcrumbItems = [
  { label: "Home", path: "/" },
  { label: "Documentação" },
  { label: "Componentes" },
  { label: "Breadcrumbs" } // Item atual (sem path)
]

export function MyPage() {
  return (
    <Breadcrumbs breadcrumbs={breadcrumbItems} />
  )
}`

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <Typography variant="h1" className="mb-6">
        Breadcrumbs
      </Typography>
      
      <div className="max-w-none space-y-8">
        <Typography variant="p1" className="text-lg text-muted-foreground mb-8">
          O componente Breadcrumbs exibe o caminho de navegação atual, permitindo que os usuários 
          entendam sua localização na hierarquia do site e naveguem facilmente para níveis superiores.
        </Typography>

        {/* Instalação */}
        <section className="space-y-4">
          <Typography variant="h2">Instalação</Typography>
          <Typography variant="p1">
            Adicione o componente Breadcrumbs ao seu projeto:
          </Typography>

          <CodeBlock language="bash" title="Terminal">
            npx @journey-ui/cli add breadcrumbs
          </CodeBlock>

          <Typography variant="p1">
            Ou copie e cole o código do componente diretamente:
          </Typography>

          <SourceCodeDisplay
            filePath="registry/ui/breadcrumbs.tsx"
            language="tsx"
          />
        </section>

        {/* Uso Básico */}
        <section className="space-y-4">
          <Typography variant="h2">Uso Básico</Typography>
          <Typography variant="p1">
            Use o componente Breadcrumbs passando um array de itens com label e path:
          </Typography>

          <div className="border rounded-lg p-6 bg-gray-50">
            <Breadcrumbs 
              breadcrumbs={[
                { label: "Home", path: "/" },
                { label: "Documentação" },
                { label: "Componentes" },
                { label: "Breadcrumbs" }
              ]}
            />
          </div>

          <CodeBlock language="tsx" title="Exemplo básico">
            {basicExample}
          </CodeBlock>
        </section>

        {/* Props */}
        <section className="space-y-4">
          <Typography variant="h2">Propriedades</Typography>
          
          <div className="border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Propriedade</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Tipo</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Padrão</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Descrição</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 text-sm font-mono">breadcrumbs</td>
                  <td className="px-4 py-3 text-sm">BreadcrumbItem[]</td>
                  <td className="px-4 py-3 text-sm">-</td>
                  <td className="px-4 py-3 text-sm">Array de itens do breadcrumb</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-mono">className</td>
                  <td className="px-4 py-3 text-sm">string</td>
                  <td className="px-4 py-3 text-sm">-</td>
                  <td className="px-4 py-3 text-sm">Classes CSS adicionais</td>
                </tr>
              </tbody>
            </table>
          </div>

          <Typography variant="h3">BreadcrumbItem</Typography>
          
          <div className="border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Propriedade</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Tipo</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Obrigatório</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Descrição</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 text-sm font-mono">label</td>
                  <td className="px-4 py-3 text-sm">string</td>
                  <td className="px-4 py-3 text-sm">Sim</td>
                  <td className="px-4 py-3 text-sm">Texto exibido no breadcrumb</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-sm font-mono">path</td>
                  <td className="px-4 py-3 text-sm">string</td>
                  <td className="px-4 py-3 text-sm">Não</td>
                  <td className="px-4 py-3 text-sm">URL para navegação (se omitido, não será clicável)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  )
}