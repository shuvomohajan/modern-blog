import { useState } from "react";
import { Link } from "react-router-dom";
import LoginImg from "../../images/login.png";
// import PassEye from "../../images/PassEye.png";
export default function SignIn() {
	const [passwordShown, setPasswordShown] = useState(false);

	const shw_hidePassword = (e) => {
		e.preventDefault();
		setPasswordShown(!passwordShown);
	};

	return (
		<div className="flex justify-center h-screen max-h-full min-h-full w-full md:max-w-full mx-auto bg-white rounded-xl shadow-lg">
			<div className="flex flex-col justify-center md:pr-24 md:pl-16 lg:pr-32">
				<div className="mb-8">
					<h1 className="text-4xl font-semibold text-gradientPrimaryStart">
						Welcome{" "}
					</h1>
					<p className="text-sm font-semibold text-gray-400">
						Please Enter your Email & Password.
					</p>
				</div>

				<form classname="">
					<div className="flex flex-col gap-5 justify-center">
						<div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6 absolute pointer-events-none"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
								/>
							</svg>
							<input
								type="text"
								className="pr-3 pl-10 py-2 font-semibold border-b-2 border-gray-400 placeholder-gray-500 text-black focus:outline-none"
								placeholder="Email"
							/>
						</div>

						<div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6 absolute pointer-events-none"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
								/>
							</svg>

							<input
								className="pr-3 pl-10 py-2 font-semibold border-b-2 border-gray-400 placeholder-gray-500 text-black focus:outline-none"
								type={passwordShown ? "text" : "password"}
								placeholder="Password"
							/>

							{!passwordShown ? (
								<div className="absolute right-0" onClick={shw_hidePassword}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
										/>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
										/>
									</svg>
								</div>
							) : (
								<div className="absolute right-0" onClick={shw_hidePassword}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
										/>
									</svg>
								</div>
							)}
						</div>

						<button
							className="text-center text-lg w-full bg-basic rounded-md text-white py-3 font-medium hover:bg-gradientPrimaryEnd"
							type="submit"
						>
							Login
						</button>
					</div>
				</form>
				<div className="flex items-center mt-3">
					<h1 className="text-gray-500 font-medium">Don't Have an Account?</h1>
					<Link
						to="/registration"
						className="font-medium text-gradientPrimaryEnd pl-4"
					>
						SignUp
					</Link>
				</div>
			</div>

			<div className="hidden h-32 md:h-auto md:w-3/4 md:block lg:block">
				<img
					src={LoginImg}
					alt="LoginPage"
					className="object-contain md:object-scale-down h-full w-full"
				/>
			</div>
		</div>
	);
}
