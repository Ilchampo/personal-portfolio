import { ContentContext } from '../contexts/ContentContext';
import { useContext } from 'react';

export const useContent = () => {
	const context = useContext(ContentContext);

	if (!context) {
		throw new Error('useContent must be used within a ContentProvider');
	}

	return context;
};

export const usePersonal = () => useContent().personal;
export const useExperiences = () => useContent().experiences;
export const useProjects = () => useContent().projects;
