export const testConfigTickets = {
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
      stages: [
        { duration: "2m", target: 150 },
        { duration: "2m", target: 150 },
      ],
      thresholds: {
        http_req_duration: ["p(95)<350", "p(99)<300"],
        http_req_failed: ["rate<0.01"],
        http_reqs: ["rate>=50"],
      },
    },

    stressThresholds: {
      stages: [
        { duration: "1m", target: 300 },
        { duration: "2m", target: 300 },
      ],
      thresholds: {
        http_req_duration: ["p(95)<600", "p(99)<500"],
        http_req_failed: ["rate<0.01"],
        http_reqs: ["rate>=40"],
      },
    },

    scalabilityThresholds: {
      stages: [
        { duration: "1m", target: 360 }, // 20% a mais que o stress test
        { duration: "3m", target: 360 },
      ],
      thresholds: {
        http_req_duration: ["p(95)<450", "p(99)<400"],
        http_req_failed: ["rate<0.01"],
        http_reqs: ["rate>=60"],
      },
    },

    spikeThresholds: {
      stages: [
        { duration: "30s", target: 700 },
        { duration: "2m", target: 700 },
        { duration: "30s", target: 0 },
      ],
      thresholds: {
        http_req_duration: ["p(95)<700", "p(99)<600"],
        http_req_failed: ["rate<0.02"],
        http_reqs: ["rate>=70"],
      },
    },

    competitionThresholds: {
      stages: [
        { duration: "1m", target: 500 },
        { duration: "1m", target: 0 },
      ],
      thresholds: {
        http_req_duration: ["p(95)<400", "p(99)<350"],
        http_req_failed: ["rate<0.01"],
        http_reqs: ["rate>=50"],
      },
    },
  },
};
