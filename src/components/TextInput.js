import { useState } from "react";
import { EyeIcon, EyeCloseIcon } from "./Icons";

export default function TextInput({ icon, type, placeholder, ...rest }) {
	const [showPassword, setShowPassword] = useState(false);
	const toggleShowPassword = (e) => {
		e.preventDefault();
		setShowPassword(!showPassword);
	};

	return (
		<div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
            {icon}
			<input
				type={type === "password" && showPassword ? "text" : type}
				className="w-full pr-3 pl-10 py-2 font-semibold border-b-2 border-gray-400 placeholder-gray-500 text-black focus:outline-none"
				placeholder={placeholder}
				{...rest}
			/>
			{type === "password" &&
				(!showPassword ? (
					<div className="absolute right-0" onClick={toggleShowPassword}>
						<EyeCloseIcon />
					</div>
				) : (
					<div className="absolute right-0" onClick={toggleShowPassword}>
						<EyeIcon />
					</div>
				))}
		</div>
	);
}
