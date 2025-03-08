import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import App from "../App";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { Store, UnknownAction } from "redux";

jest.mock("firebase/auth", () => ({
  getAuth: jest.fn().mockReturnValue({
    currentUser: { uid: "test-user-id" },
    signOut: jest.fn(),
  }),
}));

jest.mock("../firebase/firebaseConfig", () => ({
  auth: {},
  analytics: {},
  default: {},
}));

const mockStore = configureStore([]);

describe("App Component", () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      location: { selectedLocation: "" },
      checklist: { checklist: {} },
      user: { isAuthenticated: false, user: null },
    });
  });

  const renderWithDependencies = (
    store: Store<unknown, UnknownAction, unknown>
  ) => {
    return render(
      <MemoryRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );
  };

  test("renders LocationSelector when no location is selected", () => {
    renderWithDependencies(store);

    const locationLabel = screen.getByTestId("location-select-label");

    expect(locationLabel).toBeInTheDocument();
  });

  test("renders location and Checklist when a location is selected and authenticated", () => {
    store = mockStore({
      location: { selectedLocation: "Work" },
      checklist: {
        checklist: {
          Ipad: false,
          Passport: true,
        },
      },
      user: { isAuthenticated: true, user: { username: "TestUser" } },
    });

    renderWithDependencies(store);

    expect(screen.getByText("Passport")).toBeInTheDocument();
    expect(screen.getByText("Ipad")).toBeInTheDocument();
  });
});
