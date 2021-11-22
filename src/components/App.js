/* eslint-disable jsx-a11y/anchor-is-valid */

import Login from "./auth/Login";
import Register from "./auth/Register";
import Navbar from "./website/includes/Navbar";
import Dashboard from "./website/Dashboard";
import Profile from "./website/Profile";

function App() {
  return (
    <div className="bg-gray-100 h-full">
      {/* <Navbar /> */}
      {/* <Profile /> */}
      {/* <Dashboard /> */}
      <Register />
      <Login />
    </div>
  );

}

export default App;
