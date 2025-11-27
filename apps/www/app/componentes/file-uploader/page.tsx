"use client";

import { Typography } from "@/registry/ui";
import { CodeBlock, InlineCode } from "@/components/code-block";
import { LIB_NAME } from "@/lib/constants";
import { CheckCircle, CircleXIcon, Upload } from "lucide-react";
import { SourceCodeDisplay } from "@/components/source-code-display";
import { FileUploader } from "@/registry/ui/file-uploader";

export default function FileUploaderPage() {
  const handleFileSelect = (file: File) => {
    console.log("Arquivo selecionado:", file);
  };

  const handleError = (error: string) => {
    console.error("Erro no upload:", error);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header */}
      <div className="mb-12">
        <Typography variant="h1" className="mb-4">
          FileUploader
        </Typography>
        <Typography variant="p1" className="text-slate-600 text-lg">
          Componente para upload de arquivos com suporte a arrastar e soltar,
          validação de tipos de arquivo e feedback visual de estados.
        </Typography>
      </div>

      {/* Instalação */}
      <section className="mb-12">
        <Typography variant="h2" className="mb-6">
          Instalação
        </Typography>

        <div className="space-y-4">
          <Typography variant="p1">
            Instale o componente FileUploader em seu projeto:
          </Typography>

          <CodeBlock language="bash" title="Terminal">
            {`npx ${LIB_NAME} add file-uploader`}
          </CodeBlock>

          <Typography variant="p1">
            Ou copie e cole o código diretamente:
          </Typography>

          <SourceCodeDisplay
            filePath="registry/ui/file-uploader.tsx"
            title="file-uploader.tsx"
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
            Importe o componente e use com as configurações padrão:
          </Typography>

          <CodeBlock language="tsx" filename="exemplo.tsx">
            {`import { FileUploader } from "@/components/ui/file-uploader"

export function ExemploBasico() {
  return <FileUploader />
}`}
          </CodeBlock>

          <div className="p-6 bg-slate-50 rounded-lg border">
            <FileUploader />
          </div>
        </div>
      </section>

      {/* Estados */}
      <section className="mb-12">
        <Typography variant="h2" className="mb-6">
          Estados
        </Typography>

        <div className="space-y-8">
          <Typography variant="p1">
            O FileUploader possui três estados visuais distintos com feedback
            claro para o usuário:
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-slate-50 rounded-lg border">
              <div className="mb-4 p-4 border-2 border-dashed border-blue-400 rounded-lg bg-blue-50 min-h-[120px] flex flex-col items-center justify-center">
                <div className="text-blue-500 mb-2">
                  <Upload className="mx-auto text-status-info" size={24} />
                </div>
                <Typography
                  variant="s2"
                  className="text-blue-700 text-center text-sm font-semibold"
                >
                  <span className="font-bold underline">Clique aqui</span> ou
                  arraste o arquivo
                </Typography>
              </div>
              <div className="mb-2">
                <InlineCode>status="idle"</InlineCode>
              </div>
              <Typography variant="p3" className="text-slate-600">
                Estado inicial aguardando seleção de arquivo
              </Typography>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border">
              <div className="mb-4 p-4 border-2 border-dashed border-green-400 rounded-lg bg-green-50 min-h-[120px] flex flex-col items-center justify-center">
                <div className="text-green-500 mb-2">
                  <CheckCircle
                    className="text-status-positive flex-shrink-0"
                    size={24}
                  />
                </div>
                <Typography
                  variant="s2"
                  className="text-green-700 text-center font-semibold"
                >
                  arquivo.csv
                </Typography>
                <Typography
                  variant="s2"
                  className="text-green-600 text-center text-sm"
                >
                  Pronto para envio
                </Typography>
              </div>
              <div className="mb-2">
                <InlineCode>status="success"</InlineCode>
              </div>
              <Typography variant="p3" className="text-slate-600">
                Arquivo válido selecionado com sucesso
              </Typography>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border">
              <div className="mb-4 p-4 border-2 border-dashed border-red-400 rounded-lg bg-red-50 min-h-[120px] flex flex-col items-center justify-center">
                <div className="text-red-500 mb-2">
                  <CircleXIcon
                    className="mx-auto text-status-negative"
                    size={24}
                  />
                </div>
                <Typography
                  variant="s2"
                  className="text-red-700 text-center font-semibold text-sm"
                >
                  <span className="font-bold">Arquivo incompatível</span>
                  <br />
                  Formato não suportado
                </Typography>
              </div>
              <div className="mb-2">
                <InlineCode>status="error"</InlineCode>
              </div>
              <Typography variant="p3" className="text-slate-600">
                Erro na validação do arquivo
              </Typography>
            </div>
          </div>
        </div>
      </section>

      {/* Configurações */}
      <section className="mb-12">
        <Typography variant="h2" className="mb-6">
          Configurações
        </Typography>

        <div className="space-y-8">
          <div>
            <Typography variant="h3" className="mb-4">
              Tipos de arquivo personalizados
            </Typography>
            <div className="space-y-4">
              <Typography variant="p1">
                Configure quais tipos de arquivo são aceitos usando a prop{" "}
                <InlineCode>accept</InlineCode>:
              </Typography>

              <div className="p-6 bg-slate-50 rounded-lg border">
                <FileUploader
                  accept=".pdf,.doc,.docx"
                  onFileSelect={handleFileSelect}
                  onError={handleError}
                />
              </div>

              <CodeBlock language="tsx" filename="tipos-arquivo.tsx">
                {`// Aceitar apenas PDFs e documentos Word
<FileUploader accept=".pdf,.doc,.docx" />

// Aceitar imagens
<FileUploader accept=".jpg,.jpeg,.png,.gif" />

// Aceitar planilhas
<FileUploader accept=".csv,.xlsx,.xls" />`}
              </CodeBlock>
            </div>
          </div>

          <div>
            <Typography variant="h3" className="mb-4">
              Limite de tamanho
            </Typography>
            <div className="space-y-4">
              <Typography variant="p1">
                Defina o tamanho máximo permitido usando{" "}
                <InlineCode>maxSizeMB</InlineCode>:
              </Typography>

              <div className="p-6 bg-slate-50 rounded-lg border">
                <FileUploader
                  maxSizeMB={5}
                  onFileSelect={handleFileSelect}
                  onError={handleError}
                />
              </div>

              <CodeBlock language="tsx" filename="limite-tamanho.tsx">
                {`// Limite de 5MB
<FileUploader maxSizeMB={5} />

// Limite de 100MB para arquivos grandes
<FileUploader maxSizeMB={100} />

// Limite pequeno de 1MB
<FileUploader maxSizeMB={1} />`}
              </CodeBlock>
            </div>
          </div>
        </div>
      </section>

      {/* Callbacks e eventos */}
      <section className="mb-12">
        <Typography variant="h2" className="mb-6">
          Callbacks e eventos
        </Typography>

        <div className="space-y-6">
          <Typography variant="p1">
            Use os callbacks <InlineCode>onFileSelect</InlineCode> e{" "}
            <InlineCode>onError</InlineCode> para capturar eventos:
          </Typography>

          <div className="p-6 bg-slate-50 rounded-lg border">
            <FileUploader
              onFileSelect={handleFileSelect}
              onError={handleError}
            />
          </div>

          <CodeBlock language="tsx" filename="callbacks.tsx">
            {`import { FileUploader } from "@/registry/ui"

export function FileUploaderWithCallbacks() {
  const handleFileSelect = (file: File) => {
    console.log("Arquivo selecionado:", {
      name: file.name,
      size: file.size,
      type: file.type
    })
    
    // Processar o arquivo aqui
    uploadFile(file)
  }

  const handleError = (error: string) => {
    console.error("Erro:", error)
    
    // Mostrar notificação de erro
    showErrorNotification(error)
  }

  return (
    <FileUploader 
      onFileSelect={handleFileSelect}
      onError={handleError}
    />
  )
}`}
          </CodeBlock>
        </div>
      </section>

      {/* Funcionalidades */}
      <section className="mb-12">
        <Typography variant="h2" className="mb-6">
          Funcionalidades
        </Typography>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <Typography variant="h2" className="mb-1">
                  Drag & Drop
                </Typography>
                <Typography variant="p3" className="text-slate-600">
                  Suporte completo para arrastar e soltar arquivos na área de
                  upload
                </Typography>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <Typography variant="h2" className="mb-1">
                  Validação de tipo
                </Typography>
                <Typography variant="p3" className="text-slate-600">
                  Verifica extensões de arquivo e rejeita formatos não
                  permitidos
                </Typography>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <Typography variant="h2" className="mb-1">
                  Validação de tamanho
                </Typography>
                <Typography variant="p3" className="text-slate-600">
                  Controle preciso do tamanho máximo permitido em MB
                </Typography>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <Typography variant="h2" className="mb-1">
                  Estados visuais
                </Typography>
                <Typography variant="p3" className="text-slate-600">
                  Feedback visual claro com cores e ícones para cada estado
                </Typography>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <Typography variant="h2" className="mb-1">
                  Acessibilidade
                </Typography>
                <Typography variant="p3" className="text-slate-600">
                  Suporte a navegação por teclado e compatível com screen
                  readers
                </Typography>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <Typography variant="h2" className="mb-1">
                  Design responsivo
                </Typography>
                <Typography variant="p3" className="text-slate-600">
                  Largura máxima de 600px com comportamento responsivo
                </Typography>
              </div>
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
                  <InlineCode>accept</InlineCode>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">string</Typography>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">".csv"</Typography>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">
                    Tipos de arquivo aceitos (ex: ".csv,.pdf,.jpg")
                  </Typography>
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">
                  <InlineCode>maxSizeMB</InlineCode>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">number</Typography>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">50</Typography>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">
                    Tamanho máximo do arquivo em MB
                  </Typography>
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">
                  <InlineCode>onFileSelect</InlineCode>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">(file: File) =&gt; void</Typography>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">-</Typography>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">
                    Callback executado quando um arquivo válido é selecionado
                  </Typography>
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">
                  <InlineCode>onError</InlineCode>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">
                    (error: string) =&gt; void
                  </Typography>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">-</Typography>
                </td>
                <td className="border border-slate-200 px-4 py-3">
                  <Typography variant="p2">
                    Callback executado quando há erro na validação
                  </Typography>
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
                  <Typography variant="p2">
                    Classes CSS adicionais para personalização
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
              Integração com React Hook Form
            </Typography>

            <div className="p-6 bg-slate-50 rounded-lg border mb-4">
              <Typography variant="p2" className="text-slate-600 mb-4">
                Exemplo prático de integração com formulários:
              </Typography>
            </div>

            <CodeBlock language="tsx" filename="react-hook-form.tsx">
              {`import { useForm } from "react-hook-form"
import { FileUploader } from "@/registry/ui"

interface FormData {
  file: File | null
  name: string
}

export function FileUploaderForm() {
  const { setValue, watch, handleSubmit } = useForm<FormData>({
    defaultValues: { file: null, name: "" }
  })
  
  const selectedFile = watch("file")

  const handleFileSelect = (file: File) => {
    setValue("file", file)
  }

  const handleError = (error: string) => {
    // Resetar o campo em caso de erro
    setValue("file", null)
    console.error(error)
  }

  const onSubmit = (data: FormData) => {
    if (data.file) {
      // Processar envio do formulário
      console.log("Enviando:", data)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FileUploader 
        onFileSelect={handleFileSelect}
        onError={handleError}
      />
      
      {selectedFile && (
        <p className="mt-2 text-sm text-green-600">
          Arquivo selecionado: {selectedFile.name}
        </p>
      )}
      
      <button type="submit" disabled={!selectedFile}>
        Enviar
      </button>
    </form>
  )
}`}
            </CodeBlock>
          </div>

          <div>
            <Typography variant="h3" className="mb-4">
              Upload com preview e progresso
            </Typography>

            <CodeBlock language="tsx" filename="upload-com-preview.tsx">
              {`import { useState } from "react"
import { FileUploader } from "@/registry/ui"

export function AdvancedFileUploader() {
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState(0)

  const handleFileSelect = async (selectedFile: File) => {
    setFile(selectedFile)
    setUploading(true)
    setProgress(0)

    // Simular upload com progresso
    const formData = new FormData()
    formData.append('file', selectedFile)

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        setProgress(100)
        console.log('Upload concluído!')
      }
    } catch (error) {
      console.error('Erro no upload:', error)
    } finally {
      setUploading(false)
    }
  }

  const handleError = (error: string) => {
    setFile(null)
    alert(error)
  }

  return (
    <div className="space-y-4">
      <FileUploader 
        onFileSelect={handleFileSelect}
        onError={handleError}
      />
      
      {file && (
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="font-medium">{file.name}</p>
          <p className="text-sm text-gray-600">
            {(file.size / 1024 / 1024).toFixed(2)} MB
          </p>
          
          {uploading && (
            <div className="mt-2">
              <div className="bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-500 h-2 rounded-full transition-all"
                  style={{ width: \`\${progress}%\` }}
                />
              </div>
              <p className="text-sm text-gray-600 mt-1">
                {progress}% concluído
              </p>
            </div>
          )}
        </div>
      )}
    </div>
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
              💡 Melhores práticas
            </Typography>
            <ul className="space-y-1">
              <li>
                <Typography variant="p2" className="text-blue-700">
                  • Sempre defina tipos de arquivo específicos com{" "}
                  <InlineCode>accept</InlineCode>
                </Typography>
              </li>
              <li>
                <Typography variant="p2" className="text-blue-700">
                  • Configure limites de tamanho apropriados para seu caso de
                  uso
                </Typography>
              </li>
              <li>
                <Typography variant="p2" className="text-blue-700">
                  • Implemente callbacks para dar feedback ao usuário
                </Typography>
              </li>
              <li>
                <Typography variant="p2" className="text-blue-700">
                  • Use mensagens de erro claras e acionáveis
                </Typography>
              </li>
            </ul>
          </div>

          <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
            <Typography variant="p2b" className="text-green-800 mb-2">
              ✅ Casos de uso recomendados
            </Typography>
            <ul className="space-y-1">
              <li>
                <Typography variant="p2" className="text-green-700">
                  • Upload de documentos (PDF, DOC, etc.)
                </Typography>
              </li>
              <li>
                <Typography variant="p2" className="text-green-700">
                  • Import de planilhas e arquivos CSV
                </Typography>
              </li>
              <li>
                <Typography variant="p2" className="text-green-700">
                  • Upload de imagens com validação de formato
                </Typography>
              </li>
              <li>
                <Typography variant="p2" className="text-green-700">
                  • Formulários que requerem anexos
                </Typography>
              </li>
            </ul>
          </div>

          <div className="p-6 bg-amber-50 border border-amber-200 rounded-lg">
            <Typography variant="p2b" className="text-amber-800 mb-2">
              ⚠️ Considerações importantes
            </Typography>
            <ul className="space-y-1">
              <li>
                <Typography variant="p2" className="text-amber-700">
                  • O componente não realiza o upload automático - use os
                  callbacks
                </Typography>
              </li>
              <li>
                <Typography variant="p2" className="text-amber-700">
                  • Validações são feitas apenas no cliente - valide também no
                  servidor
                </Typography>
              </li>
              <li>
                <Typography variant="p2" className="text-amber-700">
                  • Para arquivos muito grandes, considere implementar upload em
                  chunks
                </Typography>
              </li>
              <li>
                <Typography variant="p2" className="text-amber-700">
                  • O componente utiliza as cores do design system (status-info,
                  status-positive, status-negative)
                </Typography>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
