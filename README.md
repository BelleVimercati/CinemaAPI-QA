# Análise de Performance e Qualidade da API Cinema 🎦

Este projeto busca realizar uma análise de performance e qualidade da [API Cinema](https://github.com/juniorschmitz/nestjs-cinema) e faz parte do ultimo desafio proposto pelo programa de bolsas da [Compass Uol](https://www.linkedin.com/company/compass-uol/mycompany/). A documentação e testes foram feitos com base nos conhecimentos adquiridos durante o estágio, buscando ao máximo otimizar o conhecimento e aplicar boas práticas de projeto.

## 🚩 Sobre a API

A API foi criada com intuito de simular um sistema de cinemas onde é feito o gerenciamento de filmes e ingressos. Para mais informações (extraídas pelo QA) basca conferir a [Wiki deste repositório](https://github.com/BelleVimercati/CinemaAPI-QA/wiki).

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

## 🚀 Como executar os testes com o k6:

Para executar os testes de performance, é necessário navegar até a pasta onde contém o tipo de teste desejado. Na pasta tests estão reunidos todos os scripts separados por tipo, basta apenas executar o seguinte comando no terminal:

```sh
k6 run `${rota + Verbo + Tipo}Test.js`
```

```sh
k6 run moviesPostSmokeTest.js
```

## Agradecimentos 🤝

Agradeço demais a todos os meus colegas aqui na Compass, aos que como eu estiveram fazendo o estágio e também para aqueles que são do estúdio e a todo momento estiveram na disposição de ajudar. \
Os que estiveram no Discord não apenas ajudando, mas tornando esta jornada mais leve!

- Davi
- Gabriel Knust
- Jorge
- Letícia
- Oliver
- Ricardo
- Mathias

- 🏆 **Super agradecimento especial** ao meu amigo Enzo Rossi, trabalhar com você é um prazer imenso!

## ☕ Quem sou eu:

<div style="display: flex; align-items: center;">
  <img src="https://avatars.githubusercontent.com/u/103614557?v=4" alt="Descrição da Imagem" style="margin-right: 10px; width: 200px; height: 200px;">

  <p>Olá Mundinho! Eu sou a Isabelle Vimercati, a criadora deste projeto. Sou estudante de ciência da computação na UFF e sigo buscando aprender e passar por novas experiências no mundo da tecnologia!!</p>
</div>

</br>

🌟 Estou aberta a colaborações, sugestões e feedbacks! Você pode me encontrar no meu [LinlkedIn](https://www.linkedin.com/in/isabellevimercati/) e no [GitHub](https://github.com/BelleVimercati)
