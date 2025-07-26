import { Link } from "react-router";

const RestaurantCard = ({ data }) => {
	// Early return if restaurant data is invalid or missing
	if (!data?.info) return null;

	return (
		// Link to restaurant details page with dynamic route
		<Link to={`/city/delhi/${data.info.id}`}>
			{/* Card container with hover effects */}
			<div className="container mx-auto w-[90%] sm:w-full rounded-2xl overflow-hidden shadow-md hover:shadow-lg hover:scale-95 transition duration-300">
				{/* Restaurant image with dynamic URL */}
				<img
					src={`https://media-assets.swiggy.com/swiggy/image/upload/${data.info.cloudinaryImageId}`}
					alt={data.info.name}
					className="w-full h-40 object-cover"
					loading="lazy"
				/>

				{/* Restaurant information section */}
				<div className="p-4">
					{/* Restaurant name (truncated if too long) */}
					<h2 className="font-bold text-lg text-gray-800 truncate">
						{data.info.name}
					</h2>

					{/* Rating and delivery time information */}
					<div className="flex items-center gap-2 mt-1 text-sm text-gray-600">
						{/* Average rating with star icon */}
						<span className="flex items-center gap-1">
							<span className="text-yellow-500 font-semibold">★</span>
							{data.info.avgRating}
						</span>

						{/* Delivery time with separator */}
						<span className="font-medium">• {data.info.sla?.slaString}</span>
					</div>

					{/* Cuisine list (truncated if too long) */}
					<p className="text-gray-500 text-sm mt-1 truncate">
						{data.info.cuisines?.join(", ")}
					</p>

					{/* Restaurant location/area (truncated if too long) */}
					<p className="text-gray-400 text-sm truncate">{data.info.areaName}</p>
				</div>
			</div>
		</Link>
	);
};

export default RestaurantCard;
