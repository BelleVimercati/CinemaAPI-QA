import {
  BaseRest,
  BaseChecks,
  ENDPOINTS,
  testConfig,
  BaseFaker,
} from "../../../support/base/baseTest.js";
import { group } from "k6";

export const options = testConfig.options.smokeThresholds;
const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();
const baseFaker = new BaseFaker();


export default () => {
  group("Teste de Flow de filmes e tickets", () => {
    //criando filme
    const movie = baseFaker.randomMovie();
    const urlRes = baseRest.post(ENDPOINTS.MOVIES_ENDPOINT, movie);
    baseChecks.checkStatusCode(urlRes, 201);

    //listando file
    const getMovie = baseRest.get(ENDPOINTS.MOVIES_ENDPOINT);
    const movies = JSON.parse(getMovie.body);
    const moviesIds = movies.map((movie) => movie._id);

    //criando tickets
    moviesIds.forEach((movieId) => {
      const ticket = baseFaker.randomTicket(movieId);
      const res = baseRest.post(ENDPOINTS.TICKETS_ENDPOINT, ticket);
      baseChecks.checkStatusCode(res, 201);
    });

    //listando tickets
    const resGet = baseRest.get(ENDPOINTS.TICKETS_ENDPOINT);
    baseChecks.checkStatusCode(resGet, 200);
  });
};
