import type { Experience, ExperienceType } from '../../interfaces/content.interface';

import React from 'react';

import { BookOpenIcon, BriefcaseIcon } from 'lucide-react';

interface ExperienceCardProps {
	experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = props => {
	const { experience } = props;

	const renderExperienceIcon = (type: ExperienceType): React.ReactNode => {
		return type === 'education' ? <BookOpenIcon className="w-6 h-6" /> : <BriefcaseIcon className="w-6 h-6" />;
	};

	return (
		<div className="bg-white p-6 rounded-lg shadow-sm border border-primary-100 hover:shadow-md transition-shadow">
			<div className="flex items-center mb-4">
				<div className="mr-4 p-2 bg-primary-50 rounded-full text-primary-600">
					{renderExperienceIcon(experience.type)}
				</div>
				<div>
					<h3 className="font-montserrat font-semibold text-lg">{experience.title}</h3>
					<p className="text-gray-600">{experience.entity}</p>
				</div>
			</div>
			<div className="mb-4 inline-block px-3 py-1 bg-ocean-100 text-ocean-800 text-sm rounded-full">
				{experience.startDate} - {experience.endDate}
			</div>
			<p className="text-gray-600">{experience.description}</p>
		</div>
	);
};

export default ExperienceCard;
