export const testConfig = {
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
        http_req_duration: ["p(95)<59000"],
        http_req_failed: ["rate<0.01"],
        http_reqs: ["rate>=12"],
      },
      teardownTimeout: "1m", // Altera o tempo limite para o teardown
    },

    spikeThresholds: {
      stages: [
        { duration: "20s", target: 50 },
        { duration: "1m", target: 500 },
      ],
      thresholds: {
        http_req_duration: ["p(95)<22000"],
        http_req_failed: ["rate<0.01"],
        http_reqs: ["rate>=7"],
      },
    },

    competitionThresholds: {
      stages: [
        { duration: "1m", target: 300 },
        { duration: "50s", target: 0 },
      ],
      thresholds: {
        http_req_duration: ["p(95)<70000"],
        http_req_failed: ["rate<0.1"],
        http_reqs: ["rate>=8"],
      },
    },

    scalabilityThresholds: {
      stages: [
        { duration: "1m", target: 150 },
        { duration: "2m", target: 300 },
      ],
      thresholds: {
        http_req_duration: ["p(95)<30000"],
        http_req_failed: ["rate<0.01"],
        http_reqs: ["rate>=15"],
      },
    },

    stressThresholds: {
      stages: [
        { duration: "1m", target: 300 },
        { duration: "2m", target: 300 },
      ],
      thresholds: {
        http_req_duration: ["p(95)<24000"],
        http_req_failed: ["rate<0.01"],
        http_reqs: ["rate>=7"],
      },
    },
  },
};
