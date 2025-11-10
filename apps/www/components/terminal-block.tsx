"use client"

import { CodeBlock } from "./code-block"

interface TerminalBlockProps {
  children: string
  title?: string
  className?: string
}

export function TerminalBlock({ 
  children, 
  title = "Terminal",
  className 
}: TerminalBlockProps) {
  return (
    <CodeBlock
      language="bash"
      title={title}
      className={className}
    >
      {children}
    </CodeBlock>
  )
}