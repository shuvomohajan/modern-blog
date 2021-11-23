/* eslint-disable jsx-a11y/anchor-is-valid */


import Login from "./auth/Login";
import Register from "./auth/Register";
import Navbar from "./website/includes/Navbar";
import Dashboard from "./website/Dashboard";
import Profile from "./website/Profile";
import { Routes, Route } from "react-router-dom";
import Editor from "../components/website/Editor/Editor";
import PostDetails from "../components/website/Posts/PostDetails";
import Comments from "./website/Comments/Comments";

function App() {
  return (
    <div className="bg-gray-100 h-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Register />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/post-details/:postId" element={<PostDetails />}>
          <Route path="comments" element={<Comments />} />
        </Route>
      </Routes>
    </div>
  );

}

export default App;

