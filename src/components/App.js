/* eslint-disable jsx-a11y/anchor-is-valid */
// import Footer from './Footer';
// import Header from './Header';
// import Register from './UserRegister';
// import SignIn from './UserSignIn';
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
// import Profile from "./Profile";

function App() {
	return (
		<div className="bg-gray-100 h-full">
			<Navbar />
      		{/* <Profile /> */}
      <Dashboard />
      {/* <Register/>
      <SignIn/> */}
		</div>
	);
}

export default App;
