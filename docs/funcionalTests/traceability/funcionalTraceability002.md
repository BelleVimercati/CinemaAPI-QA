# Matriz de rastreabilidade dos Testes Automatizados - [002] /tickets

## Rota /tickets

Este é um documento que visa acompanhar os testes funcionais da rota tickets que foram selecionados para automatização. É de extrema importância a atualização da matriz para que toda a equipe fique ciente do que está sendo desenvolvido.

### Cobertura de Testes

Nessa Sprint a cobertura de testes Funcionais foi de aproximadamente 61,1%.

- Parte da pouca cobertura de testes foi em decorrência dos bugs encontrados nessa endpoint da API, o verbo http quando associado ao atributo ID de um ticket (`tickets/{id}`) faz com que a API caia, logo não foi possível testar as rotas.

### Status

- ✅: Desenvolvido e correto
- 🕒: Aguardando desenvolvimento
- ❌: Desenvolvido apresentando erro

| ID   | Caso de teste | Descrição                                                                       | Requisito relacionado        | Evidência | Status |
| ---- | ------------- | ------------------------------------------------------------------------------- | ---------------------------- | --------- | ------ |
| R001 | CT01          | Cadastro de ingresso com dados válidos                                          | Rota de tickets implementada | -         | ✅     |
| R002 | CT02          | Cadastro de ingresso com assento fora do intervalo permitido                    | Rota de tickets implementada | -         | ✅     |
| R003 | CT03          | Cadastro de ingresso com preço fora do intervalo permitido                      | Rota de tickets implementada | -         | ✅     |
| R004 | CT04          | Cadastro de mais de um ingresso com mesmo assento                               | Rota de tickets implementada | -         | ❌     |
| R005 | CT05          | Cadastro de ingresso com dados faltando                                         | Rota de tickets implementada | -         | ❌     |
| R006 | CT06          | Cadastro de ingresso com dados inválidos                                        | Rota de tickets implementada | -         | ❌     |
| R007 | CT07          | Cadastro de ingresso com filme inválidos                                        | Rota de tickets implementada | -         | ❌     |
| R008 | CT08          | Listar ingressos cadastrados no sistema                                         | Rota de tickets implementada | -         | ✅     |
| R009 | CT09          | Busca de ingresso com id válido                                                 | Rota de tickets implementada | -         | ❌     |
| R010 | CT10          | Busca de ingresso com id inválido                                               | Rota de tickets implementada | -         | 🕒     |
| R011 | CT11          | Busca de ingresso com id vazio                                                  | Rota de tickets implementada | -         | 🕒     |
| R012 | CT12          | Busca de ingresso excluído                                                      | Rota de tickets implementada | -         | 🕒     |
| R013 | CT13          | Excluir ingresso com id válido                                                  | Rota de tickets implementada | -         | ❌     |
| R014 | CT14          | Excluir ingresso com id inválido                                                | Rota de tickets implementada | -         | 🕒     |
| R015 | CT15          | Editar uma informação do ingresso com id válido                                 | Rota de tickets implementada | -         | ❌     |
| R016 | CT16          | Editar uma informação do ingresso colocando assento fora do intervalo permitido | Rota de tickets implementada | -         | 🕒     |
| R017 | CT17          | Editar uma informação do ingresso colocando preço fora do intervalo permitido   | Rota de tickets implementada | -         | 🕒     |
| R018 | CT18          | Editar nome do ingresso com id válido, com nome já utilizado                    | Rota de tickets implementada | -         | 🕒     |
| R018 | CT19          | Editar removendo um item do filme e deixando ele vazio                          | Rota de tickets implementada | -         | ❌     |
| R018 | CT20          | Editar uma informação do ingresso com id inválido                               | Rota de tickets implementada | -         | ❌     |
