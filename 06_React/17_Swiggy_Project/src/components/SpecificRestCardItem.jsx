import { addItem, incrementItem, decrementItem } from "../store/Slicer";
import { useDispatch, useSelector } from "react-redux";

const SpecificRestCardItem = ({ item }) => {
	// Get current cart items from Redux store
	const cartItems = useSelector((state) => state.cartSlicer.items);
	const dispatch = useDispatch();

	// Find if this item exists in cart and get its quantity
	const element = cartItems.find((cartItem) => cartItem.id === item.id);
	const count = element ? element.quantity : 0;

	// Handler for adding new item to cart
	const handleAddItems = () => {
		dispatch(addItem(item));
	};

	// Handler for increasing item quantity
	const handleIncrementItems = () => {
		dispatch(incrementItem(item));
	};

	// Handler for decreasing item quantity
	const handleDecrementItems = () => {
		dispatch(decrementItem(item));
	};

	return (
		<>
			<div className="flex justify-between items-start gap-6 mb-6 p-4 border border-gray-200 rounded-xl shadow-sm bg-white hover:shadow-md transition">
				{/* Left Section - Item Information */}
				<div className="flex-1 space-y-2">
					<p className="text-lg font-semibold text-gray-800">{item?.name}</p>

					{/* Item Price - handles both defaultPrice and price fields */}
					<p className="text-lg font-semibold">
						₹
						{"defaultPrice" in item
							? item?.defaultPrice / 100
							: item?.price / 100}
					</p>

					{/* Rating Information */}
					<div className="flex items-center space-x-2 text-sm text-gray-600">
						{item?.ratings?.aggregatedRating?.rating && (
							<span className="text-green-500 font-medium">
								⭐ {item.ratings.aggregatedRating.rating}
							</span>
						)}

						{item?.ratings?.aggregatedRating?.ratingCountV2 && (
							<span>・({item.ratings.aggregatedRating.ratingCountV2})</span>
						)}
					</div>

					{/* Item Description */}
					<p className="text-gray-500 text-sm">{item?.description}</p>
				</div>

				{/* Right Section - Image and Quantity Controls */}
				<div className="relative w-48 h-40 rounded-lg overflow-hidden flex-shrink-0">
					{/* Item Image */}
					<img
						src={`https://media-assets.swiggy.com/swiggy/image/upload/${item?.imageId}`}
						alt={item?.name}
						className="object-cover w-full h-full rounded-xl shadow"
					/>

					{/* Conditional Render: Add Button or Quantity Controls */}
					{count === 0 ? (
						// Show ADD button when item not in cart
						<button
							onClick={handleAddItems}
							className="absolute bottom-2 left-1/2 -translate-x-1/2 px-6 py-2 bg-green-500 text-white rounded-full shadow hover:bg-green-600 transition"
							aria-label={`Add ${item.name} to cart`}
						>
							ADD
						</button>
					) : (
						// Show quantity controls when item is in cart
						<div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white border border-green-500 rounded-full flex items-center gap-3 px-4 py-1 shadow">
							<button
								onClick={handleDecrementItems}
								className="text-green-600 hover:text-green-800 text-lg font-bold"
								aria-label="Decrease quantity"
							>
								−
							</button>
							<span className="font-semibold text-green-700">{count}</span>
							<button
								onClick={handleIncrementItems}
								className="text-green-600 hover:text-green-800 text-lg font-bold"
								aria-label="Increase quantity"
							>
								＋
							</button>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default SpecificRestCardItem;
