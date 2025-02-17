import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import LocationSelector from "../components/LocationSelector";
import { setLocation } from "../redux/locationSlice";
import { setChecklist } from "../redux/checklistSlice";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

const mockStore = configureStore([]);

describe("LocationSelector Component", () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      location: { selectedLocation: "" },
    });
    store.dispatch = jest.fn();
  });

  test("renders the location selector with default value", () => {
    render(
      <Provider store={store}>
        <LocationSelector />
      </Provider>
    );

    expect(screen.getByLabelText("Location")).toBeInTheDocument();
  });

  test("dispatches setLocation and setChecklist actions on location change", async () => {
    const user = userEvent.setup();
    render(
      <Provider store={store}>
        <LocationSelector />
      </Provider>
    );

    const selectElement = screen.getByLabelText("Location");
    await user.click(selectElement);

    const option = await screen.findByText("Work");
    await user.click(option);

    expect(store.dispatch).toHaveBeenCalledWith(setLocation("Work"));
    expect(store.dispatch).toHaveBeenCalledWith(setChecklist("Work"));
  });

  test("displays available locations", async () => {
    render(
      <Provider store={store}>
        <LocationSelector />
      </Provider>
    );

    const selectElement = screen.getByLabelText("Location");
    await userEvent.click(selectElement);

    expect(await screen.findByText("Work")).toBeVisible();
    expect(await screen.findByText("Restaurant")).toBeVisible();
    expect(await screen.findByText("Gym")).toBeVisible();
    expect(await screen.findByText("Market")).toBeVisible();
    expect(await screen.findByText("PreRide")).toBeVisible();
    expect(await screen.findByText("Post-Ride")).toBeVisible();
  });
});
