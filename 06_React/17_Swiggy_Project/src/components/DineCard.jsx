const DineCard = ({ data }) => {
	return (
		<div className="max-w-xs flex-none rounded-t-xl overflow-x-auto shadow hover:shadow-lg transition duration-300">
			{/* Link to the restaurant page */}
			<a href={data?.cta?.link} target="_blank" rel="noopener noreferrer">
				<div className="relative">
					<img
						src={`https://media-assets.swiggy.com/swiggy/image/upload/${data?.info?.mediaFiles[0]?.url}`}
						alt={data?.info?.name}
						className="w-full h-40 lg:h-56 object-cover"
					/>

					{/* Gradient Overlay */}
					<div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent" />

					{/* Name and Rating Row */}
					<div className="absolute bottom-2 left-2 right-2 flex justify-between items-center z-10">
						<span className="text-white text-sm font-semibold truncate max-w-[70%]">
							{data?.info?.name}
						</span>

						<span className="text-white text-sm px-2 py-0.5 rounded-full whitespace-nowrap">
							⭐ {data?.info?.rating?.value}
						</span>
					</div>
				</div>
			</a>
		</div>
	);
};

export default DineCard;
