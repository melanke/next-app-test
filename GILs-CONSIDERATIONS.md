# Minhas Considerações do estudo
Esse app foi feito a partir desse artigo:
https://dev.to/prisma/complete-introduction-to-fullstack-type-safe-graphql-feat-next-js-nexus-prisma-c5

## O que temos
- No arquivo prisma/schema.prisma você define os models da aplicação
    - dá pra gerar esse arquivo automaticamente do bd (npx prisma introspect) mas acho que só funciona com versões mais novas do MySQL
    - mas podemos gerar o bd apartir dele tb, oq é mais recomendado
    - Não vamos precisar gerar nenhum outro arquivo de model, esse vai ser o single-source-of-truth pq temos todo um mecamismo que gera os tipos apartir disso. Em outras configurações os tipos giram em torno do GraphQL, porém nós geramos esses tipos do GraphQL apartir do prisma pq o prisma define detalhes de BD
    - Para poder usar lógica com o model, se formos pro caminho OOP podemos usar extension methods ou herança; mas tb podemos usar apenas métodos estaticos
    - Sempre que alterar este arquivo precisa rodar npx prisma generate

- No arquivo .env podemos definir variáveis para configurar a conexão ao BD

- No arquivo graphql/schema.ts podemos definir o que fazemos hoje nos nossos process
    - ele define todas as queries (pra obter dados), mutations (para alterar dados) e cada campo do model que pode ser visível
    - Tem muita coisa nele, devemos separar algumas responsabilidades
    - Em outras configurações poderíamos definir no GraphQL, mas usamos o nexus para transformar várias coisas em Typescript
    - Temos total liberdade para fazer queries diretas ao MySQL, porém dá pra usar métodos já prontos tb (crud do nexus)
    - Pra controlar permissões de acesso dá pra usar o plugin padrão do nexus chamado fieldAuthorizePlugin ou o plugin https://github.com/Sytten/nexus-shield que tem poucas estrelas mas é muito mais poderoso. Uma estratégia que o pessoal tá usando é realmente criar roles/scopes

- Qualquer arquivo na pasta graphql com o sufixo .graphql.ts serve para guardar as consultas de graphql que o client-side faz ao servidor, existe um processo que transforma essas consultas em métodos automaticamente ("query AllUsers" vira useQueryAllUsers())
    - O Next já está configurado pra fazer SSR dessas queries além de podermos usa-las dinamicamente
    - No arquivo components/AllUsers.tsx temos um pequeno exemplo de como chamar o método useQueryAllUsers

- O arquivo pages/_app.tsx serve pra configurar a aplicação Next client-side

- O arquivo pages/index.tsx é a página inicial da aplicação
    - O Next faz o "file system routing", pra criar uma página nova basta criar um arquivo nessa pasta
  
## Plugins para IntelliJ
- Prisma Support: https://plugins.jetbrains.com/plugin/14282-prisma-support
- JS GraphQL: https://plugins.jetbrains.com/plugin/8097-js-graphql


## A seguir

- Seria possível criar um App ReactNative que também gera um PWA identico usando o react-native-web e integrar com Next para o PWA ter as funcionalidades do Next, mas é um tópico muito avançado que precisa de certa cautela

- Chakra UI é uma lib de estilização utilitária (tipo tailwind) mas usa componentes próprios e são as props que definem o estilo

- No Next dá pra criar um mecanismo de cache (getStaticProps) só que não sei como fazer isso com a configuração que temos hj, mas perguntei via comentario no blog

- Existe uma biblioteca da própria Vercel chamada SWR que faz o client-side atualizar o conteúdo automaticamente quando ele precisa se atualizar

- A Vercel tb tem uma hospedagem que se encaixa perfeitamente com o Next

