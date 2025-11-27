import { CodeBlock, InlineCode } from "@/components/code-block";
import { LIB_NAME } from "@/lib/constants";
import { DropdownComponent } from "@/registry/ui/dropdown";
import { Typography } from "@/registry/ui/typography";
import { SourceCodeDisplay } from "@/components/source-code-display";

const options = [
  { value: "1", label: "Empresa 1" },
  { value: "2", label: "Empresa 2" },
  { value: "3", label: "Empresa 3" },
  { value: "4", label: "Empresa 4" },
  { value: "5", label: "Empresa 5" },
  { value: "6", label: "Empresa 6" },
]

export default function DropdownPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Introdução */}
      <div className="mb-12">
        <Typography variant="h1" className="mb-4">
          Dropdown
        </Typography>
        <Typography variant="p1" className="text-slate-600 text-lg">
          Componente de dropdown
        </Typography>
      </div>

      {/* Instalação */}
      <section className="mb-12 space-y-4">
        <Typography variant="h2" className="mb-6">Instalação</Typography>
        <Typography variant="p1">Para instalar o componente:</Typography>

        <CodeBlock language="bash" title="Terminal">
          {`npx ${LIB_NAME} add dropdown`}
        </CodeBlock>

        <Typography variant="p1">
            Ou copie e cole o código do componente diretamente:
          </Typography>

          <SourceCodeDisplay
            filePath="registry/ui/dropdown.tsx"
            language="tsx"
          />
      </section>

      {/* Exemplos de uso */}
      <section className="mb-12">
        <Typography variant="h2" className="mb-6">
          Exemplos de uso
        </Typography>

        {/* Exemplo 1 */}
        <Typography variant="h3" className="mb-4">
          Dropdown simples
        </Typography>
        <CodeBlock language="tsx" filename="page.tsx">
          {`const options = ${JSON.stringify(options.slice(0, 3), null, 2)}

<DropdownComponent
  options={options}
  placeholder="Selecione uma empresa"
  handleSelect={(value) => {}}
/>`}
        </CodeBlock>

        <div className="my-6">
          <DropdownComponent
            placeholder="Selecione uma empresa"
            options={options.slice(0, 3)}
          />
        </div>
      </section>

      {/* Props */}
      <section className="mb-12">
        <Typography variant="h2" className="mb-6">
          Propriedades
        </Typography>
        
        <table className="w-full border-collapse border border-slate-200">
          <thead>
            <tr className="bg-slate-50">
              <th className="border border-slate-200 px-4 py-3 text-left">
                <Typography variant="p2b">Propriedade</Typography>
              </th>
              <th className="border border-slate-200 px-4 py-3 text-left">
                <Typography variant="p2b">Tipo</Typography>
              </th>
              <th className="border border-slate-200 px-4 py-3 text-left">
                <Typography variant="p2b">Padrão</Typography>
              </th>
              <th className="border border-slate-200 px-4 py-3 text-left">
                <Typography variant="p2b">Descrição</Typography>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 px-4 py-3">
                <InlineCode>placeholder</InlineCode>
              </td>
              <td className="border border-slate-200 px-4 py-3">
                <Typography variant="p2">string</Typography>
              </td>
              <td className="border border-slate-200 px-4 py-3">
                <Typography variant="p2">Opcional</Typography>
              </td>
              <td className="border border-slate-200 px-4 py-3">
                <Typography variant="p2">Texto do placeholder</Typography>
              </td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-3">
                <InlineCode>options</InlineCode>
              </td>
              <td className="border border-slate-200 px-4 py-3">
                <Typography variant="p2">Array&lt;{`{ value: string; label: string }`}&gt;</Typography>
              </td>
              <td className="border border-slate-200 px-4 py-3">
                <Typography variant="p2">Opcional</Typography>
              </td>
              <td className="border border-slate-200 px-4 py-3">
                <Typography variant="p2">
                  Array de opções
                </Typography>
              </td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-3">
                <InlineCode>handleSelect</InlineCode>
              </td>
              <td className="border border-slate-200 px-4 py-3">
                <Typography variant="p2">
                  {`(value: string) => void`}
                </Typography>
              </td>
              <td className="border border-slate-200 px-4 py-3">
                <Typography variant="p2">Opcional</Typography>
              </td>
              <td className="border border-slate-200 px-4 py-3">
                <Typography variant="p2">
                  Função que será chamada quando o usuário selecionar uma opção
                </Typography>
              </td>
            </tr>
          </tbody>
        </table>    
      </section>
    </div>
  );
}