# 🗒️ Planejamento de Testes de Performance - Endpoint movies

## Resumo da estratégia

Este documento detalha a estratégia de testes de performance a serem realizados na API Cinema durante a Sprint 8. O objetivo principal é avaliar o desempenho da API com base nas métricas definidas e nas expectativas do produto que são ditas do próprio [repositório da API](https://github.com/juniorschmitz/nestjs-cinema/blob/main/UserStories/Gerenciamento%20de%20Filmes%20na%20API.md).

## Ambiente de Teste

- Processador: 11th Gen Intel(R) Core(TM) i7-1165G7 @ 2.80GHz 2.80 GHz
- RAM: 16,0 GB
- Sistema: Windows 11 Home

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

## Verbos selecionados para essa bateria de testes

- POST
- PUT

## Tabela de Cenários de Teste para a Rota /movies

| Código | Identificador | Cenário de Teste        | Descrição                                                                          | Carga                                                                   | Duração | Endpoints que serão testados   |
| ------ | :-----------: | ----------------------- | ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | ------- | ------------------------------ |
| TP01   |       M       | Teste de Carga          | Avaliar o desempenho do sistema sob carga normal esperada.                         | 100 usuários simultâneos por 2 min                      | 2 min   | `/movies(POST)`,`/movies(PUT)` |
| TP02   |       M       | Teste de Estresse       | Identificar o ponto de falha do sistema ao submetê-lo a uma carga extrema.         | 300 usuários por 4 minutos | 4 min   | `/movies(POST)`,`/movies(PUT)` |
| TP03   |       M       | Teste de Escalabilidade | Avaliar o comportamento do sistema sob diferentes configurações de infraestrutura. | 20% de usuários a mais do que no teste de estresse e mais 1 min         | 3 min   | `/movies(POST)`,`/movies(PUT)` |
| TP04   |       M       | Teste de Pico           | Avaliar o comportamento do sistema sob um pico repentino de carga.                 | 500 usuários simultâneos por 3 min                                      | 3 min   | `/movies(POST)`,`/movies(PUT)` |
| TP05   |       M       | Teste de Concorrência   | Avaliar como o sistema lida com múltiplos usuários acessando simultaneamente       | 500 usuários simultâneos por 1 min                                  | 1 min   | `/movies(POST)`,`/movies(PUT)` |

## 📊 Métricas Esperadas para a rota

### POST

| ID      | Cenário de Teste        | Tempo Médio de Resposta | Taxa de Erros | Throughput (req/s) | Linha dos 90% |
| ------- | ----------------------- | ----------------------- | ------------- | ------------------ | ------------- |
| TP01-MP | Teste de Carga          | <= 200 ms               | < 0%          | >= 100             | <= 250 ms     |
| TP01-MP | Teste de Estresse       | <= 500 ms               | < 1%          | >= 80              | <= 600 ms     |
| TP01-MP | Teste de Escalabilidade | <= 300 ms               | < 1%          | >= 120             | <= 350 ms     |
| TP01-MP | Teste de Pico           | <= 400 ms               | < 2%          | >= 150             | <= 500 ms     |
| TP01-MP | Teste de Capacidade     | <= 250 ms               | < 1%          | >= 100             | <= 300 ms     |

### GET

| ID      | Cenário de Teste        | Tempo Médio de Resposta | Taxa de Erros | Throughput (req/s) | Linha dos 90% |
| ------- | ----------------------- | ----------------------- | ------------- | ------------------ | ------------- |
| TP01-MG | Teste de Carga          | <= 50 ms                | < 0%          | >= 200             | <= 70 ms      |
| TP01-MG | Teste de Estresse       | <= 100 ms               | < 1%          | >= 180             | <= 120 ms     |
| TP01-MG | Teste de Escalabilidade | <= 70 ms                | < 1%          | >= 220             | <= 90 ms      |
| TP01-MG | Teste de Pico           | <= 150 ms               | < 2%          | >= 250             | <= 170 ms     |
| TP01-MG | Teste de Capacidade     | <= 60 ms                | < 1%          | >= 200             | <= 80 ms      |

## 🚀 Para futuros testes:

### PUT

| ID       | Cenário de Teste        | Tempo Médio de Resposta | Taxa de Erros | Throughput (req/s) | Linha dos 90% |
| -------- | ----------------------- | ----------------------- | ------------- | ------------------ | ------------- |
| TP01-MPU | Teste de Carga          | <= 300 ms               | < 0%          | >= 50              | <= 350 ms     |
| TP01-MPU | Teste de Estresse       | <= 500 ms               | < 1%          | >= 40              | <= 600 ms     |
| TP01-MPU | Teste de Escalabilidade | <= 400 ms               | < 1%          | >= 60              | <= 450 ms     |
| TP01-MPU | Teste de Pico           | <= 600 ms               | < 2%          | >= 70              | <= 700 ms     |
| TP01-MPU | Teste de Capacidade     | <= 350 ms               | < 1%          | >= 50              | <= 400 ms     |

### DELETE

| ID      | Cenário de Teste        | Tempo Médio de Resposta | Taxa de Erros | Throughput (req/s) | Linha dos 90% |
| ------- | ----------------------- | ----------------------- | ------------- | ------------------ | ------------- |
| TP01-MD | Teste de Carga          | <= 400 ms               | < 0%          | >= 30              | <= 450 ms     |
| TP01-MD | Teste de Estresse       | <= 600 ms               | < 1%          | >= 25              | <= 700 ms     |
| TP01-MD | Teste de Escalabilidade | <= 500 ms               | < 1%          | >= 35              | <= 550 ms     |
| TP01-MD | Teste de Pico           | <= 700 ms               | < 2%          | >= 40              | <= 800 ms     |
| TP01-MD | Teste de Capacidade     | <= 450 ms               | < 1%          | >= 30              | <= 500 ms     |
