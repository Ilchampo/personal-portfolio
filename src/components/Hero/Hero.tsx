import { ArrowDownIcon } from 'lucide-react';
import { usePersonal } from '../../hooks/useContent';
import { smoothScroll } from '../../utils/smoothScroll';

import HeroAvatar from './HeroAvatar';

const Hero = () => {
	const personal = usePersonal();
	const currentYear = new Date().getFullYear();
	const yearsOfExperience = currentYear - personal.startYear;

	return (
		<section
			id="about"
			className="relative pt-20 pb-32 bg-gradient-to-b from-white via-ocean-50 to-primary-50 overflow-hidden"
		>
			<div className="container relative mx-auto px-4">
				<div className="flex flex-col md:flex-row items-center justify-between gap-12">
					<div className="md:w-1/2">
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold mb-6">
							Hi, I'm <span className="text-primary-600">{personal.name}</span>
						</h1>
						<h2 className="text-2xl md:text-3xl font-montserrat font-medium text-ocean-700 mb-6">
							{personal.position}
						</h2>
						<p className="text-lg text-gray-600 mb-8 max-w-lg">{personal.introdution}</p>
						<button
							type="button"
							onClick={() => smoothScroll('#experience')}
							aria-label="View my work"
							aria-describedby="experience"
							className="inline-flex items-center gap-2 bg-primary-500 text-white px-6 py-3 rounded-md font-medium hover:bg-primary-600 transition-colors"
						>
							View my work
							<ArrowDownIcon size={18} />
						</button>
					</div>
					<div className="md:w-2/5">
						<HeroAvatar
							profilePicture={personal.profilePicture}
							name={personal.name}
							yearsOfExperience={yearsOfExperience}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
