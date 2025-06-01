import type { Project } from '../../interfaces/content.interface';

import { ExternalLinkIcon, GithubIcon } from 'lucide-react';

interface ProjectCardProps {
	project: Project;
	index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = props => {
	const { project, index } = props;
	const isEven = index % 2 === 0;

	return (
		<div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
			<div className="md:w-1/2">
				<div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
					<img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
				</div>
			</div>
			<div className="md:w-1/2">
				<h3 className="text-2xl font-montserrat font-semibold mb-3">{project.title}</h3>
				<p className="text-gray-600 mb-4">{project.description}</p>
				<div className="flex flex-wrap gap-2 mb-6">
					{project.skills.map((skill, idx) => (
						<span key={idx} className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">
							{skill}
						</span>
					))}
				</div>
				<div className="flex gap-4">
					{project.liveDemo && (
						<a
							href={project.liveDemo}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 bg-primary-500 text-white px-4 py-2 rounded-md font-medium hover:bg-primary-600 transition-colors"
						>
							Live Demo
							<ExternalLinkIcon size={16} />
						</a>
					)}
					{project.github && (
						<a
							href={project.github}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 bg-ocean-600 text-white px-4 py-2 rounded-md font-medium hover:bg-ocean-700 transition-colors"
						>
							GitHub
							<GithubIcon size={16} />
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
