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
  group("Teste de Flow de filme - POST, GET e DELETE", () => {
    //criando
    const movie = baseFaker.randomMovie();
    const urlRes = baseRest.post(ENDPOINTS.MOVIES_ENDPOINT, movie);
    baseChecks.checkStatusCode(urlRes, 201);

    //listando
    const getMovie = baseRest.get(ENDPOINTS.MOVIES_ENDPOINT);
    const movies = JSON.parse(getMovie.body);
    const moviesIds = movies.map((movie) => movie._id);

    //Deletando
    moviesIds.forEach((movieId) => {
      const res = baseRest.delete(ENDPOINTS.MOVIES_ENDPOINT, movieId);
      baseChecks.checkStatusCode(res, 200);
    });
  });
};
