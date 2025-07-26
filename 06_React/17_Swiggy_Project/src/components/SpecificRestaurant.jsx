import { useEffect, useState } from "react";
import { useParams } from "react-router";
import SpecificRestCard from "./SpecificRestCard";

const SpecificRestaurant = () => {
	// Get restaurant ID from URL params
	const { id } = useParams();

	// State for storing menu data and filter selection
	const [restaurantsData, setRestaurantsData] = useState([]);
	const [selected, setSelected] = useState(null);

	// Fetch restaurant menu data when component mounts or ID changes
	useEffect(() => {
		// Fetches restaurant menu data from Swiggy API through CORS proxy
		const fetchData = async () => {
			// CORS proxy to bypass browser restrictions
			const proxyServer = "https://cors-anywhere.herokuapp.com/";

			// Swiggy API endpoint with dynamic restaurant ID
			const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;

			try {
				// Fetch data from the API
				const response = await fetch(proxyServer + swiggyAPI);

				// Parse the JSON response
				const result = await response.json();

				// Extract menu categories from complex API response structure
				const tempData =
					result?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

				// Filter to only include items with titles (actual menu categories)
				const filteredData =
					tempData?.filter((item) => "title" in item?.card?.card) || [];

				setRestaurantsData(filteredData);
			} catch (error) {
				console.error("Error fetching restaurant menu:", error);
				setRestaurantsData([]);
			}
		};

		fetchData();
	}, [id]);

	return (
		<div className="max-w-5xl mx-auto px-4 py-8">
			{/* Filter toggle buttons */}
			<div className="flex flex-wrap gap-4 mb-8">
				{/* Veg filter button */}
				<button
					onClick={() => setSelected(selected === "veg" ? null : "veg")}
					className={`flex items-center gap-2 px-5 py-2 rounded-full border transition 
            ${
							selected === "veg"
								? "bg-green-500 text-white border-green-500 hover:bg-green-600"
								: "border-gray-400 text-gray-700 hover:bg-green-100"
						}`}
				>
					🌿 Veg
				</button>

				{/* Non-Veg filter button */}
				<button
					onClick={() => setSelected(selected === "non-veg" ? null : "non-veg")}
					className={`flex items-center gap-2 px-5 py-2 rounded-full border transition 
            ${
							selected === "non-veg"
								? "bg-red-500 text-white border-red-500 hover:bg-red-600"
								: "border-gray-400 text-gray-700 hover:bg-red-100"
						}`}
				>
					🍗 Non-Veg
				</button>
			</div>

			{/* Menu items list */}
			<div className="space-y-6">
				{restaurantsData.map((data) => (
					<SpecificRestCard
						key={data?.card?.card?.title}
						data={data?.card?.card}
						selectedFood={selected}
					/>
				))}
			</div>
		</div>
	);
};

export default SpecificRestaurant;
