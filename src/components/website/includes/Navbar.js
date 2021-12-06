import { NavLink } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { MenuIcon } from "../../Icons";

/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Navbar() {
	const { token, logout } = useAuth();

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
									className= {
										({isActive}) => "py-4 px-2 text-gray-500 font-semibold" + (!isActive ? "" : " border-basic border-b-4")
									}
								>
									Home
								</NavLink>
								<NavLink
									to="/editor"
									className= {
										({isActive}) => "py-4 px-2 text-gray-500 font-semibold" + (!isActive ? "" : " border-basic border-b-4")
									}
								>
									Create Blog
								</NavLink>
								<NavLink
									to="/posts"
									className= {
										({isActive}) => "py-4 px-2 text-gray-500 font-semibold" + (!isActive ? "" : " border-basic border-b-4")
									}
								>
									My Blogs
								</NavLink>
								<NavLink
									to="/profile/:userId"
									className= {
										({isActive}) => "py-4 px-2 text-gray-500 font-semibold" + (!isActive ? "" : " border-basic border-b-4")
									}
								>
									Profile
								</NavLink>

								{!token ? (
									<NavLink
										to="/login"
										className="py-4 px-2 text-gray-500 font-semibold hover:text-basic transition duration-300"
									>
										Login/Signup
									</NavLink>
								) : (
									<div
										to="/login"
										className="py-4 px-2 text-gray-500 font-semibold hover:text-basic transition duration-300 cursor-pointer"
										onClick={logout}
									>
										Logout
									</div>
								)}
							</div>
						</div>

						{/* For mobile devices menu icon */}
						<div className="md:hidden flex items-center">
							<button className="outline-none mobile-menu-button">
								<MenuIcon />
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
