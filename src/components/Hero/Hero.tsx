import { ArrowDownIcon } from 'lucide-react';
import { smoothScroll } from '../../utils/smoothScroll';
import { usePersonal } from '../../hooks/useContent';
import { ANIMATIONS } from '../../constants/animations';
import { motion } from 'motion/react';

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
					<motion.div
						className="md:w-1/2"
						variants={ANIMATIONS.hero.containerVariants}
						initial="hidden"
						animate="visible"
					>
						<motion.h1
							className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold mb-6"
							variants={ANIMATIONS.hero.itemVariants}
						>
							Hi, I'm <span className="text-primary-600">{personal.name}</span>
						</motion.h1>
						<motion.h2
							className="text-2xl md:text-3xl font-montserrat font-medium text-ocean-700 mb-6"
							variants={ANIMATIONS.hero.itemVariants}
						>
							{personal.position}
						</motion.h2>
						<motion.p
							className="text-lg text-gray-600 mb-8 max-w-lg"
							variants={ANIMATIONS.hero.itemVariants}
						>
							{personal.introdution}
						</motion.p>
						<motion.button
							type="button"
							onClick={() => smoothScroll('#experience')}
							aria-label="View my work"
							aria-describedby="experience"
							className="inline-flex items-center gap-2 bg-primary-500 text-white px-6 py-3 rounded-md font-medium hover:bg-primary-600 transition-colors"
							variants={ANIMATIONS.hero.buttonVariants}
							initial="hidden"
							animate="visible"
							whileHover="hover"
							whileTap="tap"
						>
							View my work
							<ArrowDownIcon size={18} />
						</motion.button>
					</motion.div>
					<motion.div
						className="md:w-2/5"
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							duration: 0.8,
							delay: 0.4,
							ease: [0.25, 0.46, 0.45, 0.94],
						}}
					>
						<HeroAvatar
							profilePicture={personal.profilePicture}
							name={personal.name}
							yearsOfExperience={yearsOfExperience}
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
