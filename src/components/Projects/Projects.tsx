import { useProjects } from '../../hooks/useContent';

import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
	const projects = useProjects();

	return (
		<section id="projects" className="relative py-20 bg-gradient-to-b from-white to-ocean-50 overflow-hidden">
			<div className="container relative mx-auto px-4">
				<h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4 text-center text-ocean-800">
					Featured Projects
				</h2>
				<p className="text-gray-600 mb-12 text-center max-w-3xl mx-auto">
					Check out some recent projects I've worked on that really highlight my skills and expertise in
					creating modern web applications!
				</p>
				<div className="space-y-16">
					{projects.map((project, index) => (
						<ProjectCard key={index} project={project} index={index} />
					))}
				</div>
			</div>
		</section>
	);
};

export default ProjectsSection;
