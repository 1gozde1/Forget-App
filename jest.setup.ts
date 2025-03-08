import { jest } from "@jest/globals";

jest.mock("firebase/app", () => {
  return {
    initializeApp: jest.fn(),
  };
});

jest.mock("firebase/auth", () => {
  return {
    getAuth: jest.fn(() => ({
      signInWithEmailAndPassword: jest.fn(),
      createUserWithEmailAndPassword: jest.fn(),
    })),
  };
});

jest.mock("firebase/analytics", () => {
  return {
    getAnalytics: jest.fn(),
  };
});
