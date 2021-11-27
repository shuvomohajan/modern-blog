import { useState } from "react";
import { Link } from "react-router-dom";
import SignUp from "../../images/register.png";
import { Eye, EyeClose, Lock, Email, User } from "../Icons";

export default function Register() {
	const [passwordShown, setPasswordShown] = useState(false);

	const shw_hidePassword = (e) => {
		e.preventDefault();
		setPasswordShown(!passwordShown);
	};

	return (
		<div className="flex justify-center h-screen max-h-full min-h-full pr-12 pl-12 md:pr-0 md:pl-0 w-full md:max-w-full mx-auto bg-white rounded-xl shadow-lg">
			<div className="hidden h-32 md:h-auto md:w-3/4 lg:w-2/4 lg:h-auto md:block lg:block">
				<img
					src={SignUp}
					alt="LoginPage"
					className="object-contain md:object-scale-down h-full w-full"
				/>
			</div>

			<div className="flex flex-col justify-center md:pr-28 md:pl-10 lg:pr-32">
				<div className="mb-8">
					<h1 className="text-4xl font-semibold text-gradientPrimaryStart">
						Create Your Account
					</h1>
					<p className="text-sm font-semibold text-gray-400">
						It's quick & easy.
					</p>
				</div>

				<form classname="">
					<div className="flex flex-col gap-5 justify-center">
						<div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
							{User()}
							<input
								type="text"
								className="w-full pr-3 pl-10 py-2 font-semibold border-b-2 border-gray-400 placeholder-gray-500 text-black focus:outline-none"
								placeholder="Name"
							/>
						</div>

						<div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
							{Email()}
							<input
								type="text"
								className="w-full pr-3 pl-10 py-2 font-semibold border-b-2 border-gray-400 placeholder-gray-500 text-black focus:outline-none"
								placeholder="Email"
							/>
						</div>

						<div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
							{Lock()}

							<input
								className="w-full pr-3 pl-10 py-2 font-semibold border-b-2 border-gray-400 placeholder-gray-500 text-black focus:outline-none"
								type={passwordShown ? "text" : "password"}
								placeholder="Password"
							/>

							{!passwordShown ? (
								<div className="absolute right-0" onClick={shw_hidePassword}>
									{EyeClose()}
								</div>
							) : (
								<div className="absolute right-0" onClick={shw_hidePassword}>
									{Eye()}
								</div>
							)}
						</div>
						<div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
							{Lock()}

							<input
								className="w-full pr-3 pl-10 py-2 font-semibold border-b-2 border-gray-400 placeholder-gray-500 text-black focus:outline-none"
								type={passwordShown ? "text" : "password"}
								placeholder="Confirm Password"
							/>

							{!passwordShown ? (
								<div className="absolute right-0" onClick={shw_hidePassword}>
									{EyeClose()}
								</div>
							) : (
								<div className="absolute right-0" onClick={shw_hidePassword}>
									{Eye()}
								</div>
							)}
						</div>

						<button
							className="text-center text-lg w-full bg-basic rounded-md text-white py-3 font-medium hover:bg-gradientPrimaryEnd"
							type="submit"
						>
							SignUp
						</button>
					</div>
				</form>
				<div className="flex items-center mt-3">
					<h1 className="text-gray-500 font-medium">
						Already a ModernBlogger?
					</h1>
					<Link
						to="/login"
						className="font-medium text-gradientPrimaryEnd pl-4"
					>
						SignIn
					</Link>
				</div>
				<div className="">
					<p className="text-gray-500 text-xs mt-6 italic text-center">
						By Clicking Submit, you are agree to our
						<span className="pl-2 text-basic font-semibold cursor-pointer">
							Terms,
						</span>
						<span className="pl-2 pr-1 text-basic font-semibold cursor-pointer">
							Privacy Policy
						</span>{" "}
						and
						<span className="pl-2 text-basic font-semibold cursor-pointer">
							Content Policy.
						</span>
					</p>
				</div>
			</div>
		</div>
	);
}
