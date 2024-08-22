# US 001: /movies

**Sendo** um usuário com cadastro válido no sistema\
**Gostaria** gerenciar filmes na aplicação\
**Para** poder criar, listar, editar, excluir e atualizar um filme.

## DoR

- Banco de dados e infraestrutura para desenvolvimento disponibilizados;
- Cadastro de usuário feita;
- API de autenticação implementada; 
- Ambiente de testes disponibilizado.

## DoD

- CRUD de gerenciamento de filmes implementado (CRIAR, ATUALIZAR, LISTAR E DELETAR);
- Análise de testes cobrindo a rota filmes
- Matriz de rastreabilidade implementada
- Automação de testes baseado na análise realizada

## Acceptance Criteria

- Usuários administradores da API tem acesso à criação, atualização e exclusão
- Qualquer usuário pode ter acesso à consulta de filmes
- Não deverá ser possível o cadastro de filmes com nomes duplicados
- Não deverá ser possível a atualização de filme com nome duplicado
- Não deverá ser possível fazer ações e chamadas para filmes inexistentes
- Os testes executados deverão conter evidências;
- A cobertura de testes deve se basear no Swagger e ir além, cobrindo cenários alternativos.
