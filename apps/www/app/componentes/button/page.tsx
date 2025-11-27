import { Typography } from "@/registry/ui/typography"
import { CodeBlock } from "@/components/code-block"
import { InlineCode } from "@/components/code-block"
import { Button } from "@/registry/ui/button"
import { ArrowRight, Download, Heart, Plus, Settings, Trash2, ExternalLink, Search, User } from "lucide-react"
import { LIB_NAME } from "@/lib/constants"
import { SourceCodeDisplay } from "@/components/source-code-display"

export default function ButtonPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header */}
      <div className="mb-12">
        <Typography variant="h1" className="mb-4">
          Button
        </Typography>
        <Typography variant="p1" className="text-slate-600 text-lg">
          Componente de botão versátil com suporte a ícones e múltiplas variantes de estilo.
        </Typography>
      </div>

      {/* Instalação */}
      <section className="mb-12">
        <Typography variant="h2" className="mb-6">
          Instalação
        </Typography>
        
        <div className="space-y-4">
          <Typography variant="p1">
            Instale o componente Button em seu projeto:
          </Typography>
          
          <CodeBlock language="bash" title="Terminal">
            {`npx ${LIB_NAME} add button`}
          </CodeBlock>
          
          <Typography variant="p1">
            Ou copie e cole o código diretamente:
          </Typography>
          
          <SourceCodeDisplay
            filePath="registry/ui/button.tsx"
            title="button.tsx"
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
{`import { Button } from "@/components/ui/button"

export function ExemploBasico() {
  return (
    <div className="flex gap-4">
      <Button>Botão primário</Button>
      <Button variant="secondary">Botão secundário</Button>
      <Button variant="tertiary">Botão terciário</Button>
    </div>
  )
}`}
          </CodeBlock>

          <div className="p-6 bg-slate-50 rounded-lg border">
            <div className="flex gap-4 flex-wrap">
              <Button>Botão primário</Button>
              <Button variant="secondary">Botão secundário</Button>
              <Button variant="tertiary">Botão terciário</Button>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-slate-50 rounded-lg border">
                <Button className="mb-3">Primary</Button>
                <div>
                  <InlineCode>variant="primary"</InlineCode>
                </div>
                <Typography variant="p3" className="text-slate-600 mt-2">
                  Botão principal para ações primárias
                </Typography>
              </div>
              
              <div className="p-4 bg-slate-50 rounded-lg border">
                <Button variant="secondary" className="mb-3">Secondary</Button>
                <div>
                  <InlineCode>variant="secondary"</InlineCode>
                </div>
                <Typography variant="p3" className="text-slate-600 mt-2">
                  Botão com borda para ações secundárias
                </Typography>
              </div>
              
              <div className="p-4 bg-slate-50 rounded-lg border">
                <Button variant="tertiary" className="mb-3">Tertiary</Button>
                <div>
                  <InlineCode>variant="tertiary"</InlineCode>
                </div>
                <Typography variant="p3" className="text-slate-600 mt-2">
                  Botão transparente para ações terciárias
                </Typography>
              </div>
            </div>
          </div>

          <div>
            <Typography variant="h3" className="mb-4">
              Tamanhos disponíveis
            </Typography>
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 rounded-lg border">
                <div className="flex items-center gap-4 mb-3">
                  <Button size="small">Small</Button>
                  <Button size="medium">Medium</Button>
                  <Button size="regular">Regular</Button>
                </div>
                <div className="flex gap-2 text-sm">
                  <InlineCode>size="small"</InlineCode>
                  <InlineCode>size="medium"</InlineCode>
                  <InlineCode>size="regular"</InlineCode>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Botões com ícones */}
      <section className="mb-12">
        <Typography variant="h2" className="mb-6">
          Botões com ícones
        </Typography>
        
        <div className="space-y-6">
          <Typography variant="p1">
            O componente Button suporta ícones à esquerda, direita ou apenas ícone:
          </Typography>

          <div>
            <Typography variant="h3" className="mb-4">
              Ícone à esquerda
            </Typography>
            <div className="p-6 bg-slate-50 rounded-lg border mb-4">
              <div className="flex gap-4 flex-wrap">
                <Button leftIcon={<Download />}>Download</Button>
                <Button variant="secondary" leftIcon={<Settings />}>Configurações</Button>
                <Button variant="tertiary" leftIcon={<User />}>Perfil</Button>
              </div>
            </div>
            
            <CodeBlock language="tsx" filename="icone-esquerda.tsx">
{`import { Download, Settings, User } from "lucide-react"
import { Button } from "@/components/ui/button"

<Button leftIcon={<Download />}>Download</Button>
<Button variant="secondary" leftIcon={<Settings />}>Configurações</Button>
<Button variant="tertiary" leftIcon={<User />}>Perfil</Button>`}
            </CodeBlock>
          </div>

          <div>
            <Typography variant="h3" className="mb-4">
              Ícone à direita
            </Typography>
            <div className="p-6 bg-slate-50 rounded-lg border mb-4">
              <div className="flex gap-4 flex-wrap">
                <Button rightIcon={<ArrowRight />}>Continuar</Button>
                <Button variant="secondary" rightIcon={<ExternalLink />}>Abrir link</Button>
                <Button variant="tertiary" rightIcon={<Search />}>Buscar</Button>
              </div>
            </div>
            
            <CodeBlock language="tsx" filename="icone-direita.tsx">
{`import { ArrowRight, ExternalLink, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

<Button rightIcon={<ArrowRight />}>Continuar</Button>
<Button variant="secondary" rightIcon={<ExternalLink />}>Abrir link</Button>
<Button variant="tertiary" rightIcon={<Search />}>Buscar</Button>`}
            </CodeBlock>
          </div>

          <div>
            <Typography variant="h3" className="mb-4">
              Apenas ícone
            </Typography>
            <div className="p-6 bg-slate-50 rounded-lg border mb-4 space-y-4">
              <div className="flex gap-4 flex-wrap items-center">
                <Button iconOnly={<Plus />} />
                <Button iconOnly={<Heart />} variant="secondary" />
                <Button iconOnly={<Trash2 />} variant="tertiary" />
              </div>
              <div className="flex gap-4 flex-wrap items-center">
                <Button iconOnly={<Plus />} size="medium" />
                <Button iconOnly={<Heart />} variant="secondary" size="medium" />
                <Button iconOnly={<Trash2 />} variant="tertiary" size="medium" />
              </div>
              <div className="flex gap-4 flex-wrap items-center">
                <Button iconOnly={<Plus />} size="small" />
                <Button iconOnly={<Heart />} variant="secondary" size="small" />
                <Button iconOnly={<Trash2 />} variant="tertiary" size="small" />
              </div>
              <div className="flex gap-4 flex-wrap items-center">
                <Button iconOnly={<Plus />} size="icon-line" />
                <Button iconOnly={<Heart />} variant="secondary" size="icon-line" />
                <Button iconOnly={<Trash2 />} variant="tertiary" size="icon-line" />
              </div>
            </div>
            
            <CodeBlock language="tsx" filename="apenas-icone.tsx">
{`import { Plus, Heart, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"

<Button iconOnly={<Plus />} size="regular" />
<Button iconOnly={<Heart />} variant="secondary" size="medium" />
<Button iconOnly={<Trash2 />} variant="tertiary" size="small" />`}
            </CodeBlock>
          </div>
        </div>
      </section>

      {/* Estados */}
      <section className="mb-12">
        <Typography variant="h2" className="mb-6">
          Estados do botão
        </Typography>
        
        <div className="space-y-6">
          <div className="p-6 bg-slate-50 rounded-lg border">
            <div className="space-y-4">
              <div className="flex gap-4 flex-wrap">
                <Button>Normal</Button>
                <Button disabled>Desabilitado</Button>
              </div>
              <div className="flex gap-4 flex-wrap">
                <Button variant="secondary">Secondary normal</Button>
                <Button variant="secondary" disabled>Secondary desabilitado</Button>
              </div>
              <div className="flex gap-4 flex-wrap">
                <Button variant="tertiary">Tertiary normal</Button>
                <Button variant="tertiary" disabled>Tertiary desabilitado</Button>
              </div>
            </div>
          </div>

          <CodeBlock language="tsx" filename="estados.tsx">
{`<Button>Normal</Button>
<Button disabled>Desabilitado</Button>

<Button variant="secondary">Secondary normal</Button>
<Button variant="secondary" disabled>Secondary desabilitado</Button>

<Button variant="tertiary">Tertiary normal</Button>
<Button variant="tertiary" disabled>Tertiary desabilitado</Button>`}
          </CodeBlock>
        </div>
      </section>

      {/* Usando como Link */}
      <section className="mb-12">
        <Typography variant="h2" className="mb-6">
          Usando como Link
        </Typography>
        
        <div className="space-y-6">
          <Typography variant="p1">
            Use a prop <InlineCode>asChild</InlineCode> para renderizar o botão como outro elemento:
          </Typography>

          <div className="p-6 bg-slate-50 rounded-lg border">
            <div className="flex gap-4 flex-wrap">
              <Button asChild>
                <a href="#" target="_blank">
                  Link externo
                </a>
              </Button>
              
              <Button variant="secondary" asChild>
                <a href="/sobre">
                  Sobre nós
                </a>
              </Button>
            </div>
          </div>

          <CodeBlock language="tsx" filename="botao-como-link.tsx">
{`import Link from "next/link"
import { Button } from "@/components/ui/button"

export function BotaoComoLink() {
  return (
    <div className="flex gap-4">
      {/* Com Next.js Link */}
      <Button asChild>
        <Link href="/sobre">
          Sobre nós
        </Link>
      </Button>
      
      {/* Com link HTML */}
      <Button asChild>
        <a href="https://example.com" target="_blank">
          Link externo
        </a>
      </Button>
    </div>
  )
}`}
          </CodeBlock>
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
                  <Typography variant="p2">"primary" | "secondary" | "tertiary"</Typography>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">"primary"</Typography>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">Estilo visual do botão</Typography>
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">
                  <InlineCode>size</InlineCode>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">"regular" | "medium" | "small"</Typography>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">"regular"</Typography>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">Tamanho do botão</Typography>
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">
                  <InlineCode>leftIcon</InlineCode>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">React.ReactNode</Typography>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">-</Typography>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">Ícone exibido à esquerda do texto</Typography>
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">
                  <InlineCode>rightIcon</InlineCode>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">React.ReactNode</Typography>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">-</Typography>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">Ícone exibido à direita do texto</Typography>
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">
                  <InlineCode>iconOnly</InlineCode>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">React.ReactNode</Typography>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">-</Typography>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">Renderiza apenas o ícone (sem texto)</Typography>
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
                  <InlineCode>disabled</InlineCode>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">boolean</Typography>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">false</Typography>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">Desabilita o botão</Typography>
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">
                  <InlineCode>onClick</InlineCode>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">function</Typography>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">-</Typography>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">Função executada ao clicar</Typography>
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
              Combinações de tamanhos e variantes
            </Typography>
            
            <div className="p-6 bg-slate-50 rounded-lg border mb-4">
              <div className="space-y-4">
                <div className="flex gap-4 flex-wrap items-center">
                  <Button size="small">Small</Button>
                  <Button size="medium">Medium</Button>
                  <Button size="regular">Regular</Button>
                </div>
                <div className="flex gap-4 flex-wrap items-center">
                  <Button variant="secondary" size="small">Small</Button>
                  <Button variant="secondary" size="medium">Medium</Button>
                  <Button variant="secondary" size="regular">Regular</Button>
                </div>
                <div className="flex gap-4 flex-wrap items-center">
                  <Button variant="tertiary" size="small">Small</Button>
                  <Button variant="tertiary" size="medium">Medium</Button>
                  <Button variant="tertiary" size="regular">Regular</Button>
                </div>
              </div>
            </div>
            
            <CodeBlock language="tsx" filename="tamanhos-variantes.tsx">
{`// Primary em todos os tamanhos
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="regular">Regular</Button>

// Secondary em todos os tamanhos
<Button variant="secondary" size="small">Small</Button>
<Button variant="secondary" size="medium">Medium</Button>
<Button variant="secondary" size="regular">Regular</Button>

// Tertiary em todos os tamanhos
<Button variant="tertiary" size="small">Small</Button>
<Button variant="tertiary" size="medium">Medium</Button>
<Button variant="tertiary" size="regular">Regular</Button>`}
            </CodeBlock>
          </div>

          <div>
            <Typography variant="h3" className="mb-4">
              Botões com loading customizado
            </Typography>
            
            <div className="p-6 bg-slate-50 rounded-lg border mb-4">
              <Button disabled leftIcon={
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              }>
                Carregando...
              </Button>
            </div>
            
            <CodeBlock language="tsx" filename="botao-loading-customizado.tsx">
{`function LoadingButton() {
  const [loading, setLoading] = useState(false)
  
  const handleClick = async () => {
    setLoading(true)
    // Simular API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setLoading(false)
  }
  
  return (
    <Button 
      onClick={handleClick} 
      disabled={loading}
      leftIcon={loading ? (
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
      ) : undefined}
    >
      {loading ? 'Carregando...' : 'Enviar'}
    </Button>
  )
}`}
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
              💡 Hierarquia visual
            </Typography>
            <ul className="space-y-1">
              <li>
                <Typography variant="p2" className="text-blue-700">
                  • <InlineCode>Primary</InlineCode>: Ação principal da página/seção
                </Typography>
              </li>
              <li>
                <Typography variant="p2" className="text-blue-700">
                  • <InlineCode>Secondary</InlineCode>: Ações importantes mas não primárias
                </Typography>
              </li>
              <li>
                <Typography variant="p2" className="text-blue-700">
                  • <InlineCode>Tertiary</InlineCode>: Ações menos importantes ou de cancelamento
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
                  • Use texto em maiúsculo (UPPERCASE) como definido no design system
                </Typography>
              </li>
              <li>
                <Typography variant="p2" className="text-green-700">
                  • Combine ícones com texto para melhorar o reconhecimento
                </Typography>
              </li>
              <li>
                <Typography variant="p2" className="text-green-700">
                  • Use <InlineCode>iconOnly</InlineCode> apenas quando o contexto for claro
                </Typography>
              </li>
              <li>
                <Typography variant="p2" className="text-green-700">
                  • Mantenha consistência nos tamanhos dentro do mesmo contexto
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
                  • Não combine <InlineCode>iconOnly</InlineCode> com <InlineCode>leftIcon</InlineCode> ou <InlineCode>rightIcon</InlineCode>
                </Typography>
              </li>
              <li>
                <Typography variant="p2" className="text-amber-700">
                  • O botão já inclui tipografia específica para cada tamanho
                </Typography>
              </li>
              <li>
                <Typography variant="p2" className="text-amber-700">
                  • Estados disabled são automaticamente estilizados
                </Typography>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}