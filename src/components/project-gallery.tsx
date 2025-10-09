'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { AnimatedSection } from '@/components/animated-section'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import type {
	ProjectImage,
	ProjectGalleryCategory,
} from '@/data/projects'

interface ProjectGalleryProps {
	title?: string
	subtitle?: string
	images?: ProjectImage[]
	categories?: ProjectGalleryCategory[]
	backgroundColor?: 'default' | 'muted'
}

export function ProjectGallery({
	title = 'Gallery',
	subtitle,
	images,
	categories,
	backgroundColor = 'muted',
}: ProjectGalleryProps) {
	const bgClass =
		backgroundColor === 'muted' ? 'bg-muted/30' : ''

	if (categories && categories.length > 0) {
		return (
			<section className={`${bgClass} py-16 md:py-24`}>
				<div className='container mx-auto px-4'>
					<AnimatedSection className='mb-12'>
						<h2 className='mb-4 text-3xl font-bold'>{title}</h2>
						<Separator className='mb-4 w-24' />
						{subtitle && (
							<p className='text-muted-foreground'>{subtitle}</p>
						)}
					</AnimatedSection>

					<Tabs
						defaultValue={categories[0].title
							.toLowerCase()
							.split(' ')[0]}
						className='w-full'
					>
						<TabsList
							className='mb-8 grid w-full md:w-auto
								md:inline-grid'
							style={{
								gridTemplateColumns: `repeat(${categories.length}, minmax(0, 1fr))`,
							}}
						>
							{categories.map((category) => (
								<TabsTrigger
									key={category.title}
									value={category.title
										.toLowerCase()
										.split(' ')[0]}
								>
									{category.title}
								</TabsTrigger>
							))}
						</TabsList>

						{categories.map((category) => (
							<TabsContent
								key={category.title}
								value={category.title
									.toLowerCase()
									.split(' ')[0]}
								className='mt-0'
							>
								<div
									className='grid gap-6 md:grid-cols-2
										lg:grid-cols-3'
								>
									{category.images.map((image, idx) => (
										<motion.div
											key={idx}
											initial={{
												opacity: 0,
												scale: 0.9,
											}}
											whileInView={{
												opacity: 1,
												scale: 1,
											}}
											viewport={{ once: true }}
											transition={{
												duration: 0.5,
												delay: idx * 0.1,
											}}
											className='group relative aspect-[4/5]
												overflow-hidden rounded-lg'
										>
											<Image
												src={image.src}
												alt={image.alt}
												fill
												className='object-cover
													transition-transform
													duration-500
													group-hover:scale-110'
											/>
										</motion.div>
									))}
								</div>
							</TabsContent>
						))}
					</Tabs>
				</div>
			</section>
		)
	}

	if (images && images.length > 0) {
		return (
			<section className={`${bgClass} py-16 md:py-24`}>
				<div className='container mx-auto px-4'>
					<AnimatedSection className='mb-12'>
						<h2 className='mb-4 text-3xl font-bold'>{title}</h2>
						<Separator className='mb-4 w-24' />
						{subtitle && (
							<p className='text-muted-foreground'>{subtitle}</p>
						)}
					</AnimatedSection>

					<div
						className='grid gap-6 md:grid-cols-2'
					>
						{images.map((image, idx) => (
							<motion.div
								key={idx}
								initial={{ opacity: 0, scale: 0.9 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.5,
									delay: idx * 0.1,
								}}
								className='group relative aspect-video
									overflow-hidden rounded-lg'
							>
								<Image
									src={image.src}
									alt={image.alt}
									fill
									className='object-cover transition-transform
										duration-500 group-hover:scale-110'
								/>
							</motion.div>
						))}
					</div>
				</div>
			</section>
		)
	}

	return null
}
