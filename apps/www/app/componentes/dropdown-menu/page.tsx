"use client"

import { Sliders01 } from "@untitled-ui/icons-react";
import { CodeBlock } from "@/components/code-block";
import { Typography } from "@/registry/ui/typography";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/registry/ui/dropdown-menu";
import { Button } from "@/registry/ui/button";
import { Checkbox } from "@/registry/ui/checkbox";
import { LIB_NAME } from "@/lib/constants";

export default function DropdownMenuPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Introdução */}
      <div className="mb-12">
        <Typography variant="h1" className="mb-4">
          Dropdown Menu
        </Typography>
        <Typography variant="p1" className="text-slate-600 text-lg">
          Componente de dropdown menu
        </Typography>
      </div>

      {/* Instalação */}
      <section className="mb-12 space-y-4">
        <Typography variant="h2" className="mb-6">Instalação</Typography>
        <Typography variant="p1">Para instalar o componente:</Typography>

        <CodeBlock language="bash" title="Terminal">
          {`npx ${LIB_NAME} add dropdown-menu`}
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
              Dropdown Menu básico
            </Typography>
            <CodeBlock language="tsx" filename="page.tsx">
              {`<DropdownMenu modal={false}>
  <DropdownMenuTrigger>
    trigger simples
  </DropdownMenuTrigger>
  <DropdownMenuContent align="start">
    conteudo simples
  </DropdownMenuContent>
</DropdownMenu>`}
            </CodeBlock>

            <div className="my-6 border border-slate-200 rounded-md p-4">
              <DropdownMenu modal={false}>
                <DropdownMenuTrigger>
                  trigger simples
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  conteudo simples
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div>
            <Typography variant="h3" className="mb-4">
              Dropdown Menu avançado com trigger sendo um Button
            </Typography>
            <CodeBlock expandable={4} language="tsx" filename="page.tsx">
              {`<DropdownMenu modal={false}>
  <DropdownMenuTrigger asChild>
    <Button
      variant="secondary"
      size="medium"
      iconOnly={<Sliders01 height={24} aria-label="Filtros"/>}
    />
  </DropdownMenuTrigger>
  <DropdownMenuContent className="p-4 w-auto border-none" align="start">
    <div className="grid grid-rows-2 gap-4">
      <Checkbox
        id="filter-1"
        label="Opção 1"
        onCheckedChange={() => {}}
      />
      <Checkbox
        id="filter-2"
        label="Opção 2"
        onCheckedChange={() => {}}
      />
    </div>
    <div className="flex justify-start mt-6 gap-2">
      <Button type="button" variant="secondary" size="small">
        LIMPAR
      </Button>
      <Button type="button" size="small">
        APLICAR
      </Button>
    </div>
  </DropdownMenuContent>
</DropdownMenu>`}
            </CodeBlock>

            <div className="my-6 border border-slate-200 rounded-md p-4">
              <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="secondary"
                    size="medium"
                    iconOnly={<Sliders01 height={24} aria-label="Filtros"/>}
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="p-4 w-auto border-none" align="start">
                  <div className="grid grid-rows-2 gap-4">
                    <Checkbox
                      id="filter-1"
                      label="Opção 1"
                      onCheckedChange={() => {}}
                    />
                    <Checkbox
                      id="filter-2"
                      label="Opção 2"
                      onCheckedChange={() => {}}
                    />
                  </div>
                  <div className="flex justify-start mt-6 gap-2">
                    <Button type="button" variant="secondary" size="small">
                      LIMPAR
                    </Button>
                    <Button type="button" size="small">
                      APLICAR
                    </Button>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}