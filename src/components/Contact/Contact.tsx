import { CalendarIcon, MailIcon } from 'lucide-react';
import { usePersonal } from '../../hooks/useContent';
import { ANIMATIONS } from '../../constants/animations';
import { motion } from 'motion/react';

import WavePattern from '../Decoratives/WavePattern';

const ContactSection = () => {
	const { contact } = usePersonal();

	return (
		<section id="contact" className="relative py-20 bg-gradient-to-b from-ocean-50 to-primary-50 overflow-hidden">
			<WavePattern
				className="absolute inset-0 w-full h-full"
				opacity={0.12}
				color="rgb(14 165 233)"
				animated={false}
			/>
			<div className="container relative mx-auto px-4 z-10">
				<motion.div
					className="max-w-3xl mx-auto text-center"
					variants={ANIMATIONS.contact.sectionVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-100px' }}
				>
					<motion.div variants={ANIMATIONS.contact.containerVariants}>
						<motion.h2
							className="text-3xl md:text-4xl font-montserrat font-bold mb-4 text-ocean-800"
							variants={ANIMATIONS.contact.titleVariants}
						>
							Let's Connect
						</motion.h2>
						<motion.p className="text-gray-600 mb-8" variants={ANIMATIONS.contact.descriptionVariants}>
							Interested in working together? Schedule a meeting with me to discuss your project or just
							to say hello!
						</motion.p>
						<motion.div
							className="flex flex-col sm:flex-row gap-6 justify-center"
							variants={ANIMATIONS.contact.buttonContainerVariants}
						>
							<motion.a
								href={contact.calendly}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center justify-center gap-2 bg-primary-500 text-white px-6 py-3 rounded-md font-medium hover:bg-primary-600 transition-colors"
								variants={ANIMATIONS.contact.primaryButtonVariants}
								whileHover="hover"
								whileTap="tap"
							>
								<CalendarIcon size={20} />
								Schedule a Meeting
							</motion.a>
							<motion.a
								href={`mailto:${contact.email}`}
								className="inline-flex items-center justify-center gap-2 bg-ocean-600 text-white px-6 py-3 rounded-md font-medium hover:bg-primary-600 transition-colors"
								variants={ANIMATIONS.contact.secondaryButtonVariants}
								whileHover="hover"
								whileTap="tap"
							>
								<MailIcon size={20} />
								Send an Email
							</motion.a>
						</motion.div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default ContactSection;
