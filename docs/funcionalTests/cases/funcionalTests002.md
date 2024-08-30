# Planejamento de testes - [US 002] Ingressos

Aplicação: <https://github.com/juniorschmitz/nestjs-cinema/tree/main/>

## Resumo da estratégia

O objetivo deste planejamento é garantir a qualidade e adesão do sistema de Cinema. Este planejamento desenvolve a estrategia e seleção de testes abrangendo as funcionalidades da rota tikets, bem como a validação das regras de negócio. Buscaremos uma seleção para testes automatizados para aumentar a eficiência e cobertura de cenários.

## User Storie

**Sendo** um usuário com cadastro válido no sistema\
**Gostaria** gerenciar ingresso na aplicação\
**Para** poder criar, listar, editar, excluir e atualizar um ingresso.

## Cenários macros de testes

Os cenários a seguir são os que contemplam o endpoint de filme.

1. Cadastro de ingresso
2. Listagem de ingressos
3. Busca por ingresso
4. Deleção de ingresso
5. Editar ingresso

## Definition of Done (DoD)

Deve-se atentar aos DoD dessa User Storie, uma vez que esses são os critérios para definir se a tarefa foi toda concluída. São elas:

- CRUD de gerenciamento de ingressos implementado (CRIAR, ATUALIZAR, LISTAR E DELETAR);
- Análise de testes cobrindo a rota ingressos
- Matriz de rastreabilidade implementada
- Automação de testes baseado na análise realizada

## Tipos de Testes

- Positivo: Casos onde a operação deve ser bem-sucedida.
- Negativo: Casos onde a operação deve falhar devido a condições inválidas.
- Funcional: Testes que verificam a funcionalidade em condições específicas, como duplicidade de dados.
- Segurança: Testes que verificam controles de acesso e autorização.
- Integração: Testes que envolvem dependências de outros sistemas ou APIs.

## Casos de testes

| ID   | Cenário de teste      | Descrição Método                                                                | Método | Tipo      | Código esperado |
| ---- | --------------------- | ------------------------------------------------------------------------------- | ------ | --------- | --------------- |
| CT01 | Cadastro de ingresso  | Cadastro de ingresso com dados válidos                                          | POST   | Positivo  | 201             |
| CT02 | Cadastro de ingresso  | Cadastro de ingresso com assento fora do intervalo permitido                    | POST   | Negativo  | 400             |
| CT03 | Cadastro de ingresso  | Cadastro de ingresso com preço fora do intervalo permitido                      | POST   | Negativo  | 400             |
| CT04 | Cadastro de ingresso  | Cadastro de mais de um ingresso com mesmo assento                               | POST   | Funcional | 400             |
| CT05 | Cadastro de ingresso  | Cadastro de ingresso com dados faltando                                         | POST   | Negativo  | 400             |
| CT06 | Cadastro de ingresso  | Cadastro de ingresso com dados inválidos                                        | POST   | Negativo  | 400             |
| CT07 | Cadastro de ingresso  | Cadastro de ingresso com filme inválidos                                        | POST   | Negativo  | 400             |
| CT08 | Listagem de ingressos | Listar ingressos cadastrados no sistema                                         | GET    | Positivo  | 200             |
| CT09 | Busca de ingresso     | Busca de ingresso com id válido                                                 | GET    | Positivo  | 200             |
| CT10 | Busca de ingresso     | Busca de ingresso com id inválido                                               | GET    | Negativo  | 404             |
| CT11 | Busca de ingresso     | Busca de ingresso com id vazio                                                  | GET    | Negativo  | 400             |
| CT12 | Busca de ingresso     | Busca de ingresso excluído                                                      | GET    | Negativo  | 404             |
| CT13 | Deleção de ingresso   | Excluir ingresso com id válido                                                  | DELETE | Positivo  | 200             |
| CT14 | Deleção de ingresso   | Excluir ingresso com id inválido                                                | DELETE | Negativo  | 404             |
| CT15 | Editar ingresso       | Editar uma informação do ingresso com id válido                                 | PUT    | Positivo  | 200             |
| CT16 | Editar ingresso       | Editar uma informação do ingresso colocando assento fora do intervalo permitido | PUT    | Negativo  | 400             |
| CT17 | Editar ingresso       | Editar uma informação do ingresso colocando preço fora do intervalo permitido   | PUT    | Negativo  | 400             |
| CT18 | Editar ingresso       | Editar nome do ingresso com id válido, com nome já utilizado                    | PUT    | Funcional | 400             |
| CT19 | Editar ingresso       | Editar removendo um item do filme e deixando ele vazio                          | PUT    | Negativo  | 400             |
| CT20 | Editar ingresso       | Editar uma informação do ingresso com id inválido                               | PUT    | Negativo  | 404             |

## Testes candidatos à automação

Os testes ditos canditados à automação foram selecionados com o intuito de cobrir as funcionalidades principais do fluxo de ingressos, bem como, o cumprimento das regras de negócio. De acordo com o critério de seleção do tester, seguindo uma possível rotina de uma cinema real, os testes selecionados são:

- Testes relacionados a cadastro de ingressos (CT01, CT02, CT03, CT04, CT05, CT06 e CT07)
- Testes relacionados a listagem de ingressos (CT08)
- Testes relacionados a busca de ingressos (CT09, CT10, CT11 e CT12)
- Testes relacionados a deleção de ingressos (CT13 e CT14)
- Testes relacionados a edição de ingressos (CT15, CT16, CT17, CT18, CT19 e CT20)

Os testes selecionados compõem um gama de funcionalidades que garantem o funcionamento da aplicação, bem como as limitações de campos, os _status code_ e as mensagens de retorno das requisições devem ser monitoradas afim de verificar a consistência da API.

## Executores

- Isabelle Vimercati

## Cronograma

O cronograma será definido pelo período em que a Sprint está ocorrendo.

- Data de início: 19/08/2024
- Data de término: 30/08/2024
