import type { Metadata } from "next";
import "./globals.css";
import { DocumentationHeader } from "@/components/header";
import { Sidebar } from "@/components/sidebar";

export const metadata: Metadata = {
  title: "Journey UI",
  description: "",
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className="min-h-screen">
        <DocumentationHeader />
        <main className="h-[calc(100vh-theme(spacing.16))]">
          <div className="h-full container mx-auto px-4 border-r border-l border-zinc-800">
            <div className="h-full flex gap-4">
              <Sidebar />
              <div className="flex-1 h-full overflow-y-auto py-8">
                {children}
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
