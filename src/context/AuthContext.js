import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext();

const INITIAL_STATE = {
	name: "",
	email: "",
	id: "",
};

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const LOGIN_URL = "http://modern-blog-backend.test/api/login";
	const REGISTER_URL = "http://modern-blog-backend.test/api/register";
	const LOGOUT_URL = "http://modern-blog-backend.test/api/logout";
	const PROFILE_URL = "http://modern-blog-backend.test/api/profile";

	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);
	const [token, setToken] = useState("");
	const [userState, setUserState] = useState(INITIAL_STATE);

	const navigate = useNavigate();

	useEffect(() => {
		if (token !== "") {
			axios
				.get(PROFILE_URL, {
					headers: {
						Authorization: "Bearer " + token,
					},
				})
				.then((res) => {
					const data = res.data.data;
					setUserState({
						name: data.name,
						email: data.email,
						id: data.id,
					});

					window.localStorage.setItem("token", token);
				})
				.catch((err) => {
					setError(err);
					console.log(err);
					localStorage.removeItem("token");
				});
		}
		const getToken = window.localStorage.getItem("token");
		setToken(getToken ? getToken : "");
	}, [token]);

	// SignUp
	function signUp(value) {
		axios
			.post(REGISTER_URL, {
				name: value.name,
				email: value.email,
				password: value.password,
				password_confirmation: value.confirmPassword,
			})
			.then((res) => {
				login(value.email, value.password);
				console.log(res.data.message);
			})
			.catch((err) => {
				setError(err);
			});
	}

	// login
	function login(email, password) {
		axios
			.post(LOGIN_URL, {
				email: email,
				password: password,
			})
			.then((res) => {
				setError(false);
				setLoading(false);
				setToken(res.data.token);

				navigate("/", {
					replace: true,
				});
			})
			.catch((error) => {
				setError(error);
			});
	}

	// logout
	function logout() {
		axios
			.post(
				LOGOUT_URL,
				{},
				{
					headers: { Authorization: "Bearer " + token },
				}
			)
			.then((res) => {
				console.log(res.data.message);
				localStorage.removeItem("token");
				setToken("");

				navigate("/", {
					replace: true,
				});
			})
			.catch((err) => console.log(err));
	}

	const value = {
		token,
		userState,
		error,
		signUp,
		login,
		logout,
	};

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
}
