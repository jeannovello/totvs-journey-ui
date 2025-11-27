"use client";

import { useEffect, useState } from "react";
import { CodeBlock } from "./code-block";

interface SourceCodeDisplayProps {
  readonly filePath: string;
  readonly title?: string;
  readonly language?: string;
}

export function SourceCodeDisplay({ 
  filePath, 
  title, 
  language = "tsx" 
}: SourceCodeDisplayProps) {
  const [sourceCode, setSourceCode] = useState<string>("Carregando...");

  useEffect(() => {
    const fetchSourceCode = async () => {
      try {
        const response = await fetch(`/api/source-code?filePath=${encodeURIComponent(filePath)}`);
        const data = await response.json();
        
        if (response.ok) {
          setSourceCode(data.code);
        } else {
          setSourceCode(data.code || `// Erro ao carregar arquivo: ${filePath}\n// ${data.error}`);
        }
      } catch {
        setSourceCode(`// Erro ao carregar arquivo: ${filePath}\n// Verifique sua conexão e tente novamente.`);
      }
    };

    fetchSourceCode();
  }, [filePath]);

  const fileName = filePath.split('/').pop() || filePath;

  return (
    <CodeBlock 
      expandable={10} 
      language={language} 
      title={title || fileName} 
      showLineNumbers
    >
      {sourceCode}
    </CodeBlock>
  );
}