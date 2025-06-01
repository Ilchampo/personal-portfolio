import React from 'react';

import { motion } from 'motion/react';

interface WavePatternProps {
	className?: string;
	opacity?: number;
	color?: string;
	animated?: boolean;
}

const WavePattern: React.FC<WavePatternProps> = props => {
	const { className = '', opacity = 0.1, color = 'currentColor', animated = true } = props;

	const waveVariants = {
		hidden: { pathLength: 0, opacity: 0 },
		visible: {
			pathLength: 1,
			opacity: opacity,
			transition: {
				pathLength: { duration: 3, ease: [0.25, 0.46, 0.45, 0.94] },
				opacity: { duration: 1, delay: 0.5 },
			},
		},
	};

	const floatingAnimation = {
		y: [0, -10, 0],
		transition: {
			duration: 6,
			repeat: Infinity,
			ease: 'easeInOut',
		},
	};

	return (
		<div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
			<motion.svg
				className="absolute inset-0 w-full h-full"
				viewBox="0 0 100 100"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio="none"
				animate={animated ? floatingAnimation : undefined}
			>
				<motion.path
					d="M-10,60 Q25,40 50,55 Q75,70 110,50 V100 H-10 V60Z"
					fill={color}
					opacity={opacity * 0.5}
					variants={animated ? waveVariants : undefined}
					initial={animated ? 'hidden' : undefined}
					animate={animated ? 'visible' : undefined}
				/>

				<motion.path
					d="M-10,70 Q33,45 67,65 Q83,80 110,60 V100 H-10 V70Z"
					fill={color}
					opacity={opacity * 0.7}
					variants={animated ? waveVariants : undefined}
					initial={animated ? 'hidden' : undefined}
					animate={animated ? 'visible' : undefined}
					transition={{ delay: 0.5 }}
				/>

				<motion.path
					d="M-10,80 Q17,55 33,75 Q50,90 67,70 Q83,50 110,75 V100 H-10 V80Z"
					fill={color}
					opacity={opacity}
					variants={animated ? waveVariants : undefined}
					initial={animated ? 'hidden' : undefined}
					animate={animated ? 'visible' : undefined}
					transition={{ delay: 1 }}
				/>
			</motion.svg>
		</div>
	);
};

export default WavePattern;
