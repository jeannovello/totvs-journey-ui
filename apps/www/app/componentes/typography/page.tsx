import { Typography } from "@/registry/ui/typography"
import { CodeBlock } from "@/components/code-block"
import { InlineCode } from "@/components/code-block"
import { LIB_NAME } from "@/lib/constants"
import { SourceCodeDisplay } from "@/components/source-code-display"
export default function TypographyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header */}
      <div className="mb-12">
        <Typography variant="h1" className="mb-4">
          Typography
        </Typography>
        <Typography variant="p1" className="text-slate-600 text-lg">
          Um sistema de tipografia flexível e consistente para construir hierarquias visuais claras.
        </Typography>
      </div>

      {/* Instalação */}
      <section className="mb-12">
        <Typography variant="h2" className="mb-6">
          Instalação
        </Typography>
        
        <div className="space-y-4">
          <Typography variant="p1">
            Instale o componente Typography em seu projeto:
          </Typography>
          
          <CodeBlock language="bash" title="Terminal">
            {`npx ${LIB_NAME} add typography`}
          </CodeBlock>
          
          <Typography variant="p1">
            Ou copie e cole o código diretamente:
          </Typography>
          
          <SourceCodeDisplay 
            filePath="registry/ui/typography.tsx"
            title="typography.tsx"
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
            Importe o componente e use com as variantes disponíveis:
          </Typography>
          
          <CodeBlock language="tsx" filename="exemplo.tsx">
{`import { Typography } from "@/components/ui/typography"

export function ExemploBasico() {
  return (
    <div>
      <Typography variant="h1">
        Título principal
      </Typography>
      
      <Typography variant="p1">
        Este é um parágrafo normal com tamanho padrão.
      </Typography>
      
      <Typography variant="p2" className="text-slate-600">
        Texto menor para descrições secundárias.
      </Typography>
    </div>
  )
}`}
          </CodeBlock>
        </div>
      </section>

      {/* Demonstração visual */}
      <section className="mb-12">
        <Typography variant="h2" className="mb-6">
          Variantes disponíveis
        </Typography>
        
        {/* Display */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4 text-slate-700">
            Display
          </Typography>
          <div className="space-y-4 p-6 bg-slate-50 rounded-lg border">
            <div>
              <Typography variant="d1">Display 1</Typography>
              <InlineCode>variant="d1"</InlineCode>
            </div>
            <div>
              <Typography variant="d2">Display 2</Typography>
              <InlineCode>variant="d2"</InlineCode>
            </div>
          </div>
        </div>

        {/* Headlines */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4 text-slate-700">
            Headlines
          </Typography>
          <div className="space-y-4 p-6 bg-slate-50 rounded-lg border">
            <div>
              <Typography variant="h1">Headline 1</Typography>
              <InlineCode>variant="h1"</InlineCode>
            </div>
            <div>
              <Typography variant="h2">Headline 2</Typography>
              <InlineCode>variant="h2"</InlineCode>
            </div>
            <div>
              <Typography variant="h3">Headline 3</Typography>
              <InlineCode>variant="h3"</InlineCode>
            </div>
          </div>
        </div>

        {/* Titles */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4 text-slate-700">
            Titles
          </Typography>
          <div className="space-y-4 p-6 bg-slate-50 rounded-lg border">
            <div>
              <Typography variant="t1">Title 1</Typography>
              <InlineCode>variant="t1"</InlineCode>
            </div>
            <div>
              <Typography variant="t2">Title 2</Typography>
              <InlineCode>variant="t2"</InlineCode>
            </div>
          </div>
        </div>

        {/* Subtitles */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4 text-slate-700">
            Subtitles
          </Typography>
          <div className="space-y-4 p-6 bg-slate-50 rounded-lg border">
            <div>
              <Typography variant="s1">Subtitle 1</Typography>
              <InlineCode>variant="s1"</InlineCode>
            </div>
            <div>
              <Typography variant="s2">Subtitle 2</Typography>
              <InlineCode>variant="s2"</InlineCode>
            </div>
            <div>
              <Typography variant="s3">Subtitle 3</Typography>
              <InlineCode>variant="s3"</InlineCode>
            </div>
            <div>
              <Typography variant="s4">Subtitle 4</Typography>
              <InlineCode>variant="s4"</InlineCode>
            </div>
            <div>
              <Typography variant="s5">Subtitle 5 - Uso exclusivo para Badge</Typography>
              <InlineCode>variant="s5"</InlineCode>
            </div>
          </div>
        </div>

        {/* Paragraphs */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4 text-slate-700">
            Paragraphs
          </Typography>
          <div className="space-y-4 p-6 bg-slate-50 rounded-lg border">
            <div>
              <Typography variant="p1">Paragraph 1 - texto normal</Typography>
              <InlineCode>variant="p1"</InlineCode>
            </div>
            <div>
              <Typography variant="p1b">Paragraph 1 Bold - texto com peso 700</Typography>
              <InlineCode>variant="p1b"</InlineCode>
            </div>
            <div>
              <Typography variant="p1bb">Paragraph 1 Black - texto com peso 900</Typography>
              <InlineCode>variant="p1bb"</InlineCode>
            </div>
            <div>
              <Typography variant="p2">Paragraph 2 - texto menor</Typography>
              <InlineCode>variant="p2"</InlineCode>
            </div>
            <div>
              <Typography variant="p2b">Paragraph 2 Bold - texto com peso 700</Typography>
              <InlineCode>variant="p2b"</InlineCode>
            </div>
            <div>
              <Typography variant="p2bb">Paragraph 2 Black - texto com peso 900</Typography>
              <InlineCode>variant="p2bb"</InlineCode>
            </div>
            <div>
              <Typography variant="p3">Paragraph 3 - texto pequeno</Typography>
              <InlineCode>variant="p3"</InlineCode>
            </div>
            <div>
              <Typography variant="p3b">Paragraph 3 Bold - texto pequeno com peso 700</Typography>
              <InlineCode>variant="p3b"</InlineCode>
            </div>
            <div>
              <Typography variant="p3bb">Paragraph 3 Black - texto pequeno com peso 900</Typography>
              <InlineCode>variant="p3bb"</InlineCode>
            </div>
          </div>
        </div>

        {/* Caption */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4 text-slate-700">
            Caption
          </Typography>
          <div className="space-y-4 p-6 bg-slate-50 rounded-lg border">
            <div>
              <Typography variant="c1">Caption - texto muito pequeno</Typography>
              <InlineCode>variant="c1"</InlineCode>
            </div>
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
                  <InlineCode>variant</InlineCode>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">string</Typography>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">"p1"</Typography>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">Variante do estilo de tipografia</Typography>
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">
                  <InlineCode>asChild</InlineCode>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">boolean</Typography>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">false</Typography>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">Renderiza como o elemento filho</Typography>
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">
                  <InlineCode>as</InlineCode>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">HTMLElement</Typography>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">auto</Typography>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">Elemento HTML a ser renderizado</Typography>
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">
                  <InlineCode>className</InlineCode>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">string</Typography>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">-</Typography>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">Classes CSS adicionais</Typography>
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
              Usando com cores personalizadas
            </Typography>
            
            <div className="p-6 bg-slate-50 rounded-lg border mb-4">
              <Typography variant="h1" className="text-blue-600 mb-2">
                Título azul
              </Typography>
              <Typography variant="p1" className="text-slate-600">
                Parágrafo com cor personalizada
              </Typography>
              <Typography variant="c1" className="text-red-500">
                Caption em vermelho
              </Typography>
            </div>
            
            <CodeBlock language="tsx" filename="cores-personalizadas.tsx">
{`<Typography variant="h1" className="text-blue-600">
  Título azul
</Typography>
<Typography variant="p1" className="text-slate-600">
  Parágrafo com cor personalizada
</Typography>
<Typography variant="c1" className="text-red-500">
  Caption em vermelho
</Typography>`}
            </CodeBlock>
          </div>

          <div>
            <Typography variant="h3" className="mb-4">
              Usando prop 'as' para elementos semânticos
            </Typography>
            
            <div className="p-6 bg-slate-50 rounded-lg border mb-4">
              <Typography variant="p1" as="label" className="block mb-2 font-medium">
                Label do formulário
              </Typography>
              <Typography variant="p2" as="small" className="text-slate-500">
                Texto de ajuda
              </Typography>
            </div>
            
            <CodeBlock language="tsx" filename="elementos-semanticos.tsx">
{`<Typography variant="p1" as="label" className="block mb-2 font-medium">
  Label do formulário
</Typography>
<Typography variant="p2" as="small" className="text-slate-500">
  Texto de ajuda
</Typography>`}
            </CodeBlock>
          </div>

          <div>
            <Typography variant="h3" className="mb-4">
              Usando asChild com Link
            </Typography>
            
            <div className="p-6 bg-slate-50 rounded-lg border mb-4">
              <Typography variant="h2" asChild>
                <a href="#" className="text-blue-600 hover:underline">
                  Link com estilo de título
                </a>
              </Typography>
            </div>
            
            <CodeBlock language="tsx" filename="link-com-estilo.tsx">
{`<Typography variant="h2" asChild>
  <a href="#" className="text-blue-600 hover:underline">
    Link com estilo de título
  </a>
</Typography>`}
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
              💡 Dica
            </Typography>
            <Typography variant="p2" className="text-blue-700">
              Use as variantes Display (d1, d2) para títulos de páginas principais e Headlines (h1, h2, h3) para seções.
            </Typography>
          </div>
          
          <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
            <Typography variant="p2b" className="text-green-800 mb-2">
              ✅ Boas práticas
            </Typography>
            <ul className="space-y-1">
              <li>
                <Typography variant="p2" className="text-green-700">
                  • Use a prop <InlineCode>as</InlineCode> para manter a semântica HTML correta
                </Typography>
              </li>
              <li>
                <Typography variant="p2" className="text-green-700">
                  • Combine variantes com cores do Tailwind para criar hierarquias visuais
                </Typography>
              </li>
              <li>
                <Typography variant="p2" className="text-green-700">
                  • Use <InlineCode>asChild</InlineCode> quando precisar aplicar estilos a outros componentes
                </Typography>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}