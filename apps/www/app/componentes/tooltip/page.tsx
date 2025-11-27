import { Button } from "@/registry/ui/button";
import { Typography } from "@/registry/ui/typography";
import { CodeBlock } from "@/components/code-block";
import { InlineCode } from "@/components/code-block";
import { Info, AlertCircle, HelpCircle, Check } from "lucide-react";
import { LIB_NAME } from "@/lib/constants";
import { Tooltip } from "@/registry/ui/tooltip";
import { SourceCodeDisplay } from "@/components/source-code-display";

export default function TooltipPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header */}
      <div className="mb-12">
        <Typography variant="h1" className="mb-4">
          Tooltip
        </Typography>
        <Typography variant="p1" className="text-slate-600 text-lg">
          Componente flutuante que exibe informações contextuais quando o
          usuário interage com um elemento.
        </Typography>
      </div>

      {/* Instalação */}
      <section className="mb-12">
        <Typography variant="h2" className="mb-6">
          Instalação
        </Typography>

        <div className="space-y-4">
          <Typography variant="p1">
            Instale o componente Tooltip em seu projeto:
          </Typography>

          <CodeBlock language="bash" title="Terminal">
            {`npx ${LIB_NAME} add tooltip`}
          </CodeBlock>

          <Typography variant="p1">
            Ou copie e cole o código diretamente:
          </Typography>

          <SourceCodeDisplay
            filePath="registry/ui/tooltip.tsx"
            title="tooltip.tsx"
          />
        </div>
      </section>

      {/* Uso básico */}
      <section className="mb-12">
        <Typography variant="h2" className="mb-6">
          Uso básico
        </Typography>

        <div className="space-y-6">
          <Typography variant="p1">
            Importe o componente e envolva o elemento que deve acionar o
            tooltip:
          </Typography>

          <CodeBlock language="tsx" filename="exemplo.tsx">
            {`import { Tooltip } from "@/components/ui/tooltip"

export function ExemploBasico() {
  return (
    <Tooltip content="Este é um tooltip básico">
      <Button>Passe o mouse</Button>
    </Tooltip>
  )
}`}
          </CodeBlock>

          <div className="p-6 bg-slate-50 rounded-lg border">
            <div className="flex gap-4 flex-wrap">
              <Tooltip content="Este é um tooltip básico">
                <Button>Passe o mouse</Button>
              </Tooltip>
            </div>
          </div>
        </div>
      </section>

      {/* Variantes */}
      <section className="mb-12">
        <Typography variant="h2" className="mb-6">
          Variantes
        </Typography>

        <div className="space-y-8">
          <div>
            <Typography variant="h3" className="mb-4">
              Estilos disponíveis
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-slate-50 rounded-lg border">
                <Tooltip content="Tooltip light" variant="light">
                  <Button>Light variant</Button>
                </Tooltip>
                <div className="mt-3">
                  <InlineCode>variant="light"</InlineCode>
                </div>
                <Typography variant="p3" className="text-slate-600 mt-2">
                  Fundo claro com texto escuro
                </Typography>
              </div>

              <div className="p-4 bg-slate-50 rounded-lg border">
                <Tooltip content="Tooltip dark" variant="dark">
                  <Button>Dark variant</Button>
                </Tooltip>
                <div className="mt-3">
                  <InlineCode>variant="dark"</InlineCode>
                </div>
                <Typography variant="p3" className="text-slate-600 mt-2">
                  Fundo escuro com texto claro
                </Typography>
              </div>
            </div>
          </div>

          <div>
            <Typography variant="h3" className="mb-4">
              Posicionamento
            </Typography>
            <div className="p-6 bg-slate-50 rounded-lg border">
              <div className="flex flex-wrap gap-4 justify-center">
                <Tooltip content="Top" side="top">
                  <Button>Top</Button>
                </Tooltip>
                <Tooltip content="Right" side="right">
                  <Button>Right</Button>
                </Tooltip>
                <Tooltip content="Bottom" side="bottom">
                  <Button>Bottom</Button>
                </Tooltip>
                <Tooltip content="Left" side="left">
                  <Button>Left</Button>
                </Tooltip>
              </div>
            </div>

            <CodeBlock language="tsx" filename="posicionamento.tsx">
              {`<Tooltip content="Top" side="top">
  <Button>Top</Button>
</Tooltip>

<Tooltip content="Right" side="right">
  <Button>Right</Button>
</Tooltip>

<Tooltip content="Bottom" side="bottom">
  <Button>Bottom</Button>
</Tooltip>

<Tooltip content="Left" side="left">
  <Button>Left</Button>
</Tooltip>`}
            </CodeBlock>
          </div>
        </div>
      </section>

      {/* Tooltips com ícones */}
      <section className="mb-12">
        <Typography variant="h2" className="mb-6">
          Tooltips com ícones
        </Typography>

        <div className="space-y-6">
          <Typography variant="p1">
            Use ícones como gatilhos para tooltips informativos:
          </Typography>

          <div className="p-6 bg-slate-50 rounded-lg border">
            <div className="flex gap-6 flex-wrap items-center">
              <Tooltip content="Informação adicional">
                <Button iconOnly={<Info />} variant="tertiary" size="small" />
              </Tooltip>

              <Tooltip content="Aviso importante" variant="dark">
                <Button
                  iconOnly={<AlertCircle />}
                  variant="tertiary"
                  size="small"
                  className="text-yellow-500"
                />
              </Tooltip>

              <Tooltip content="Precisa de ajuda?">
                <Button
                  iconOnly={<HelpCircle />}
                  variant="tertiary"
                  size="small"
                  className="text-gray-500"
                />
              </Tooltip>
            </div>
          </div>

          <CodeBlock language="tsx" filename="tooltip-icones.tsx">
            {`import { Info, AlertCircle, HelpCircle } from "lucide-react"
import { Tooltip } from "@/components/ui/tooltip"

<Tooltip content="Informação adicional">
    <Button iconOnly={<Info />} variant="tertiary" size="small" />
</Tooltip>

<Tooltip content="Aviso importante" variant="dark">
    <Button
        iconOnly={<AlertCircle />}
        variant="tertiary"
        size="small"
        className="text-yellow-500"
    />
</Tooltip>

<Tooltip content="Precisa de ajuda?">
    <Button
        iconOnly={<HelpCircle />}
        variant="tertiary"
        size="small"
        className="text-gray-500"
    />
</Tooltip>`}
          </CodeBlock>
        </div>
      </section>

      {/* Tooltips em elementos desabilitados */}
      <section className="mb-12">
        <Typography variant="h2" className="mb-6">
          Tooltips em elementos desabilitados
        </Typography>

        <div className="space-y-6">
          <div className="p-6 bg-slate-50 rounded-lg border">
            <Tooltip content="Este botão está desabilitado">
              <Button disabled>Botão desabilitado</Button>
            </Tooltip>
          </div>

          <CodeBlock language="tsx" filename="tooltip-desabilitado.tsx">
            {`<Tooltip content="Este botão está desabilitado">
  <Button disabled>Botão desabilitado</Button>
</Tooltip>`}
          </CodeBlock>
        </div>
      </section>

      {/* TooltipProvider */}
      <section className="mb-12">
        <Typography variant="h2" className="mb-6">
          TooltipProvider
        </Typography>

        <div className="space-y-6">
          <Typography variant="p1">
            O <InlineCode>TooltipProvider</InlineCode> deve envolver sua
            aplicação para garantir o funcionamento correto dos tooltips:
          </Typography>

          <CodeBlock language="tsx" filename="app/layout.tsx">
            {`import { TooltipProvider } from "@/components/ui/tooltip"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <TooltipProvider>
      {children}
    </TooltipProvider>
  )
}`}
          </CodeBlock>

          <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg">
            <Typography variant="p2b" className="text-blue-800 mb-2">
              💡 Por que usar o Provider?
            </Typography>
            <Typography variant="p2" className="text-blue-700">
              O Provider gerencia o estado global dos tooltips, garantindo que
              apenas um tooltip seja exibido por vez e adicionando
              comportamentos de acessibilidade.
            </Typography>
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
                  <InlineCode>content</InlineCode>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">React.ReactNode</Typography>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">-</Typography>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">Conteúdo do tooltip</Typography>
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">
                  <InlineCode>variant</InlineCode>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">"light" | "dark"</Typography>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">"light"</Typography>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">Estilo visual do tooltip</Typography>
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">
                  <InlineCode>side</InlineCode>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">
                    "top" | "right" | "bottom" | "left"
                  </Typography>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">"right"</Typography>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">
                    Lado em que o tooltip aparece
                  </Typography>
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">
                  <InlineCode>sideOffset</InlineCode>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">number</Typography>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">4</Typography>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">
                    Distância do tooltip em relação ao elemento
                  </Typography>
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">
                  <InlineCode>delayDuration</InlineCode>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">number</Typography>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">100</Typography>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">
                    Tempo em ms antes do tooltip aparecer
                  </Typography>
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">
                  <InlineCode>disableHoverableContent</InlineCode>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">boolean</Typography>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">false</Typography>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">
                    Desabilita a interação com o conteúdo do tooltip
                  </Typography>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Exemplos avançados */}
      <section className="mb-12">
        <Typography variant="h2" className="mb-6">
          Exemplos avançados
        </Typography>

        <div className="space-y-8">
          <div>
            <Typography variant="h3" className="mb-4">
              Tooltip com conteúdo rico
            </Typography>

            <div className="p-6 bg-slate-50 rounded-lg border mb-4">
              <Tooltip
                content={
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span>Status: Ativo</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      Última atualização: 15/05/2023
                    </div>
                  </div>
                }
              >
                <Button>Ver status</Button>
              </Tooltip>
            </div>

            <CodeBlock language="tsx" filename="tooltip-rico.tsx">
              {`<Tooltip content={
  <div className="space-y-2">
    <div className="flex items-center gap-2">
      <Check className="w-4 h-4 text-green-500" />
      <span>Status: Ativo</span>
    </div>
    <div className="text-sm text-gray-600">
      Última atualização: 15/05/2023
    </div>
  </div>
}>
  <Button>Ver status</Button>
</Tooltip>`}
            </CodeBlock>
          </div>
        </div>
      </section>

      {/* Guia de uso */}
      <section className="mb-12">
        <Typography variant="h2" className="mb-6">
          Guia de uso
        </Typography>

        <div className="space-y-6">
          <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg">
            <Typography variant="p2b" className="text-blue-800 mb-2">
              💡 Quando usar
            </Typography>
            <ul className="space-y-1">
              <li>
                <Typography variant="p2" className="text-blue-700">
                  • Para explicar ícones ou controles sem rótulo
                </Typography>
              </li>
              <li>
                <Typography variant="p2" className="text-blue-700">
                  • Para fornecer informações adicionais sobre um elemento
                </Typography>
              </li>
              <li>
                <Typography variant="p2" className="text-blue-700">
                  • Para mostrar dicas ou instruções contextuais
                </Typography>
              </li>
            </ul>
          </div>

          <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
            <Typography variant="p2b" className="text-green-800 mb-2">
              ✅ Boas práticas
            </Typography>
            <ul className="space-y-1">
              <li>
                <Typography variant="p2" className="text-green-700">
                  • Mantenha o texto do tooltip conciso (1-2 linhas)
                </Typography>
              </li>
              <li>
                <Typography variant="p2" className="text-green-700">
                  • Use para informações complementares, não essenciais
                </Typography>
              </li>
              <li>
                <Typography variant="p2" className="text-green-700">
                  • Considere a acessibilidade (não dependa apenas de tooltips)
                </Typography>
              </li>
              <li>
                <Typography variant="p2" className="text-green-700">
                  • Escolha o posicionamento que não oculte conteúdo importante
                </Typography>
              </li>
            </ul>
          </div>

          <div className="p-6 bg-amber-50 border border-amber-200 rounded-lg">
            <Typography variant="p2b" className="text-amber-800 mb-2">
              ⚠️ Atenção
            </Typography>
            <ul className="space-y-1">
              <li>
                <Typography variant="p2" className="text-amber-700">
                  • Não use para informações críticas (não são acessíveis em
                  mobile)
                </Typography>
              </li>
              <li>
                <Typography variant="p2" className="text-amber-700">
                  • Evite tooltips muito grandes ou complexos
                </Typography>
              </li>
              <li>
                <Typography variant="p2" className="text-amber-700">
                  • Não abuse - muitos tooltips podem poluir a interface
                </Typography>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
