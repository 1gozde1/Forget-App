import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import App from "../App";
import "@testing-library/jest-dom";

const mockStore = configureStore([]);

describe("App Component", () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      location: { selectedLocation: "" },
      checklist: { checklist: {} },
    });
  });

  test("renders LocationSelector when no location is selected", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const locationSelector = screen.getByLabelText("Location");
    expect(locationSelector).toBeInTheDocument();
  });

  test("renders location and Checklist when a location is selected", () => {
    store = mockStore({
      location: { selectedLocation: "Work" },
      checklist: {
        checklist: {
          Ipad: false,
        },
      },
    });

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(screen.getByText("Work")).toBeInTheDocument();
    expect(screen.getByText("Ipad")).toBeInTheDocument();
  });
});
