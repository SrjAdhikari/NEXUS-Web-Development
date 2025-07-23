const GroceryCard = ({ data }) => {
	return (
		<div className="max-w-xs text-center flex-none rounded-t-xl hover:scale-95 transition duration-300">
			{/* Clickable link wrapping the grocery image */}
			<a href={data?.action?.link}>
				<img
					src={`https://media-assets.swiggy.com/swiggy/image/upload/${data?.imageId}`}
					alt={data?.action?.text || "groceryitem"}
					className="w-full h-44 lg:h-56 object-cover"
				/>
			</a>

			{/* Container for the item title/text below the image */}
			<div className="mt-2">
				<span className="text-base lg:text-xl font-semibold text-gray-800 block">
					{data?.action?.text}
				</span>
			</div>
		</div>
	);
};

export default GroceryCard;
