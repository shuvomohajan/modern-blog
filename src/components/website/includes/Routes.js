import { useAuth } from "../../../context/AuthContext";
import { Navigate } from "react-router-dom";

export function PrivateRoute({ children }) {
	const { token } = useAuth();

	return token ? children : <Navigate to="/login" />;
}

export function PublicRoute({ children }) {
	const { token } = useAuth();

	return token ? <Navigate to="/" /> : children;
}
