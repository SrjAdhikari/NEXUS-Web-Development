import DineItems from "./DineItems";
import FoodItems from "./FoodItems";
import GroceryItems from "./GroceryItems";
import Header from "./Header";

const Home = () => {
	return (
		<div>
			<Header />
			<FoodItems />
			<GroceryItems />
			<DineItems />
		</div>
	);
};

export default Home;
