// import logo from '../images/icons/logo_transparent.png';

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
                                <a href="" className="flex items-center py-4 px-2">
                                    {/* <img src={logo} alt="logo" className="h-32 w-32" /> */}
                                    <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gradientPrimaryStart to-gradientPrimaryEnd">
                                        LearnDEV
                                    </span>
                                </a>
                            </div>
                            {/* logo finish */}
                        </div>
                        <div className="md:flex items-center space-x-3">
                            <div className="hidden md:flex items-center space-x-1">
                                {/* nav items */}
                                <a href="" className="py-4 px-2 text-gray-500 border-b-4 border-basic font-semibold">Home</a>
                                <a href="" className="py-4 px-2 text-gray-500 font-semibold hover:text-basic transition duration-300">Create Blog</a>
                                <a href="" className="py-4 px-2 text-gray-500 font-semibold hover:text-basic transition duration-300">Profile</a> 
                                <a href="" className="py-4 px-2 text-gray-500 font-semibold hover:text-basic transition duration-300">Login/Signup</a>
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
                                <a href="" className="block text-sm px-2 py-4 text-white bg-basic font-semibold">Home</a>
                            </li>
                            <li>
                                <a href="" className="block text-sm px-2 py-4 hover:bg-basic hover:text-white transition duration-300">Create Blog</a>
                            </li>
                            <li>
                                <a href="" className="block text-sm px-2 py-4 hover:bg-basic hover:text-white transition duration-300">Profile</a>
                            </li>
                            <li>
                                <a href="" className="block text-sm px-2 py-4 hover:bg-basic hover:text-white transition duration-300">Login/Signup</a>
                            </li>
                        </ul>
                    </div>
                    {/* mobile menu item finish */}
                </div>
            </nav>
        </header>
    );
}

// linear-gradient(rgb(91, 36, 122), rgb(27, 206, 223))
// linear-gradient(rgb(101, 121, 155), rgb(94, 37, 99))
// rgb(108, 52, 156)