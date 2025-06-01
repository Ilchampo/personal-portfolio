import { DownloadIcon } from 'lucide-react';
import { useContent } from '../../hooks/useContent';

import ExperienceCard from './ExperienceCard';

const Experience = () => {
	const { personal, experiences } = useContent();

	const handleDownloadCV = () => {
		window.open(personal.curriculum, '_blank');
	};

	return (
		<section id="experience" className="relative py-20 bg-gradient-to-b from-primary-50 to-white overflow-hidden">
			<div className="container relative mx-auto px-4">
				<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
					<div>
						<h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4 text-ocean-800">
							My Experience & Education
						</h2>
						<p className="text-gray-600 max-w-2xl">
							Let's dive into the story of my career path and educational history that have molded me into
							the Full Stack Software Engineer I am today.
						</p>
					</div>
					<button
						type="button"
						onClick={handleDownloadCV}
						aria-label="Download CV"
						className="mt-6 md:mt-0 inline-flex items-center gap-2 bg-ocean-600 text-white px-5 py-2.5 rounded-md font-medium hover:bg-ocean-700 transition-colors"
					>
						Download CV
						<DownloadIcon size={18} />
					</button>
				</div>
				<div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-8 lg:gap-12">
					{experiences.map((experience, index) => (
						<ExperienceCard key={index} experience={experience} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Experience;
