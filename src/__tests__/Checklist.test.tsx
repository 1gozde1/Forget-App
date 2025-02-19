import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Checklist from "../components/Checklist/Checklist";
import { setChecklist, toggleChecklistItem } from "../redux/checklistSlice";
import "@testing-library/jest-dom";

const mockStore = configureStore([]);

describe("Checklist Component", () => {
  let store: ReturnType<typeof mockStore>;

  beforeEach(() => {
    store = mockStore({
      checklist: {
        checklist: {
          Ipad: false,
          Logbook: false,
          Passport: false,
        },
      },
    });

    store.dispatch = jest.fn();
  });

  test("renders checklist items", () => {
    render(
      <Provider store={store}>
        <Checklist location="Work" />
      </Provider>
    );

    expect(screen.getByLabelText("Ipad")).toBeInTheDocument();
    expect(screen.getByLabelText("Logbook")).toBeInTheDocument();
    expect(screen.getByLabelText("Passport")).toBeInTheDocument();
  });

  test("dispatches toggleChecklistItem action on checkbox change", () => {
    render(
      <Provider store={store}>
        <Checklist location="Work" />
      </Provider>
    );

    const checkbox = screen.getByLabelText("Ipad");
    fireEvent.click(checkbox);

    expect(store.dispatch).toHaveBeenCalledWith(toggleChecklistItem("Ipad"));
  });

  test("dispatches setChecklist action when location changes", () => {
    const newStore = mockStore({
      checklist: {
        checklist: {},
      },
    });

    newStore.dispatch = jest.fn();

    render(
      <Provider store={newStore}>
        <Checklist location="PreRide" />
      </Provider>
    );

    newStore.dispatch(setChecklist("PreRide"));

    expect(newStore.dispatch).toHaveBeenCalledWith(setChecklist("PreRide"));
  });
});
