'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { MapPin, Calendar, Building } from 'lucide-react'

interface ProjectHeroProps {
	title: string
	heroTitle?: string
	location: string
	client: string
	year?: string
	heroImage: string
}

export function ProjectHero({
	title,
	heroTitle,
	location,
	client,
	year,
	heroImage,
}: ProjectHeroProps) {
	return (
		<section className='relative min-h-screen flex items-end overflow-hidden'>
			<Image
				src={heroImage}
				alt={title}
				fill
				className='object-cover'
				priority
			/>
			<div
				className='absolute inset-0 bg-gradient-to-t from-black/80
					via-black/40 to-black/20'
			/>

			<div
				className='container relative z-10 mx-auto flex h-full
					flex-col justify-end px-4 pb-16 md:pb-24'
			>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className='max-w-4xl'
				>
					<h1
						className='mb-6 text-4xl font-bold text-white md:text-5xl
							lg:text-6xl xl:text-7xl leading-tight'
						style={{
							textShadow: '2px 2px 4px rgba(0,0,0,0.3), 0 0 40px rgba(0,0,0,0.2)'
						}}
					>
						{heroTitle || title}
					</h1>

					<div
						className='flex flex-wrap gap-6 text-base text-white/90
							md:text-lg'
					>
						<div className='flex items-center gap-2'>
							<MapPin className='h-4 w-4' />
							{location}
						</div>
						<div className='flex items-center gap-2'>
							<Building className='h-4 w-4' />
							{client}
						</div>
						{year && (
							<div className='flex items-center gap-2'>
								<Calendar className='h-4 w-4' />
								{year}
							</div>
						)}
					</div>
				</motion.div>
			</div>
		</section>
	)
}
