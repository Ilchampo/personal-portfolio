interface WrapperProps {
	children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = props => {
	const { children } = props;

	return <div className="font-inter bg-gradient-to-b from-ocean-50 to-white text-gray-900">{children}</div>;
};

export default Wrapper;
