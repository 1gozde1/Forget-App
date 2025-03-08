import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  moduleNameMapper: {
    "^react-router-dom$": "<rootDir>/node_modules/react-router-dom",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jsdom",
};

export default config;
