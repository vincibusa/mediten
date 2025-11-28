'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import { AnimatedSection } from '@/components/animated-section'
import { Separator } from '@/components/ui/separator'
import type { ProjectFeature } from '@/data/projects'

interface ProjectFeaturesProps {
	title: string
	subtitle?: string
	features: ProjectFeature[]
}

export function ProjectFeatures({
	title,
	subtitle,
	features,
}: ProjectFeaturesProps) {
	const hasDescriptions = features.some((f) => f.description)

	return (
		<section className='bg-muted/30 py-20 md:py-32'>
			<div className='container mx-auto px-4'>
				<AnimatedSection className='mb-12'>
					<h2 className='mb-4 text-3xl font-bold md:text-4xl'>{title}</h2>
					<Separator className='mb-4 w-24' />
					{subtitle && (
						<p className='text-muted-foreground'>{subtitle}</p>
					)}
				</AnimatedSection>

				<div
					className={
						hasDescriptions
							? 'grid gap-6 md:grid-cols-2'
							: 'grid gap-4 sm:grid-cols-2'
					}
				>
					{features.map((feature, index) => (
						<motion.div
							key={feature.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{
								duration: 0.5,
								delay: index * 0.1,
							}}
							className={
								hasDescriptions
									? 'rounded-lg border bg-card p-6'
									: 'flex items-start gap-3 rounded-lg border bg-card p-4'
							}
						>
							{hasDescriptions ? (
								<>
									<div className='mb-3 flex items-center gap-3'>
										<CheckCircle
											className='h-5 w-5 text-primary'
										/>
										<h3 className='text-lg font-bold'>
											{feature.title}
										</h3>
									</div>
									{feature.description && (
										<p className='text-muted-foreground'>
											{feature.description}
										</p>
									)}
								</>
							) : (
								<>
									<div
										className='mt-1 h-2 w-2 flex-shrink-0
											rounded-full bg-accent'
									/>
									<span className='font-medium'>
										{feature.title}
									</span>
								</>
							)}
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}
