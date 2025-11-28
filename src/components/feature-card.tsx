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
							{/* Gradient Overlay - Red on Hover */}
							<motion.div
								className='absolute inset-0 bg-gradient-to-t
									from-black/90 via-black/60 to-black/30'
								whileHover={{
									backgroundColor: 'rgba(220, 38, 38, 0.85)', // Red overlay
									backgroundImage: 'none',
								}}
								transition={{ duration: 0.3 }}
							/>
						</div>

						{/* Content */}
						<div
							className='relative z-10 flex h-full flex-col
								justify-between p-6 text-white md:p-8'
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

							{/* Text Content */}
							<div className='mt-auto space-y-4'>
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

								{/* CTA Button - Visible on mobile */}
								<div
									className='opacity-0 transition-all duration-300
										group-hover:translate-y-0 group-hover:opacity-100
										md:translate-y-4'
								>
									<Button
										variant='secondary'
										className='mt-4 w-full sm:w-auto bg-white text-primary hover:bg-white/90'
										tabIndex={-1}
										aria-hidden='true'
									>
										Scopri di più
										<ArrowRight className='ml-2 h-4 w-4' />
									</Button>
								</div>
							</div>
						</div>
					</Card>
				</div>
			</Link>
		</motion.div>
	)
}

