"use client";
import { Button } from "@/registry/ui/button";
import { Typography } from "@/registry/ui/typography";
import { CodeBlock } from "@/components/code-block";
import { InlineCode } from "@/components/code-block";
import { LIB_NAME } from "@/lib/constants";
import { SourceCodeDisplay } from "@/components/source-code-display";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/ui/dialog";
import { useState } from "react";

export default function DialogPage() {
  const [open, setOpen] = useState(false);
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header */}
      <div className="mb-12">
        <Typography variant="h1" className="mb-4">
          Dialog
        </Typography>
        <Typography variant="p1" className="text-slate-600 text-lg">
          Uma janela modal que aparece sobre o conteúdo da página, interrompendo
          a interação do usuário com o aplicativo até ser fechada.
        </Typography>
      </div>
      {/* Instalação */}
      <section className="mb-12">
        <Typography variant="h2" className="mb-6">
          Instalação
        </Typography>

        <div className="space-y-4">
          <Typography variant="p1">
            Instale o componente Dialog em seu projeto:
          </Typography>

          <CodeBlock language="bash" title="Terminal">
            {`npx ${LIB_NAME} add dialog`}
          </CodeBlock>

          <Typography variant="p1">
            Ou copie e cole o código diretamente:
          </Typography>

          <SourceCodeDisplay
            filePath="registry/ui/dialog.tsx"
            title="dialog.tsx"
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
            Importe o componente e estruture conforme necessário:
          </Typography>

          <CodeBlock language="tsx" filename="exemplo.tsx">
            {`import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"

export function ExemploBasico() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Abrir dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <h3>Título do Dialog</h3>
        <p>Conteúdo do dialog vai aqui...</p>
      </DialogContent>
    </Dialog>
  )
}`}
          </CodeBlock>

          <div className="p-6 bg-slate-50 rounded-lg border">
            <Dialog>
              <DialogTrigger asChild>
                <Button>Abrir dialog básico</Button>
              </DialogTrigger>
              <DialogContent>
                <h3 className="text-lg font-semibold mb-2">Título do Dialog</h3>
                <p className="text-slate-600">Conteúdo do dialog vai aqui...</p>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>
      {/* Estrutura completa */}
      <section className="mb-12">
        <Typography variant="h2" className="mb-6">
          Estrutura completa
        </Typography>

        <div className="space-y-6">
          <Typography variant="p1">
            Utilize todos os subcomponentes para uma estrutura organizada:
          </Typography>

          <CodeBlock language="tsx" filename="estrutura-completa.tsx">
            {`import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog"

export function DialogCompleto() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Abrir dialog completo</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Título do Dialog</DialogTitle>
          <DialogDescription>
            Descrição ou subtítulo opcional
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4">
          Conteúdo principal do dialog
        </div>
        
        <DialogFooter>
          <Button variant="secondary">Cancelar</Button>
          <Button>Confirmar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`}
          </CodeBlock>

          <div className="p-6 bg-slate-50 rounded-lg border">
            <Dialog>
              <DialogTrigger asChild>
                <Button>Abrir dialog completo</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Título do Dialog</DialogTitle>
                  <DialogDescription>
                    Descrição ou subtítulo opcional
                  </DialogDescription>
                </DialogHeader>

                <div className="py-4 text-slate-600">
                  Conteúdo principal do dialog
                </div>

                <DialogFooter>
                  <Button variant="secondary">Cancelar</Button>
                  <Button>Confirmar</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>
      {/* Tamanhos e personalização */}
      <section className="mb-12">
        <Typography variant="h2" className="mb-6">
          Tamanhos e personalização
        </Typography>

        <div className="space-y-8">
          <div>
            <Typography variant="h3" className="mb-4">
              Controlando o tamanho
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-slate-50 rounded-lg border">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Dialog pequeno</Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-sm">
                    <DialogHeader>
                      <DialogTitle>Dialog compacto</DialogTitle>
                    </DialogHeader>
                    <p className="text-slate-600">
                      Este dialog tem largura máxima de 384px
                    </p>
                  </DialogContent>
                </Dialog>
                <div className="mt-3">
                  <InlineCode>className="max-w-sm"</InlineCode>
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-lg border">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Dialog grande</Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <DialogHeader>
                      <DialogTitle>Dialog amplo</DialogTitle>
                    </DialogHeader>
                    <p className="text-slate-600">
                      Este dialog tem largura máxima de 896px
                    </p>
                  </DialogContent>
                </Dialog>
                <div className="mt-3">
                  <InlineCode>className="max-w-4xl"</InlineCode>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Typography variant="h3" className="mb-4">
              Estilos personalizados
            </Typography>
            <div className="p-6 bg-slate-50 rounded-lg border">
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Dialog personalizado</Button>
                </DialogTrigger>
                <DialogContent className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
                  <DialogHeader>
                    <DialogTitle className="text-blue-800">
                      Título colorido
                    </DialogTitle>
                    <DialogDescription className="text-blue-600">
                      Descrição com tema personalizado
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-4 text-blue-700">
                    Conteúdo com fundo gradiente
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <CodeBlock language="tsx" filename="dialog-personalizado.tsx">
              {`<DialogContent className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
  <DialogHeader>
    <DialogTitle className="text-blue-800">Título colorido</DialogTitle>
    <DialogDescription className="text-blue-600">
      Descrição com tema personalizado
    </DialogDescription>
  </DialogHeader>
  <div className="py-4 text-blue-700">
    Conteúdo com fundo gradiente
  </div>
</DialogContent>`}
            </CodeBlock>
          </div>
        </div>
      </section>
      {/* Controlando o Dialog programaticamente */}
      <section className="mb-12">
        <Typography variant="h2" className="mb-6">
          Controle programático
        </Typography>

        <div className="space-y-6">
          <Typography variant="p1">
            Você pode controlar o estado do dialog externamente:
          </Typography>

          <CodeBlock language="tsx" filename="dialog-controlado.tsx">
            {`import { useState } from "react"

export function DialogControlado() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        Abrir dialog controlado
      </Button>
      
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog controlado</DialogTitle>
          </DialogHeader>
          <Typography variant="p2" className="py-4 text-slate-600">
            Este dialog é controlado por estado externo
          </Typography>
          <DialogFooter>
            <Button onClick={() => setOpen(false)}>
              Fechar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}`}
          </CodeBlock>

          <div className="p-6 bg-slate-50 rounded-lg border">
            <Button onClick={() => setOpen(true)}>
              Abrir dialog controlado
            </Button>

            <Dialog open={open} onOpenChange={setOpen}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Dialog controlado</DialogTitle>
                </DialogHeader>
                <Typography variant="p2" className="py-4 text-slate-600">
                  Este dialog pode ser controlado por estado externo
                </Typography>
                <DialogFooter>
                  <Button onClick={() => setOpen(false)}>Fechar</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
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
                  <Typography variant="p2b">Componente</Typography>
                </th>
                <th className="border border-slate-200 px-4 py-3 text-left">
                  <Typography variant="p2b">Propriedades</Typography>
                </th>
                <th className="border border-slate-200 px-4 py-3 text-left">
                  <Typography variant="p2b">Descrição</Typography>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-4 py-3" rowSpan={3}>
                  <InlineCode>Dialog</InlineCode>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <InlineCode>open</InlineCode> (boolean)
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  Controla se o dialog está aberto ou fechado
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">
                  <InlineCode>onOpenChange</InlineCode> (function)
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  Chamado quando o estado aberto/fechado muda
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">
                  <InlineCode>defaultOpen</InlineCode> (boolean)
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  Estado inicial do dialog
                </td>
              </tr>

              <tr>
                <td className="border border-slate-200 px-4 py-3" rowSpan={4}>
                  <InlineCode>DialogContent</InlineCode>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <InlineCode>showCloseButton</InlineCode> (boolean)
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  Mostra/oculta o botão de fechar (padrão: true)
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">
                  <InlineCode>onClose</InlineCode> (function)
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  Chamado quando o dialog é fechado
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">
                  <InlineCode>className</InlineCode> (string)
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  Classes CSS adicionais
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">
                  <InlineCode>onEscapeKeyDown</InlineCode> (function)
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  Chamado quando a tecla Escape é pressionada
                </td>
              </tr>

              <tr>
                <td className="border border-slate-200 px-4 py-3">
                  <InlineCode>DialogTrigger</InlineCode>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <InlineCode>asChild</InlineCode> (boolean)
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  Permite usar elementos filhos como gatilho
                </td>
              </tr>

              <tr>
                <td className="border border-slate-200 px-4 py-3">
                  <InlineCode>DialogOverlay</InlineCode>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <InlineCode>className</InlineCode> (string)
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  Classes CSS adicionais para o overlay
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

        <div>
          <Typography variant="h3" className="mb-4">
            Formulário em Dialog
          </Typography>

          <div className="p-6 bg-slate-50 rounded-lg border mb-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button>Abrir formulário</Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Cadastro de usuário</DialogTitle>
                  <DialogDescription>
                    Preencha os campos abaixo para criar uma nova conta
                  </DialogDescription>
                </DialogHeader>

                <form className="space-y-4 py-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium">Nome</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="Digite seu nome"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium">Email</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="Digite seu email"
                    />
                  </div>
                </form>

                <DialogFooter>
                  <Button variant="secondary">Cancelar</Button>
                  <Button>Cadastrar</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <CodeBlock language="tsx" filename="dialog-form.tsx">
            {`<Dialog>
  <DialogTrigger asChild>
    <Button>Abrir formulário</Button>
  </DialogTrigger>
  <DialogContent className="max-w-md">
    <DialogHeader>
      <DialogTitle>Cadastro de usuário</DialogTitle>
      <DialogDescription>
        Preencha os campos abaixo para criar uma nova conta
      </DialogDescription>
    </DialogHeader>
    
    <form className="space-y-4 py-4">
      <div className="space-y-2">
        <label className="block text-sm font-medium">Nome</label>
        <input 
          type="text" 
          className="w-full px-3 py-2 border rounded-md" 
          placeholder="Digite seu nome"
        />
      </div>
      
      <div className="space-y-2">
        <label className="block text-sm font-medium">Email</label>
        <input 
          type="email" 
          className="w-full px-3 py-2 border rounded-md" 
          placeholder="Digite seu email"
        />
      </div>
    </form>
    
    <DialogFooter>
      <Button variant="secondary">Cancelar</Button>
      <Button>Cadastrar</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
          </CodeBlock>
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
                  • Para ações que requerem confirmação do usuário
                </Typography>
              </li>
              <li>
                <Typography variant="p2" className="text-blue-700">
                  • Para exibir formulários ou conteúdo adicional sem navegar
                  para outra página
                </Typography>
              </li>
              <li>
                <Typography variant="p2" className="text-blue-700">
                  • Para alertas importantes que exigem atenção imediata
                </Typography>
              </li>
              <li>
                <Typography variant="p2" className="text-blue-700">
                  • Para fluxos de tarefas que precisam ser concluídos antes de
                  continuar
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
                  • Mantenha o diálogo focado em uma única tarefa
                </Typography>
              </li>
              <li>
                <Typography variant="p2" className="text-green-700">
                  • Use títulos claros e descrições concisas
                </Typography>
              </li>
              <li>
                <Typography variant="p2" className="text-green-700">
                  • Forneça ações claras (ex: "Confirmar", "Cancelar")
                </Typography>
              </li>
              <li>
                <Typography variant="p2" className="text-green-700">
                  • Permita fechar o dialog de múltiplas formas (botão, ESC,
                  clique fora)
                </Typography>
              </li>
              <li>
                <Typography variant="p2" className="text-green-700">
                  • Considere a acessibilidade (foco, ARIA attributes)
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
                  • Evite aninhar dialogs (pode confundir o usuário)
                </Typography>
              </li>
              <li>
                <Typography variant="p2" className="text-amber-700">
                  • Não use para conteúdo muito extenso - considere uma página
                  separada
                </Typography>
              </li>
              <li>
                <Typography variant="p2" className="text-amber-700">
                  • Não abuse - dialogs interrompem o fluxo do usuário
                </Typography>
              </li>
              <li>
                <Typography variant="p2" className="text-amber-700">
                  • Evite abrir dialogs automaticamente (pode ser intrusivo)
                </Typography>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
