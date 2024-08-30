# Planejamento de testes - [US 001] Filmes

Aplicação: <https://github.com/juniorschmitz/nestjs-cinema/tree/main/>

## Resumo da estratégia

O objetivo deste planejamento é garantir a qualidade e adesão do sistema de Cinema. Este planejamento desenvolve a estrategia e seleção de testes abrangendo as funcionalidades da rota movies, bem como a validação das regras de negócio. Buscaremos uma seleção para testes automatizados para aumentar a eficiência e cobertura de cenários.

## User Storie

**Sendo** um usuário com cadastro válido no sistema\
**Gostaria** gerenciar filmes na aplicação\
**Para** poder criar, listar, editar, excluir e atualizar um filme.

## Cenários macros de testes

Os cenários a seguir são os que contemplam o endpoint de filme.

1. Cadastro de filme
2. Listagem de filmes
3. Busca por filme
4. Deleção de filme
5. Editar filme

## Definition of Done (DoD)

Deve-se atentar aos DoD dessa User Storie, uma vez que esses são os critérios para definir se a tarefa foi toda concluída. São elas:

- CRUD de gerenciamento de filmes implementado (CRIAR, ATUALIZAR, LISTAR E DELETAR);
- Análise de testes cobrindo a rota filmes
- Matriz de rastreabilidade implementada
- Automação de testes baseado na análise realizada

## Tipos de Testes

- Positivo: Casos onde a operação deve ser bem-sucedida.
- Negativo: Casos onde a operação deve falhar devido a condições inválidas.
- Funcional: Testes que verificam a funcionalidade em condições específicas, como duplicidade de dados.
- Segurança: Testes que verificam controles de acesso e autorização.
- Integração: Testes que envolvem dependências de outros sistemas ou APIs.

## Casos de testes

| ID   | Cenário de teste   | Descrição                                                 | Nível de Autorização | Método | Tipo      | Código esperado |
| ---- | ------------------ | --------------------------------------------------------- | -------------------- | ------ | --------- | --------------- |
| CT01 | Cadastro de filme  | Cadastro de filme com dados válidos                       | Administrador        | POST   | Positivo  | 201             |
| CT02 | Cadastro de filme  | Cadastro de mais de um filme com mesmo nome               | Administrador        | POST   | Funcional | 400             |
| CT03 | Cadastro de filme  | Cadastro de filme com dados faltando                      | Administrador        | POST   | Negativo  | 400             |
| CT04 | Cadastro de filme  | Cadastro de filme com dados inválidos                     | Administrador        | POST   | Negativo  | 400             |
| CT05 | Cadastro de filme  | Cadastro de filme com dados válidos                       | Comum                | POST   | Segurança | 403             |
| CT06 | Listagem de filmes | Listar filmes cadastrados no sistema                      | Comum                | GET    | Positivo  | 200             |
| CT07 | Busca de filme     | Busca de filme com id válido                              | Comum                | GET    | Positivo  | 200             |
| CT08 | Busca de filme     | Busca de filme com id inválido                            | Comum                | GET    | Negativo  | 400             |
| CT09 | Busca de filme     | Busca de filme excluído                                   | Comum                | GET    | Negativo  | 400             |
| CT10 | Deleção de filme   | Excluir filme com id válido                               | Administrador        | DELETE | Positivo  | 200             |
| CT11 | Deleção de filme   | Excluir filme com id válido                               | Comum                | DELETE | Segurança | 403             |
| CT12 | Deleção de filme   | Excluir filme com id inválido                             | Administrador        | DELETE | Negativo  | 404             |
| CT13 | Deleção de filme   | Excluir filme que contém tikets atribuídos                | Administrador        | DELETE | Funcional | 400             |
| CT14 | Editar filme       | Editar uma informação do filme com id válido              | Administrador        | PUT    | Positivo  | 200             |
| CT15 | Editar filme       | Editar uma informação do filme com id inválido            | Administrador        | PUT    | Negativo  | 404             |
| CT16 | Editar filme       | Editar uma informação do filme com id válido              | Comum                | PUT    | Segurança | 403             |
| CT17 | Editar filme       | Editar nome do filme com id válido, com nome já utilizado | Administrador        | PUT    | Funcional | 400             |
| CT18 | Editar filme       | Editar removendo um item do filme e deixando ele vazio    | Administrador        | PUT    | Negativo  | 400             |

## Testes candidatos à automação

Os testes ditos canditados à automação foram selecionados com o intuito de cobrir as funcionalidades principais do fluxo de filmes, bem como, o cumprimento das regras de negócio. De acordo com o critério de seleção do tester, seguindo uma possível rotina de uma cinema real, os testes selecionados são:

- Testes relacionados a cadastro de filmes (CT01, CT02, CT03, CT04, CT05)
- Testes relacionados a listagem de filmes (CT06)
- Testes relacionados a busca de filmes (CT07, CT08, CT09)
- Testes relacionados a deleção de filmes (CT10, CT11, CT12, CT13)
- Testes relacionados a edição de filmes (CT14, CT15, CT16, CT17, CT18)

Os testes selecionados compõem um gama de funcionalidades que garantem o funcionamento da aplicação, bem como verifica a segurança referente ao nível de acesso de funcionalidade, os _status code_ bem como as mensagens de retorno das requisições devem ser monitoradas afim de verificar a consistência da API.

## Executores

- Isabelle Vimercati

## Cronograma

O cronograma será definido pelo período em que a Sprint está ocorrendo.

- Data de início: 19/08/2024
- Data de término: 30/08/2024
