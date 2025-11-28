'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'

interface FeatureCardProps {
	title: string
	description: string
	href: string
	image: string
	icon?: React.ReactNode
	delay?: number
}

export function FeatureCard({
	title,
	description,
	href,
	image,
	icon,
	delay = 0,
}: FeatureCardProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{
				duration: 0.5,
				delay,
				ease: 'easeOut',
			}}
			className='group h-full'
		>
			<Link
				href={href}
				aria-label={`Apri la scheda di ${title}`}
				className='block h-full rounded-xl focus:outline-none focus:ring-2
					focus:ring-primary focus:ring-offset-2'
			>
				<div className='h-full'>
					<Card
						className='relative h-full min-h-[400px] overflow-hidden
							border-0 p-0 transition-all duration-300
							will-change-transform'
					>
						{/* Background Image */}
						<div className='absolute inset-0'>
							<motion.div
								className='h-full w-full'
								whileHover={{
									scale: 1.1,
								}}
								transition={{
									duration: 0.4,
									ease: 'easeOut',
								}}
							>
								<Image
									src={image}
									alt={`Immagine rappresentativa di ${title}`}
									fill
									sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
									className='object-cover'
								/>
							</motion.div>

							{/* Base Gradient Overlay */}
							<div
								className='absolute inset-0 bg-gradient-to-t
									from-black/90 via-black/60 to-black/30'
							/>
							{/* Red Gradient Overlay - Expands from bottom on hover */}
							<div
								className='absolute inset-0 bg-gradient-to-t
									from-primary/90 via-primary/70 to-primary/30
									origin-bottom scale-y-0 transition-transform
									duration-700 ease-in-out
									group-hover:scale-y-100'
							/>
						</div>

						{/* Content */}
						<div
							className='relative z-10 flex h-full flex-col
								justify-end p-6 text-white md:p-8'
						>
							{/* Icon */}
							{icon && (
								<div
									className='mb-auto inline-flex h-14 w-14
										items-center justify-center rounded-xl
										bg-white/10 text-white backdrop-blur-sm
										transition-all duration-300
										group-hover:bg-white group-hover:text-primary'
									aria-hidden='true'
								>
									{icon}
								</div>
							)}

							{/* Text Content - Bottom Left */}
							<div className='space-y-4 text-left'>
								<h3
									className='line-clamp-2 text-2xl font-bold
										leading-tight text-shadow-lg md:text-3xl'
									style={{
										textShadow: '0 2px 8px rgba(0,0,0,0.5)',
									}}
								>
									{title}
								</h3>
								<p
									className='line-clamp-3 text-sm leading-relaxed
										text-white/90 md:text-base'
									style={{
										textShadow: '0 1px 4px rgba(0,0,0,0.5)',
									}}
								>
									{description}
								</p>
							</div>
						</div>
					</Card>
				</div>
			</Link>
		</motion.div>
	)
}

