export const testConfigPost = {
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
        "http_req_duration{method:POST}": ["p(95)<200", "p(90)<250"],
        "http_req_failed{method:POST}": ["rate<0.01"],
        "http_reqs{method:POST}": ["rate>=100"],
      },
      teardownTimeout: "2m", // Altera o tempo limite para o teardown
    },

    stressThresholds: {
      stages: [{ duration: "4m", target: 300 }],
      thresholds: {
        "http_req_duration{method:POST}": ["p(95)<500", "p(90)<600"],
        "http_req_failed{method:POST}": ["rate<0.01"],
        "http_reqs{method:POST}": ["rate>=80"],
      },
    },

    scalabilityThresholds: {
      stages: [{ duration: "2m", target: 120 }],
      thresholds: {
        "http_req_duration{method:POST}": ["p(95)<300", "p(90)<350"],
        "http_req_failed{method:POST}": ["rate<0.01"],
        "http_reqs{method:POST}": ["rate>=120"],
      },
      teardownTimeout: "2m",
    },

    spikeThresholds: {
      stages: [{ duration: "3m", target: 500 }],
      thresholds: {
        "http_req_duration{method:POST}": ["p(95)<400", "p(90)<500"],
        "http_req_failed{method:POST}": ["rate<0.02"],
        "http_reqs{method:POST}": ["rate>=150"],
      },
    },

    competitionThresholds: {
      stages: [{ duration: "1m", target: 500 }],
      thresholds: {
        "http_req_duration{method:POST}": ["p(95)<250", "p(90)<300"],
        "http_req_failed{method:POST}": ["rate<0.01"],
        "http_reqs{method:POST}": ["rate>=100"],
      },
    },
  },
};
