export type ExperienceType = 'education' | 'work';

export interface Contact {
	email: string;
	linkedIn: string;
	github: string;
	calendly: string;
}

export interface Personal {
	name: string;
	position: string;
	startYear: number;
	profilePicture: string;
	curriculum: string;
	introdution: string;
	contact: Contact;
}

export interface Experience {
	type: ExperienceType;
	title: string;
	entity: string;
	startDate: string;
	endDate: string;
	description: string;
}

export interface Project {
	image: string;
	title: string;
	description: string;
	skills: string[];
	liveDemo?: string;
	github?: string;
}

export interface ContentData {
	personal: Personal;
	experiences: Experience[];
	projects: Project[];
}
