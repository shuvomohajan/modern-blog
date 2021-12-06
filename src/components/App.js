/* eslint-disable jsx-a11y/anchor-is-valid */

import Login from "./auth/Login";
import Register from "./auth/Register";
import Dashboard from "./website/Dashboard";
import Profile from "./website/Profile";
import { Routes, Route } from "react-router-dom";
import PostDetails from "../components/website/Posts/PostDetails";
import WithNav from "./website/includes/WithNav";
import { AuthProvider } from "../context/AuthContext";
import { PublicRoute, PrivateRoute } from "./website/includes/Routes";
import Editor from "../components/website/Editor/Editor";
import MyPosts from "../components/website/Posts/MyPosts";

function App() {
	return (
		<div className="bg-gray-100 h-screen max-h-full overflow-scroll">
			<AuthProvider>
				<Routes>
					<Route
						path="/login"
						element={
							<PublicRoute>
								<Login />
							</PublicRoute>
						}
					/>
					<Route
						path="/registration"
						element={
							<PublicRoute>
								<Register />
							</PublicRoute>
						}
					/>
					<Route
						path="/"
						element={
							<WithNav>
								<Dashboard />
							</WithNav>
						}
					/>
					<Route
						path="/profile/:userId"
						element={
							<PrivateRoute>
								<WithNav>
									<Profile />
								</WithNav>
							</PrivateRoute>
						}
					/>
					<Route
						path="/editor"
						element={
							<PrivateRoute>
								<WithNav>
									<Editor />
								</WithNav>
							</PrivateRoute>
						}
					/>
					<Route
						path="/posts"
						element={
							<PrivateRoute>
								<WithNav>
									<MyPosts />
								</WithNav>
							</PrivateRoute>
						}
					/>
					<Route
						path="/post-details/:postId"
						element={
							<PrivateRoute>
								<WithNav>
									<PostDetails />
								</WithNav>
							</PrivateRoute>
						}
					/>
				</Routes>
			</AuthProvider>
		</div>
	);
}

export default App;
