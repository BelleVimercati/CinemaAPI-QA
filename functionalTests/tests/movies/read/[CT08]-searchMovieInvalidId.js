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
  group("CT08 - Buscar filme com Id inválido", () => {
    const resId = baseRest.getId(ENDPOINTS.MOVIES_ENDPOINT, "123abc");
    baseChecks.checkStatusCode(resId, 404);
  });
};
