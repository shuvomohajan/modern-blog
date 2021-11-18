/* eslint-disable jsx-a11y/anchor-is-valid */
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
import Profile from "./Profile";

function App() {
	return (
		<div className="bg-gray-100 h-full">
			<Navbar />
      {/* <Profile /> */}
      <Dashboard />
		</div>
	);
}

export default App;
