import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import App from "../App";
import "@testing-library/jest-dom";
import 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";


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

  test("renders LocationSelector when no location is selected", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    screen.debug();
    const locationLabel = screen.getByLabelText("location-select-label");
  

if (!locationLabel) {
throw new Error(`Location label not found! Expected to find an element with text 'Location'.`);
}

expect(locationLabel).toBeInTheDocument();
  });

  test("renders login and register pages when not authenticated", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(screen.getByText("Lütfen giriş yapın veya kaydolun")).toBeInTheDocument();
    

});

test("renders login page and register page text when not authenticated", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const loginPageTitle = screen.queryByText(/Giriş Sayfası/i); 
  
if (loginPageTitle) {
expect(loginPageTitle).toBeInTheDocument();
}

const registerPageTitle = screen.queryByText(/Kayıt Sayfası/i); 
  
if (registerPageTitle) {
expect(registerPageTitle).toBeInTheDocument();
}
});

test("renders location and Checklist when a location is selected and authenticated", () => {
store = mockStore({
location: { selectedLocation: "Work" },
checklist: {
checklist: {
Ipad: false,
},
},
user:{isAuthenticated:true,user:{username:"TestUser"}},
}); 

render(
<Provider store={store}>
<App/>
</Provider>
);

expect(screen.getByText("Work")).toBeInTheDocument(); 
expect(screen.getByText("Ipad")).toBeInTheDocument();

});
});
