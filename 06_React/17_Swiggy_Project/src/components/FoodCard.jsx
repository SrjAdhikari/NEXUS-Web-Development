const FoodCard = ({ data }) => {
	return (
		<div>
			{/* Wrapping the image in a clickable link */}
			<a href={data?.action?.link}>
				<img
					src={`https://media-assets.swiggy.com/swiggy/image/upload/${data?.imageId}`}
					alt="fooditem"
					className="w-full object-cover border rounded-lg hover:scale-95 transition duration-300"
				/>
			</a>
		</div>
	);
};

export default FoodCard;
