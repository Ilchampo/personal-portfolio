import { MenuIcon, XIcon } from 'lucide-react';
import { smoothScroll } from '../../utils/smoothScroll';
import { usePersonal } from '../../hooks/useContent';
import { useState } from 'react';

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const tabs = ['About', 'Experience', 'Projects', 'Contact'];
	const personal = usePersonal();

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const handleMobileClick = (tab: string) => {
		toggleMenu();
		smoothScroll(`#${tab.toLowerCase()}`);
	};

	const getLastTabClasses = (isLast: boolean): string => {
		return isLast
			? 'cursor-pointer font-medium text-white py-2 px-4 rounded font-medium transition-colors bg-gradient-to-r from-primary-500 to-ocean-500 hover:from-primary-600 hover:to-ocean-600'
			: 'cursor-pointer font-medium hover:text-primary-600 transition-colors';
	};

	return (
		<header className="sticky top-0 bg-white shadow-sm z-50">
			<div className="container mx-auto px-4 py-4 flex justify-between items-center">
				<div className="text-xl font-montserrat font-bold flex gap-2 items-center justify-center">
					<img src="/favicon.webp" alt={personal.name} className="w-10 h-10 rounded-full" />
					<div className="text-primary-600">{personal.name}</div>
				</div>
				<button
					type="button"
					onClick={toggleMenu}
					className="md:hidden focus:outline-none"
					aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
				>
					{isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
				</button>
				<nav className="hidden md:flex space-x-8">
					{tabs.map(item => (
						<button
							type="button"
							key={item}
							aria-label={item}
							className={getLastTabClasses(item === tabs[tabs.length - 1])}
							onClick={() => smoothScroll(`#${item.toLowerCase()}`)}
						>
							{item}
						</button>
					))}
				</nav>
				{isMenuOpen && (
					<div className="absolute top-full left-0 right-0 bg-white shadow-md md:hidden">
						<div className="flex flex-col p-4 space-y-4">
							{tabs.map(item => (
								<button
									type="button"
									key={item}
									aria-label={item}
									className="font-medium hover:text-primary-600 transition-colors"
									onClick={() => handleMobileClick(item.toLowerCase())}
								>
									{item}
								</button>
							))}
						</div>
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;
