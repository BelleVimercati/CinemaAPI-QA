import {
  BaseRest,
  BaseChecks,
  ENDPOINTS,
  testConfig,
  BaseFaker,
} from "../../support/base/baseTest.js";

export const options = testConfig.options.unitThresholds;
const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();
const baseFaker = new BaseFaker();

export function setup() {
  const movie = baseFaker.randomMovie();
  const urlRes = baseRest.post(ENDPOINTS.MOVIES_ENDPOINT, movie);
  baseChecks.checkStatusCode(urlRes, 201);

  const movie2 = baseFaker.randomMovie();
  const urlRes2 = baseRest.post(ENDPOINTS.MOVIES_ENDPOINT, movie2);
  baseChecks.checkStatusCode(urlRes2, 201);
}

const movieEqual = {
    title: "Ephraim47",
    description:
      "Iure voluptatem quia aut. Fugit repellat molestias et necessitatibus quia.",
    launchdate: "2024-08-26T13:14:22.087Z",
    showtimes: ["2024-08-26T13:38:37.241Z"]
  };

export default () => {
  const getMovie = baseRest.get(ENDPOINTS.MOVIES_ENDPOINT);
  const movies = JSON.parse(getMovie.body);
  const moviesIds = movies.map((movie) => movie._id);

  moviesIds.forEach((movieId) => {
    const res = baseRest.put(ENDPOINTS.MOVIES_ENDPOINT, movieEqual, movieId);
    baseChecks.checkStatusCode(res, 201);
    console.log(res.body);
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
