import { check } from "k6";

export class BaseChecks {

  checkStatusCode(response, expectedStatus = 200) {
    check(response, {
      "status code check": (r) => r.status === expectedStatus,
    });
  }

  checkResponseField(response, expectedField) {
    check(response, {
      "response field check": (r) => r.body.includes(expectedField),
    });
  }

  checkResponseSize(response, expectedNumber){
    check(response, {
        "size check": (r) => r.body.length == expectedNumber,
    })
  }

  checkResponseTime(response, expectedTime){
    check(response, {
        'response time check': (r) => r.timings.duration < expectedTime,
    })
  }
}