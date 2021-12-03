export default function From({ children, ...rest }) {
	return (
		<form {...rest}>
			<div className="flex flex-col gap-5 justify-center">
                {children}
            </div>
		</form>
	);
}
