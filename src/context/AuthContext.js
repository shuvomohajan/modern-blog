import React, { useState, useContext, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({children}) {
    const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);
	const [token, setToken] = useState("");
	const url = "http://modern-blog-backend.test/api/login";
	const navigate = useNavigate();

    useEffect(() => {
        const localToken = window.localStorage.getItem("token");
        setToken(localToken);
    }, [token, setToken])

    // login
    function login(email, password) {
        axios.post(url, {
			email: email,
			password: password
		})
        .then(res => {
            setError(false);
            setLoading(false);
            setToken(res.data.token);
            window.localStorage.setItem('token', res.data.token);

            navigate("/", {
				replace: true
			});
        })
        .catch(error => {
			setError(error);
		});
    }

    // logout
    function logout() {
        localStorage.removeItem('token');
        setToken("");

        navigate("/", {
            replace: true
        })
    }

    const value = {
        token,
        error,
        login,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}