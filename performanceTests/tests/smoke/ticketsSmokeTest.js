import {
  BaseRest,
  BaseChecks,
  ENDPOINTS,
  testConfig,
  BaseFaker,
} from "../../support/base/baseTest.js";

export const options = testConfig.options.smokeThresholds;
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
  const movieId = movies.map((movie) => movie._id);
  return movieId;
}

export default (data) => {
  //cadastrando tickets
  const ticket = baseFaker.randomTicket(data);
  const res = baseRest.post(ENDPOINTS.TICKETS_ENDPOINT, ticket);
  baseChecks.checkStatusCode(res, 201);
  console.log(res.body);
};

export function teardown(data) {
  const res = baseRest.delete(ENDPOINTS.MOVIES_ENDPOINT, data);
  baseChecks.checkStatusCode(res, 200);
}
