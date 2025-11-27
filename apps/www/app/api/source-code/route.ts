import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const filePath = searchParams.get('filePath')

    if (!filePath) {
      return NextResponse.json(
        { error: 'Parâmetro filePath é obrigatório' },
        { status: 400 }
      )
    }

    // Validação de segurança - evitar path traversal
    if (filePath.includes('..') || filePath.startsWith('/')) {
      return NextResponse.json(
        { error: 'Caminho de arquivo inválido' },
        { status: 400 }
      )
    }

    const fullPath = path.join(process.cwd(), filePath)

    // Verificar se o arquivo existe
    if (!fs.existsSync(fullPath)) {
      return NextResponse.json(
        { error: `Arquivo não encontrado: ${filePath}` },
        { status: 404 }
      )
    }

    const sourceCode = await fs.promises.readFile(fullPath, 'utf-8')

    return NextResponse.json({
      code: sourceCode,
      filePath
    })
  } catch (error) {
    console.error('Erro ao ler arquivo:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor ao ler o arquivo' },
      { status: 500 }
    )
  }
}
