"use strict";

// @ts-ignore
const playwrightPreset = require("jest-playwright-preset/jest-preset.json");

// The run id should be unique across runs
const runId = Date.now().toString();

module.exports = {
  ...playwrightPreset,
  testRunner: "jasmine2",
  reporters: [["@testim/root-cause-jest/lib/reporter/default", { runId }]],
  setupFilesAfterEnv: [
    ...playwrightPreset.setupFilesAfterEnv,
    "./setupFilesAfterEnv",
    ...(process.env.NO_RC ? [] : ["@testim/root-cause-jest/lib/forSetupFilesAfterEnv"]),
  ],
  globals: {
    runId,
  },
  maxWorkers: "50%",
};
