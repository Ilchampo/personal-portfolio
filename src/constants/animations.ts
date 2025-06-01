export const ANIMATIONS = {
	hero: {
		containerVariants: {
			hidden: { opacity: 0 },
			visible: {
				opacity: 1,
				transition: {
					duration: 0.6,
					staggerChildren: 0.2,
				},
			},
		},
		itemVariants: {
			hidden: { opacity: 0, y: 30 },
			visible: {
				opacity: 1,
				y: 0,
				transition: {
					duration: 0.6,
					ease: [0.25, 0.46, 0.45, 0.94],
				},
			},
		},
		buttonVariants: {
			hidden: { opacity: 0, y: 20 },
			visible: {
				opacity: 1,
				y: 0,
				transition: {
					duration: 0.6,
					delay: 0.8,
					ease: [0.25, 0.46, 0.45, 0.94],
				},
			},
			hover: {
				scale: 1.05,
				transition: { duration: 0.2 },
			},
			tap: {
				scale: 0.95,
			},
		},
	},
	experience: {
		sectionVariants: {
			hidden: { opacity: 0 },
			visible: {
				opacity: 1,
				transition: {
					duration: 0.6,
					staggerChildren: 0.1,
				},
			},
		},
		headerVariants: {
			hidden: { opacity: 0, y: 40 },
			visible: {
				opacity: 1,
				y: 0,
				transition: {
					duration: 0.7,
					ease: [0.25, 0.46, 0.45, 0.94],
				},
			},
		},
		buttonVariants: {
			hidden: { opacity: 0, x: 40 },
			visible: {
				opacity: 1,
				x: 0,
				transition: {
					duration: 0.6,
					delay: 0.2,
					ease: [0.25, 0.46, 0.45, 0.94],
				},
			},
			hover: {
				scale: 1.05,
				transition: { duration: 0.2 },
			},
			tap: {
				scale: 0.95,
			},
		},
		cardContainerVariants: {
			hidden: { opacity: 0 },
			visible: {
				opacity: 1,
				transition: {
					duration: 0.4,
					staggerChildren: 0.15,
				},
			},
		},
		cardVariants: {
			hidden: {
				opacity: 0,
				y: 60,
				scale: 0.9,
			},
			visible: {
				opacity: 1,
				y: 0,
				scale: 1,
				transition: {
					duration: 0.6,
					ease: [0.25, 0.46, 0.45, 0.94],
				},
			},
			hover: {
				y: -8,
				scale: 1.02,
				transition: {
					duration: 0.3,
					ease: [0.25, 0.46, 0.45, 0.94],
				},
			},
		},
	},
	projects: {
		sectionVariants: {
			hidden: { opacity: 0 },
			visible: {
				opacity: 1,
				transition: {
					duration: 0.6,
					staggerChildren: 0.2,
				},
			},
		},
		headerVariants: {
			hidden: { opacity: 0, y: 40 },
			visible: {
				opacity: 1,
				y: 0,
				transition: {
					duration: 0.7,
					ease: [0.25, 0.46, 0.45, 0.94],
				},
			},
		},
		containerVariants: {
			hidden: { opacity: 0 },
			visible: {
				opacity: 1,
				transition: {
					duration: 0.4,
					staggerChildren: 0.3,
				},
			},
		},
		cardVariantsLeft: {
			hidden: {
				opacity: 0,
				x: -80,
				y: 40,
			},
			visible: {
				opacity: 1,
				x: 0,
				y: 0,
				transition: {
					duration: 0.8,
					ease: [0.25, 0.46, 0.45, 0.94],
				},
			},
		},
		cardVariantsRight: {
			hidden: {
				opacity: 0,
				x: 80,
				y: 40,
			},
			visible: {
				opacity: 1,
				x: 0,
				y: 0,
				transition: {
					duration: 0.8,
					ease: [0.25, 0.46, 0.45, 0.94],
				},
			},
		},
		imageVariants: {
			hidden: {
				opacity: 0,
				scale: 1.1,
			},
			visible: {
				opacity: 1,
				scale: 1,
				transition: {
					duration: 0.6,
					delay: 0.2,
					ease: [0.25, 0.46, 0.45, 0.94],
				},
			},
			hover: {
				scale: 1.05,
				transition: {
					duration: 0.4,
					ease: [0.25, 0.46, 0.45, 0.94],
				},
			},
		},
		contentVariants: {
			hidden: {
				opacity: 0,
				y: 30,
			},
			visible: {
				opacity: 1,
				y: 0,
				transition: {
					duration: 0.6,
					delay: 0.3,
					ease: [0.25, 0.46, 0.45, 0.94],
				},
			},
		},
		skillVariants: {
			hidden: {
				opacity: 0,
				scale: 0.8,
			},
			visible: {
				opacity: 1,
				scale: 1,
				transition: {
					duration: 0.4,
					ease: [0.25, 0.46, 0.45, 0.94],
				},
			},
		},
		skillContainerVariants: {
			hidden: { opacity: 0 },
			visible: {
				opacity: 1,
				transition: {
					duration: 0.3,
					delay: 0.4,
					staggerChildren: 0.05,
				},
			},
		},
		buttonVariants: {
			hidden: {
				opacity: 0,
				y: 20,
			},
			visible: {
				opacity: 1,
				y: 0,
				transition: {
					duration: 0.5,
					delay: 0.6,
					ease: [0.25, 0.46, 0.45, 0.94],
				},
			},
			hover: {
				scale: 1.05,
				transition: { duration: 0.2 },
			},
			tap: {
				scale: 0.95,
			},
		},
	},
	contact: {
		sectionVariants: {
			hidden: { opacity: 0 },
			visible: {
				opacity: 1,
				transition: {
					duration: 0.6,
					staggerChildren: 0.2,
				},
			},
		},
		containerVariants: {
			hidden: { opacity: 0, scale: 0.9 },
			visible: {
				opacity: 1,
				scale: 1,
				transition: {
					duration: 0.8,
					ease: [0.25, 0.46, 0.45, 0.94],
				},
			},
		},
		titleVariants: {
			hidden: { opacity: 0, y: 40 },
			visible: {
				opacity: 1,
				y: 0,
				transition: {
					duration: 0.7,
					ease: [0.25, 0.46, 0.45, 0.94],
				},
			},
		},
		descriptionVariants: {
			hidden: { opacity: 0, y: 30 },
			visible: {
				opacity: 1,
				y: 0,
				transition: {
					duration: 0.6,
					delay: 0.1,
					ease: [0.25, 0.46, 0.45, 0.94],
				},
			},
		},
		buttonContainerVariants: {
			hidden: { opacity: 0 },
			visible: {
				opacity: 1,
				transition: {
					duration: 0.4,
					delay: 0.3,
					staggerChildren: 0.1,
				},
			},
		},
		primaryButtonVariants: {
			hidden: {
				opacity: 0,
				y: 30,
				scale: 0.9,
			},
			visible: {
				opacity: 1,
				y: 0,
				scale: 1,
				transition: {
					duration: 0.6,
					ease: [0.34, 1.56, 0.64, 1],
				},
			},
			hover: {
				scale: 1.05,
				y: -3,
				boxShadow: '0 10px 25px -5px rgba(20, 184, 166, 0.4)',
				transition: {
					duration: 0.3,
					ease: [0.25, 0.46, 0.45, 0.94],
				},
			},
			tap: {
				scale: 0.95,
				y: 0,
			},
		},
		secondaryButtonVariants: {
			hidden: {
				opacity: 0,
				y: 30,
				scale: 0.9,
			},
			visible: {
				opacity: 1,
				y: 0,
				scale: 1,
				transition: {
					duration: 0.6,
					ease: [0.25, 0.46, 0.45, 0.94],
				},
			},
			hover: {
				scale: 1.05,
				y: -2,
				transition: {
					duration: 0.3,
					ease: [0.25, 0.46, 0.45, 0.94],
				},
			},
			tap: {
				scale: 0.95,
				y: 0,
			},
		},
	},
};
