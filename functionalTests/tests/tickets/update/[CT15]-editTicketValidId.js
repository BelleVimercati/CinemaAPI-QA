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

  const getMovie = baseRest.get(ENDPOINTS.MOVIES_ENDPOINT);
  const movies = JSON.parse(getMovie.body);
  const moviesIds = movies.map((movie) => movie._id);

  //cadastrando tickets
  moviesIds.forEach((movieId) => {
    const ticket = {
      movieId: `${movieId}`,
      userId: "string",
      seatNumber: 4,
      price: 23,
      showtime: "2024-08-26T16:26:00.077Z",
    };

    const res = baseRest.post(ENDPOINTS.TICKETS_ENDPOINT, ticket);
    baseChecks.checkStatusCode(res, 201);
  });

  return {
    id: moviesIds,
  };
}

export default (id) => {
  group("CT15 - Editando um Ticket com Id válido", () => {
    const ticket = {
      movieId: `${id}`,
      userId: "string",
      seatNumber: 4,
      price: 23,
      showtime: "2024-08-26T16:26:00.077Z",
    };

    const urlRes = baseRest.put(ENDPOINTS.TICKETS_ENDPOINT, ticket, id);
    baseChecks.checkStatusCode(urlRes, 200);
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
    //baseChecks.checkStatusCode(res, 200);
  });
}
