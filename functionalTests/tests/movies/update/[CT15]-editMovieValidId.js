import {
  BaseRest,
  BaseChecks,
  ENDPOINTS,
  testConfig,
  BaseFaker,
} from "../../../support/base/baseTest.js";

export const options = testConfig.options.unitThresholds;
const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();
const baseFaker = new BaseFaker();

export default () => {
  let newMovie = baseFaker.randomMovie();
  const res = baseRest.put(ENDPOINTS.MOVIES_ENDPOINT, newMovie, "123abc");
  baseChecks.checkStatusCode(res, 201);
  console.log(res.body);
};
