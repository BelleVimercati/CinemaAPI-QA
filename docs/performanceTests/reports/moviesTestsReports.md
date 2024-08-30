# Resultados dos testes de Performance

Este documento busca agrupar os registros dos resultados dos testes de performance que foram feitos na API Cinema.
Os testes foram executados usando o K6, Node.js e a API foi rodada localmente na máquina do Tester.

A rota que tem seus resultados agrupados aqui é a rota `/movies`. O intuito foi testar 5 tipos de testes de performance para cada rota.

<h3>Movies</h3>

- [Smoke test](#smoke-test)
- [Teste de Carga](#teste-de-carga)
- [Teste de Estresse](#teste-de-estresse)
- [Teste de Escalabilidade](#teste-de-escalabilidade)
- [Teste de Pico](#teste-de-pico)
- [Teste de Concorrência](#teste-de-concorrência)

<br>

## Smoke test - POST

### Resultado

<img src="../../performanceTests/results/movies/smokePost.jpg" width="900px">

## Smoke test - GET

### Resultado

<img src="../../../performanceTests/results/movies/smokeGet.jpg" width="900px">

## Teste de Carga - POST

#### ✅ Teste aprovado

**Descrição:** Avaliar o desempenho do sistema sob carga normal esperada. \
**Configuração:** 100 usuários simultâneos por 2 min

### Resultado

<img src="../../../performanceTests/results/movies/loadPost.jpg" width="900px">

## Teste de Carga - GET

#### ✅ Teste aprovado

**Descrição:** Avaliar o desempenho do sistema sob carga normal esperada. \
**Configuração:** 100 usuários simultâneos por 2 min

### Resultado

<img src="../../../performanceTests/results/movies/loadGet.jpg" width="900px">

## Teste de Estresse - POST

#### ✅ Teste aprovado

**Descrição:** Identificar o ponto de falha do sistema ao submetê-lo a uma carga extrema. \
**Configuração:** 300 usuários simultâneos por 4 min.

### Resultado

<img src="../../../performanceTests/results/movies/stressPost.jpg" width="900px">

## Teste de Estresse - GET

#### ❌ Teste reprovado

**Descrição:** Identificar o ponto de falha do sistema ao submetê-lo a uma carga extrema. \
**Configuração:** 300 usuários simultâneos por 4 min.

### Resultado

<img src="../../../performanceTests/results/movies/stressGet.jpg" width="900px">

## Teste de Escalabilidade - POST

#### ✅ Teste aprovado

**Descrição:** Avaliar o comportamento do sistema sob diferentes configurações de infraestrutura.\
**Configuração:** 20% de usuários a mais do que no teste de estresse e mais 1 min.

### Resultado

<img src="../../../performanceTests/results/movies/scalabilityPost.jpg" width="900px">

## Teste de Escalabilidade - GET

#### ✅ Teste aprovado

**Descrição:** Avaliar o comportamento do sistema sob diferentes configurações de infraestrutura.\
**Configuração:** 20% de usuários a mais do que no teste de estresse e mais 1 min.

### Resultado

<img src="../../../performanceTests/results/movies/scalabilityGet.jpg" width="900px">

## Teste de Pico - POST

#### ✅ Teste aprovado

**Descrição:** Avaliar o comportamento do sistema sob um pico repentino de carga.\
**Configuração:** 500 usuários simultâneos por 3 min

### Resultado

<img src="../../../performanceTests/results/movies/spikePost.jpg" width="900px">

## Teste de Pico - GET

#### ❌ Teste reprovado

**Descrição:** Avaliar o comportamento do sistema sob um pico repentino de carga.\
**Configuração:** 500 usuários simultâneos por 3 min

### Resultado

<img src="../../../performanceTests/results/movies/spikeGet.jpg" width="900px">

## Teste de Concorrência - POST

#### ❌ Teste reprovado

**Descrição:** Avaliar como o sistema lida com múltiplos usuários acessando simultaneamente\
**Configuração:** 500 usuários simultâneos por 1 min

### Resultados

<img src="../../../performanceTests/results/movies/competitionPost.jpg" width="900px">

## Teste de Concorrência - GET

#### ❌ Teste reprovado

**Descrição:** Avaliar como o sistema lida com múltiplos usuários acessando simultaneamente\
**Configuração:** 500 usuários simultâneos por 1 min

### Resultados

<img src="../../../performanceTests/results/movies/competitionPost.jpg" width="900px">
