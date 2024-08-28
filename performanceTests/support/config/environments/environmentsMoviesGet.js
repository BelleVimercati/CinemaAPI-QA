export const testConfigGet = {
  environment: {
    hml: {
      url: "http://localhost:3000",
    },
  },

  options: {
    smokeThresholds: {
        vus: 1,
        duration: "2s",
        thresholds: {
          http_req_duration: ["p(95)<2000"],
          http_req_failed: ["rate<0.1"],
        },
      },
      
    loadThresholds: {
      stages: [{ duration: "2m", target: 100 }],
      thresholds: {
        "http_req_duration{method:GET}": ["p(95)<50", "p(90)<70"],
        "http_req_failed{method:GET}": ["rate<0.01"],
        "http_reqs{method:GET}": ["rate>=200"],
      },
    },

    stressThresholds: {
      stages: [{ duration: "4m", target: 300 }],
      thresholds: {
        "http_req_duration{method:GET}": ["p(95)<100", "p(90)<120"],
        "http_req_failed{method:GET}": ["rate<0.01"],
        "http_reqs{method:GET}": ["rate>=180"],
      },
    },

    scalabilityThresholds: {
      stages: [{ duration: "2m", target: 120 }],
      thresholds: {
        "http_req_duration{method:GET}": ["p(95)<70", "p(90)<90"],
        "http_req_failed{method:GET}": ["rate<0.01"],
        "http_reqs{method:GET}": ["rate>=220"],
      },
    },

    spikeThresholds: {
      stages: [{ duration: "3m", target: 500 }],
      thresholds: {
        "http_req_duration{method:GET}": ["p(95)<150", "p(90)<170"],
        "http_req_failed{method:GET}": ["rate<0.02"],
        "http_reqs{method:GET}": ["rate>=250"],
      },
    },

    competitionThresholds: {
      stages: [{ duration: "1m", target: 500 }],
      thresholds: {
        "http_req_duration{method:GET}": ["p(95)<60", "p(90)<80"],
        "http_req_failed{method:GET}": ["rate<0.01"],
        "http_reqs{method:GET}": ["rate>=200"],
      },
    },
  },
};
