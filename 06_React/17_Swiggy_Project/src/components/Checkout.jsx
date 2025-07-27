import { useSelector } from "react-redux";

const Checkout = () => {
	// Get cart items from Redux store
	const cartItems = useSelector((state) => state.cartSlicer.items);

	// Calculate total amount
	const totalAmount = cartItems.reduce(
		(acc, item) => acc + (item.defaultPrice / 100) * item.quantity,
		0
	);

	return (
		<div className="max-w-2xl mx-auto p-5 bg-white shadow-xl rounded-xl">
			<h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-3">
				🛒 Checkout Summary
			</h2>

			{/* Conditional rendering based on cart content */}
			{cartItems.length === 0 ? (
				<p className="text-gray-500 text-center">Your cart is empty.</p>
			) : (
				<div className="space-y-6">
					{/* Render each cart item */}
					{cartItems.map((item) => (
						<div
							key={item.id}
							className="border p-4 rounded-lg shadow transition"
						>
							{/* Item name */}
							<h3 className="text-lg font-semibold text-gray-800">
								{item.name}
							</h3>

							{/* Individual item price */}
							<p className="text-gray-600 text-sm">
								Price: ₹{item.defaultPrice / 100}
							</p>

							{/* Item quantity */}
							<p className="text-gray-600 text-sm">Quantity: {item.quantity}</p>

							{/* Item subtotal (price * quantity) */}
							<p className="text-gray-800 font-medium mt-2">
								Total: ₹{(item.defaultPrice / 100) * item.quantity}
							</p>
						</div>
					))}

					{/* Grand Total */}
					<div className="text-right mt-6 pt-4 border-t">
						<h3 className="text-xl font-semibold text-gray-800">
							Grand Total: ₹{totalAmount.toFixed(2)}
						</h3>
					</div>
				</div>
			)}
		</div>
	);
};

export default Checkout;
