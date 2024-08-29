import {
  BaseRest,
  BaseChecks,
  ENDPOINTS,
  testConfig,
  BaseFaker,
} from "../../../support/base/baseTest.js";
import { group } from "k6";

export const options = testConfig.options.unitThresholds;
const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();
const baseFaker = new BaseFaker();

export function setup() {
  const movie = baseFaker.randomMovie();
  const urlRes = baseRest.post(ENDPOINTS.MOVIES_ENDPOINT, movie);
  baseChecks.checkStatusCode(urlRes, 201);
}

export default () => {
  group("CT14 - Editando filme com Id válido", () => {
    const getMovie = baseRest.get(ENDPOINTS.MOVIES_ENDPOINT);
    const movies = JSON.parse(getMovie.body);
    const moviesIds = movies.map((movie) => movie._id);

    moviesIds.forEach((movieId) => {
      let newMovie = baseFaker.randomMovie();
      const res = baseRest.put(ENDPOINTS.MOVIES_ENDPOINT, newMovie, movieId);
      baseChecks.checkStatusCode(res, 201);
      console.log(res.body);
    });
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
   // baseChecks.checkStatusCode(res, 200);
  });
}
