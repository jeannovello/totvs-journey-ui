"use client"

import { CodeBlock, InlineCode } from "@/components/code-block";
import { Typography } from "@/registry/ui/typography";
import { Checkbox } from "@/registry/ui/checkbox";
import { LIB_NAME } from "@/lib/constants";

export default function CheckboxPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Introdução */}
      <div className="mb-12">
        <Typography variant="h1" className="mb-4">
          Checkbox
        </Typography>
        <Typography variant="p1" className="text-slate-600 text-lg">
          Componente de checkbox
        </Typography>
      </div>

      {/* Instalação */}
      <section className="mb-12 space-y-4">
        <Typography variant="h2" className="mb-6">Instalação</Typography>
        <Typography variant="p1">Para instalar o componente:</Typography>

        <CodeBlock language="bash" title="Terminal">
          {`npx ${LIB_NAME} add checkbox`}
        </CodeBlock>

        <Typography variant="p1">
          Ou copie e cole o código do componente diretamente:
        </Typography>
      </section>

      {/* Exemplos de uso avançado */}
      <section className="mb-12">
        <Typography variant="h2" className="mb-6">
          Exemplos de uso
        </Typography>

        <div className="space-y-6">
        <div>
            <Typography variant="h3" className="mb-4">
              Checkbox básico
            </Typography>
            <CodeBlock language="tsx" filename="page.tsx">
              {`<Checkbox />`}
            </CodeBlock>

            <div className="my-6 border border-slate-200 rounded-md p-4">
              <Checkbox />
            </div>
          </div>

          <div>
            <Typography variant="h3" className="mb-4">
              Checkbox com label
            </Typography>
            <CodeBlock language="tsx" filename="page.tsx">
              {`<Checkbox
  label="Checkbox 1"
  onCheckedChange={() => {}}
/>`}
            </CodeBlock>

            <div className="my-6 border border-slate-200 rounded-md p-4">
              <Checkbox
                label="Checkbox 1"
                onCheckedChange={() => {}}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Propriedades */ }
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
                  <InlineCode>size</InlineCode>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">string</Typography>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">"base" | "sm"</Typography>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">Tamanho do checkbox</Typography>
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">
                  <InlineCode>label</InlineCode>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">string</Typography>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">false</Typography>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">Label do checkbox</Typography>
                </td>
              </tr>
              
              <tr>
                <td className="border border-slate-200 px-4 py-3">
                  <InlineCode>checked</InlineCode>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">string</Typography>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">-</Typography>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">Valor do checkbox</Typography>
                </td>
              </tr> 
              <tr>
                <td className="border border-slate-200 px-4 py-3">
                  <InlineCode>onCheckedChange</InlineCode>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">function</Typography>
                </td> 
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">-</Typography>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">Função chamada quando o checkbox é marcado</Typography>
                </td>
              </tr>
            </tbody>
          </table>
      </section>
    </div>
  );
}
      