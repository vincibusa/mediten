'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

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
				aria-label={`Scopri di più su ${title}`}
				className='block h-full focus:outline-none focus:ring-2
					focus:ring-primary focus:ring-offset-2 rounded-xl'
			>
				<Card
					className='relative h-full min-h-[400px] overflow-hidden
						border-2 p-0 transition-all duration-300
						hover:border-primary hover:shadow-2xl
						focus-within:border-primary focus-within:shadow-2xl'
				>
					{/* Background Image */}
					<div className='absolute inset-0'>
						<Image
							src={image}
							alt={`Immagine rappresentativa di ${title}`}
							fill
							sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
							className='object-cover transition-transform
								duration-700 group-hover:scale-110
								motion-reduce:transition-none
								motion-reduce:group-hover:scale-100'
						/>
						{/* Gradient Overlay - Migliore contrasto */}
						<div
							className='absolute inset-0 bg-gradient-to-t
								from-black/90 via-black/60 to-black/30
								transition-opacity duration-300
								group-hover:from-black/95
								group-hover:via-black/70'
						/>
					</div>

					{/* Content */}
					<div
						className='relative z-10 flex h-full flex-col
							justify-between p-6 text-white md:p-8'
					>
						{/* Icon */}
						{icon && (
							<motion.div
								className='mb-auto inline-flex h-14 w-14
									items-center justify-center rounded-xl
									bg-white/10 text-white backdrop-blur-sm
									transition-all duration-300
									group-hover:bg-primary
									group-hover:text-primary-foreground
									motion-reduce:transition-none'
								whileHover={{
									scale: 1.1,
									rotate: 5,
								}}
								transition={{
									type: 'spring',
									stiffness: 300,
									duration: 0.3,
								}}
								aria-hidden='true'
							>
								{icon}
							</motion.div>
						)}

					{/* Text Content */}
					<div className='mt-auto space-y-4'>
						<h3
							className='text-2xl font-bold leading-tight
								text-shadow-lg transition-transform
								duration-300 group-hover:translate-x-1
								md:text-3xl motion-reduce:transition-none
								motion-reduce:group-hover:translate-x-0'
							style={{
								textShadow: '0 2px 8px rgba(0,0,0,0.5)',
							}}
						>
							{title}
						</h3>
						<p
							className='line-clamp-3 text-sm leading-relaxed
								text-white transition-all duration-300
								group-hover:text-white md:text-base
								motion-reduce:transition-none'
							style={{
								textShadow: '0 1px 4px rgba(0,0,0,0.5)',
							}}
						>
							{description}
						</p>

						{/* CTA Button - Visible on mobile */}
						<Button
							variant='secondary'
							className='mt-4 w-full opacity-0 transition-all
								duration-300 group-hover:opacity-100
								sm:w-auto md:opacity-100 lg:opacity-0
								lg:group-hover:opacity-100
								motion-reduce:opacity-100'
							tabIndex={-1}
							aria-hidden='true'
						>
							Scopri di più
							<motion.span
								className='ml-2 inline-block'
								initial={{ x: 0 }}
								whileHover={{ x: 5 }}
								transition={{
									type: 'spring',
									stiffness: 300,
								}}
							>
								<ArrowRight className='h-4 w-4' />
							</motion.span>
						</Button>
					</div>
					</div>
				</Card>
			</Link>
		</motion.div>
	)
}

