# Boilerplate de API em NodeJS com AdonisJS

## Instalação 
- `npm install` vai instalar todas as dependências

## Rodando e buildando o projeto
- Rodando `npm start` ou `node ace serve --watch`
- Buildando `npm build`

## Lint
- `npm run lint`

## Principais comandos Adonis(ace)
- Todos são prefixados com `node ace`

| Comando | Opção |Função|
|---------|-------|------|
| list:routes | | Lista todas as rotas ativas |
| make:model | | Cria model|
| make:controller | | Cria controller|
| make:migration | | Cria migration|
| migration:status | | Verifica status de todas migrations criadas |
| migration:run | | Aplica todas as migrations |
| migration:rollback | --batch (quantidade) | Desfaz migrations |


## Utilities
- `node ace generate:key` rode isso caso não tenha key no .env
- `node ace --help` list todos os comandos da CLI do Adonis(ace)
