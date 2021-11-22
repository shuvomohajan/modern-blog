import { NavLink } from "react-router-dom";

/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Navbar() {
	return (
		<header>
			<nav className="bg-white shadow-lg">
				<div className="max-w-6xl mx-auto px-4">
					<div className="flex justify-between">
						<div className="flex space-x-7">
							{/* logo */}
							<div>
								<NavLink to="/" className="flex items-center py-4 px-2">
									<span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gradientPrimaryStart to-gradientPrimaryEnd">
										LearnDEV
									</span>
								</NavLink>
							</div>
							{/* logo finish */}
						</div>
						<div className="md:flex items-center space-x-3">
							<div className="hidden md:flex items-center space-x-1">
								{/* nav items */}
								<NavLink 
									to="/"
									className="py-4 px-2 text-gray-500 border-b-4 border-basic font-semibold"
								>
									Home
								</NavLink>
								<NavLink
									to="/editor"
									className="py-4 px-2 text-gray-500 font-semibold hover:text-basic transition duration-300"
								>
									Create Blog
								</NavLink>
								<NavLink
									to="/profile/:userId"
									className="py-4 px-2 text-gray-500 font-semibold hover:text-basic transition duration-300"
								>
									Profile
								</NavLink>
								<NavLink
									to="/login"
									className="py-4 px-2 text-gray-500 font-semibold hover:text-basic transition duration-300"
								>
									Login/Signup
								</NavLink>
							</div>
						</div>

						{/* For mobile devices menu icon */}
						<div className="md:hidden flex items-center">
							<button className="outline-none mobile-menu-button">
								<svg
									class="w-6 h-6 text-gray-500"
									x-show="!showMenu"
									fill="none"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path d="M4 6h16M4 12h16M4 18h16"></path>
								</svg>
							</button>
						</div>
						{/* For mobile devices menu icon finish */}
					</div>

					{/* mobile menu item */}
					<div className="hidden">
						<ul className="">
							<li>
								<a
									href=""
									className="block text-sm px-2 py-4 text-white bg-basic font-semibold"
								>
									Home
								</a>
							</li>
							<li>
								<a
									href=""
									className="block text-sm px-2 py-4 hover:bg-basic hover:text-white transition duration-300"
								>
									Create Blog
								</a>
							</li>
							<li>
								<a
									href=""
									className="block text-sm px-2 py-4 hover:bg-basic hover:text-white transition duration-300"
								>
									Profile
								</a>
							</li>
							<li>
								<a
									href=""
									className="block text-sm px-2 py-4 hover:bg-basic hover:text-white transition duration-300"
								>
									Login/Signup
								</a>
							</li>
						</ul>
					</div>
					{/* mobile menu item finish */}
				</div>
			</nav>
		</header>
	);
}