import React from 'react';

import { motion } from 'motion/react';

interface FlowingCurvesProps {
	className?: string;
	opacity?: number;
	color?: string;
	animated?: boolean;
	variant?: 'subtle' | 'prominent';
}

const FlowingCurves: React.FC<FlowingCurvesProps> = props => {
	const { className = '', opacity = 0.15, color = 'rgb(14 165 233)', animated = true, variant = 'subtle' } = props;

	const curveVariants = {
		hidden: { pathLength: 0, opacity: 0 },
		visible: (i: number) => ({
			pathLength: 1,
			opacity: opacity,
			transition: {
				pathLength: { duration: 4 + i, ease: [0.25, 0.46, 0.45, 0.94] },
				opacity: { duration: 1, delay: i * 0.3 },
			},
		}),
	};

	const flowAnimation = {
		pathLength: [1, 0.8, 1],
		transition: {
			duration: 8,
			repeat: Infinity,
			ease: 'easeInOut',
		},
	};

	const strokeWidth = variant === 'prominent' ? 3 : 2;
	const curveOpacity = variant === 'prominent' ? opacity * 1.5 : opacity;

	return (
		<div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
			<motion.svg
				className="absolute inset-0 w-full h-full"
				viewBox="0 0 1200 800"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<motion.path
					d="M-100,200 Q300,150 600,300 Q900,450 1300,250"
					stroke={color}
					strokeWidth={strokeWidth}
					fill="none"
					opacity={curveOpacity}
					custom={0}
					variants={animated ? curveVariants : undefined}
					initial={animated ? 'hidden' : undefined}
					animate={animated ? 'visible' : undefined}
					whileInView={animated ? flowAnimation : undefined}
					viewport={{ once: false }}
				/>

				<motion.path
					d="M-50,400 Q400,320 700,480 Q1000,640 1250,420"
					stroke={color}
					strokeWidth={strokeWidth * 0.8}
					fill="none"
					opacity={curveOpacity * 0.7}
					custom={1}
					variants={animated ? curveVariants : undefined}
					initial={animated ? 'hidden' : undefined}
					animate={animated ? 'visible' : undefined}
					whileInView={animated ? flowAnimation : undefined}
					viewport={{ once: false }}
					transition={{ delay: 1 }}
				/>

				<motion.path
					d="M100,600 Q500,520 800,650 Q1100,780 1200,600"
					stroke={color}
					strokeWidth={strokeWidth * 0.6}
					fill="none"
					opacity={curveOpacity * 0.5}
					custom={2}
					variants={animated ? curveVariants : undefined}
					initial={animated ? 'hidden' : undefined}
					animate={animated ? 'visible' : undefined}
					whileInView={animated ? flowAnimation : undefined}
					viewport={{ once: false }}
					transition={{ delay: 2 }}
				/>
			</motion.svg>
		</div>
	);
};

export default FlowingCurves;
