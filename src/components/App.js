/* eslint-disable jsx-a11y/anchor-is-valid */

import Login from "./auth/Login";
import Register from "./auth/Register";
import Dashboard from "./website/Dashboard";
import Profile from "./website/Profile";
import { Routes, Route } from "react-router-dom";
import Editor from "../components/website/Editor/Editor";
import PostDetails from "../components/website/Posts/PostDetails";
import WithNav from "./website/includes/WithNav";

function App() {
	return (
		<div className="bg-gray-100 h-screen max-h-full overflow-scroll">
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/registration" element={<Register />} />
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
						<WithNav>
							<Profile />
						</WithNav>
					}
				/>
				<Route
					path="/editor"
					element={
						<WithNav>
							<Editor />
						</WithNav>
					}
				/>
				<Route
					path="/post-details/:postId"
					element={
						<WithNav>
							<PostDetails />
						</WithNav>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
