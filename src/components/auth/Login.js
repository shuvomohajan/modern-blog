import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import LoginImg from "../../images/login.png";
import { EyeIcon, EyeCloseIcon, LockIcon, EmailIcon } from "../Icons";

export default function SignIn() {
	const [passwordShown, setPasswordShown] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const { loading, login } = useAuth();

	async function handleSubmit(e) {
		e.preventDefault();

		try {
			await login(email, password);
		} catch (err) {
			console.log(err);
		}
	}

	const shw_hidePassword = (e) => {
		e.preventDefault();
		setPasswordShown(!passwordShown);
	};

	return (
		<div className="flex justify-center h-screen max-h-full min-h-full w-full md:max-w-full mx-auto bg-white rounded-xl shadow-lg">
			<div className="flex flex-col justify-center md:pr-24 md:pl-16 lg:pr-0">
				<div className="mb-8">
					<h1 className="text-4xl font-semibold text-gradientPrimaryStart">
						Welcome{" "}
					</h1>
					<p className="text-sm font-semibold text-gray-400">
						Please Enter your Email & Password.
					</p>
				</div>

				<form className="" onSubmit={handleSubmit}>
					<div className="flex flex-col gap-5 justify-center">
						<div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
							<EmailIcon />

							<input
								type="text"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="pr-3 pl-10 py-2 font-semibold border-b-2 border-gray-400 placeholder-gray-500 text-black focus:outline-none"
								placeholder="Email"
							/>
						</div>

						<div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
							<LockIcon />

							<input
								className="pr-3 pl-10 py-2 font-semibold border-b-2 border-gray-400 placeholder-gray-500 text-black focus:outline-none"
								type={passwordShown ? "text" : "password"}
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								placeholder="Password"
							/>

							{!passwordShown ? (
								<div className="absolute right-0" onClick={shw_hidePassword}>
									<EyeCloseIcon />
								</div>
							) : (
								<div className="absolute right-0" onClick={shw_hidePassword}>
									<EyeIcon />
								</div>
							)}
						</div>

						<button
							className="text-center text-lg w-full bg-basic rounded-md text-white py-3 font-medium hover:bg-gradientPrimaryEnd"
							type="submit"
							disabled={loading}
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

			<div className="hidden h-32 md:h-auto md:w-3/4 lg:w-2/4 lg:h-auto md:block lg:block">
				<img
					src={LoginImg}
					alt="LoginPage"
					className="object-contain md:object-scale-down lg:object-scale-down h-full w-full"
				/>
			</div>
		</div>
	);
}
