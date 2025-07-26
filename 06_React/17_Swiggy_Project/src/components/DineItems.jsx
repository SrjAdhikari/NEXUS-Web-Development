import dineoutRestaurants from "../utils/restaurantData";
import DineCard from "./DineCard";

const DineItems = () => {
	return (
		<div className="w-[80%] mx-auto mt-20">
			<h2 className="text-base md:text-2xl lg:text-3xl font-semibold text-gray-700 mb-3 lg:mb-5">
				Discover best restaurants on Dineout
			</h2>

			{/* Restaurant Cards */}
			<div className="flex overflow-x-auto mt-3 gap-4 pb-4">
				{/* Map through dineoutRestaurants and render DineCard for each */}
				{dineoutRestaurants.map((data) => (
					<DineCard key={data?.info?.id} data={data} />
				))}
			</div>
		</div>
	);
};

export default DineItems;
