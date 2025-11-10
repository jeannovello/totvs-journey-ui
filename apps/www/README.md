1. Desenvolver o componente em /apps/www/registry/ui ou /apps/www/registry/blocks
2. Adicionar o componente na sidebar de /apps/www/components/sidebar.tsx
3. Desenvolver a doc em /apps/www/app/componentes/{nome-do-componente}
4. Configurar o registry do componente desenvolvido (/apps/www/registry/registry-ui|registry-blocks|...)
5. acessar pasta /apps/www e rodar comando de build dos componentes npm run registry:build
6. commitar e criar PR pra main
7. Depois que o PR for aprovado e merged, rodar comandos manual para deploy de npm e doc