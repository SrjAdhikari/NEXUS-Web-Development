import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerEffect from "./ShimmerEffect";

const RestaurantInfo = () => {
	// State to store restaurant data
	const [restaurantsData, setRestaurantsData] = useState([]);

	// Fetch restaurant data on component mount
	useEffect(() => {
		// Function to fetches restaurant data from Swiggy API through a CORS proxy
		const fetchData = async () => {
			// CORS proxy to bypass browser restrictions
			const proxyServer = "https://cors-anywhere.herokuapp.com/";

			// Swiggy API endpoint with location coordinates
			const swiggyAPI =
				"https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true";

			try {
				// Fetch data from API through proxy
				const response = await fetch(proxyServer + swiggyAPI);

				// Parse JSON response
				const result = await response.json();

				// Extract restaurant data from complex API response structure
				setRestaurantsData(
					result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
						?.restaurants || []
				);
			} catch (error) {
				console.error("Error fetching restaurant data:", error);

				// Set to empty array on error
				setRestaurantsData([]);
			}
		};

		fetchData();
	}, []);

	console.log(restaurantsData);

	// Show shimmer loading effect while data is loading or empty
	if (restaurantsData.length === 0) return <ShimmerEffect />;

	return (
		<section className="w-full container mx-auto px-4 py-5">
			{/* Page heading */}
			<h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-800">
				Explore Popular Restaurants
			</h2>

			{/* Responsive restaurant grid */}
			<div className="w-full lg:w-[80%] container mx-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-5 ">
				{restaurantsData.map((data) => (
					<RestaurantCard key={data?.info?.id} data={data} />
				))}
			</div>
		</section>
	);
};

export default RestaurantInfo;
