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
				viewBox="0 0 1200 800"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				animate={animated ? floatingAnimation : undefined}
			>
				<motion.path
					d="M0,400 Q300,350 600,400 T1200,400 V800 H0 V400Z"
					fill={color}
					opacity={opacity * 0.5}
					variants={animated ? waveVariants : undefined}
					initial={animated ? 'hidden' : undefined}
					animate={animated ? 'visible' : undefined}
				/>

				<motion.path
					d="M0,450 Q400,380 800,450 T1200,450 V800 H0 V450Z"
					fill={color}
					opacity={opacity * 0.7}
					variants={animated ? waveVariants : undefined}
					initial={animated ? 'hidden' : undefined}
					animate={animated ? 'visible' : undefined}
					transition={{ delay: 0.5 }}
				/>

				<motion.path
					d="M0,500 Q200,460 400,500 T800,500 T1200,500 V800 H0 V500Z"
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
