import { useProjects } from '../../hooks/useContent';
import { ANIMATIONS } from '../../constants/animations';
import { motion } from 'motion/react';

import FlowingCurves from '../Decoratives/FlowingCurves';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
	const projects = useProjects();

	return (
		<section id="projects" className="relative py-20 bg-gradient-to-b from-white to-ocean-50 overflow-hidden">
			<FlowingCurves color="rgb(20 184 166)" opacity={0.35} variant="subtle" />
			<div className="container relative mx-auto px-4 z-10">
				<motion.div
					variants={ANIMATIONS.projects.sectionVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-100px' }}
				>
					<motion.h2
						className="text-3xl md:text-4xl font-montserrat font-bold mb-4 text-center text-ocean-800"
						variants={ANIMATIONS.projects.headerVariants}
					>
						Featured Projects
					</motion.h2>
					<motion.p
						className="text-gray-600 mb-12 text-center max-w-3xl mx-auto"
						variants={ANIMATIONS.projects.headerVariants}
					>
						Check out some recent projects I've worked on that really highlight my skills and expertise in
						creating modern web applications!
					</motion.p>
				</motion.div>
				<motion.div
					className="space-y-16"
					variants={ANIMATIONS.projects.containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-50px' }}
				>
					{projects.map((project, index) => (
						<ProjectCard key={index} project={project} index={index} />
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default ProjectsSection;
