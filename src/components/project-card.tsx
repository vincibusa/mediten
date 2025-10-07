'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface ProjectCardProps {
	title: string
	description?: string
	category: string
	image?: string
	href: string
	delay?: number
}

export function ProjectCard({
	title,
	description,
	category,
	image,
	href,
	delay = 0,
}: ProjectCardProps) {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.9 }}
			whileInView={{ opacity: 1, scale: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay }}
			whileHover={{ y: -8, transition: { duration: 0.2 } }}
		>
			<Card
				className='group h-full overflow-hidden
					transition-all hover:shadow-xl'
			>
				{image && (
					<div
						className='relative h-64 w-full overflow-hidden
							bg-muted'
					>
						<Image
							src={image}
							alt={title}
							fill
							className='object-cover transition-transform
								duration-300 group-hover:scale-110'
						/>
						<div
							className='absolute inset-0 bg-gradient-to-t
								from-black/60 to-transparent'
						/>
						<Badge className='absolute right-4 top-4'>
							{category}
						</Badge>
					</div>
				)}
				<CardHeader>
					<CardTitle className='line-clamp-2'>{title}</CardTitle>
				</CardHeader>
				{description && (
					<CardContent>
						<p
							className='line-clamp-3 text-sm
								text-muted-foreground'
						>
							{description}
						</p>
						<Button asChild variant='link' className='mt-4 p-0'>
							<Link href={href}>
								Visualizza progetto
								<ArrowRight className='ml-2 h-4 w-4' />
							</Link>
						</Button>
					</CardContent>
				)}
			</Card>
		</motion.div>
	)
}

