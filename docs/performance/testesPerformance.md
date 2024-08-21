# 🗒️ Planejamento de Testes de Performance - ServeRest

## Resumo da estratégia

Este documento detalha a estratégia de testes de performance a serem realizados na API Cinema durante a Sprint 8. O objetivo principal é avaliar o desempenho da API com base nas métricas definidas e nas expectativas do produto que são ditas do próprio [repositório da API](https://github.com/juniorschmitz/nestjs-cinema/blob/main/UserStories/Gerenciamento%20de%20Filmes%20na%20API.md).

## Ambiente de Teste

## Requisitos Não Funcionais de Performance da API

- A API deve ser capaz de processar pelo menos 100 solicitações de criação de filmes por segundo.
- O tempo médio de resposta para a criação de um novo filme não deve exceder 200 milissegundos.
- A API deve ser capaz de responder a solicitações GET de listagem de filmes em menos de 100 milissegundos.
- A lista de filmes deve ser paginada, com no máximo 20 filmes por página.
- A API deve ser capaz de responder a solicitações GET de detalhes de um filme em menos de 50 milissegundos.
- A API deve ser capaz de processar pelo menos 50 solicitações de atualização de filmes por segundo.
- O tempo médio de resposta para a atualização dos detalhes de um filme não deve exceder 300 milissegundos.
- A API deve ser capaz de processar pelo menos 30 solicitações de exclusão de filmes por segundo.
- O tempo médio de resposta para a exclusão de um filme não deve exceder 400 milissegundos.

## Tipos de testes de performance selecionados

- Teste de Carga
- Teste de Estresse
- Teste de Escalabilidade
- Teste de Pico
- Teste de Concorrência

## Tabela de Cenários de Teste para a Rota /movies

| Código | Identificador | Cenário de Teste        | Descrição                                                                          | Carga                                                                   | Duração | Endpoints       |
| ------ | :-----------: | ----------------------- | ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | ------- | --------------- |
| TP01   |       M       | Teste de Carga          | Avaliar o desempenho do sistema sob carga normal esperada.                         | 150 usuários simultâneos, com dois ciclos de 2 min                      | 4 min   | `` |
| TP02   |       M       | Teste de Estresse       | Identificar o ponto de falha do sistema ao submetê-lo a uma carga extrema.         | 300 usuários simultâneos com requisições a cada 1 minuto, por 2 minutos | 4 min   | `` |
| TP03   |       M       | Teste de Escalabilidade | Avaliar o comportamento do sistema sob diferentes configurações de infraestrutura. | 20% de usuários a mais do que no teste de estresse e mais 1 min         | 5 min   | `` |
| TP04   |       M       | Teste de Pico           | Avaliar o comportamento do sistema sob um pico repentino de carga.                 | 700 usuários simultâneos por 3 min                                      | 3 min   | `` |
| TP05   |       M       | Teste de Concorrência   | Avaliar como o sistema lida com múltiplos usuários acessando simultaneamente       | 500 usuários simultâneos por 1 minutos                                  | 1 min   | `` |

## Tabela de Cenários de Teste para a Rota /tikets

| ID   | Identificador | Cenário de Teste        | Descrição                                                                          | Carga                                                                   | Duração | Endpoints    |
| ---- | :-----------: | ----------------------- | ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | ------- | ------------ |
| TP01 |       T       | Teste de Carga          | Avaliar o desempenho do sistema sob carga normal esperada.                         | 150 usuários simultâneos, com dois ciclos de 2 min                      | 4 min   | `` |
| TP02 |       T       | Teste de Estresse       | Identificar o ponto de falha do sistema ao submetê-lo a uma carga extrema.         | 300 usuários simultâneos com requisições a cada 1 minuto, por 2 minutos | 4 min   | `` |
| TP03 |       T       | Teste de Escalabilidade | Avaliar o comportamento do sistema sob diferentes configurações de infraestrutura. | 20% de usuários a mais do que no teste de estresse e mais 1 min         | 5 min   | `` |
| TP04 |       T       | Teste de Pico           | Avaliar o comportamento do sistema sob um pico repentino de carga.                 | 700 usuários simultâneos por 2 min                                      | 3 min   | `` |
| TP05 |       T       | Teste de Concorrência   | Avaliar como o sistema lida com múltiplos usuários acessando simultaneamente       | 500 usuários simultâneos por 1 minutos                                  | 1 min   | `` |

## Métricas Esperadas para as rotas

| ID   | Cenário de Teste        | Tempo Médio de Resposta | Taxa de Erros | Throughput (req/s) | Linha dos 90%  |
| ---- | ----------------------- | ----------------------- | ------------- | ------------------ | -------------- |
| TP01 | Teste de Carga          | <= 25 segundos          | 0%            | >= 12              | <= 59 segundos |
| TP02 | Teste de Estresse       | <= 25 segundos          | 0%            | >= 7               | <= 24 segundos |
| TP03 | Teste de Escalabilidade | <= 28 segundos          | 0%            | >= 15              | <= 30 segundos |
| TP04 | Teste de Pico           | <= 17 segundos          | 0%            | >= 7               | <= 22 segundos |
| TP05 | Teste de Capacidade     | <= 16 segundos          | 0%            | >= 4               | <= 23 segundos |
