# US 002: /tikets

**Sendo** um usuário com cadastro válido no sistema\
**Gostaria** gerenciar ingresso na aplicação\
**Para** poder criar, listar, editar, excluir e atualizar um ingresso.

## DoR

- Banco de dados e infraestrutura para desenvolvimento disponibilizados;
- Cadastro de usuário feita;
- API de filmes implementada;
- Ambiente de testes disponibilizado.

## DoD

- CRUD de gerenciamento de ingressos implementado (CRIAR, ATUALIZAR, LISTAR E DELETAR);
- Análise de testes cobrindo a rota ingressos
- Matriz de rastreabilidade implementada
- Automação de testes baseado na análise realizada

## Acceptance Criteria

- Todos as informações para a criação do ingresso devem ser preenchidas
- O numero do assento deve estar entre 0 e 99
- O preço do ingresso deve estar entre 0 e 60
- Não deverá ser possível a criação de um ingresso com o assento duplicado
- Não deverá ser possível a criação de um ingresso com filme inválido.
- Não deverá ser possível fazer ações e chamadas para ingressos inexistentes
- A API deve retornar o Id do tickets quando for criado.
- Os testes executados deverão conter evidências;
- A cobertura de testes deve se basear no Swagger e ir além, cobrindo cenários alternativos.
