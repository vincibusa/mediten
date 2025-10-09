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
			whileHover={{
				y: -12,
				transition: {
					type: 'spring',
					stiffness: 300,
					damping: 20,
				},
			}}
			className='group h-full'
		>
			<Link
				href={href}
				aria-label={`Scopri di più su ${title}`}
				className='block h-full focus:outline-none focus:ring-2
					focus:ring-primary focus:ring-offset-2 rounded-xl'
			>
				<motion.div
					whileHover={{
						boxShadow:
							'0 25px 50px -12px rgba(0, 0, 0, 0.4), ' +
							'0 0 40px rgba(var(--primary-rgb), 0.3)',
					}}
					transition={{ duration: 0.3 }}
				>
					<Card
						className='relative h-full min-h-[400px] overflow-hidden
							border-2 p-0 transition-all duration-300
							hover:border-primary focus-within:border-primary
							will-change-transform'
					>
					{/* Background Image */}
					<div className='absolute inset-0'>
						<motion.div
							className='h-full w-full'
							whileHover={{
								scale: 1.15,
							}}
							transition={{
								duration: 0.6,
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
						{/* Gradient Overlay - Migliore contrasto */}
						<motion.div
							className='absolute inset-0 bg-gradient-to-t
								from-black/90 via-black/60 to-black/30'
							whileHover={{
								background: [
									'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.6), rgba(0,0,0,0.3))',
									'linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.75), rgba(0,0,0,0.4))',
								],
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
						<motion.h3
							className='line-clamp-2 text-2xl font-bold
								leading-tight text-shadow-lg md:text-3xl'
							style={{
								textShadow: '0 2px 8px rgba(0,0,0,0.5)',
							}}
							whileHover={{
								x: 8,
								scale: 1.02,
							}}
							transition={{
								type: 'spring',
								stiffness: 400,
								damping: 25,
							}}
						>
							{title}
						</motion.h3>
						<motion.p
							className='line-clamp-3 text-sm leading-relaxed
								text-white md:text-base'
							style={{
								textShadow: '0 1px 4px rgba(0,0,0,0.5)',
							}}
							whileHover={{
								opacity: 1,
								y: -2,
							}}
							transition={{ duration: 0.3 }}
						>
							{description}
						</motion.p>

						{/* CTA Button - Visible on mobile */}
						<motion.div
							initial={{ opacity: 0, y: 10 }}
							whileHover={{
								opacity: 1,
								y: 0,
								scale: 1.05,
							}}
							transition={{
								duration: 0.3,
								ease: 'easeOut',
							}}
							className='opacity-0 group-hover:opacity-100
								md:opacity-100 lg:opacity-0
								lg:group-hover:opacity-100'
						>
							<Button
								variant='secondary'
								className='mt-4 w-full sm:w-auto'
								tabIndex={-1}
								aria-hidden='true'
							>
								Scopri di più
								<motion.span
									className='ml-2 inline-block'
									whileHover={{ x: 5 }}
									transition={{
										type: 'spring',
										stiffness: 300,
									}}
								>
									<ArrowRight className='h-4 w-4' />
								</motion.span>
							</Button>
						</motion.div>
					</div>
					</div>
				</Card>
				</motion.div>
			</Link>
		</motion.div>
	)
}

