import {
    BaseRest,
    BaseChecks,
    ENDPOINTS,
    BaseFaker,
    testConfigPost
  } from "../../../support/base/baseTest.js";
  import { group } from "k6";
  
  export const options = testConfigPost.options.spikeThresholds;
  const base_uri = testConfigPost.environment.hml.url;
  const baseRest = new BaseRest(base_uri);
  const baseChecks = new BaseChecks();
  const baseFaker = new BaseFaker();
  
  export default () => {
    group("Teste de criação de filme - POST (spike test)", () => {
      const movie = baseFaker.randomMovie();
      const urlRes = baseRest.post(ENDPOINTS.MOVIES_ENDPOINT, movie);
      baseChecks.checkStatusCode(urlRes, 201);
    });
  };
  
  export function teardown() {
    // Resgatando Id dos filmes
    const getMovie = baseRest.get(ENDPOINTS.MOVIES_ENDPOINT);
    const movies = JSON.parse(getMovie.body);
    const moviesIds = movies.map((movie) => movie._id);
  
    //Deletando filmes
    moviesIds.forEach((movieId) => {
      const res = baseRest.delete(ENDPOINTS.MOVIES_ENDPOINT, movieId);
      baseChecks.checkStatusCode(res, 200);
    });
  }
  