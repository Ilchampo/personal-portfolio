import Wrapper from './Wrapper';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = props => {
	const { children } = props;

	return (
		<Wrapper>
			<Header />
			<main>{children}</main>
			<Footer />
		</Wrapper>
	);
};

export default Layout;
