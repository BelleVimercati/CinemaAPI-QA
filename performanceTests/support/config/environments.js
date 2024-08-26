export const testConfig = {
  environment: {
    hml: {
      url: "http://localhost:3000",
    },
  },

  options: {
    smokeThresholds: {
      vus: 1,
      duration: "5s",
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
    },

    spikeThresholds: {
      vus: 700,
      duration: "3m",
      thresholds: {
        http_req_duration: ["p(95)<22000"],
        http_req_failed: ["rate<0.01"],
        http_reqs: ["rate>=7"],
      },
    },

    competitionThresholds: {
      vus: 500,
      duration: "1m",
      thresholds: {
        http_req_duration: ["p(95)<70000"],
        http_req_failed: ["rate<0.1"],
        http_reqs: ["rate>=8"],
      },
    },

    scalabilityThresholds: {
      vus: 600,
      duration: "5m",
      thresholds: {
        http_req_duration: ["p(95)<30000"],
        http_req_failed: ["rate<0.01"],
        http_reqs: ["rate>=15"],
      },
    },

    stressThresholds: {
      stages: [
        { duration: "2m", target: 300 },
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
