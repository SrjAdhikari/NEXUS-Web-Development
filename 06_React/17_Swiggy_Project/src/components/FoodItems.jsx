import imageGridCards from "../utils/foodData";
import FoodCard from "./FoodCard";

const FoodItems = () => {
	return (
		<div className="container mx-auto w-[90%] mt-10 grid gap-4 grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
			{/* Iterating over each food item in the imageGridCards array */}
			{imageGridCards.map((data) => (
				// Rendering a FoodCard component for each food item
				<FoodCard key={data.id} data={data} />
			))}
		</div>
	);
};

export default FoodItems;
