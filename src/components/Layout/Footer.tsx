import { usePersonal } from '../../hooks/useContent';

import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
	const { name, contact } = usePersonal();

	return (
		<footer className="bg-gradient-to-r from-ocean-900 to-primary-900 text-white py-8">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row justify-between items-center gap-6">
					<p className="text-gray-400 text-sm order-2 md:order-1">
						© {new Date().getFullYear()} {name}. All rights reserved.
					</p>

					<div className="flex items-center gap-4 order-1 md:order-2">
						<a
							href={contact.github}
							target="_blank"
							rel="noopener noreferrer"
							className="p-2 text-gray-400 hover:text-white hover:bg-ocean-800 rounded-lg transition-all duration-200"
							aria-label="GitHub Profile"
						>
							<Github size={20} />
						</a>
						<a
							href={contact.linkedIn}
							target="_blank"
							rel="noopener noreferrer"
							className="p-2 text-gray-400 hover:text-white hover:bg-ocean-800 rounded-lg transition-all duration-200"
							aria-label="LinkedIn Profile"
						>
							<Linkedin size={20} />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
