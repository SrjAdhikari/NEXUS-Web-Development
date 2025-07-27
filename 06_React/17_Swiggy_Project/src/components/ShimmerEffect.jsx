const ShimmerCard = () => (
	<div className="w-full max-w-xs mx-auto rounded-xl shadow-md bg-gray-50 mb-6 animate-pulse">
		{/* Image placeholder */}
		<div className="w-full h-40 bg-gray-200 rounded-t-xl"></div>

		{/* Content placeholders */}
		<div className="p-4 space-y-3">
			<div className="h-4 bg-gray-200 rounded"></div>
			<div className="h-4 bg-gray-200 rounded"></div>
			<div className="h-4 bg-gray-200 rounded"></div>
		</div>
	</div>
);

const ShimmerEffect = () => {
	return (
		<div className="w-full lg:w-[80%] container mx-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-5 mt-20">
			{/* Render 12 shimmer cards in a responsive grid */}
			{Array.from({ length: 12 }).map((_, index) => (
				<ShimmerCard key={index} />
			))}
		</div>
	);
};

export default ShimmerEffect;
