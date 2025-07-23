import groceryGridCards from "../utils/groceryData";
import GroceryCard from "./GroceryCard";

const GroceryItems = () => {
	return (
		<section className="mt-20 w-[80%] mx-auto">
			<h2 className="text-base md:text-2xl lg:text-3xl font-semibold text-gray-700 mb-3 lg:mb-5">
				Shop groceries on Instamart
			</h2>

			<div className="flex overflow-x-auto mt-3 gap-5 pb-4">
				{/* Loop through each grocery item and render a GroceryCard */}
				{groceryGridCards.map((data) => (
					// Each item wrapper gets a key and prevents shrinking inside flex container
					<div key={data.id} className="snap-start flex-none">
						<GroceryCard data={data} />
					</div>
				))}
			</div>
		</section>
	);
};

export default GroceryItems;
