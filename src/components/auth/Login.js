import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import LoginImg from "../../images/login.png";
import { LockIcon, EmailIcon } from "../Icons";
import TextInput from "../TextInput";
import Form from "../Form";

export default function SignIn() {
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

				<Form onSubmit={handleSubmit}>
					<TextInput
						icon={<EmailIcon />}
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Email"
					/>

					<TextInput
						icon={<LockIcon />}
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="Password"
					/>

					<button
						className="text-center text-lg w-full bg-basic rounded-md text-white py-3 font-medium hover:bg-gradientPrimaryEnd"
						type="submit"
						disabled={loading}
					>
						Login
					</button>
				</Form>
				
				<div className="flex items-center mt-3">
					<p className="text-gray-500 font-medium">Don't Have an Account?</p>
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
