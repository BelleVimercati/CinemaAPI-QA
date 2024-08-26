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


export default () => {
    const res = baseRest.delete(ENDPOINTS.MOVIES_ENDPOINT, "123abc");
    baseChecks.checkStatusCode(res, 404)
};
