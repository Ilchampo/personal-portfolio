import type { Project } from '../../interfaces/content.interface';

import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
import { ANIMATIONS } from '../../constants/animations';
import { motion } from 'motion/react';

interface ProjectCardProps {
	project: Project;
	index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = props => {
	const { project, index } = props;
	const isEven = index % 2 === 0;

	const cardVariants = isEven ? ANIMATIONS.projects.cardVariantsLeft : ANIMATIONS.projects.cardVariantsRight;

	return (
		<motion.div
			className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
			variants={cardVariants}
		>
			<motion.div className="md:w-1/2">
				<motion.div
					className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
					variants={ANIMATIONS.projects.imageVariants}
					whileHover="hover"
				>
					<img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
				</motion.div>
			</motion.div>
			<motion.div className="md:w-1/2" variants={ANIMATIONS.projects.contentVariants}>
				<h3 className="text-2xl font-montserrat font-semibold mb-3">{project.title}</h3>
				<p className="text-gray-600 mb-4">{project.description}</p>
				<motion.div className="flex flex-wrap gap-2 mb-6" variants={ANIMATIONS.projects.skillContainerVariants}>
					{project.skills.map((skill, idx) => (
						<motion.span
							key={idx}
							className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm"
							variants={ANIMATIONS.projects.skillVariants}
							whileHover={{
								scale: 1.1,
								backgroundColor: 'rgb(20 184 166)',
								color: 'rgb(255 255 255)',
								transition: { duration: 0.2 },
							}}
						>
							{skill}
						</motion.span>
					))}
				</motion.div>
				<motion.div className="flex gap-4" initial="hidden" whileInView="visible" viewport={{ once: true }}>
					{project.liveDemo && (
						<motion.a
							href={project.liveDemo}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 bg-primary-500 text-white px-4 py-2 rounded-md font-medium hover:bg-primary-600 transition-colors"
							variants={ANIMATIONS.projects.buttonVariants}
							whileHover="hover"
							whileTap="tap"
						>
							Live Demo
							<ExternalLinkIcon size={16} />
						</motion.a>
					)}
					{project.github && (
						<motion.a
							href={project.github}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 bg-ocean-600 text-white px-4 py-2 rounded-md font-medium hover:bg-ocean-700 transition-colors"
							variants={ANIMATIONS.projects.buttonVariants}
							whileHover="hover"
							whileTap="tap"
						>
							GitHub
							<GithubIcon size={16} />
						</motion.a>
					)}
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default ProjectCard;
