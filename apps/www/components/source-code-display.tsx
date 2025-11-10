import fs from 'fs'
import path from 'path'
import { CodeBlock } from './code-block'

interface SourceCodeDisplayProps {
  filePath: string
  title?: string
  language?: string
}

export async function SourceCodeDisplay({ 
  filePath, 
  title, 
  language = 'tsx' 
}: SourceCodeDisplayProps) {
  let sourceCode: string
  
  try {
    const fullPath = path.join(process.cwd(), filePath)
    sourceCode = await fs.promises.readFile(fullPath, 'utf-8')
  } catch (error) {
    sourceCode = `// Erro ao carregar arquivo: ${filePath}`
  }

  return (
    <CodeBlock expandable={10} language={language} title={title || path.basename(filePath)} showLineNumbers>
      {sourceCode}
    </CodeBlock>
  )
}