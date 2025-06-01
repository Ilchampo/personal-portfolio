import React from 'react';

import { motion } from 'motion/react';

interface HeroAvatarProps {
	profilePicture: string;
	name: string;
	yearsOfExperience: number;
}

const HeroAvatar: React.FC<HeroAvatarProps> = props => {
	const { profilePicture, name, yearsOfExperience } = props;

	return (
		<div className="relative">
			<motion.div
				className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl mx-auto"
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{
					duration: 0.6,
					delay: 0.2,
					ease: [0.25, 0.46, 0.45, 0.94],
				}}
			>
				<img src={profilePicture} alt={`Portrait of ${name}`} className="w-full h-full object-cover" />
			</motion.div>
			<motion.div
				className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 rounded-full shadow-md"
				initial={{ opacity: 0, y: 20, scale: 0.8 }}
				animate={{ opacity: 1, y: 0, scale: 1 }}
				transition={{
					duration: 0.6,
					delay: 0.6,
					ease: [0.34, 1.56, 0.64, 1],
				}}
				whileHover={{
					scale: 1.05,
					transition: { duration: 0.2 },
				}}
			>
				<p className="font-medium text-primary-600">{yearsOfExperience}+ Years Experience</p>
			</motion.div>
		</div>
	);
};

export default HeroAvatar;
