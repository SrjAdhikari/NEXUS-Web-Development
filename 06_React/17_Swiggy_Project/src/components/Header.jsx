import { Link } from "react-router";

const Header = () => {
	return (
		<header className="bg-[#ff5200]">
			{/* Top Nav */}
			<div className="flex items-center justify-between container mx-auto px-5 py-5 sm:px-3 lg:px-28 lg:py-10 ">
				<img
					src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"
					className="w-40 h-12 object-contain"
					alt="Swiggy logo"
				/>

				<div className="text-white text-sm font-semibold flex items-center gap-5 lg:gap-10">
					<a
						href="https://www.swiggy.com/corporate/"
						target="_blank"
						rel="noopener noreferrer"
						className="hidden sm:block lg:text-lg"
					>
						Swiggy Corporate
					</a>

					<a
						href="https://partner.swiggy.com/login#/swiggy"
						target="_blank"
						rel="noopener noreferrer"
						className="hidden sm:block lg:text-lg"
					>
						Partner with us
					</a>

					<a
						href="#"
						target="_blank"
						className="border border-white px-3 sm:px-4 py-2 sm:py-3 rounded-xl hover:bg-white hover:text-[#ff5200] transition hidden sm:block lg:text-lg"
					>
						Get the App
					</a>

					<a
						href="#"
						target="_blank"
						className="border border-black rounded-xl px-3 sm:px-4 py-2 sm:py-3 bg-black hover:bg-gray-900 transition lg:text-lg"
					>
						Sign in
					</a>
				</div>
			</div>

			{/* Hero Section */}
			<div className="relative p-7 sm:p-10">
				{/* Side Images */}
				<img
					src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
					className="hidden sm:block absolute left-0 top-0 h-[450px] w-[220px]"
					alt="Veggies Banner"
				/>

				<img
					src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
					className="hidden sm:block absolute right-0 top-0 h-[450px] w-[220px]"
					alt="Sushi Banner"
				/>

				<div className="container mx-auto">
					<p className="sm:max-w-[80%] lg:max-w-[60%] text-2xl sm:text-4xl lg:text-5xl font-bold container mx-auto text-center text-white">
						Order food & groceries. Discover best restaurants. Swiggy it!
					</p>

					<div className="flex flex-col justify-center sm:flex-row gap-5 mt-10 sm:mt-12 max-w-[90%] lg:max-w-[70%] container mx-auto">
						<input
							type="text"
							className="bg-white sm:w-[35%] px-4 py-3 rounded-xl focus:outline-none"
							placeholder="Enter your location"
						/>

						<input
							type="text"
							className="bg-white sm:w-[50%] px-4 py-3 rounded-xl focus:outline-none"
							placeholder="Search for a restaurant, cuisine, dish"
						/>
					</div>
				</div>
			</div>

			{/* Bottom Banner Links */}
			<div className="grid grid-cols-1 sm:grid-cols-3 container mx-auto sm:mt-10">
				<Link to="/restaurant">
					<img
						src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"
						alt="Restaurant Banner"
						className="min-h-64 object-cover rounded-xl"
					/>
				</Link>

				<Link to="#">
					<img
						src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png"
						alt="Meal Banner"
						className="min-h-64 object-cover rounded-xl "
					/>
				</Link>

				<Link to="#">
					<img
						src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"
						alt="Offer Banner"
						className="min-h-64 object-cover rounded-xl "
					/>
				</Link>
			</div>
		</header>
	);
};

export default Header;
