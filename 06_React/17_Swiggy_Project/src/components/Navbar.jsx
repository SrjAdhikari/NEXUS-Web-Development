import { useSelector } from "react-redux";
import { Link } from "react-router";

const Navbar = () => {
	const cartItems = useSelector((state) => state.cartSlicer.itemCount);

	return (
		<header className="bg-white shadow-md sticky top-0 z-50">
			<nav className="max-w-7xl mx-auto flex items-center justify-between px-10 py-4 rounded-lg">
				{/* Logo */}
				<Link to="/" className="text-3xl font-bold text-[#ff5200]">
					Swiggy
				</Link>

				{/* Links */}
				<ul className="flex items-center space-x-6 text-gray-800 font-medium">
					<li>
						<Link
							to="/"
							className="hover:text-[#ff5200] hidden sm:block transition-colors duration-300"
						>
							Home
						</Link>
					</li>

					<li>
						<Link
							to="/checkout"
							className="flex items-center px-4 py-2 rounded-full hover:bg-[#e64a00] hover:text-white transition duration-300"
						>
							<span className="mr-2">🛒</span>
							<span>Cart ({cartItems})</span>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
