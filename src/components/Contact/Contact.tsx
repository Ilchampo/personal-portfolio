import { CalendarIcon, MailIcon } from 'lucide-react';
import { usePersonal } from '../../hooks/useContent';

const ContactSection = () => {
	const { contact } = usePersonal();

	return (
		<section id="contact" className="relative py-20 bg-gradient-to-b from-ocean-50 to-primary-50 overflow-hidden">
			<div className="container relative mx-auto px-4">
				<div className="max-w-3xl mx-auto text-center">
					<h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4 text-ocean-800">
						Let's Connect
					</h2>
					<p className="text-gray-600 mb-8">
						Interested in working together? Schedule a meeting with me to discuss your project or just to
						say hello!
					</p>
					<div className="flex flex-col sm:flex-row gap-6 justify-center">
						<a
							href={contact.calendly}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center justify-center gap-2 bg-primary-500 text-white px-6 py-3 rounded-md font-medium hover:bg-primary-600 transition-colors"
						>
							<CalendarIcon size={20} />
							Schedule a Meeting
						</a>
						<a
							href={`mailto:${contact.email}`}
							className="inline-flex items-center justify-center gap-2 bg-ocean-100 text-ocean-800 px-6 py-3 rounded-md font-medium hover:bg-ocean-200 transition-colors"
						>
							<MailIcon size={20} />
							Send an Email
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
