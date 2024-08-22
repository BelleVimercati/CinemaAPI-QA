# Análise de Performance e Qualidade da API Cinema

Este projeto busca realizar uma análise de performance e qualidade da [API Cinema](https://github.com/juniorschmitz/nestjs-cinema) e faz parte do ultimo desafio proposto pelo programa de bolsas da [Compass Uol](). A documentação e testes foram feitos com base nos conhecimentos adquiridos durante o estágio, buscando ao máximo otimizar o conhecimento e aplicar boas práticas de projeto.

## 🚩 Sobre a API

A API foi criada com intuito de simular um sistema de cinemas onde é feito o gerenciamento de filmes e ingressos. Para mais informações (extraídas pelo QA) basca conferir a [Wiki deste repositório]().

## Recursos Utilizados

- k6
  Para a execução dos testes foi utilizada a ferramenta k6 para criação de scripts e rodagem dos testes. Para mais informações sobre o k6: [documentação do k6](https://k6.io/docs/get-started/installation/)

- node
  Node é utilizado em conjunto com o k6, portanto torna-se necessário realizar a instalação na máquina utilizada. Para mais informações: [Node.js download](https://nodejs.org/en/download/package-manager)

- API Cinema
  A API utilizada como objeto de teste é a API Cinema, que se propõe em implementar CRUD's para a rotina de cinemas. É de extrema importância que a API seja rodada localmente, para isso podemos realizar a instalação ou clone do repositório do github. Para acessar o repositório: [API Cinema](https://github.com/juniorschmitz/nestjs-cinema)

Para os testes realizados nessa sprint a API foi rodada localmente a partir de um clone do repositório, usando o VsCode para ter acesso aos bancos de dados. Para realizar a execução, dentro da pasta da API Cinema execute:

```sh
npm run start
```

Vale salientar que a porta que será rodada esta aplicação é a: `localhost:3000`
