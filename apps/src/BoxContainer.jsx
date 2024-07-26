// eslint-disable-next-line react/prop-types
const BoxContainer = ({ children }) => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-700">
			{children}
		</div>
	);
};

export default BoxContainer;