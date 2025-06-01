import React from 'react';

interface HeroAvatarProps {
	profilePicture: string;
	name: string;
	yearsOfExperience: number;
}

const HeroAvatar: React.FC<HeroAvatarProps> = props => {
	const { profilePicture, name, yearsOfExperience } = props;

	return (
		<div className="relative">
			<div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl mx-auto">
				<img src={profilePicture} alt={`Portrait of ${name}`} className="w-full h-full object-cover" />
			</div>
			<div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 rounded-full shadow-md">
				<p className="font-medium text-primary-600">{yearsOfExperience}+ Years Experience</p>
			</div>
		</div>
	);
};

export default HeroAvatar;
