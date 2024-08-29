import {
  BaseRest,
  BaseChecks,
  ENDPOINTS,
  testConfigTickets,
  BaseFaker,
} from "../../../support/base/baseTest.js";
import { group } from "k6";

export const options = testConfigTickets.options.spikeThresholds;
const base_uri = testConfigTickets.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();
const baseFaker = new BaseFaker();

export function setup() {
  //criando filme
  const movie = baseFaker.randomMovie();
  const urlRes = baseRest.post(ENDPOINTS.MOVIES_ENDPOINT, movie);
  baseChecks.checkStatusCode(urlRes, 201);

  //resgatando ID
  const getMovie = baseRest.get(ENDPOINTS.MOVIES_ENDPOINT);
  const movies = JSON.parse(getMovie.body);
  const moviesIds = movies.map((movie) => movie._id);

  const ticket = baseFaker.randomTicket(moviesIds);
  const res = baseRest.post(ENDPOINTS.TICKETS_ENDPOINT, ticket);
  baseChecks.checkStatusCode(res, 201);

  return moviesIds;
}

export default () => {
  group("Teste de listagem de Tickets - GET (spike test)", () => {
    const urlRes = baseRest.get(ENDPOINTS.TICKETS_ENDPOINT);
    baseChecks.checkStatusCode(urlRes, 200);
  });
};

export function teardown(data) {
  const res = baseRest.delete(ENDPOINTS.MOVIES_ENDPOINT, data);
  baseChecks.checkStatusCode(res, 200);
}
