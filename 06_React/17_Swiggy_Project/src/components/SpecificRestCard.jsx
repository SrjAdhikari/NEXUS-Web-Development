import SpecificRestCardItem from "./SpecificRestCardItem";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const SpecificRestCard = ({ data, selectedFood }) => {
	// State for managing category expansion/collapse
	const [isOpen, setIsOpen] = useState(true);

	// Return null if no valid data is provided
	if (!data) return null;

	// Handle nested categories (recursive rendering)
	if ("categories" in data) {
		return (
			<div className="w-full my-6">
				<h2 className="text-xl sm:text-2xl font-bold mb-4">{data.title}</h2>

				{/* Render nested categories */}
				<div className="space-y-4">
					{data.categories.map((category) => (
						<SpecificRestCard
							key={category?.title}
							data={category}
							selectedFood={selectedFood}
						/>
					))}
				</div>
			</div>
		);
	}

	// Filter logic based on selected food type
	let itemsToShow = data?.itemCards || [];

	// Filter items based on selected food type
	if (selectedFood === "veg") {
		itemsToShow = itemsToShow.filter((item) => item?.card?.info?.isVeg);
	} else if (selectedFood === "non-veg") {
		itemsToShow = itemsToShow.filter((item) => !item?.card?.info?.isVeg);
	}

	return (
		<div className="w-full my-4 pb-4">
			{/* Collapsible header section */}
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="w-full flex justify-between items-center px-2 py-3 bg-gray-50 rounded hover:bg-gray-100 transition"
				aria-expanded={isOpen}
				aria-label={`${isOpen ? "Collapse" : "Expand"} ${data.title} category`}
			>
				{/* Category title */}
				<p className="text-lg sm:text-xl font-semibold text-gray-800">
					{data.title}
				</p>

				{/* Expand/collapse icon */}
				<span className="text-gray-600">
					{isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
				</span>
			</button>

			{/* Menu items (visible when expanded) */}
			{isOpen && (
				<div className="mt-4 space-y-6">
					{itemsToShow.length > 0 ? (
						// Render filtered menu items
						itemsToShow.map((item) => (
							<SpecificRestCardItem
								key={item?.card?.info?.id}
								item={item?.card?.info}
							/>
						))
					) : (
						// Show message when no items match filter
						<p className="text-gray-500 text-sm px-2">
							No items available for selected filter.
						</p>
					)}
				</div>
			)}
		</div>
	);
};

export default SpecificRestCard;
