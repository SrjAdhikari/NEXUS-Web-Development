import { BrowserRouter, Route, Routes } from "react-router";

import Home from "./components/Home";
import RestaurantInfo from "./components/RestaurantInfo";
import SpecificRestaurant from "./components/SpecificRestaurant";
import Layout from "./components/Layout";
import Checkout from "./components/Checkout";

import store from "./store/Store";
import { Provider } from "react-redux";

const App = () => {
	return (
		<div>
			// Wrapping the application with Provider to connect Redux store
			<Provider store={store}>
				{/* BrowserRouter enables client-side routing */}
				<BrowserRouter>
					{/* Routes container defines all route paths */}
					<Routes>
						{/* Home page route */}
						<Route path="/" element={<Home />} />

						{/* Layout wrapper route for pages that share common layout components */}
						<Route element={<Layout />}>
							<Route path="/restaurant" element={<RestaurantInfo />} />

							{/* Specific restaurant detail page with dynamic ID parameter */}
							<Route path="/city/delhi/:id" element={<SpecificRestaurant />} />
						</Route>

						{/* Checkout page route */}
						<Route path="/checkout" element={<Checkout />} />
					</Routes>
				</BrowserRouter>
			</Provider>
		</div>
	);
};

export default App;
