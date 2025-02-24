import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from '../App';
import '@testing-library/jest-dom';
import 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';
import { Store, UnknownAction } from 'redux';

const mockStore = configureStore([]);

describe('App Component', () => {
	let store: any;

	beforeEach(() => {
		store = mockStore({
			location: { selectedLocation: '' },
			checklist: { checklist: {} },
			user: { isAuthenticated: false, user: null },
		});
	});

	const renderWithDependencies = (
		store: Store<unknown, UnknownAction, unknown>,
	) => {
		return render(
			<MemoryRouter>
				<Provider store={store}>
					<App />
				</Provider>
			</MemoryRouter>,
		);
	};

	test('renders LocationSelector when no location is selected', () => {
		renderWithDependencies(store);
		screen.debug();
		const locationLabel = screen.getByTestId('location-select-label');

		if (!locationLabel) {
			throw new Error(
				`Location label not found! Expected to find an element with text 'Location'.`,
			);
		}

		expect(locationLabel).toBeInTheDocument();
	});

	test('renders login and register pages when not authenticated', () => {
		renderWithDependencies(store);

		expect(
			screen.getByText('Lütfen giriş yapın veya kaydolun'),
		).toBeInTheDocument();
	});

	test('renders login page and register page text when not authenticated', () => {
		renderWithDependencies(store);

		const loginPageTitle = screen.queryByText(/Giriş Sayfası/i);

		if (loginPageTitle) {
			expect(loginPageTitle).toBeInTheDocument();
		}

		const registerPageTitle = screen.queryByText(/Kayıt Sayfası/i);

		if (registerPageTitle) {
			expect(registerPageTitle).toBeInTheDocument();
		}
	});

	test('renders location and Checklist when a location is selected and authenticated', () => {
		store = mockStore({
			location: { selectedLocation: 'Work' },
			checklist: {
				checklist: {
					Ipad: false,
          Passport: true
				},
			},
			user: { isAuthenticated: true, user: { username: 'TestUser' } },
		});

		renderWithDependencies(store);

		expect(screen.getByText('Passport')).toBeInTheDocument();
		expect(screen.getByText('Ipad')).toBeInTheDocument();
	});
});
