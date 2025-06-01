export const smoothScroll = (target: string): void => {
	const targetElement = document.querySelector(target);

	if (targetElement) {
		targetElement.scrollIntoView({ behavior: 'smooth' });
	}
};
