import { Typography } from "@/registry/ui/typography";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-lg mx-auto">
        <div className="space-y-2">
          <Typography variant="h2">Biblioteca de componentes acessíveis desenvolvida utilizando o style guide do Journey UI e baseada no shadcn-ui.</Typography>
          <Typography variant="p1">Desenvolvida pela Squad de Billing da Totvs.</Typography>
        </div>

          <Link href="/guias/inicio-rapido">
          <div className="mt-8  flex items-center gap-2 hover:border-b w-min transition-all ">
            <Typography variant="p1">
              Documentação
            </Typography>
            <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
      </div>
    </div>
  )
}