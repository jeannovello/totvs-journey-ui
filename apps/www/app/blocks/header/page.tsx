import { Typography } from "@/registry/ui/typography";
import { CodeBlock, InlineCode } from "@/components/code-block";
import { Header } from "@/registry/blocks/header";
import { LIB_NAME } from "@/lib/constants";
import { SourceCodeDisplay } from "@/components/source-code-display";

export default function HeaderPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">

      {/* Introdução */}
      <div className="mb-12">
        <Typography variant="h1" className="mb-4">
          Header
        </Typography>
        <Typography variant="p1" className="text-slate-600 text-lg">
          Componente de cabeçalho para páginas do sistema, com suporte a título,
          descrição, breadcrumb, imagem decorativa e botão de retorno.
        </Typography>
      </div>

      {/* Instalação */}
      <section className="mb-12 space-y-4">
        <Typography variant="h2" className="mb-6">Instalação</Typography>
        <Typography variant="p1">Para instalar o componente:</Typography>

        <CodeBlock language="bash" title="Terminal">
          {`npx ${LIB_NAME} add header`}
        </CodeBlock>

        <Typography variant="p1">
            Ou copie e cole o código do componente diretamente:
          </Typography>

          <SourceCodeDisplay
            filePath="registry/blocks/header.tsx"
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
          Header simples com título e descrição
        </Typography>
        <CodeBlock language="tsx" filename="page.tsx">
          {`<Header
  title="Bem vindo(a) ao Portal de Parceiros"
  description="Gerencie suas ofertas, produtos, clientes e muito mais em um só lugar."
  rightImagePath="/caminho-da-imagem.svg"
/>`}
        </CodeBlock>
        <div className="my-6">
          <Header
            title="Bem vindo(a) ao Portal de Parceiros"
            description="Gerencie suas ofertas, produtos, clientes e muito mais em um só lugar."
            rightImagePath="/assets/HeaderImg.svg"
          />
        </div>

        {/* Exemplo 2 */}
        <Typography variant="h3" className="mb-4">
          Com título e breadcrumbs
        </Typography>
        <CodeBlock language="tsx" filename="page.tsx">
          {`<Header
  title="Bem vindo(a) ao Portal de Parceiros"
  breadcrumbs={[
    { label: "Home", path: "/" },
    { label: "Página 1", path: "/" },
  ]}
  rightImagePath="/caminho-da-imagem.svg"
/>`}
        </CodeBlock>
        <div className="my-6">
          <Header
            title="Bem vindo(a) ao Portal de Parceiros"
            breadcrumbs={[
              { label: "Home", path: "/" },
              { label: "Página 1", path: "/" },
            ]}
            rightImagePath="/assets/HeaderImg.svg"
          />
        </div>

        {/* Exemplo 3 */}
        <Typography variant="h3" className="mb-4">
          Com título, descrição e breadcrumbs
        </Typography>
        <CodeBlock language="tsx" filename="page.tsx">
          {`<Header
  title="Configuração de Usuários"
  description="Gerencie e visualize os perfis de acesso dos usuários cadastrados em sua empresa para acesso ao portal."
  breadcrumbs={[
    { label: "Home", path: "/" },
    { label: "Configurações" },
    { label: "Configuração de Usuários" },
  ]}
  rightImagePath="/caminho-da-imagem.svg"
/>`}
        </CodeBlock>
        <div className="my-6">
          <Header
            title="Configuração de Usuários"
            description="Gerencie e visualize os perfis de acesso dos usuários cadastrados em sua empresa para acesso ao portal."
            breadcrumbs={[
              { label: "Home", path: "/" },
              { label: "Configurações", path: "/configuracoes" },
              { label: "Configuração de Usuários" },
            ]}
            rightImagePath="/assets/HeaderImg.svg"
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
                <InlineCode>title</InlineCode>
              </td>
              <td className="border border-slate-200 px-4 py-3">
                <Typography variant="p2">string</Typography>
              </td>
              <td className="border border-slate-200 px-4 py-3">
                <Typography variant="p2">Obrigatório</Typography>
              </td>
              <td className="border border-slate-200 px-4 py-3">
                <Typography variant="p2">Título principal da página</Typography>
              </td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-3">
                <InlineCode>description</InlineCode>
              </td>
              <td className="border border-slate-200 px-4 py-3">
                <Typography variant="p2">string</Typography>
              </td>
              <td className="border border-slate-200 px-4 py-3">
                <Typography variant="p2">Opcional</Typography>
              </td>
              <td className="border border-slate-200 px-4 py-3">
                <Typography variant="p2">
                  Subtítulo ou descrição da página
                </Typography>
              </td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-3">
                <InlineCode>breadcrumbs</InlineCode>
              </td>
              <td className="border border-slate-200 px-4 py-3">
                <Typography variant="p2">
                  Array&lt;{`{ label: string; path?: string }`}&gt; ou []
                </Typography>
              </td>
              <td className="border border-slate-200 px-4 py-3">
                <Typography variant="p2">Opcional</Typography>
              </td>
              <td className="border border-slate-200 px-4 py-3">
                <Typography variant="p2">
                  Caminho de navegação até a página
                </Typography>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
