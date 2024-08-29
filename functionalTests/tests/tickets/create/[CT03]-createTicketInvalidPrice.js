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
  group("CT03 - Criando ticket com preço inválido", () => {
    const getMovie = baseRest.get(ENDPOINTS.MOVIES_ENDPOINT);
    const movies = JSON.parse(getMovie.body);
    const moviesIds = movies.map((movie) => movie._id);

    //cadastrando tickets
    moviesIds.forEach((movieId) => {
      const ticket = {
        movieId: `${movieId}`,
        userId: "string",
        seatNumber: 12,
        price: 230,
        showtime: "2024-08-26T16:26:00.077Z",
      };

      const res = baseRest.post(ENDPOINTS.TICKETS_ENDPOINT, ticket);
      baseChecks.checkStatusCode(res, 400);
      console.log(res.body);
    });
  });
};
