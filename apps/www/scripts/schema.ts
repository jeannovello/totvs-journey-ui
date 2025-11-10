// Tipos base
export type RegistryItemType = 
  | "registry:ui"
  | "registry:lib" 
  | "registry:hook"
  | "registry:theme"
  | "registry:block"
  | "registry:example"
  | "registry:internal"
  | "registry:style"
  | "registry:page"
  | "registry:component"
  | "registry:init"

// Schema para arquivos do registry
export interface RegistryItemFile {
  path: string
  type: RegistryItemType
  content?: string
  target?: string
}

// Schema para configuração do Tailwind
export interface RegistryItemTailwind {
  config?: {
    plugins?: string[]
    theme?: Record<string, any>
    [key: string]: any
  }
}

// Schema principal do item do registry
export interface RegistryItem {
  name: string
  type: RegistryItemType
  files: RegistryItemFile[]
  dependencies?: string[]
  devDependencies?: string[]
  registryDependencies?: string[]
}

// Schema para o registry completo
export interface Registry {
  name: string
  homepage?: string
  items: RegistryItem[]
}