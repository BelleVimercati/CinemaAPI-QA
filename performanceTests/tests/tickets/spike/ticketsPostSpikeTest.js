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

  //regatando ID
  const getMovie = baseRest.get(ENDPOINTS.MOVIES_ENDPOINT);
  const movies = JSON.parse(getMovie.body);
  const movieId = movies.map((movie) => movie._id);
  return movieId;
}

export default (data) => {
  //cadastrando tickets
  group("Teste de cadastro de Tickets - POST (spike test)", () => {
    const ticket = baseFaker.randomTicket(data);
    const res = baseRest.post(ENDPOINTS.TICKETS_ENDPOINT, ticket);
    baseChecks.checkStatusCode(res, 201);
  });
};

export function teardown(data) {
  const res = baseRest.delete(ENDPOINTS.MOVIES_ENDPOINT, data);
  baseChecks.checkStatusCode(res, 200);
}
