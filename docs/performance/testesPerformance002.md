# 🗒️ Planejamento de Testes de Performance - Endpoint tikets

## Resumo da estratégia

Este documento detalha a estratégia de testes de performance a serem realizados na API Cinema durante a Sprint 8. O objetivo principal é avaliar o desempenho da API com base nas métricas definidas e nas expectativas do produto que são ditas do próprio [repositório da API](https://github.com/juniorschmitz/nestjs-cinema/blob/main/UserStories/Gerenciamento%20de%20Filmes%20na%20API.md).

## Ambiente de Teste

## Requisitos Não Funcionais de Performance da API

- A API deve ser capaz de processar pelo menos 50 solicitações de reserva de ingressos por segundo.
- O tempo médio de resposta para a reserva de um ingresso não deve exceder 300 milissegundos.

## Tipos de testes de performance selecionados

- Teste de Carga
- Teste de Estresse
- Teste de Escalabilidade
- Teste de Pico
- Teste de Concorrência

## Tabela de Cenários de Teste para a Rota /tikets

| ID   | Identificador | Cenário de Teste        | Descrição                                                                          | Carga                                                                   | Duração | Endpoints |
| ---- | :-----------: | ----------------------- | ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | ------- | --------- |
| TP01 |       T       | Teste de Carga          | Avaliar o desempenho do sistema sob carga normal esperada.                         | 150 usuários simultâneos, com dois ciclos de 2 min                      | 4 min   | ``        |
| TP02 |       T       | Teste de Estresse       | Identificar o ponto de falha do sistema ao submetê-lo a uma carga extrema.         | 300 usuários simultâneos com requisições a cada 1 minuto, por 2 minutos | 4 min   | ``        |
| TP03 |       T       | Teste de Escalabilidade | Avaliar o comportamento do sistema sob diferentes configurações de infraestrutura. | 20% de usuários a mais do que no teste de estresse e mais 1 min         | 5 min   | ``        |
| TP04 |       T       | Teste de Pico           | Avaliar o comportamento do sistema sob um pico repentino de carga.                 | 700 usuários simultâneos por 2 min                                      | 3 min   | ``        |
| TP05 |       T       | Teste de Concorrência   | Avaliar como o sistema lida com múltiplos usuários acessando simultaneamente       | 500 usuários simultâneos por 1 minutos                                  | 1 min   | ``        |

## Métricas Esperadas para a rota

| ID     | Cenário de Teste        | Tempo Médio de Resposta | Taxa de Erros | Throughput (req/s) | Linha dos 90% |
| ------ | ----------------------- | ----------------------- | ------------- | ------------------ | ------------- |
| TP01-T | Teste de Carga          | <= 300 ms               | < 0%          | >= 50              | <= 350 ms     |
| TP01-T | Teste de Estresse       | <= 500 ms               | < 1%          | >= 40              | <= 600 ms     |
| TP01-T | Teste de Escalabilidade | <= 400 ms               | < 1%          | >= 60              | <= 450 ms     |
| TP01-T | Teste de Pico           | <= 600 ms               | < 2%          | >= 70              | <= 700 ms     |
| TP01-T | Teste de Capacidade     | <= 350 ms               | < 1%          | >= 50              | <= 400 ms     |

Para cada método http deve-se considerar a mudança nos IDs dos testes:

- POST: TP01-TP
- PUT: TP01-TPU
- DELETE: TP01-TD
