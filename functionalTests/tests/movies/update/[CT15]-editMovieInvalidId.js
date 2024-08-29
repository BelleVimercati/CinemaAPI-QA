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

export default () => {
  group("CT15 - Editando filme com Id inválido", () => {
    let newMovie = baseFaker.randomMovie();
    const res = baseRest.put(ENDPOINTS.MOVIES_ENDPOINT, newMovie, "123abc");
    baseChecks.checkStatusCode(res, 404);
  });
};
