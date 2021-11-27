import Navbar from "./Navbar";

export default function WithNav({ children }) {
	return (
		<>
			<Navbar />
			{children}
		</>
	);
}
