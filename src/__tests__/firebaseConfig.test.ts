import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

jest.mock("firebase/app");
jest.mock("firebase/auth");
jest.mock("firebase/analytics");

describe("Firebase Mock Test", () => {
  it("should call initializeApp with correct configuration", () => {
    const mockFirebaseConfig = {
      apiKey: "test-api-key",
      authDomain: "test-auth-domain",
      projectId: "test-project-id",
      storageBucket: "test-storage-bucket",
      messagingSenderId: "test-sender-id",
      appId: "test-app-id",
      measurementId: "test-measurement-id",
    };

    initializeApp(mockFirebaseConfig);
    expect(initializeApp).toHaveBeenCalledWith(mockFirebaseConfig);
  });

  it("should call getAuth", () => {
    const auth = getAuth();
    expect(getAuth).toHaveBeenCalled();
  });

  it("should call getAnalytics", () => {
    const analytics = getAnalytics();
    expect(getAnalytics).toHaveBeenCalled();
  });
});
