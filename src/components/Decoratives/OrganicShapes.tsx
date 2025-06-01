import React from 'react';

import { motion } from 'motion/react';

interface OrganicShapesProps {
	className?: string;
	opacity?: number;
	count?: number;
	animated?: boolean;
	variant?: 'floating' | 'background';
}

const OrganicShapes: React.FC<OrganicShapesProps> = props => {
	const { className = '', opacity = 0.08, count = 4, animated = true, variant = 'background' } = props;

	const shapeVariants = {
		hidden: { scale: 0, opacity: 0, rotate: 0 },
		visible: (i: number) => ({
			scale: 1,
			opacity: opacity,
			rotate: Math.random() * 360,
			transition: {
				duration: 2 + i * 0.5,
				delay: i * 0.8,
				ease: [0.25, 0.46, 0.45, 0.94],
			},
		}),
	};

	const floatingAnimation = (i: number) => ({
		scale: [1, 1.1, 1],
		rotate: [0, 180, 360],
		x: [0, Math.random() * 50 - 25, 0],
		y: [0, Math.random() * 30 - 15, 0],
		transition: {
			duration: 15 + Math.random() * 10,
			repeat: Infinity,
			ease: 'easeInOut',
			delay: i * 2,
		},
	});

	const generateShapes = () => {
		return Array.from({ length: count }, (_, i) => {
			const size = variant === 'floating' ? Math.random() * 200 + 100 : Math.random() * 400 + 200;
			const x = Math.random() * 80 + 10; // 10-90%
			const y = Math.random() * 80 + 10; // 10-90%

			// Different organic shapes
			const shapes = [
				`M${size / 2},0 Q${size},${size / 3} ${size * 0.8},${size / 2} Q${size},${size * 0.8} ${size / 2},${size} Q${size / 4},${size * 0.9} 0,${size / 2} Q${size / 5},${size / 4} ${size / 2},0`,
				`M${size * 0.3},0 Q${size},${size * 0.2} ${size * 0.9},${size * 0.6} Q${size * 0.7},${size} ${size * 0.2},${size * 0.8} Q0,${size * 0.4} ${size * 0.3},0`,
				`M${size * 0.4},0 Q${size * 0.9},${size * 0.3} ${size},${size * 0.7} Q${size * 0.6},${size} ${size * 0.1},${size * 0.6} Q0,${size * 0.2} ${size * 0.4},0`,
			];

			const shapePath = shapes[i % shapes.length];
			const colors = [
				'rgb(20 184 166)', // primary-500
				'rgb(14 165 233)', // ocean-500
				'rgb(13 148 136)', // primary-600
				'rgb(2 132 199)', // ocean-600
			];

			return (
				<motion.div
					key={i}
					className="absolute"
					style={{
						left: `${x}%`,
						top: `${y}%`,
						width: `${size}px`,
						height: `${size}px`,
					}}
					custom={i}
					variants={animated ? shapeVariants : undefined}
					initial={animated ? 'hidden' : undefined}
					animate={animated ? 'visible' : undefined}
					whileInView={animated ? floatingAnimation(i) : undefined}
					viewport={{ once: false }}
				>
					<svg
						width="100%"
						height="100%"
						viewBox={`0 0 ${size} ${size}`}
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<motion.path d={shapePath} fill={`url(#gradient-${i})`} opacity={opacity} />
						<defs>
							<radialGradient id={`gradient-${i}`} cx="30%" cy="30%">
								<stop offset="0%" stopColor={colors[i % colors.length]} stopOpacity="0.3" />
								<stop offset="100%" stopColor={colors[i % colors.length]} stopOpacity="0.05" />
							</radialGradient>
						</defs>
					</svg>
				</motion.div>
			);
		});
	};

	return (
		<div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>{generateShapes()}</div>
	);
};

export default OrganicShapes;
