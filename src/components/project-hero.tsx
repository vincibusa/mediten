'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, MapPin, Calendar, Building } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface ProjectHeroProps {
	title: string
	heroTitle?: string
	location: string
	client: string
	year?: string
	badges: string[]
	heroImage: string
	backLink: string
	backLinkText: string
}

export function ProjectHero({
	title,
	heroTitle,
	location,
	client,
	year,
	badges,
	heroImage,
	backLink,
	backLinkText,
}: ProjectHeroProps) {
	return (
		<section className='relative h-[60vh] min-h-[500px]'>
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
					flex-col justify-end px-4 pb-12'
			>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<Button
						asChild
						variant='ghost'
						className='mb-6 text-white hover:bg-white/10
							hover:text-white'
					>
						<Link href={backLink}>
							<ArrowLeft className='mr-2 h-4 w-4' />
							{backLinkText}
						</Link>
					</Button>

					<div className='mb-4 flex flex-wrap gap-2'>
						{badges.map((badge) => (
							<Badge
								key={badge}
								variant={
									badge === badges[0] ? 'secondary' : 'outline'
								}
								className={
									badge !== badges[0] ? 'text-white' : ''
								}
							>
								{badge}
							</Badge>
						))}
					</div>

					<h1
						className='mb-4 text-4xl font-bold text-white md:text-5xl
							lg:text-6xl'
					>
						{heroTitle || title}
					</h1>

					<div
						className='flex flex-wrap gap-4 text-sm text-white/90
							md:text-base'
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
